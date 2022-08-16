import { $, $$ } from "../js/main";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__main">
        <div className="timeline__ele-top timeline__ele ele--1">
          8/2017
          <br />
          Study at Trung Vuong High School
        </div>
        <div className="timeline__ele-bottom timeline__ele ele--2">
          10/2020
          <br />
          Studying at VNU - University of Scince
        </div>
        <div className="timeline__ele-top timeline__ele ele--3">
          2020
          <br />
          1st year
        </div>
        <div className="timeline__ele-bottom timeline__ele ele--4">
          2021
          <br />
          2nd year
        </div>
        <div className="timeline__ele-top timeline__ele ele--5">NOW</div>
      </div>
    </div>
  );
}
export default Timeline;
