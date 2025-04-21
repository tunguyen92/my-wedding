import { Image } from "antd";
import {
  img2924,
  img2968,
  img3025,
  img3088,
  img3111,
  img3137,
  img3142,
  img3148,
  img3157,
  img3177,
  img3209,
  img3254,
  img3270,
  img3277,
  img3284,
  img3295,
  img3313,
  img3389,
  img3434,
  img3435,
  img2945,
  img3000,
  img8938,
  img3354,
} from "~/assets/images/album";

const galleries = [
  {
    src: img2924,
    alt: "gallery101",
  },
  {
    src: img2945,
    alt: "gallery2945",
  },
  {
    src: img2968,
    alt: "gallery102",
  },
  {
    src: img3000,
    alt: "gallery3000",
  },
  {
    src: img3025,
    alt: "gallery103",
  },
  {
    src: img3111,
    alt: "gallery104",
  },
  {
    src: img3137,
    alt: "gallery105",
  },
  {
    src: img3177,
    alt: "gallery106",
  },
  {
    src: img3209,
    alt: "gallery107",
  },
  {
    src: img3270,
    alt: "gallery108",
  },
  {
    src: img3295,
    alt: "gallery109",
  },
  {
    src: img3313,
    alt: "gallery110",
  },
  {
    src: img3354,
    alt: "gallery111",
  },
  {
    src: img3389,
    alt: "gallery111",
  },
  {
    src: img3435,
    alt: "gallery112",
  },
  {
    src: img8938,
    alt: "gallery112",
  },
  {
    src: img3088,
    alt: "gallery201",
  },
  {
    src: img3142,
    alt: "gallery202",
  },
  {
    src: img3148,
    alt: "gallery203",
  },
  {
    src: img3157,
    alt: "gallery204",
  },
  {
    src: img3254,
    alt: "gallery205",
  },
  {
    src: img3277,
    alt: "gallery206",
  },
  {
    src: img3284,
    alt: "gallery207",
  },
  {
    src: img3434,
    alt: "gallery208",
  },
];

const Gallery = () => {
  return (
    <section className="gallery-section py-10 px-4" id="gallery">
      <div className="container mx-auto">
        <div className="title-flower mb-5 text-center">
          <h2 className="title-flower relative font-great-vibes text-4xl pt-10 md:pt-14 md:text-5xl] before:bg-cover before:absolute before:top-0 before:left-[calc(50%-47px)] before:w-24 before:h-11">
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
                  className="transition-transform  !max-h-1/2 duration-500 ease-in-out group-hover:scale-120 group-hover:-rotate-3"
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
