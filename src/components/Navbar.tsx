import React, { useState } from 'react';

// Definition of interface for MenuItemProps object
// Each menu item will contain a link, and a name for the navbar element
interface MenuItemProps {
  href: string;
  text: string;
}

const Navbar: React.FC = () => {
  // Initialised state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Created a function to handle state for mobile menu upon click
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  // Defining the menuItemprops array that stores object of the type MenuItemProps from the above interface
  const menuItems: MenuItemProps[] = [
    { href: '/', text: 'Home' },
    { href: '/about-us', text: 'About Us' },
  ];

  return (
    <nav className="bg-white shadow-lg">

      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">

        {/*Name and Logo*/}
        <a href="/home" className="flex items-center">
          <span className="self-center text-2xl font-semibold text-gray-800">
            AI Styler
          </span>
        </a>

        {/*Mobile Menu Button that's toggled on click*/}
        <div className="md:hidden">
          <div className="relative inline-block text-left">
            <button
              type="button"
              className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-5 h-5 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              <svg
                className={`w-5 h-5 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 10C1 9.44772 1.44772 9 2 9H18C18.5523 9 19 9.44772 19 10C19 10.5523 18.5523 11 18 11H2C1.44772 11 1 10.5523 1 10Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            {/*Mobile Menu Drop Down*/}
            <div
              className={`${
                isMobileMenuOpen ? 'block' : 'hidden'
              } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
            >
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                    role="menuitem"
                    onClick={toggleMobileMenu}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regular Navbar */}
        <ul className="hidden md:flex space-x-4"> 
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>

      </div>

    </nav>
  );
};

export default Navbar;
