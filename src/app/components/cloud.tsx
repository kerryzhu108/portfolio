"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import anime from "animejs";

export default function Cloud() {
  useEffect(() => {
    anime({
      targets: ".cloud",
      translateX: -300,
      duration: 2000, // Animation duration in milliseconds
      easing: "easeInOutQuad", // Easing function for smooth animationssssssaaaaaa
    });
  }, []);
  const clouds = [];
  useEffect(() => {
    for (let index = 0; index < 12; index++) {
      clouds.push(
        <Image
          src="/cloud.svg"
          width={90}
          height={50}
          alt={"cloud"}
          className="cloud"
        />
      );
    }
  }, []);

  return <div></div>;
}
