import {connect} from 'react-redux';
import Comment from './Comment';
import {likeComment} from './../index'

const mapDispatchToProps = dispatch => ({
    likeComment: (id) => dispatch(likeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);