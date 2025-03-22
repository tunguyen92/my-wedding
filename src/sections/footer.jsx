import { SmileOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="footer-section py-24 text-center">
      <div className="container">
        <div className="couple-name bg-[url(src/assets/images/footer-couple-name-frame.png)] bg-center bg-cover w-[300px] md:w-[415px] h-[349px] md:h-[483px] mx-auto mb-20 md:mb-32 pl-11 flex items-center justify-center">
          <h2 className="font-secondary text-4xl md:text-5xl">
            Thanh Tú <br />
            &amp; <br />
            Thanh Thủy
          </h2>
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
