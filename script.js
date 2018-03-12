var movie = [
    {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    },
    {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    }
];

var MovieList = React.createClass ({
    propTypes: {   
    movieList: React.PropTypes.array.isRequired,
    },
    
        render: function(){
            var elements = this.props.movieList.map(function(movie) {
                return React.createElement(Movie, {movie: movie, key: movie.id});
            });
            return  React.createElement('ul', {}, telements);
    }
});
    
var Movie =  React.createClass ({
    propTypes: {
    movie: React.PropTypes.object.isRequired,
    },
    
   render: function() {
    return (
    React.createElement('li', {},
    React.createElement(MovieTitle, {MovieTitle: this.props.movie.title}),
                        React.createElement(MovieDescription, {movieDescription: this.props.movie.desc})
            )
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
    MovieTitle: React.PropTypes.string.isRequired,
},
    
        render: function(){
        return React.createElement('h2', {}this.props.movieTitle);
            
}                                 
});

var MovieDescription = React.createClass({
    propTypes: {
    MovieDescription: React.PropTypes.string.isRequired,
},
    
        render: function() {
            return React.createElement('p', {}, this.props.movieDescription);
    }
});

ReactDOM.render(
    React.createElement(MovieList, {movieList: movies}),
    document.getElementById('app')
);