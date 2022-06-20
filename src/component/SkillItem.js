import Skillgrade from "./Skillgrade";


function SkillItem({ image1, image2, name,color1, color2, percent1,percent2 }) {
  return (
    <div className=" col c-12 m-6 l-4">
      <div className="skills__item">
        <div className="skills__item-side skills__item--front" style={{backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.05),rgba(0,0,0,0.05)),url(${image2})`}}>
          <div className="skills__item--front__img">
            <img src={image1} alt="html" />
          </div>
          <div className="skills__item--front__script">
            <div className="heading-title">{name}</div>
          </div>
        </div>
        <div className="skills__item-side skills__item--back" style={{backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0.3),rgba(255, 255, 255, 0.3)),url(${image2})`}}>
          <Skillgrade color={color1} title="Knowledge" width={percent1+'%'}></Skillgrade>
          <Skillgrade color={color2} title="Practice" width={percent2+'%'}></Skillgrade>
        </div>
      </div>
    </div>
  );
}

export default SkillItem;
