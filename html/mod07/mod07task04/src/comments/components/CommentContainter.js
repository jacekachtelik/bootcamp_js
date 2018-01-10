import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment, thumbDownComment, deleteComment} from '../actions';

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  deleteComment: (id) => dispatch(deleteComment(id)),
});

export default connect(null, mapDispatchToProps)(Comment);
