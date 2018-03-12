var MovieList = React.createClass ({
    propTypes:{   
    movieList: React.PropTypes.object.isRequired,
    },
        render: function(){
            return {
                React.createElement('h1', {MovieList: title}, this.pros.title),
               
                
            }
        }
});
var element = React.createElement(MovieList, {movie}, )
    
var Movie =  React.createClass (
    propTypes {
    movie: React.PropTypes.object.isRequired,
    },
   render: function() ({
    return (
    React.createElement('ul', {},
    React.createElement('li', {key:movie.id}, this.props.movie.id),
    React.createElement('p', {desc=movie_desc}, this.props.desc)
            )
        );
    }
});
var element = React.createElement(Movie, {key:movie_id, movie_desc},);

var MovieTitle = React.createClass({
    proppTypes {
    MovieTitle: React.PropTypes.object.isRequired,
},
        render: function(){
        return (
    React.createElement('h2', (title=movie_title), this.props.title)
            )
}                                 
});
var element = React.cretateElement(MovieTitle,{movie_title}, this.props.movie.title);

var MovieDescription = React.createClass({
    propTypes {
    MovieDescription = React.PropTypes.object.isRequired,
},
        render: function() {
            return (
                React.createElement(MovieDescription, {movie_desc}, this.props.movie.desc)
        );
    }
})

    var movie ={
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
       
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        }