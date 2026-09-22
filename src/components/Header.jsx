import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";
import hero from "../assets/hero.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Hero Background */}
      <img
        src={hero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"
        aria-hidden="true"
      />

      {/* Navbar */}
      <nav
        aria-label="Main navigation"
        className="absolute left-0 right-0 top-0 z-30"
      >
        <div className="mx-auto flex items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="shrink-0 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          >
            <div className="hidden lg:block">
                 <img
              src={logo}
              alt="Ministry logo"
              className="rounded h-auto w-40 sm:w-20 lg:w-24"
            />
            </div>
           
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-6 md:flex lg:gap-10">
            <li>
              <a
                href="#home"
                aria-current="page"
                className="text-sm font-medium text-white transition-colors hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent lg:text-base"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about" onClick={closeMenu}
                className="text-sm font-medium text-white transition-colors hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent lg:text-base"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="text-sm font-medium text-white transition-colors hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent lg:text-base"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-sm font-medium text-white transition-colors hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent lg:text-base"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="mx-4 rounded-lg border border-white/20 bg-black/70 p-3 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1">
              <li>
                <a
                  href="#home"
                  aria-current="page"
                  onClick={closeMenu}
                  className="block rounded-md px-4 py-3 text-white transition hover:bg-white/10 hover:text-blue-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="block rounded-md px-4 py-3 text-white transition hover:bg-white/10 hover:text-blue-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  onClick={closeMenu}
                  className="block rounded-md px-4 py-3 text-white transition hover:bg-white/10 hover:text-blue-300"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block rounded-md px-4 py-3 text-white transition hover:bg-white/10 hover:text-blue-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="relative z-10 flex min-h-screen items-end"
      >
        <div className="w-full px-5 py-24 sm:px-8 sm:py-20 md:px-12 lg:max-w-5xl lg:px-16 lg:py-24">
          <h1
            id="hero-heading"
            className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Let&apos;s work together for a healthy <br /> Cross River.
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
            Building a healthier future through accessible healthcare,
            innovation, and community support.
          </p>

          <a
            href="#citizens"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Learn More
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;

