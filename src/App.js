import "bootstrap/dist/css/bootstrap.min.css";
import "./Global.css";
import "./App.css";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Main from "./Components/main";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
