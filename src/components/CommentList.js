import React, {Component} from 'react';
import _ from "lodash";
import Comment from "./Comment";

class CommentList extends Component {

    state = {};


    returnSidebarItems = () => {
        // let comments = this.props;

        return this.props.comments.map((comment, i) => {
            return (
                <Comment key={comment.id} data={comment}/>
            )
        });
    };

    render() {
        return (
            <span>
                {this.returnSidebarItems()}
            </span>
        );
    }
}

CommentList.defaultProps = {
    comments: [],
}

export default CommentList;