import * as actionTypes from '../actions';

const initialDefaultSettings = {
    activePathArray: [],
    actualPlayerPosition: {x: 0, y: 1, z: 0},
    actualMapId: '',
    // applyLabyrinth: '',
    availablePathsArray: [],
    cols: [10, 15, 20, 30],
    countClick: 0,
    countSelectedBlocks: 0,
    canRenderVr: false,
    disableIfSelected: [],
    finalMapArray: [],
    // finishConverting: false,
    finish: false,
    finishSelected: false,
    finishCanBeSelected: false,
    // hours: 0,
    hover: false,
    labyrinthArray: [],
    // lastChange: 0,
    lastClicked: '',
    // loadedMapIndex: '',
    // loadedMapObj: {},
    loadMap: JSON.parse(localStorage.getItem('maps')) ? JSON.parse(localStorage.getItem('maps')) : [],
    mapArray: [],
    movementCount: 0,
    // maps: [],
    // minutes: 0,
    // moveCounter: 0,
    // newArr: [],
    // newCreatedMap: '',
    // newCreatedMapIndex: '',
    // ownerSaved: false,
    pathArray: [],
    // pathSelected: false,
    renderFinish: false,
    render2DView: false,
    renderVrCreator: false,
    selectedCol: 0,
    // seconds: 0,
    startSelected: false,
    time: {},
    timeVisible: false,
    timeStringValue: '00:00:00',
    // timer: '',
    vrView: false,
    validPathOptions: [],
    // validGridOptions: [],
    // validPaths: []
};

const defaultSettingsReducer = (state = initialDefaultSettings, action) => {
    switch (action.type) {
        case actionTypes.SET_TO_DEFAULT:
            return initialDefaultSettings;
        case actionTypes.CHANGE_DEFAULT_SETTING:
            const settingKey = action.setting;
            return {
                ...state,
                [settingKey]: action.value
            };
        default:
            return state;
    }
};

export default defaultSettingsReducer;