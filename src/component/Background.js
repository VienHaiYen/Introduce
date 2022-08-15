import AnimationText from "./AnimationText";
function Background() {
  return (
    <div className="content__bg">
      <div className="bg_heading"></div>
      {/* <MyWatch /> */}
      <AnimationText />
      <a className="btn-special" href="../cv/CV.pdf" download="cv.pdf">Download</a>
    </div>
  );
}

export default Background;
