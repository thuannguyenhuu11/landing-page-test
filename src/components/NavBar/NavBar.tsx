import { Button } from "../ui/button";

const NavBar = () => {
  const BUTTON_TAG = ["Overview", "Pools", "Tokens"];

  return (
    <div className="p-3 lg:px-10 lg:py-5 bg-gray-900 flex justify-between items-center">
      <div className="text-white">
        {BUTTON_TAG.map((tag) => (
          <Button
            key={tag}
            className="p-4 text-xs md:text-base"
            variant="ghost"
          >
            {tag}
          </Button>
        ))}
      </div>

      <div className="w-1/3">
        <input
          type="text"
          placeholder="Search pools or tokens"
          className="py-2 px-4 rounded-full bg-gray-800 text-white w-full text-xs md:text-base"
        />
      </div>
    </div>
  );
};

export default NavBar;
