import React, { Component } from 'react'


class Project extends Component {
    render() {
        return (
            <div className="item">
                <span className="project-title"><a href={this.props.item.url === "Not Available" ? "#" : this.props.item.url} target="_blank">{this.props.item.name}</a></span> -
                <span className="project-tagline">{this.props.item.details}</span>
            </div>

        )
    }
}


export default Project;