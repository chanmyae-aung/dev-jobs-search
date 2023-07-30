import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import ApplicationForm from "./ApplicationForm";

export default function Detail() {
  const dark = useSelector(state => state.dark.dark)
  return (
    <main className={`${dark ? 'bg-[#22262F] text-slate-200': 'bg-slate-100'} transition-all ease-linear duration-300 relative h-screen overflow-y-scroll`}>
      <Navbar />
      <section className={`${dark ? 'bg-[#374151] text-slate-200': 'bg-white'} transition-all ease-linear duration-300 lg:w-[50%] mx-auto sticky top-[88px] shadow-sm left-0 right-0 lg:rounded py-3 lg:py-8 -mt-8`}>
        <div className={`flex items-center`}>
          <div className="bg-orange-500 w-[15%]">
            <h4 className="h-full">Logo</h4>
          </div>
          <div className="w-[85%] flex items-center justify-between px-8">
            <div>
              <h4 className="text-lg font-bold">Scoot</h4>
              <p>scoot.com</p>
            </div>
            <button className="px-5 py-2.5 h-fit rounded bg-blue-50 text-blue-600 text-sm font-bold">
              Company Site
            </button>
          </div>
        </div>
      </section>
      <section className={`${dark ? 'bg-[#374151]': 'bg-white'} transition-all ease-linear duration-300 p-5 md:p-10 lg:w-[50%] tracking-wide mt-5 lg:mt-7 mx-auto lg:rounded cursor-pointer`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div>
            <div className="flex gap-3">
              <p>5h ago.</p>
              <p>Full Time</p>
            </div>
            <h1 className={`${dark && "text-white"} transition-all ease-linear duration-300 my-2 `}>Senior Software Engineer</h1>
            <h4 className="font-semibold text-primary">United Kingdom</h4>
          </div>
          <button className="px-5 mt-3 lg:mt-0 lg:px-5 py-2.5 h-fit rounded text-white bg-blue-600 text-sm font-bold">
            Apply Now
          </button>
        </div>
        <p className="py-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          doloremque magnam error reprehenderit, rem officiis quaerat
          architecto, quam obcaecati eligendi deserunt saepe aperiam eos ab
          aliquam dicta quis, repellat dolore. Suscipit praesentium,
          voluptatibus architecto ipsam, delectus fugiat cupiditate provident
          animi modi, error ad nobis velit autem ex reprehenderit dolore!
          Voluptate error corrupti dolorem neque vero! Ab corrupti atque cum
          impedit? Praesentium asperiores ex tempora? Debitis at numquam maxime?
          Deserunt, placeat saepe natus rem, dignissimos ratione provident a
          illo voluptatem doloremque dolores optio? Expedita ea fugit quod
          cupiditate vero minus laudantium?
        </p>
        <div>
          <h4 className="sub-title">Requirements</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            qui id culpa cumque cum maiores beatae impedit alias necessitatibus
            tenetur neque, ab dolore, ratione pariatur fugit animi, nostrum
            aliquid iusto.
          </p>
          <ul>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nesciunt, possimus!
            </li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nesciunt, possimus!
            </li>
            <li>Lorem ipsum dolor, sit amet consectetur </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nesciunt, possimus!
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h4 className="sub-title">What Your Will Do</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            qui id culpa cumque cum maiores beatae impedit alias necessitatibus
            tenetur neque, ab dolore, ratione pariatur fugit animi, nostrum
            aliquid iusto.
          </p>
          <ul>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nesciunt, possimus!
            </li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nesciunt, possimus!
            </li>
            <li>Lorem ipsum dolor, sit amet consectetur </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nesciunt, possimus!
            </li>
          </ul>
        </div>
      </section>
      <footer className={`${dark ? 'bg-[#374151]': 'bg-white'} transition-all ease-linear duration-300 mt-5 lg:mt-10`}>
        <div className="flex flex-col lg:flex-row lg:w-[50%] mx-auto py-3 lg:py-5 items-center justify-between">
          <div className="flex flex-col-reverse lg:flex-col items-center lg:items-start">
            <h1 className={`${dark && "text-white"} transition-all ease-linear duration-300 lg:my-2 `}>Senior Software Engineer</h1>
            <h5 className="font-semibold">Scoot</h5>
          </div>
          <button className="px-5 mt-3 py-2.5 h-fit rounded text-white bg-blue-600 text-sm font-bold">
            Apply Now
          </button>
        </div>
      </footer>
      {/* <div className=" w-full z-50">
        <ApplicationForm/>
      </div> */}
    </main>
  );
}
