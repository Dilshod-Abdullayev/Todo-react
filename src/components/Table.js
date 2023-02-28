import React, { useContext } from 'react'
import { DarkmodeContextProvider } from "../Context/DarkMode";
import { ThemeContextprovider } from '../Context/ContextMode';
export default function Table({ data }) {
  const { search } = useContext(ThemeContextprovider)
  const { mode, changeMode } = useContext(DarkmodeContextProvider)

  return (
    <div className={`"w-3/5 flex justify-center align-middle rounded " ${mode}`}>
      <table className="w-full text-sm text-left   rounded">
        <thead className="text-xs  uppercase   ">
          <tr>
            <th scope="col" className="px-6 py-3">
              №
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => (
              <tr key={index} className=" border-b ">
                <td className="px-6 py-4">
                  {index + 1}
                </td>
                <td className="px-6 py-4">
                  {item.firstname}
                </td>
                <td className="px-6 py-4">
                  {item.email}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
