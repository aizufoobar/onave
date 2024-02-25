import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

interface Props {
  className?: string;
  placeholeder?: string;
}

export default function SearchBar(props: Props) {
  return (
    <div className={props.className}>
      <form className="relative flex items-center">
        <MagnifyingGlassIcon className="absolute start-1 size-5 text-gray-500" />
        <input
          type="search"
          className="max-w-[100%] rounded-2xl p-2 ps-8 shadow focus:outline-none"
          placeholder={props.placeholeder ?? "Search Onave"}
        />
      </form>
    </div>
  );
}
