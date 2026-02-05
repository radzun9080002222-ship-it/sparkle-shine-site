import bathroomImage from '@/assets/bathroom-cleaning.jpeg';
import kitchenImage from '@/assets/kitchen-cleaning.jpeg';
import windowImage from '@/assets/window-cleaning.jpeg';
import steamImage from '@/assets/steam-cleaning.jpeg';

const Gallery = () => {
  const images = [
    { src: bathroomImage, alt: 'Уборка ванной комнаты', title: 'Ванные комнаты', gradient: 'from-primary/80 to-accent/80' },
    { src: kitchenImage, alt: 'Уборка кухни', title: 'Кухни', gradient: 'from-secondary/80 to-orange-500/80' },
    { src: windowImage, alt: 'Мытье окон', title: 'Окна', gradient: 'from-accent/80 to-pink-500/80' },
    { src: steamImage, alt: 'Паровая чистка', title: 'Паровая чистка', gradient: 'from-cyan-500/80 to-primary/80' },
  ];

  return (
    <section id="gallery" className="py-28 relative overflow-hidden">
      {/* Colorful Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-gradient-to-br from-secondary/20 to-pink-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-5 py-2 rounded-full gradient-warm text-white text-sm font-semibold mb-6 shadow-lg">
            Наши работы
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Результаты
            <br />
            <span className="text-gradient">нашей работы</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Посмотрите, как мы превращаем пространства в идеально чистые
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Colorful Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${image.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500`} />
              
              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-center">
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">{image.title}</h3>
                  <div className="w-12 h-1 bg-white rounded-full mx-auto" />
                </div>
              </div>

              {/* Number badge */}
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <span className="font-heading font-bold text-primary">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
