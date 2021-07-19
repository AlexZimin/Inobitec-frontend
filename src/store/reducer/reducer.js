import * as actionTypes from '../actions/actionsTypes'

const initState = {
    selectedNode: {
        id: null,
        name: '',
        ip: '',
        port: 0
    },
    nodes: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SELECT_NODE:
            return {
                ...state,
                selectedNode: action.payload
            };

        case actionTypes.ADD_NODE:
            return {
                ...state,
                nodes: [...state.nodes, action.payload]
            }

        case actionTypes.REMOVE_NODE:
            return {
                ...state,
                nodes: state.nodes.filter(item => item.id !== action.payload.nodeId)
            }
        case actionTypes.UPDATE_NODE:
            const indexOfNodeToUpdate = state.nodes.findIndex(item => item.id === action.payload.id);
            const newArray = state;
            newArray.nodes[indexOfNodeToUpdate] = action.payload;
            return newArray;
        default:
            return state;
    }
}

export default reducer;