import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData();
  const { name, email, address, company, phone } = userDetails;
  return (
    <div className="border-2 border-indigo-200  w-[80%]  mx-auto mt-8">
      <div>
        <table className="flex flex-col justify-center  items-center gap-28  bg-white ">
          <tbody>
            <tr className="flex justify-center  items-center gap-44  w-full mx-auto">
              <th>Name</th>
              <th>Email</th>
              <th>Street</th>
              <th>City</th>
            </tr>
            <tr className="flex justify-center  items-center gap-28  w-full mx-auto mt-2">
              <td>{name}</td>
              <td>{email}</td>
              <td>{address.street}</td>
              <td>{address.city}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] w-[80%] mx-auto mt-4 mb-9">
        <div>
          <p className="text-2xl font-medium">{company.catchPhrase}</p>
        </div>
        <div className="flex justify-evenly items-center gap-16">
          <div>
            <p>
              <small className="text-lg text-rose-500 font-medium">
                Name:{" "}
              </small>
              {name}
            </p>
            <p>
              <small className="text-lg text-rose-500 font-medium">
                Email:{" "}
              </small>
              {email}
            </p>
            <p>
              <small className="text-lg text-rose-500 font-medium">
                Phone:{" "}
              </small>{" "}
              {phone}
            </p>
          </div>
          <div>
            <p>
              <small className="text-lg text-rose-500 font-medium">
                company name:{" "}
              </small>
              {company.name}
            </p>
            <p>
              <small className="text-lg text-rose-500 font-medium">
                Street:{" "}
              </small>
              {address.street}
            </p>
            <p>
              <small className="text-lg text-rose-500 font-medium">City:{" "}</small>
              {address.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
