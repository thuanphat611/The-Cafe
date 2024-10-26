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
        Favicon source:
        <a
          href="https://www.flaticon.com/free-icon/coffee_6502454?term=cafe&page=1&position=7&origin=tag&related_id=6502454"
          target="_blank"
          className="ml-2 hover:text-teal-600"
        >
          flaticon.com
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
