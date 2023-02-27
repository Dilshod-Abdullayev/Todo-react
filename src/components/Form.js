import React, { useState } from "react";
import Table from "./Table";

export default function Form() {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
    console.log(firstname, email);
    if (firstname && email) {
      const person = { firstname, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstname("");
      setEmail("");
    } else {
      console.log("empty");
    }
  };
  return (
    <div className="flex justify-center flex-col align-middle items-center">
      <form className=" w-1/2 dark:bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input value={firstname}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="firstName"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
      {/* {people.map((person, index) => {
        const { firstname, email } = person;
        return (
          <div key={index}>
            <h1>{firstname}</h1>
            <h2>{email}</h2>
          </div>
        );
      })} */}
      <Table data={people} />
    </div>
  );
}
