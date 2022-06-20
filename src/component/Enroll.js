function Enroll() {
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
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              className="input-bar enroll-part__email"
            />
            <br />
            <div className="btn --bg-blue">Submit</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Enroll;
