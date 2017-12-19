//var React = require('react');
//var ReactDOM = require('react-dom');

//var element = React.createElement('div',{},'Hello World!');
//ReactDOM.render(element,document.getElementById('app'));

/*
var element = React.createElement('div',{},
    React.createElement('h1',{},'Lista filmów'),
    React.createElement('ul',{},
        React.createElement('li',{},
            React.createElement('h2',{},'The Game'),
            React.createElement('p',{},'Super thiller')
        ),
        React.createElement('li',{},
            React.createElement('h2',{},'Incepcion'),
            React.createElement('p',{},'Drugi super thiller')
        )
    )
);
ReactDOM.render(element,document.getElementById('app'));*/

var movies = [
    {
        id: 1,
        title_: 'The Game',
        year__: 1997,
        path__: 'game.jpg'
    },
    {
        id: 2,
        title_: 'Inception',
        year__: 2010,
        path__: 'incepcja.jpg'
    },
    {
        id: 3,
        title_: 'Skazani na Shawshank',
        year__: 1994,
        path__: 'skazani_na_shawshank.jpeg'
    },
    {
        id: 4,
        title_: 'Zielona mila',
        year__: 1999,
        path__: 'zielona_mila.jpeg'
    }
];


/*
var movieElements = movies.map(function(movie) {
   return React.createElement('li',{key: movie.id},
        React.createElement('h2',{},movie.title_),
        React.createElement('p',{},movie.year__),
        React.createElement('img',{src: './' + movie.path__, alt: movie.title_},null)
   );
});

var element = React.createElement('div',{},
    React.createElement('h1',{},'Lista filmów'),
    React.createElement('ul',{},movieElements)
);
ReactDOM.render(element,document.getElementById('app'));


// Zadanie 2
var GalleryItem = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('div',{},
                React.createElement('h2',{},this.props.image.name),
                React.createElement('img',{src: this.props.image.src})
            )
        )
    }
});

var image = {
    name: 'Mountains',
    src: 'mountains.jpg'
};

var galleryElement = React.createElement(GalleryItem,{image: image});
ReactDOM.render(galleryElement,document.getElementById('app2'));
*/


// Zadanie 2.4 Pierwszy komponent Galeria
var MovieTitle = React.createClass({
    propTypes:{
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        var _movie = this.props.movie;
        // console.log(_movie);
       return (
           React.createElement('h2',{},_movie.title_)
       );

    }
});

var MovieYear = React.createClass({
    propTypes:{
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        var _movie = this.props.movie;
        // console.log(_movie);
        return (
            React.createElement('p',{},_movie.year__)
        );

    }
});

var MovieImage = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function() {
        var _movie = this.props.movie;
        return React.createElement('img',{src: _movie.path__})
    }
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function() {
        var _movie = this.props.movie;
        return (
            React.createElement('li',{id: this.props.movie.id, key: this.props.movie.id},
                React.createElement(MovieTitle,{movie: _movie}),
                React.createElement(MovieYear,{movie: _movie}),
                React.createElement(MovieImage,{movie: _movie})
                )
        );
    }
});

var movieElements = movies.map(function (movie) {
    return React.createElement(Movie,{movie: movie});
});

var element = React.createElement('div',{},
    React.createElement('h1',{},'Lista filmów'),
    React.createElement('ul',{},movieElements)
);
ReactDOM.render(element,document.getElementById('app3'));

