import pj_1 from '../img/pj-1.png';
import pj_2 from '../img/pj-2.png';
import pj_3 from '../img/pj-3.png';
import pj_4 from '../img/pj-4.png';
import pj_5 from '../img/pj-5.png';
const projects = [
    {
        id:1,
        name:'Landing Cap',
        img: pj_1,
        type:'remake',
    },
    {
        id:2,
        name:'Luxstay',
        img: pj_2,
        type:'remake',
    },{
        id:3,
        name:'Set Sail',
        img: pj_3,
        type:'remake',
    },
    {
        id:4,
        name:'Gold Lookup',
        img: pj_4,
        type:'project in school',
    },
    {
        id:5,
        name:'Blackjack',
        img: pj_5,
        type:'game',
    }
]
function Projects(){
    const handleHover =function (index){
        var btn = document.querySelectorAll('.btn.--bg-white')
        if(btn[index]){
            btn[index].style.opacity = 1
            btn[index].addEventListener('mouseover',handleHover)
        }
    }
    const handleUnHover =function (index){
        var btn = document.querySelectorAll('.btn.--bg-white')
        btn[index].style.opacity =0
    }
    return (
        <div className="projects">
            <div className="heading-primary center-align">Projects</div>
            <div className="projects-group row">
                {projects.map((item,index)=>(
                    <div className="projects-group__item col c-12 m-6 l-6" key={item.id}>
                        <div className="btn --bg-white" onMouseOver={()=>{handleHover(index)}} onMouseOut={()=>{handleUnHover(index)}}>More Detail</div>
                        <div className="projects-group__item--img" style={{backgroundImage:`url(${item.img})` }} onMouseOver={()=>{handleHover(index)}} onMouseOut={()=>{handleUnHover(index)}}></div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Projects;