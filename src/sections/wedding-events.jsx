import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

import { home, restaurant } from "~/assets/images/wedding-event";

const WeddingEvents = () => {
  return (
    <section id="events" className="love-story py-10 px-4">
      <div className="container mx-auto">
        <div className="title-flower mb-5 text-center">
          <h2 className="title-flower relative font-secondary text-4xl pt-10 md:pt-12 md:text-5xl before:bg-cover before:absolute before:top-0 before:left-[calc(50%-47px)] before:w-24 before:h-11">
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
                className="rounded-lg mx-auto w-full"
                src={home}
                alt="home"
              />
            </div>
            <h3 className="uppercase text-xl mt-8 mb-4 font-semibold">
              The Reception
            </h3>
            <ul className="text-sm text-paragraph">
              <li className="flex items-center gap-2 mb-2">
                <CiLocationOn className="text-icon" /> Tại gia, Tây Giang
              </li>
              <li className="flex items-center gap-2">
                <CiClock2 className="text-icon" /> 05/04/2025 (8h00)
              </li>
            </ul>
            <p className="text-paragraph my-4">
              Chúng mình rất mong chờ sự hiện diện của bạn trong ngày trọng đại
              này! Hãy cùng nhau tạo nên những kỷ niệm đáng nhớ.
              <br />
              🎩 Trang phục: Lịch sự, trang nhã.
              <br />⏳ Lưu ý: Vui lòng có mặt đúng giờ để không bỏ lỡ khoảnh
              khắc quan trọng.
            </p>
            <a
              className="see-location-btn flex items-center gap-2 uppercase text-xs md:text-sm font-bold py-2 md:py-3 px-4 md:px-6 border md:border-2 border-primary rounded-4xl w-fit"
              href="https://maps.app.goo.gl/CRZeH8QPVFSftj6t8"
              target="_blank"
            >
              See location <FaArrowRight className="text-icon" size={20} />
            </a>
          </div>

          <div className="location">
            <div className="relative before:absolute before:rounded-lg before:border-2 before:border-white/50 before:top-4 before:left-4 before:size-[calc(100%-32px)]">
              <img
                className="rounded-lg mx-auto w-full"
                src={restaurant}
                alt="restaurant"
              />
            </div>
            <h3 className="uppercase text-xl mt-8 mb-4 font-semibold">
              Wedding party
            </h3>
            <ul className="text-sm text-paragraph">
              <li className="flex items-center gap-2 mb-2">
                <CiLocationOn className="text-icon" /> Nhà hàng Đoàn Sáng, Tây
                Giang
              </li>
              <li className="flex items-center gap-2">
                <CiClock2 className="text-icon" /> 05/04/2025 (11h00)
              </li>
            </ul>
            <p className="text-paragraph my-4">
              Chúng mình rất mong chờ sự hiện diện của bạn trong ngày trọng đại
              này. Mong bạn sẽ đến chung vui cùng chúng mình nhé!
              <br />
              🎩 Trang phục: Lịch sự, trang nhã.
              <br />⏳ Lưu ý: Vui lòng có mặt đúng giờ để không bỏ lỡ khoảnh
              khắc quan trọng.
            </p>
            <a
              className="see-location-btn flex items-center gap-2 uppercase text-xs md:text-sm font-bold py-2 md:py-3 px-4 md:px-6 border md:border-2 border-primary rounded-4xl w-fit"
              href="https://maps.app.goo.gl/hTtW5Kz1ZEy5nW5s7"
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
