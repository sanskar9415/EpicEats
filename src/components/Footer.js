import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        
        <div className="md:w-1/3">
          <h1 className="text-2xl font-bold">Epiceats</h1>
          <p className="text-sm mt-2 max-w-xs">
            Your ultimate food ordering and delivery platform. 
            Tasty and timely, every time!
          </p>
        </div>

        <div className="md:w-1/3">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="md:w-1/3">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <svg
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.326v21.348C0 23.404.596 24 1.325 24H12.82v-9.338H9.692v-3.645h3.127V8.414c0-3.1 1.893-4.787 4.659-4.787 1.325 0 2.464.098 2.795.142v3.243l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.314h3.59l-.467 3.645h-3.123V24h6.127c.729 0 1.324-.596 1.324-1.326V1.326C24 .596 23.404 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <svg
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.556a9.83 9.83 0 01-2.828.775 4.93 4.93 0 002.163-2.723 9.867 9.867 0 01-3.127 1.195A4.92 4.92 0 0016.616 3c-2.737 0-4.958 2.222-4.958 4.96 0 .39.044.765.128 1.126-4.12-.206-7.77-2.18-10.216-5.186a4.948 4.948 0 00-.67 2.492c0 1.72.875 3.236 2.202 4.127a4.906 4.906 0 01-2.247-.62v.062c0 2.404 1.71 4.405 3.977 4.86a4.93 4.93 0 01-2.239.085 4.936 4.936 0 004.604 3.417A9.873 9.873 0 010 21.539 13.934 13.934 0 007.548 24c9.057 0 14.01-7.508 14.01-14.01 0-.213-.004-.425-.014-.637A9.935 9.935 0 0024 4.556z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <svg
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 49.47c67.06 0 75.15.26 101.58 1.47 24.51 1.1 37.88 5.22 46.76 8.68a78.56 78.56 0 0128.4 18.52 78.56 78.56 0 0118.52 28.4c3.46 8.88 7.58 22.25 8.68 46.76 1.21 26.43 1.47 34.52 1.47 101.58s-.26 75.15-1.47 101.58c-1.1 24.51-5.22 37.88-8.68 46.76a83.28 83.28 0 01-47 47c-8.88 3.46-22.25 7.58-46.76 8.68-26.43 1.21-34.52 1.47-101.58 1.47s-75.15-.26-101.58-1.47c-24.51-1.1-37.88-5.22-46.76-8.68a78.56 78.56 0 01-28.4-18.52 78.56 78.56 0 01-18.52-28.4c-3.46-8.88-7.58-22.25-8.68-46.76-1.21-26.43-1.47-34.52-1.47-101.58s.26-75.15 1.47-101.58c1.1-24.51 5.22-37.88 8.68-46.76a78.56 78.56 0 0118.52-28.4 78.56 78.56 0 0128.4-18.52c8.88-3.46 22.25-7.58 46.76-8.68 26.43-1.21 34.52-1.47 101.58-1.47M256 0c-68.73 0-77.52.29-104.44 1.53-26.91 1.23-45.34 5.44-61.44 11.62a130.8 130.8 0 00-48 31.22A130.8 130.8 0 0011.62 92.38c-6.18 16.1-10.39 34.53-11.62 61.44C-.29 180.76 0 189.55 0 258.28s-.29 77.52 1.53 104.44c1.23 26.91 5.44 45.34 11.62 61.44a130.8 130.8 0 0031.22 48 130.8 130.8 0 0048 31.22c16.1 6.18 34.53 10.39 61.44 11.62 26.92 1.24 35.71 1.53 104.44 1.53s77.52-.29 104.44-1.53c26.91-1.23 45.34-5.44 61.44-11.62a130.8 130.8 0 0048-31.22 130.8 130.8 0 0031.22-48c6.18-16.1 10.39-34.53 11.62-61.44 1.24-26.92 1.53-35.71 1.53-104.44s-.29-77.52-1.53-104.44c-1.23-26.91-5.44-45.34-11.62-61.44a130.8 130.8 0 00-31.22-48 130.8 130.8 0 00-48-31.22c-16.1-6.18-34.53-10.39-61.44-11.62C333.52.29 324.73 0 256 0zm0 124.2a131.8 131.8 0 10131.8 131.8A131.94 131.94 0 00256 124.2zm0 217.6a85.8 85.8 0 1185.8-85.8 85.92 85.92 0 01-85.8 85.8zm170.6-238.6a30.8 30.8 0 1130.8-30.8 30.84 30.84 0 01-30.8 30.8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />

      <div className="container mx-auto px-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Epiceats. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
