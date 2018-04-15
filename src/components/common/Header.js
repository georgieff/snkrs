import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => (
    <nav>
        <IndexLink to="/" activeClassName="active">home</IndexLink>
        {" | "}
        <Link to="/sneakers" activeClassName="active">sneakers</Link>
        {" | "}
        <Link to="/about" activeClassName="active">about</Link>
    </nav>
);

export default Header;
