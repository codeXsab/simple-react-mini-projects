import { useState } from "react";
import SingleQuestion from "./SingleQuestion";

const QuestionList = ({ questions }) => {
  const [questionsList, setQuestionsList] = useState(questions);
  const [activeQuestionID, setActiveQuestionID] = useState(null);
  const toggleActive = (id) => {
    if (id === activeQuestionID) setActiveQuestionID(null);
    else setActiveQuestionID(id);
  };
  return (
    <div className="container">
      <h1>FAQ's</h1>
      {questionsList.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeQuestionID}
            toggleFunc={toggleActive}
          />
        );
      })}
    </div>
  );
};
export default QuestionList;
