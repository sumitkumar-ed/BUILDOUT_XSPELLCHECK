import React, { useState } from 'react';
import customDictionary from '../customDictionary';

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    checkSpelling(newText);
  };

  const checkSpelling = (inputText) => {
    const words = inputText.split(' ');
    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        setSuggestion(`Did you mean: <span class="corrected-word">${customDictionary[lowerCaseWord]}?</span>`);
        return;
      }
    }
    setSuggestion('');
  };

  return (
    <div>
      <h2>Spell Check and Auto-Correction</h2>
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
      />
      <p dangerouslySetInnerHTML={{ __html: suggestion }}></p>
    </div>
  );
};

export default XSpellCheck;
