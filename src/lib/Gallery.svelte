<script lang="ts">
  import { onMount } from 'svelte';
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import LazyImage from './LazyImage.svelte';

  type ImageData = { filename: string; title: string };

  // Centralized list of image filenames and titles
  const images: ImageData[] = [
    { filename: 'diploma3.jpeg', title: 'Diploma 3' },
    { filename: 'diploma.jpeg', title: 'Diploma 0' },
    { filename: 'diploma2.jpeg', title: 'Diploma 2' },
    { filename: '15.jpg',      title: 'Certificate 15' },
    { filename: 'diploma1.jpeg', title: 'Diploma 1' },
    { filename: '1.jpg',       title: 'Certificate 1' },
    { filename: '2.jpg',       title: 'Certificate 2' },
    { filename: '3.jpg',       title: 'Certificate 3' },
    { filename: '4.jpg',       title: 'Certificate 4' },
    { filename: '5.jpg',       title: 'Certificate 5' },
    { filename: '6.jpg',       title: 'Certificate 6' },
    { filename: '7.jpeg',      title: 'Certificate 7' },
    { filename: '8.jpeg',      title: 'Certificate 8' },
    { filename: '9.jpeg',      title: 'Certificate 9' },
    { filename: '10.jpg',      title: 'Certificate 10' },
    { filename: '11.jpg',      title: 'Certificate 11' },
    { filename: '12.jpeg',     title: 'Certificate 12' },
    { filename: '13.jpg',      title: 'Certificate 13' },
    { filename: '14.jpg',      title: 'Certificate 14' }
  ];

  // Paths for full and placeholder images
  const basePath = '/images/diplomas';
  const placeholderPath = '/images/diplomas/small';

  // Prepare full image data: full src, blurred placeholder, title
  const preparedImages = images.map(({ filename, title }) => ({
    src: `${basePath}/${filename}`,
    placeholder: `${placeholderPath}/${filename}`,
    title
  }));

  let lightbox: PhotoSwipeLightbox;

  onMount(() => {
    lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
      bgOpacity: 0.8
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  });
</script>

<style>
  #gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    padding: 20px;
    justify-items: center;
    align-items: center;
  }

  #gallery a {
    display: block;
    overflow: hidden;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  #gallery a:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
</style>

<div id="gallery" class="pswp-gallery">
  {#each preparedImages as { src, placeholder, title }}
    <a href={src} title={title}>
      <LazyImage {src} {placeholder} alt={title} />
    </a>
  {/each}
</div>
