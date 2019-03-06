import React, { Component } from 'react';
import { Button, Nav, Form, Input, Switch, Grid, Icon, Balloon } from '@alifd/next';

const { Item } = Nav;
const FormItem = Form.Item;
const { Row, Col } = Grid;

export default class baseComponent extends Component {

    state = {
        labelAlign: 'top'
    }

    handleChange = (v) => {
        this.setState({
            labelAlign: v ? 'left' : 'top'
        });
    }

    render() {

        const header = <span className="fusion">FUSION</span>;
        const footer = <a className="login-in" href="javascript:;">Login in</a>;

        const formItemLayout = {
            labelCol: { fixedSpan: 4 }
        };

        const label = (<span>
            name：<Balloon type="primary" trigger={<Icon type="prompt" size="small" />} closable={false}>blablablablablablablabla</Balloon>
        </span>);

        const labelAlign = this.state.labelAlign;

        return (
            <div>
                <h2>Button</h2>
                <div className="demo-list-item-body">
                    <Button type="normal">Normal</Button> &nbsp;&nbsp;
                    <Button type="primary">Prirmary</Button> &nbsp;&nbsp;
                    <Button type="secondary">Secondary</Button>
                    <br /><br />
                    <Button type="normal" text>Normal</Button> &nbsp;&nbsp;
                    <Button type="primary" text>Primary</Button> &nbsp;&nbsp;
                    <Button type="secondary" text>Secondary</Button>
                    <br /><br />
                    <Button type="normal" warning>Normal</Button> &nbsp;&nbsp;
                    <Button type="primary" warning>Primary</Button> &nbsp;&nbsp;
                </div>


                <h2>Nav 导航</h2>
                <div className="demo-list-item-body">
                    <Nav className="basic-nav" direction="hoz" type="primary" header={header} footer={footer} defaultSelectedKeys={['home']} triggerType="hover">
                        <Item key="home">Home</Item>
                        <Item key="component">Component</Item>
                        <Item key="document">Document</Item>
                    </Nav>
                </div>

                <h2>Form</h2>
                <div className="demo-list-item-body">
                    <Switch checkedChildren="left" unCheckedChildren="top" checked={this.state.labelAlign === 'left'} onChange={this.handleChange} />

                    <Form>
                        <Row gutter="4">
                            <Col>
                                <FormItem {...formItemLayout} labelAlign={labelAlign}
                                    label={label}
                                    required
                                >
                                    <Input placeholder="Enter a search name:" />
                                </FormItem>
                                <FormItem {...formItemLayout} labelAlign={labelAlign}
                                    label="Long search name:"
                                >
                                    <Input placeholder="Enter a search name:" />
                                </FormItem>
                                <FormItem {...formItemLayout} labelAlign={labelAlign}
                                    label="Search name:"
                                >
                                    <Input placeholder="Enter a search name:" />
                                </FormItem>
                            </Col>
                            <Col>
                                <FormItem {...formItemLayout} labelAlign={labelAlign}
                                    label="Search name:"
                                >
                                    <Input placeholder="Enter a search name:" />
                                </FormItem>
                                <FormItem {...formItemLayout} labelAlign={labelAlign}
                                    label="Long search name:"
                                >
                                    <Input placeholder="Enter a search name:" />
                                </FormItem>
                                <FormItem {...formItemLayout} labelAlign={labelAlign}
                                    label="Search name:"
                                >
                                    <Input placeholder="Enter a search name:" />
                                </FormItem>
                            </Col>
                            <Col>
                                <FormItem {...formItemLayout} labelAlign={labelAlign}
                                    label="Search name:"
                                >
                                    <Input placeholder="Enter a search name:" />
                                </FormItem>
                                <FormItem {...formItemLayout} labelAlign={labelAlign}
                                    label="Long search name:"
                                >
                                    <Input placeholder="Enter a search name:" />
                                </FormItem>
                                <FormItem {...formItemLayout} labelAlign={labelAlign}
                                    label="Search name:"
                                >
                                    <Input placeholder="Enter a search name:" />
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: 'right' }}>
                                <Button type="primary" style={{ marginRight: '5px' }}>Search</Button>
                                <Button >Clear All</Button>
                            </Col>
                        </Row>
                    </Form>


                    <Form>
                        <Row gutter="4">
                            <Col>
                                <FormItem {...formItemLayout} labelAlign={labelAlign}
                                    label={label}
                                    required
                                >
                                    <Input placeholder="Enter a search name:" />
                                </FormItem>
                            </Col>
                            <Col>
                                <FormItem {...formItemLayout} labelAlign={labelAlign}
                                    label="Long search name:"
                                >
                                    <Input placeholder="Enter a search name:" />
                                </FormItem>
                            </Col>
                            <Col>
                                <FormItem {...formItemLayout} labelAlign={labelAlign}
                                    label="Search name:"
                                >
                                    <Input placeholder="Enter a search name:" />
                                </FormItem>
                            </Col>
                            <Col>
                                <FormItem {...formItemLayout} labelAlign={labelAlign}
                                    label="Search name:"
                                >
                                    <Input placeholder="Enter a search name:" />
                                </FormItem>
                            </Col>
                            <Col>
                                <FormItem {...formItemLayout} labelAlign={labelAlign}
                                    label="Search name:"
                                >
                                    <Input placeholder="Enter a search name:" />
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: 'right' }}>
                                <Button type="primary" style={{ marginRight: '5px' }}>Search</Button>
                                <Button >Clear All</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        )
    }
}
