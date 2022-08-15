import {useState} from 'react'
function Enroll() {
  const [displayError, setDisplayError] = useState("none")
  return (
    <>
      <div className="heading-primary center-align">Contact me</div>
      <div className="enroll">
        <div className="enroll-cover">
          <div className="heading-secondary">ENROLL NOW</div>
          <div className="enroll-part">
            <input
              type="text"
              placeholder="Full Name"
              className="input-bar enroll-part__name"
              onChange={()=>
                {setDisplayError("block")
                console.log(123)}}
            />
            <br />
            <input
              type="text"
              enabled="false"
              placeholder="Email"
              className="input-bar enroll-part__email"
              onChange={()=>setDisplayError("block")}
            />
            <br />
            <div className="btn --bg-blue">Submit</div>
            <div className="error-text" style={{display: `${displayError}`}}>Sorry but this function has not been worked</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Enroll;
