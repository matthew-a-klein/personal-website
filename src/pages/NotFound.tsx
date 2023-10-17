import Base from "../components/Base";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Base>
      <div className="text-2xl lg:text-4xl text-center mt-8 lg:mt-36">
        Hmmmm, doesn't look like that page exists.
      </div>
      <div className="text-lg lg:text-2xl lg:mt-4 text-center">
        Click{" "}
        <Link to="" className="underline lg:underline-offset-4">
          here
        </Link>{" "}
        to go home.
      </div>
    </Base>
  );
};

export default NotFound;
