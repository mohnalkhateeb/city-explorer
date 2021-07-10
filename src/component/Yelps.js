import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card'; 
import Yelp from './Yelp.js'
export class Yelps extends React.Component {
  constructor(props){
    super(props)
  }
    render() {
        return (
            <div>
             {
           this.props.yelpData.map((m, key) => {
            return <Yelp title={m.title} overview={m.overview} averageVotes={m.averageVotes}
              totalVotes={m.totalVotes} imageUrl={m.imageUrl} popularity={m.popularity}
              releasedOn={m.releasedOn} key={key} />
          })
            }
            </div>
        )
    }
}

export default Yelps
