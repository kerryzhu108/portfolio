"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import anime, { random } from "animejs";
import { useSpring, animated } from "@react-spring/web";

export default function Clouds() {
  const verticalAnimation = () => {
    const verticalAnimation = [];
    const initialDirection = Math.random() > 0.5 ? 1 : -1;
    for (let index = 0; index < 20; index++) {
      verticalAnimation.push({
        value: (5 + Math.random() * 10) * (-1) ** index * initialDirection,
        duration: 6000,
      });
    }
    return verticalAnimation;
  };

  const [clouds, setClouds] = useState([] as React.JSX.Element[]);

  useEffect(() => {
    const newClouds = [];
    for (let index = 0; index < 30; index++) {
      const top = Math.random() * 600;
      const left = Math.random() * 1000;
      newClouds.push(
        <Image
          src={Math.random() > 0.5 ? "/cloud.svg" : "/cloud3.svg"}
          width={Math.random() * 80 + 10}
          height={50}
          alt={"cloud"}
          className={`cloud-${index} -z-10 absolute`}
          style={{ top, left, opacity: Math.random() }}
        />
      );
    }
    setClouds(newClouds);
  }, []);

  useEffect(() => {
    for (let cloudIndex = 0; cloudIndex < 30; cloudIndex++) {
      anime({
        targets: `.cloud-${cloudIndex}`,
        translateX: { value: window.outerWidth, duration: 400000 },
        translateY: verticalAnimation(),
        easing: "linear",
      });
    }
  }, [clouds]);

  return <div>{clouds}</div>;
}
