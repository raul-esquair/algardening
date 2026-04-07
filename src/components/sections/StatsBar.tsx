"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Cities Served" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
];

function AnimatedNumber({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-around gap-8 px-6 py-10 lg:px-20">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="flex flex-col items-center gap-1"
          >
            <span className="font-heading text-4xl font-bold text-accent">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-sm font-medium text-white/60">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
