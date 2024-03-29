import { Link } from "react-router-dom";
export default function Corosale(){
    return<>
    <section
    id="hero"
    className="d-flex justify-content-center align-items-center"
  >
    <div
      className="container position-relative" data-aos="zoom-in" data-aos-delay={100} 
    >
      <h1>
        Learning Today,
        <br />
        Leading Tomorrow
      </h1>
      <h2>We provide best platform to Enhance your child skills</h2>
      <Link to={'/courses'} className="btn-get-started">
        Know More
      </Link>
    </div>
  </section>
  {/* End Hero */}
    
    </>
}