import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
  const username = useSelector(state => state.user.username);

  return (
    <div className="pb-8 pt-10 text-center sm:pb-10 sm:pt-16 px-4">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!username ? <CreateUser /> : <Button to={"/menu"} type={"primary"}>Continue ordering {username}</Button>}
    </div>
  );
}

export default Home;
