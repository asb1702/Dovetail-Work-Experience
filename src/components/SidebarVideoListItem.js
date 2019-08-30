import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class SidebarVideoListItem extends Component {

    state = {};

    constructor() {
        super();
        this.filterChannel = this.filterChannel.bind(this);
    }

    filterChannel(e) {
        e.preventDefault();
        console.log(this.props.data.channel);
    }

    render() {
        return (
            <span>
                <Link to={`/video/${this.props.data.id}`}>
                    <Image className="vid" href="#Vid1" width="500px" height="304px" src={this.props.data.thumbnailUrl}/>
                    <h4>
                        {this.props.data.title}
                    </h4>
                </Link>
                <p><small>By: </small>
                    {this.props.data.creator}
                </p>
                <p><small>Channel: </small>
                    <Link to={`/video/channels/${this.props.data.channel}`}>
                        {this.props.data.channel}
                    </Link>
                </p>
                <p><span style={{'fontSize': '30px'}}>↑</span>{this.props.data.votes}</p>
      </span>
        );
    }
}

SidebarVideoListItem.defaultProps = {
    data: {
        videoId: '123'
    }
};

export default SidebarVideoListItem;