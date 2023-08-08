// import React from 'react'
// import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom';
// import { useGetDetailQuery } from '../redux/api/jobApi';
// import Cookies from 'js-cookie';

// export default function CompanySite() {
//     const dark = useSelector(state=> state.dark.dark)
//     const token = Cookies.get("token")
//     const { id } = useParams();
//     const { data, isLoading } = useGetDetailQuery({ token, id });
//     console.log(data?.data);
//   return (
//     <section
//           className={`${
//             dark ? "bg-[#374151] text-slate-200" : "bg-white"
//           } transition-all ease-linear flex items-center duration-300 lg:w-[50%] mx-auto sticky z-10 top-[88px] shadow-sm left-0 right-0 lg:rounded -mt-8 overflow-hidden`}
//         >
//           <div className={`flex items-center w-full`}>
//             <div className="bg-orange-500 w-16  md:w-24 h-16  md:h-24">
//               <img
//                 className="w-full h-full object-cover"
//                 src={data?.data.company_image}
//                 alt=""
//               />
//             </div>
//             <div className="w-[85%] flex items-center justify-between px-3 md:px-8">
//               <div className="">
//                 <h4 className="text-lg font-bold">{data?.data.company}</h4>
//                 <p>{data?.data.company_website}</p>
//               </div>
//               <a
//                 href={data?.data.company_website}
//                 className="px-5 py-2.5 h-fit rounded bg-blue-50 text-blue-600 text-sm font-bold"
//               >
//                 Company Site
//               </a>
//             </div>
//           </div>
//         </section>
//   )
// }
