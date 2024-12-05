<script lang="ts">
  import { onMount } from 'svelte';
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import 'photoswipe/style.css';

  let lightbox: PhotoSwipeLightbox | null = null;

  type Image = {
    src: string;
    title: string;
    width?: number;
    height?: number;
  };

  const imageSrcs: Image[] = [
    { src: '/images/diplomas/diploma3.jpeg', title: 'Diploma 3' },
    { src: '/images/diplomas/diploma.jpeg', title: 'Diploma 0' },
    { src: '/images/diplomas/diploma2.jpeg', title: 'Diploma 2' },
    { src: '/images/diplomas/15.jpg', title: 'Certificate 15' },
    { src: '/images/diplomas/diploma1.jpeg', title: 'Diploma 1' },
    { src: '/images/diplomas/1.jpg', title: 'Certificate 1' },
    { src: '/images/diplomas/2.jpg', title: 'Certificate 2' },
    { src: '/images/diplomas/3.jpg', title: 'Certificate 3' },
    { src: '/images/diplomas/4.jpg', title: 'Certificate 4' },
    { src: '/images/diplomas/5.jpg', title: 'Certificate 5' },
    { src: '/images/diplomas/6.jpg', title: 'Certificate 6' },
    { src: '/images/diplomas/7.jpeg', title: 'Certificate 7' },
    { src: '/images/diplomas/8.jpeg', title: 'Certificate 8' },
    { src: '/images/diplomas/9.jpeg', title: 'Certificate 9' },
    { src: '/images/diplomas/10.jpg', title: 'Certificate 10' },
    { src: '/images/diplomas/11.jpg', title: 'Certificate 11' },
    { src: '/images/diplomas/12.jpeg', title: 'Certificate 12' },
    { src: '/images/diplomas/13.jpg', title: 'Certificate 13' },
    { src: '/images/diplomas/14.jpg', title: 'Certificate 14' },
  ];

  let images: Image[] = Array(imageSrcs.length).fill(null);

  function preloadImages() {
    imageSrcs.forEach((imgData, index) => {
      const img = new Image();
      img.onload = function () {
        images[index] = {
          src: imgData.src,
          title: imgData.title,
          width: img.naturalWidth,
          height: img.naturalHeight,
        };
        if (images.every(Boolean)) {
          initializeLightbox();
        }
      };
      img.onerror = function () {
        console.error(`Failed to load image: ${imgData.src}`);
        images[index] = { ...imgData }; // Use default data if loading fails
        if (images.every(Boolean)) {
          initializeLightbox();
        }
      };
      img.src = imgData.src;
    });
  }

  function initializeLightbox() {
    lightbox = new PhotoSwipeLightbox({
      gallery: '#masonry-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
      bgOpacity: 0.8,
    });
    lightbox.init();
  }

  onMount(() => {
    preloadImages();
  });
</script>

<style>
  .gallery-container {
    margin: 0 auto;
    max-width: 700px;
  }

  .masonry {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }

  .masonry-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .masonry-item:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  .masonry-item img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    max-height: 250px;
  }
</style>

<div class="gallery-container">
  <div class="masonry" id="masonry-gallery">
    {#if images.every(Boolean)}
      {#each images as { src, title, width, height }}
        <a
                href={src}
                class="masonry-item"
                title={title}
                data-pswp-width={width}
                data-pswp-height={height}
        >
          <img src={src} alt={title} loading="lazy" />
        </a>
      {/each}
    {:else}
      <!-- Optional: Add a loading indicator here -->
      <p>Loading images...</p>
    {/if}
  </div>
</div>