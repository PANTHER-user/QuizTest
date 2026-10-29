
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    id: 2,
    question: "Which keyword declares a block-scoped variable in JavaScript?",
    options: ["var", "let", "function", "define"],
    correctAnswer: "let"
  },
  {
    id: 3,
    question: "Which method adds an element to the end of an array?",
    options: ["pop()", "shift()", "push()", "unshift()"],
    correctAnswer: "push()"
  },
  {
    id: 4,
    question: "Which React hook is used to manage component state?",
    options: ["useEffect", "useRef", "useMemo", "useState"],
    correctAnswer: "useState"
  },
  {
    id: 5,
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "SQL", "Python"],
    correctAnswer: "CSS"
  },
  {
    id: 6,
    question: "Find the next number: 2, 4, 8, 16, ?",
    options: ["18", "24", "32", "30"],
    correctAnswer: "32"
  },
  {
    id: 7,
    question: "If yesterday was Monday, what day is tomorrow?",
    options: ["Tuesday", "Wednesday", "Thursday", "Sunday"],
    correctAnswer: "Wednesday"
  },
  {
    id: 8,
    question: "What is the angle between clock hands at 3:00?",
    options: ["45 degrees", "90 degrees", "120 degrees", "180 degrees"],
    correctAnswer: "90 degrees"
  },
  {
    id: 9,
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo"
  },
  {
    id: 10,
    question: "In which year did India gain independence?",
    options: ["1942", "1945", "1947", "1950"],
    correctAnswer: "1947"
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  const handleOptionClick = (option) => {
    if (selectedOption !== ""){ 
        return;
    }

    setSelectedOption(option);
  }

  function handleNext(){
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption("");
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption("");
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="quiz-container">
        <h1>Quiz Completed! </h1>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <h1>Quizz</h1>
      <p className="progress"> Question {currentQuestion + 1} of {questions.length}</p>
      <h2>{question.id}.{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => {
          let className = "option";
          if (selectedOption !== "") {
            if (option === question.correctAnswer) {
              className += " correct";
            } else if (option === selectedOption) {
              className += " incorrect";
            }
          }
          return (
            <button key={option} className={className} onClick={() => handleOptionClick(option)} disabled={selectedOption !== ""}
            >
             {option}
            </button>
          );
        })}
      </div>
      {selectedOption !== "" && (
        <div className="result">
          <h3 style={{padding:"20px"}}>
            {selectedOption === question.correctAnswer ? " Correct Answer!" : " Incorrect Answer!"}
          </h3>
          <p>Correct answer: <strong style={{color:"Green"}}>{question.correctAnswer}</strong> </p>
          <button onClick={handleNext}>{currentQuestion === questions.length - 1 ? "End Quiz": "Next Question"}</button>
        </div>
      )}
    </div>
  );
}

export default App;
