import React from 'react';
import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';

function StartGame(props) {
    const defaultSettings = props.defaultSettings;
    const {startSelected, finishSelected} = defaultSettings;

    return (
        <button onClick={(e) = startSelected && finishSelected ? props.changeSetting('canRenderVr', true) : e.preventDefault()}>START GAME</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(StartGame);