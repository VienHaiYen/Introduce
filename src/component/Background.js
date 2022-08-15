import AnimationText from "./AnimationText";
function Background() {
  return (
    <div className="content__bg">
      <div className="bg_heading"></div>
      {/* <MyWatch /> */}
      <AnimationText />
      <a className="btn-special" href={require("../cv/CV.pdf")} download="[CV]VienHaiYen">Download CV</a>
    </div>
  );
}

export default Background;
