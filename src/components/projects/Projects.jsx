import React from 'react'

const Projects = () => {
  return (
    <div >
        <h1 className='projectheading'>Projects</h1>
      <div className="firstline">
        <div className="firstproject">
          <img src="image/loginpage.png" alt="image" />
            <h1>Login Page</h1>
            <p>one Sign In page when user enter correct data then Login to the websites</p>
        </div>

        <div className="secondproject">
        <img src="image/hotstar.png" alt="image" />
            <h1>Hotstar Clone</h1>
            <p>Hotstar Clone is a Replica of Hotstar Website , The Hompage is Looking Like  Simillar to the Hotstar</p>
        </div>

        <div className="thirdproject">
        <img src="image/converttext.png" alt="image" />
            <h1>Convert-Text</h1>
            <p>User enter text,click uppercase button whole text transform to uppercase,lowercase there is one button remove extra spaces it remove extra spaces</p>
        </div>
      </div>


      <div className="secondline">
          <div className="fourproject">
            <img src="image/cricketform.png" alt="" />
            <h1>Cricket Form</h1>
            <p>User enter all the information about his cricket skills.</p>
        </div>
  
        <div className="fiveproject">
        <img src="image/newsapp.png" alt="image" />
            <h1>News-App</h1>
            <p>User Reads different Categories of News</p>
        </div>
  
        <div className="sixproject">
          <img src="image/todo.png" alt="" />
            <h1>TO DO LIST</h1>
            <p>user add list to do</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
