import React, {Component} from 'react';
import _ from "lodash";
import SidebarVideoListItem from "./SidebarVideoListItem";

class SidebarVideoList extends Component {

    state = {};


    returnSidebarItems = () => {
        const activeVideoId = window.location.pathname.split('/')[2];
        // Filter out the available videos to exclude the active video
        let videosToPrint = _.filter(this.props.videos, (video) => {
            return video.id !== activeVideoId && video.isFeaturedItem == true;

        });

        // Order the videos by their votes descending
        videosToPrint = _.orderBy(videosToPrint, ['votes'], ['desc']);

        // Limit the number of printed videos in the sidebar to just 3
        videosToPrint = videosToPrint.slice(0, 3);
        return videosToPrint.map((video, i) => {
            return (
                <SidebarVideoListItem key={video.id} data={video}/>
            )
        })
    };

render() {
    return (
        <span>
                {this.returnSidebarItems()}
            </span>
    );
}
}

SidebarVideoList.defaultProps = {
    videos: [],
}

export default SidebarVideoList;