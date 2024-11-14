"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export function HomeStatsIcon() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Set up mouse tracking
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  // Transform mouse positions to create the wiggle effect
  const xMove = useTransform(x, [0, window.innerWidth], [-20, 20]);
  const yMove = useTransform(y, [0, window.innerHeight], [-20, 20]);

  return (
    <motion.svg
      className="mx-auto h-full size-24"
      xmlns="http://www.w3.org/2000/svg"
      width="24.85927"
      height="34.11177"
      viewBox="0 0 24.85927 34.11177"
      style={{
        x: xMove, // Apply rotation based on mouse x position
        y: yMove, // Apply vertical movement based on mouse y position
      }}
    >
      <path
        d="M6.0162,20.47572l10.63838,13.41783c.24535,.30945,.80971,.27186,1.06066,0,2.05386-2.22497,4.10772-4.44995,6.16158-6.67492,.2762-.29921,.29411-.76234,0-1.06066-3.95468-4.01131-7.90936-8.02262-11.86403-12.03393l-.90887,1.17793c.3601,.24014,.75473,.61754,1.15577,.77077,.95399,.36449,2.62498-.56531,3.56452-.85946,2.83344-.88712,5.66688-1.77424,8.50032-2.66136,.69783-.21848,.72801-1.24076,0-1.44642C16.02609,8.76122,8.20084,5.04703,1.12857,.11412,.65363-.21715-.00494,.22602,.00003,.76172,.07922,9.30005,.15841,17.83839,.23761,26.37672c.00525,.56557,.63412,.93852,1.12854,.6476,1.37437-.80868,2.26881-2.22778,3.28635-3.43868,.71599-.85205,1.43845-1.69912,2.14816-2.55638,.37465-.45254,.56656-.68476,.46909-1.28325-.15478-.95036-1.60046-.54711-1.44642,.39876l.03067,.18834,.19288-.72971-3.0688,3.65197c-.73509,.87478-1.381,1.8924-2.369,2.47374l1.12854,.6476c-.07919-8.53833-.15839-17.07666-.23758-25.61499L.37149,1.40933C7.54356,6.41184,15.51117,10.17482,23.92576,12.55192v-1.44642c-2.52712,.79121-5.05425,1.58243-7.58137,2.37364-.61264,.19181-1.22527,.38362-1.83791,.57543-.30632,.0959-.61264,.19181-.91895,.28771-.09799,.03068-.76529,.3218-.64981,.3123-.0073,.0006-.26244-.10478-.49884-.26243l-.57788-.38538c-.72051-.4805-1.49608,.58232-.90887,1.17793,3.95468,4.01131,7.90936,8.02262,11.86403,12.03393v-1.06066c-2.05386,2.22497-4.10772,4.44995-6.16158,6.67492h1.06066L7.07686,19.41506c-.59946-.75608-1.65451,.31166-1.06066,1.06066Z"
        className="fill-secondary"
      />
    </motion.svg>
  );
}