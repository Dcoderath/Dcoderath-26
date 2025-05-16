import React, { useRef, useEffect } from "react";
import "./D.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const D = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    const heroSection = sectionsRef.current[0];
    if (heroSection) {
      const span = heroSection.querySelector("span");
      if (span) {
        gsap.fromTo(
          span,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heroSection,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          }
        );
      }
    }
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="d-background">
<div class="section-hero">
  <div class="box unique-top">Let’s build a</div>
  <div class="box unique-middle">memorable  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; inspiring </div>
  <div class="box unique-bottom">digital experience together.</div>
</div>



      <div className="full-width-border" ref={addToRefs}>
        <section className="section-expertise-heading">
          Expertise
        </section>
      </div>

      <div className="full-width-border" ref={addToRefs}>
        <section className="expertise-section">
          <h3>Visual Identity</h3>
          <div className="expertise-items">
            <span>[Logo]</span>
            <span>[Brand guideline]</span>
            <span>[Content Creation]</span>
            <span>[Signage]</span>
          </div>
        </section>
      </div>

      <div className="full-width-border" ref={addToRefs}>
        <section className="expertise-section">
          <h3>Digital Marketing</h3>
          <div className="expertise-items">
            <span>[Digital Strategy]</span>
            <span>[SEO]</span>
            <span>[Online Advertising]</span>
            <span>[Community Management]</span>
            <span>[Email Marketing]</span>
            <span>[Performance Analysis]</span>
          </div>
        </section>
      </div>

      <div className="full-width-border" ref={addToRefs}>
        <section className="expertise-section">
          <h3>Web Development</h3>
          <div className="expertise-items">
            <span>[Website Design]</span>
            <span>[E-commerce Website]</span>
            <span>[Website Redesign]</span>
            <span>[Blog]</span>
            <span>[Web Application]</span>
            <span>[Hosting, Maintenance & Support]</span>
          </div>
        </section>
      </div>

      <div className="full-width-border" ref={addToRefs}>
        <section className="expertise-section">
          <h3>Creative Development</h3>
          <div className="expertise-items">
            <span>[Immersive Experience]</span>
            <span>[Promotional Website]</span>
            <span>[Animation & Motion Design]</span>
            <span>[3D]</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default D;
