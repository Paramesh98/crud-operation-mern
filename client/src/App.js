import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";
import postCreate from "./Components/postCreate";
import Posts from "./Components/posts";
import postUpdate from "./Components/postUpdate";
import MenuBarComponents from "./Components/View/MenuBarComponents";

function App() {
  return (
    <div className="App">
      <Router>
        <MenuBarComponents />
        <Container className="mt-4">
          <Route path="/" exact component={Posts} />
          <Route path="/add" exact component={postCreate} />
          <Route path="/update" exact component={postUpdate} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
