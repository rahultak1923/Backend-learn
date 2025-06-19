import { useState } from 'react';

function FormExample() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmittedName(name); // Show name on page
    setName(''); // Clear input
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Show the name after submitting */}
      {submittedName && <h2>Hello, {submittedName}!</h2>}
    </div>
  );
}

export default FormExample;
