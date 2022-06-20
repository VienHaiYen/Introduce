function Sidebar(){
    return (
      <div className="sidebar">
        <div className="sidebar__close"><i className="ti-close"></i></div>
        <div className="sidebar__avatar">
            <img src={require('../img/avatar-1.jpg')} alt="bg-1"/>
        </div>
        <div className="sidebar__descript center-align">
            <div className="heading-title">My Info</div>
            <div className="heading-description">VNU-HCMUS</div>
            <div className="row sidebar__descript--row">
                <ul className="sidebar__descript-icon col">
                    <li className="sidebar__descript-iconItem"><i className="ti-facebook"></i></li>
                    <li className="sidebar__descript-iconItem"><i className="ti-instagram"></i></li>
                    <li className="sidebar__descript-iconItem"><i className="ti-github"></i></li>
                    <li className="sidebar__descript-iconItem"><i className="ti-linkedin"></i></li>
                    {/* <li className="sidebar__descript-iconItem"><i className="ti-email"></i></li> */}
                </ul>
                <ul className="sidebar__descript-list col">
                    <li className="sidebar__descript-listItem active"><span>Profile</span></li>
                    {/* <li className="sidebar__descript-listItem"><span>Skill</span></li> */}
                    {/* <li className="sidebar__descript-listItem"><span>Information</span></li> */}
                    <li className="sidebar__descript-listItem"><span>Project</span></li>
                    <li className="sidebar__descript-listItem"><span><i className="ti-email"></i></span></li>
                </ul>
            </div>
        </div>
      </div>
    )
}

export default Sidebar;