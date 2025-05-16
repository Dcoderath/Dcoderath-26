import React, { useEffect, useRef } from "react";
import "./GridD.css";
import gsap from "gsap";

import D1 from "../../assets/D/D1.jpg";
import D2 from "../../assets/D/D2.jpg";
import D3 from "../../assets/D/D3.jpg";
import D4 from "../../assets/D/D4.jpg";
import D5 from "../../assets/D/D5.jpg";
import D6 from "../../assets/D/D6.jpg";

const images = [D1, D2, D3, D4, D5, D6];

const projects = [
  { name: "Website Design", direction: "Direction A" },
  { name: "E-commerce Platform", direction: "Direction B" },
  { name: "Portfolio Site", direction: "Direction C" },
  { name: "Mobile App", direction: "Direction D" },
  { name: "Blog Layout", direction: "Direction E" },
  { name: "Landing Page", direction: "Direction F" },
];

const IMAGE_HEIGHT = 280;

const GridD = () => {
  const galleryRef = useRef(null);
  const imagesRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const gallery = galleryRef.current;
    const imagesContainer = imagesRef.current;

    if (!gallery || !imagesContainer) return;

    imagesContainer.style.height = `${IMAGE_HEIGHT * images.length}px`;

    gsap.set(gallery, { autoAlpha: 0 });

    // Add mouseenter/mouseleave listeners to each item
    itemsRef.current.forEach((element, index) => {
      if (!element) return;

      element.addEventListener("mouseenter", () => {
        gsap.to(imagesContainer, {
          marginTop: `-${IMAGE_HEIGHT * index}px`,
          duration: 0.4,
          ease: "power2.out",
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, { color: "initial", duration: 0.3, ease: "power1" });
      });
    });

    const handleMouseMove = (e) => {
      gsap.to(gallery, {
        top: `${e.clientY}px`,
        left: `${e.clientX}px`,
        xPercent: -20,
        yPercent: -45,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      // Clean up item listeners
      itemsRef.current.forEach((element) => {
        if (!element) return;
        element.removeEventListener("mouseenter", () => {});
        element.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  // Handlers for mouse enter/leave on container, toggling gallery opacity
  const handleMouseEnter = () => {
    if (galleryRef.current) {
      gsap.to(galleryRef.current, { autoAlpha: 1, duration: 0.3, ease: "power1.out" });
    }
  };

  const handleMouseLeave = () => {
    if (galleryRef.current) {
      gsap.to(galleryRef.current, { autoAlpha: 0, duration: 0.3, ease: "power1.out" });
    }
  };

  return (
    <section className="works">
      <div className="container-works">
        <div className="content-works">
          <div className="header-works">
            <h3>Recent Work</h3>
          </div>

          <div id="gallery-work" ref={galleryRef} style={{ height: IMAGE_HEIGHT }}>
            <div id="work-images" ref={imagesRef}>
              {images.map((src, i) => (
                <div
                  key={i}
                  className="work-image"
                  style={{ backgroundImage: `url(${src})`, height: IMAGE_HEIGHT }}
                />
              ))}
            </div>
          </div>

          <div
            className="items-works"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="grid-works">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="item-work"
                  ref={(el) => (itemsRef.current[i] = el)}
                >
                  <div className="title">
                    <div className="item-columns">
                      <span className="item-number">{String(i + 1).padStart(2, "0")})</span>
                      <span className="item-name">{project.name}</span>
                      <span className="item-direction">{project.direction}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridD;
