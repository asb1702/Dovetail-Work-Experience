import React from 'react';
import './App.scss';
import {Navbar, Nav, Image, Button, Col} from 'react-bootstrap';
import _ from 'lodash';
import VotePicker from './components/VotePicker';
import SidebarVideos from './components/SidebarVideos';
import MainVideo from './components/MainVideo';
import Navigation from './components/Navigation';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const videos = [
    {
        id: '001',
        title: 'Fishing Sim World Gameplay Trailer',
        thumbnailUrl: 'http://i3.ytimg.com/vi/15lNFsO_dC4/maxresdefault.jpg',
        videoId: 'https://www.youtube.com/embed/15lNFsO_dC4',
        creator: 'DTG_01',
        creatorPic: 'https://api.adorable.io/avatars/285/abott@adorable',
        channel: 'Top Trailers Today',
        votes: 406,
        platform: 'PC',
        date: '26 Jul 2019',
        isFeaturedItem: true,
        comments: [
            {
                id: 1,
                title: 'Snazz',
                content: 'Yeah I think this is kinda cool, the sfx were really nice',
                author: 'Barbie124',
                authorPic: 'https://api.adorable.io/avatars/285/sneeze@adorable.io.png'
            }, {
                id: 2,
                title: 'So grey',
                content: 'Needs more colours!',
                author: 'Georgia',
                authorPic: 'https://api.adorable.io/avatars/285/snek@adorable.io.png'
            }
        ]
    }, {
        id: '017',
        title: 'Train Sim World 2020 Cinematic Trailer',
        thumbnailUrl: 'http://i3.ytimg.com/vi/CNqlXoDcH7A/maxresdefault.jpg',
        videoId: 'https://www.youtube.com/embed/CNqlXoDcH7A',
        creator: 'Bob Ross',
        creatorPic: 'https://api.adorable.io/avatars/285/mooper@adorable.io.png',
        channel: 'Dovetail Trailers',
        votes: 893,
        platform: 'Xbox 1',
        date: '1 Aug 2019',
        isFeaturedItem: true,
        comments: [
            {
                id: 1,
                title: 'So hype',
                content: 'Loved the trailer, cant wait for release',
                author: 'OddSocks',
                authorPic: 'https://api.adorable.io/avatars/285/sneeze@adorable.io.png'
            }, {
                id: 2,
                title: 'Not another one...',
                content: 'There goes my money again xD',
                author: 'SamMan',
                authorPic: 'https://api.adorable.io/avatars/285/snek@adorable.io.png'
            }, {
                id: 3,
                title: 'AMAZING',
                content: 'Pre-ordering rn, looks great',
                author: 'iLikeTrains',
                authorPic: 'https://api.adorable.io/avatars/285/trains@adorable.io.png'
            }
        ]
    }, {
        id: '202',
        title: 'Fishing Sim World Launch Trailer',
        thumbnailUrl: 'http://i3.ytimg.com/vi/kOVbhhrrfZI/maxresdefault.jpg',
        videoId: 'https://www.youtube.com/embed/kOVbhhrrfZI',
        creator: 'Fish4Lyfe',
        creatorPic: 'https://api.adorable.io/avatars/285/boop@adorable.io.png',
        channel: 'Dovetail Trailers',
        votes: 193,
        platform: 'PS4',
        date: '17 Feb 2018',
        isFeaturedItem: false,
        comments: [
            {
                id: 1,
                title: 'Those boats tho',
                content: 'New designs look incredible. 10/10 to the devs',
                author: 'WhiteNight',
                authorPic: 'https://api.adorable.io/avatars/285/boi@adorable.io.png'
            }
        ]
    }, {
        id: '633',
        title: 'Tees Valley Line OUT NOW',
        thumbnailUrl: 'http://i3.ytimg.com/vi/8PbzaAJpTTw/maxresdefault.jpg',
        videoId: 'https://www.youtube.com/embed/8PbzaAJpTTw',
        creator: 'D4v3',
        creatorPic: 'https://api.adorable.io/avatars/285/snoz@adorable.io.png',
        channel: 'Content Collector',
        votes: -69,
        platform: 'PC',
        date: '6 Nov 2017',
        isFeaturedItem: false,
        comments: [
            {
                id: 1,
                title: 'FAKE',
                content: 'Stop posting fake leaks, so stupid smh',
                author: 'WhiteNight',
                authorPic: 'https://api.adorable.io/avatars/285/boi@adorable.io.png'
            }
    ]
    }
];

function Index() {
    return <h2>Home</h2>;
}

function videoContainer({match}) {
    const video = _.find(videos, {id: match.params.videoId});
    return (
        <React.Fragment>
            <Col sm={7} flex-direction="column">
                <Link to="/">
                    <Button variant="primary  back btn-arrow btn-arrow-l"><span>Back</span></Button>
                </Link>
                <MainVideo data={video}/>
            </Col>
            <Col sm={5} flex-direction="column">
                <div className="row featured">
                    <h4>Featured Content</h4>
                    <Button variant="info" href="#More">More</Button>
                </div>
                <SidebarVideos videos={videos}/>
            </Col>
        </React.Fragment>
    );
}

function indexComponent() {
    return (
        <React.Fragment>
            <Col sm={7} flex-direction="column">
                <Link to="/">
                    <Button variant="primary  back btn-arrow btn-arrow-l"><span>Back</span></Button>
                </Link>
                <h1>Click a video on the sidebar to further explore</h1>
            </Col>
            <Col sm={5} flex-direction="column">
                <div className="row featured">
                    <h4>Featured Content</h4>
                    <Button variant="info" href="#More">More</Button>
                </div>
                <SidebarVideos videos={videos}/>
            </Col>
        </React.Fragment>
    );
}


function App() {
    return (
        <Router>
            <div className="container-fluid">
                <Navigation/>
                <div className="row layout">
                    <Route path="/" exact component={indexComponent}/>
                    <Route path="/video/:videoId" component={videoContainer}/>
                </div>
                <footer>
                    <p>boop</p>
                </footer>
            </div>
            {/*container end*/}
        </Router>
    );
}

export default App;
