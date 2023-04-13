import React, {useState} from "react";
import Stat from './statComponent'
const statsData = [
    { number: 200, label: 'People' },
    { number: 500, label: 'People' },
    { number: 1000, label: 'Customers' },
    { number: 'A couple', label: 'Coffee breaks' },
  ];


const StatsSection = () => {
    const [stats, setStats] = useState(statsData);
  
    return (
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Our Team by the numbers
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 rounded-lg bg-indigo-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">
            {stats.map((stat, index) => (
              <Stat key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default StatsSection;