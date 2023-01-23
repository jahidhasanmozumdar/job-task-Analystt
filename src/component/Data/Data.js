import { useNavigate } from "react-router-dom";

const Data = ({ data }) => {
  
  const { id, name, email, address } = data;
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate(`/data/${id}`);
  };

 
  return (
    <div className="overflow-x-auto bg-blue-200">
      <table className="table w-[80%] mx-auto mt-5 mb-7">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Email</th>
            <th>Street</th>
            <th>City</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center ">
            <th>{name}</th>
            <td>{email}</td>
            <td>{address.street}</td>
            <td>{address.city}</td>
            <td>
              <button
                onClick={buttonHandler}
                className="bg-red-600 px-8 py-2 text-slate-50 font-medium rounded-lg"
              >
                View Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Data;
