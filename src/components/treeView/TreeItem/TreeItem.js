import React from 'react';
import { getChildNodes, setSelectedNode } from '../../../store/actions/nodeActions'
import { useDispatch, useSelector } from 'react-redux';
import './TreeItem.css'

function TreeItem({ nodeInfo, open }) {
    const [opened, setOpened] = React.useState(open);
    const dispatch = useDispatch();
    
    const isSelected = useSelector(state => state.selectedNode.id) === nodeInfo.id;

    const children = useSelector(({ nodes }) => {
        return nodes.filter(item => item.parent_id === nodeInfo.id);
    });

    React.useEffect(() => {
        if (children.length === 0) {
            dispatch(getChildNodes(nodeInfo.id));
        }
    }, [children.length, dispatch, nodeInfo.id]);

    const handleOpenClick = (event) => {
        setOpened(prev => !prev);
    }

    const handleSelectClick = (event) => {
        dispatch(setSelectedNode(nodeInfo));
    }

    return (
        <ul>
            <li>{children.length ? <span onClick={handleOpenClick}>{opened ? "🔻" : "▶️"}</span> : <span>🟢</span>}
                <span className={isSelected ? "selected" : ""} onClick={handleSelectClick}><b>{nodeInfo.name}</b></span></li>
            {opened ? children.map(item => <TreeItem key={item.id} nodeInfo={item} />) : ''}
        </ul>
    );
}

export default TreeItem;