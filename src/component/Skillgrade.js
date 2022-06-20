function Skillgrade({color, title, width}){
    return (
        <div className="skill-point left-align">
            {title}
            <div className="skill-grade">
            <div className="skill-grade__present" style={{borderBottomColor:`${color}`,width:`${width}`}}></div>
          </div>
        </div>
    )
}
export default Skillgrade