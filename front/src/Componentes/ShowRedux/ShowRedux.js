import react from "react";
import { connect } from 'react-redux';



const ShowRedux = ({user}) => {
    return (
        <div>

            <h4>Redux: {user.nombre}</h4>
            <h4>Redux: {user.apellido}</h4>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
       user: state
    }
};
export default connect(mapStateToProps)(ShowRedux);







// const mapStateToProps = (state) => {
//     return {
//         state
//     }
// };
// export default connect(mapStateToProps,actionsFunctions)(ShowRedux);