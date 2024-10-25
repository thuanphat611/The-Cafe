export default function Footer() {
  return (
    <div className="w-full flex flex-col py-12 bg-footer-gray">
      <p className="text-center my-2">
        This website is made using a template provided by
        <a
          href="https://www.w3schools.com/w3css/w3css_templates.asp"
          target="_blank"
          className="ml-2 hover:text-green-600"
        >
          w3schools.com
        </a>
      </p>
      <p className="text-center my-2">
        Github:
        <a
          href="https://github.com/thuanphat611"
          target="_blank"
          className="ml-2"
        >
          thuanphat611
        </a>
      </p>
    </div>
  );
}
