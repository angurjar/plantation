import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full bg-gray-800 text-white py-4 px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/" passHref>
              <Image
                src="/logo.png"
                alt="Your Logo"
                width={100}
                height={40}
                priority
              />
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link href="/" passHref>
              <a className="cursor-pointer">Home</a>
            </Link>
            <Link href="/plans" passHref>
              <a className="cursor-pointer">Plans</a>
            </Link>
            <Link href="/about" passHref>
              <a className="cursor-pointer">About</a>
            </Link>
            <Link href="/ourmission" passHref>
              <a className="cursor-pointer">Our Team & Mission</a>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-between p-24">
        {/* Navigation */}
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            our area &nbsp;
            <code className="font-mono font-bold"> Our world</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            Plants{" "}
            <Image
              src="/logo1.jpg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </div>
        </div>

        {/* Tree Types */}
        <section className="my-16">
          <h1 className="text-3xl font-bold mb-8">Choose Your Tree Type:</h1>
          <ul className="flex flex-wrap justify-center gap-4">
            <li className="bg-gray-200 p-4 rounded-md cursor-pointer hover:bg-gray-300 transition duration-300">
              <Link href="/plans?type=flowers" passHref>
                <a>Flowers</a>
              </Link>
            </li>
            <li className="bg-gray-200 p-4 rounded-md cursor-pointer hover:bg-gray-300 transition duration-300">
              <Link href="/plans?type=fruits" passHref>
                <a>Fruits</a>
              </Link>
            </li>
            {/* Add more tree types as needed */}
          </ul>
        </section>

        {/* About Our Services */}
        <section className="my-16 text-center">
          <h2 className="text-2xl font-bold mb-8">About Our Services</h2>
          <p className="text-lg mb-4">
            We are dedicated to planting trees and contributing to the
            environment. Join us in our mission to make the world a greener
            place.
          </p>
          <Link href="/about" passHref>
            <a>Learn More</a>
          </Link>
        </section>

        {/* Call-to-Action Button */}
        <div className="my-16">
          <Link href="/plans" passHref>
            <a className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full text-lg transition duration-300">
              Book Your Plantation Now
            </a>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-4 px-8">
        <div className="flex justify-center">
          <p>&copy; {new Date().getFullYear()} Your Tree Plantation App</p>
        </div>
      </footer>
    </div>
  );
}
