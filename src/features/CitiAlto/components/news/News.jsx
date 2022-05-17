import React from "react";
import "./news.css";
const news = [
  {
    id: 1,
    img: "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/news4.jpg",
    title: "Mona Media Công Bố Mở Bán Căn Hộ Citi Land Quận 2",
    desc: "Mở Bán Citi Land. Ngày 8/10 tại Trung tâm Gem Center Mona Media chính thức công bố dự án mới tại khu đô thị Cát Lái quận 2. Dự án tiếp theo theo dòng căn hộ Citi mang tên Mona Citi Land. Như nhiều thay đổi trong thiết kế và xây dựng căn hộ Mona Citi Land là đường dây có thể nâng cao độ khác nhau ở các quận 2. Toa lạc ngay vòng quanh tâm khu đô thị Cát Lái 152 ha Mona Media vọng vọng Mona Citi Land sẽ là điểm nhấn trong khu vực quận 2",
  },

  {
    id: 2,
    img: "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/PHOI-CANH-DU-AN-CAN-HO-FLORA-KESHI-THU-DUC-NAM-LONG-HCM.jpg",
    title: "Giai Điệu Cuộc Sống Diệu Kỳ Tại Mona Citi Land",
    desc: "Không khó để hiểu lý do vì sao dù chỉ mới vào Việt Nam khoảng 5 năm trở lại đây nhưng phong cách kiến trúc đương đại lại được yêu thích đến như vậy. Khi một căn hộ có diện tích vừa phải nhưng vẫn đảm bảo tiện nghi và thoải mái, được đặt trong tổng thể kiến trúc đơn giản nhưng không kém phần sáng tạo. ..thì với người trẻ, đó không đơn thuần là nhà nữa, mà là lựa chọn thể hiện gu và phong cách sống riêng. Loại bỏ các chi tiết rườm rà, mặt ngoài kiến trúc của Mona Citi Land là tập hợp các hình khối cơ bản và những đường thẳng vơi điểm nhấn là các khung viền trắng tạo nên một nhịp điệu kiến trúc tổng thể đơn giản và hài hòa. Bắt đầu là các nốt trầm ấm áp ở phần chân và tiến dần lên những nố cao là phần mái được bao bọc bởi kết cấu đứng khỏe khoắn, nhằm tăng thêm sự hấp dẫn của tổng thể công trình. Mỗi phong cách sống đều mang cho người dùng một giá trị nhất định, hoặc sự thực dụng, hoặc niềm say mê với cacsgias trị nghệ thuật. Với dự án căn hộ Mona Citi Land và phong cách kiến trúc đương đại cũng vậy. Đó là nơi bạn có thể thả lòng trái tim và khối óc của mình,dành thời gian cho những người quan trọng và tận hưởng sự tinh tế trong từng không gian sống. Đó cũng là nơi bạn có thể tự mình sáng tạo và trải nghiệm những giai điệu cuộc sống  diệu kỳ nhất.",
  },

  {
    id: 3,
    img: "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/living-room.jpg",
    title: "Ngôi Nhà Dành Cho Người Trẻ Thành Đạt Và Bản Lĩnh",
    desc: "Mona Citi Land Ngôi nhà của những người trẻ thành đạt. Trong guồng quay vội vã của cuộc sống chốn thành thị, không thể thiếu hình ảnh của những cư dân trẻ đầy năng động, nhiệt huyết, tự tin và thông minh. Họ là những người trẻ trưởng thành, đã vững vàng và khẳng định được vị trí trong xã hội. Lúc này hộ cần một không gian sống tương xứng, phù hợp với phong cách, công việc và giá trị bản thân. Những người trẻ tuổi ấy , họ không thích đi quá xa sự văn minh của đô thị. Không gian sống của họ phải là những khu vực gần trung tâm, với sự tách biệt vừa đủ mà vẫn không xa rời những tiện ích hiện đại cần có. Họ cần một căn hộ vừa phải, đủ tin tế, mạnh mẽ, mang hơi thở đương đại trong thiết kế nhưng vẫn đảm bảo tìm lại sự cân bằng trong cuộc sống với những không gian xanh mát, những khoảng nghỉ thông thoáng. Căn hộ Mona Citi Land có vị trí và phong cách thỏa man được những mong muốn trên.Hiểu được người trẻ, những người đang bước vào thời kỳ đỉnh cao của sự hăng say, lòng nhiệt huyết với công việc, với cuộc sống, Mona Citi Land mang đến một không gian sống hoàn hảo và phù hợp nhất. Nơi có giai điệu cuộc sống thăng hoa, có thiết kế kiến trúc ấn tượng, có không gian ngập tràn ánh sáng, có những khoảng xanh rộng lớn, có cộng đồng văn minh tọa lạc ngay khu đô thị sầm uất, và đương nhiên có một cuộc sống hạnh phúc đáng mơ ước.",
  },

  {
    id: 4,
    img: "http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/gall1.jpg",
    title: "Cơ Hội Sở Hữu Căn Hộ Cho Người Trẻ",
    desc: "Mona Citi Land căn hộ cao cấp tọa lạc tại quận 2 được phát triển bởi Mona Media Group được ví như điểm sáng lớn nhất thị trường bất động sản mùa cuối năm. Hiện nay ở các thành phố lớn như TP.HCM, Hà Nội, TP. Đà Nẵng đang ngày càng chiếm đa số. Chính vì vậy nhu cầu nhà ở cho tầng lớp trẻ ngày một tăng. Thị trường bất động sản mùa cuối năm ngày càng khan hiếm. Theo báo cáo mới nhất thị trường bất động sản thành phố Hồ Chí Minh phân khúc căn hộ đặc biệt là phân khúc giá từ 1.2-1.5 tỷ đang đang quan tâm và ngày càng gia tăng. Với việc giá đất nền tăng cao và khó sở hữu thì căn hộ tầm trung trở thành giải pháp khả thi nhất. Trong dịp cuối năm là thời điểm mà bất động sản sôi động nhất với dòng tiền kiều hối dổ vềvà thường được các gia đình mang số tiền lớn này đầu tư vào các tài sản có giá trị như nhà cửa, xe cộ..Khu đông vẫn là điểm nóng của thị trường bất động sản với cơ sở hạ tầng hoàn thiện nhanh chóng, hàng loạt dự án lớn tầm cỡ đang hình thành. Ngoài ra khu đông còn có vị trí đẹp với ưu thế gần trung tâm thành phố di chuyển thuận lợi. Thời điểm hiện tại những căn hộ có mức giá hấp dẫn vị trí tốt chỉ đếm trên đầu ngón tay. Trong khi đó dòng căn hộ này lại là dòng căn hộ phục vụ chính cho nhu cầu ở thực. Phân khúc căn hộ tầm trung đang thực sự khan hiếm ở thời điểm cuối năm 2018. Mona Citi Land Căn Hộ Tầm Trung Nổi Bật Tại Quận 2. Cảm hứng trào lưu đương đại cùng cảm hứng từ những người trẻ tuổi thành thị, sống động tràn đầy cá tính là khởi nguồn cảm xúc cho sự ra đời của Citialto, nời hình khối, màu sắc, vật liệu giao hòa thành một bản giao hưởng cho các giác quan. Tại đây mỗi căn hộ đều được tối đa hóa công năng ánh sáng được trải rộng tối đa mang tới cho chủ nhân sở hữu tầm nhìn trải rộng hơn.  Dự án mang lại cho người dân sống tại Citialto cảm giác trải nghiệm kiệt tác nghệ thuật đỉnh cao ngoài ra còn hưởng các tiện ích cao cấp: Hồ bơi, siêu thị, sân thể thao, spa, khu vui chơi, công viên, khu BBQ…giúp cho cuộc sống thêm chất lượng. Là sản phẩm thứ 4 trong dòng căn hộ mang thương hiệu Citi thành công trên thị trường nhiều năm qua. Mona Citi Land là dự án căn hộ được Mona Media giới thiệu ra thị trường vào quý 4/2018. Mona Citi Land được chủ đầu tư mang nhiều tâm huyết mang đến cho khách hàng một căn hộ có giá tầm trung nhưng được hưởng ất cả các giá trị cao cấp nhất từ thiết kê, xây dựng tới những tiện ích xung quanh. Với mức giá chỉ 1 tỷ 450 triệu/căn để sở hữu một sản phẩm có giá trị vượt trội Citialto là sản phẩm đáng tiền để ở và đầu tư lâu dài.",
  },
];

const News = () => {
  return (
    <div className="news" id="news">
      <div className="news__container">
        <div className="news__content">
          <h1>TIN TỨC</h1>
          <div className="news__content--lists">
            {news.map((tintuc) => {
              return (
                <a key={tintuc.id} href="#1" className="news__content--list">
                  <div className="new__content">
                    <img src={tintuc.img} alt="" />
                    <hr style={{width:"40px", margin: "0 auto 10px", border:"1px solid #2294D2"}}/>
                    <div className="new__content--details">
                        <h5>{tintuc.title}</h5>
                        <p>{tintuc.desc}</p>
                        <button className="new__content--button">CHI TIẾT</button>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
