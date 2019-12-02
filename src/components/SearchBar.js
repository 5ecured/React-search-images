import React from 'react';

class SearchBar extends React.Component {
    state = {text: ''}

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.a(this.state.text);
    }

    moveToState = e => {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input type='text' onChange={this.moveToState}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;