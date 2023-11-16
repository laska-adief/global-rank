import searchIcon from "@/app/assets/images/icon-search.svg";
import Image from "next/image";
const SearchInput = ({ ...props }) => {
  return (
    <div className="bg-dark flex items-center pl-4 rounded-lg">
      <Image src={searchIcon} alt="search icon" width={20} height={20} />
      <input
        className="p-4 text-normal bg-transparent border-transparent focus:border-transparent focus:outline-none w-full placeholder:text-secondary"
        type="text"
        {...props}
      />
    </div>
  );
};
export default SearchInput;
