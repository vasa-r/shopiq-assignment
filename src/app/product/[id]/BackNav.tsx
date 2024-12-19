import Image from "next/image";
import Back from "@/assets/back.svg";
import Link from "next/link";

const BackNav = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center mt-1 md:mt-2 lg:mt-2">
      <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-[#f2f1ef] hover:rounded-full">
        <Link
          href={"/"}
          className="w-5 h-5 relative md:w-6 lg:w-6 md:h-6 lg:h-6"
        >
          <Image src={Back} alt="Go Back" fill={true} />
        </Link>
      </div>
      {/* <div className="flex-1 flex justify-center text-lg">{title}</div> */}
    </div>
  );
};

export default BackNav;
