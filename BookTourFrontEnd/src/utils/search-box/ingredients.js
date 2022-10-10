import { IconCar, IconFlight, IconHotel } from "~/components/icon";

export const allIngredients = [
  { icon: <IconHotel />, label: "Hotel", path: "/" },
  { icon: <IconFlight />, label: "Flight", path: "flight" },
  { icon: <IconCar />, label: "Car", path: "car" },
];

const [hotel, flight, car] = allIngredients;
export const initialTabs = [hotel, flight, car];

export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
