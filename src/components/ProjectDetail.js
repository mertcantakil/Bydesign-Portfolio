import React from 'react';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// Living Room resimleri
import livingRoom1 from '../pictures/living-room/lr-1.jpg';
import livingRoom2 from '../pictures/living-room/lr-2.jpg';
import livingRoom3 from '../pictures/living-room/lr-3.jpg';
import livingRoom4 from '../pictures/living-room/lr-4.jpg';
import livingRoom5 from '../pictures/living-room/lr-5.jpg';
import livingRoom6 from '../pictures/living-room/lr-6.jpg';
// Avlu resimleri
import avlu1 from '../pictures/avlu/a-1.jpg';
import avlu2 from '../pictures/avlu/a-2.jpg';
import avlu3 from '../pictures/avlu/a-3.jpg';
import avlu4 from '../pictures/avlu/a-4.jpg';
import avlu5 from '../pictures/avlu/a-5.jpg';
import avlu6 from '../pictures/avlu/a-6.jpg';
import avlu7 from '../pictures/avlu/a-7.jpg';
import avlu8 from '../pictures/avlu/a-8.jpg';
import avlu9 from '../pictures/avlu/a-9.jpg';
// Cesme Kahve Gaziantep
import cesme1 from '../pictures/cesme-kahve-gaziantep/ckg-1.jpg';
import cesme2 from '../pictures/cesme-kahve-gaziantep/ckg-2.jpg';
import cesme3 from '../pictures/cesme-kahve-gaziantep/ckg-3.jpg';
import cesme4 from '../pictures/cesme-kahve-gaziantep/ckg-4.jpg';
import cesme5 from '../pictures/cesme-kahve-gaziantep/ckg-5.jpg';
import cesme6 from '../pictures/cesme-kahve-gaziantep/ckg-6.jpg';
import cesme7 from '../pictures/cesme-kahve-gaziantep/ckg-7.jpg';
import cesme8 from '../pictures/cesme-kahve-gaziantep/ckg-8.jpg';
// Cesme Kahve Pendik
import cesmependik1 from '../pictures/cesme-kahve-pendik/ckp-1.jpeg';
import cesmependik2 from '../pictures/cesme-kahve-pendik/ckp-2.jpeg';
import cesmependik3 from '../pictures/cesme-kahve-pendik/ckp-3.jpeg';
import cesmependik4 from '../pictures/cesme-kahve-pendik/ckp-4.jpeg';
import cesmependik5 from '../pictures/cesme-kahve-pendik/ckp-5.jpeg';
import cesmependik6 from '../pictures/cesme-kahve-pendik/ckp-6.jpeg';
import cesmependik7 from '../pictures/cesme-kahve-pendik/ckp-7.jpeg';
import cesmependik8 from '../pictures/cesme-kahve-pendik/ckp-8.jpeg';
import cesmependik9 from '../pictures/cesme-kahve-pendik/ckp-9.jpg';
import cesmependik10 from '../pictures/cesme-kahve-pendik/ckp-10.jpg';
import cesmependik11 from '../pictures/cesme-kahve-pendik/ckp-11.jpg';
// Fargo
import fargo1 from '../pictures/fargo/fr-1.jpg';
import fargo2 from '../pictures/fargo/fr-2.jpg';
import fargo3 from '../pictures/fargo/fr-3.jpg';
import fargo4 from '../pictures/fargo/fr-4.jpg';
import fargo5 from '../pictures/fargo/fr-5.jpg';
import fargo6 from '../pictures/fargo/fr-6.jpg';
import fargo7 from '../pictures/fargo/fr-7.jpg';
import fargo8 from '../pictures/fargo/fr-8.jpg';
import fargo9 from '../pictures/fargo/fr-9.jpg';
import fargo10 from '../pictures/fargo/fr-10.jpg';
// Fargo Interior
import fargoInterior1 from '../pictures/fargo-interior/fri-1.jpg';
import fargoInterior2 from '../pictures/fargo-interior/fri-2.jpg';
import fargoInterior3 from '../pictures/fargo-interior/fri-3.jpg';
import fargoInterior4 from '../pictures/fargo-interior/fri-4.jpg';
import fargoInterior5 from '../pictures/fargo-interior/fri-5.jpg';
import fargoInterior6 from '../pictures/fargo-interior/fri-6.jpg';
import fargoInterior7 from '../pictures/fargo-interior/fri-7.jpg';
import fargoInterior8 from '../pictures/fargo-interior/fri-8.jpg';
import fargoInterior9 from '../pictures/fargo-interior/fri-9.jpg';
// House of Durum
import houseofdurum1 from '../pictures/house-of-durum/h-1.jpg';
import houseofdurum2 from '../pictures/house-of-durum/h-2.jpg';
import houseofdurum3 from '../pictures/house-of-durum/h-3.jpg';
import houseofdurum4 from '../pictures/house-of-durum/h-4.jpg';
import houseofdurum5 from '../pictures/house-of-durum/h-5.jpg';
import houseofdurum6 from '../pictures/house-of-durum/h-6.jpg';
import houseofdurum7 from '../pictures/house-of-durum/h-7.jpg';
// Ice Cream
import icecream1 from '../pictures/icecream/i-1.png';
import icecream2 from '../pictures/icecream/i-2.jpg';
import icecream3 from '../pictures/icecream/i-3.png';
import icecream4 from '../pictures/icecream/i-4.png';
import icecream5 from '../pictures/icecream/i-5.png';
import icecream6 from '../pictures/icecream/i-6.jpg';
// Muhtelif
import muhtelif1 from '../pictures/muhtelif/m-1.jpg';
import muhtelif2 from '../pictures/muhtelif/m-2.jpg';
import muhtelif3 from '../pictures/muhtelif/m-3.jpg';
// Nevşe
import nevse1 from '../pictures/nevse/n-1.jpg';
import nevse2 from '../pictures/nevse/n-2.jpg';
import nevse3 from '../pictures/nevse/n-3.jpg';
import nevse4 from '../pictures/nevse/n-4.jpg';
import nevse5 from '../pictures/nevse/n-5.jpg';
import nevse6 from '../pictures/nevse/n-6.jpg';
import nevse7 from '../pictures/nevse/n-7.jpg';
import nevse8 from '../pictures/nevse/n-8.jpg';
import nevse9 from '../pictures/nevse/n-9.jpg';
import nevse10 from '../pictures/nevse/n-10.jpg';
import nevse11 from '../pictures/nevse/n-11.jpg';
// Office
import office1 from '../pictures/office/o-1.png';
import office2 from '../pictures/office/o-2.jpg';
import office3 from '../pictures/office/o-3.jpg';
import office4 from '../pictures/office/o-4.jpg';
import office5 from '../pictures/office/o-5.jpeg';
import office6 from '../pictures/office/o-6.jpeg';
// Social
import social1 from '../pictures/social/s-1.jpeg';
import social2 from '../pictures/social/s-2.jpeg';
import social3 from '../pictures/social/s-3.jpg';
import social4 from '../pictures/social/s-4.jpg';
import social5 from '../pictures/social/s-5.jpg';
import social6 from '../pictures/social/s-6.jpg';
import social7 from '../pictures/social/s-7.jpg';
import social8 from '../pictures/social/s-8.jpg';
import social9 from '../pictures/social/s-9.jpeg';
import social10 from '../pictures/social/s-10.jpg';
import social11 from '../pictures/social/s-11.jpg';
import social12 from '../pictures/social/s-12.jpg';
import social13 from '../pictures/social/s-13.jpg';
import social14 from '../pictures/social/s-14.jpg';
// Villa
import villa1 from '../pictures/villa/vl-1.jpg';
import villa2 from '../pictures/villa/vl-2.jpg';
import villa3 from '../pictures/villa/vl-3.jpg';
import villa4 from '../pictures/villa/vl-4.jpg';
// Yakakoy
import yakakoy1 from '../pictures/yakakoy/yk-1.jpg';
import yakakoy2 from '../pictures/yakakoy/yk-2.jpg';
import yakakoy3 from '../pictures/yakakoy/yk-3.jpg';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = {
    livingRoom: {
      title: "Living Room",
      location: "İstanbul, Türkiye",
      year: "2024",
      description: "İç Mekan Tasarımı",
      images: [livingRoom1, livingRoom2, livingRoom3, livingRoom4, livingRoom5, livingRoom6]
    },
    avlu: {
      title: "Avlu",
      location: "İstanbul, Türkiye",
      year: "2024",
      description: "Dış Mekan Tasarımı",
      images: [avlu1, avlu2, avlu3, avlu4, avlu5, avlu6, avlu7, avlu8, avlu9]
    },
    cesme1: {
      title: "Çeşme Kahve",
      location: "Gaziantep, Türkiye",
      year: "2023",
      description: "Restoran Tasarımı",
      images: [cesme1, cesme2, cesme3, cesme4, cesme5, cesme6, cesme7, cesme8]
    },
    cesmependik1: {
      title: "Çeşme Kahve",
      location: "Pendik, İstanbul",
      year: "2023",
      description: "Restoran Tasarımı",
      images: [cesmependik1, cesmependik2, cesmependik3, cesmependik4, cesmependik5, cesmependik6, cesmependik7,
        cesmependik8, cesmependik9, cesmependik10, cesmependik11]
    },
    fargo1: {
      title: "Fargo",
      location: "İstanbul, Türkiye",
      year: "2024",
      description: "Restoran Tasarımı",
      images: [fargo1, fargo2, fargo3, fargo4, fargo5, fargo6, fargo7, fargo8, fargo9, fargo10]
    },
    fargoInterior1: {
      title: "Fargo Interior",
      location: "İstanbul, Türkiye",
      year: "2024",
      description: "Restoran Tasarımı",
      images: [fargoInterior1, fargoInterior2, fargoInterior3, fargoInterior4, fargoInterior5, fargoInterior6, fargoInterior7, fargoInterior8, fargoInterior9]
    },
    houseofdurum1: {
      title: "House of Durum",
      location: "İstanbul, Türkiye",
      year: "2024",
      description: "Restoran Tasarımı",
      images: [houseofdurum1, houseofdurum2, houseofdurum3, houseofdurum4, houseofdurum5, houseofdurum6, houseofdurum7]
    },
    icecream1: {
      title: "Ice Cream",
      location: "İstanbul, Türkiye",
      year: "2024",
      description: "Restoran Tasarımı",
      images: [icecream1, icecream2, icecream3, icecream4, icecream5, icecream6]
    },
    muhtelif1: {
      title: "Muhtelif",
      location: "İstanbul, Türkiye",
      year: "2024",
      description: "Restoran Tasarımı",
      images: [muhtelif1, muhtelif2, muhtelif3]
    },
    nevse1: {
      title: "Nevşe",
      location: "İstanbul, Türkiye",
      year: "2024",
      description: "Restoran Tasarımı",
      images: [nevse1, nevse2, nevse3, nevse4, nevse5, nevse6, nevse7, nevse8, nevse9, nevse10, nevse11]
    },
    office1: {
      title: "Office",
      location: "İstanbul, Türkiye",
      year: "2024",
      description: "Restoran Tasarımı",
      images: [office1, office2, office3, office4, office5, office6]
    },
    social1: {
      title: "Social",
      location: "İstanbul, Türkiye",
      year: "2024",
      description: "Restoran Tasarımı",
      images: [social1, social2, social3, social4, social5, social6, social7, social8, social9, social10, social11, social12, social13, social14]
    },
    villa1: {
      title: "Villa",
      location: "İstanbul, Türkiye",
      year: "2024",
      description: "Restoran Tasarımı",
      images: [villa1, villa2, villa3, villa4]
    },
    yakakoy1: {
      title: "Yakakoy",
      location: "İstanbul, Türkiye",
      year: "2024",
      description: "Restoran Tasarımı",
      images: [yakakoy1, yakakoy2, yakakoy3]
    },
  };

  const project = projects[id];

  if (!project) {
    return <div>Proje bulunamadı</div>;
  }

  return (
    <div className="project-detail">
      <div className="project-info">
        <h1 style={{ 
          fontSize: window.innerWidth <= 768 ? '2em' : '2.5em' 
        }}>{project.title}</h1>
        <div className="project-metadata" style={{
          padding: window.innerWidth <= 768 ? '0 15px' : '0'
        }}>
          <p><strong>Proje:</strong> {project.title}</p>
          <p><strong>Konum:</strong> {project.location}</p>
          <p><strong>Yıl:</strong> {project.year}</p>
          <p><strong>İş:</strong> {project.description}</p>
        </div>
      </div>
      <div className="project-images" style={{
        padding: window.innerWidth <= 768 ? '0 10px' : '0'
      }}>
        {project.images.map((image, index) => (
          <LazyLoadImage
            key={index}
            src={image}
            effect="blur"
            alt={`${project.title} ${index + 1}`}
            style={{
              width: '100%',
              maxWidth: window.innerWidth <= 768 ? '100%' : '800px'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail; 