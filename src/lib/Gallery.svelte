<script lang="ts">
  import { onMount } from 'svelte';
  import PhotoSwipeLightbox from 'photoswipe/lightbox';

  type ImageData = { filename: string; title: string; alt: string };

  // Centralized list of image filenames and titles with SEO-friendly alt text
  const images: ImageData[] = [
    { filename: 'diploma3.jpeg', title: 'Diploma 3', alt: 'Диплом клинического психолога МГУ' },
    { filename: 'diploma.jpeg', title: 'Diploma 0', alt: 'Диплом о высшем образовании по психологии' },
    { filename: 'diploma2.jpeg', title: 'Diploma 2', alt: 'Диплом специалиста по клинической психологии' },
    { filename: '15.jpg', title: 'Certificate 15', alt: 'Сертификат о повышении квалификации в области сексологии' },
    { filename: 'diploma1.jpeg', title: 'Diploma 1', alt: 'Диплом о профессиональной переподготовке' },
    { filename: '1.jpg', title: 'Certificate 1', alt: 'Сертификат о прохождении курса психотерапии' },
    { filename: '2.jpg', title: 'Certificate 2', alt: 'Сертификат специалиста по когнитивно-поведенческой терапии' },
    { filename: '3.jpg', title: 'Certificate 3', alt: 'Сертификат о повышении квалификации в психологии' },
    { filename: '4.jpg', title: 'Certificate 4', alt: 'Сертификат участника профессиональной конференции' },
    { filename: '5.jpg', title: 'Certificate 5', alt: 'Сертификат о прохождении тренинга по психотерапии' },
    { filename: '6.jpg', title: 'Certificate 6', alt: 'Сертификат специалиста по работе с тревожными расстройствами' },
    { filename: '7.jpeg', title: 'Certificate 7', alt: 'Сертификат о профессиональной подготовке в сексологии' },
    { filename: '8.jpeg', title: 'Certificate 8', alt: 'Сертификат участника международной конференции по психологии' },
    { filename: '9.jpeg', title: 'Certificate 9', alt: 'Сертификат о повышении квалификации в области парной терапии' },
    { filename: '10.jpg', title: 'Certificate 10', alt: 'Сертификат специалиста по психологическому консультированию' },
    { filename: '11.jpg', title: 'Certificate 11', alt: 'Сертификат о прохождении супервизии' },
    { filename: '12.jpeg', title: 'Certificate 12', alt: 'Сертификат об участии в мастер-классе по психотерапии' },
    { filename: '13.jpg', title: 'Certificate 13', alt: 'Сертификат о дополнительном образовании в психологии' },
    { filename: '14.jpg', title: 'Certificate 14', alt: 'Сертификат участника семинара по клинической психологии' }
  ];

  // Paths for full and placeholder images
  const basePath = '/images/diplomas';
  const placeholderPath = '/images/diplomas/small';

  // Prepare full image data: full src, blurred placeholder, title, alt
  const preparedImages = images.map(({ filename, title, alt }) => ({
    src: `${basePath}/${filename}`,
    placeholder: `${placeholderPath}/${filename}`,
    title,
    alt
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
  {#each preparedImages as { src, placeholder, title, alt }}
    <a href={src} title={title} data-pswp-width="1200" data-pswp-height="1600">
      <img 
        src={placeholder} 
        alt={alt}
        loading="lazy"
        decoding="async"
        width="150"
        height="200"
        class="w-full h-auto"
      />
    </a>
  {/each}
</div>
