import Timeline from "./Timeline";
function About() {
  function hoverAvatar() {
    var h1 = document.createElement('h1');
    h1.innerHTML = "Moira";
    h1.className="avaName"
    var ava = document.querySelector('.about__picture')
    ava.appendChild(h1)
    // alert('123456')
  }
  function unHoverAvatar() {
    document.querySelector('.avaName').remove();
  }
  return (
    <div className="about">
      <div className="heading-primary">Information</div>
      <div className="row">
        <div className="col c-12 m-2 l-2 about__picture" onMouseOver={hoverAvatar} onMouseOut={unHoverAvatar}>
          <div className="cover-picture">
            <img src={require("../img/avatar-1.jpg")} alt="html" />
          </div>
        </div>
        <div className=" row col c-12 m-10 l-10 about__script pl-12">
          <div className="col c-12 m-12 l-12 left-align">
            <div className="heading-title mb-8">About ME !</div>
            <div className="heading-description">
              My name is Viên Hải Yến, I come from Ho Chi Minh City. Now, I am studying at National University, University of Science, major in Technology Information.<br/>
              I want to be a front-end developer and try my best in this field. I have done some projects by myseft and if you want to see more, please click  <a href="https://github.com/VienHaiYen">here</a>. Contact me if you're interested in my CV.
            </div>
            <ul className="about-icon">
                    <li className="about-iconItem"><a target="_blank" href="https://www.facebook.com/haiyan.kaiyoma.7/"><i className="ti-facebook"></i></a></li>
                    <li className="about-iconItem"><a target="_blank" href="vhyyen2301.work@gmail.com"><i className="ti-email"></i></a></li>
                    <li className="about-iconItem"><a target="_blank" href="https://github.com/VienHaiYen"><i className="ti-github"></i></a></li>
                    <li className="about-iconItem"><a target="_blank" href="https://www.linkedin.com/in/h%E1%BA%A3i-y%E1%BA%BFn-vi%C3%AAn-930a08229/"><i className="ti-linkedin"></i></a></li>
                    <li className="about-iconItem"><a className="tel" title="0792905933" href="tel:0792905933">📞Call me now!</a></li>
                </ul>
          </div>
          <div className="col c-12 m-12 l-12">
            {/* <Timeline /> */}
          </div>
        </div>
      </div>
      <div className="about__detail">
      </div>
    </div>
  );
}

export default About;
