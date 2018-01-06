import React, {Component} from 'react';

class CommentsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <label>
                    <span className="form-input">Tekst komentarza:</span> <input type="text" className="form-ipnut-title" name="text" onChange={this.handleChange} value={this.state.text} placeholder="Tutaj wpisz treść komentarza"/>
                </label><br />
                <input type="submit" value="Submit" className="form-input-submit" />
            </form>
        );
    }
}

export default CommentsForm;