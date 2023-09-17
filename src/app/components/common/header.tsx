import { ManualDialog } from "../manual-dialog";

const Header = () => {
  return (
    <header className="flex h-12 items-center justify-between border-b border-gray-200 bg-white px-6">
      <button>
        <p className="text-xl font-bold">Letter App</p>
      </button>
      <ManualDialog />
    </header>
  );
};

export default Header;
