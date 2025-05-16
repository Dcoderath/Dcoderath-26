import { useEffect } from 'react';
import { gsap } from 'gsap';
import './AdBlank.css';
import D8 from '../../assets/D/d8.svg';

const navItems = ['github', 'linkedin', 'Gmail', 'contact'];

const AdBlank = () => {
  useEffect(() => {
    gsap.utils.toArray('.adblank__link').forEach((navLink) => {
      const tl = gsap.timeline({ ease: 'none' });
      const frontText = navLink.querySelector('.adblank-text--front');
      const boldText = navLink.querySelector('.adblank-text--bold');

      gsap.set(frontText, {
        rotationX: -90,
        yPercent: -25,
      });
      gsap.set(frontText, {
        opacity: 0,
        duration: 0.15,
      });

      tl
        .to(boldText, {
          yPercent: -50,
          rotationX: 90,
        })
        .to(frontText, {
          yPercent: -100,
          rotationX: 0,
          opacity: 1,
        }, 0)
        .to(boldText, {
          opacity: 0,
          duration: 0.15,
        }, 0.2)
        .pause();

      navLink.addEventListener('mouseenter', () => tl.play());
      navLink.addEventListener('mouseleave', () => tl.reverse());
      navLink.addEventListener('focus', () => tl.play());
      navLink.addEventListener('blur', () => tl.reverse());
    });
  }, []);

  return (
    <nav className="adblank">
      <ul className="adblank__menu">
        {navItems.map((item) => (
          <li className="adblank__item" key={item}>
            <a href="#" className="adblank__link">
              <span className="adblank-text adblank-text--bold">{item}</span>
              <span className="adblank-text adblank-text--front">{item}</span>
            </a>
          </li>
        ))}
      </ul>
<div className="adblank__banner">
  <div className="adblank__banner-track">
    {[...Array(20)].map((_, i) => (
      <div className="adblank__banner-item" key={i}>
        <div className="adblank__banner-text">JUST IMAGINE, WE DESIGN</div>
        <img src={D8} alt="Logo" className="adblank__banner-image" />
      </div>
    ))}
  </div>
</div>

    </nav>
  );
};

export default AdBlank;
