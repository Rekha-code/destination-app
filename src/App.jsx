import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DestinationInput from "./components/DestinationInput";
// import ListView from "./components/ListView";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Container>
        <DestinationInput />
        {/* <ListView /> */}
      </Container>
    </>
  );
}

export default App;
