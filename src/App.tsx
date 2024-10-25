import { Links, Header } from "@/containers";
import { BodySection, BlockQuote } from "./components";

function App() {
  return (
    <div className="w-full relative">
      <Links />
      <Header />

      <div className="w-full bg-main-body">
        <BodySection title="about the cafe">
          <p>
            The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            In addition to our full espresso and brew bar menu, we serve fresh
            made-to-order breakfast and lunch sandwiches, as well as a selection
            of sides and salads and other good stuff.
          </p>
          <BlockQuote author="Chef, Coffeeist and Owner: Liam Brown">
            "Use products from nature for what it's worth - but never too early,
            nor too late." Fresh is the new sweet.
          </BlockQuote>
        </BodySection>
      </div>
    </div>
  );
}
export default App;
