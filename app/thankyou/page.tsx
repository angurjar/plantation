// pages/thankyou.tsx
"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="mb-8">
        <Image
          src="/thankyou.jpeg"
          alt="Thank You"
          width={600}
          height={600}
          priority
        />
      </div>
      <h1 className="text-3xl font-bold mb-8">Thank You!</h1>
      <p className="text-lg mb-4">
        Your message has been received. We appreciate your interest in our
        services.
      </p>
      <p className="text-lg mb-4">welcome with our team</p>
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

export default ThankYouPage;
