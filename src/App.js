import React, { useRef, useEffect } from "react";
import "./App.scss";
import Sneakers from "./images/sneakers.jpg";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

function App() {
  let container = useRef(null);
  let img = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const tl = new TimelineLite();
  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } })
    .to(imageReveal, 1.4, {width:'0%', ease: Power2.easeInOut})
  });

  return (
    <div ref={el => (container = el)} className="container">
      <>
        <div className="img-container">
          <img ref={el => (img = el)} src={Sneakers} alt="sneakers" />
        </div>
      </>
    </div>
  );
}

export default App;
