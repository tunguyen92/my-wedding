import { SmileOutlined } from "@ant-design/icons";

import footerImage from "~/assets/images/footer-couple-name-frame.png";

const Footer = () => {
  return (
    <footer className="footer-section py-24 text-center">
      <div className="container">
        <div
          className="couple-name bg-center bg-cover w-[300px] md:w-[415px] h-[349px] md:h-[483px] mx-auto pl-11 flex items-center justify-center"
          style={{ backgroundImage: `url(${footerImage})` }}
        >
          <h2 className="font-secondary text-4xl md:text-5xl">
            Thanh Tú <br />
            &amp; <br />
            Thanh Thủy
          </h2>
        </div>

        <div className="text-center text-paragraph my-16 md:my-24">
          "Bất kể bạn học chuyên ngành gì, nhất định khi tìm việc phải tìm một
          công việc mình yêu thích, làm thật giỏi và tạo ra giá trị. Như vậy bạn
          mới có thể vui vẻ đi làm từ sáng đến tối được. Thêm nữa, hãy tìm một
          người bạn yêu để ở bên cạnh người đó, như vậy bạn mới có thể hạnh phúc
          từ tối đến sáng hôm sau".
        </div>

        <h3 className="font-secondary text-4xl md:text-5xl mb-4">
          Forever our love, Thank you
        </h3>
        <p className="text-paragraph !text-xs md:!text-sm">
          Nếu bạn có nhu cầu làm website liên hệ{" "}
          <a className="text-primary" href="https://www.facebook.com/tu.kantee">
            chú rể
          </a>{" "}
          nhé <SmileOutlined />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
