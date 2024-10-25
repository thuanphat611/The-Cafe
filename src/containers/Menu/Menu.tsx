import { useState } from "react";

import { IMenuItem } from "./interfaces";

const foodList: IMenuItem[] = [
  {
    name: "Bread Basket",
    description: "Assortment of fresh baked fruit breads and muffins",
    price: 5.5,
  },
  {
    name: "Honey Almond Granola with Fruits",
    description:
      "Natural cereal of honey toasted oats, raisins, almonds and dates",
    price: 7.0,
  },
  {
    name: "Belgian Waffle",
    description: "Vanilla flavored batter with malted flour",
    price: 7.5,
  },
  {
    name: "Scrambled Eggs",
    description:
      "Scrambled eggs, roasted red pepper and garlic, with green onions",
    price: 7.5,
  },
  {
    name: "Blueberry Pancakes",
    description: "With syrup, butter and lots of berries",
    price: 8.5,
  },
];

const drinkList: IMenuItem[] = [
  {
    name: "Coffee",
    description: "Regular coffee",
    price: 2.5,
  },
  {
    name: "Chocolato",
    description: "Chocolate espresso with milk",
    price: 4.5,
  },
  {
    name: "Corretto",
    description: "Whiskey and coffee",
    price: 5.0,
  },
  {
    name: "Iced Tea",
    description: "Hot tea, except not hot",
    price: 3.0,
  },
  {
    name: "Soda",
    description: "Coke, Sprite, Fanta, etc.",
    price: 2.5,
  },
];

export default function Menu() {
  const [selectedList, setSelectedList] = useState<IMenuItem[]>(foodList);
  const [isFoodActive, setIsFoodActive] = useState<boolean>(true);

  return (
    <div className="flex flex-col">
      <div className="w-full flex px-4 py-2 menu-shadow">
        <button
          onClick={() => {
            setSelectedList(foodList);
            setIsFoodActive(true);
          }}
          className={`grow text-[18px] ${
            isFoodActive ? "bg-active-gray text-white" : "bg-transparent text-black"
          }`}
        >
          Eat
        </button>
        <button
          onClick={() => {
            setSelectedList(drinkList);
            setIsFoodActive(false);
          }}
          className={`grow text-[18px] ${
            !isFoodActive ? "bg-active-gray text-white" : "bg-transparent text-black"
          }`}
        >
          Drink
        </button>
      </div>
      <div className="px-4 py-12 menu-shadow flex flex-col gap-y-[18px]">
        {selectedList.map((item, index) => (
          <span key={`${index}-${item.name}-${item.price}`}>
            <h5 className="font-section-title">{item.name}</h5>
            <p className="text-description-gray">
              {item.description + " " + item.price}
            </p>
          </span>
        ))}
      </div>
    </div>
  );
}
