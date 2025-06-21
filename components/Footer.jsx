import Image from 'next/image';
import { assets } from '@/assets/assets';

const Footer = () => {
  return (
    <footer className="mt-20 py-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <Image src={assets.Sign} alt="Logo" className="w-36 mx-auto mb-4" />

        {/* Contact Email */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Image src={assets.mail_icon} alt="Mail Icon" className="w-6" />
          <a href="mailto:ratnakar.yadav@gmail.com" className="hover:text-blue-500 transition-colors">
            ratnakar.yadav@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <ul className="flex justify-center gap-8 text-sm font-semibold">
          <li>
            <a
              href="https://instagram.com/your-instagram-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/your-twitter-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/your-leetcode-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-colors"
            >
              LeetCode
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Ratnakar Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
