import React, {useEffect}       from 'react';
import Editor                   from './components/editor/editor.component';
// import HelpModal from './components/helpModal/helpModal.component';
// import VrScene from './components/vrScene/vrScene.component';
import Render2D                 from './components/editor/render2d.component';
import {connect}                from 'react-redux'
import * as actionTypes         from './store/actions';
import './firebase/firebase';
import './styles/style.scss';
import Render3D                 from './components/editor/render3d.component';
import HiScore                  from './components/hiscore/hiscore.component';

function App(props) {
    useEffect(() => {
        // console.log('DEFAULT SETTINGS', props.defaultSettings)
    }, [props.defaultSettings]);
    return (
        <>
            {!props.defaultSettings.finish 
            ? 
            <header className="heading">
                <h1>Welcome to the Labyrinth Game Experience</h1>
                <h3>Will you be able to back here...</h3>
            </header> 
            : null}
            <main>
                {props.defaultSettings.canRenderVr && !props.defaultSettings.finish && <Render3D/>}
                {!props.defaultSettings.vrView && !props.defaultSettings.finish && <Editor/>}
                {props.defaultSettings.render2DView && !props.defaultSettings.finish && <Render2D/>}
                {/* <HelpModal/> */}
                {/*props.defaultSettings.vrView &&
                    <div className="preview">
                        <VrScene/>
                    </div>
                */}
                <div id="loadedMaps" className="hidden"/>
            </main>
            {props.defaultSettings.finish && <HiScore/>}
        </>
    );
}

const mapStateToProps = state => {
  return {
      mapsState: state.mapState,
      defaultSettings: state.defaultSettings
  }
};

const mapDispatchToProps = dispatch => {
  return {
        onAddNewMap: (map) => dispatch({type: actionTypes.ADD_NEW_MAP, map: map}),
        onUpdateTime: (time, map) => dispatch({type: actionTypes.UPDATE_TIME, map: map, time: time})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
