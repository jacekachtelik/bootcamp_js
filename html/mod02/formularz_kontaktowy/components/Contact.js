var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            React.createElement('div',{className: 'contactItem'},
                React.createElement('div',{className: 'contactImageBox'},
                    React.createElement('img',{
                        className: 'contactImage',
                        src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
                    })
                ),
                React.createElement('div',{className: 'contactDetailsBox'},
                    React.createElement('div',{className: 'contactNameSurname'},
                        React.createElement('p',{className: 'contactLabel'},this.props.item.firstName),
                        React.createElement('p',{className: 'contactLabel'}, this.props.item.lastName)
                    ),
                    React.createElement('div',{className: 'contactEmailBox'},
                        React.createElement('a',{className: 'contactEmail', href: 'mailto:' + this.props.item.email}, this.props.item.email)
                    )
                )
            )
        );
    }
});