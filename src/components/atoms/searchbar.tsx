import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

export const Searchbar = () => {
  return (
    <form className="flex items-center">
      <MagnifyingGlassIcon className="z-10 -mr-6 size-4 text-gray-500" />
      <input
        type="search"
        className="rounded-xl p-2 ps-8 shadow focus:outline-none"
      />
    </form>
  );
};
