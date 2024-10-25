export default function Links() {
  return (
    <div className="fixed top-0 left-0 z-10 w-full bg-black px-4 py-2 flex">
      <div className="text-white uppercase text-center text-[15px] w-1/4 hover:bg-hover-gray hover:text-black hover:cursor-pointer">
        <a href="#" className="block w-full h-full px-4 py-2">
          home
        </a>
      </div>
      <div className="text-white uppercase text-center text-[15px] w-1/4 hover:bg-hover-gray hover:text-black hover:cursor-pointer">
        <a href="#about" className="block w-full h-full px-4 py-2">
          about
        </a>
      </div>
      <div className="text-white uppercase text-center text-[15px] w-1/4 hover:bg-hover-gray hover:text-black hover:cursor-pointer">
        <a href="#menu" className="block w-full h-full px-4 py-2">
          menu
        </a>
      </div>
      <div className="text-white uppercase text-center text-[15px] w-1/4 hover:bg-hover-gray hover:text-black hover:cursor-pointer">
        <a href="#where" className="block w-full h-full px-4 py-2">
          where
        </a>
      </div>
    </div>
  );
}
