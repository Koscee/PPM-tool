import React from 'react';
import { Link } from 'react-router-dom';

const NavLinkItem = ({ href, children, ...rest }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={href} {...rest}>
        {children}
      </Link>
    </li>
  );
};

export default NavLinkItem;
