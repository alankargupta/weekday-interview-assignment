import { Container } from "@mui/material";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Body from "./components/Body";

function App() {
  return (
    <Provider store={appStore}>
      <Container>
        <Body />
      </Container>
    </Provider>
  );
}

export default App;
