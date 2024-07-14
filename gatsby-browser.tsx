import "./global.css"

import { GatsbyBrowser } from "gatsby";

export const onClientEntry: GatsbyBrowser["onClientEntry"] = () => {
  if (typeof window !== "undefined" && !window.gtag) {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-TKMTHR85CF";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "G-TKMTHR85CF");
    };
  }
};

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}