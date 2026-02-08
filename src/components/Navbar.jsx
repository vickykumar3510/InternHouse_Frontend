import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
<nav className="navbar navbar-expand-lg bg-primary container-fluid">
  <div className="container">
              <Link to="/" className="navbar-brand">
          <strong className='text-light'>Intern House</strong>
          </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link to="/jobdetails" className="btn text-light">Job Postings</Link>
        </li>
        <li className="nav-item">
          <Link to="/postjob" className="btn text-light">Post a Job</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
