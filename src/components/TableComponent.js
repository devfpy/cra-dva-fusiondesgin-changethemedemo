import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination } from '@alifd/next';

const TableSelectionMode = {
    TableSelectionModeNone: "none",
    TableSelectionModeSingle: "single",
    TableSelectionModeMultiple: "multiple"
}

class TableComponent extends Component {

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        dataSource: PropTypes.array.isRequired,
        isZebra: PropTypes.bool,
        primaryKey: PropTypes.string.isRequired,
        tablePagesize:PropTypes.number.isRequired,
        children: PropTypes.any.isRequired,
        tableSelectionMode: PropTypes.string,
        tableDefaultSelectRowKeys: PropTypes.array,
        tableOnChange: PropTypes.func,
        tableOnSelect: PropTypes.func,
        onSelectAll: PropTypes.func,
        getCellProps:PropTypes.func,
        paginationOnChange:PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            selectedRowKeys: [],
            currentPage:1
        }
    }

    tableOnChange = (ids, records) => {
        this.setState({
            selectedRowKeys: ids
        });
        if (this.props.tableOnChange) {
            this.props.tableOnChange(ids, records);
        }
    }

    tableOnSelect = (selected, record, records) => {
        if (this.props.tableOnSelect) {
            this.props.tableOnSelect(selected, record, records);
        }
    }

    tableOnSelectAll = (selected, records) => {
        if (this.props.tableOnSelectAll) {
            this.props.tableOnSelectAll(selected, records);
        }
    }

    clear() {
        this.setState({
            selectedRowKeys: []
        });
    }

    paginationOnChange = (currentPage)=>{
        this.setState({
            currentPage
        });
        if(this.props.paginationOnChange){
            this.props.paginationOnChange(currentPage);
        }
    }


    render() {
        return (
            <div>
                <Table
                    loading={this.props.loading}
                    dataSource={this.props.dataSource}
                    isZebra={this.props.isZebra ? this.props.isZebra : false}
                    primaryKey={this.props.primaryKey}
                    rowSelection={
                        this.props.tableSelectionMode == "none" ? null : (
                            {
                                onChange: this.tableOnChange,
                                onSelect: this.tableOnSelect,
                                onSelectAll: this.onSelectAll,
                                selectedRowKeys: this.state.selectedRowKeys,
                                mode: this.props.tableSelectionMode
                            }
                        )
                    }
                    getCellProps = {this.props.getCellProps}>
                    {this.props.children}
                </Table>
                <Pagination pageSize={this.props.tablePagesize} current={this.state.currentPage} onChange={this.paginationOnChange} className="marginTop12" />
            </div>
        )
    }

}



export {
    TableSelectionMode,
    TableComponent
} 