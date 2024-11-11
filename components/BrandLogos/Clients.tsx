import Image from 'next/image';

const CLIENT_LOGOS = [
  { src: '/assets/Client_Logos/ANSYS.jpg', alt: 'ANSYS' },
  { src: '/assets/Client_Logos/BCT.jpg', alt: 'BCT' },
  { src: '/assets/Client_Logos/CriticalRiver.png', alt: 'CriticalRiver' },
  { src: '/assets/Client_Logos/CSG.jpg', alt: 'CSG' },
  { src: '/assets/Client_Logos/DELAPLEX.jpg', alt: 'DELAPLEX' },
  { src: '/assets/Client_Logos/GSLAB.jpg', alt: 'GSLAB' },
  { src: '/assets/Client_Logos/HCL.jpg', alt: 'HCL' },
  { src: '/assets/Client_Logos/KOFAX.png', alt: 'KOFAX' },
  { src: '/assets/Client_Logos/MAGNIT.jpg', alt: 'MAGNIT' },
  { src: '/assets/Client_Logos/Oracle.jpg', alt: 'Oracle' },
  { src: '/assets/Client_Logos/PROWESS.png', alt: 'PROWESS' },
  { src: '/assets/Client_Logos/RAMSSOLGROUP.png', alt: 'RAMSSOLGROUP' },
  { src: '/assets/Client_Logos/TEKLINK.jpg', alt: 'TEKLINK' },
  { src: '/assets/Client_Logos/UST.jpg', alt: 'UST' },
  { src: '/assets/Client_Logos/ERPA.png', alt: 'ERPA' },
  
];

const HorizontalScroller2 = () => {
    return (
      <div className="group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
        {Array(2).fill(0).map((_, i) => (
          <div 
            className="flex shrink-0 justify-around [gap:var(--gap)] [animation-direction:reverse] animate-marquee flex-row" 
            key={i}
          >
            {CLIENT_LOGOS.map((logo, index) => (
              <div className="w-24 h-24 flex items-center justify-center" key={index}>
                <Image 
                  src={logo.src} 
                  alt={logo.alt}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default HorizontalScroller2;