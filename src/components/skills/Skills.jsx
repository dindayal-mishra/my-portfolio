import React from "react";

const Skills = () => {
  return (
    <div className="skills">

      <div className="leftskills">
        <h1 className="skillhead">Skills</h1>

        <div className="skillitems">
          <h3>HTML</h3>
          <div className="parent">
            <div className="child">
              <h3>80%</h3>
            </div>
          </div>

          <h3>CSS</h3>
          <div className="parent">
            <div className="child">
              <h3>70%</h3>
            </div>
          </div>

          <h3>JAVASCRIPT</h3>
          <div className="parent">
            <div className="child">
              <h3>70%</h3>
            </div>
          </div>

          <h3>REACT.JS</h3>
          <div className="parent">
            <div className="child">
              <h3>40%</h3>
            </div>
          </div>

          <h3>NODE.JS</h3>
          <div className="parent">
            <div className="child">
              <h3>10%</h3>
            </div>
          </div>

          <h3>MONGODB</h3>
          <div className="parent">
            <div className="child">
              <h3>80%</h3>
            </div>
          </div>

          <h3>JAVA</h3>
          <div className="parent">
            <div className="child">
              <h3>50%</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="skillsinfo">
        <p>HTML5 - forms,table,ordered and unorderd list</p>
        <p>CSS-3  Selectors,Box-modeling,Media-queries,Animations</p>
        <p>JavaScript  Functions,Array,Strings,DOM</p>
        <p>React.js Props,Hooks,Function Based Components</p>
        <p>Node.js Logics,Creating Server</p>
        <p>MongoDB CRUD Operations,Logical Operators,Aggregation Framework</p>
        <p>Java OOPS concept,Try Catch,Multi Threding</p>
      </div>
    </div>
  );
};

export default Skills;
