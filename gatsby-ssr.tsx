import React from "react";
import { GatsbySSR } from "gatsby";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="gtag-js"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-TKMTHR85CF"
    ></script>,
    <script
      key="gtag-config"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TKMTHR85CF');
        `,
      }}
    ></script>,
  ]);
};