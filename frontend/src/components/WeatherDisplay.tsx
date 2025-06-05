// import React, { useState } from "react";
// import { useWeather } from "../hooks/useWeather";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// const WeatherDisplay: React.FC = () => {
//   const [city, setCity] = useState("New York");
//   const { data, isLoading } = useWeather(city);
//   const currentTime = new Date().toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Left Panel */}
//       <div className="flex">
//         <div className="w-1/3 bg-white p-8 min-h-screen shadow-lg">
//           <div className="flex items-center space-x-4 mb-12">
//             <div className="relative flex-1">
//               <input
//                 type="text"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full"
//                 placeholder="Search for places..."
//               />
//               <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//             </div>
//             <button className="p-2 rounded-full bg-gray-100">
//               <svg
//                 className="h-6 w-6 text-blue-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className="text-center mb-12">
//             <div className="relative w-48 h-48 mx-auto mb-8">
//               {/* Weather Icon */}
//               <div className="absolute inset-0">
//                 <svg
//                   className="w-full h-full text-blue-500"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     fill="currentColor"
//                     fillOpacity="0.2"
//                   />
//                   <circle
//                     cx="12"
//                     cy="12"
//                     r="8"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     fill="none"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <div className="text-8xl font-light mb-4">12°C</div>
//             <div className="text-xl text-gray-500 mb-2">{`Monday, ${currentTime}`}</div>
//             <div className="flex items-center justify-center space-x-2 text-gray-400">
//               <svg
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
//                 />
//               </svg>
//               <span>Mostly Cloudy</span>
//             </div>
//             <div className="mt-8 pt-8 border-t">
//               <div className="flex items-center justify-center space-x-2 text-gray-400">
//                 <svg
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                   />
//                 </svg>
//                 <span>{city}, USA</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Panel */}
//         <div className="flex-1 p-8">
//           <div className="flex justify-between items-center mb-12">
//             <div className="text-2xl">Week</div>
//             <div className="flex space-x-2">
//               <button className="px-4 py-2 rounded-full bg-blue-500 text-white">
//                 °C
//               </button>
//               <button className="px-4 py-2 rounded-full bg-gray-100">°F</button>
//             </div>
//           </div>

//           {/* Weekly Forecast */}
//           <div className="grid grid-cols-7 gap-4 mb-12">
//             {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
//               <div
//                 key={day}
//                 className="text-center p-4 bg-white rounded-3xl shadow-sm"
//               >
//                 <div className="text-gray-600 mb-2">{day}</div>
//                 <div className="w-12 h-12 mx-auto mb-2">
//                   <svg
//                     className="w-full h-full text-blue-500"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//                     />
//                   </svg>
//                 </div>
//                 <div className="font-semibold">{15 - i}°</div>
//               </div>
//             ))}
//           </div>

//           {/* Today's Highlights */}
//           <div>
//             <h2 className="text-2xl mb-6">Today's Highlights</h2>
//             <div className="grid grid-cols-3 gap-6">
//               <div className="bg-white p-6 rounded-3xl shadow-sm">
//                 <h3 className="text-gray-500 mb-4">UV Index</h3>
//                 <div className="text-4xl font-semibold">5</div>
//               </div>
//               <div className="bg-white p-6 rounded-3xl shadow-sm">
//                 <h3 className="text-gray-500 mb-4">Wind Status</h3>
//                 <div className="text-4xl font-semibold">7.70</div>
//                 <div className="text-gray-500">km/h</div>
//               </div>
//               <div className="bg-white p-6 rounded-3xl shadow-sm">
//                 <h3 className="text-gray-500 mb-4">Sunrise & Sunset</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center space-x-4">
//                     <svg
//                       className="h-6 w-6 text-blue-500"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//                       />
//                     </svg>
//                     <span>6:35 AM</span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <svg
//                       className="h-6 w-6 text-blue-500"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//                       />
//                     </svg>
//                     <span>5:42 PM</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherDisplay;
