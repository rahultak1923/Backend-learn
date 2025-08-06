import React, { useContext, useState } from 'react';
import { NoteContext } from '../context/NoteContext';
import { Button, Modal, Form } from 'react-bootstrap';

const NoteItem = ({ note }) => {
  const { deleteNote, updateNote } = useContext(NoteContext);

  const [show, setShow] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: note.title,
    description: note.description
  });

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setEditedNote({ title: note.title, description: note.description });
    setShow(true);
  };

  const handleUpdate = () => {
    updateNote(note._id, editedNote.title, editedNote.description);
    handleClose();
  };

  const onChange = (e) =>
    setEditedNote({ ...editedNote, [e.target.name]: e.target.value });

  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
        <Button variant="primary" size="sm" onClick={handleShow}>
          Edit
        </Button>{' '}
        <Button
          variant="danger"
          size="sm"
          onClick={() => deleteNote(note._id)}
        >
          Delete
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="noteTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={editedNote.title}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="noteDescription" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={editedNote.description}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NoteItem;
