import './App.css';

const Contact = () => {
    return ( 
        <div className="main">
            <a className="close" href="/">X</a>
        <div className="c-progress">
            <h4>KYC Form</h4>
            <h6>Complete and submit the form <br />to accept payments.</h6>
            <div className="c-rect">
                <h5>
                    Contact
                </h5>
                <div className="c-vector">
                &gt;
                </div>
            </div>
            <div className="c-BO">
                Business Overview
            </div>
            <div className="c-BD">
                Business Details 
            </div>
        </div>
        <div className="kyc-form">
            <div className="info">
                CONTACT INFO
            </div>
            <form className="actual-form">
                <label className="labelname">Contact Name</label>
                <input className="name" type="text" />
                <label className="labelnumber">Contact Number</label>
                <input className="number" type="text" />
                <label className="labelemail">Contact Email</label>
                <input className="email" type="text" />
            </form>
            <hr className="line" />
            <button className="btn-save">Save</button>
            <button className="btn-next"><a href="details">Save &#38; Next</a></button>
        </div>
        </div>
     );
}
 
export default Contact;