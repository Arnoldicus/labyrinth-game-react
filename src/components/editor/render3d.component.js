import React from 'react';
import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';

function Render3D(props) {
    return (
        <div>
            <h1> render 3d comming soon</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        defaultSettings: state.defaultSettings
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeSetting: (setting, value) => dispatch({type: actionTypes.CHANGE_DEFAULT_SETTING, setting, value})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Render3D);