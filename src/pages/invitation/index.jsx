import { Grid } from "antd";
import { NavLink, useParams } from "react-router-dom";

import {
  invitationDesktop,
  invitationMobile,
} from "~/assets/images/invitation";
import AudioPlayer from "~/components/audio-player";

const { useBreakpoint } = Grid;

const Invitation = () => {
  const screens = useBreakpoint();

  const { id } = useParams();

  return (
    <div className="relative h-screen">
      <img
        className="h-full w-full object-cover"
        src={screens.md ? invitationDesktop : invitationMobile}
        alt="invitation"
      />
      <div className="absolute top-[61.6%] left-[10%] md:top-[53%] md:left-[27%] md:text-2xl text-[#98907e]">
        Trân trọng kính mời:
        <span className="font-corinthia text-3xl md:text-5xl text-[#3a5852] ml-2 md:ml-14">
          {id} + ...
        </span>
      </div>

      <a
        className="absolute bottom-[10%] md:bottom-[10%] lg:bottom-[10%] left-[50%] -translate-x-1/2 text-xs md:text-sm lg:text-base underline text-[#295c53]"
        href="https://maps.app.goo.gl/hTtW5Kz1ZEy5nW5s7"
        target="_blank"
      >
        Xem chỉ đường
      </a>

      <NavLink
        to="/"
        className="absolute bottom-[3%] left-[50%] -translate-x-1/2 text-white! bg-[#98907e]! rounded-md text-sm px-4 py-1 mt-4 mx-auto text-center"
      >
        Về trang chủ
      </NavLink>

      <AudioPlayer />
    </div>
  );
};

export default Invitation;
