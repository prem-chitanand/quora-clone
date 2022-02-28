import React from "react";
import "./ApplicationContent.css";

function ApplicationContent() {
  return (
    <div className="application__contents">
      <div className="application__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg"
          alt=""
        />
        <div className="application__contentTitle">
          <h5>Mobile App Programmer</h5>
          <p>The best Mobile App Development Company</p>
        </div>
      </div>
      <div className="application__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1574818-100-mzdwostcualpwcxekyrvyqqpychetdoc.jpeg"
          alt=""
        />
        <div className="application__contentTitle">
          <h5>Quota of Quotes</h5>
          <p>Daily dosage of unforgettable lines from ...</p>
        </div>
      </div>
      <div className="application__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1644613-100-ydflucgoeztbhwyurtmlqqrgfqmjmhpl.jpeg"
          alt=""
        />
        <div className="application__contentTitle">
          <h5>Art & Artist</h5>
          <p>A Space retated to creating, practicing an...</p>
        </div>
      </div>
   
    </div>
  );
}

export default ApplicationContent;
