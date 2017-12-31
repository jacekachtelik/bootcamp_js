import {connect} from 'react-redux';
import Comment from './Comment';
import {likeComment, dislikeComment} from './actions';

const mapDispatchToProps = dispatch => ({
    likeComment: (id) => dispatch(likeComment(id)),
    dislikeComment: (id) => dispatch(dislikeComment(id)),
});

export default connect(null, mapDispatchToProps)(Comment);