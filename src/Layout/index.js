import React, { Component } from 'react';
import Layout from './layout_01';
import HeaderBar from '../components/HeaderBar';
import SideBar from '../components/SideBar';
import MainModules from '../Modules';

const header_height = 50;
const footer_height = 38;
const sidebar_width = 200;
const sidebarFold_width = 60;

const HeaderBarView = (
    <HeaderBar SideBarWidth = {sidebar_width} SideBarFoldWidth={sidebarFold_width} />
);

const SideBarView = (
    <SideBar />
);

const MainView = (
    <MainModules></MainModules>
);

const FoterView = null

export default class index extends Component {
    render() {
        return (
            <Layout
                HeaderView = {HeaderBarView}
                SideBarView = {SideBarView}
                MainView = {MainView}
                FooterView = {FoterView}
                HeaderHeight = {header_height}
                FooterHeight = {footer_height}
                SideBarWidth = {sidebar_width}
                SideBarFoldWidth = {sidebarFold_width}>

            </Layout>
        )
    }
}
