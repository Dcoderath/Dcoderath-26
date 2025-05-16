// Plusup.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import './plusup.css';
import D from '../d/D';

const Plusup = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const revealer = document.querySelector('.revealer');

    const triggers = [
      ScrollTrigger.create({
        trigger: '.pinned',
        start: 'top top',
        endTrigger: '.whitespace',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        pinType: 'fixed',
      }),

      ScrollTrigger.create({
        trigger: '.pinned',
        start: 'top top',
        endTrigger: '.header-info',
        end: 'bottom bottom',
        onUpdate: (self) => {
          gsap.to('.revealer', { rotation: self.progress * 360 });
        },
      }),

      ScrollTrigger.create({
        trigger: '.pinned',
        start: 'top top',
        endTrigger: '.header-info',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const p = self.progress;
          const clipPath = `polygon(
            ${45 - 45 * p}% 0%,
            ${55 + 45 * p}% 0%,
            ${55 + 45 * p}% 100%,
            ${45 - 45 * p}% 100%
          )`;
          gsap.to('.revealer-1, .revealer-2', { clipPath, ease: 'none', duration: 0 });
        },
      }),

      ScrollTrigger.create({
        trigger: '.header-info',
        start: 'top top',
        end: 'center 100%',
        scrub: 1,
        onUpdate: (self) => {
          const left = 43 + 5 * self.progress;
          gsap.to('.revealer', { left: `${left}%`, ease: 'none', duration: 0 });
        },
      }),

      ScrollTrigger.create({
        trigger: '.header-info',
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: 0.5,
        pin: true,
        onUpdate: (self) => {
          const maxScaleX = 19, maxScaleY = 8;
          const scaleX = 1 + (maxScaleX - 1) * self.progress;
          const scaleY = 1 + (maxScaleY - 1) * self.progress;

          gsap.to('.revealer', {
            scaleX,
            scaleY,
            transformOrigin: 'center center',
            ease: 'power2.out',
            duration: 0,
          });

          if (revealer) {
            const width = revealer.offsetWidth * scaleX;
            const height = revealer.offsetHeight * scaleY;
            revealer.classList.toggle('fullscreen', Math.abs(width - height) < 20);
          }
        },
      }),

      ScrollTrigger.create({
        trigger: '.pinned',
        start: 'top top',
        endTrigger: '.whitespace',
        end: 'bottom top',
        onEnter: () => document.querySelector('.pinned')?.classList.add('full-screen'),
        onLeaveBack: () => document.querySelector('.pinned')?.classList.remove('full-screen'),
      }),
    ];

    return () => {
      triggers.forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <div className="container">
      <D />
      <section className="pinned">
        <div className="revealer">
          <div className="revealer-1"></div>
          <div className="revealer-2"></div>
        </div>
      </section>
      <div className="header-info">
       
      </div>
      <div className="whitespace">
       
      </div>
    </div>
  );
};

export default Plusup;
