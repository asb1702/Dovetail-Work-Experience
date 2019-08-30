import React, {Component} from 'react';
import {Image} from 'react-bootstrap';

class Comment extends Component {

    state = {};

    render() {
        return (
            <span>

                <div className="col">
                    <Image
                        width="56px"
                        className="float-left pfp"
                        src={this.props.data.authorPic}
                        roundedCircle
                    />
                    <h6>{this.props.data.title}</h6>
                   <p>{this.props.data.content}</p>
                    <p><small>{this.props.data.author}</small></p>
                    <br/>
               </div>
            </span>
        );
    }
}

Comment.defaultProps = {
    data: {
        comments: []
    }
};

export default Comment;