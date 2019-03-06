import React, { Component } from 'react';
import { Icon } from '@alifd/next';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import './index.scss';
import logo from '../../logo.svg';
import ThemeChange from '../ThemeChange';

class index extends Component {

    static propTypes = {
        SideBarWidth: PropTypes.number.isRequired,
        SideBarFoldWidth: PropTypes.number.isRequired
    }

    handleMenuFoldButtonOnClick = () => {
        this.props.sideMenuFold();
    }

    render() {
        return (
            <div className="container">
                <div style={{ display: "flex", width: this.props.menuFold ? this.props.SideBarFoldWidth : this.props.SideBarWidth, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <img src={logo} className="logo" alt="logo" />
                    <span style={{ flex: 1, color: "#23282c", fontSize: 18, fontWeight: "bolder", display: this.props.menuFold ? "none" : "block", textAlign: "left" }}>节点互联</span>
                </div>
                <div style={{ display: "flex", flex: 1 }}>
                    <Icon type={this.props.menuFold ? "menu-fold" : "menu-unfold"} size="small" style={{ color: "#666666", cursor: "pointer" }} onClick={this.handleMenuFoldButtonOnClick} />
                </div>

                <ThemeChange
                    style={{
                        width: 240,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        paddingRight: 12
                    }} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuFold: state.layout.menuFold
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sideMenuFold: (payload) => dispatch({ type: 'layout/sideMenuFold', payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);