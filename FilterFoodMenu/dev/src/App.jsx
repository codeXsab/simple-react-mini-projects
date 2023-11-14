import MenuList from "./Components/MenuList";

const App = () => {
  return (
    <>
      <div style={{ marginTop: "1.75rem" }} className="title-container">
        <h1 className="title">Food Menu</h1>
        <div className="title-underline"></div>
      </div>
      <MenuList />
    </>
  );
};
export default App;
