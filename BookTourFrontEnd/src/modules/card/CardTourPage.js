import ButtonSubmitDefault from "~/components/button/ButtonSubmitDefault";
import { WrapperFlex } from "~/components/common";
import { IconCart } from "~/components/icon";

const CardTourPage = ({ tourDetail, ...props }) => {
  return (
    <div className="flex flex-col" {...props}>
      <div className="w-[250px]- h-[250px] rounded-lg">
        <img
          src={
            tourDetail?.images[0] ||
            "https://images.unsplash.com/photo-1657662075319-3ced8dee4c10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
          // src="https://images.unsplash.com/photo-1657662075319-3ced8dee4c10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="img-tour"
          className="h-full w-full rounded-tl-lg rounded-tr-lg object-cover"
        />
      </div>
      <div className="flex-1 bg-white shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]">
        <div className="flex h-full flex-col p-4">
          <div>
            <span className="text-sm text-c4">{tourDetail.startDay}</span>
            <p className="mt-1 cursor-pointer font-semibold text-[#2d4d71] hover:text-[#4d4aef]">
              {tourDetail.tourName}
            </p>
          </div>
          <div className="mt-auto flex flex-col">
            <p className="my-4">
              Nơi khởi hành: <b>{tourDetail.beginningLocation.locationName}</b>
            </p>
            <span className="text-primary-red">
              <b>
                {tourDetail.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </b>
            </span>
            <WrapperFlex
              items="center"
              justify="between"
              className="mt-2 font-DMSans"
            >
              <ButtonSubmitDefault
                className="gap-1 rounded-[4px] bg-[#fd5056] px-4 py-1 text-sm text-white transition-all hover:bg-[#d74449]"
                icon={<IconCart />}
              >
                Book
              </ButtonSubmitDefault>
              <button
                type="submit"
                className="rounded-[4px] border border-primary-blue py-1 px-4 text-sm  text-primary-blue transition-all hover:bg-primary-blue hover:text-white"
              >
                View detail
              </button>
            </WrapperFlex>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTourPage;
