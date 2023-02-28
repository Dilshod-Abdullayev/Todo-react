import React, { useContext, useState } from "react";
import Table from "./Table";
import { DarkmodeContextProvider } from "../Context/DarkMode";
export default function Form() {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname && email) {
      const person = { firstname, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstname("");
      setEmail("");
    }
  };
  const { mode, changeMode } = useContext(DarkmodeContextProvider)
  
  return (
    <div className="flex justify-center flex-col align-middle items-center  "  >
      <form className={`" w-1/2  shadow-md  rounded px-8 pt-6 pb-8 mb-4 border-8" ${mode}`} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input value={firstname}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight text-zinc-800 focus:outline-none focus:shadow-outline"
            type="text"
            id="firstName"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block 0 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow text-zinc-800 appearance-none border  rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-gray-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
      <Table data={people} />
    </div>
  );
}
