<script lang="ts">
  import { onMount } from 'svelte';
  import PhotoSwipeLightbox from 'photoswipe/lightbox';

  let lightbox: PhotoSwipeLightbox | null = null;

  // Centralized list of image data
  const images = [
    { filename: 'diploma3.jpeg', title: 'Diploma 3' },
    { filename: 'diploma.jpeg', title: 'Diploma 0' },
    { filename: 'diploma2.jpeg', title: 'Diploma 2' },
    { filename: '15.jpg', title: 'Certificate 15' },
    { filename: 'diploma1.jpeg', title: 'Diploma 1' },
    { filename: '1.jpg', title: 'Certificate 1' },
    { filename: '2.jpg', title: 'Certificate 2' },
    { filename: '3.jpg', title: 'Certificate 3' },
    { filename: '4.jpg', title: 'Certificate 4' },
    { filename: '5.jpg', title: 'Certificate 5' },
    { filename: '6.jpg', title: 'Certificate 6' },
    { filename: '7.jpeg', title: 'Certificate 7' },
    { filename: '8.jpeg', title: 'Certificate 8' },
    { filename: '9.jpeg', title: 'Certificate 9' },
    { filename: '10.jpg', title: 'Certificate 10' },
    { filename: '11.jpg', title: 'Certificate 11' },
    { filename: '12.jpeg', title: 'Certificate 12' },
    { filename: '13.jpg', title: 'Certificate 13' },
    { filename: '14.jpg', title: 'Certificate 14' }
  ];

  const basePath = 'images/diplomas'; // Adjusted path for file loading

  // Prepare full image data with paths
  const preparedImages = images.map(image => ({
    ...image,
    src: `${basePath}/${image.filename}`
  }));

  // Initialize PhotoSwipeLightbox
  onMount(() => {
    lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    });
    lightbox.init();

    return () => {
      lightbox?.destroy();
      lightbox = null;
    };
  });
</script>

<style>
  #gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Flexible grid */
    gap: 15px;
    padding: 20px;
    justify-items: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
  }

  #gallery a {
    display: block;
    overflow: hidden;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  #gallery img {
    width: 100%;
    height: auto; /* Preserve aspect ratio */
    object-fit: contain; /* Prevent stretching */
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  #gallery a:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  #gallery img:hover {
    transform: scale(1.1);
  }
</style>

<div id="gallery" class="pswp-gallery">
  {#each preparedImages as { src, title }}
    <a href={src} target="_blank" title={title}>
      <img src={src} alt={title} loading="lazy" />
    </a>
  {/each}
</div>