import React from 'react';
import classes from "./moviecard.module.css";
import {Link} from "react-router-dom";
import { useParams } from 'react-router';

// const  WithParams = (props) => {
//     let params = useParams();
//     // return the component u use
//     return <MovieCard params={params} />;
//   }
  

class MovieCard extends React.Component{
    constructor(props){
        super(props);
        
        // const params = this.props.params;
        // console.log(params);
    }
    render(){
        const {poster, title, year, type} = this.props;
        return(
            <Link className={classes.movie_section} to={{pathname: `/ReactDay8/details/${this.props.id}`}}>
                
                <img src={poster} alt="" className={classes.img_holder} />
                
                
                <div className={classes.details_holder}>
                    <h3>{title}</h3>
                    
                        <p>Year: {year}</p>
                        <p>Type: {type}</p>
                    
                </div>
            
            </Link>
        )
    }
}

export default MovieCard;