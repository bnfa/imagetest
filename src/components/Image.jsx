import React from 'react';

class Image extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        
        return (<img src={this.props.image.Url} height={this.props.Height} width={this.props.Width}></img>);
    }
}

export default Image;