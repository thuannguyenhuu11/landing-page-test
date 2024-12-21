import { Search } from "lucide-react";
import { Button } from "../ui/button";

const NavBar = () => {
  const BUTTON_TAG = ["Overview", "Pools", "Tokens"];

  return (
    <div className="p-3 lg:px-10 lg:py-5 bg-[#1a1b1f] flex justify-between items-center">
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

      <div className="w-1/3 flex items-center py-2 px-4 bg-gray-800 rounded-lg gap-1">
        <Search />
        <input
          type="text"
          placeholder="Search pools or tokens"
          className=" text-white w-full text-xs md:text-base bg-gray-800 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default NavBar;
