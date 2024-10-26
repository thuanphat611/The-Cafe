export default function Header() {
  return (
    <header className="relative w-full h-[555.6px] min-h-[75%] grayscale-50 bg-center bg-cover bg-no-repeat bg-header-bg-image">
      <div className="w-[180px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="text-center text-white text-[90px]">The Cafe</span>
      </div>
      <div className="hidden 600:block px-6 py-3 text-center absolute left-0 bottom-0">
        <span className="inline-block text-center px-2 bg-black text-white">
          Open from 6am to 5pm
        </span>
      </div>
      <div className="px-6 py-3 text-center absolute right-0 bottom-0">
        <span className="inline-block text-center text-white">
          15 Adr street, 5015
        </span>
      </div>
    </header>
  );
}
