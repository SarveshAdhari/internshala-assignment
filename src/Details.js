import './Details.css';

const Details = () => {
    return ( 
        <div className="main">
        <div className="progress">
            <h4>KYC Form</h4>
            <h6>Complete and submit the form <br />to accept payments.</h6>
            <h5>
            &#10004; Contact
            </h5>
            <div className="rect">
            <div className="BD">
                Business Details
            </div>
            <div className="vector">
                &gt;
                </div>
            </div>
            <div className="BO">
                Business Overview
            </div>
        </div>
        <div className="kyc-form">
            <div className="info">
                BUSINESS OVERVIEW
            </div>
            <form className="actual-form">
                <label className="labeltype">Business Type</label>
                <select className="select1" >
                    <option >Select</option>
                </select>
                <label className="labelcategory">Business Category</label>
                <select className="select2" >
                    <option>Select</option>
                </select>
                <label className="labelcat">Business Category</label>
                <textarea className="cat" rows="6" value="Minimum 50 characters"/>
                <small>Please give a brief description of the nature of your 
                    <br />business.
                     Please include examples of products you sell,
                     <br /> the business category you operate
                      under, your <br />customers and the channels you primarily use to<br /> 
                      conduct your business
                      (Website, offline retail etc).</small>
            </form>
            <hr className="line" />
            <button className="btn-save">Save</button>
            <button className="btn-next">Save &#38; Next</button>
        </div>
        </div>
     );
}
 
export default Details;