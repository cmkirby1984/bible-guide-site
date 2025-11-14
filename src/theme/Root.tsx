import React, { useEffect } from 'react';

export default function Root({children}) {
  useEffect(() => {
    // Load the Pickaxe chatbot script
    const script = document.createElement('script');
    script.src = 'https://studio.pickaxe.co/api/embed/bundle.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {children}
      <div id="deployment-2e68e8f4-94c3-481a-acba-5e5e706edef7"></div>
    </>
  );
}
