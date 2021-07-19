import React from 'react';
import {getRootNode} from '../../store/actions/nodeActions';
import {useDispatch, useSelector} from 'react-redux';
import TreeItem from './TreeItem/TreeItem'
import './treeView.css'
import { Spinner } from 'react-bootstrap';

function TreeView() {
    const rootNode = useSelector((state) => {
        return state.nodes.find((item) => item.parent_id === null)}
    );
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        if (!rootNode) {
            dispatch(getRootNode());
        }
    }, [rootNode, dispatch]);

    return (
        <div className="TreeView-block">
            <h3>Доступные узлы</h3>
            {rootNode ? <TreeItem nodeInfo={rootNode}/> : <Spinner animation="grow"/>}
        </div>
    );
}

export default TreeView