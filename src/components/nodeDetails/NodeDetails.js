import React from 'react';
import { Button } from 'react-bootstrap';
import './nodeDetails.css'
import { useSelector, useDispatch } from "react-redux";
import { getUpdateNode } from '../../store/actions/nodeActions';

function NodeDetails() {
    let { ip, name, id, port, parent_id } = useSelector(state => state.selectedNode);
    const [localState, setLocalState] = React.useState({ ip, name, port });

    React.useEffect(() => {
        setLocalState({ ip, name, port });
    }, [ip, name, port]);

    const dispatch = useDispatch();
    const cancelButtonHandler = (event) => {
        setLocalState({ ip, name, port });
    };

    const applyButtonHandler = (event) => {
        const editedNode = {
            ...localState,
            id,
            parent_id
        };
        dispatch(getUpdateNode(editedNode));
    };


    const handleNameChange = (event) => {
        setLocalState((prevState) => {
            return { ...prevState, name: event.target.value };
        });
    };

    const handleIpChange = (event) => {
        setLocalState((prevState) => {
            return { ...prevState, ip: event.target.value };
        });
    }

    const handlePortChange = (event) => {
        setLocalState((prevState) => {
            return { ...prevState, port: event.target.value };
        });
    }

    return (
        id === null ?
            <div className="NodeDetails">
                <h3>Информация об узле</h3>
            </div>
            :
            <div className="NodeDetails">
                <h3>Информация об узле</h3>
                <form className="NodeDetails_Form">
                    <label>Название:</label>
                    <input value={localState.name} onChange={handleNameChange} />
                    <label>IP:</label>
                    <input value={localState.ip} onChange={handleIpChange} />
                    <label>Port:</label>
                    <input value={localState.port} onChange={handlePortChange} />
                </form>
                <div className="NodeDetails_ButtonBlock">
                    <Button variant="success" onClick={applyButtonHandler}>Применить</Button>
                    <Button variant="danger" onClick={cancelButtonHandler}>Отмена</Button>
                </div>
            </div>
    );
}

export default NodeDetails;