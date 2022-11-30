import { Fragment } from "react";
import WrapperContent from "~/components/common/WrapperContent";
import Heading from "~/components/heading/Heading";
import { IconLocationRegular } from "~/components/icon";

const ContentBookingTour = () => {
  const description = `<h3 class="font-semibold text-2xl mt-4 mb-3 px-4 text-dark-blue">Qu&ecirc; hương xứ Nẫu Quy Nhơn</h3>
  <div class="px-4">
  <p class="text-justify">'Xứ Nẫu' hay Quy Nhơn (B&igrave;nh Định) được thi&ecirc;n nhi&ecirc;n ban tặng phong cảnh n&ecirc;n thơ, hữu t&igrave;nh v&agrave; những b&atilde;i biển trải d&agrave;i tuyệt đẹp. Quy Nhơn hội tụ đầy đủ c&aacute;c yếu tố của một điểm nghĩ dưỡng h&agrave;ng đầu với những b&atilde;i biển trong xanh, c&aacute;c khu resorts đẳng cấp quốc tế, ẩm thực đặc sắc c&ugrave;ng với c&aacute;c danh lam thắng cảnh như Kỳ Co - Eo Gi&oacute; được v&iacute; như Maldives phi&ecirc;n bản Việt, ch&ugrave;a &ocirc;ng N&uacute;i với tượng phật lớn nhất Đ&ocirc;ng Nam &Aacute; hay Th&aacute;p Đ&ocirc;i - một kiến tr&uacute;c Champa độc đ&aacute;o được x&acirc;y dựng từ thế kỷ 12.</p>
  </div>
  <h3 class="font-semibold text-2xl mt-4 mb-3 px-4 text-dark-blue">Những trải nghiệm th&uacute; vị trong chương tr&igrave;nh</h3>
  <div class="px-4">
  <p class="text-justify mb-3">-&nbsp;<strong>Khu du lịch Ghềnh R&aacute;ng:</strong>&nbsp;k&ecirc;́t hợp hài hòa giữa trời, m&acirc;y, non nước, một b&ecirc;n l&agrave; biển m&ecirc;nh m&ocirc;ng, một b&ecirc;n l&agrave; n&uacute;i đ&aacute; mu&ocirc;n h&igrave;nh vạn trạng. Từ đ&acirc;y du kh&aacute;ch c&oacute; thể ngắm nh&igrave;n gần trọn hết vẻ đẹp đầy sức sống của phố biển Quy Nhơn.</p>
  <p class="text-justify mb-3">-&nbsp;<strong>B&atilde;i tắm Kỳ Co:</strong>&nbsp;Với&nbsp;dải c&aacute;t v&agrave;ng &ocirc;m lấy biển, bọc th&agrave;nh một h&igrave;nh cung, mềm mại như dải lụa uốn lượn, &ocirc;m trọn lấy l&agrave;n nước trong xanh tận đ&aacute;y. Nơi n&agrave;y được v&iacute; như l&agrave; Maldives của Việt Nam.</p>
  <p class="text-justify mb-3">-&nbsp;<strong>Khu Du Lịch Hầm H&ocirc;</strong>&nbsp;ho&agrave; m&igrave;nh v&agrave;o thi&ecirc;n nhi&ecirc;n giữa khung cảnh n&uacute;i non v&agrave; s&ocirc;ng suối h&ugrave;ng vỹ, tận hưởng kh&ocirc;ng kh&iacute; trong l&agrave;nh.&nbsp;</p>
  </div>`;
  const detail =
    "<h3 class='font-semibold text-2xl mt-4 mb-3 px-4 text-dark-blue'>Chương trình tour</h3><div class='px-4'><h3 class='text-[#4e4e4e] text-lg font-bold uppercase mb-3'>ĐÊM 1: TP. HCM -  QUY NHƠN/DIÊU TRÌ</h3><p class='text-justiy mb-3'>Tối: Hướng dẫn viên (HDV) đón khách tại <strong>Ga Sài Gòn</strong> đón chuyến tàu SQN2, SQN4 khởi hành đi Quy Nhơn/Diêu Trì, Quý khách ăn tối tự túc trước khi lên tàu, nghỉ đêm trên xe lửa (Ký hiệu tàu có thể thay đổi tuỳ thuộc vào thời gian quý khách đặt tour).</p><h3 class='text-[#4e4e4e] text-lg font-bold uppercase mb-3 mt-5'>NGÀY 1: QUY NHƠN - KỲ CO/EO GIÓ - CHÙA ÔNG NÚI (ĂN SÁNG, TRƯA, TỐI)</h3><p class='text-justify mb-3'>Sáng: Tàu đến ga <strong>Diêu Trì</strong>, xe và HDV đón khách về nhà hàng làm vể sinh cá nhân và dùng điểm tâm sáng.</p><p class='text-justify mb-3'>Đoàn khởi hành Tham quan: <strong>Eo Gió</strong> - một ghềnh đá quanh năm lộng gió. Đứng trên <strong>Eo Gió</strong>, phóng tầm mắt ra xa, quý khách chiêm ngưỡng bao quát cả vùng biển bao la rộng lớn, đắm say lòng người.</p><img class='w-full mb-3 object-cover' src='https://cdn2.ivivu.com/2020/11/25/14/ivivu-eo-gio.gif'/><p class='text-center mb-3'><i>Eo Gió.</i></p class='text-justify mb-3'><p class='text-justify mb-3'>Sau đó Quý khách lên thuyền qua <strong>Bãi tắm Kỳ Co</strong> - Một bãi tắm còn hoang sơ, trong sạch. Tại đây, quý khách có thể tận mắt chứng kiến một cảnh đẹp thiên nhiên tuyệt đẹp, làm say đắm biết bao lòng người. Với màu nước trong xanh, bãi cát trắng dài và mịn, những cơn sóng biển êm ái chính là điểm đến lý tưởng thu hút nhiều du khách trong thời gian gần đây.</p><p class='mb-3 text-justify'>(Lưu ý: Nếu thời tiết không cho phép đi bằng cano qua <strong>Bãi Kỳ Co</strong> thì đoàn sẽ di chuyển bằng xe chuyên dụng đi bằng đường bộ qua).</p><img class='w-full object-cover mb-3' src='https://cdn2.ivivu.com/2021/07/05/10/ivivu-2-bai-ky-co.gif'><p class='text-center'><i>Kỳ Co.</i></p><p class='text-justufy mb-3'>12h00: Quý khách dùng bữa trưa tại nhà hàng địa phương, sau đó đoàn khởi hành tham quan và chiêm bái <strong>Chùa Ông Núi</strong> - người dân <strong>Bình Định</strong> vẫn gọi chùa Linh Phong là chùa Ông Núi (thôn Phương Phi, xã Cát Tiến, huyện Phù Cát). Những dấu tích về Ông Núi nay chỉ còn lại hang Tổ với vẻ đẹp hoang sơ, nằm trên lưng chừng một ngọn núi. Ngay bên cạnh chùa là tượng phật ngồi cao nhất Đông Nam Á, từ nơi đây quý khách có thể nhìn thấy toàn cảnh bán đảo Phương Mai.</p><img class='w-full mb-3 object-cover' src='https://cdn2.ivivu.com/2020/12/17/14/ivivu-chua-ong-nui-quy-nhon.jpg'/><p class='text-center mb-3'><i>Chùa Ông Núi.</i></p><p class='text-justify mb-3'>14h30: Quý khách về lại khách sạn nghĩ ngơi, tự do tắm biển hoặc tham quan.</p><p class='text-justify mb-3'>Buổi Tối: Dùng cơm tại nhà hàng, tự do khám phá Thành Phố <strong>Quy Nhơn</strong> về đêm.</p><h3 class='text-[#4e4e4e] text-lg font-bold uppercase mb-3'>NGÀY 2: KDL HẦM HÔ - TÂY SƠN ĐẤT VÕ ( ĂN SÁNG, TRƯA, TỐI) </h3><p class='text-justify mb-3'>Sáng: Quý khách dùng điểm tâm sáng, xe đưa đoàn Khám Phá Vùng Đất <strong>Tây Sơn Đất Võ</strong>.</p><p class='text-justify mb-3'>Đoàn tham quan <strong>Bảo Tàng Vua Quang Trung</strong> - tìm hiểu về vùng đất Võ, Anh Hùng Áo Vải Cờ Đào Vua Quang Trung, xem chương trình biểu diễn nhạc võ (chi phí vé Nhạc Võ Tự túc).</p><img class='w-full object-cover mb-3' src='https://cdn2.ivivu.com/2021/04/08/14/ivivu-bao-tang-quang-trung-quy-nhon.gif'/><p class='text-center mb-3'><i>Bảo Tàng Vua Quang Trung.</i></p><p class='text-justify mb-3'>Sau đó xe đưa Quý khách đến với <strong>Khu Du Lịch Hầm Hô</strong> là một trong những tham quan du lịch nổi tiếng của vùng đất Bình Định, quý khách sẽ hoà mình vào thiên nhiên giữa khung cảnh núi non và sông suối hùng vỹ, tận hưởng không khí trong lành, quý khách có thể thưởng ngọn núi rừng bằng hệ thống thuyền Độc Mộc của khu du lịch (chi phí thuyền tự túc).</p><img class='mb-3 w-full object-cover' src='https://cdn2.ivivu.com/2021/03/29/10/ivivu-kdl-ham-ho-quy-nhon.gif'><p class='text-center mb-3'><i>KDL Hầm Hô.</i></p><p class='text-justify mb-3'>Đoàn dùng cơm trưa tại khu Du Lịch Hầm Hô.</p><p class='text-justify mb-3'>Đoàn dùng cơm trưa tại khu <strong>Du Lịch Hầm Hô</strong>.</p><p class='text-justify mb-3'>Sau đó xe đưa quý khách về lại thành phố <strong>Quy Nhơn</strong>, về khách sạn nghỉ ngơi.</p><p class='text-justify mb-3'>Buổi chiều: đoàn dùng cơm tại nhà hàng, tự do khám phá Thành Phố Quy Nhơn về đêm.</p><h3 class='font-semibold text-2xl mt-4 mb-3 px-4 text-dark-blue'>Chương trình tour</h3><div class='px-4'><h3 class='text-[#4e4e4e] text-lg font-bold uppercase mb-3'>NGÀY 3: QUY NHƠN - TP HỒ CHÍ MINH ( ĂN SÁNG, TRƯA)</h3><p class='text-justify mb-3'>Sáng: Quý khách dùng điểm tâm sáng tại nhà hàng, sau đó tự do tham quan, tắm biển, nghỉ ngơi,…</p><p class='text-justify mb-3'>12h00: Đoàn làm thủ tục trả phòng, dùng cơm trưa tại nhà hàng.</p><p class='text-jusitfy mb-3'>Xe đưa đoàn tham quan khu du lịch <strong>Ghềnh Ráng</strong> viếng nơi an nghĩ của nhà thơ Hàn Mạc Tử, tham quan bãi tắm <strong>Hoàng Hậu, Bãi Trứng, Đá Hòn Chồng</strong>… Đoàn khởi hành tham quan và mua sắm đặc sản vùng miền của vùng đất <strong>Tây Sơn Bình Định</strong>.</p><img src='https://cdn2.ivivu.com/2020/05/12/15/ivivu-ghenh-rang-tien-sa.gif' class='w-full object-cover mb-3'><p class='text-center mb-3'><i>KDL Ghềnh Ráng.</i></p><p class='text-justify mb-3'>Chiều: xe đưa đoàn ra Diêu Trì đón chuyến tàu SE21, SE3, SE1, SQN1 về <strong>Thành Phố Hồ Chí Minh</strong>, Qúy khách ăn tối tự túc trên tàu.</p><p class='text-justify mb-3'>Sáng hôm sau Đoàn về đến TP.HCM, HDV thay mặt công ty du lịch chào tạm biệt và hẹn gặp lại.</p><p class='tex-center mb-3'></p><i>Thứ tự tham quan có thể thay đổi nhưng vẫn đảm bảo đầy đủ điểm trong chương trình.</div>";
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
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </WrapperContent>
      <WrapperContent className="mt-2 shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]">
        <div dangerouslySetInnerHTML={{ __html: detail }} />
      </WrapperContent>
    </Fragment>
  );
};

export default ContentBookingTour;
