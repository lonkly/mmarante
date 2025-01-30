import { W as ensure_array_like, X as attr, T as pop, Q as push } from "../../../chunks/index.js";
import { g as getTranslationFunctions } from "../../../chunks/index2.js";
import "photoswipe/lightbox";
function _page($$payload, $$props) {
  push();
  const imageSrcs = [
    {
      src: "/images/diplomas/diploma3.jpeg",
      title: "Diploma 3"
    },
    {
      src: "/images/diplomas/diploma.jpeg",
      title: "Diploma 0"
    },
    {
      src: "/images/diplomas/diploma2.jpeg",
      title: "Diploma 2"
    },
    {
      src: "/images/diplomas/15.jpg",
      title: "Certificate 15"
    },
    {
      src: "/images/diplomas/diploma1.jpeg",
      title: "Diploma 1"
    },
    {
      src: "/images/diplomas/1.jpg",
      title: "Certificate 1"
    },
    {
      src: "/images/diplomas/2.jpg",
      title: "Certificate 2"
    },
    {
      src: "/images/diplomas/3.jpg",
      title: "Certificate 3"
    },
    {
      src: "/images/diplomas/4.jpg",
      title: "Certificate 4"
    },
    {
      src: "/images/diplomas/5.jpg",
      title: "Certificate 5"
    },
    {
      src: "/images/diplomas/6.jpg",
      title: "Certificate 6"
    },
    {
      src: "/images/diplomas/7.jpeg",
      title: "Certificate 7"
    },
    {
      src: "/images/diplomas/8.jpeg",
      title: "Certificate 8"
    },
    {
      src: "/images/diplomas/9.jpeg",
      title: "Certificate 9"
    },
    {
      src: "/images/diplomas/10.jpg",
      title: "Certificate 10"
    },
    {
      src: "/images/diplomas/11.jpg",
      title: "Certificate 11"
    },
    {
      src: "/images/diplomas/12.jpeg",
      title: "Certificate 12"
    },
    {
      src: "/images/diplomas/13.jpg",
      title: "Certificate 13"
    },
    {
      src: "/images/diplomas/14.jpg",
      title: "Certificate 14"
    }
  ];
  let images = Array(imageSrcs.length).fill(null);
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<div class="gallery-container svelte-y2qjlm"><div class="masonry svelte-y2qjlm" id="masonry-gallery">`;
  if (images.every(Boolean)) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(images);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { src, title, width, height } = each_array[$$index];
      $$payload.out += `<a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(src, void 0))} class="masonry-item svelte-y2qjlm"${attr("title", title)}${attr("data-pswp-width", width)}${attr("data-pswp-height", height)}><img${attr("src", src)}${attr("alt", title)} loading="lazy" class="svelte-y2qjlm"></a>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p>Loading images...</p>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  _page as default
};
