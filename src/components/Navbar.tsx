import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];
const Navbar = () => {
  const [searchToggle, setSearchToggle] = useState<boolean>(false);
  const router = useRouter();
  return (
    <nav className="nav-wrapper relative text-white h-[10vh] bg-[#09011f] flex justify-end">
      <figure className="relative m-2 w-[100px] h-[80px]">
        <Image
          alt="Chuck norris"
          className="absolute w-full h-full left-0"
          layout="fill"
          src="https://media.tenor.com/tcmADbhSACkAAAAi/chuck-norris.gif"
        />
      </figure>
      <div className="ml-auto flex">
        <div
          className={`py-5 px-6 text-center cursor-pointer flex items-center overflow-hidden ${
            searchToggle ? "w-[300px]" : "w-[80px]"
          } transition-all ease-in-out duration-200`}
        >
          <p
            className="hover:underline"
            onClick={() => setSearchToggle(!searchToggle)}
          >
            Search
          </p>
          <div className="search-input w-[200px]">
            <input
              className="bg-transparent backdrop-filter focus:outline-none ml-2"
              type="search"
              placeholder="something"
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  if (e.currentTarget.value.length > 0) {
                    router.push(`search/${e.currentTarget.value}`);
                  }
              }}
            />
          </div>
        </div>

        <div className="categories py-5 px-6 text-center cursor-pointer flex items-center">
          <p className="hover:underline">Categories</p>
        </div>

        <div className="py-5 px-6 text-center cursor-pointer flex items-center">
          <Link href="/random" className="hover:underline">
            Random
          </Link>
        </div>

        <div className="absolute categories-list flex flex-wrap left-0 top-[100%] right-0 justify-start bg-black">
          {categories.map((item, index) => (
            <div key={index} className="py-5 px-6">
              <Link
                href={`/categories/${item}`}
                className="hover:underline text-sm cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.substring(1)}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
