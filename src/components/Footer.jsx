
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Ministry */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold">
              Cross River State Ministry of Health
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
              Committed to improving the health and wellbeing of every
              Cross Riverian through safe, high-quality, accessible
              healthcare, education, and research.
            </p>

            {/* Social Media */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                Follow Us
              </h3>

              <div className="mt-4 flex items-center gap-3">
                {/* X */}
                <a
                  href="https://x.com/CRSMOH"
                    target="_blank"
                    rel="noopener noreferrer"
                  aria-label="Follow us on X"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-white hover:text-black"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="text-lg" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/popular/cross-river-state-ministry-of-health/"
                  aria-label="Follow us on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-white hover:text-black"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-slate-300 transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-slate-300 transition hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-slate-300 transition hover:text-white"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#leadership"
                  className="text-slate-300 transition hover:text-white"
                >
                  Leadership
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-slate-300 transition hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Contact Us
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                Cross River State Ministry of Health
              </li>

              <li>
                Calabar, Cross River State
              </li>

              <li>
                <a
                  href="mailto:crsmoh5@gmail.com"
                  className="transition hover:text-white"
                >
                  crsmoh5@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+2340000000000"
                  className="transition hover:text-white"
                >
                  +234 000 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-700 pt-6">
          <div className="flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Cross River State Ministry of
              Health. All rights reserved.
            </p>

            {/* <div className="flex gap-5">
              <a
                href="#"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Terms of Use
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

