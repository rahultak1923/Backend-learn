import React, { useState } from 'react';
import { postAnswer } from '../api/getanswer'; 

const Index = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question.trim()) return; // agar question khali hai to kuch nhi hoga

    setLoading(true);
    setAnswer('');
    // setQuestion('');

    try {
      const data = await postAnswer(question); // api call kar raha hai with question ke sath
      setAnswer(data.answer || 'No answer received'); // answer nhi mila to ye return krega 
    } catch (error) {
      console.error('Error:', error);
      setAnswer('Something went wrong');
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Hello I am Google Gemini</h1>

      <input
        type="text"
        placeholder="Enter your Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit your Question'}
      </button>

      <h2 style={{ marginTop: '20px' }}>Show your answer</h2>
      <p>{answer}</p>
    </div>
  );
};

export default Index;
