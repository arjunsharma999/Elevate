"use client";
import React from "react";
import { motion } from "framer-motion";
import Testimonials from "@/app/component/Testimonials/page";
import Textlink from "../../common/Button/Textlink"


function Seoservices() {
  return (
    <div>
      {/* first sction */}
      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 pb-12 pt-24 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              <h2 className="text-4xl font-bold ">
                ACHIEVE TOP SEARCH RANKINGS WITH OUR SEO SERVICES
              </h2>
              <p className=" text-justify mb-4 text-lg">
                Boost your online visibility and drive organic traffic with our top-notch SEO service. Our experts will optimize your website for search engines, ensuring you reach your target audience and outshine the competition. Take your digital presence to new heights today!
              </p>
              {/* <Textlink text={"Contact Us!"} href={"/pages/Contact"} className={"font-bold"} /> */}

            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center "
            >
              <img
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/services/paidads-one.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="text-white body-font overflow-hidden">
        <div className="container px-5 pb-12 mx-auto ">
          <div className="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3 ">
              <p className="text-sm uppercase">Who we work with ?</p>
              <h2 className="text-4xl font-bold ">
                DRIVE TARGETED TRAFFIC AND BOOST CONVERSIONS
              </h2>
              <p className=" text-justify mb-4 text-lg">
                With Elevate Clicks cutting-edge SEO techniques and industry knowledge, businesses can expect to climb the search engine rankings and attract targeted organic traffic. Our team of experienced professionals understands the ever-evolving algorithms and trends, ensuring that your website remains optimized for maximum visibility.
              </p>
              {/* <Textlink text={"Book a Demo"} href={"/pages/Contact"} className={"font-bold"} /> */}

            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center"
            >
              <img
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/services/paid-one.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/*
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto bg-white bg-opacity-10">
        <div className="lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3 text-center md:w-[80%] mx-auto">
          <p className="text-sm uppercase">WORK WITH US</p>
          <h2 className="text-4xl font-bold ">
            Achieve top search rankings with our seo services
          </h2>
          <p className="leading-relaxed mb-4 text-lg">
            Whether you’re a startup looking for that extra kick or an
            established retailer in need of a fresh perspective, we are here
            to take your digital commerce to the next level.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 w-[70%] mx-auto">
          <div className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center ">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-[200px] h-[200px] object-cover object-center mb-4"
                src="/services/paidads-one.png"
              />
              <div className="w-full">
                <h2 className="text-lg font-bold">Alper Kamu</h2>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center ">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-[200px] h-[200px] object-cover object-center mb-4"
                src="/services/paidads-one.png"
              />
              <div className="w-full">
                <h2 className="text-lg font-bold">Alper Kamu</h2>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center ">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-[200px] h-[200px] object-cover object-center mb-4"
                src="/services/paidads-one.png"
              />
              <div className="w-full">
                <h2 className="text-lg font-bold">Alper Kamu</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex -m-4 w-[70%] mx-auto">
          <div className="p-4 lg:w-1/2 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center ">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-[200px] h-[200px] object-cover object-center mb-4"
                src="/services/paidads-one.png"
              />
              <div className="w-full">
                <h2 className="text-lg font-bold">Alper Kamu</h2>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center ">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-[200px] h-[200px] object-cover object-center mb-4"
                src="/services/paidads-one.png"
              />
              <div className="w-full">
                <h2 className="text-lg font-bold">Alper Kamu</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  */ }

      {/* last section */}
      <section class="text-white body-font overflow-hidden">
        <div class="container pb-12 pt-24 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-center justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col gap-3">
              {/* <p className="text-sm uppercase">Who we work with ?</p> */}
              <h2 class="text-4xl font-bold ">
                CUSTOMIZED SOLUTIONS TO YOUR BUSINESS GOALS
              </h2>
            </div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex justify-center ">
              <p className="text-lg">
                From keyword research and on-page optimization to link building and content creation, our comprehensive approach guarantees long-term success and lasting impact with proven SEO techniques
              </p>

            </div>
          </div>
        </div>
      </section>
      <section class="text-white body-font overflow-hidden">
        <div class="container pb-12 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-start justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 ">
              <div className="flex flex-col text-lg text- rounded-lg  bg-gray-500  ">
                <h2 class="text-xl font-bold m-3">
                  OFF-PAGE OPTIMIZATION
                  <p className="text-sm mt-8">Building high quality backlinks from reputable websites with influencer outreach to enhance your rankings.</p>

                </h2>

              </div>
              <div className="mt-[2rem] flex flex-col gap-4 ">
                <div className="flex justify-between items-center w-full transition duration-500">
                  <p className="text-lg font-bold">ON-PAGE OPTIMIZATION</p>

                </div>
                <hr className="py-[2px] w-[90%]" />
              </div>
              <div className="mt-[2rem] flex flex-col gap-4">
                <div className="flex justify-between items-center w-full transition duration-500">
                  <p className="text-lg font-bold">KEYWORD RESEARCH</p>

                </div>

                <hr className="py-[2px] w-[90%]" />
              </div>
              <div className="mt-[2rem] flex flex-col gap-4">
                <div className="flex justify-between items-center w-full transition duration-500">
                  <p className="text-lg font-bold">SEO AUDITS AND REPORTING</p>

                </div>
                <hr className="py-[2px] w-[90%]" />

              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center "
            >
              <img
                className="w-[20rem] lg:w-[30rem] lg:ml-[-2rem] mt-[5rem] lg:mt-0"
                src="/services/seotwo.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}

export default Seoservices;
