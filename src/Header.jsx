export default function Header({active, handleClick}){

    return(
        <nav className="navbar navbar-expand-md bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a onClick={()=> handleClick("home")} className={`nav-link ${active == "home"?"active-link":""}` } aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a onClick={()=> handleClick("about")} className={`nav-link ${active == "about"?"active-link":""}` } href="#">About</a>
        </li>
        <li className="nav-item">
          <a onClick={()=> handleClick("services")} className={`nav-link ${active == "services"?"active-link":""}` } href="#">Services</a>
        </li>
      </ul>
      <hr className="d-md-none" />
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a onClick={()=> handleClick("login")} className={`nav-link ${active == "login"?"active-link":""}` } aria-current="page" href="#">login</a>
        </li>
        
        <li className="nav-item">
          <a onClick={()=> handleClick("signup")} className={`nav-link ${active == "signup"?"active-link":""}` } href="#">signup</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )

}