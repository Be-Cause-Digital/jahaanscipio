import { useState } from "react";
import "./App.css";
import "./styles/index.scss";
import Header from "./components/header/header";
import ProjectCard from ".//components/projectcard/projectcard";

import projectData from "./data/projectdata";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

// import Isotope from "isotope-layout";

function App() {
  // const elem = document.querySelector("#projects-list");
  // const iso = new Isotope(elem, {
  //   itemSelector: ".project-card",
  //   layoutMode: "fitRows",
  // });

  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="App">
      <Header />
      <main>
        <h1>this is the main content!</h1>
        <section id="projects-list">
          <AnimateSharedLayout type="crossfade">
            {projectData.map((project) => (
              <motion.div
                layoutId={selectedId}
                onClick={() => setSelectedId(project.id)}
                key={project.id}
              >
                <ProjectCard />
              </motion.div>
            ))}
            <AnimatePresence>
              {selectedId && (
                <motion.div layoutId={selectedId} className="project-card">
                  <motion.h5>{projectData.title}</motion.h5>
                  <motion.h2>{projectData.description}</motion.h2>
                  <motion.button onClick={() => setSelectedId(null)}>
                    CLOSE
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </section>
      </main>
    </div>
  );
}

export default App;

// const [selectedId, setSelectedId] = useState(null);

// {
/* <AnimateSharedLayout type="crossfade">
  {items.map(item => (
    <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
      <motion.h5>{item.subtitle}</motion.h5>
      <motion.h2>{item.title}</motion.h2>
    </motion.div>
  ))}
 
  <AnimatePresence>
    {selectedId && (
      <motion.div layoutId={selectedId}>
        <motion.h5>{item.subtitle}</motion.h5>
        <motion.h2>{item.title}</motion.h2>
        <motion.button onClick={() => setSelectedId(null)} />
      </motion.div>
    )}
  </AnimatePresence>
</AnimateSharedLayout> */
// }
