import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {

    if(!showContent) return;

    gsap.to('.main', {
      scale: 1,
      rotation: 0,
      duration: 2,
      delay: '-1',
      ease: 'expo.inOut'
    })
    gsap.to('.sky', {
      scale: 1.2,
      rotation: 0,
      duration: 2,
      delay: '-.7',
      ease: 'expo.inOut'
    })
    gsap.to('.bg', {
      scale: 1.2,
      rotation: 0,
      duration: 2,
      delay: '-.5',
      ease: 'expo.inOut'
    })
    gsap.to('.character', {
      scale: .9,
      x: '-50%',
      bottom: '-35%',
      rotation: 0,
      duration: 2,
      delay: '-.5',
      ease: 'expo.inOut'
    })
    gsap.to('.text', {
      scale: 1,
      x: '-50%',
      rotation: 0,
      duration: 2,
      delay: '-.5',
      ease: 'expo.inOut'
    })

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const yMove = e.clientY / window.innerHeight;

      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full scale-[1.7] -rotate-[10deg]">
          <div className="landing w-full h-screen bg-black overflow-hidden relative">
            <div className="navbar absolute top-0 left-0 z-10 w-full py-10 px-10">
              <div className="logo flex items-center gap-5">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-12 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h2 className="text-3xl leading-none text-white -mt-3">
                  Rockstar
                </h2>
              </div>
            </div>

            <div className="images-div relative w-full h-screen overflow-hidden">
              <img
                src="/sky.png"
                className="sky scale-[1.5] -rotate-[20deg] absolute top-0 left-0 w-full h-full object-cover object-center"
                alt=""
              />

              <img
                src="/bg.png"
                className="bg scale-[1.8] -rotate-[5deg] absolute top-0 left-0 w-full h-full object-cover object-center"
                alt=""
              />

              <div className="text flex flex-col gap-3 text-9xl absolute top-20 left-1/2 -translate-x-1/2 text-white scale-[1.4] rotate-[-10deg]">
                <h1 className="-ml-40">grand</h1>
                <h1 className="ml-20">theft</h1>
                <h1 className="-ml-20">auto</h1>
              </div>

              <img
                src="/girlbg.png"
                className="character absolute -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] -rotate-[25deg]"
                alt=""
              />
            </div>

            <div className="btnbar absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 text-white items-center">
                <i className="ri-arrow-down-line text-4xl"></i>
                <h3 className="font-sans text-xl">Scroll Down</h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55px]"
                src="/ps5.png"
                alt=""
              />
            </div>
          </div>

          <div className="w-full h-screen flex items-center justify-center bg-black px-10 overflow-hidden">
            <div className="cntr flex text-white w-full h-[80%]">
              <div className="left-img relative w-1/2 h-full">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.2]"
                  src="/imag.png"
                  alt=""
                />
              </div>
              <div className="right-img w-[40%]">
                <h1 className="text-8xl">Still Running</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-10 font-sans text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, expedita repellat officia rerum impedit unde fuga
                  incidunt tenetur atque, reiciendis minus sapiente recusandae.
                </p>
                <p className="mt-3 font-sans text-xl">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eveniet commodi eius nemo porro.
                </p>
                <p className="mt-10 font-sans text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, expedita repellat officia rerum impedit unde fuga
                  incidunt tenetur atque, reiciendis minus sapiente recusandae.
                </p>

                <button className="bg-yellow-600 py-4 px-8 rounded text-2xl mt-10 text-black hover:scale-95 hover:text-gray-200 transition-all duration-200 cursor-pointer">
                  Explore Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
