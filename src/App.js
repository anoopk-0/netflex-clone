import jumboData from "./fixtures/jumbo";
import JumbotronContainer from "./containers/JumbotronContainer";
import FooterContainer from "./containers/FooterContainer";
import FaqsContainer from "./containers/FaqsContainer";

function App() {
  return (
    <>
      <JumbotronContainer data={jumboData} />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default App;
