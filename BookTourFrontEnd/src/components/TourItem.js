import React from "react";

const TourItem = () => {
  return (
    <div className="max-w-[350px] text-blue-900 border-2 round rounded-lg pb-2">
      <div className="relative">
        <img
          className="round rounded-t-lg w-full h-[260px] object-cover"
          src="https://c4.wallpaperflare.com/wallpaper/681/554/339/abstract-planet-space-purple-wallpaper-preview.jpg"
          alt="Error"
        ></img>
        <div className="absolute bottom-0 bg-slate-200 p-2 rounded-t-sm">
          Tiết kiệm
        </div>
        <div className="absolute top-3 right-3 bg-slate-200 p-2 rounded-sm text-black opacity-60">
          Tiết kiệm
        </div>
      </div>

      <div className="px-3">
        <p className="pb-2">29/09/2022 - 4N3Đ - Giờ đi: 07:55</p>
        <p className="pb-2 font-semibold text-lg">
          Hà Nội - Bái Đính - Khu Du Lịch Tràng An - Hạ Long - Yên Tử (Khách sạn
          3 sao)
        </p>
        <p className="pb-1">Mã tua:</p>
        <div className="pb-1">
          <span className=" font-semibold">NDDNG264-002-290922VN-V</span>
        </div>
        <p className="pb-4">
          Nơi khởi hành: <strong>Đà Nẵng</strong>
        </p>
        <p className="pb-1 text-lg font-semibold text-red-400">6,990,000₫</p>
        <div className="flex item-center justify-center gap-7">
          <button className="bg-red-400 round rounded-lg w-36 h-8 font-medium text-white">
            Đặt ngay
          </button>

          <button className="bg-red-400 round rounded-lg w-36 h-8 font-medium text-white">
            xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourItem;
