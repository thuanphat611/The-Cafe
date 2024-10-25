import { ReactNode } from "react";

export default function BodySection({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="w-full px-4">
      <div className="w-[700px] mx-auto">
        <h5 className="inline-block w-full font-section-title font-normal text-center uppercase my-[10px] py-[64px]">
          <span className="inline-block px-2 text-[18px] tracking-[4px] bg-black text-white">
            {title}
          </span>
        </h5>
        {children}
      </div>
    </div>
  );
}
