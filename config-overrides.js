const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const ThemePlugin = require('@alifd/next-theme-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const os = require('os');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

// 获取 package.json 中的主题配置文件
let theme = '';
try {
    const pkg = require('./package.json');
    if (pkg && pkg.buildConfig && pkg.buildConfig.theme) {
        theme = pkg.buildConfig.theme;
    }
} catch (e) {
    console.log("read theme config error ", e);
    console.log(`请在 package.json 中配置
    buildConfig:{
        theme: '@alife/dpl-主题包名'
    }`);
}

let scssLoader = [
    {
        loader: 'css-loader',
        options: {
            minimize: true,
            sourceMap: false,
        },
    },
    // {
    //     loader: require.resolve('postcss-loader'),//'postcss-loader',
    //     options: {
    //         indent: 'postcss',
    //         plugins: () => [
    //             require('autoprefixer')(),
    //         ],
    //         sourceMap: false,
    //     },
    // },
    {
        loader: 'sass-loader',
        options: {
            sourceMap: false,
        },
    },
];

const addThemeLoader = config => {

    if (theme) {
        console.log(`NOTICE: 注入 ${theme}/variables.scss 到每个 scss 文件`.green);
        scssLoader.push({
            loader: '@alifd/next-theme-loader',
            options: {
                theme
            },
        });
    }

    config.module.rules[2].oneOf[5] = {
        test: /\.(scss|sass)$/,
        exclude: /\.module\.(scss|sass)$/,
        use: [
            MiniCssExtractPlugin.loader,
            'happypack/loader?id=scss',
        ],
    };

    config.module.rules[2].oneOf[6] = {
        test: /\.module\.(scss|sass)$/,
        use: [
            MiniCssExtractPlugin.loader,
            'happypack/loader?id=scss',
        ],
    };

    return config;
}

const addHappyPackPlugin = config => {
    config.plugins.push(
        new HappyPack({
            id: 'scss',
            threadPool: happyThreadPool,
            loaders: scssLoader,
        })
    )

    return config;
}

const addThemePlugin = config => {
    config.plugins.push(new ThemePlugin({ theme }))
    return config
}

const addMiniCssExtractPlugin = config => {
    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            chunkFilename: '[name].bundle.css',
        })
    )
    return config;
}

const overridePublicPath = config =>{
    // console.log(config);
    if(config.mode === "production"){
        // config.publicPath = "http://nodiotqiniu.nodiot.cn/safemgr/";
        config.output.publicPath = "http://nodiotqiniu.nodiot.cn/fusiondesgindemo/"
    }
    // console.log(config);
    // config.publicPath = "dfd";
    
    return config;
}



module.exports = override(
    overridePublicPath,
    addThemeLoader,
    addHappyPackPlugin,
    addThemePlugin,
    addMiniCssExtractPlugin,
    fixBabelImports('import', {
        libraryName: '@alifd/next',
        libraryDirectory: 'es',
        style: true
    }),
);