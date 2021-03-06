import "./App.scss";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import PortfliosPage from "./Pages/PortfoliosPage";
// import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import { useState } from "react";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolios" exact>
              <PortfliosPage />
            </Route>
            {/* <Route path="/blogs" exact>
              <BlogsPage />
            </Route> */}
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
            <Route
              path="/github"
              component={() => {
                window.location.href = "https://github.com/Leo599simplon/";
                return null;
              }}
            />
            <Route
              path="/linkedin"
              component={() => {
                window.location.href =
                  "https://www.linkedin.com/in/hutinLeo599/";
                return null;
              }}
            />

            <Route
              path="/cv"
              component={() => {
                window.location.href =
                  "https://drive.google.com/uc?export=download&id=1HvcUDjSZdjnedIMrdR1dnLBLmqA8Jx8z";
                return null;
              }}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
