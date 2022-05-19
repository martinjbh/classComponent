import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import *as actioncreator from "../Redux/Actions"
class ModificadorEstadoClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "jochi"
        }
    }
    render() {
        return (
            <div>
                {console.log(this.props.estado)}
                ModificadorEstadoClass
            </div>)
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actioncreator, dispatch)
}
const mapStateToProps = (state) => {
    return {
        estado: state
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModificadorEstadoClass);





