import React from "react";
import '../Css/Contact.css'

const Contact=()=>{
return(
    <>
    <div className="top">
    <h1 className="headerContactTop">We're here</h1>
    <h1 className="headerContactBottom">Want to get in touch? We'd love to hear from you. Here's how you can reach us..</h1>
    </div>
    <div class="contactList">
    <div className="top">
    <h1 className="headerAbout">Bharath Kumar A</h1>
    <h3 className="contentAbout">Director - Business Development</h3>
    <h3 className="contentAbout">M.Tech(Mechanical)</h3>
    <h3 className="contentAbout">Experience: 8+ years</h3>
    <h3 className="contentAbout">bharath@mics.co.in, info@mics.com</h3>
    <h3 className="contentAbout">+91-9703095576</h3>
    </div>
    <div className="top">
    <h1 className="headerAbout">Ravi Subramanyam</h1>
    <h3 className="contentAbout">Director - Finance and Accounts</h3>
    <h3 className="contentAbout">M.Tech(Mechanical)</h3>
    <h3 className="contentAbout">Experience: 11+ years</h3>
    <h3 className="contentAbout">maarsinspectorate@gmail.com</h3>
    <h3 className="contentAbout">+91-9908230413</h3>
    </div>
    </div>
    <div className="top">
    <h1 className="headerContactTop">Contact Address</h1>
    <h1 className="headerContactBottom">Lig-97, Ground floor, Near hospital lane, KPHB colony, Kukatpally, Medchal-Malkajgiri district, Hyderabad-500072</h1>
    </div>
    </>
)
}

export default Contact;