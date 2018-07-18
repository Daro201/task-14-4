
var movies = [
{	
	id: 1,
	title: 'Harry Potter',
	desc: 'film o czarodzieju',
	year: 2001,
	director:  'Chris Columbus, Alfonso Cuarón, Mike Newell',
	picture: 'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
},
{	
	id: 2,
	title: 'Król Lew',
	desc: 'Film o królu sawanny',
	year: 1994,
	director: ' Roger Allers, Rob Minkoff',
	picture: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
},
{	
	id: 3,
	title: 'Szerwgowiec Ryan',
	desc: 'Film wojenny',
	year: 1998,
	director: ' Steven Spielberg',
	picture: 'https://images.pexels.com/photos/20258/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
}
];


var Movie = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      React.createElement('li', {}, 
      React.createElement(MovieTitle, {text: this.props.item.title}),
      React.createElement(MovieDescription, {text: this.props.item.desc}),
      React.createElement(MovieImage, {source: this.props.item.picture})
      )
    )
  },
});

var MovieDescription = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('p', {}, this.props.text)
  }
})

var MovieTitle = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('h2', {}, this.props.text)
  }
})

var MovieImage = React.createClass({
  propTypes: {
    source: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('img', {src:this.props.source})
  }
})

var MovieList = React.createClass({
  propTypes: {
    list: React.PropTypes.array.isRequired
  },
  render: function() {
    var moviesElements = this.props.list.map(function(movie) {
      return React.createElement(Movie, {item: movie, key: movie.id});
    });
    return (React.createElement('div', {},
    React.createElement(MovieTitle, {text: 'Lista filmów'}),
    React.createElement('ul', {}, moviesElements))
  );
}});

var element = React.createElement(MovieList, {list: movies});
ReactDOM.render(element, document.getElementById('app'));
