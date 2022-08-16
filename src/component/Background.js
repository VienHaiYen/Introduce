import AnimationText from "./AnimationText";
function Background() {
  return (
    <div className="content__bg">
      <AnimationText />
      {/* <a
        className="btn-special"
        href={require("../cv/CV.pdf")}
        download="[CV]VienHaiYen"
      >
        Download CV
      </a> */}
      <a className="btn-special-2" target="_blank" href="https://drive.google.com/file/d/1v7CHjyp-_80upNogwcABpURD929AAYaH/view?usp=sharing"><span>See My CV</span></a>
    </div>
  );
}

export default Background;
