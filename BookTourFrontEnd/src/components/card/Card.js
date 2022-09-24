import { useWatch } from "react-hook-form";
import ImgCardList from "../img/ImgCardList";
import $ from "jquery";

const Card = ({
  src,
  control,
  setValue,
  name,
  locationName,
  numberHotel,
  id,
}) => {
  const locationValue = useWatch({
    control,
    name: "location",
    defaultValue: "",
  });
  const handleClickCard = () => {
    // setValue(name, e.target.dataset.value);
    // setEnterLocation(e.target.textContent);
    // setValue(name, e.target.textContent);
    setValue(name, $(`#${id}`).text());
  };
  return (
    <div
      className="flex items-center gap-3 p-4 cursor-pointer rounded-sm
      hover:bg-c6 transition-all select-none"
      onClick={handleClickCard}
    >
      <ImgCardList src={src} />
      <div className="flex flex-col gap-1 text-black">
        <p id={id}>{locationName}</p>
        <p className="text-c4">{numberHotel} KS</p>
      </div>
    </div>
  );
};

export default Card;
