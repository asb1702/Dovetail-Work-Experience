import React from 'react';
import './App.scss';
import {Button, Col} from 'react-bootstrap';
import _ from 'lodash';
import SidebarVideoList from './components/SidebarVideoList';
import ChannelList from './components/ChannelList';
import MainVideo from './components/MainVideo';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import HomepageList from './components/HomepageList';

const videos = [
    {
        id: '001',
        title: 'Fishing Sim World Gameplay Trailer',
        thumbnailUrl: 'http://i3.ytimg.com/vi/15lNFsO_dC4/maxresdefault.jpg',
        videoId: 'https://www.youtube.com/embed/15lNFsO_dC4',
        creator: 'DTG_01',
        creatorPic: 'https://api.adorable.io/avatars/285/abott@adorable',
        channel: 'Top Trailers',
        votes: 406,
        platform: 'PC',
        date: '26 Jul 2019',
        isFeaturedItem: true,
        comments: [
            {
                id: 361,
                title: 'Snazzy',
                content: 'Yeah I think this is kinda cool, the sfx were really nice',
                author: 'Barbie124',
                authorPic: 'https://api.adorable.io/avatars/285/sneeze@adorable.io.png'
            }, {
                id: 285,
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
        channel: 'Top Trailers',
        votes: 893,
        platform: 'Xbox 1',
        date: '1 Aug 2019',
        isFeaturedItem: true,
        comments: [
            {
                id: 71,
                title: 'So hype',
                content: 'Loved the trailer, cant wait for release',
                author: 'OddSocks',
                authorPic: 'https://api.adorable.io/avatars/285/sneeze@adorable.io.png'
            }, {
                id: 742,
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
        channel: 'Top Trailers',
        votes: 193,
        platform: 'PS4',
        date: '17 Feb 2018',
        isFeaturedItem: false,
        comments: [
            {
                id: 321,
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
        channel: 'Viral Vids',
        votes: -69,
        platform: 'PC',
        date: '6 Nov 2017',
        isFeaturedItem: false,
        comments: [
            {
                id: 134,
                title: 'FAKE',
                content: 'Stop posting fake leaks, so stupid smh',
                author: 'WhiteNight',
                authorPic: 'https://api.adorable.io/avatars/285/boi@adorable.io.png'
            }
        ]
    },
    {
        id: '481',
        title: 'Train Sim World 2020',
        thumbnailUrl: 'http://i3.ytimg.com/vi/Z7xegGimb1s/maxresdefault.jpg',
        videoId: 'https://www.youtube.com/embed/Z7xegGimb1s',
        creator: 'Squirrel',
        creatorPic: 'https://api.adorable.io/avatars/285/squirrel@adorable.io.png',
        channel: 'Viral Vids',
        votes: 1985,
        platform: 'PC',
        date: ' 25 Aug 2019',
        isFeaturedItem: false,
        comments: [
            {
                id: 194,
                title: 'FINALLY',
                content: 'You can use the arrow keys to stick your head out the window now!',
                author: 'Fishbed',
                authorPic: 'https://api.adorable.io/avatars/285/fishbed@adorable.io.png',
            },
            {
                id: 147,
                title: 'My fav content',
                content: 'Well made, i have been a fan since 2016. Im so glad that you still upload',
                author: 'jAYATHA',
                authorPic: 'https://api.adorable.io/avatars/285/jayatha@adorable.io.png',
            },
        ]
    },
    {
        id: '257',
        title: 'Ur mum\'s so fat she wouldn\'t fit in a Union Pacific',
        thumbnailUrl: 'http://i3.ytimg.com/vi/enyLgQDSlUM/maxresdefault.jpg',
        videoId: 'https://www.youtube.com/embed/enyLgQDSlUM',
        creator: 'Big boi',
        creatorPic: 'https://api.adorable.io/avatars/285/mooper@adorable.io.png',
        channel: 'Jokes',
        votes: 249,
        platform: 'PC',
        date: '29 Dec 2014',
        isFeaturedItem: false,
        comments: [
            {
                id: 185,
                title: 'LMAO',
                content: '10/10 made my day',
                author: 'BobBob',
                authorPic: 'https://api.adorable.io/avatars/285/bobbob@adorable.io.png'
            }, {
                id: 2621,
                title: 'Amazing',
                content: 'So funny I love it',
                author: 'Bobbity',
                authorPic: 'https://api.adorable.io/avatars/285/bobbity@adorable.io.png'
            }, {
                id: 824,
                title: 'Love this content',
                content: 'Easily my favourite vids on here',
                author: 'Boppob',
                authorPic: 'https://api.adorable.io/avatars/285/boppob@adorable.io.png'
            }
        ]
    }, {
        id: '7346',
        title: 'The Art of Precision',
        thumbnailUrl: 'http://i3.ytimg.com/vi/7v8UH9wzt54/maxresdefault.jpg',
        videoId: 'https://www.youtube.com/embed/7v8UH9wzt54',
        creator: 'KrillM3',
        creatorPic: 'https://api.adorable.io/avatars/285/snoop@adorable.io.png',
        channel: 'Viral Vids',
        votes: 143,
        platform: 'PC',
        date: '19 Oct 2016',
        isFeaturedItem: true,
        comments: [
            {
                id: 176,
                title: 'SO SMOOTH',
                content: 'Would actually listen to an ASMR playlist of this game ngl',
                author: 'Julie7',
                authorPic: 'https://api.adorable.io/avatars/285/bopd@adorable.io.png'
            },
            {
                id: 481,
                title: 'Glorious',
                content: 'Fookin beautiful',
                author: 'Glory2Arstotzka',
                authorPic: 'https://api.adorable.io/avatars/285/glorious@adorable.io.png'
            },
            {
                id: 17468,
                title: 'Perfection.',
                content: 'I am in love <3 <3 <3',
                author: 'JackSpudds',
                authorPic: 'https://api.adorable.io/avatars/285/Spuddman@adorable.io.png',
            },
            {
                id: 1520,
                title: 'oMg U gUYS',
                content: 'i. love. it. so. much. oh. my. goooood',
                author: 'omgUguys',
                authorPic: 'https://api.adorable.io/avatars/285/omg@adorable.io.png',

            }
        ]


    },
];
const channels =[
    {
        'id': '001',
        'name': 'Top Trailers',
        'creator': 'Bob'
    },
    {
        'id': '125',
        'name': 'Viral Vids',
        'creator': 'Bobalina'
    },
    {
        'id': '064',
        'name': 'Jokes',
        'creator': 'notAbob'
    }
]

function videoContainer({match}) {
    const video = _.find(videos, {id: match.params.videoId});
    if ( video ) {
        return (
            <React.Fragment>
                <Col sm={8} flex-direction="column">
                    <Link to="/">
                        <Button variant="primary  back btn-arrow btn-arrow-l"><span>Back</span></Button>
                    </Link>
                    <MainVideo data={video}/>
                </Col>
                <Col sm={4} flex-direction="column">
                    <div className="row featured">
                        <h4>Featured Content</h4>
                        <Button variant="info" href="#More">More</Button>
                    </div>
                    <SidebarVideoList videos={videos}/>
                </Col>
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <Col sm={7} flex-direction="column">
                <Link to="/">
                    <Button variant="primary  back btn-arrow btn-arrow-l"><span>Back</span></Button>
                </Link>
                <h3>Video not found</h3>
            </Col>
            <Col sm={5} flex-direction="column">
                <div className="row featured">
                    <h4>Featured Content</h4>
                    <Button variant="info" href="#More">More</Button>
                </div>
                <SidebarVideoList videos={videos}/>
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
                <HomepageList/>
            </Col>
            <Col sm={5} flex-direction="column">
                <div className="row featured">
                    <h4>Featured Content</h4>
                    <Button variant="info" href="#More">More</Button>
                </div>
                <SidebarVideoList videos={videos}/>
            </Col>
        </React.Fragment>
    );
}

function channelContainer({ match }) {
    const channelName = match.params.channelName;
    const channel = channels.find(c => c.name === channelName);
    const channelVideos = videos.filter(v => v.channel === channelName);
    return (<ChannelList channel={ channel } videos={ channelVideos } />);
}

function App() {
    return (
        <Router>
            <div className="container-fluid">
                <Navigation/>
                <div className="row layout">
                    <Switch>
                        <Route path="/" exact component={indexComponent}/>
                        <Route path="/video/channels/:channelName" component={channelContainer}/>
                        <Route path="/video/:videoId" component={videoContainer}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
            {/*container end*/}
        </Router>
    );
}

export default App;
