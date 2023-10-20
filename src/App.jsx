import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
