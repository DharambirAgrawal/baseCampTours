"use client";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillTag, AiTwotoneCalendar } from "react-icons/ai";
import { FaMountain } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import { useState, useEffect } from "react";
import { departureSchedule } from "@/utils/index";

const Departure = () => {
  useEffect(() => {
    setMonth(data.months[0]);
  }, []);
  const [data, setData] = useState(departureSchedule);
  const [month, setMonth] = useState("");
  const handleChange = (e) => {
    setMonth(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="p-8">
      <h1 className="font-bold text-3xl border-b-[1px] border-slate-500 p-2 ">
        JOIN OUR FIXED DEPARTURE
      </h1>
      <div className="border-b-[1px] border-slate-500 p-4 flex justify-end items-center gap-4">
        <p>Select a Trip Month</p>
        <select
          className="border-[1px] border-slate-500"
          onChange={handleChange}
        >
          {data.months.map((month, id) => {
            return (
              <option value={month} key={id}>
                {month}
              </option>
            );
          })}
        </select>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left bg-gray-200">
              <th className="p-4">Trip</th>
              <th className="p-4">Trip Dates</th>
              <th className="p-4">Price</th>
              <th className="p-4">Space Left</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {data.monthPlan.map((items) => {
              if (items.month.includes(month)) {
                return items.plans.map((plan, id) => {
                  return (
                    <tr className="text-md text-gray-600" key={id}>
                      <td className="flex items-center gap-4 p-4">
                        <FaMountain />
                        <p className="line-clamp-2">{plan.trip}</p>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <AiTwotoneCalendar />
                          <p> {plan.date}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <AiFillTag />
                          <p>{plan.price}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <BsFillPersonFill />
                          <p>{plan.space}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <button className="bg-blue-600 text-white rounded px-4 py-2">
                          BOOK NOW
                        </button>
                      </td>
                    </tr>
                  );
                });
              } else {
                return null;
              }
            })}
          </tbody>
        </table>

        <button className="text-red-600 w-full flex justify-center items-center gap-2 text-lg ">
          <p className=" ">View all dates</p>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Departure;
