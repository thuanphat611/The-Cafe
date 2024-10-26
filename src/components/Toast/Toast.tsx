import { useEffect } from "react";

import { Cancel } from "@/assets";
import { IToastMessage } from "@/utils";

export default function Toast({
  data,
  onClose,
}: {
  data: IToastMessage;
  onClose: (id: string) => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(data.id);

      return () => clearTimeout(timer);
    }, 5300);
  }, [data, onClose]);

  return (
    <div className="transition-all ease-in duration-500 animate-toast w-full sm:max-w-[400px] bg-white border-l-[6px] border-black flex gap-x-1 shadow-lg px-4 py-2 items-center">
      <div className="grow flex flex-col">
        <h5 className="mt-0 font-bold text-[18px] leading-tight">
          {data.title}
        </h5>
        <p className="my-0 text-[16px] leading-tight">{data.content}</p>
      </div>
      <button
        onClick={() => {
          onClose(data.id);
        }}
        className="p-2 hover:cursor-pointer hover:opacity-60"
      >
        <img src={Cancel} alt="Close message" className="w-5 h-5" />
      </button>
    </div>
  );
}
