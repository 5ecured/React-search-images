import React from 'react';

const ImageList = props => {
    let yea = props.b.map(image => {
        return <img src={image.urls.thumb} alt='a'/>
    })

    return <div>{yea}</div>
}

export default ImageList;