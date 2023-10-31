import MainComponent from "./components/Main";
import WorkComponent from "./components/Work";
import ProjectsComponent from "./components/Projects";
import ContactComponent from "./components/Contact";
import AboutComponent from "./components/About";

function App() {
  return (
    <>
      <div className="snap-y snap-proximity h-screen w-screen overflow-y-scroll">
        <MainComponent />
        <AboutComponent />
        <WorkComponent />
        <ProjectsComponent />
        <ContactComponent />
      </div>
    </>
  );
}

export default App;
