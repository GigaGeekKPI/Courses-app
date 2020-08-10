import React from 'react';

class SearchForm extends React.Component {
    render() {
        const {changeInput}  = this.props;
        return <input type='text' className='search-input' onChange={event => changeInput(event.target.value)} placeholder='Search'></input>
    }
}

export default SearchForm;