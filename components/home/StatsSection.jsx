"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const step = target / (duration / 16);

      const counter = setInterval(() => {
        start += step;
        if (start >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="section bg-white">
      <div className="container text-center">
        <h2 className="text-4xl mb-12">
          Trusted Eye Care in Lagos
        </h2>

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-4xl font-bold text-brand-primary">
              <Counter target={10} />+
            </h3>
            <p>Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-brand-primary">
              <Counter target={5000} />+
            </h3>
            <p>Patients Treated</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-brand-primary">
              2
            </h3>
            <p>Branches in Lagos</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-brand-primary">
              <Counter target={98} />%
            </h3>
            <p>Patient Satisfaction</p>
          </div>

        </div>
      </div>
    </section>
  );
}