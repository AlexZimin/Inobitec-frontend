import React from 'react';
import './AddDeleteButtons.css'
import { setSelectedNode, getRemoveNode, getAddNode } from '../../store/actions/nodeActions';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

function AddDeleteButtons() {
    const selectedNode = useSelector(state => state.selectedNode);
    const [show, setShow] = React.useState(false);
    const [localState, setLocalState] = React.useState({ ip: '', name: '', port: 0 });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const nodeToDelete = useSelector(state => state.selectedNode);
    const dispatch = useDispatch();

    const handleDelete = (event) => {
        if (nodeToDelete.parent_id !== null) {
            dispatch(getRemoveNode(nodeToDelete.id));
            dispatch(setSelectedNode({ id: null }));
        }
    }
    const handleAdd = (event) => {
        const newNode = {
            parent_id: selectedNode.id,
            ...localState
        };
        dispatch(getAddNode(newNode));
        dispatch(setSelectedNode({ id: null }));
        handleClose();
    }

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
        <div className="AddDeleteButtons-block">
            <h3>Управление узлами</h3>
            <Button variant="success" onClick={handleShow}>Добавить узел</Button>
            <Button variant="danger" onClick={handleDelete}>Удалить узел</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Добавление узла</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="NodeDetails_Form">
                        <label>Название:</label>
                        <input value={localState.name} onChange={handleNameChange} />
                        <label>IP:</label>
                        <input value={localState.ip} onChange={handleIpChange} />
                        <label>Port:</label>
                        <input value={localState.port} onChange={handlePortChange} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        Добавить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddDeleteButtons;