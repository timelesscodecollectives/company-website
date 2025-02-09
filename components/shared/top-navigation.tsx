import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TopNavigation() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8  ">
      <header className="fixed top-0 left-0 w-full z-50 flex h-20 items-center bg-white px-4 shadow-md dark:bg-gray-400 md:px-6 bg-clip-padding backdrop-filter backdrop-blur-sm !bg-opacity-10 ">
        <div className="ml-auto flex gap-2 justify-between w-full items-center">
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <Image src="./icon.svg" width={60} height={60} alt="ICON" />
          </Link>
          <div className="flex gap-10 items-center">
            <Link href="#" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" prefetch={false}>
              Help Center
            </Link>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
          </div>
          <Button variant="outline" className="px-2 py-1 text-xs">
            Contact Us
          </Button>
        </div>
      </header>
      <div className="h-20"></div>{" "}
      {/* Add spacing to prevent content from being hidden behind the fixed header */}
    </div>
  );
}
