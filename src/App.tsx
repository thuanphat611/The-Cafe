import { FormEvent, useState } from "react";

import { Links, Header, Menu, Footer } from "@/containers";
import { BodySection, BlockQuote, Toast } from "@/components";
import { CoffeeShop, CoffeeHouse2, Map } from "@/assets";
import { IToastMessage } from "@/utils";

function App() {
  const [toasts, setToasts] = useState<IToastMessage[]>([]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const numOfPeople = formData.get("numOfPeople") as string;

    setToasts([
      ...toasts,
      {
        id: Date.now().toString(),
        title: "Table Reserved! ☕",
        content: `We have reserved a table for ${numOfPeople} people. Looking forward to seeing you soon, ${name}!`,
      },
    ]);
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className="w-full relative">
      <div
        id="toast"
        className="fixed z-20 top-[70px] right-0 left-0 px-4 flex flex-col gap-y-4 items-end"
      >
        {toasts.map((toast) => {
          return <Toast key={toast.id} data={toast} onClose={removeToast} />;
        })}
      </div>

      <Links />
      <Header />
      <div className="w-full bg-main-body">
        <BodySection id="about" title="about the cafe">
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
          <img
            src={CoffeeShop}
            alt="Coffe shop"
            className="w-full mt-4 align-middle border-none grayscale-75"
          />
          <p>
            <strong>Opening hours:</strong> everyday from 6am to 5pm.
          </p>
          <p>
            <strong>Address:</strong> 15 Adr street, 5015, NY
          </p>
        </BodySection>
        <BodySection id="menu" title="the menu">
          <Menu />
          <img
            src={CoffeeHouse2}
            alt="Coffe shop"
            className="w-full mt-8 align-middle border-none grayscale-75"
          />
        </BodySection>
        <BodySection id="where" title="where to find us">
          <p>
            Find us at some address at some place.Find us at some address at
            some place.
          </p>
          <img
            src={Map}
            alt="Coffe shop"
            className="w-full mt-4 align-middle border-none grayscale-75"
          />
          <p>
            <span className="bg-black text-white px-1 inline-block">FYI!</span>{" "}
            We offer full-service catering for any event, large or small. We
            understand your needs and we will cater the food to satisfy the
            biggerst criteria of them all, both look and taste.
          </p>
          <p>
            <strong>Reserve</strong> a table, ask for today's special or just
            send us a message:
          </p>
          <form
            onSubmit={onSubmit}
            className="flex flex-col mb-[50px] gap-y-[18px]"
          >
            <input
              name="name"
              placeholder="Name"
              className="px-2 py-4 border-solid border text-[18px] border-hover-gray placeholder:text-description-gray placeholder:text-[18px]"
              required
            />
            <input
              type="number"
              name="numOfPeople"
              placeholder="How many people"
              className="px-2 py-4 border-solid border text-[18px] border-hover-gray placeholder:text-description-gray placeholder:text-[18px]"
              required
            />
            <input
              type="datetime-local"
              defaultValue={new Date().toISOString().slice(0, 16)}
              name="date"
              placeholder="Date and time"
              className="px-2 py-4 border-solid border text-[18px] border-hover-gray placeholder:text-description-gray placeholder:text-[18px]"
              required
            />
            <input
              name="message"
              placeholder="Message / Special requirements"
              className="px-2 py-4 border-solid border text-[18px] border-hover-gray placeholder:text-description-gray placeholder:text-[18px]"
            />
            <button
              type="submit"
              className="self-start text-[18px] px-4 py-2 bg-black text-white text-center border-none hover:bg-hover-gray hover:cursor-pointer hover:text-black"
            >
              SEND MESSAGE
            </button>
          </form>
        </BodySection>
      </div>
      <Footer />
    </div>
  );
}
export default App;
