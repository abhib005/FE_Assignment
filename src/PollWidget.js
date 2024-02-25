import React, { useState, useEffect } from "react";

const Poll = ({ question, options }) => {
  const [votes, setVotes] = useState(() => {
    const savedVotes = localStorage.getItem(question);
    return savedVotes ? JSON.parse(savedVotes) : options.map(() => 0);
  });

  useEffect(() => {
    localStorage.setItem(question, JSON.stringify(votes));
  }, [question, votes]);

  const handleVote = (optionIndex) => {
    const newVotes = [...votes];
    newVotes[optionIndex] += 1;
    setVotes(newVotes);
  };

  return (
    <div className="poll">
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleVote(index)}>{option}</button>
            <span>{votes[index]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Poll;
