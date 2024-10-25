export default function BlockQuote({
  author,
  children,
}: {
  author: string;
  children: string;
}) {
  return (
    <div className="inline-block my-4 px-4 border-hover-gray border-l-[6px] bg-footer-gray">
      <p>{children}</p>
      <p>{author}</p>
    </div>
  );
}
