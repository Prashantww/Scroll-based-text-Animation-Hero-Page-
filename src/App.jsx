import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "header",
      start: "top 0%",
      end: "top -50%",
      scrub: true,
      pin: true,
      // markers: true,
    });

    gsap.to(".first, .second", {
      y: -379,
      scrollTrigger: {
        trigger: ".verticle",
        // markers: true,
        start: "top 0%",
        end: "top -50%",
        scrub: 1,
      },
    });

    gsap.to("h2", {
      y: 446,
      scrollTrigger: {
        trigger: ".verticle",
        // markers: true,
        start: "top 0%",
        end: "top -50%",
        scrub: 1,
      },
    });
  });

  return (
    <>
      <header>
        <div className="verticle h-[100vh] w-[1px] bg-black"></div>
        <div className="headingContainer">
          <div className="heading1">
            <h1 className="first">Rational</h1>
            <h1 className="second">Emotion</h1>
          </div>
          <div className="flex justify-center">
            <h1>buys</h1>
          </div>
          <div>
            <h1 className="first">cheap</h1>
            <h1 className="second">value</h1>
          </div>
        </div>
        <div className="subHeading">
          <h2>
            We bring B2C creativity into the deepest corners of B2B. Because
            stronger brands can charge more, grow faster and get the best out
            their people.
          </h2>
        </div>
      </header>
      <main className="flex flex-col items-center h-[150vh]">
        <div className="line h-[1px] w-[98vw] bg-black"></div>
        <p className="mt-[86px]">
          We get our
          <br />
          hands dirty in the
          <br />
          industries fighting
          <br />
          to be seen
        </p>
        <div className="content bg-black h-[1500px] w-[95vw] mt-[125px] rounded-[30px]"></div>
      </main>
    </>
  );
};

export default App;
