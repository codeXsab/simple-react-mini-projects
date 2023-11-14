import QuestionList from "./Components/QuestionList";
import data from "./data";
const App = () => {
  return (
    <main style={{ flexDirection: "column" }}>
      <QuestionList questions={data} />
    </main>
  );
};
export default App;
