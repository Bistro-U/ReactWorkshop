import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import TestFetchComponent from "./useFetch/TestFetchComponent";
const store = ConfigureStore();
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            {/* <Main /> */}
            <TestFetchComponent/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
