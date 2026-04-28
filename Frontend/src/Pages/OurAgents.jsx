import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import { useMemo } from 'react';

import requirements from '../Images/OurAgents/reqs.png'
import highlevel from '../Images/OurAgents/highlevel.png'
import lowlevel from '../Images/OurAgents/low-level.png'
import ui from '../Images/OurAgents/ui.png'

gsap.registerPlugin(ScrollTrigger);

function OurAgents({ className }) {

  const wrapRef = useRef(null);
  const listRef = useRef(null);
  const trackRef = useRef(null);


  useGSAP(() => {
    const ctx = gsap.context(() => {

      gsap.set(trackRef.current, { scaleY: 0, transformOrigin: "top" });

      ScrollTrigger.create({
        trigger: listRef.current,
        start: "top 75%",
        end: "bottom 25%",
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          gsap.to(trackRef.current, { scaleY: self.progress, ease: "none" });
          wrapRef.current?.style?.setProperty(
            "--about-progress",
            `${Math.round(self.progress * 100)}%`
          );
        },
      });


      gsap.utils.toArray(".tl-item").forEach((el) => {
        const fromX = el.classList.contains("tl-left") ? -40 : 40;
        gsap.from(el, {
          x: fromX,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  const items = useMemo(
    () => [
      {
        key: "requirments",
        offset: null,
        node: (
          <div
            className=" relative
              rounded-2xl p-6
              border border-cyan-400/10 
              overflow-hidden 
            "
          >
            <img
              src={requirements}
              className="
              absolute inset-0
              h-full w-full
              transition duration-700 rounded-2xl
            "
            />

            <div
              className="
              absolute inset-0
              bg-gradient-to-r
              from-[#041827]/70
              via-[#082f49]/45
              to-transparent
            "
            />
            <div className="relative bg-black-300/50 z-10 space-y-4 rounded-[calc(theme(borderRadius.2xl)-1.5px)]  p-6 md:h-40 ">
              <h1 className="font-['Orbitron'] text-3xl font-bold uppercase tracking-[0.15em] text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.25)]">
                Requirements Intelligence
              </h1>
              <p className='text-md font-medium tracking-wide leading-relaxed text-white'>
                Transforms raw conversations into structured requirements
              </p>
            </div>
          </div>
        ),
      },
      {
        key: "highlevel",
        offset: null,
        node: (
          <div
            className=" relative
              rounded-2xl p-6
              border border-cyan-400/10 
              overflow-hidden 
            "
          >
            <img
              src={highlevel}
              className="
              absolute inset-0
              h-full w-full rounded-2xl
            "
            />
            <div
              className="
              absolute inset-0
              bg-gradient-to-r
              from-[#041827]/70
              via-[#082f49]/45
              to-transparent
            "
            />

            <div className="relative bg-black-300/50 space-y-4 rounded-[calc(theme(borderRadius.2xl)-1.5px)]  p-7 md:h-40">
              <h1 className="font-['Orbitron'] text-3xl font-bold uppercase tracking-[0.15em] text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.25)]">High-Level <br /> Design </h1>
              <p className='text-md font-medium tracking-wide leading-relaxed text-white'>Generates robust high-level architecture and system design diagrams</p>
            </div>
          </div>
        ),
      }
      ,
      {
        key: "lowlevel",
        offset: "sm",
        node: (
          <div
            className=" relative
              rounded-2xl p-6
              border border-cyan-400/10 
              overflow-hidden 
            "
          >
            <img
              src={lowlevel}
              className="
              absolute inset-0
              h-full w-full rounded-2xl
            "
            />
            <div
              className="
              absolute inset-0
              bg-gradient-to-r
              from-[#041827]/70
              via-[#082f49]/45
              to-transparent
            "
            />
            <div className="relative bg-black-300/50 space-y-4 rounded-[calc(theme(borderRadius.2xl)-1.5px)]  p-7 md:h-40">
              <h1 className="font-['Orbitron'] text-3xl font-bold uppercase tracking-[0.15em] text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.25)]">Low-Level <br/> Design </h1>
              <p className='text-md font-medium tracking-wide leading-relaxed text-white'>Produces detailed component-level designs and technical diagrams</p>
            </div>
          </div>
        ),
      },
      {
        key: "ui",
        offset: null,
        node: (
           <div
            className=" relative
              rounded-2xl p-6
              border border-cyan-400/10 
              overflow-hidden 
            "
          >
            <img
              src={ui}
              className="
              absolute inset-0
              h-full w-full rounded-2xl
            "
            />
            <div
              className="
              absolute inset-0
              bg-gradient-to-r
              from-[#041827]/70
              via-[#082f49]/45
              to-transparent
            "
            />
            <div className="relative bg-black-300/50 space-y-4 rounded-[calc(theme(borderRadius.2xl)-1.5px)]  p-7 md:h-40">
              <h1 className="font-['Orbitron'] text-3xl font-bold uppercase tracking-[0.15em] text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.25)]">UI/UX & Usability <br/> Design </h1>
              <p className='text-md font-medium tracking-wide leading-relaxed text-white'>Creates intuitive wireframes and user-centered interface designs</p>
            </div>
          </div>
        ),
      },
    ],
    []
  );


  return (
    <div className='relative scroll-section rounded-t-4xl  z-10 bg-taupe-950 min-h-screen w-full'>

      <h1 className='text-white text-7xl uppercase font-bold w-full text-center pt-10'
        style={{ fontFamily: 'Orbitron, sans-serif' }}>Our <span className='text-cyan-300'>Agents</span>
      </h1>

      <section id="about" className="relative  px-5">
        <div className="container mx-auto w-full pt-6 pb-24">

          <div ref={wrapRef} className="relative md:mt-20 mt-10">
            <div className="hidden md:block pointer-events-none absolute left-1/2 -top-10 -bottom-10 -translate-x-1/2">
              <div className="absolute top-0 bottom-0 w-[4px] bg-white/10 rounded-full overflow-hidden">
                <div
                  ref={trackRef}
                  className="w-full h-full origin-top scale-y-0 bg-cyan-600"
                />
              </div>
            </div>


            {/* stack of rows */}
            <div ref={listRef} className="space-y-0 md:space-y-0 ">
              {items.map((item, i) => {
                const left = i % 2 === 0;
                const rowOffset =
                  item.offset === "lg" ? "md:pt-8" : item.offset === "sm" ? "md:pt-6" : "";

                return (
                  <div
                    key={item.key}
                    className={`grid md:grid-cols-[1fr_auto_1fr] grid-cols-1 md:gap-x-4  ${rowOffset} ${i !== 0 ? "-mt-10" : ""}`}
                  >
                    <div
                      className={`tl-item max-w-[40rem]  w-full ${left
                        ? "tl-left md:col-start-1 md:justify-self-end md:mr-6"
                        : "tl-right md:col-start-3 md:justify-self-start md:ml-6"
                        }`}
                    >
                      {item.node}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default OurAgents
