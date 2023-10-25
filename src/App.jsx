import Nav from "./components/Sidenav";
import MainComponent from "./components/Main";
import WorkComponent from "./components/Work";
import ProjectsComponent from "./components/Projects";
import ContactComponent from "./components/Contact";
import Footer from "./components/Footer";
import AboutComponent from "./components/About";

function App() {
  return (
    <>
      {/* <Nav /> */}
      <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
        <MainComponent />
        <AboutComponent />
        <WorkComponent />
        <ProjectsComponent />
        <ContactComponent /> {/* Add footer here */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
