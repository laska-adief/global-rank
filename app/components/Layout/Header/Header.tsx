import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4">
      <Link href={"/"} className="flex gap-2 text-4xl w-fit mx-auto">
        <p className="">Global</p>
        <p className="text-primary">Rank</p>
      </Link>
    </header>
  );
};
export default Header;
