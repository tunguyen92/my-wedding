import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

const WeddingEvents = () => {
  return (
    <section id="events" className="love-story py-10 px-4">
      <div className="container mx-auto">
        <div className="title-flower mb-5 text-center">
          <h2 className="relative font-secondary text-4xl pt-10 md:pt-12 md:text-5xl before:bg-[url(src/assets/images/title-flower.png)] before:bg-cover before:absolute before:top-0 before:left-[calc(50%-47px)] before:w-24 before:h-11">
            Wedding Events
          </h2>

          <div className="relative max-w-52 mx-auto mt-5 h-10 before:absolute before:w-20 before:md:w-36 before:h-[1px] before:bg-primary before:top-2 before:-left-6 before:md:-left-20 after:absolute after:w-20 after:md:w-36 after:h-[1px] after:bg-primary after:top-2 after:-right-6 after:md:-right-20">
            <div className="round-ball absolute left-1/2 size-4 border border-primary rounded-full -translate-x-1/2" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-7">
          <div className="location mb-4 md:mb-0">
            <div className="relative before:absolute before:rounded-lg before:border-2 before:border-white/50 before:top-4 before:left-4 before:size-[calc(100%-32px)]">
              <img
                className="rounded-lg"
                src="https://themegeniuslab.com/html/pretty/assets/images/reception-pic.jpg"
                alt=""
              />
            </div>
            <h3 className="uppercase text-xl mt-8 mb-4 font-semibold">
              The Reception
            </h3>
            <ul className="text-sm text-paragraph">
              <li className="flex items-center gap-2 mb-2">
                <CiLocationOn className="text-icon" /> Hotel, muli International
                Austria
              </li>
              <li className="flex items-center gap-2">
                <CiClock2 className="text-icon" /> Feb 13, 2020 (10Am - 1AM)
              </li>
            </ul>
            <p className="text-paragraph my-4">
              Recently cut out of an illustrated magazine and housed in a nice,
              gilded frame. It showed a lady fitted out with a fur hat and fur
              boa who sat upright, raising a heavy fur muff that covered the
              whole of her
            </p>
            <a
              className="see-location-btn flex items-center gap-2 uppercase text-xs md:text-sm font-bold py-2 md:py-3 px-4 md:px-6 border md:border-2 border-primary rounded-4xl w-fit"
              href="https://www.google.com/maps/place/Nh%C3%A0+V%C4%83n+h%C3%B3a+Th%C3%B4n+H%E1%BA%A3i+%C4%90%C3%B4ng/@13.7674279,109.2888937,363m/data=!3m1!1e3!4m15!1m8!3m7!1s0x316f6c0723b705d5:0xa2fbd440413efce1!2zTmjGoW4gSOG6o2ksIFF1eSBOaG9uLCBCaW5oIERpbmgsIFZpZXRuYW0!3b1!8m2!3d13.7693523!4d109.2897868!16s%2Fg%2F1v2j9dx6!3m5!1s0x316f6ea5e208c4c5:0xf8da7607c5d5b6bd!8m2!3d13.7678559!4d109.2890065!16s%2Fg%2F11c151lhzz?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              See location <FaArrowRight className="text-icon" size={20} />
            </a>
          </div>

          <div className="location">
            <div className="relative before:absolute before:rounded-lg before:border-2 before:border-white/50 before:top-4 before:left-4 before:size-[calc(100%-32px)]">
              <img
                className="rounded-lg"
                src="https://themegeniuslab.com/html/pretty/assets/images/wedding-party-pic.jpg"
                alt=""
              />
            </div>
            <h3 className="uppercase text-xl mt-8 mb-4 font-semibold">
              Wedding party
            </h3>
            <ul className="text-sm text-paragraph">
              <li className="flex items-center gap-2 mb-2">
                <CiLocationOn className="text-icon" /> Hotel, muli International
                Austria
              </li>
              <li className="flex items-center gap-2">
                <CiClock2 className="text-icon" /> Feb 13, 2020 (10Am - 1AM)
              </li>
            </ul>
            <p className="text-paragraph my-4">
              Recently cut out of an illustrated magazine and housed in a nice,
              gilded frame. It showed a lady fitted out with a fur hat and fur
              boa who sat upright, raising a heavy fur muff that covered the
              whole of her
            </p>
            <a
              className="see-location-btn flex items-center gap-2 uppercase text-xs md:text-sm font-bold py-2 md:py-3 px-4 md:px-6 border md:border-2 border-primary rounded-4xl w-fit"
              href="https://www.google.com/maps/place/Nh%C3%A0+V%C4%83n+h%C3%B3a+Th%C3%B4n+H%E1%BA%A3i+%C4%90%C3%B4ng/@13.7674279,109.2888937,363m/data=!3m1!1e3!4m15!1m8!3m7!1s0x316f6c0723b705d5:0xa2fbd440413efce1!2zTmjGoW4gSOG6o2ksIFF1eSBOaG9uLCBCaW5oIERpbmgsIFZpZXRuYW0!3b1!8m2!3d13.7693523!4d109.2897868!16s%2Fg%2F1v2j9dx6!3m5!1s0x316f6ea5e208c4c5:0xf8da7607c5d5b6bd!8m2!3d13.7678559!4d109.2890065!16s%2Fg%2F11c151lhzz?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              See location <FaArrowRight className="text-icon" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingEvents;
