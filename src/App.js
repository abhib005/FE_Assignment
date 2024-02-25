import React from "react";
import PollWidget from "./PollWidget";

const App = ({ question, options }) => {
  const [questions, setQuestions] = React.useState([{ question, options }]);

  const quesRef = React.useRef();
  const optRef = React.useRef();

  function handleQuestionSubmit() {
    if (!quesRef.current.value) {
      alert("Please enter a question");
      return;
    }
    if (!optRef.current.value) {
      alert("Please enter options");
      return;
    }
    const question = quesRef.current.value;
    const options = optRef.current.value.split(",");
    const newQuestion = {
      question,
      options,
    };
    setQuestions([...questions, newQuestion]);
  }

  return (
    <div className="App">
      <div className="Input_questions">
        <p>Enter Question</p>
        <input type="text" placeholder="Question" ref={quesRef} />
        <p>Enter Options separated by comma</p>
        <input type="text" placeholder="Options" ref={optRef} />
        <button
          style={{ display: "block", marginTop: "10px" }}
          onClick={handleQuestionSubmit}
        >
          Add Question
        </button>
      </div>
      {questions.map(({ question, options }, index) => (
        <PollWidget key={index} question={question} options={options} />
      ))}
    </div>
  );
};

export default App;
