import * as React from "react"
import Appointment from "../components/Appointment"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Services from "../components/Services"
import Specialist from "../components/Specialist"
import Testimonial from "../components/Testimonial"
import Innovative from "../components/Innovative"
export default function Home() {
  return (
    <>
    <div className="back " style={{ backgroundImage: "url(/background1.png)" }}>

<Navbar/>
<Appointment/>
<Services/>
    </div>
<Innovative/>
<div className="back " style={{ backgroundImage: "url(/background1.png)" }}>
<Specialist/>

<Testimonial/>
<Newsletter/>
</div>
<Footer/>
</>
  )
}
