import React from 'react'

export default function Table({ data }) {
  return (
    <div className="w-3/5 flex justify-center align-middle rounded">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

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
