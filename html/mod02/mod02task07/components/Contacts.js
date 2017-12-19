var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },

    render: function () {
        var contacts = this.props.items.map(function (contact) {
            console.log(contacts);
            return React.createElement(Contact, {item: contact, key: contact.id});
        }); // Koniec map
        return (
            React.createElement('li',{className: 'contactList'},contacts)
        );
    } // Koniec render
}); // Koniec klasy Contacts
