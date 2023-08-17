import React from 'react'
import Button from './Button';
import 'animate.css';

export default function Hero({handleLoadMore, isLoading}) {
    return (
        <div className="w-screen flex px-5 lg:px-36 absolute top-0 h-screen overflow-hidden">
          {/* <img className=" object-cover w-full absolute h-full -z-10" src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
          <div className="h-full flex flex-col justify-center md:w-[50%] pt-16 animate__animated animate__slideInLeft">
            <div className="w-full ">
              <h1
                className={`text-blue-600`}
                style={{ fontSize: "3rem", lineHeight: "3.5rem" }}
              >
                Find The Job That Fits Your Dev Life
              </h1>
              <p className={`my-3 lg:w-[80%]`}>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur quae nisi molestias maiores reprehenderit ipsam eius,
                quia deserunt minima nobis!
              </p>
            </div>
            <div onClick={handleLoadMore}>
              <Button
                arrow={true}
                isLoading={isLoading}
                text={"Find Jobs"}
                className={`bg-blue-600 my-5 text-white px-8 rounded `}
              />
            </div>
            <div className="flex flex-wrap items-center gap-10 mt-10">
              <div>
                <p className="text-lg font-bold text-blue-600">1500+</p>
                <p>Jobs Posted</p>
              </div>
              <div>
                <p className="text-lg font-bold text-blue-600">500+</p>
                <p>Companies</p>
              </div>
              <div>
                <p className="text-lg font-bold text-blue-600">1000+</p>
                <p>Candidates</p>
              </div>
            </div>
          </div>
          <div className='hidden w-[50%] md:flex justify-center items-center h-full animate__animated animate__slideInRight'>
            <img className='w-96 ' src="https://civi.uxper.co/wp-content/uploads/2022/12/girl-hero-2-2.png" alt="" />       
          </div>
        </div>
      );
}
