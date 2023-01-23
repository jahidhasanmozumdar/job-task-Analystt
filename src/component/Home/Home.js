import { useLoaderData } from "react-router-dom";
import Data from "../Data/Data";

const Home = () => {
  const usersData = useLoaderData();
  return (
    <div className="">
      {usersData.map((data) => (
        <Data
        key={data.id}
        data={data}
        ></Data>
      ))}
    </div>
  );
};

export default Home;
