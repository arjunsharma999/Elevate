"use client";
import React from "react";
import { motion } from "framer-motion";
import Brands from "../../component/Brand/pages";
import Testimonials from "@/app/component/Testimonials/page";
import Textlink from "../../common/Button/Textlink"


function webdevservices() {
  return (
    <div>
      {/* intro webdev */}
      <section class="text-white body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-center sm:justify-center justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-2 lg:mb-0 flex flex-col gap-3">
              <h2 class="lg:text-4xl text-3xl font-bold  ">
                We Build Web Designs that skyrocket your business
              </h2>
              <p class=" text-justify mb-4 text-lg">
                We offer the foundation of your dreams. were your secret weapon to stay ahead of the curve. And  were the bridge connecting you to a global audience. Our team doesnt just build websites; we craft online experiences that engage, enthrall, and convert visitors into loyal customers.
              </p>
            {/* <Textlink text={"Learn more"} href={"/"} className={"font-bold"} /> */}

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
                className="w-full lg:w-[35rem] lg:ml-[-2rem] hover:scale-105 transition-all duration-500"
                src="/services/webone.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ideas */}
      <section class="text-white body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto ">
          <div class="lg:w-[80%] mx-auto flex flex-wrap items-center  justify-between ">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-2 lg:mb-0 flex flex-col gap-3">
              <p className="uppercase">Innovative ideas</p>
              <h2 class="lg:text-4xl text-3xl font-bold  ">
              WERE ABOUT SO MUCH MORE THAN WEBSITES
              </h2>
              <p class=" text-justify mb-4 text-lg">
              Our vision is to revolutionize the way businesses connect with their audience. We strive to empower brands, big and small, to thrive in the digital landscape by delivering innovative and effective marketing strategies that resonate with the hearts and minds of their target market.
              </p>
            {/* <Textlink text={"Connect"} href={"/"} className={"font-bold text-gray-500"} /> */}

              
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
              className="flex items-center mx-auto"
            >
              <img
                className="w-[25rem] lg:ml-[-2rem] hover:scale-105 transition-all duration-500"
                src="/services/webtwo.png"
                alt="About Image"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <Brands /> */}

      {/* pricing */}
      {/* <section class=" body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Pricing
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
            </p>
            <div class="flex mx-auto border-2 border-orange-500 rounded-full overflow-hidden mt-6">
              <button class="py-1 px-4 bg-orange-500 text-white focus:outline-none">
                Monthly
              </button>
              <button class="py-1 px-4 focus:outline-none">Annually</button>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 xl:w-[40%] md:w-[55%] w-full mx-auto">
              <div class="h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden bg-white">
                <div className="bg-gray-200 rounded-lg p-3 flex flex-col items-center justify-center gap-3 py-6">
                <h2 class="text-lg  title-font mb-1 font-medium">
                  START
                </h2>
                <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b leading-none">
                  Free
                </h1>
                </div>
                <div className="flex flex-col items-start justify-start gap-2 my-4">
                <p class="flex items-center text-black mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                    className="text-green-500 rounded-full"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Vexillologist pitchfork
                </p>
                <p class="flex items-center text-black mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Tumeric plaid portland
                </p>
                <p class="flex items-center text-black mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Mixtape chillwave tumeric
                </p>
                </div>
                <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-500 mt-3">
                  Literally you probably havent heard of them jean shorts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Testimonials />

    </div>
  );
}

export default webdevservices;
