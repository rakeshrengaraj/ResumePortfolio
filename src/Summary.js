import React, { Component } from 'react';

class Summary extends Component {
    render() {
        return (
            <div className="summary">
                <p>{this.props.summary}</p>
            </div>
        )
    }
}


export default Summary;