import React, { Component } from 'react'


class SubProject extends Component {
    render() {
        return (
            <div className="item">
                <span className="project-title">
                    {this.props.item.name}
                </span> :- &nbsp;&nbsp;
                <span className="project-tagline">
                    <span class="icon-holder">
                        <i class="fab fa-chrome "></i>
                    <a href={this.props.item.weburl === "Not Available" ? "#" : this.props.item.weburl} target="_blank"> Web Link </a> ,&nbsp;&nbsp;
                    </span>

                    <span class="icon-holder">
                        <i class="fas fa-mobile-alt"></i>&nbsp;&nbsp;
                    <a href={this.props.item.mobileapp === "Not Available" ? "#" : this.props.item.mobileapp} target="_blank">
                        Mobile App  </a>&nbsp;&nbsp;
                    </span>
                </span>
            </div>

        )
    }
}


export default SubProject;