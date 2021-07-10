import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card'; 
import Movie from './Movie';

export class Movies extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
   return( <div>
      
      {this.props.moviesData.map((m,key)=>{
              return <Movie title={m.title} overview={m.overview} averageVotes={m.averageVotes}
              totalVotes={m.totalVotes} imageUrl={m.imageUrl} popularity={m.popularity}
              releasedOn={m.releasedOn} key={key}/>
            })  
          }
      </div>
   )
        
    }
}

export default Movies
/* this.title = movie.title;
        this.overview = movie.overview;
        this.averageVotes = movie.vote_average;
        this.totalVotes = movie.vote_count;
        this.imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        this.popularity = movie.popularity;
        this.releasedOn = movie.release_date;  */