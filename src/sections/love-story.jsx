import { Timeline } from "antd";
import { PiCalendarHeartThin, PiHeartThin } from "react-icons/pi";
import { LiaDoveSolid } from "react-icons/lia";
import { GiDiamondRing } from "react-icons/gi";

import {
  story1,
  story2,
  story3,
  story4,
  timelineShape,
} from "~/assets/images/story";

const timelineItems = [
  {
    title: "Lần đầu gặp nhau",
    text: "Chúng mình gặp nhau một cách thật tình cờ trong buổi gặp gỡ cùng bạn bè. Từ những câu chuyện xã giao ban đầu, dần dần chúng mình nói cười nhiều hơn. Và có lẽ, ngay khoảnh khắc đó, một điều gì đó đẹp đẽ đã bắt đầu.",
    imgSrc: story1,
    dot: (
      <div className="size-5 relative rounded-full border border-icon before:bg-icon before:rounded-full before:size-3.5 before:absolute before:top-0.5 before:left-0.5" />
    ),
    alignment: "left",
  },
  {
    title: "Hẹn hò đầu tiên",
    text: "Sau khi bày tỏ tình cảm và được đáp lại, chúng mình có buổi hẹn đầu tiên. Chút hồi hộp, chút ngại ngùng, nhưng chỉ cần có nhau là đủ. Một khởi đầu nhẹ nhàng, nhưng đầy ý nghĩa.",
    imgSrc: story2,
    dot: (
      <div className="rounded-full bg-icon-bg p-3">
        <PiCalendarHeartThin className="text-icon" size={20} />
      </div>
    ),
    alignment: "right",
  },
  {
    title: "Cầu hôn",
    text: "Từ hai con người xa lạ, chúng ta dần trở thành một phần quan trọng trong cuộc sống của nhau. Và giờ đây, một chương mới lại mở ra, nơi chúng ta không chỉ đồng hành mà còn cùng nhau xây dựng một tương lai chung.",
    imgSrc: story3,
    dot: (
      <div className="rounded-full bg-icon-bg p-3">
        <LiaDoveSolid className="text-icon" size={20} />
      </div>
    ),
    alignment: "left",
  },
  {
    title: "Đính hôn",
    text: "Cuối cùng khoảnh khắc đặc biệt cũng đã đến. Cảm ơn vì chúng ta luôn bên nhau, cùng chia sẻ niềm vui, nỗi buồn và những giấc mơ. Không chỉ là người yêu, chúng ta còn là những người bạn, những tri kỷ cùng đồng hành. Hôm nay là một dấu mốc ý nghĩa, và chặng đường phía trước chắc chắn sẽ còn nhiều điều tuyệt vời hơn nữa. Chúc mừng chúng ta!",
    imgSrc: story4,
    dot: (
      <div className="rounded-full bg-icon-bg p-3">
        <GiDiamondRing className="text-icon" size={20} />
      </div>
    ),
    alignment: "right",
  },
  {
    dot: (
      <div className="rounded-full bg-icon-bg p-3">
        <PiHeartThin className="text-icon" size={20} />
      </div>
    ),
  },
];

const LoveStory = () => {
  return (
    <section id="story" className="love-story text-center pt-20">
      <div className="container mx-auto">
        <div className="title-flower mb-5">
          <h2 className="title-flower relative font-great-vibes text-4xl pt-10 md:pt-14 md:text-5xl before:bg-cover before:absolute before:top-0 before:left-[calc(50%-47px)] before:w-24 before:h-11">
            Our Love Story
          </h2>

          <div className="relative max-w-52 mx-auto mt-5 h-10 before:absolute before:w-20 before:md:w-36 before:h-[1px] before:bg-primary before:top-2 before:-left-6 before:md:-left-20 after:absolute after:w-20 after:md:w-36 after:h-[1px] after:bg-primary after:top-2 after:-right-6 after:md:-right-20">
            <div className="round-ball absolute left-1/2 size-4 border border-primary rounded-full -translate-x-1/2" />
          </div>
        </div>

        <Timeline
          mode="alternate"
          className="overflow-hidden hidden md:block"
          style={{ overflow: "hidden", padding: 16 }}
          items={timelineItems.map(
            ({ title, text, imgSrc, dot, alignment }, index) => ({
              dot,
              label:
                title && text ? (
                  <div
                    className={`story-text px-10 mt-12 ${
                      alignment === "right" ? "" : "text-right"
                    }`}
                  >
                    <h3 className="text-2xl text-text font-medium uppercase mb-4">
                      {title}
                    </h3>
                    <p
                      className={`text-paragraph leading-7 md:!text-lg ${
                        alignment === "right" ? "pr-20" : "pl-20"
                      }`}
                    >
                      {text}
                    </p>
                  </div>
                ) : null,
              children: imgSrc ? (
                <div
                  className={`px-10 ${
                    alignment === "right" ? "flex justify-end" : ""
                  }`}
                >
                  <div
                    className={`img-holder relative max-w-80 max-h-80 p-2.5 border border-dashed border-primary rounded-full before:absolute ${
                      alignment === "right"
                        ? " before:-right-14  before:rotate-[102deg]"
                        : " before:-left-16  before:rotate-[66deg]"
                    } before:top-48 before:size-[90%] before:border-l before:border-dashed before:border-primary before:rounded-full before:-z-10`}
                  >
                    <img
                      decoding="async"
                      className="rounded-full object-cover size-full"
                      src={imgSrc}
                      alt=""
                    />
                    <div className="story-shape-img absolute left-14 -bottom-11">
                      <img
                        decoding="async"
                        className="object-cover"
                        src={timelineShape}
                        alt="timeline-shape"
                      />
                    </div>
                  </div>
                </div>
              ) : null,
            })
          )}
        />

        <div className="story-timeline md:hidden flex flex-col items-center px-4">
          {timelineItems.map(
            ({ title, text, imgSrc }, index) =>
              imgSrc && (
                <div key={title + index} className="mb-10">
                  <div className="img-holder mx-auto relative max-w-80 max-h-80 p-2.5 border border-dashed border-primary rounded-full">
                    <img
                      decoding="async"
                      className="rounded-full object-cover size-full"
                      src={imgSrc}
                      alt={`image${index + 1}`}
                    />
                    <div className="story-shape-img absolute left-14 -bottom-11">
                      <img
                        className="object-cover"
                        decoding="async"
                        src="https://wpocean.com/wp/loveme/wp-content/uploads/2021/10/timeline-shape.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="story-text px-6 py-9 bg-[#86a0b60d] rounded-lg">
                    <h3 className="text-xl text-text font-semibold uppercase mb-4">
                      {title}
                    </h3>
                    <p className="text-paragraph leading-7">{text}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
