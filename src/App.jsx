import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";

import fightersList from "./util/api.jsx";

function App() {
  const data = fightersList();
  return (
    <>
      <Header />
      <Results dataFighters={data} />
    </>
  );
}

export default App;
