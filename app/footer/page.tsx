// components/Footer.tsx
import SocialMediaIcons from "../socialicon/page";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <SocialMediaIcons />
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
