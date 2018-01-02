import React, {Component} from 'react';
import { connect, Provider } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux'
import * as actions from "../actions";
import { getAllComments } from '../selectors';
import CommentList from './CommentsList';

class CommentsContainer extends React.Component {
    render() {
        return(
            <div>
                Kontener dla komentarzy
                1. Formularz

                2. Lista komentarzy z przyciskiem
            </div>
        );
    }
}

// Idą tam, gdzie wykonują się akcje
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch);
}

function mapSelectorsToProps() {
    return createStructuredSelector({
        comments: getAllComments
    });
}

export default connect(mapSelectorsToProps,mapDispatchToProps)(CommentsContainer);
