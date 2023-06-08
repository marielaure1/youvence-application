import React, { useEffect } from 'react';

const BackgroundAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.background');
      const scrollY = window.scrollY;

      console.log( window.innerHeight);
      console.log( scrollY);

      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const dataColor = section.getAttribute('data-color');

        if (
          scrollY > offsetTop - window.innerHeight / 3 &&
          scrollY < offsetTop + section.offsetHeight - window.innerHeight / 3
        ) {
          windows.style.backgroundColor = dataColor;
        } else {
          windows.style.backgroundColor = '';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default BackgroundAnimation;
