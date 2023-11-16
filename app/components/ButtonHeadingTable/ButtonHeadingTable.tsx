const ButtonHeadingTable = ({ text, handleSorting, direction }: { text: string; handleSorting: () => void; direction: string }) => {
  return (
    <button className="flex-1 outline-none border-none p-4 text-primary font-bold" onClick={handleSorting}>
      {text}
    </button>
  );
};
export default ButtonHeadingTable;
