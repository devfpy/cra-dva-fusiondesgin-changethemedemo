import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import './index.scss';

class index extends Component {

    static propTypes = {
        HeaderView: PropTypes.object,
        SideBarView: PropTypes.object,
        MainView: PropTypes.object,
        FooterView:PropTypes.object,
        HeaderHeight: PropTypes.number.isRequired,
        FooterHeight: PropTypes.number.isRequired,
        SideBarWidth: PropTypes.number.isRequired,
        SideBarFoldWidth: PropTypes.number.isRequired
    }

    static defaultProps = {
        HeaderHeight: 50,
        FooterHeight: 30,
        SideBarWidth: 200,
        SideBarFoldWidth: 60
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                {
                    this.props.HeaderView ? (
                        <div className="app-header">
                            {this.props.HeaderView}
                        </div>
                    ) : null
                }
                <div className="app-body" style={{ marginTop: this.props.HeaderView ? this.props.HeaderHeight : 0 }}>
                    {
                        this.props.SideBarView ? (
                            <div className="sidebar" style={{ width: this.props.menuFold ? this.props.SideBarFoldWidth : this.props.SideBarWidth }}>
                                {this.props.SideBarView}
                            </div>
                        ) : null
                    }
                    <main className="main" style={{ marginLeft: this.props.SideBarView ? (this.props.menuFold ? this.props.SideBarFoldWidth : this.props.SideBarWidth) : 0 }}>
                        {
                            this.props.MainView ? this.props.MainView : null
                        }
                    </main>
                    {
                        this.props.FooterView ? (
                            <div className="app-footer" style={{ left: this.props.menuFold ? this.props.SideBarFoldWidth : this.props.SideBarWidth }}>
                                {
                                    this.props.FooterView
                                }
                            </div>
                        ) : null
                    }

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        menuFold:state.layout.menuFold
    }
}
export default connect(mapStateToProps)(index);