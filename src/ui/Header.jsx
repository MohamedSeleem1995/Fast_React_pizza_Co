import { Link } from "react-router-dom";
import UserName from "../features/user/UserName";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="flex flex-col items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 font-semibold uppercase tracking-widest sm:flex-row sm:items-center sm:px-6 sm:py-5 font-sans">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
