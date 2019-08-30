import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";

class ChannelListItem extends Component {

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
            <span className = "float-left left-half">
                <Link to={`/video/${this.props.data.id}`}>
                    <Image className="vid" href="#Vid1" width="520px" height="300px" src={this.props.data.thumbnailUrl}/>
                    <h4>
                        {this.props.data.title}

                    </h4>
                </Link>
                <p><small>By: </small>
                    {this.props.data.creator}
                    <span className = "left-half" style={{'fontSize': '30px'}}>↑</span>{this.props.data.votes}
                </p>
      </span>
        );
    }
}

ChannelListItem.defaultProps = {
    data: {
        videoId: '123'
    }
};

export default ChannelListItem;