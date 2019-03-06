

const getDefaultTheme = ()=>{
    let localThemeIndex = localStorage.getItem("themeIndex");
    if(localThemeIndex !== "6151"){
        handleChangeTheme(localThemeIndex);
    }
    return localThemeIndex;
}

const handleChangeTheme = (themeIndex) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `http://nodiotqiniu.nodiot.cn/fusiondesgindemo/static/theme/theme-${themeIndex}/dist/next.css`;
    document.head.appendChild(link);
    link.onload = () => {
        removeTheme();
    }
}

const removeTheme = () => {
    let currentLink = "";
    remove(currentLink);
}

const remove = el => el && el.parentNode.removeChild(el)

export default{
    namespace:"theme",
    state:{
        themeIndex:getDefaultTheme()?getDefaultTheme():6151
    },
    reducers:{
        'changeTheme'(state,action){
            handleChangeTheme(action.payload.themeIndex);
            localStorage.setItem('themeIndex', String(action.payload.themeIndex));
            return Object.assign({}, state, {
                themeIndex:action.payload.themeIndex
            });
        }
    }
}