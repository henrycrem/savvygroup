import Link from "next/link";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "./ui/navbar-actions";
import getCategories from "@/actions/get-categories";
import Image from 'next/image';

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="bg-black border-b fixed top-0 w-full z-10">
      <div className="container mx-auto">
        <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
      {/* Use the Image component with the path to your logo.svg */}
      <Image
        src="/savvy_logo.jpeg" // Update the path to match the location of your logo.svg in the public folder
        alt="Your Company Logo" // Add a descriptive alt text for accessibility
        width={80} // Use a percentage for relative sizing
        height={50}
      />

    </Link>
          <MainNav data={categories} />
          <NavbarActions />
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
