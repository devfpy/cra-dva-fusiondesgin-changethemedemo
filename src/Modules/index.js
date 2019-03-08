import React, { Component } from 'react';
import { Tab, Button } from '@alifd/next';
import './index.scss';
import BaseComponent from './baseComponent';
import TableComponent from './userTableComponent';
import Modal from '../components/Modal';
import { error } from 'util';


export default class index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    handleOpentModalButtonOnClick = () => {
        this.myModal.openModal();
    }

    handleModalOnClosed = ()=>{
        console.log(".......... Modal Closed");
    }

    handleModalOnOk = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                // let error = {
                //     message:"很严重的错误！"
                // }
                // reject(error);
                resolve("success");
            }, 3000);
        });
    }



    render() {
        return (
            <Tab>
                <Tab.Item title="Home" key="1">
                    <div className="appmain_container">
                        <BaseComponent />
                    </div>
                </Tab.Item>
                <Tab.Item title="Documentation" key="2">
                    <div className="appmain_container">
                        <TableComponent />
                    </div>
                </Tab.Item>
                <Tab.Item title="Help" key="3">
                    <div className="appmain_container">
                        <Button type="primary" onClick={this.handleOpentModalButtonOnClick}>打开Modal</Button>
                        <Modal 
                            ref={node => (this.myModal = node)} 
                            title="我是弹窗" 
                            hasMask={true}
                            width="600px"
                            height ="400PX"
                            type="primary"
                            onClosed = {this.handleModalOnClosed}
                            onOk = {this.handleModalOnOk}>
                            <div>
                                <span>我是弹窗的内容我是弹窗的内容我是弹窗的内容我是弹窗的内容我是弹窗的内容我是弹窗的内容我是弹窗的内容我是弹窗的内容我是弹窗的内容我是弹窗的内容我是弹窗的内容我是弹窗的内容我是弹窗的内容我是弹窗的内容我是弹窗的内容我是弹窗的内容我是弹窗的内容我是弹窗的内容</span><br />
                            </div>

                            <span>我是弹窗的内容2</span><br />
                            <span>我是弹窗的内容3</span><br />
                            <span>我是弹窗的内容4</span><br />
                            <span>我是弹窗的内容2</span><br />
                            <span>我是弹窗的内容3</span><br />
                            <span>我是弹窗的内容4</span><br />
                            <span>我是弹窗的内容2</span><br />
                            <span>我是弹窗的内容3</span><br />
                            <span>我是弹窗的内容4</span><br />
                            <span>我是弹窗的内容2</span><br />
                            <span>我是弹窗的内容3</span><br />
                            <span>我是弹窗的内容4</span><br />
                            <span>我是弹窗的内容2</span><br />
                            <span>我是弹窗的内容3</span><br />
                            <span>我是弹窗的内容4</span><br />
                            <span>我是弹窗的内容2</span><br />
                            <span>我是弹窗的内容3</span><br />
                            <span>我是弹窗的内容4</span><br />
                            <span>我是弹窗的内容2</span><br />
                            <span>我是弹窗的内容3</span><br />
                            <span>我是弹窗的内容4</span><br />
                            <span>我是弹窗的内容2</span><br />
                            <span>我是弹窗的内容3</span><br />
                            <span>我是弹窗的内容4</span><br />
                            <span>我是弹窗的内容2</span><br />
                            <span>我是弹窗的内容3</span><br />
                            <span>我是弹窗的内容4</span><br />
                        </Modal>
                    </div>
                </Tab.Item>
            </Tab>
        )
    }
}
