import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const ApplicationForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [county, setCounty] = useState("");
  const [gmoType, setGmoType] = useState("");
  const [gmoPurpose, setGmoPurpose] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "gmoDetailsForm"), {
      name: name,
      email: email,
      county: county,
      gmoType: gmoType,
      gmoPurpose: gmoPurpose,
      feedback: feedback,
    })
      .then(() => {
        console.log("Message sent successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
    setEmail("");
    setName("");
    setCounty("");
    setGmoType("");
    setGmoPurpose("");
    setFeedback("");
  };

  return (
    <div className="container outer">
      <div className="outer-inner row">
        <div className="col d-flex justify-content-start column1">
          <img
            src="https://www.nationalchickencouncil.org/wp-content/uploads/2013/06/Corn-Field.jpg"
            alt="gmo"
          />
        </div>
        <div className="col mx-5 d-flex justify-content-end column2">
          <form onSubmit={handleSubmit}>
            <h3 className="sign">Fill in the GMO application form</h3>
            <div className="mb-3 mt-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                autoComplete="off"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                className="form-control"
                required
                autoComplete="off"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="county">County</label>
              <select
                className="form-select"
                name="county"
                required
                aria-label="counties select"
                value={county}
                onChange={(e) => setCounty(e.target.value)}
              >
                <option value="don't pick this">Choose your county</option>
                <option value="Mombasa">Mombasa</option>
                <option value="Lamu">Lamu</option>
                <option value="Uasin Gishu">Uasin Gishu</option>
                <option value="Nakuru">Nakuru</option>
                <option value="Nairobi">Nairobi</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="GMO type">GMO type</label>
              <select
                className="form-select"
                name="GMO_type"
                required
                aria-label="type select"
                value={gmoType}
                onChange={(e) => setGmoType(e.target.value)}
              >
                <option value="don't pick this">Choose your GMO type</option>
                <option value="Bt_maize">BT Maize</option>
                <option value="Cassava">Cassava</option>
                <option value="Bt_cotton">Bt Cotton</option>
                <option value="Apples">Apples</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="GMO purpose">GMO purpose</label>
              <select
                className="form-select"
                name="GMO_purpose"
                required
                aria-label="purpose select"
                value={gmoPurpose}
                onChange={(e) => setGmoPurpose(e.target.value)}
              >
                <option value="don't pick this">Choose your GMO purpose</option>
                <option value="Research">Research</option>
                <option value="Farming">Farming</option>
                <option value="Local">Certificate for local</option>
                <option value="Export">Certificate for export</option>
                <option value="Other">Other...</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="formTextArea">Feedback and complaints</label>
              <textarea
                type="text"
                className="form-control"
                rows="3"
                placeholder="Write us a feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-warning">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
