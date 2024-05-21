// components/SocialMediaIcons.tsx
"use client"; // This ensures the component is treated as a client-side component

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcons: React.FC = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex justify-center space-x-4">
      <FontAwesomeIcon
        icon={faTwitter}
        onClick={() => openLink("https://twitter.com/your-twitter-handle")}
        className="cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faInstagram}
        onClick={() =>
          openLink("https://www.instagram.com/your-instagram-handle")
        }
        className="cursor-pointer"
      />
      <FontAwesomeIcon
        icon={faFacebook}
        onClick={() => openLink("https://www.facebook.com/your-facebook-page")}
        className="cursor-pointer"
      />
    </div>
  );
};

export default SocialMediaIcons;
