import React from 'react';
import {connect} from 'react-redux';
import {fetchMovieDetails} from "../../actions";
import classes from "./details.module.css";
import {Link} from "react-router-dom";


class Details extends React.Component{
    constructor(props){
        super(props);

        const urlParam = window.location.href;
        const urlSplit = urlParam.split("/");
        // console.log(urlSplit);
        const id = urlSplit[urlSplit.length - 1];
        this.state = {
            movieID: id,
            data: {},
        };

    }

    componentDidMount(){
        this.props.onFetchMovieDetails(this.state.movieID);
        console.log(this.props);
    }

    componentDidUpdate(prevProps){
        const {movieDetailsData} = this.props;
        if(prevProps.movieDetailsData.isLoading && !movieDetailsData.isLoading){
            this.setState({ data: movieDetailsData.data });
        }
        
    }
    render(){
        return(
            <div className={classes.real_section}>
                <h1>This is Details </h1>

                {this.props.movieDetailsData.isLoading ?
                    <h4>Loading....</h4> :
                    <div className={classes.details_section}>
                        <div> <img src = {this.state.data.Poster} alt="" /></div>
                        <div className={classes.item_desc}>
                            <h2>{this.state.data.Title}</h2>
                            <p>{this.state.data.Plot}</p>
                            <p>Type: {this.state.data.Type}</p>
                            <Link to="/ReactDay8"><button>Go Back</button></Link>
                        </div>
                    </div>
                    }
                
            </div>
             
        )           
    }
}
const mapStateToProps = (state) => ({   
    movieDetailsData: state.movieDetails,
})
const mapDispatchtoProps = {
    onFetchMovieDetails: fetchMovieDetails
}
export default connect(mapStateToProps, mapDispatchtoProps)(Details);