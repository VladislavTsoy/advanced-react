import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends PureComponent {
    state = {
        searchTerm: ''
    };

    doSearch = debounce(() => {
        this.props.store.setSearchTerm(this.state.searchTerm);
    }, 300);

    handleChange = e => {
        this.setState({searchTerm: e.target.value}, () => {
            this.doSearch();
        });
    };

    render() {
        return (
            <input 
                type="search"
                placeholder="Search article"
                onChange={this.handleChange}
                value={this.state.searchTerm}
            />
        );
    }
}

export default storeProvider()(SearchBar);