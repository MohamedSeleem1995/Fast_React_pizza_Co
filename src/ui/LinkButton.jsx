import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function LinkButton({ children, to }) {
    const navigate = useNavigate();
    const className = "text-sm text-blue-500 hover:text-blue-700 no-underline block";
    LinkButton.propTypes = {
      children: PropTypes.node,
      to: PropTypes.string,
      };
    if (to === "-1")
        return <button className={className} onClick={() => navigate(-1)}>{children}</button>;
  return (
      <Link className={className} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
