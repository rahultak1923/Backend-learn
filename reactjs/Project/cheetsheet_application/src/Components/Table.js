import React, { useContext, useEffect, useState } from 'react';
import NoteContext from '../context/notes/NoteContext';
import { Modal, Button, Form } from 'react-bootstrap';

const Table = () => {
    const { notes, getNotes, deleteNote, updateNote } = useContext(NoteContext);
    const [showModal, setShowModal] = useState(false);
    const [currentNote, setCurrentNote] = useState({ id: "", title: "", description: "" });

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, []);

    const handleEditClick = (note) => {
        setCurrentNote({ id: note._id, title: note.title, description: note.description });
        setShowModal(true);
    };

    const handleUpdate = () => {
        updateNote(currentNote.id, currentNote.title, currentNote.description);
        setShowModal(false);
    };

    return (
        <>
            <table className="table table-bordered table-striped mt-3">
                <thead className="table-dark">
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note) => (
                        <tr key={note._id}>
                            <td>{note.title}</td>
                            <td>{note.description}</td>
                            <td>
                                <Button variant="warning" size="sm" className="me-2" onClick={() => handleEditClick(note)}>
                                    Edit
                                </Button>
                                <Button variant="danger" size="sm" onClick={() => deleteNote(note._id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Bootstrap Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentNote.title}
                                onChange={(e) => setCurrentNote({ ...currentNote, title: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={currentNote.description}
                                onChange={(e) => setCurrentNote({ ...currentNote, description: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Table;
