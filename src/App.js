import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Board from "./routes/Board";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} /> 
      {/* exact=true 너의 url이 / 일때만 home을 렌더링해라
      이것을 안쓸경우 2개의 컴포넌트가 동시에 렌더링된다. */}
      <Route path="/about" component={About} />
      <Route path="/board" component={Board} />
      <Route path="/movie/:id" component={Detail} />
      {/* HashRouter와 BrowserRouter 차이 공부하기 */}
    </HashRouter>
  );
}

export default App;
