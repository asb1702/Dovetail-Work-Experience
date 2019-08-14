import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SidebarVideo extends Component {

    state = {};

    render() {
        return (
            <span>
                <Link to={ `/video/${this.props.data.id}` }>
                    <Image className="vid" href="#Vid1" width="70%" height="304px" src={this.props.data.thumbnailUrl} />
                    <h4>
                        { this.props.data.title }
                    </h4>
                </Link>
                <p><small>By: </small>
                    <a href={this.props.data.creator}>{this.props.data.creator}</a>
                </p>
                <p><small>Channel: </small>
                    <a href = {this.props.data.channel}>{this.props.data.channel}</a>
                </p>
                <p><span style={{'fontSize': '30px'}}>↑</span>{this.props.data.votes}</p>
      </span>
        );
    }
}

export default SidebarVideo;