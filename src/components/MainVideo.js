import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import VotePicker from "./VotePicker";
import CommentList from "./CommentList";

class MainVideo extends Component {

    state = {};

    render() {
        return (
            <span>
                    <iframe width="100%" height="615px" type="video" src={this.props.data.videoId}/>
                    <div className="col">
                            <h5>
                                <small>Created by: </small>
                                {this.props.data.creator}
                            </h5>
                        <div className="row">
                            <h2>
                                {this.props.data.title}
                            </h2>
                            <div className="vote">
                                <VotePicker data={this.props.data}/>
                            </div>
                        </div>
                        <div className="row">
                            <p className="left-half text-muted" href="#share">Share</p>
                            <p className="left-half text-muted" href="#flag">Flag</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="col">
                        <Image
                            width="70px"
                            className="float-left pfp"
                            src={this.props.data.creatorPic}
                            roundedCircle
                        />
                        <br/>
                        <p>Published on: {this.props.data.date}</p>
                        <p>By: {this.props.data.creator}</p>
                        <a href={`/video/channels/${this.props.data.channel}`}>{this.props.data.channel}</a>
                        <br/>
                        <br/>
                        <hr/>
                        <br/>
                        <br/>
                        <CommentList comments={this.props.data.comments}/>
                    </div>
                </span>
        );
    }
}

MainVideo.defaultProps = {
    data: {
        videoId: '123'
    }
};

export default MainVideo;