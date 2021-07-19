import nodeService from '../../services/nodeService'
import * as actionTypes from '../actions/actionsTypes'

export const setSelectedNode = (node) => ({
    type: actionTypes.SELECT_NODE,
    payload: node
});
export const addNode = (node) => ({
    type: actionTypes.ADD_NODE,
    payload: node
});
export const updateNode = (node) => ({
    type: actionTypes.UPDATE_NODE,
    payload: node
});
export const removeNode = (nodeId) => ({
    type: actionTypes.REMOVE_NODE,
    payload: {nodeId}
});

export const getRootNode = () => (dispatch) => {
    nodeService.getRoot()
        .then(response => {
            dispatch(addNode(response.data));
        });
};
export const getChildNodes = (parentId) => (dispatch) => {
    nodeService.getChildren(parentId)
        .then(response => {
            response.data.forEach(item => dispatch(addNode(item)));
        });
}

export const getRemoveNode = (nodeId) => (dispatch) => {
    nodeService.remove(nodeId)
        .then(response => {
            if (response.data) {
                dispatch(removeNode(nodeId))
            }
        });
};

export const getUpdateNode = (node) => (dispatch) => {
    nodeService.update(node)
        .then(res => {
            if (res.data) {
                dispatch(updateNode(node))
            }
        });
}

export const getAddNode = (node) => (dispatch) => {
    nodeService.create(node)
        .then(response => {
            if (response) {
                dispatch(addNode(response.data));
            }
        });
}