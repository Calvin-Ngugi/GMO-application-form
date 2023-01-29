import React from "react";

const ApplicationForm = () => {
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
          <form>
            <h3 className="sign">Fill in the GMO application form</h3>
            <div className="mb-3 mt-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                autoComplete="off"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                className="form-control"
                required
                autoComplete="off"
                placeholder="Enter name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Certificate number</label>
              <input
                disabled
                type="text"
                className="form-control"
                name="certificate_number"
                required
                placeholder="Auto-Generating Certificate Number"
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="county">County</label>
              <select
                className="form-select"
                name="county"
                required
                aria-label="counties select"
              >
                <option selected>Choose your county</option>
                <option value="1">Mombasa</option>
                <option value="27">Uasin Gishu</option>
                <option value="32">Nakuru</option>
                <option value="47">Nairobi</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="GMO type">GMO type</label>
              <select
                className="form-select"
                name="GMO_type"
                required
                aria-label="counties select"
              >
                <option selected>Choose GMO type</option>
                <option value="1">BT Maize</option>
                <option value="2">Cassava</option>
                <option value="3">Bt Cotton</option>
                <option value="4">Apples</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="GMO purpose">GMO purpose</label>
              <select
                className="form-select"
                name="GMO_purpose"
                required
                aria-label="counties select"
              >
                <option selected>Choose GMO purpose</option>
                <option value="1">Research</option>
                <option value="2">Farming</option>
                <option value="3">Certificate for local</option>
                <option value="4">Certificate for export</option>
                <option value="5">Other...</option>
              </select>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
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
