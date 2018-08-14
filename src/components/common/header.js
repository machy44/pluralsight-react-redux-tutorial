import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import LoadingDots from "./loadingDots";

const Header = ({ loading }) => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
      </ul>
      { loading && <LoadingDots interval={100} dots={20}/> }
    </nav>
  </header>
);

Header.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default Header;
