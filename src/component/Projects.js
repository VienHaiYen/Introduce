import pj_1 from '../img/pj-1.png';
import pj_2 from '../img/pj-2.png';
import pj_3 from '../img/pj-3.png';
import pj_4 from '../img/pj-4.png';
import pj_5 from '../img/pj-5.png';
import pj_6 from '../img/pj-6.png';
import pj_7 from '../img/pj-7.png';
const projects = [
    {
        id:1,
        name:'Self Taught',
        img: pj_1,
        type:'remake',
        link:'https://vienhaiyen.github.io/Remake-SelfTaught/'
    },
    {
        id:2,
        name:'Luxstay',
        img: pj_2,
        type:'remake',
        link:'https://vienhaiyen.github.io/remake_luxstay/'
    },{
        id:3,
        name:'Set Sail',
        img: pj_3,
        type:'remake',
        link:'https://vienhaiyen.github.io/remake_setsail/'
    },
    {
        id:4,
        name:'Gold Lookup',
        img: pj_4,
        type:'project in school',
        link:'https://github.com/VienHaiYen/Gold-Price-Lookup'
    },
    {
        id:5,
        name:'Blackjack',
        img: pj_5,
        type:'game',
        link:'https://vienhaiyen.github.io/Blackjack/'
    },
    {
        id:6,
        name:'Rock paper scissors',
        img: pj_6,
        type:'game',
        link:'https://vienhaiyen.github.io/KeoBuaBao/'
    },
    {
        id:7,
        name:'To Do List',
        img: pj_7,
        type:'note',
        link:'https://github.com/VienHaiYen/To-Do-List/'
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
                        <div className="btn --bg-white" onMouseOver={()=>{handleHover(index)}} onMouseOut={()=>{handleUnHover(index)}} onClick={()=>{window.open(item.link, '_blank')}}>More Detail</div>
                        <div className="projects-group__item--img" style={{backgroundImage:`url(${item.img})` }} onMouseOver={()=>{handleHover(index)}} onMouseOut={()=>{handleUnHover(index)}}></div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Projects;