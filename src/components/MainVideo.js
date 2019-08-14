import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import VotePicker from "./VotePicker";

class MainVideo extends Component {

    state = {};

    render() {
        return (
            <span>
            <iframe width="100%" height="615px" type="video" src={this.props.data.videoId}></iframe>
            <h5><small>Created by: </small>{this.props.data.creator}</h5>
            <div className="row">
            <h2>{this.props.data.title}</h2>
                <div className="col">
                    <VotePicker data={ this.props.data } />
                </div>
             <div className="col">
    <p>Share</p>
    <p>Flag</p>
    </div>
    </div>
    <hr></hr>
    <div className="col">
    <Image width="70px" className="float-left pfp"
           src={this.props.data.creatorPic}
           roundedCircle>
    </Image>
    <br></br>
    <p>Published on: {this.props.data.date}</p>
    <p>By: {this.props.data.creator}</p>
    </div>
                </span>
        );
    }
}

export default MainVideo;