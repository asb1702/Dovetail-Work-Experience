import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class VotePicker extends Component {

    state = {
        vote: null,
        votes: 1,
    };

    componentDidMount = () => {
        this.setState({
            ...this.props.data
        });
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            ...nextProps.data,
            vote: null
        })
    }

    incrementVote = () => {
        // This is fired when the user clicks the up arrow
        if (this.state.vote === 'up') {
            // We hit here when the user has already selected up, and they're clicked it again
            this.setState({
                vote: null,
                votes: this.state.votes - 1
            });
        } else {
            if (this.state.vote === null) {
                this.setState({
                    vote: 'up',
                    votes: this.state.votes + 1
                });
            }
            if (this.state.vote === 'down') {
                this.setState({
                    vote: 'up',
                    votes: this.state.votes + 2
                });
            }
        }
    }

    decrementVote = () => {
        // This is fired when the user clicks the down arrow
        if (this.state.vote === 'down') {
            this.setState({
                vote: null,
                votes: this.state.votes + 1
            });
        } else {
            if (this.state.vote === null) {
                this.setState({
                    vote: 'down',
                    votes: this.state.votes - 1
                });
            }
            if (this.state.vote === 'up') {
                this.setState({
                    vote: 'down',
                    votes: this.state.votes - 2
                });
            }
        }
    }

    render() {
        return (
            <span>
        <Button className={`bold` + (this.state.vote === 'up' ? ` selected` : ``)} variant="success" onClick={() => {
            this.incrementVote()
        }}>
          ↑
        </Button>         
        <h6>{this.state.votes}</h6>
        <Button className={`bold` + (this.state.vote === 'down' ? ` selected` : ``)} variant="danger" onClick={() => {
            this.decrementVote()
        }}>
          ↓
        </Button>
      </span>
        );
    }
}

export default VotePicker;