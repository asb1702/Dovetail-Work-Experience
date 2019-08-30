import React, {Component} from 'react';
import _ from "lodash";
import SidebarVideoListItem from "./SidebarVideoListItem";
import ChannelListItem from "./ChannelListItem";

class SidebarVideoList extends Component {

    state = {};


    returnSidebarItems = () => {
        const activeVideoId = window.location.pathname.split('/')[2];
        // Filter out the available videos to exclude the active video
        let videosToPrint = _.filter(this.props.videos, (video) => {

            console.log(this.props);
            var isNotActive = activeVideoId === null || video.id !== activeVideoId;
            console.log(this.props.hasOwnProperty("channel"));
            var isInChannel = (!this.props.channel) || video.channel === this.props.channel;
            console.log(isInChannel);
            var isFeaturedItem = (!this.props.onlyFeatured) || video.isFeaturedItem == true;
            console.log(isFeaturedItem);
            return isNotActive && isInChannel && isFeaturedItem;
            // return video.id !== activeVideoId && video.isFeaturedItem == true;

        });

        // Order the videos by their votes descending
        videosToPrint = _.orderBy(videosToPrint, ['votes'], ['desc']);

        // Limit the number of printed videos in the sidebar to just 3
        videosToPrint = videosToPrint.slice(0, 3);
        return (
            <div className="col-12">
                <div className={'row'}>
                    {videosToPrint.map((video, i) => {
                        return (
                            <SidebarVideoListItem key={video.id} data={video}/>
                        )
                    })}
                </div>
            </div>
        )
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