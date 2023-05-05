import "./App.css";
import Tweet from "./components/Tweet";
const App = () => {
  return (
    <>
      <Tweet name={"Bikram"} username={"@bikram"} />
      <Tweet name="Hari" username="@hari" />
      <Tweet name="Nabin" username="@nabin" />
      <Tweet name="Kriti" username={"kriti"} />
    </>
  );
};

export default App;
