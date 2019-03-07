import React, { Component } from 'react';
import { Tab, Button } from '@alifd/next';
import './index.scss';
import BaseComponent from './baseComponent';
import TableComponent from './userTableComponent';
import Modal from '../components/Modal';


export default class index extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            modalVisible:false
        }
    }

    handleOpentModalButtonOnClick = ()=>{
        this.setState({
            modalVisible:true
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
                        <Modal title="我是弹窗" visible={this.state.modalVisible} hasMask={true} />
                    </div>
                </Tab.Item>
            </Tab>
        )
    }
}
