import Link from "next/link";

const Links = [
  {
    text: "Templates",
    href: "/",
  },
  {
    text: "Marketplace",
    href: "/",
  },
  {
    text: "Discover",
    href: "/",
  },
  {
    text: "Pricing",
    href: "/",
  },
  {
    text: "Learn",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <div className="w-full max-w-[1526px] pt-16">
      <nav className="flex flex-row justify-between bg-white w-full h-20 rounded-full">
        <div className="flex flex-col justify-center">
          <div className="flex ml-8">
            <div className="flex mr-6">
              <h1 className="text-3xl font-semibold">Linktree</h1>
              <div className="self-center mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={25}
                  height={25}
                >
                  <path d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z"></path>
                </svg>
              </div>
            </div>

            <div className="flex self-center">
              {Links.map((link) => (
                <Link
                  href={link.href}
                  key={link.text}
                  className="text-black ml-4"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex mr-3">
          <button className="mr-8">Log in</button>
          <button className="bg-black text-white h-3/4 rounded-full my-auto px-4">
            Sign up free
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
