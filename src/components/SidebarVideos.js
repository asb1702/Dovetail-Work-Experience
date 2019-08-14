import React, {Component} from 'react';
import VotePicker from "./VotePicker";
import {Navbar, Nav, Image, Button, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import _ from "lodash";
import SidebarVideo from "./SidebarVideo";

class SidebarVideos extends Component {

    state = {};


    returnSidebarItems = () => {
        const activeVideoId = window.location.pathname.split('/')[2];
        // Filter out the available videos to exclude the active video
        let videosToPrint = _.filter(this.props.videos, (video) => { return video.id !== activeVideoId });

        // Order the videos by their votes descending
        videosToPrint = _.orderBy(videosToPrint, ['votes'], ['desc']);

        // Limit the number of printed videos in the sidebar to just 3
        videosToPrint = videosToPrint.slice(0, 3);
        console.log(videosToPrint);
        return videosToPrint.map( (video, i) => {
            return (
                <SidebarVideo key={video.id} data={ video } />
            )
        })
    };
    render() {
        return (
            <span>
                { this.returnSidebarItems() }
            </span>
        );
    }
}

SidebarVideos.defaultProps = {
    videos: [],
}

export default SidebarVideos;