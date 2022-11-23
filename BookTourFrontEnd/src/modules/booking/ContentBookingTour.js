import { Fragment } from "react";
import WrapperContent from "~/components/common/WrapperContent";
import Heading from "~/components/heading/Heading";
import { IconLocationRegular } from "~/components/icon";

const ContentBookingTour = () => {
  const location = "Hồ Chí Minh";
  return (
    <Fragment>
      <div className="relative">
        <div className="h-[390px] w-full">
          <img
            src="https://images.unsplash.com/photo-1623596711744-c10ed15581d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1149&q=80"
            className="h-full w-full object-cover"
            alt="img-tour-content"
          />
        </div>
        <div className="absolute top-10 left-0 -translate-x-[10px] bg-[#E52822]">
          <h2 className="ribbon">Di du lich dau do </h2>
        </div>
        <div className="flex items-center gap-2 bg-gray-200 p-4 text-c3">
          <span>
            <IconLocationRegular />
          </span>
          <span className="font-bold">{location}</span>
        </div>
      </div>
      <WrapperContent className="mt-2 shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]">
        <Heading className="mt-4 mb-3 px-4 text-dark-blue" sx="xl-2">
          Khám phá sự đa dạng văn hóa và ẩm thực
        </Heading>
        <p className="px-4 text-justify">
          Được biết đến với nhiều mỹ từ như 'Đảo Quốc Sư Tử' hay 'Thành Phố của
          những khu vườn', Singapore nổi tiếng là một quốc đảo sạch, xanh nhất
          thế giới, nơi kiến tạo các công trình kiến trúc mang tính biểu tượng
          như Gardens by the Bay, là quê hương của món cocktail Singapore Sling
          trứ danh, ẩm thực đường phố đa dạng và thiên đường mua sắm bất tận.
          Đến với Malaysia thì không thể quên nhắc tới tòa tháp đôi Petronas,
          biểu tượng cho sự kiêu hãnh của đất nước Malaysia. Cùng iVIVU khám phá
          ngay hôm nay!
        </p>
        <Heading className="mt-4 mb-3 px-4 text-dark-blue" sx="xl-2">
          Những trải nghiệm thú vị trong chương trình
        </Heading>
      </WrapperContent>
    </Fragment>
  );
};

export default ContentBookingTour;
