import React, { Component } from 'react';
import { Nav } from '@alifd/next';
import {connect} from 'dva';

const { Item, SubNav } = Nav;

class index extends Component {
    render() {
        return (
            <Nav
                style={{ width: "100%", height: "100%" }}
                type="primary"
                iconOnly={this.props.menuFold}
                hasArrow={false}
                mode={this.props.menuFold ? "popup" : "inline"}
                triggerType={this.props.menuFold ? "hover" : "click"}
                hasTooltip={true}>
                <Item icon="iconmenu_onetwo">Base</Item>
                <Item icon="iconexcel">Breadcrumbs</Item>
                <Item icon="iconmenu_shebeiaqgl">Cards</Item>
                <Item icon="icondoc">Carousels</Item>
                <Item icon="iconmenu_huaxuepgl">Collapses</Item>
                <Item icon="iconmenu_shebeiaqgl">Dropdowns</Item>
                <SubNav icon="iconsetting" label="Setting">
                    <Item icon="iconmenu_shebeiaqgl">Item 1</Item>
                    <Item icon="iconmenu_shebeiaqgl">Item 2</Item>
                    <Item icon="iconmenu_shebeiaqgl">Item 3</Item>
                    <Item icon="iconmenu_shebeiaqgl">Item 4</Item>
                </SubNav>
            </Nav>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        menuFold:state.layout.menuFold
    }
}

export default connect(mapStateToProps)(index)