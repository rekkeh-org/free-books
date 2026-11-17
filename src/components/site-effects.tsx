"use client";

import { useEffect } from "react";

export function SiteEffects() {
  useEffect(() => {
    document.body.classList.remove("nojs");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in", "run", "dis");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 },
    );

    document
      .querySelectorAll(".rv, #dissolve, #journey, #map, #finale")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
