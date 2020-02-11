import React, {Component} from 'react';

class Language extends Component {
    render(){
        return(
            <li>{this.props.item.name}</li>
        )
    }
}


export default Language;