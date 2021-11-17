import React from 'react';
import classes from "./home.module.css";
import {connect} from "react-redux";
import {fetchMovie} from "../../actions";
import MovieCard from "../../components/movieCard";

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            movieList: [],
        }
    }

    componentDidMount(){
        const {movieData} = this.props;
        if(Object.keys(movieData).length > 0){
            this.setState({movieList: movieData.data.Search});
        }
    }

    componentDidUpdate(prevProps){
        const {movieData} = this.props;
        if(prevProps.movieData.isLoading && !movieData.isLoading){
            this.setState({ movieList: movieData.data.Search});
        }
    }

    movieSubmit(){
        const inputVal = this._inputEle.value;

        if( inputVal !== ''){
            this.props.onFetchMovie(inputVal);
            this._inputEle.value = '';
        }
    }
    render(){
        return(
            <div className={classes.home_section}>
                <header>
                    <input type="text" placeholder="Search Movie" ref={(a) => (this._inputEle = a)}></input>
                    <button onClick={() => this.movieSubmit()}>Search</button>
                </header>

                <div className={classes.wrap_section}>
                    {this.state.movieList.map(list => <MovieCard id={list.imdbID} poster={list.Poster} title={list.Title} year={list.Year} type={list.Type}/>)}
                </div>
                
            </div>    
        )           
    }
}
const mapStatetoProps = (state) => ({
    movieData: state.movie,
})

const mapDispatchtoProps = {
    onFetchMovie:fetchMovie,
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Home);