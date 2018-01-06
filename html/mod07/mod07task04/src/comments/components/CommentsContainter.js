import React, {Component} from 'react';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from "../actions";
import CommentList from './CommentsList';
import CommentsForm from './CommentsForm';
// import CommentsForm from './CommentsForm';

class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log('Props na commentContainter',props);
    }
    componentDidMount() {
        // do nothing
    }
    editComment(data) {
        this.props.dispatch(this.props.editComment(data));
    }
    deleteComment(id) {
        alert('Usuwanie komentarza:' + id);
        this.props.dispatch(this.props.deleteComment(id));
    }
    render() {
        return(
            <div>
                <h1>Komentarze</h1>
                <CommentsForm />
                <CommentList 
                    comments={this.props.comments} 
                    delete={this.deleteComment.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    console.log('mapStateToProps',store.comments);
    return {
        comments: store.comments
    };
};

// Idą tam, gdzie wykonują się akcje
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(CommentsContainer);
