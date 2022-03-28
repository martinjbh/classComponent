import { connect } from "react-redux"


export const ShowMovies =({state})=>{
    console.log(state)
    return (
        <div>
            {console.log(state)}
            
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        state:state.movies
    }
};
export default connect(mapStateToProps,null)(ShowMovies);
