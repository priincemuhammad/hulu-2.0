import { BadgeCheckIcon } from "@heroicons/react";

const Headeritems = ({ Icon, title }) => {
  return (
    <div
      className="group flex justify-center flex-col items-center 
    cursor-pointer w-12 sm:w-20 hover:text-white"
    >
      <Icon className="h-8 md-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100 ">
        {title}
      </p>
    </div>
  );
};

export default Headeritems;
