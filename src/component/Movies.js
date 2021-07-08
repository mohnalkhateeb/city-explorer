import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'; 

export class Movies extends React.Component {
  constructor(props){
    super(props)
  }
    render() {
        return (
            <div>
               <Card style={{ width: '18rem' }} >
            <Card.Title> {this.props.title}</Card.Title>
          <Card.Body>
              <Card.Img alt="" src={this.props.imageUrl} width ='50px'/>
            
            <Card.Text>
            averageVotes : {this.props.averageVotes}
            </Card.Text>
            <Card.Text>
            totalVotes : {this.props.totalVotes}
            </Card.Text>
            <Card.Text>
            popularity : {this.props.popularity}
            </Card.Text>
            <Card.Text>
            releasedOn : {this.props.releasedOn}
            </Card.Text>
          </Card.Body>
        </Card> 
        

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