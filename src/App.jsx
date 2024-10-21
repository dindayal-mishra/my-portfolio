import React from "react";
import "./index.css"
import Navbar from "./components/Navbar";
import MainBody from "./components/mainbody/MainBody";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";


const App =()=>{

    
    return(
        <div className="app">
                <nav className="navbar">
                    <Navbar/>
                </nav>

                <section className="topSection">
                    <MainBody/>
                </section>

                <section>
                    <Skills/>
                </section>

                <section>
                    <Projects/>
                </section>

                <footer>
                    <Footer/>
                </footer>
        </div>
    )
}

export default App