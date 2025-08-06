import React from 'react';
import AddNote from './AddNote';
import NoteList from './NoteList';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <AddNote />
      <NoteList />
    </div>
  );
};

export default Dashboard;
