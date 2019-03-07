import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, Button, Icon } from '@alifd/next';
import "./index.scss";


export default class index extends Component {

    static propTypes = {


        hasMask: PropTypes.bool,
        target: PropTypes.any,
        title: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string,
        type:PropTypes.string, //primary empty
        cancelButtonText: PropTypes.string,
        okButtonText: PropTypes.string,
        onOpened: PropTypes.func,
        onClosed: PropTypes.func,
        onOk: PropTypes.func,//parent component return a promise, success后 关闭modal
    }

    static defaultProps = {
        hasMask: true,
        target: "root",
        title: "",
        width: "400",
        height: "320",
        type:"",
        cancelButtonText: "取消",
        okButtonText: "确定"
    }

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            loading: false,
            cancelButtonDisable: false,
            okButtonDisable: false,
            closeButtonDisable: false
        }

        console.log(this.props);
    }

    openModal = () => {
        this.setState({
            visible: true
        });
    }

    closeModal = () => {
        this.setState({
            visible: false
        }, () => {
            if (this.props.onClosed) {
                this.props.onClosed();
            }
        });
    }

    handleCloseButtonOnClick = () => {
        if (!this.state.closeButtonDisable) {
            this.closeModal();
        }
    }

    handleOkButtonOnClick = () => {
        if (this.props.onOk) {
            this.setState({
                loading: true,
                cancelButtonDisable: true,
                okButtonDisable: true,
                closeButtonDisable: true
            });
            this.props.onOk().then((data) => {
                this.setState({
                    loading: false,
                    cancelButtonDisable: false,
                    okButtonDisable: false,
                    closeButtonDisable: false
                }, () => {
                    this.handleCloseButtonOnClick();
                });

            }).catch((error) => {
                console.log("......... 发生错误:", error.message);
                this.setState({
                    loading: false,
                    cancelButtonDisable: false,
                    okButtonDisable: false,
                    closeButtonDisable: false
                });
            });
        }
    }

    render() {

        let modalWidth = "";
        let modalHeight = "";
        if(this.props.width.indexOf("%") >0 || this.props.width.indexOf("px") >0 || this.props.width.indexOf("PX") >0){
            modalWidth = this.props.width;   
        }
        else{
            modalWidth = this.props.width+"px";
        }

        if(this.props.height.indexOf("%") >0 || this.props.height.indexOf("px") >0 || this.props.height.indexOf("PX") >0){
            modalHeight = this.props.height;   
        }
        else{
            modalHeight = this.props.height+"px";
        }


        return (
            <Overlay
                visible={this.state.visible}
                align="cc cc"
                hasMask={this.props.hasMask}
                disableScroll={false}
                target={this.props.target}
                cache={false}
                wrapperClassName="nodiot-modal-mask"
                style={{ width: modalWidth }}
                animation={{ in: 'expandInDown', out: 'expandOutUp' }}>
                <div className={this.props.type==="primary"?"nodiot-modal primary":"nodiot-modal"}>
                    <div className="nodiot-modal-content">
                        <div type="secondary" className="nodiot-modal-close nodiot-modal-close-x" onClick={this.handleCloseButtonOnClick}>
                            <Icon type="close" size="small" style={{ color: this.state.closeButtonDisable ? "#C4C6CF" : (this.props.type==="primary"?"#ffffff":"rgba(0,0,0,.85)") }} />
                        </div>
                        <div className="nodiot-modal-header" >
                            <div className="nodiot-modal-title">{this.props.title}</div>
                        </div>
                        <div className="nodiot-modal-body" style={{height: modalHeight }}>
                            {
                                this.props.children
                            }
                        </div>
                        <div className="nodiot-modal-footer">
                            <Button type="secondary" size="large" disabled={this.state.cancelButtonDisable} onClick={this.handleCloseButtonOnClick}>{this.props.cancelButtonText}</Button>
                            <Button type="primary" size="large" loading={this.state.loading} disabled={this.state.okButtonDisable} onClick={this.handleOkButtonOnClick}>{this.props.okButtonText}</Button>
                        </div>
                    </div>
                </div>
            </Overlay>
        )
    }
}
