import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const openLink = (url: any) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="flex justify-center space-x-4">
        <FontAwesomeIcon
          icon={faTwitter}
          onClick={() => openLink("https://twitter.com/your-twitter-handle")}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          onClick={() =>
            openLink("https://www.instagram.com/your-instagram-handle")
          }
        />
        <FontAwesomeIcon
          icon={faFacebook}
          onClick={() =>
            openLink("https://www.facebook.com/your-facebook-page")
          }
        />
      </div>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
