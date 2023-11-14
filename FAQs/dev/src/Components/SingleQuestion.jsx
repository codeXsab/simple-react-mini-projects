const SingleQuestion = ({ id, title, info, activeId, toggleFunc }) => {
  const isActive = id === activeId;
  return (
    <div style={{ position: "relative" }} className="question">
      <h5>{title}</h5>
      {isActive && <p>{info}</p>}
      <button
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          margin: "15px 25px",
        }}
        className="question-btn"
        onClick={() => toggleFunc(id)}
      >
        {isActive ? "-" : "+"}
      </button>
    </div>
  );
};
export default SingleQuestion;
