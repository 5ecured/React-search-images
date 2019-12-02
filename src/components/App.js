import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = {images: []}
    
    onSearchSubmit = async term => {
        let a = await fetch(`https://api.unsplash.com/search/photos/?client_id=f0ce27773ab0675614b5105702b7f981ad4ae474d94f0facb6b47cb024e18e27&query=${term}`);
        let b = await a.json();
        this.setState({images: b.results})
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar a={this.onSearchSubmit}/>
                <ImageList b={this.state.images}/>
            </div>
        )
    }
}

export default App;