import { Image } from "antd";

const galleries = [
  {
    src: "https://themegeniuslab.com/html/pretty/assets/images/gallery/img-1.jpg",
    alt: "gallery1",
  },
  {
    src: "https://themegeniuslab.com/html/pretty/assets/images/gallery/img-2.jpg",
    alt: "gallery2",
  },
  {
    src: "https://themegeniuslab.com/html/pretty/assets/images/gallery/img-3.jpg",
    alt: "gallery3",
  },
  {
    src: "https://themegeniuslab.com/html/pretty/assets/images/gallery/img-4.jpg",
    alt: "gallery4",
  },
  {
    src: "https://themegeniuslab.com/html/pretty/assets/images/gallery/img-5.jpg",
    alt: "gallery5",
  },
  {
    src: "https://themegeniuslab.com/html/pretty/assets/images/gallery/img-6.jpg",
    alt: "gallery6",
  },
  {
    src: "https://themegeniuslab.com/html/pretty/assets/images/gallery/img-7.jpg",
    alt: "gallery7",
  },
  {
    src: "https://themegeniuslab.com/html/pretty/assets/images/gallery/img-8.jpg",
    alt: "gallery8",
  },
];

const Gallery = () => {
  return (
    <section className="gallery-section py-10 px-4" id="gallery">
      <div className="container mx-auto">
        <div className="title-flower mb-5 text-center">
          <h2 className="relative font-secondary text-4xl pt-10 md:pt-14 md:text-5xl before:bg-[url(src/assets/images/title-flower.png)] before:bg-cover before:absolute before:top-0 before:left-[calc(50%-47px)] before:w-24 before:h-11">
            Sweet Moments
          </h2>

          <div className="relative max-w-52 mx-auto mt-5 h-10 before:absolute before:w-20 before:md:w-36 before:h-[1px] before:bg-primary before:top-2 before:-left-6 before:md:-left-20 after:absolute after:w-20 after:md:w-36 after:h-[1px] after:bg-primary after:top-2 after:-right-6 after:md:-right-20">
            <div className="round-ball absolute left-1/2 size-4 border border-primary rounded-full -translate-x-1/2" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-2">
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            {galleries.map((item, index) => (
              <div key={item.alt + index} className="group overflow-hidden">
                <Image
                  className="transition-transform duration-500 ease-in-out group-hover:scale-120 group-hover:-rotate-3"
                  src={item.src}
                  alt={item.alt}
                />
              </div>
            ))}
          </Image.PreviewGroup>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
