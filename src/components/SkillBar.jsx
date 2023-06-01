import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

export const SkillBar = ({ skill, percentage }) => {
  const [loadBar, setLoadBar] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  useEffect(() => {
    if (inView) {
      setLoadBar(percentage);
    }
  }, [inView, percentage]);

  const barStyle = {
    width: `${loadBar}%`,
    height: "20px",
    // backgroundColor: "linear-gradient(#e66465, #9198e5)",
    transition: "width 2s",
  };

  return (
    <div ref={ref} className="mb-4 w-4/5">
      <p className="text-white text-2xl mb-2">{skill}</p>
      <div className="w-full bg-deep-blue rounded-full">
        <div style={barStyle} className="rounded-full bg-gradient-to-l from-teal-700" />
      </div>
    </div>
  );
};
