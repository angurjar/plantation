// pages/ourmission.tsx

import Image from "next/image";
import Link from "next/link";

const OurMission: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Our Mission</h1>

      <div className="max-w-3xl text-center">
        <p className="text-lg mb-4">
          At Your Tree Plantation App, our mission is to make the world a
          greener and healthier place by planting trees and contributing to
          environmental conservation efforts.
        </p>
        <p className="text-lg mb-4">
          We believe that every tree planted makes a difference in combating
          climate change, preserving biodiversity, and improving air and water
          quality.
        </p>
        <p className="text-lg mb-4">
          Join us in our journey towards a more sustainable future!
        </p>
      </div>

      <div className="mt-8">
        <Link href="/" passHref>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full text-lg transition duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurMission;
