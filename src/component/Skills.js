// import skill-1 from '../img/skill-1.png';
import skill_1 from '../img/skill-1.png';
import skill_2 from '../img/skill-2.png';
import skill_3 from '../img/skill-3.png';
import skill_4 from '../img/skill-4.png';
import skill_5 from '../img/skill-5.png';
import skill_6 from '../img/skill-6.png';

import sbg_1 from '../img/sbg-1.jpg';
import sbg_2 from '../img/sbg-2.jpg';
import sbg_3 from '../img/sbg-3.jpg';
import sbg_4 from '../img/sbg-4.jpg';
import sbg_5 from '../img/sbg-5.jpg';
import sbg_6 from '../img/sbg-6.jpg';

import SkillItem from './SkillItem';

const skills = [
    {
        id:1,
        img1:skill_1,
        img2:sbg_1,
        name:'HTML',
        color1: '#3CB371',
        color2: '#2791E3',
        percentage1: 80,
        percentage2: 70,
    },
    {
        id:2,
        img1:skill_2,
        img2:sbg_2,
        name:'CSS',
        color1: '#CE757B',
        color2: '#A2B9ED',
        percentage1: 85,
        percentage2: 75,
    },
    {
        id:3,
        img1:skill_3,
        img2:sbg_3,
        name:'Javascript',
        color1: '#F54768',
        color2: '#64C4C3',
        percentage1: 70,
        percentage2: 68,
    },
    {
        id:4,
        img1:skill_4,
        img2:sbg_4,
        name:'ReactJS',
        color1: '#FFA197',
        color2: '#C3E6AE',
        percentage1: 80,
        percentage2: 70,
    },
    {
        id:5,
        img1:skill_5,
        img2:sbg_5,
        name:'Python',
        color1: '#2EB1A1',
        color2: '#C2508B',
        percentage1: 80,
        percentage2: 70,

    },
    {
        id:6,
        img1:skill_6,
        img2:sbg_6,
        name:'SASS',
        color1: '#EEEE00',
        color2: '#009CA5',
        percentage1: 60,
        percentage2: 60,

    },
]

function Skills(){
    return (
        <div className="skills">
            <div className="heading-primary">My skill</div>
          <div className="row">
            {skills.map((skill)=>(
                <SkillItem key={skill.id}
                     image1={skill.img1}
                     image2={skill.img2}
                     name={skill.name}
                     color1={skill.color1}
                     color2={skill.color2}
                     percent1={skill.percentage1}
                     percent2={skill.percentage2}
                />
                ))
            }
          </div>
        </div>
    )
}

export default Skills;