import React from 'react'
import { connect } from 'react-redux'
import { LoaderShown, LoaderHidden } from '../../Actions/loader'

import './FullPageLoader.scss'

//Loader Spinner
import Loader from 'react-loader-spinner'

class FullPageLoader extends React.Component {
    render() {

        const { isLoaderShown } = this.props.loader

        if(!isLoaderShown) return null

        return(
            <div className="loader-container">
                <Loader className="load-spinner"
                    type="Circles"
                    color="#31324d"
                    height={100}
                    width={100}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loader: state.loader
    }
}

const mapDispatchToProps = () => {
    return {
        LoaderShown,
        LoaderHidden
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(FullPageLoader)