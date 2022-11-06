import React from "react";
import CardTourItem from "~/components/card/CardTourItem";
import { WrapperGrid } from "~/components/common";
const TOUR_LIST = [
  {
    imgThumbnail:
      "https://cdn2.ivivu.com/2020/12/18/14/ivivu-ho-pa-khoang-bia-360x225.gif",
    ribbonText: "KH Mùng 1,2,3,4,6,7 Tết.",
    title:
      "Tour Miền Bắc 5N4Đ: HCM - Hòa Bình - Mộc Châu - Sơn La - Điện Biên - Sapa",
    point: 9.1,
    rate: 16,
    listPros: [
      { value: "Khám Phá 36 Phố Phường Hà Nội" },
      { value: "Ngắm Mùa Mận Mộc Châu" },
      { value: "Chinh Phục Nóc Nhà Đông Dương" },
    ],
    price: 3250000,
  },
];
const CardNorthwestTour = () => {
  return (
    <WrapperGrid cols="3" spacing="10">
      {TOUR_LIST.map((item) => (
        <CardTourItem
          imgThumbnail={item.imgThumbnail}
          ribbonText={item.ribbonText}
          title={item.title}
          point={item.point}
          rate={item.rate}
          listPros={item.listPros}
          price={item.price}
        />
      ))}
    </WrapperGrid>
  );
};

export default CardNorthwestTour;
