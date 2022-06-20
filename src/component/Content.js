import Skills from './Skills'
import Background from './Background'
import About from './About'
import Enroll from './Enroll'
import Projects from './Projects'


function Content(){
    return (
      <div className="content">
        <Background/>
        <About />
        <Skills />
        <Projects/>
        <Enroll />
      </div>
    )
  }

  export default Content;