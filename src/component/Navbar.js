import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
  const [isOpen, setMobileMenu] = useState(false);
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
  const navigate = useNavigate();
  const search = (e) => {
    if(e.key === "Enter") {
      //임력한 검색어를 읽어와서
      let keyword = e.target.value;

      //url을 바꿔준다.
      navigate(`/?q=${keyword}`)
    }
  }
  const logoutUser = () => {
    setAuthenticate(false)
  }
  const toggleMenu = () => {
    setMobileMenu(isOpen => !isOpen)
    console.log(isOpen);
  }
  window.addEventListener("resize", () => {
    setMobileMenu(false)
  })
  return (
    <div>
        <div>
          <span className={`mo-nav-btn ${isOpen?'mo-nav-btn-active':''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          {authenticate === false ? (
            <Link to='/login' className='login-btn'>
              <FontAwesomeIcon icon={faUser} />
              <div>Login</div>
            </Link>
          ) : (
            <Link to='/' className='login-btn'>
              <FontAwesomeIcon icon={faUser} />
              <div onClick={logoutUser}>Logout</div>
            </Link>
          )}
        </div>
        <div className='logo-container'>
            <Link to='/'>
              <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png' alt=''/>
            </Link>
        </div>
        <div className='menu-container'>
            <ul className={`menu-list ${isOpen?'menu-list-active':''}`}>
              {menuList.map((menu) => <li>{menu}</li>)}
            </ul>
            <div className='search-box-container'>
              <FontAwesomeIcon icon={faSearch} className='search-btn'/>
              <input id='search' type='text' placeholder='제품검색' onKeyDown={(e)=>search(e)}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar