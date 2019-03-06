import React, { Component } from 'react';
import { connect } from 'dva';


class index extends Component {

    handleChangeThemeButtonOnClick = (themeIndex) => {
        // const link = document.createElement('link');
        // link.rel = 'stylesheet';
        // link.href = `http://nodiotqiniu.nodiot.cn/fusiondesgindemo/static/theme/theme-${themeIndex}/dist/next.css`;
        // document.head.appendChild(link);
        // link.onload = () => {
        //     this.removeTheme();
        // }

        if (this.props.changeTheme) {
            this.props.changeTheme({
                themeIndex,
                otherParam:"1100011"
            });
        }

    }

    removeTheme = () => {
        let currentLink = "";
        this.remove(currentLink);
    }

    remove = el => el && el.parentNode.removeChild(el)

    render() {
        return (
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingRight: 12
            }}>
                <div
                    style={{
                        width: 20, height: 20, backgroundColor: "#7DBAFF", cursor: "pointer", borderRadius: 4
                    }}
                    onClick={() => { this.handleChangeThemeButtonOnClick(6151) }}></div>

                <div
                    style={{
                        width: 20, height: 20, backgroundColor: "#FF6A00", marginLeft: 12, cursor: "pointer", borderRadius: 4
                    }}
                    onClick={() => { this.handleChangeThemeButtonOnClick(1) }}></div>
                <div
                    style={{
                        width: 20, height: 20, backgroundColor: "#5584FF", marginLeft: 12, cursor: "pointer", borderRadius: 4
                    }}
                    onClick={() => { this.handleChangeThemeButtonOnClick(2) }}></div>
                <div
                    style={{
                        width: 20, height: 20, backgroundColor: "#8272EC", marginLeft: 12, cursor: "pointer", borderRadius: 4
                    }}
                    onClick={() => { this.handleChangeThemeButtonOnClick(3) }}></div>
                <div
                    style={{
                        width: 20, height: 20, backgroundColor: "#01C1B2", marginLeft: 12, cursor: "pointer", borderRadius: 4
                    }}
                    onClick={() => { this.handleChangeThemeButtonOnClick(4) }}></div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        changeTheme: (payload) => dispatch({ type: 'theme/changeTheme', payload })
    }
}

export default connect(null, mapDispatchToProps)(index);