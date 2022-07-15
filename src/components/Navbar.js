import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                  Guo <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  // dropdown menu
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar