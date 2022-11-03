import './header.css'

const Header = () => {
  return (

    <div className='header_container'>
      <div id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About Me</h4>
              <ul className="list-unstyled">
                <li className="text-white">Hi, I used to be an UX Researcher / School Psychology Counselor / IRS Tax Volunteer.
                </li>
                <li className="text-white">Now, I'm a mom of two kiddos, teaching myself to be a Fullstack Developer. </li>
              </ul>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li className="text-white">Location: Greater Seattle Area</li>
                <li className="text-white">Email: zzfggg16@gmail.com</li>
                <li >
                  <a href="https://github.com/learningreac" className="navbar-brand d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="feather feather-github">
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                      </path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header