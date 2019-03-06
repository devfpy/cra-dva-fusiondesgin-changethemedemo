import React, { Component } from 'react';
import { Table } from '@alifd/next';
import { TableComponent, TableSelectionMode } from './TableComponent';
import UserJson from './userJson';

export default class UserTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }

        this.columnTemp = []
    }

    componentDidMount() {
        this.loadUserData();
    }

    loadUserData = () => {

        setTimeout(() => {
            this.clearMergeColumnTempArray();
            this.setState({
                loading: false
            });
        }, 1200);
    }

    /**
     * 计算需要合并的行数
     */
    mergeColumn = (text, columns, rowIndex) => {
        let i = 0;
        if (text != this.columnTemp[columns]) {
            this.columnTemp[columns] = text;
            UserJson.forEach((item) => {
                if (item[columns] == this.columnTemp[columns]) {
                    i += 1;
                }
            });
        }

        if(rowIndex == UserJson.length-1 || rowIndex == 11){
            this.clearMergeColumnTempArray();
        }
        return i;
    }

    /**
     * 处理合并行
     */
    statusColumnGetProps = (rowIndex, colIndex, dataIndex, record) => {

        if (colIndex == 7) {
            let nowColumnValue = record.state;
            let rowSpan = this.mergeColumn(record.state, "state", rowIndex);
            return {
                rowSpan: rowSpan,
                value: nowColumnValue,
                text: nowColumnValue
            };
        }

        

    }

    /**
     * render 状态列
     */
    renderUserStatusCell = (value, rowIndex, record, context) => {
        return value === 1 ? "启用" : "停用"
    }

    /**
     * 清空用于计算合并行所需要的临时变量
     */
    clearMergeColumnTempArray = () => {
        this.columnTemp = [];
    }


    tableOnChange = ()=>{
        
    }

    tableOnSelect = ()=>{
        
    }

    onSelectAll = ()=>{
        
    }

    paginationOnChange = ()=>{
        
    }

    render() {
        return (
            <TableComponent
                loading={this.state.loading}
                dataSource={UserJson}
                isZebra={true}
                primaryKey={"id"}
                tablePagesize={12}
                tableSelectionMode={TableSelectionMode.TableSelectionModeMultiple}
                getCellProps={this.statusColumnGetProps}
                tableOnChange={this.tableOnChange}
                tableOnSelect={this.tableOnSelect}
                onSelectAll={this.onSelectAll}
                paginationOnChange = {this.paginationOnChange}>
                <Table.Column title="ID" dataIndex="id" />
                <Table.ColumnGroup title="Group 01">
                    <Table.Column title="UserName" dataIndex="userName" />
                    <Table.Column title="Name" dataIndex="name" />
                </Table.ColumnGroup>

                <Table.Column title="Tel" dataIndex="tel" />
                <Table.Column title="Email" dataIndex="id" />
                <Table.Column title="Department" dataIndex="unitName" />
                <Table.Column title="Status" dataIndex="state" cell={this.renderUserStatusCell} />
                <Table.Column title="CreateTime" dataIndex="createTime" />
                <Table.Column title="Operation" />
            </TableComponent>
        )
    }
}