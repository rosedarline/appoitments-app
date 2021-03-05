import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <div className="header">
      <header>
        <h1>{title}</h1>
        <Button color="green" text="Add" />
      </header>
    </div>
  );
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "Task Tracker",
};

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
