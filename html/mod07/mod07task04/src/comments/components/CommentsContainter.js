import React, {Component} from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as actions from "../actionTypes";
import { getAllComments } from '../selectors';

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
