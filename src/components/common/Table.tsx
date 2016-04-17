import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

interface ITableProps {
    bordered?: boolean;
    condensed?: boolean;
    hover?: boolean;
    striped?: boolean;
    showSearch?: boolean;
    searchPlaceholder?: string;
    onSearch?: (searchTerm: string) => void;
}

export class Table extends React.Component<ITableProps, any> {
    constructor(props) {        
        super(props);
    }
    
    render() {        
        return (
            <div className="table-component">
                {this.renderFilter()}
                <Row>
                    <Col md={12}>
                        <table className={this.getTableClassName()}>
                            {this.props.children}
                        </table>
                    </Col>
                </Row> 
            </div>   
        );
    }
    
    renderFilter() {
        const dontShowFilter = !this.props.showSearch; 
        
        if (dontShowFilter) {
            return;
        }
        
        return (
            <Row>
                <Col md={12}>                                    
                    <div className="filter">                                
                        <input 
                            className="form-control" 
                            type="search" 
                            placeholder={this.getSearchPlaceholder()}
                            onInput={this.changeSearchTerm} 
                        />
                    </div>
                </Col>
            </Row>
        );
    }
    
    changeSearchTerm = (e) => {
        const searchTerm: string = e.target.value;
        this.props.onSearch(searchTerm);
    }
    
    getTableClassName() {
        let className = ['table'];
        
        if (this.props.bordered) {
            className.push('table-bordered');
        }
        
        if (this.props.condensed) {
            className.push('table-condensed');
        }
        
        if (this.props.hover) {
            className.push('table-hover');
        }
        
        if (this.props.striped) {
            className.push('table-striped');
        }
        
        return className.join(' ');
    }
    
    getSearchPlaceholder() {
        if (this.props.searchPlaceholder) {
            return this.props.searchPlaceholder;
        }
        
        return 'Search';
    }
}