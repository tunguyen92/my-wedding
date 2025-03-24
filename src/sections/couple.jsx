import { AiFillFacebook, AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";

import { bride, frameShape, groom, img3322 } from "~/assets/images/couple";

const Couple = () => {
  return (
    <section
      id="couple"
      className="couple-section container py-0 md:py-10 mx-auto"
    >
      <div className="couple-area flex flex-col md:items-center md:flex-row px-2.5 md:px-10">
        <div className="groom m-0 md:mr-6 text-center md:text-right">
          <div className="relative mx-auto md:ml-auto md:mr-0 w-max before:absolute before:left-[5px] before:top-[5px] before:size-[90px] before:rounded-full before:z-10 before:border-[1px] before:border-white">
            <img
              className="rounded-full"
              decoding="async"
              src={groom}
              alt="groom"
            />
          </div>
          <h3 className="text-xl text-text font-bold my-4">Thanh Tú</h3>
          <p className="text-paragraph leading-7">
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis give you com of system.
          </p>
          <div className="social flex justify-center md:justify-end mt-4 md:mt-9">
            <Link to="https://www.facebook.com/tu.kantee" target="_blank">
              <AiFillFacebook color="#738ea5" size={30} />
            </Link>
            <Link to="" className="ml-6">
              <AiFillTikTok color="#738ea5" size={30} />
            </Link>
          </div>
        </div>

        <div className="middle-couple-pic flex items-center justify-center mx-auto my-14 relative w-full sm:w-[60%] md:w-[250%] lg:w-[125%]">
          <img
            className="rounded-[235px] w-4/5 xl:w-[66%]"
            decoding="async"
            loading="lazy"
            src={img3322}
            alt="middle-couple"
          />
          <img
            className="absolute"
            decoding="async"
            src={frameShape}
            alt="frame-img"
          />
        </div>

        <div className="bride md:ml-6 text-center md:text-left">
          <div className="relative before:absolute before:top-1/2 md:before:top-[5px] before:left-1/2 md:before:left-[5px] before:-translate-1/2 before:md:translate-0 before:size-[90px] before:rounded-full before:z-10 before:border-[1px] before:border-white">
            <img
              className="rounded-full mx-auto md:m-0"
              decoding="async"
              src={bride}
              alt="bride"
            />
          </div>
          <h3 className="text-xl text-text font-bold my-4">Thanh Thủy</h3>
          <p className="text-paragraph leading-7">
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis give you com of system.
          </p>
          <div className="social flex justify-center md:justify-normal mt-4 md:mt-9">
            <Link
              to="https://www.facebook.com/thanh.thuy.400895"
              target="_blank"
            >
              <AiFillFacebook color="#738ea5" size={30} />
            </Link>
            <Link to="" className="ml-6">
              <AiFillTikTok color="#738ea5" size={30} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
