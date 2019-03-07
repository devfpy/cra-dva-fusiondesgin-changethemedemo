import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, Button, Icon } from '@alifd/next';
import "./index.scss";


export default class index extends Component {

    static propTypes = {

        visible: PropTypes.bool.isRequired,
        hasMask: PropTypes.bool,
        target: PropTypes.any,
        title:PropTypes.string,
        width:PropTypes.number,
        height:PropTypes.number,

        onRequestClose: PropTypes.func,
        onOpened: PropTypes.func,
        onClosed: PropTypes.func
    }

    static defaultProps = {
        visible: false,
        hasMask: true,
        target: "root",
        title:"",
        width:400,
        height:320
    }

    constructor(props){
        super(props);

        console.log("........ this.props ", this.props);
    }

    handleOnRequestClose = () => {
        console.log(".......... Modal handleOnRequestClose");
    }

    render() {
        return (
            <Overlay
                visible={this.props.visible}
                // safeNode={() => this.btn}
                align="cc cc"
                hasMask={this.props.hasMask}
                disableScroll={false}
                target={this.props.target}
                wrapperClassName = "nodiot-modal-mask"
                onRequestClose={this.handleOnRequestClose}>
                <div className="nodiot-modal">
                    <div className="nodiot-modal-content">
                        <div type="secondary" className="nodiot-modal-close nodiot-modal-close-x">
                            <Icon type="close" size="small"/>
                        </div>
                        <div className="nodiot-modal-header">
                            <div className="nodiot-modal-title">{this.props.title}</div>
                        </div>
                        <div className="nodiot-modal-body" style={{width:this.props.width, height:this.props.height}}>
                        <span>我是内容</span>
                        </div>
                        <div className="nodiot-modal-footer">
                            <Button type="secondary">取消</Button>
                            <Button type="primary">确定</Button>
                        </div>
                    </div>
                </div>
            </Overlay>
        )
    }
}
