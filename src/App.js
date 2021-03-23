import jumboData from "./fixtures/jumbo";
import JumbotronContainer from "./containers/JumbotronContainer";
import FooterContainer from "./containers/FooterContainer";

function App() {
  return (
    <>
      <JumbotronContainer data={jumboData} />
      <FooterContainer />
    </>
  );
}

export default App;
