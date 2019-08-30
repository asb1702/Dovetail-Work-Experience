import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import ChannelListItem from "./ChannelListItem";
import _ from "lodash";
//
// class ChannelList extends Component {
//
//     state = {};
//
//     render() {
//         return (
//             <span>
//
//             </span>
//         );
//     }
// }
//
//
// export default Channel;
// _.orderBy(videosToPrint, ['votes'], ['desc']);
const ChannelList = ({ channel, videos }) => {
    videos = _.orderBy(videos, ['votes'], ['desc']);
    let tiles = videos.map(v => <ChannelListItem  key={v.id} data={v}/>);
    return (
        <div>
            <h2 className = "left-half">{channel.name}</h2>
            <br/>
            <br/>
            { tiles }
        </div>);
};

export default ChannelList;
