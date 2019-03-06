import React, { Component } from 'react';
import { Tab } from '@alifd/next';
import './index.scss';
import BaseComponent from './baseComponent';
import TableComponent from './userTableComponent';


export default class index extends Component {
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
                    <div className="appmain_container"></div>
                </Tab.Item>
            </Tab>
        )
    }
}
