import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function NavBar(props,{textBtn}) {
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                {/* <a className="navbar-brand" href="/">{props.title}</a> */}
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    {/* <a className="nav-link active" aria-current="page" href="/">{props.homeText}</a> */}
                    <Link className="nav-link active" aria-current="page" to="/">{props.homeText}</Link>
                </li>
                <li className="nav-item">
                    {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
                    <Link className="nav-link" to="/about">{props.aboutText}</Link>
                </li>
                </ul>
                <div className="d-flex">
                    <div className="bg-primary rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggle('primary')}}></div>
                    <div className="bg-warning rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggle('warning')}}></div>
                    <div className="bg-danger rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggle('danger')}}></div>
                    <div className="bg-info rounded mx-2" style={{height:'30px',width:'30px'}} onClick={()=>{props.toggle('info')}}></div>
                </div>
                <div className={`form-check form-switch text-${props.mode==='white'?'dark':'white'}`}>
                    <input className="form-check-input"
                    type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggle(null)}}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
            </div>
            </div>
      </nav>
    </>
    )
}
NavBar.propTypes={
        title:PropTypes.string.isRequired,
        aboutText:PropTypes.string.isRequired,
        homeText: PropTypes.string.isRequired,
}
NavBar.defaultProps={
    title:'TextUtils',
    aboutText:'About',
    homeText:'Home'
}
export default NavBar
