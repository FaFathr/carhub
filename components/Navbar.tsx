import Image from "next/image";
import Link from "next/link";
import CustomeButton from "./CustomeButton";

function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
      <Link href="/" className="felx justify-center  items-center">
      <Image
      src="/logo.svg"
      alt="Car Hub Logo"
      width={118}
      height={18}
      className="object-contain"
      />

      </Link>
      <CustomeButton
      title="Sign in"
      btnType="button"
      containerStyle="text-primary-blue rounded-full bg-white min-w=[130px]"
      />
      </nav>
    </header>
  );
}

export default Navbar;
