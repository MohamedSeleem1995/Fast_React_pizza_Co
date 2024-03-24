import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Button({ children, disabled, to, type, onClick }) {
  Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    to: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
  };
  const base = "inline-block  text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 outline-none transition-all duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary: "text-sm rounded-full font-semibold border-2 uppercase outline-none inline-block text-stone-300 bg-transparent px-4 py-2.5 md:px-6 md:py-3.5 text-stone-400 transition-all duration-300 hover:text-stone-800 hover:bg-stone-300 focus:bg-stone-300 focus:text-stone-800 focus:ring focus:ring-stone-300 focus:ring-offset-2",
    round: base + " px-2.5 py-1 md:pz-3.5 md:py-2 text-sm",
  }
  
  if (to === "/order/new")
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick) 
  return (
    <button className={styles[type]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
