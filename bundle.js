(() => {
  "use strict";

  // --- src/data/initialConfig.js ---
/**
 * Master Wedding Configuration Schema & Default Content
 * Designed for EverAfter Wedding Website Templates
 */

const defaultWeddingConfig = {
  templateId: "vietnamese-heritage",

  siteSettings: {
    language: "vi",
    title: "Nhật Minh & Mai Anh - Wedding Invitation",
    slug: "nhat-minh-mai-anh-2026",
    publishState: "published"
  },

  intro: {
    enabled: true,
    style: "traditional-seal",
    title: "LỄ THÀNH HÔN",
    subtitle: "Trân trọng kính mời quý khách",
    buttonLabel: "Mở Thiệp Cưới",
    waxSealText: "HỶ",
    monogram: "M & A"
  },

  music: {
    enabled: true,
    source: "", // Optional MP3 URL. If empty, uses the built-in ambient romantic harp/piano synthesizer
    volume: 0.65,
    autoplayAfterOpen: true,
    title: "Canon in D (Acoustic Romantic Harp & Piano)"
  },

  couple: {
    brideName: "Trần Mai Anh",
    groomName: "Nguyễn Nhật Minh",
    brideShortName: "Mai Anh",
    groomShortName: "Nhật Minh",
    monogram: "M & A",
    weddingDate: "2026-11-28T18:00:00",
    lunarDate: "Ngày 20 tháng 10 năm Bính Ngọ",
    city: "Hà Nội, Việt Nam",
    headline: "Hành Trình Hạnh Phúc Khởi Đầu Từ Đây",
    heroImage: "./assets/images/couples/vietnamese-heritage.jpg",
    quote: "Gặp gỡ là duyên phận, nắm tay nhau qua thăng trầm là sự lựa chọn, và cùng nhau già đi là lời hứa trọn đời."
  },

  themeOverrides: {
    colors: {},
    fonts: {},
    spacing: "comfortable"
  },

  modules: [
    {
      id: "intro",
      name: "Intro Mở Thiệp",
      enabled: true,
      order: 1,
      variant: "gate-envelope",
      content: {
        title: "Thiệp Mời Thành Hôn",
        invitationSubtitle: "Hân hoan kính báo tin mừng",
        coupleNames: "Nhật Minh & Mai Anh",
        dateDisplay: "28 . 11 . 2026",
        buttonText: "Mở Thiệp"
      }
    },
    {
      id: "couple",
      name: "Cô Dâu & Chú Rể",
      enabled: true,
      order: 2,
      variant: "split-portrait",
      content: {
        badge: "The Bride & Groom",
        title: "Hai Nửa Yêu Thương",
        groom: {
          fullName: "Nguyễn Nhật Minh",
          title: "Chú Rể",
          desc: "Một kỹ sư công nghệ đam mê nhiếp ảnh, điềm đạm và luôn dành trọn sự chở che, yêu thương cho người bạn đồng hành của đời mình.",
          tagline: "Chàng trai tháng 11"
        },
        bride: {
          fullName: "Trần Mai Anh",
          title: "Cô Dâu",
          desc: "Một nhà thiết kế nội thất yêu hoa cỏ, trà thơm và luôn thắp sáng mọi không gian bằng nụ cười rạng rỡ và trái tim ấm áp.",
          tagline: "Cô gái mùa thu"
        },
        countdownTitle: "Đếm Ngược Tới Khoảnh Khắc Thiêng Liêng"
      }
    },
    {
      id: "family",
      name: "Hai Gia Đình",
      enabled: true,
      order: 3,
      variant: "classic-honor",
      content: {
        title: "Đại Diện Hai Họ",
        subtitle: "Hân hoan thông báo ngày hạnh phúc của hai con",
        groomSide: {
          title: "NHÀ TRAI",
          father: "Ông Nguyễn Văn Hùng",
          mother: "Bà Lê Thị Mai",
          roleDesc: "Trưởng nam",
          address: "Quận Ba Đình, TP. Hà Nội",
          phone: "0912 345 678"
        },
        brideSide: {
          title: "NHÀ GÁI",
          father: "Ông Trần Quốc Toàn",
          mother: "Bà Phạm Hoàng Yến",
          roleDesc: "Út nữ",
          address: "Quận 1, TP. Hồ Chí Minh",
          phone: "0987 654 321"
        },
        note: "Sự hiện diện của quý thân bằng quyến thuộc là niềm vinh hạnh lớn nhất của hai gia đình chúng tôi."
      }
    },
    {
      id: "invitation",
      name: "Lời Mời",
      enabled: true,
      order: 4,
      variant: "personalized-card",
      content: {
        title: "Lời Mời Trân Quý",
        personalGreetingTemplate: "Kính gửi {guestName}",
        invitationText: "Chúng tôi vô cùng hạnh phúc khi được cùng nhau bước sang một trang mới của cuộc đời. Trong ngày trọng đại này, sự hiện diện, nụ cười và lời chúc phúc của {guestName} sẽ là món quà quý giá và ý nghĩa nhất đối với chúng tôi.",
        highlightQuote: "“Tình yêu không phải là nhìn nhau, mà là cùng nhau nhìn về một hướng.”",
        closingWords: "Rất hân hạnh được đón tiếp bạn trong buổi tiệc ấm cúng của gia đình!"
      }
    },
    {
      id: "story",
      name: "Chuyện Tình Yêu",
      enabled: true,
      order: 5,
      variant: "milestone-timeline",
      content: {
        title: "Câu Chuyện Chúng Mình",
        subtitle: "Hành trình từ hai người xa lạ đến một tổ ấm",
        headlineQuote: "Mỗi khoảnh khắc bên nhau đều là một mảnh ghép kỳ diệu làm nên tình yêu hôm nay.",
        milestones: [
          {
            year: "2019",
            dateStr: "15 Tháng 10, 2019",
            title: "Cái Nhìn Đầu Tiên",
            description: "Một chiều thu Hà Nội tại quán cà phê ven hồ Tây, chúng mình vô tình ngồi chung một chiếc bàn vì quán đông khách. Một tách cà phê trứng đã bắt đầu câu chuyện 7 năm dài.",
            image: "./assets/images/gallery/venue.jpg",
            location: "Hồ Tây, Hà Nội"
          },
          {
            year: "2021",
            dateStr: "24 Tháng 12, 2021",
            title: "Lời Tỏ Tình Dưới Đêm Giáng Sinh",
            description: "Giữa làn gió lạnh của Đà Lạt và ánh đèn vàng ấm áp, anh Minh đã ngỏ lời: 'Hãy để anh được chăm sóc em mỗi ngày nhé?'. Và cái gật đầu mỉm cười của em đã mở ra một chương mới.",
            image: "./assets/images/gallery/rings.jpg",
            location: "Đà Lạt, Lâm Đồng"
          },
          {
            year: "2024",
            dateStr: "14 Tháng 02, 2024",
            title: "She Said YES!",
            description: "Dưới ánh hoàng hôn rực rỡ bên bờ biển Phú Quốc, anh quỳ gối cùng chiếc nhẫn hẹn ước. Mai Anh xúc động rơi nước mắt và nói lời đồng ý trọn đời.",
            image: "./assets/images/gallery/bouquet.jpg",
            location: "Bãi Sao, Phú Quốc"
          },
          {
            year: "2026",
            dateStr: "28 Tháng 11, 2026",
            title: "Ngày Chung Đôi",
            description: "Chúng mình chính thức nắm tay nhau bước vào lễ đường trước sự chứng kiến và chúc phúc của những người thân yêu nhất.",
            image: "./assets/images/couples/vietnamese-heritage.jpg",
            location: "Trung tâm Tiệc cưới The Grand Palace"
          }
        ]
      }
    },
    {
      id: "events",
      name: "Sự Kiện Cưới",
      enabled: true,
      order: 6,
      variant: "multi-card-event",
      content: {
        title: "Lịch Trình Sự Kiện",
        subtitle: "Các mốc thời gian và địa điểm diễn ra lễ cưới",
        events: [
          {
            id: "event-1",
            name: "Lễ Vu Quy (Nhà Gái)",
            time: "09:00 AM",
            date: "28.11.2026",
            locationName: "Tư gia Nhà Gái",
            address: "Số 88 Đường Nguyễn Du, Bến Nghé, Quận 1, TP. Hồ Chí Minh",
            mapUrl: "https://maps.google.com/?q=District+1+Ho+Chi+Minh+City",
            calendarTitle: "Lễ Vu Quy - Mai Anh & Nhật Minh",
            description: "Nghi lễ gia tiên truyền thống, rước dâu và nhận lời chúc phúc từ song thân phụ mẫu.",
            iconName: "Home"
          },
          {
            id: "event-2",
            name: "Lễ Thành Hôn & Tiệc Cưới",
            time: "18:00 PM (Đón khách: 17:30)",
            date: "28.11.2026",
            locationName: "The Grand Heritage Hall - Grand Ballroom tầng 3",
            address: "Số 154 Đường Nam Kỳ Khởi Nghĩa, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh",
            mapUrl: "https://maps.google.com/?q=The+Grand+Palace+Ho+Chi+Minh",
            calendarTitle: "Tiệc Cưới Nhật Minh & Mai Anh",
            description: "Nghi thức trao nhẫn, khai tiệc mừng, âm nhạc và những khoảnh khắc khiêu vũ đáng nhớ.",
            iconName: "GlassWater"
          }
        ]
      }
    },
    {
      id: "saveTheDate",
      name: "Save The Date",
      enabled: true,
      order: 7,
      variant: "calendar-countdown",
      content: {
        title: "Save Our Date",
        subtitle: "Đánh dấu ngày đặc biệt này vào cuốn lịch của bạn",
        targetDate: "2026-11-28T18:00:00",
        calendarMonth: "Tháng 11 / 2026",
        highlightDay: 28,
        calendarDays: [
          1, 2, 3, 4, 5, 6, 7,
          8, 9, 10, 11, 12, 13, 14,
          15, 16, 17, 18, 19, 20, 21,
          22, 23, 24, 25, 26, 27, 28,
          29, 30
        ],
        firstDayOfWeek: 0,
        quote: "Sự hiện diện của bạn là mảnh ghép hoàn hảo cho ngày vui của chúng mình!",
        googleCalendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Đám+cưới+Nhật+Minh+%26+Mai+Anh&dates=20261128T103000Z/20261128T143000Z&details=Hân+hoan+chúc+mừng+ngày+chung+đôi&location=The+Grand+Heritage+Hall"
      }
    },
    {
      id: "weddingParty",
      name: "Wedding Party",
      enabled: true,
      order: 8,
      variant: "roster-cards",
      content: {
        title: "Những Người Đồng Hành",
        subtitle: "Dàn phù dâu và phù rể tuyệt vời luôn sát cánh bên chúng mình",
        groomsmen: [
          {
            name: "Lê Hoàng Quân",
            role: "Best Man (Phù Rể Trưởng)",
            relationship: "Bạn thân thời đại học",
            avatar: "./assets/images/gallery/venue.jpg",
            quote: "Người luôn giữ nhẫn cưới và sẵn sàng nhắc bài khi chú rể xúc động quên lời thề."
          },
          {
            name: "Đặng Tuấn Kiệt",
            role: "Groomsman (Phù Rể)",
            relationship: "Đồng nghiệp chí cốt",
            avatar: "./assets/images/gallery/rings.jpg",
            quote: "Trưởng ban hoạt náo và khuấy động không khí buổi tiệc."
          }
        ],
        bridesmaids: [
          {
            name: "Vũ Phương Thảo",
            role: "Maid of Honor (Phù Dâu Trưởng)",
            relationship: "Chị em kết nghĩa 10 năm",
            avatar: "./assets/images/gallery/bouquet.jpg",
            quote: "Người cùng cô dâu thử hơn 20 bộ váy cưới và luôn lau nước mắt mỗi khi cô dâu cười quá nhiều."
          },
          {
            name: "Đỗ Ngọc Bích",
            role: "Bridesmaid (Phù Dâu)",
            relationship: "Bạn thân từ cấp 3",
            avatar: "./assets/images/gallery/rings.jpg",
            quote: "Người đảm bảo hoa cầm tay của cô dâu luôn tươi tắn suốt cả ngày dài."
          }
        ]
      }
    },
    {
      id: "video",
      name: "Video Cưới",
      enabled: true,
      order: 9,
      variant: "cinematic-hero",
      content: {
        title: "Thước Phim Hạnh Phúc",
        subtitle: "Một vài giây phút ngọt ngào được ghi lại",
        videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=0",
        posterImage: "./assets/images/gallery/venue.jpg",
        caption: "Pre-wedding Teaser film quay tại Vịnh Hạ Long & Phố cổ Hội An",
        duration: "03:45 Phút"
      }
    },
    {
      id: "album",
      name: "Album Ảnh Cưới",
      enabled: true,
      order: 10,
      variant: "editorial-masonry",
      content: {
        title: "Khoảnh Khắc Kỷ Niệm",
        subtitle: "Từng ánh mắt và nụ cười ghi dấu tình yêu",
        images: [
          {
            id: "img-1",
            url: "./assets/images/couples/vietnamese-heritage.jpg",
            title: "Áo Dài Hoàng Gia",
            caption: "Bộ trang phục truyền thống Nhật Bình sắc son thêu rồng phượng",
            category: "Truyền thống",
            aspect: "landscape"
          },
          {
            id: "img-2",
            url: "./assets/images/gallery/rings.jpg",
            title: "Nhẫn Cưới Hẹn Ước",
            caption: "Lời hứa vĩnh cửu đính kết trên chiếc nhẫn kim cương",
            category: "Chi tiết",
            aspect: "square"
          },
          {
            id: "img-3",
            url: "./assets/images/gallery/bouquet.jpg",
            title: "Hoa Cưới Nắng Sớm",
            caption: "Bó hoa hồng vườn David Austin dịu dàng trong sương mai",
            category: "Chi tiết",
            aspect: "portrait"
          },
          {
            id: "img-4",
            url: "./assets/images/gallery/venue.jpg",
            title: "Đêm Tiệc Lung Linh",
            caption: "Không gian tiệc cưới ấm áp dưới hàng ngàn ngọn nến và ánh đèn",
            category: "Không gian",
            aspect: "landscape"
          },
          {
            id: "img-5",
            url: "./assets/images/couples/luxury-gold-foil.jpg",
            title: "Dạ Tiệc Khiêu Vũ",
            caption: "Khoảnh khắc lộng lẫy trong trang phục tuxedo và váy dạ hội",
            category: "Studio",
            aspect: "landscape"
          },
          {
            id: "img-6",
            url: "./assets/images/couples/k-wedding-minimal.jpg",
            title: "Nụ Cười Bình Yên",
            caption: "Ánh mắt trao nhau chứa chan niềm tin yêu và hy vọng",
            category: "Studio",
            aspect: "landscape"
          }
        ]
      }
    },
    {
      id: "dressCode",
      name: "Dress Code",
      enabled: true,
      order: 11,
      variant: "swatch-cards",
      content: {
        title: "Gợi Ý Trang Phục",
        subtitle: "Để chúng mình cùng tạo nên những khung hình đồng điệu và tuyệt đẹp",
        description: "Tiệc cưới được thiết kế theo tone màu ấm áp và sang trọng. Bạn hãy chọn trang phục thoải mái nhất theo bảng màu gợi ý bên dưới nhé!",
        palette: [
          { hex: "#9B1B1E", name: "Đỏ Son (Heritage Red)", description: "Màu may mắn truyền thống" },
          { hex: "#D89F38", name: "Vàng Đồng (Imperial Gold)", description: "Ánh hoàng kim sang trọng" },
          { hex: "#F5EBE1", name: "Be Sữa (Warm Cream)", description: "Nhẹ nhàng, thanh lịch" },
          { hex: "#2C3E35", name: "Xanh Rêu (Forest Sage)", description: "Tự nhiên, trang nhã" }
        ],
        suggestionsGroom: [
          "Vest tông màu Đen, Xanh Navy, Ghi xám hoặc Be",
          "Sơ mi trắng phối cà vạt lịch lãm",
          "Giày da sẫm màu thanh lịch"
        ],
        suggestionsBride: [
          "Váy dạ hội dáng dài hoặc đầm midi thanh lịch",
          "Tone màu Pastel, Be, Nude, Đỏ rượu vang",
          "Hạn chế mặc trang phục thuần màu trắng tinh khôi (để cô dâu được nổi bật nhất nhé!)"
        ],
        notes: "Trang phục lịch sự, sang trọng và thoải mái để bạn có thể hết mình cùng âm nhạc trong phần khiêu vũ!"
      }
    },
    {
      id: "faq",
      name: "Câu Hỏi Thường Gặp",
      enabled: true,
      order: 12,
      variant: "accordion-list",
      content: {
        title: "Hỏi & Đáp",
        subtitle: "Mọi thông tin cần thiết giúp bạn chuẩn bị tốt nhất cho buổi tiệc",
        items: [
          {
            question: "Khu vực gửi xe của sảnh tiệc ở đâu?",
            answer: "Sảnh tiệc có hầm giữ xe ngầm 3 tầng rộng rãi dành cho cả ô tô và xe máy tại cổng chính số 154 Nam Kỳ Khởi Nghĩa. Có nhân viên hỗ trợ dẫn chỗ đỗ xe miễn phí cho quý khách."
          },
          {
            question: "Tôi có thể đưa trẻ nhỏ đi cùng không?",
            answer: "Chúng tôi rất yêu quý các bé! Tuy nhiên không gian tiệc có sân khấu cao và nhiều hiệu ứng ánh sáng, xin phụ huynh vui lòng để mắt và đồng hành cùng các bé để bảo đảm an toàn tuyệt đối."
          },
          {
            question: "Tôi có chế độ ăn chay hoặc dị ứng thực phẩm thì làm thế nào?",
            answer: "Chúng tôi đã chuẩn bị riêng thực đơn tiệc chay cao cấp và các món thay thế nếu bạn dị ứng hải sản/đậu phộng. Xin vui lòng ghi chú vào form RSVP bên dưới để nhà hàng phục vụ chu đáo nhất."
          },
          {
            question: "Tôi nên có mặt vào khoảng thời gian nào?",
            answer: "Khu vực Welcome Drink và chụp ảnh kỷ niệm cùng cô dâu chú rể bắt đầu từ 17:30. Lễ thành hôn chính thức sẽ diễn ra vào đúng 18:30, vì vậy bạn nên đến trước 18:00 để không bỏ lỡ khoảnh khắc đẹp nhất nhé!"
          }
        ]
      }
    },
    {
      id: "rsvp",
      name: "Xác Nhận Tham Dự (RSVP)",
      enabled: true,
      order: 13,
      variant: "interactive-form",
      content: {
        title: "Xác Nhận Tham Dự",
        subtitle: "Sự hiện diện của bạn là niềm vinh hạnh to lớn cho chúng mình",
        deadlineText: "Xin vui lòng phản hồi trước ngày 15 tháng 11 năm 2026",
        dietaryOptions: ["Ăn mặn tiêu chuẩn", "Ăn chay thanh tịnh", "Không ăn hải sản", "Không ăn thịt bò", "Khác (ghi chú)"],
        successMessage: "Cảm ơn bạn rất nhiều! Phản hồi của bạn đã được ghi nhận. Chúng mình rất mong chờ được đón tiếp bạn!"
      }
    },
    {
      id: "banking",
      name: "Mừng Cưới / Hộp Mừng",
      enabled: true,
      order: 14,
      variant: "duo-cards-qr",
      content: {
        title: "Gửi Lời Chúc Phúc",
        subtitle: "Hộp mừng cưới dành cho bạn bè ở xa không thể tham dự trực tiếp",
        wishingNote: "Sự hiện diện và lời chúc phúc của quý khách là món quà ý nghĩa nhất. Nếu quý khách muốn gửi tình cảm qua lời mừng cưới từ phương xa, có thể sử dụng thông tin bên dưới:",
        accounts: [
          {
            holderName: "NGUYEN NHAT MINH",
            bankName: "Vietcombank (Hà Nội)",
            accountNumber: "0011004389999",
            branch: "Chi nhánh Hoàn Kiếm",
            qrCodeImage: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020101021238580010A00000072701260006970436011300110043899990208QRIBFTTA53037045802VN6304E538",
            role: "groom",
            roleLabel: "Mừng Chú Rể"
          },
          {
            holderName: "TRAN MAI ANH",
            bankName: "Techcombank (TP. HCM)",
            accountNumber: "19034827103018",
            branch: "Chi nhánh Sài Gòn",
            qrCodeImage: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020101021238580010A000000727012600069704070114190348271030180208QRIBFTTA53037045802VN6304859B",
            role: "bride",
            roleLabel: "Mừng Cô Dâu"
          }
        ]
      }
    },
    {
      id: "registry",
      name: "Gift Registry (Danh Sách Quà)",
      enabled: true,
      order: 15,
      variant: "product-grid",
      content: {
        title: "Danh Sách Quà Tặng Mơ Ước",
        subtitle: "Những món quà nhỏ ấm cúng cho tổ ấm mới của hai đứa",
        description: "Nếu bạn thích gửi tặng hiện vật lưu niệm cho căn nhà mới, đây là những gợi ý nhỏ mà chúng mình vô cùng trân quý:",
        items: [
          {
            id: "gift-1",
            title: "Bộ Ấm Chén Gốm Mộc Nghệ Thuật",
            category: "Đồ Gia Dụng",
            priceEstimate: "1.200.000 VNĐ",
            imageUrl: "./assets/images/gallery/bouquet.jpg",
            linkUrl: "https://example.com/gift1",
            isClaimed: false
          },
          {
            id: "gift-2",
            title: "Máy Pha Cà Phê Espresso Retro",
            category: "Nhà Bếp",
            priceEstimate: "3.500.000 VNĐ",
            imageUrl: "./assets/images/gallery/rings.jpg",
            linkUrl: "https://example.com/gift2",
            isClaimed: true
          },
          {
            id: "gift-3",
            title: "Bộ Chăn Ga Lụa Tencel Cao Cấp",
            category: "Phòng Ngủ",
            priceEstimate: "2.800.000 VNĐ",
            imageUrl: "./assets/images/gallery/venue.jpg",
            linkUrl: "https://example.com/gift3",
            isClaimed: false
          },
          {
            id: "gift-4",
            title: "Vé Máy Bay Tuần Trăng Mật Hokkaido",
            category: "Trải Nghiệm",
            priceEstimate: "Kỷ Niệm",
            imageUrl: "./assets/images/couples/tropical-destination.jpg",
            linkUrl: "https://example.com/gift4",
            isClaimed: false
          }
        ]
      }
    },
    {
      id: "guestbook",
      name: "Sổ Lưu Bút (Guestbook)",
      enabled: true,
      order: 16,
      variant: "wishes-wall",
      content: {
        title: "Lời Chúc Tốt Đẹp",
        subtitle: "Gửi gắm những lời nhắn nhủ yêu thương tới đôi tân lang tân nương",
        preloadedWishes: [
          {
            id: "wish-1",
            author: "Thanh Hằng & Quốc Bảo",
            relation: "Bạn Đại học của Chú Rể",
            message: "Chúc hai bạn trăm năm hạnh phúc, răng long đầu bạc và luôn giữ được ánh mắt ngọt ngào dành cho nhau như ngày đầu tiên!",
            createdAt: "Hôm nay, 10:30 AM",
            avatar: "HB"
          },
          {
            id: "wish-2",
            author: "Minh Trang",
            relation: "Đồng nghiệp của Cô Dâu",
            message: "Mai Anh ơi, hôm nay em là cô dâu xinh đẹp nhất! Chúc gia đình nhỏ luôn ngập tràn tiếng cười và nhiều chuyến du lịch khám phá nhé!",
            createdAt: "Hôm qua, 18:45 PM",
            avatar: "MT"
          },
          {
            id: "wish-3",
            author: "Bác Hai (Bình Thạnh)",
            relation: "Bác ruột chú rể",
            message: "Chúc hai cháu vạn sự như ý, gia đạo êm ấm thuận hòa, sớm có thêm thành viên nhỏ bi bô trong nhà.",
            createdAt: "22/10/2026",
            avatar: "BH"
          }
        ]
      }
    },
    {
      id: "thankYou",
      name: "Lời Cảm Ơn",
      enabled: true,
      order: 17,
      variant: "signature-closing",
      content: {
        title: "Chân Thành Cảm Ơn",
        signature: "Nhật Minh & Mai Anh",
        message: "Cảm ơn bạn đã là một phần đặc biệt trong ngày trọng đại và trong cuộc đời của chúng tôi. Kính chúc bạn và gia đình luôn dồi dào sức khỏe, bình an và hạnh phúc!",
        photoUrl: "./assets/images/couples/vietnamese-heritage.jpg",
        hashtag: "#NhatMinhMaiAnh2026 #EverAfterLove"
      }
    }
  ]
};


  // --- src/data/templatesData.js ---
/**
 * Design DNA Registry for 10 Unique Wedding Templates
 * Guaranteed distinct skeletons, visual rhythms, frame ratios, fonts, palettes, and animations
 * Order strictly aligned:
 * #1 Vietnamese Heritage
 * #2 Minimalist Modern
 * #3 Luxury Gold Foil
 * #4 Pressed Botanical
 * #5 Bohemian Rustic
 * #6 Washi / Ikebana Zen
 * #7 Art Deco 1920s
 * #8 Tropical Destination
 * #9 K-wedding Minimal
 * #10 Watercolor Romance
 */

const templatesData = [
  {
    id: "vietnamese-heritage",
    number: "01",
    name: "Vietnamese Heritage",
    shortName: "Hoàng Thành",
    introConcept: "Cổng Cung Đình & Khai Môn Hỷ Sự",
    subtitle: "Nét Son Truyền Thống Hoàng Gia",
    tagline: "Sen hồng, trầu cau, giấy Dó và mộc bản truyền thống",
    layoutSkeleton: "imperial-scroll",
    aspectRatio: "3:4 & 4:3",
    heroImage: "./assets/images/couples/vietnamese-heritage.jpg",
    palette: [
      { hex: "#9B1B1E", name: "Đỏ Son Hoàng Triều" },
      { hex: "#D89F38", name: "Hoàng Kim Cung Đình" },
      { hex: "#F9F3E3", name: "Giấy Dó Trầm Tích" },
      { hex: "#4A1517", name: "Gỗ Sơn Mài Cổ Điển" }
    ],
    fonts: {
      display: "'Playfair Display', 'Noto Serif', serif",
      body: "'Be Vietnam Pro', sans-serif",
      accent: "'Charm', 'Dancing Script', cursive"
    },
    motif: "Hoa Sen, Trầu Cau, Vân Mây Đồng Hồ & Dấu Ấn Song Hỷ",
    texture: "giay-do-texture",
    introStyle: "vietnamese-scroll",
    motion: "Dual imperial palace gates swing open 3D outward",
    badge: "Truyền Thống & Hoàng Gia"
  },
  {
    id: "minimalist-modern",
    number: "02",
    name: "Minimalist Modern",
    shortName: "Vách Kính Gân Sọc",
    introConcept: "Cửa Kính Gân Sọc Fluted Glass, Tay Nắm Đồng Khối & Trượt Mở Không Gian Kiến Trúc",
    subtitle: "Kiến Trúc Tối Giản & Sang Trọng",
    tagline: "Đường nét tinh gọn, tỷ lệ vàng và khoảng thở không gian",
    layoutSkeleton: "asymmetric-monolith",
    aspectRatio: "1:1 & 16:9",
    heroImage: "./assets/images/couples/minimalist-modern.jpg",
    palette: [
      { hex: "#111111", name: "Obsidian Charcoal" },
      { hex: "#F9F9F8", name: "Chalk Alabaster" },
      { hex: "#888884", name: "Architectural Concrete" },
      { hex: "#C2A68C", name: "Warm Limestone" }
    ],
    fonts: {
      display: "'Bodoni Moda', serif",
      body: "'Plus Jakarta Sans', sans-serif",
      accent: "'Bodoni Moda', italic"
    },
    motif: "Hairline geometric dividers, precision numerals 01/17, crosshairs",
    texture: "concrete-grain",
    introStyle: "fluted-glass",
    motion: "Dual reeded fluted glass doors with solid brushed brass handles slide open along ceiling track to reveal crisp couple editorial",
    badge: "Vogue & High Fashion"
  },
  {
    id: "luxury-gold-foil",
    number: "03",
    name: "Luxury Gold Foil",
    shortName: "Phong Bì Nhung",
    introConcept: "Phong Bì Nhung 3D & Niêm Phong Sáp 24K",
    subtitle: "Dạ Tiệc Ánh Kim Hoàng Tộc",
    tagline: "Ánh vàng 24K óng ánh trên nền nhung đen huyền bí",
    layoutSkeleton: "imperial-gilded",
    aspectRatio: "4:3 & Centered Folio",
    heroImage: "./assets/images/couples/luxury-gold-foil.jpg",
    palette: [
      { hex: "#121214", name: "Obsidian Black Velvet" },
      { hex: "#D4AF37", name: "24K Burnished Gold Foil" },
      { hex: "#FDF8EE", name: "Champagne Silk Cream" },
      { hex: "#7A5C28", name: "Antique Bronze" }
    ],
    fonts: {
      display: "'Cinzel', 'Playfair Display', serif",
      body: "'Cormorant Garamond', 'Playfair Display', serif",
      accent: "'Playfair Display', 'Cinzel', serif"
    },
    motif: "Gilded foil shimmer gradients, royal acanthus flourishes, embossed crests",
    texture: "black-velvet-foil",
    introStyle: "luxury-envelope",
    motion: "3D velvet envelope flap flips 180° open with gold shimmer dust",
    badge: "Black Tie & Opulent"
  },
  {
    id: "pressed-botanical",
    number: "04",
    name: "Pressed Botanical",
    shortName: "Bàn Ép Hoa Thảo Mộc",
    introConcept: "Bàn Ép Gỗ Sồi, Thẻ Mẫu Vật Dây Cói, Tháo Ốc Cánh Bướm & Vườn Hoa Hồi Sinh",
    subtitle: "Hoa Cỏ Ép & Tiêu Bản Thực Vật",
    tagline: "Giấy thủ công viền rách, lá khuynh diệp và hoa dại thảo mộc",
    layoutSkeleton: "herbarium-scrapbook",
    aspectRatio: "3:4 & 2:3",
    heroImage: "./assets/images/couples/pressed-botanical.jpg",
    palette: [
      { hex: "#3D5A43", name: "Lá Khuynh Diệp (Eucalyptus)" },
      { hex: "#F7F5EE", name: "Giấy Dó Viền Rách (Deckle)" },
      { hex: "#B86B53", name: "Đất Nung Terracotta" },
      { hex: "#243828", name: "Rêu Rừng Sâu (Deep Moss)" }
    ],
    fonts: {
      display: "'Cormorant Garamond', serif",
      body: "'Plus Jakarta Sans', sans-serif",
      accent: "'Charm', 'Dancing Script', cursive"
    },
    motif: "Pressed botanicals, herbarium specimen tags, deckled raw edges",
    texture: "linen-deckle",
    introStyle: "botanical-press",
    motion: "4 brass butterfly wing-nuts spin and unscrew, heavy oak press board lifts to release living 3D blooming flora and fluttering butterflies",
    badge: "Naturalist & Fine Art"
  },
  {
    id: "bohemian-rustic",
    number: "05",
    name: "Bohemian Rustic",
    shortName: "Đĩa Than Vinyl",
    introConcept: "Đĩa Than Vinyl Cổ Điển & Cần Kim Đồng Thau",
    subtitle: "Hoang Dã Phóng Khoáng & Mộc Mạc",
    tagline: "Cỏ đuôi chồn pampas, macramé dệt tay và nắng hoàng hôn ấm áp",
    layoutSkeleton: "polaroid-collage",
    aspectRatio: "Polaroid 1:1 & Wavy Blocks",
    heroImage: "./assets/images/couples/bohemian-rustic.jpg",
    palette: [
      { hex: "#C86D51", name: "Sa Mạc Terracotta" },
      { hex: "#F6EFE6", name: "Cát Vàng Nắng Sớm" },
      { hex: "#6B705C", name: "Gỗ Ô Liu & Xô Thơm" },
      { hex: "#D4A373", name: "Vàng Mù Tạt Hoàng Hôn" }
    ],
    fonts: {
      display: "'Dancing Script', 'Charm', cursive",
      body: "'Cormorant Garamond', serif",
      accent: "'Plus Jakarta Sans', sans-serif"
    },
    motif: "Macramé fringes, soft pampas plumes, sunburst rays, kraft paper",
    texture: "kraft-fiber",
    introStyle: "boho-vinyl",
    motion: "12-inch vinyl spinning at 33 RPM as brass tonearm lowers needle with acoustic groove",
    badge: "Earthy & Free-Spirited"
  },
  {
    id: "washi-ikebana-zen",
    number: "06",
    name: "Washi / Ikebana Zen",
    shortName: "Họa Bút Ensō",
    introConcept: "Cây Cọ Bút Lông Chấm Mực Vẽ Trọn Vòng Tròn Ensō & Khai Ấn Cinnabar",
    subtitle: "Thiền Định & Cành Hoa Cắm Tinh Tế",
    tagline: "Nét cọ mực Sumi-e, vòng tròn Ensō, cành mận nở và giấy Washi",
    layoutSkeleton: "zen-vertical-column",
    aspectRatio: "Asymmetric 3:4 & Ma Negative Space",
    heroImage: "./assets/images/couples/washi-ikebana-zen.jpg",
    palette: [
      { hex: "#1F2421", name: "Mực Khói Sumi-e" },
      { hex: "#FAF8F5", name: "Vỏ Cây Washi Tự Nhiên" },
      { hex: "#BC4749", name: "Đỏ Son Con Dấu (Vermilion)" },
      { hex: "#6C757D", name: "Đá Cuội Suối Vườn Thiền" }
    ],
    fonts: {
      display: "'Shippori Mincho', serif",
      body: "'Plus Jakarta Sans', sans-serif",
      accent: "'Shippori Mincho', serif"
    },
    motif: "Sumi-e brush strokes, Ensō circle, minimalist ikebana plum branch",
    texture: "washi-mulberry",
    introStyle: "zen-enso",
    motion: "Dynamic Japanese calligraphy brush sweeps across paper painting the full Ensō circle in fluid motion",
    badge: "Quiet Zen & Mindfulness"
  },
  {
    id: "art-deco-1920s",
    number: "07",
    name: "Art Deco 1920s",
    shortName: "Lắp Mắt Thần Ngàn Năm",
    introConcept: "Lắp Con Mắt Hoàng Kim Vào Kim Tự Tháp, Hoàn Tất Bảo Vật Ngàn Năm & Khai Mở Thần Điện",
    subtitle: "Kỷ Nguyên Gatsby Hoàng Kim",
    tagline: "Nan quạt hình học, đường viền ziggurat mạ đồng và dạ tiệc jazz",
    layoutSkeleton: "geometric-ziggurat",
    aspectRatio: "Stepped Symmetrical Framed",
    heroImage: "./assets/images/couples/art-deco-1920s.jpg",
    palette: [
      { hex: "#0D131A", name: "Midnight Gatsby Onyx" },
      { hex: "#E5B25D", name: "Vintage Brass Gold" },
      { hex: "#0F3A2E", name: "Emerald Green Velvet" },
      { hex: "#F4EFE6", name: "Ngọc Trai Ivory" }
    ],
    fonts: {
      display: "'Josefin Sans', sans-serif",
      body: "'Cinzel', serif",
      accent: "'Josefin Sans', sans-serif"
    },
    motif: "Sunburst fans, chevron borders, brass pinstripes, stepped ziggurat framing",
    texture: "deco-guilloche",
    introStyle: "millennium-puzzle",
    motion: "Mảnh ghép Con Mắt Thần Hoàng Kim lắp thẳng vào hốc kim tự tháp, hoàn tất Trò Chơi Ngàn Năm, rực sáng cổ ngữ và khai mở hôn lễ",
    badge: "Roaring 20s & Gatsby"
  },
  {
    id: "tropical-destination",
    number: "08",
    name: "Tropical Destination",
    shortName: "Đóng Vé & Cất Cánh",
    introConcept: "Đóng Dấu Hải Quan, Gập Bao Vé & Máy Bay Cất Cánh",
    subtitle: "Hôn Lễ Miền Nhiệt Đới Ven Biển",
    tagline: "Biển ngọc lam, lá cọ xào xạc, hoàng hôn rực rỡ và vé bay hạnh phúc",
    layoutSkeleton: "panoramic-resort",
    aspectRatio: "16:9 Resort Horizon & Staggered Cards",
    heroImage: "./assets/images/couples/tropical-destination.jpg",
    palette: [
      { hex: "#0A4D54", name: "Biển Sâu Andaman Teal" },
      { hex: "#F27A59", name: "Hoàng Hôn San Hô (Coral)" },
      { hex: "#2E704D", name: "Lá Cọ Rừng Nhiệt Đới" },
      { hex: "#FFF9F2", name: "Vỏ Sò Biển Nắng Gió" }
    ],
    fonts: {
      display: "'Bodoni Moda', 'Playfair Display', serif",
      body: "'Montserrat', sans-serif",
      accent: "'Charm', 'Dancing Script', cursive"
    },
    motif: "Monstera & palm leaves, coastal wave ripples, boarding pass ticket borders",
    texture: "tropical-breeze",
    introStyle: "tropical-takeoff",
    motion: "Customs seal slams, ticket wallet folds closed, and airliner takes off soaring into tropical sky",
    badge: "Wanderlust & Beach Resort"
  },
  {
    id: "k-wedding-minimal",
    number: "09",
    name: "K-wedding Minimal",
    shortName: "Album Vải Linen",
    introConcept: "Album Vải Linen Seoul, Vén Giấy Can Mờ & Tháo Nơ Lụa",
    subtitle: "Phong Cách Studio Hàn Quốc Tinh Tế",
    tagline: "Quiet luxury, khung ảnh film 35mm, ánh sáng dịu và typography tao nhã",
    layoutSkeleton: "seoul-editorial-film",
    aspectRatio: "3:4 Editorial Portrait & Film Strip",
    heroImage: "./assets/images/couples/k-wedding-minimal.jpg",
    palette: [
      { hex: "#F7F4EF", name: "Studio Warm Ivory" },
      { hex: "#D6CEC2", name: "Quiet Greige" },
      { hex: "#383431", name: "Espresso Charcoal" },
      { hex: "#F2E7E4", name: "Blush Tint Porcelain" }
    ],
    fonts: {
      display: "'Playfair Display', 'Cormorant Garamond', serif",
      body: "'Be Vietnam Pro', sans-serif",
      accent: "'Cormorant Garamond', italic"
    },
    motif: "Film frame markings (35MM / EXP 24), blind debossed borders, studio matte paper",
    texture: "matte-studio-paper",
    introStyle: "kwedding-folio",
    motion: "Satin silk bow unties and sheer vellum tracing paper curls upward like an artbook page",
    badge: "Seoul Quiet Luxury"
  },
  {
    id: "watercolor-romance",
    number: "10",
    name: "Watercolor Romance",
    shortName: "Loang Màu Nước",
    introConcept: "Đầu Cọ Chấm Nước, Loang Màu Wet-on-Wet & Nhũ Vàng",
    subtitle: "Màu Nước Mộng Mơ & Bay Bổng",
    tagline: "Vệt loang màu nước pastel, hoa mẫu đơn và cánh thiệp lãng mạn",
    layoutSkeleton: "floating-vignette",
    aspectRatio: "Soft Rounded 4:3",
    heroImage: "./assets/images/couples/watercolor-romance.jpg",
    palette: [
      { hex: "#D88A8A", name: "Cánh Hoa Mẫu Đơn (Dusty Rose)" },
      { hex: "#EADEE6", name: "Sương Khói Lilac Mist" },
      { hex: "#FAFAF9", name: "Mây Bông Cotton Paper" },
      { hex: "#642838", name: "Rượu Vang Đỏ Pinot Noir" }
    ],
    fonts: {
      display: "'Playfair Display', serif",
      body: "'Plus Jakarta Sans', sans-serif",
      accent: "'Charm', 'Dancing Script', cursive"
    },
    motif: "Pastel watercolor washes, bleeding pigment blooms, frosted glassmorphism",
    texture: "watercolor-cotton",
    introStyle: "watercolor-bloom",
    motion: "Clear waterdrop touches Arches cotton paper, releasing soft organic pigment blooms",
    badge: "Dreamy & Tender"
  }
];


  // --- src/audio/weddingMusic.js ---
/**
 * Wedding Music Engine
 * Supports custom audio files (MP3/OGG) or zero-dependency built-in romantic acoustic chime/harp synthesizer
 */

class WeddingMusicEngine {
  constructor() {
    this.audioContext = null;
    this.isPlaying = false;
    this.volume = 0.6;
    this.timer = null;
    this.audioElement = null;
    this.customSource = "";
    this.listeners = new Set();

    // Romantic chord progression (Canon in D / Romantic Harp inspired):
    // D4, F#4, A4 | A3, C#4, E4 | B3, D4, F#4 | F#3, A3, C#4 | G3, B3, D4 | D3, F#3, A3 | G3, B3, D4 | A3, C#4, E4
    this.notes = [
      // Chord 1 (D Maj)
      { freq: 293.66, delay: 0 },
      { freq: 369.99, delay: 250 },
      { freq: 440.00, delay: 500 },
      { freq: 587.33, delay: 750 },
      // Chord 2 (A Maj)
      { freq: 220.00, delay: 1000 },
      { freq: 277.18, delay: 1250 },
      { freq: 329.63, delay: 1500 },
      { freq: 440.00, delay: 1750 },
      // Chord 3 (B Min)
      { freq: 246.94, delay: 2000 },
      { freq: 293.66, delay: 2250 },
      { freq: 369.99, delay: 2500 },
      { freq: 493.88, delay: 2750 },
      // Chord 4 (F# Min)
      { freq: 185.00, delay: 3000 },
      { freq: 220.00, delay: 3250 },
      { freq: 277.18, delay: 3500 },
      { freq: 369.99, delay: 3750 },
      // Chord 5 (G Maj)
      { freq: 196.00, delay: 4000 },
      { freq: 246.94, delay: 4250 },
      { freq: 293.66, delay: 4500 },
      { freq: 392.00, delay: 4750 },
      // Chord 6 (D Maj)
      { freq: 146.83, delay: 5000 },
      { freq: 220.00, delay: 5250 },
      { freq: 293.66, delay: 5500 },
      { freq: 369.99, delay: 5750 },
      // Chord 7 (G Maj)
      { freq: 196.00, delay: 6000 },
      { freq: 246.94, delay: 6250 },
      { freq: 293.66, delay: 6500 },
      { freq: 392.00, delay: 6750 },
      // Chord 8 (A Maj resolution)
      { freq: 220.00, delay: 7000 },
      { freq: 277.18, delay: 7250 },
      { freq: 329.63, delay: 7500 },
      { freq: 440.00, delay: 7750 }
    ];
    this.loopDuration = 8000;
  }

  initContext() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
      }
    }
    if (this.audioContext && this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }
  }

  setSource(sourceUrl) {
    this.customSource = sourceUrl;
    if (sourceUrl) {
      if (!this.audioElement) {
        this.audioElement = new Audio();
        this.audioElement.loop = true;
      }
      this.audioElement.src = sourceUrl;
      this.audioElement.volume = this.volume;
    } else if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement = null;
    }
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
    this.notify();
  }

  playTone(freq, duration = 1.8) {
    if (!this.audioContext || this.volume <= 0) return;
    try {
      const now = this.audioContext.currentTime;

      // Primary gentle tone (sine)
      const osc1 = this.audioContext.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(freq, now);

      // Warm harmonic (triangle)
      const osc2 = this.audioContext.createOscillator();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(freq, now);

      const gain = this.audioContext.createGain();
      // Gentle attack and long decaying release like a harp/music box
      const peakGain = 0.08 * this.volume;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(peakGain, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.audioContext.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration);
      osc2.stop(now + duration);
    } catch (e) {
      console.warn("Audio synth tone error", e);
    }
  }

  playCeremonyCue(templateId) {
    this.initContext();
    if (!this.audioContext || this.volume <= 0) return;
    try {
      switch (templateId) {
        case 'vietnamese-heritage':
          this.playTone(261.63, 2.8);
          setTimeout(() => this.playTone(523.25, 2.4), 180);
          break;
        case 'minimalist-modern':
          this.playTone(880.00, 0.4);
          setTimeout(() => this.playTone(1760.00, 0.6), 120);
          break;
        case 'luxury-gold-foil':
          [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => {
            setTimeout(() => this.playTone(f, 2.0), i * 150);
          });
          break;
        case 'pressed-botanical':
          [392.00, 493.88, 587.33, 783.99].forEach((f, i) => {
            setTimeout(() => this.playTone(f, 2.2), i * 180);
          });
          break;
        case 'bohemian-rustic':
          [293.66, 369.99, 440.00].forEach((f, i) => {
            setTimeout(() => this.playTone(f, 2.4), i * 140);
          });
          break;
        case 'washi-ikebana-zen':
          this.playTone(329.63, 3.0);
          setTimeout(() => this.playTone(659.25, 2.5), 250);
          break;
        case 'art-deco-1920s':
          this.playTone(1046.50, 1.6);
          setTimeout(() => this.playTone(1318.51, 1.8), 120);
          break;
        case 'tropical-destination':
          [329.63, 392.00, 493.88, 659.25].forEach((f, i) => {
            setTimeout(() => this.playTone(f, 2.5), i * 200);
          });
          break;
        case 'k-wedding-minimal':
          this.playTone(698.46, 1.5);
          setTimeout(() => this.playTone(880.00, 2.0), 160);
          break;
        case 'watercolor-romance':
          [440.00, 554.37, 659.25, 880.00].forEach((f, i) => {
            setTimeout(() => this.playTone(f, 2.2), i * 150);
          });
          break;
        default:
          this.playTone(440.00, 2.0);
      }
    } catch (e) {
      console.warn("Ceremony cue error", e);
    }
  }

  startArpeggio() {
    this.notes.forEach((note) => {
      setTimeout(() => {
        if (this.isPlaying && !this.customSource) {
          this.playTone(note.freq);
        }
      }, note.delay);
    });

    this.timer = setInterval(() => {
      if (!this.isPlaying || this.customSource) return;
      this.notes.forEach((note) => {
        setTimeout(() => {
          if (this.isPlaying && !this.customSource) {
            this.playTone(note.freq);
          }
        }, note.delay);
      });
    }, this.loopDuration);
  }

  play() {
    this.initContext();
    this.isPlaying = true;

    if (this.customSource && this.audioElement) {
      this.audioElement.play().catch((err) => {
        console.warn("Audio autoplay blocked by browser, fallback to synth", err);
        this.startArpeggio();
      });
    } else {
      this.startArpeggio();
    }
    this.notify();
  }

  pause() {
    this.isPlaying = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.notify();
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify() {
    this.listeners.forEach((cb) => cb({ isPlaying: this.isPlaying, volume: this.volume }));
  }
}

const weddingMusic = new WeddingMusicEngine();


  // --- src/components/IntroScreen.js ---
/**
 * Cinematic Opening Ceremony Engine - 10 Artisanal Bespoke Spatial Intros
 * ZERO generic popups. ZERO shared buttons. ZERO phone emojis.
 * 
 * 1. Vietnamese Heritage: Cổng Hoàng Thành Cung Đình Sơn Son Thếp Vàng & Đôi Sư Tử Đồng
 * 2. Minimalist Modern: Khối Đá Kiến Trúc Monolith Asymmetrical Split & Vệt Khắc Kim Cương
 * 3. Luxury Gold Foil: Phong Bì Nhung Đen 3D Lật Nắp Tam Giác & Con Dấu Sáp Hoàng Gia 24K
 * 4. Pressed Botanical: Mặt Kính Nhà Kính Ép Tiêu Bản Thảo Mộc Đọng Sương Ban Mai
 * 5. Bohemian Rustic: Chiếc Đĩa Than Cổ Điển & Cần Kim Đồng Thau Hạ Nhạc (Vintage Turntable)
 * 6. Washi Ikebana Zen: Nét Mực Thiền Ensō Vẽ Vòng Tròn Vô Tận & Nghiên Mực Suzuri
 * 7. Art Deco 1920s: Ráp Nối Bảo Vật Kim Cương Gatsby & Ma Trận Khóa Cổng Vàng
 * 8. Tropical Destination: Đóng Mộc Hải Quan, Gập Bao Vé & Máy Bay Cất Cánh
 * 9. K-Wedding Minimal: Album Khung Vải Linen Cheongdam Studio, Vén Giấy Can Mờ & Tháo Nơ Lụa
 * 10. Watercolor Romance: Đầu Cọ Chấm Nước, Loang Màu Wet-on-Wet Trên Giấy Cotton & Nhũ Vàng
 */

function renderIntroScreen({ config, activeTemplate, isOpen }) {
  if (isOpen || !config.intro.enabled) {
    return "";
  }

  const templateId = activeTemplate.id;
  const couple = config.couple;
  const heroImg = `./assets/images/couples/${templateId}.jpg`;

  const renderers = {
    'vietnamese-heritage': renderVietnameseGates,
    'minimalist-modern': renderMinimalistFlutedGlass,
    'luxury-gold-foil': renderLuxuryVelvetEnvelope,
    'pressed-botanical': renderBotanicalGreenhouse,
    'bohemian-rustic': renderBohoVinylRecord,
    'washi-ikebana-zen': renderZenEnsoStroke,
    'art-deco-1920s': renderArtDecoVault,
    'tropical-destination': renderTropicalBoardingPass,
    'k-wedding-minimal': renderKWeddingStudioFolio,
    'watercolor-romance': renderWatercolorBloom
  };

  const renderer = renderers[templateId] || renderVietnameseGates;
  return renderer({ config, couple, heroImg, templateId });
}

// -------------------------------------------------------------------------
// 1. VIETNAMESE HERITAGE: CỔNG HOÀNG THÀNH SƠN SON THẾP VÀNG
// -------------------------------------------------------------------------
// 1. VIETNAMESE HERITAGE: CỔNG HOÀNG THÀNH SƠN SON THẾP VÀNG
// -------------------------------------------------------------------------
function renderVietnameseGates({ couple }) {
  return `
    <div id="envelope-scene" class="cinematic-gate scene-vietnamese-palace">
      <div class="palace-arch-frame">
        <div class="palace-imperial-plaque">
          <span class="plaque-dragon-ornament left">❖</span>
          <span class="plaque-title">TRIỀU NGUYỄN • KHAI MÔN HỶ SỰ</span>
          <span class="plaque-dragon-ornament right">❖</span>
        </div>

        <div class="palace-couplet left-couplet">LOAN PHỤNG HÒA MINH</div>
        <div class="palace-couplet right-couplet">PHU THÊ GIAO BÁI</div>

        <div class="palace-doors-stage">
          <div class="palace-door door-left">
            <div class="door-wood-grain"></div>
            <div class="door-studs-grid">
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
            </div>
            <button class="lion-knocker-btn knocker-left" data-intro-trigger="true" title="Gõ vòng đồng để mở cổng">
              <div class="lion-mask">
                <svg viewBox="0 0 40 40" class="w-8 h-8 fill-[#d89f38]">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#d89f38" stroke-width="2"/>
                  <path d="M12 24 C14 16, 26 16, 28 24 Z" />
                  <circle cx="16" cy="18" r="2" fill="#d89f38"/>
                  <circle cx="24" cy="18" r="2" fill="#d89f38"/>
                </svg>
              </div>
              <div class="bronze-ring ring-left"></div>
            </button>
          </div>

          <div class="palace-door door-right">
            <div class="door-wood-grain"></div>
            <div class="door-studs-grid">
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
            </div>
            <button class="lion-knocker-btn knocker-right" data-intro-trigger="true" title="Gõ vòng đồng để mở cổng">
              <div class="lion-mask">
                <svg viewBox="0 0 40 40" class="w-8 h-8 fill-[#d89f38]">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#d89f38" stroke-width="2"/>
                  <path d="M12 24 C14 16, 26 16, 28 24 Z" />
                  <circle cx="16" cy="18" r="2" fill="#d89f38"/>
                  <circle cx="24" cy="18" r="2" fill="#d89f38"/>
                </svg>
              </div>
              <div class="bronze-ring ring-right"></div>
            </button>
          </div>

          <div class="door-center-seal-wrapper">
            <button id="intro-open-trigger" class="door-song-hy-seal palace-double-happiness-seal" data-intro-trigger="true" title="Chạm Song Hỷ Khai Cổng">
              <span class="seal-inner-sub seal-kicker">LỄ THÀNH HÔN</span>
              <span class="seal-song-hy-text seal-character">囍</span>
              <strong class="seal-couple-names seal-couple"><span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> • <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span></strong>
              <small class="seal-date-text seal-date">28 • 11 • 2026</small>
              <span class="seal-touch-hint seal-action">[ GÕ VÒNG ĐỒNG KHAI MÔN ]</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------------------
// 2. MINIMALIST MODERN: ARCHITECTURAL FLUTED REEDED GLASS & BRUSHED BRASS PARTITION
// -------------------------------------------------------------------------
function renderMinimalistFlutedGlass({ couple, heroImg }) {
  return `
    <div id="envelope-scene" class="cinematic-gate scene-fluted-glass scene-minimalist-modern">
      <!-- Ambient Architectural Lighting & Gallery Tone -->
      <div class="fluted-glass-ambient-backdrop"></div>
      <div class="architectural-hairline-grid"></div>

      <div class="fluted-gallery-stage">
        
        <!-- Top Editorial Architectural Metadata -->
        <div class="fluted-meta-top">
          <div class="meta-item">
            <span class="meta-label">CURATED ARCHIVE</span>
            <span class="meta-value">RESIDENCE // 02</span>
          </div>
          <div class="meta-item text-center">
            <span class="meta-label">ARCHITECTURAL APERTURE</span>
            <span class="meta-value">REEDED FLUTED GLASS</span>
          </div>
          <div class="meta-item text-right">
            <span class="meta-label">COORDINATES</span>
            <span class="meta-value">10.7769° N • 106.7009° E</span>
          </div>
        </div>

        <!-- 3D Architectural Double-Door Rig with Fluted Reeded Glass -->
        <div class="fluted-doors-rig">
          
          <!-- Top Architectural Sliding Steel Track & Rollers -->
          <div class="architectural-slide-rail">
            <div class="rail-steel-bar"></div>
            <div class="rail-roller roller-left-1"></div>
            <div class="rail-roller roller-left-2"></div>
            <div class="rail-roller roller-right-1"></div>
            <div class="rail-roller roller-right-2"></div>
          </div>

          <!-- Underlying Clear Couple Wedding Portrait (Revealed as doors part) -->
          <div class="fluted-revealed-gallery">
            <img src="${heroImg}" class="revealed-couple-portrait" alt="${couple.groomShortName} &amp; ${couple.brideShortName}" />
            <div class="revealed-curation-overlay">
              <span class="curation-edition">THE WEDDING ARCHIVE // FIRST EDITION</span>
              <h2 class="curation-couple-title"><span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> <span class="curation-slash">/</span> <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span></h2>
              <p class="curation-meta">28.11.2026 • HO CHI MINH CITY</p>
            </div>
          </div>

          <!-- Left Fluted Reeded Glass Sliding Door -->
          <div class="fluted-glass-door door-slide-left">
            <div class="reeded-glass-texture"></div>
            <div class="glass-diffused-glow"></div>
            <div class="glass-metal-border"></div>
            <!-- Swiss Typography on Left Glass -->
            <div class="glass-door-editorial">
              <span class="editorial-numeral">01 / UNION</span>
              <h3 class="editorial-name">${couple.groomShortName}</h3>
              <p class="editorial-detail">GROOM // SUITE NO. 28</p>
            </div>
            <!-- Left Solid Brushed Champagne Brass Handle -->
            <div class="door-brass-handle handle-left">
              <div class="handle-bar-pillar"></div>
              <div class="handle-grip-ribs"></div>
            </div>
          </div>

          <!-- Right Fluted Reeded Glass Sliding Door -->
          <div class="fluted-glass-door door-slide-right">
            <div class="reeded-glass-texture"></div>
            <div class="glass-diffused-glow"></div>
            <div class="glass-metal-border"></div>
            <!-- Swiss Typography on Right Glass -->
            <div class="glass-door-editorial">
              <span class="editorial-numeral">02 / HARMONY</span>
              <h3 class="editorial-name">${couple.brideShortName}</h3>
              <p class="editorial-detail">BRIDE // ATELIER NO. 11</p>
            </div>
            <!-- Right Solid Brushed Champagne Brass Handle -->
            <div class="door-brass-handle handle-right">
              <div class="handle-bar-pillar"></div>
              <div class="handle-grip-ribs"></div>
            </div>
          </div>

          <!-- Central Magnetic Brushed Brass Interlock Clasp -->
          <div class="central-magnetic-interlock">
            <div class="interlock-brass-cylinder">
              <span class="interlock-monogram">NM ❖ MA</span>
            </div>
            <div class="interlock-laser-hairline"></div>
          </div>

        </div>

        <!-- Architectural Touch Trigger Button -->
        <div class="fluted-trigger-zone">
          <button id="intro-open-trigger" class="fluted-slide-btn" data-intro-trigger="true" title="Chạm trượt mở vách kính gân sọc">
            <span class="slide-bracket">[</span>
            <span class="slide-arrow-left">⟵</span>
            <span class="slide-label">TRƯỢT MỞ VÁCH KÍNH // SLIDE ARCHITECTURAL PARTITION</span>
            <span class="slide-arrow-right">⟶</span>
            <span class="slide-bracket">]</span>
            <small class="slide-sub">FLUTED REEDED GLASS • HÉ LỘ KHÔNG GIAN HÔN LỄ ĐƯƠNG ĐẠI</small>
          </button>
        </div>

        <!-- Bottom Architectural Colophon -->
        <div class="fluted-colophon-bottom">
          <span>SPEC: 12MM REEDED ARCHITECTURAL GLASS • SOLID BRUSHED BRASS</span>
          <span>CURATED BY EVERAFTER STUDIO // ARCHITECTURAL COLLECTION</span>
        </div>

      </div>
    </div>
  `;
}

// -------------------------------------------------------------------------
// 3. LUXURY GOLD FOIL: 3D REALISTIC ROYAL VELVET ENVELOPE & 24K WAX SEAL
// -------------------------------------------------------------------------
function renderLuxuryVelvetEnvelope({ couple }) {
  return `
    <div id="envelope-scene" class="cinematic-gate scene-luxury-envelope">
      <div class="luxury-chandelier-top">
        <div class="chandelier-suspension"></div>
        <div class="chandelier-prisms">⚜ • ⚜ • ⚜</div>
      </div>

      <div class="envelope-3d-stage">
        <div class="envelope-3d-package">
          <!-- Interior Letter -->
          <div class="envelope-interior-letter">
            <div class="letter-filigree-rim"></div>
            <p class="letter-top-french">RÉPUBLIQUE DE L'AMOUR // PARIS</p>
            <h2 class="letter-couple-heading letter-couple-names"><span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span></h2>
            <p class="letter-invitation-prose">Trân trọng kính mời quý khách tham dự lễ thành hôn</p>
            <span class="letter-date-line letter-gilded-date">SAMEDI, 28 NOVEMBRE 2026</span>
            <div class="letter-gold-flourish">❖ • ❖</div>
          </div>

          <!-- Velvet Envelope Pocket -->
          <div class="envelope-pocket-front envelope-body-pocket">
            <div class="envelope-front-banner">
              <span class="text-amber-400">❖</span>
              <span class="banner-title text-amber-200 text-xs tracking-widest font-serif uppercase">LE GRAND BAL DU MARIAGE</span>
              <span class="text-amber-400">❖</span>
            </div>
          </div>

          <!-- Triangular Flap with Gilded Piping -->
          <div class="envelope-triangular-flap envelope-top-flap-3d"></div>

          <!-- Sculpted 24K Gold Wax Seal Centered -->
          <div class="envelope-wax-seal-wrapper">
            <button id="intro-open-trigger" class="sculpted-24k-wax-seal luxury-seal-btn" data-intro-trigger="true" title="Chạm mở con dấu hoàng gia">
              <span class="wax-star-top wax-fleur">⚜</span>
              <strong class="wax-monogram-initials wax-monogram">M &amp; A</strong>
              <small class="wax-year-sub wax-date">28 • 11 • 2026</small>
              <em class="wax-touch-hint wax-prompt">[ CHẠM MỞ CON DẤU HOÀNG GIA ]</em>
            </button>
          </div>
        </div>

        <div class="envelope-stage-caption">
          <span>❖ LE GRAND BAL DU MARIAGE • ROYAL NOIR EDITION ❖</span>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------------------
// 4. PRESSED BOTANICAL: THE ARTISANAL HERBARIUM FLOWER PRESS & POP-UP BLOOM
// -------------------------------------------------------------------------
function renderBotanicalGreenhouse({ couple }) {
  return `
    <div id="envelope-scene" class="cinematic-gate scene-botanical-press scene-botanical-greenhouse">
      <!-- Warm Morning Sunbeam in Conservatory Archive -->
      <div class="botanical-sunbeam-backdrop"></div>

      <div class="botanical-press-stage">
        
        <!-- Top Naturalist Brass Crest -->
        <div class="botanical-header-crest">
          <div class="botanical-crest-glyphs">🌿 • ❖ • 🌿</div>
          <h3 class="botanical-crest-title">ROYAL BOTANICAL ARCHIVE • NO. 1128</h3>
          <p class="botanical-crest-sub">NATURALIST HERBARIUM SPECIMEN PRESS // CAMBRIDGE 1892</p>
        </div>

        <!-- The 3D Wooden Herbarium Flower Press Apparatus -->
        <div class="herbarium-press-rig">
          
          <!-- 4 Antique Brass Butterfly Wing-Nuts (Ốc Xiết Cánh Bướm Bằng Đồng ở 4 Góc) -->
          <div class="brass-wingnut nut-top-left" title="Ốc xiết cánh bướm đồng">
            <div class="wingnut-threaded-bolt"></div>
            <div class="wingnut-butterfly-wings">
              <span class="wing-left"></span>
              <span class="wing-center-collar">❖</span>
              <span class="wing-right"></span>
            </div>
          </div>
          <div class="brass-wingnut nut-top-right" title="Ốc xiết cánh bướm đồng">
            <div class="wingnut-threaded-bolt"></div>
            <div class="wingnut-butterfly-wings">
              <span class="wing-left"></span>
              <span class="wing-center-collar">❖</span>
              <span class="wing-right"></span>
            </div>
          </div>
          <div class="brass-wingnut nut-bottom-left" title="Ốc xiết cánh bướm đồng">
            <div class="wingnut-threaded-bolt"></div>
            <div class="wingnut-butterfly-wings">
              <span class="wing-left"></span>
              <span class="wing-center-collar">❖</span>
              <span class="wing-right"></span>
            </div>
          </div>
          <div class="brass-wingnut nut-bottom-right" title="Ốc xiết cánh bướm đồng">
            <div class="wingnut-threaded-bolt"></div>
            <div class="wingnut-butterfly-wings">
              <span class="wing-left"></span>
              <span class="wing-center-collar">❖</span>
              <span class="wing-right"></span>
            </div>
          </div>

          <!-- Hanging Naturalist Archival Field Tag with Twine (Thẻ mẫu vật thực địa buộc dây cói) -->
          <div class="botanical-hanging-field-tag">
            <div class="field-tag-twine"></div>
            <div class="field-tag-kraft">
              <span class="field-tag-eyelet"></span>
              <div class="field-tag-header">SPECIMEN ARCHIVE</div>
              <strong class="field-tag-taxa">AMOR AETERNUS</strong>
              <small class="field-tag-meta">NO. 1128 • HERBARIUM</small>
            </div>
          </div>

          <!-- Antique Brass Naturalist Magnifying Loupe (Kính lúp thực vật học) -->
          <div class="naturalist-brass-loupe" title="Kính lúp thực vật học">
            <div class="loupe-brass-rim">
              <div class="loupe-glass-sheen"></div>
            </div>
            <div class="loupe-carved-handle"></div>
          </div>

          <!-- Leather Compression Straps with Brass Buckles (Dây da nẹp ép) -->
          <div class="press-leather-strap strap-left">
            <div class="strap-stitch"></div>
            <div class="strap-brass-buckle"></div>
          </div>
          <div class="press-leather-strap strap-right">
            <div class="strap-stitch"></div>
            <div class="strap-brass-buckle"></div>
          </div>

          <!-- Top Carved Oak Wooden Board (Nhấc lên khi mở) -->
          <div class="press-top-oak-board">
            <div class="oak-wood-grain"></div>
            <div class="oak-bevel-edge"></div>
            <div class="oak-brass-corner corner-tl"></div>
            <div class="oak-brass-corner corner-tr"></div>
            <div class="oak-brass-corner corner-bl"></div>
            <div class="oak-brass-corner corner-br"></div>
            <!-- Hand-carved Gold Foil Monogram Emblem on Oak -->
            <div class="oak-cover-monogram">
              <span class="oak-crest-branch">🌿 • ❖ • 🌿</span>
              <h3 class="oak-couple-name"><span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span></h3>
              <p class="oak-provenance-tag">BÀN ÉP HOA THẢO MỘC HOÀNG GIA // ROYAL HERBARIUM PRESS</p>
              <div class="oak-brass-escutcheon">
                <span class="escutcheon-keyhole">◈</span>
              </div>
              <small class="oak-date-stamp">COLLECTION NO. 1128 • 28.11.2026</small>
            </div>
          </div>

          <!-- Living Botanical Sprout / Flower Bloom Overlay (Bursting into life on open) -->
          <div class="pop-up-living-garden">
            <div class="blooming-vine vine-left">
              <svg viewBox="0 0 140 260" class="blooming-svg">
                <path d="M 20,250 Q 5,160 55,90 Q 75,40 50,5" stroke="#4ade80" stroke-width="3" fill="none" class="sprouting-stem"/>
                <circle cx="50" cy="5" r="9" fill="#f43f5e" class="blooming-flower-bud"/>
                <ellipse cx="25" cy="180" rx="14" ry="7" transform="rotate(-30 25 180)" fill="#22c55e" class="sprouting-leaf"/>
                <ellipse cx="60" cy="130" rx="16" ry="8" transform="rotate(35 60 130)" fill="#16a34a" class="sprouting-leaf"/>
                <ellipse cx="35" cy="80" rx="13" ry="6" transform="rotate(-20 35 80)" fill="#4ade80" class="sprouting-leaf"/>
              </svg>
            </div>
            <div class="blooming-vine vine-right">
              <svg viewBox="0 0 140 260" class="blooming-svg">
                <path d="M 120,250 Q 135,160 85,90 Q 65,40 90,5" stroke="#4ade80" stroke-width="3" fill="none" class="sprouting-stem"/>
                <circle cx="90" cy="5" r="9" fill="#fb923c" class="blooming-flower-bud"/>
                <ellipse cx="115" cy="180" rx="14" ry="7" transform="rotate(30 115 180)" fill="#22c55e" class="sprouting-leaf"/>
                <ellipse cx="80" cy="130" rx="16" ry="8" transform="rotate(-35 80 130)" fill="#16a34a" class="sprouting-leaf"/>
                <ellipse cx="105" cy="80" rx="13" ry="6" transform="rotate(20 105 80)" fill="#4ade80" class="sprouting-leaf"/>
              </svg>
            </div>
            <!-- Fluttering Botanical Butterflies -->
            <div class="botanical-butterflies">
              <span class="paper-butterfly bfly-1">❖</span>
              <span class="paper-butterfly bfly-2">❖</span>
            </div>

            <!-- Wild Vines Climbing Beyond the Frame with Golden Spores -->
            <div class="climbing-wild-vines">
              <svg viewBox="0 0 520 460" class="climbing-vines-svg">
                <path d="M 60,380 Q 15,220 30,120 Q 40,40 100,20" stroke="#4ade80" stroke-width="2.8" fill="none" class="climbing-stem-left"/>
                <path d="M 460,380 Q 505,220 490,120 Q 480,40 420,20" stroke="#4ade80" stroke-width="2.8" fill="none" class="climbing-stem-right"/>
                <circle cx="100" cy="20" r="8" fill="#fb7185" class="climbing-flower flower-l"/>
                <circle cx="420" cy="20" r="8" fill="#fb923c" class="climbing-flower flower-r"/>
              </svg>
              <div class="botanical-floating-spores">
                <span class="spore sp-1">✦</span>
                <span class="spore sp-2">✦</span>
                <span class="spore sp-3">✦</span>
              </div>
            </div>
          </div>

          <!-- Inside Press: Handmade Deckled Cotton Specimen Sheet -->
          <div class="press-deckled-parchment">
            <div class="parchment-deckle-edge"></div>
            
            <!-- Pinned Real Pressed Specimens -->
            <div class="pinned-dried-specimens">
              <div class="dried-specimen sprig-eucalyptus">
                <svg viewBox="0 0 80 160" class="dried-flora-svg">
                  <path d="M 40,155 Q 30,100 45,50 Q 55,20 40,5" stroke="#5a735e" stroke-width="2" fill="none"/>
                  <ellipse cx="28" cy="110" rx="12" ry="6" transform="rotate(-25 28 110)" fill="#68846c"/>
                  <ellipse cx="52" cy="75" rx="13" ry="6.5" transform="rotate(25 52 75)" fill="#78967c"/>
                  <ellipse cx="32" cy="45" rx="10" ry="5" transform="rotate(-20 32 45)" fill="#8ba88f"/>
                </svg>
                <div class="brass-specimen-pin pin-1"></div>
                <span class="botanical-taxa-label">Eucalyptus Cinerea</span>
              </div>

              <div class="dried-specimen sprig-fern">
                <svg viewBox="0 0 80 160" class="dried-flora-svg">
                  <path d="M 40,155 Q 50,100 35,50 Q 25,20 40,5" stroke="#4d6150" stroke-width="2" fill="none"/>
                  <path d="M 40,120 Q 60,110 70,115" stroke="#4d6150" stroke-width="1.6" fill="none"/>
                  <path d="M 40,95 Q 20,85 10,90" stroke="#4d6150" stroke-width="1.6" fill="none"/>
                  <path d="M 40,70 Q 58,60 68,65" stroke="#4d6150" stroke-width="1.6" fill="none"/>
                  <circle cx="70" cy="114" r="2.5" fill="#c07860"/>
                  <circle cx="10" cy="89" r="2.5" fill="#c07860"/>
                  <circle cx="68" cy="64" r="2.5" fill="#c07860"/>
                </svg>
                <div class="brass-specimen-pin pin-2"></div>
                <span class="botanical-taxa-label">Polypodiophyta Dry</span>
              </div>
            </div>

            <!-- Specimen Archive Label -->
            <div class="parchment-archive-body">
              <span class="archive-accession-code">HERBARIUM SPECIMEN // ACCESSION NO. 2811</span>
              <h2 class="archive-couple-heading"><span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span></h2>
              <div class="archive-divider-leaf">🌿 • ❖ • 🌿</div>
              <p class="archive-subtext">HÔN LỄ THẢO MỘC VĨNH CỬU • BOTANICAL COMMUNION</p>
              <span class="archive-date-tag">28 • 11 • 2026</span>
              <p class="archive-botanist-quote">"Tình yêu đích thực như mầm sống thảo mộc, dẫu ép qua thời gian vẫn bung nở ngát hương"</p>
            </div>

            <!-- Botanical Wax Seal on Deckle Sheet -->
            <div class="parchment-beeswax-seal">
              <span class="seal-fern-leaf">🌿</span>
              <small>VERIFIED</small>
            </div>

          </div>

        </div>

        <!-- Interactive Action Trigger Button -->
        <div class="press-trigger-station">
          <button id="intro-open-trigger" class="press-unfasten-btn morning-dewdrop-target dew-wipe-btn" data-intro-trigger="true" title="Chạm mở ốc xiết bàn ép hoa">
            <span class="press-btn-icon">
              <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current text-[#d4b285]">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </span>
            <div class="press-btn-text">
              <strong>NỚI ỐC XIẾT &amp; MỞ BÀN ÉP HOA // UNFASTEN HERBARIUM PRESS</strong>
              <small>XOAY 4 ỐC CÁNH BƯỚM ĐỒNG • NHẤC NẸP GỖ • ĐÓN HOA HỒI SINH NỞ RỘ</small>
            </div>
          </button>
        </div>

        <div class="botanical-footer-tag">
          <span>THE ARTISANAL NATURALIST FLOWER PRESS • HANDMADE COTTON DECKLE ARCHIVE</span>
        </div>

      </div>
    </div>
  `;
}

// -------------------------------------------------------------------------
// 5. BOHEMIAN RUSTIC: VINTAGE VINYL TURNTABLE & BRASS TONEARM
// -------------------------------------------------------------------------
function renderBohoVinylRecord({ couple }) {
  return `
    <div id="envelope-scene" class="cinematic-gate scene-boho-vinyl">
      <div class="turntable-wood-backdrop"></div>

      <!-- Retro Wooden Turntable Chassis -->
      <div class="turntable-deck-rig">
        <div class="turntable-wood-plinth">
          <!-- Cast Aluminum Platter -->
          <div class="aluminum-platter-sub">
            <!-- 12-Inch Vinyl Record Body -->
            <div class="vinyl-platter-body">
              <div class="vinyl-grooves-layer">
                <svg class="vinyl-groove-svg" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="195" class="groove-rim"></circle>
                  <circle cx="200" cy="200" r="175" class="groove-line"></circle>
                  <circle cx="200" cy="200" r="155" class="groove-line"></circle>
                  <circle cx="200" cy="200" r="135" class="groove-line"></circle>
                  <circle cx="200" cy="200" r="115" class="groove-line"></circle>
                  <circle cx="200" cy="200" r="95" class="groove-line"></circle>
                </svg>
                <div class="vinyl-light-sheen sheen-1"></div>
                <div class="vinyl-light-sheen sheen-2"></div>
              </div>

              <!-- Center Gold Vinyl Label -->
              <div class="vinyl-center-label">
                <span class="label-curved-top label-record-label">EVERAFTER RECORDS // 33 RPM</span>
                <span class="label-side-tag label-side-indicator">SIDE A • STEREO</span>
                <h3 class="label-track-title">OUR WEDDING</h3>
                <div class="label-couple-names"><span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span></div>
                <div class="label-date-tag">28 . 11 . 2026</div>
                <div class="vinyl-spindle-hole"></div>
              </div>
            </div>
          </div>

          <!-- Brass Tonearm Assembly -->
          <div class="turntable-tonearm-assembly">
            <div class="tonearm-pivot-base"></div>
            <div class="tonearm-counterweight"></div>
            <div class="tonearm-brass-arm"></div>
            <div class="tonearm-headshell">
              <div class="tonearm-cartridge"></div>
              <div class="tonearm-stylus-needle"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Play Trigger Button -->
      <div class="vinyl-trigger-zone">
        <button id="intro-open-trigger" class="vinyl-play-trigger" data-intro-trigger="true" title="Hạ kim đĩa than để phát nhạc">
          <span class="vinyl-needle-icon">
            <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current text-amber-500">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </span>
          <div class="vinyl-trigger-text">
            <strong>HẠ KIM ĐĨA THAN // PLAY RECORD</strong>
            <small>START THE WEDDING MELODY</small>
          </div>
        </button>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------------------
// 6. WASHI IKEBANA ZEN: PURE SUMI-E ENSŌ STROKE ON ECHIZEN WASHI PAPER
// -------------------------------------------------------------------------
function renderZenEnsoStroke({ couple }) {
  return `
    <div id="envelope-scene" class="cinematic-gate scene-zen-enso">
      <div class="washi-paper-canvas">
        <div class="zen-suzuri-stone">
          <div class="suzuri-well"></div>
        </div>

        <div class="zen-vertical-poetry">
          <span class="zen-kanji-col">一期一会 • NHẤT KỲ NHẤT HỘI</span>
          <span class="zen-names-col"><span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> ＆ <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span></span>
          <span class="zen-calendar-col">二〇二六年十一月二十八日</span>
        </div>

        <div class="enso-circle-stage">
          <svg class="enso-brush-svg" viewBox="0 0 400 400">
            <!-- Ghost path for visible preview -->
            <path class="enso-ghost-path" d="M 200, 60 C 290, 60, 340, 120, 340, 200 C 340, 290, 280, 340, 200, 340 C 110, 340, 60, 270, 60, 200 C 60, 130, 110, 62, 195, 62" />
            <!-- Active animated path -->
            <path class="enso-stroke-path" d="M 200, 60 C 290, 60, 340, 120, 340, 200 C 340, 290, 280, 340, 200, 340 C 110, 340, 60, 270, 60, 200 C 60, 130, 110, 62, 195, 62" />
          </svg>

          <!-- 3D Calligraphy Brush Rig (Cây cọ di chuyển vẽ trọn vẹn vòng tròn Ensō) -->
          <div class="zen-fude-brush-rig">
            <div class="fude-orbit-arm">
              <div class="fude-calligraphy-brush">
                <div class="fude-handle-shaft">
                  <div class="fude-bamboo-joint joint-1"></div>
                  <div class="fude-bamboo-joint joint-2"></div>
                </div>
                <div class="fude-brass-ferrule"></div>
                <div class="fude-bristle-cone">
                  <div class="fude-wet-sumi-tip"></div>
                </div>
                <!-- Splashing ink micro-particles trailing the brush tip -->
                <div class="fude-ink-spray">
                  <span class="ink-drop d1"></span>
                  <span class="ink-drop d2"></span>
                  <span class="ink-drop d3"></span>
                </div>
              </div>
            </div>
          </div>

          <div class="enso-center-zen-quote">
            <p>"Tâm tĩnh lặng như nước mùa thu, trọn đời tương hợp"</p>
          </div>
        </div>

        <div class="zen-cinnabar-hanko">
          <div class="hanko-seal-box">
            <span>囍</span>
            <small>結緣</small>
          </div>
        </div>

        <div class="zen-brush-trigger-zone">
          <button id="intro-open-trigger" class="zen-fude-trigger" data-intro-trigger="true" title="Chạm cọ đặt bút vẽ nét Ensō">
            <span class="fude-icon">
              <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current text-[#8c6843]">
                <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.71a.996.996 0 0 0-1.41 0L12 11.59l2.41 2.41 7.3-7.29c.39-.39.39-1.02 0-1.42z"/>
              </svg>
            </span>
            <div class="fude-label-block">
              <strong>CHẠM CỌ ĐẶT BÚT VẼ NÉT ENSŌ</strong>
              <small>ONE STROKE • INFINITE HARMONY</small>
            </div>
          </button>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// 7. ART DECO 1920s: YU-GI-OH MILLENNIUM PUZZLE ASSEMBLY & EYE OF WADJET AWAKENING
// -------------------------------------------------------------------------
function renderArtDecoVault({ couple }) {
  return `
    <div id="envelope-scene" class="cinematic-gate scene-millennium-puzzle scene-artdeco-talisman scene-gatsby-vault">
      <!-- Ancient Egyptian Millennium Chamber Backdrop -->
      <div class="millennium-chamber-backdrop">
        <div class="hieroglyph-drift-stars">
          <span class="h-glyph hg-1">𓀀</span>
          <span class="h-glyph hg-2">𓁀</span>
          <span class="h-glyph hg-3">𓂀</span>
          <span class="h-glyph hg-4">𓃭</span>
          <span class="h-glyph hg-5">𓄿</span>
          <span class="h-glyph hg-6">𓆣</span>
          <span class="h-glyph hg-7">𓇋</span>
          <span class="h-glyph hg-8">𓈖</span>
        </div>
        <!-- Egyptian Obelisk Sanctuary Doors flanking Left & Right -->
        <div class="pharaoh-gate-door door-left">
          <div class="pharaoh-column-stripes"></div>
          <div class="pharaoh-relief-symbol">𓂀</div>
        </div>
        <div class="pharaoh-gate-door door-right">
          <div class="pharaoh-column-stripes"></div>
          <div class="pharaoh-relief-symbol">𓃭</div>
        </div>
      </div>

      <!-- Main Millennium Puzzle Stage Rig -->
      <div class="millennium-stage-rig">

        <!-- Top Millennium Header Plaque -->
        <div class="millennium-header-plaque">
          <div class="millennium-crest-chains">
            <span class="chain-ring">◈</span>
            <span class="chain-divider">━━━━━</span>
            <span class="chain-eye">𓂀</span>
            <span class="chain-divider">━━━━━</span>
            <span class="chain-ring">◈</span>
          </div>
          <h2 class="millennium-artifact-title">TRÒ CHƠI NGÀN NĂM • MILLENNIUM PUZZLE</h2>
          <p class="millennium-artifact-sub">PHARAOH'S SACRED TREASURE // THỨC TỈNH CON MẮT HOÀNG KIM</p>
        </div>

        <!-- 3D Inverted Golden Pyramid Viewport -->
        <div class="millennium-pyramid-viewport">

          <!-- Concentric 3D Rotating Egyptian Hieroglyph Rune Rings -->
          <div class="millennium-magic-rune-ring ring-outer">
            <span class="rune-glyph">𓀀</span>
            <span class="rune-glyph">◈</span>
            <span class="rune-glyph">𓁀</span>
            <span class="rune-glyph">◈</span>
            <span class="rune-glyph">𓂀</span>
            <span class="rune-glyph">◈</span>
            <span class="rune-glyph">𓃭</span>
            <span class="rune-glyph">◈</span>
            <span class="rune-glyph">𓄿</span>
            <span class="rune-glyph">◈</span>
            <span class="rune-glyph">𓆣</span>
            <span class="rune-glyph">◈</span>
            <span class="rune-glyph">𓇋</span>
            <span class="rune-glyph">◈</span>
            <span class="rune-glyph">𓈖</span>
            <span class="rune-glyph">◈</span>
            <span class="rune-glyph">𓉐</span>
            <span class="rune-glyph">◈</span>
            <span class="rune-glyph">𓋹</span>
          </div>
          <div class="millennium-magic-rune-ring ring-inner"></div>

          <!-- Golden Hanging Chain Anchor Ring at Top -->
          <div class="millennium-chain-anchor">
            <div class="anchor-heavy-ring"></div>
            <div class="anchor-bracket"></div>
          </div>

          <!-- The Inverted Golden Pyramid Structure -->
          <div class="millennium-inverted-pyramid">
            <!-- Golden Facet Borders and 3D Edges -->
            <div class="pyramid-face-main">
              <!-- Geometric Puzzle Seams & Carved Hieroglyphs -->
              <svg viewBox="0 0 320 280" class="pyramid-carving-svg">
                <defs>
                  <linearGradient id="goldGradPyramid" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#fff6b3"/>
                    <stop offset="25%" stop-color="#e5b25d"/>
                    <stop offset="70%" stop-color="#9a702b"/>
                    <stop offset="100%" stop-color="#4a310a"/>
                  </linearGradient>
                  <linearGradient id="puzzleSeamGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#ffd700"/>
                    <stop offset="50%" stop-color="#fff9d2"/>
                    <stop offset="100%" stop-color="#ffd700"/>
                  </linearGradient>
                </defs>
                <!-- Inverted Triangle Outer Shell (Base at top, apex pointing down) -->
                <polygon points="160,268 12,24 308,24" fill="url(#goldGradPyramid)" stroke="#ffd700" stroke-width="4.5" stroke-linejoin="round"/>
                <!-- Inverted Triangle Inner Facet -->
                <polygon points="160,242 36,40 284,40" fill="#181208" stroke="#e5b25d" stroke-width="2.5"/>
                
                <!-- Interlocking Puzzle Block Seams (Yu-Gi-Oh Millennium puzzle lines) -->
                <path d="M 36,40 L 120,105 L 100,165 L 160,242" stroke="url(#puzzleSeamGlow)" stroke-width="2.8" fill="none" class="puzzle-seam-line line-1"/>
                <path d="M 284,40 L 200,105 L 220,165 L 160,242" stroke="url(#puzzleSeamGlow)" stroke-width="2.8" fill="none" class="puzzle-seam-line line-2"/>
                <path d="M 120,105 L 200,105" stroke="url(#puzzleSeamGlow)" stroke-width="2.8" fill="none" class="puzzle-seam-line line-3"/>
                <path d="M 100,165 L 220,165" stroke="url(#puzzleSeamGlow)" stroke-width="2.8" fill="none" class="puzzle-seam-line line-4"/>
                <path d="M 160,40 L 160,82" stroke="url(#puzzleSeamGlow)" stroke-width="2.2" fill="none" class="puzzle-seam-line line-5"/>
                <path d="M 78,72 L 120,105" stroke="url(#puzzleSeamGlow)" stroke-width="2" fill="none" class="puzzle-seam-line line-6"/>
                <path d="M 242,72 L 200,105" stroke="url(#puzzleSeamGlow)" stroke-width="2" fill="none" class="puzzle-seam-line line-7"/>

                <!-- Egyptian Glyphs carved onto the facets -->
                <text x="68" y="96" fill="#ffd700" font-size="13" opacity="0.75" font-family="serif">𓁀</text>
                <text x="238" y="96" fill="#ffd700" font-size="13" opacity="0.75" font-family="serif">𓃭</text>
                <text x="110" y="205" fill="#ffd700" font-size="12" opacity="0.7" font-family="serif">𓆣</text>
                <text x="196" y="205" fill="#ffd700" font-size="12" opacity="0.7" font-family="serif">𓄿</text>
              </svg>

              <!-- Empty Socket Cavity on Pyramid Face (Ổ Khuyết Chờ Lắp Con Mắt Hoàng Kim) -->
              <div class="millennium-empty-socket">
                <!-- Dashed Blueprint Ghost Outline of the Keystone Cavity -->
                <svg viewBox="0 0 160 115" class="socket-ghost-eye-svg">
                  <!-- Hollow Keystone Cavity Silhouette -->
                  <polygon points="80,108 14,12 146,12" fill="#0b0804" stroke="#ffd700" stroke-width="2" stroke-dasharray="5 4"/>
                  <!-- Ghost Eye of Wadjet Inside Socket -->
                  <path d="M 28,32 Q 80,14 132,32" stroke="rgba(255, 215, 0, 0.45)" stroke-width="2" stroke-dasharray="3 3" fill="none"/>
                  <path d="M 32,46 Q 80,24 128,46" stroke="rgba(255, 215, 0, 0.45)" stroke-width="2" stroke-dasharray="3 3" fill="none"/>
                  <path d="M 32,46 Q 80,68 128,46" stroke="rgba(255, 215, 0, 0.45)" stroke-width="2" stroke-dasharray="3 3" fill="none"/>
                  <path d="M 80,68 L 80,88" stroke="rgba(255, 215, 0, 0.4)" stroke-width="1.8" stroke-dasharray="2 2" fill="none"/>
                  <path d="M 106,56 Q 120,74 104,82" stroke="rgba(255, 215, 0, 0.4)" stroke-width="1.8" stroke-dasharray="2 2" fill="none"/>
                  <circle cx="80" cy="46" r="14" fill="rgba(0,0,0,0.6)" stroke="rgba(255, 215, 0, 0.5)" stroke-width="1.5" stroke-dasharray="3 3"/>
                </svg>

                <div class="socket-guidance-tag">
                  <span class="socket-rune-pulse">▼</span>
                  <span class="socket-caption">Ổ KHẢM CON MẮT HOÀNG KIM</span>
                </div>
                <div class="socket-magnetic-field"></div>
              </div>

              <!-- Divine Eye Flash Beam Eruption & Hologram Projection (Ignites when Eye is docked) -->
              <div class="millennium-eye-flash">
                <div class="flash-god-ray ray-v"></div>
                <div class="flash-god-ray ray-h"></div>
                <div class="flash-god-ray ray-d1"></div>
                <div class="flash-god-ray ray-d2"></div>
                <div class="flash-radial-core"></div>
                <!-- Sacred Hologram Wadjet Eye Burst -->
                <div class="wadjet-hologram-burst">
                  <span class="hologram-eye-symbol">𓂀</span>
                  <div class="hologram-expansion-wave"></div>
                </div>
              </div>

              <!-- Divine Shockwave Ring -->
              <div class="millennium-divine-shockwave"></div>

              <!-- The Floating Sacred Golden Eye Keystone Piece (Mảnh Ghép Con Mắt Hoàng Kim) -->
              <div class="millennium-floating-eye-piece">
                <!-- Magnetic Energy Arcs Linking Eye to Socket -->
                <div class="keystone-energy-arcs">
                  <div class="lightning-arc arc-1"></div>
                  <div class="lightning-arc arc-2"></div>
                  <div class="lightning-arc arc-3"></div>
                </div>

                <!-- The Sculpted Golden Eye Keystone Plate -->
                <div class="eye-sculpted-artifact">
                  <svg viewBox="0 0 160 115" class="floating-eye-svg">
                    <defs>
                      <linearGradient id="keystoneGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#fff6b3"/>
                        <stop offset="25%" stop-color="#ffd700"/>
                        <stop offset="70%" stop-color="#b8860b"/>
                        <stop offset="100%" stop-color="#4a310a"/>
                      </linearGradient>
                      <linearGradient id="keystoneCoreGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#2a1f0a"/>
                        <stop offset="100%" stop-color="#120c04"/>
                      </linearGradient>
                      <filter id="artifactGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#ffd700" flood-opacity="0.85"/>
                      </filter>
                    </defs>
                    <!-- Heavy Inverted Gold Keystone Plate Body -->
                    <polygon points="80,108 14,12 146,12" fill="url(#keystoneGoldGrad)" stroke="#ffffff" stroke-width="1.8" filter="url(#artifactGlow)"/>
                    <polygon points="80,102 20,18 140,18" fill="url(#keystoneCoreGrad)" stroke="#ffd700" stroke-width="1.5"/>

                    <!-- Embossed Golden Eye of Wadjet / Horus -->
                    <path d="M 28,32 Q 80,14 132,32" stroke="url(#keystoneGoldGrad)" stroke-width="4.2" stroke-linecap="round" fill="none"/>
                    <path d="M 32,46 Q 80,24 128,46" stroke="url(#keystoneGoldGrad)" stroke-width="3.8" fill="none"/>
                    <path d="M 32,46 Q 80,68 128,46" stroke="url(#keystoneGoldGrad)" stroke-width="3.8" fill="none"/>
                    <path d="M 80,68 L 80,90" stroke="url(#keystoneGoldGrad)" stroke-width="3.2" stroke-linecap="round" fill="none"/>
                    <path d="M 106,56 Q 122,76 104,85" stroke="url(#keystoneGoldGrad)" stroke-width="2.6" fill="none"/>

                    <!-- Radiant Amber/Gold Iris Core -->
                    <circle cx="80" cy="46" r="13" fill="#120c04" stroke="#ffd700" stroke-width="2.4"/>
                    <circle cx="80" cy="46" r="7.5" fill="url(#keystoneGoldGrad)"/>
                    <circle cx="80" cy="46" r="3" fill="#ffffff"/>

                    <!-- Carved Inscriptions directly on Keystone -->
                    <text x="80" y="27" text-anchor="middle" fill="#ffd700" font-size="8" font-family="serif" letter-spacing="2">𓇋 𓈖 𓂀</text>
                    <text x="80" y="100" text-anchor="middle" fill="#ffd700" font-size="7.5" font-family="'Cinzel', serif" font-weight="bold" letter-spacing="1">${couple.groomShortName} ❖ ${couple.brideShortName}</text>
                  </svg>

                  <div class="eye-piece-light-sweep"></div>
                </div>

                <!-- Magnetic Levitation Sparks -->
                <div class="keystone-magnetic-sparks">
                  <span class="spark s1">✦</span>
                  <span class="spark s2">𓂀</span>
                  <span class="spark s3">✦</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- Sacred Assembly Trigger Station -->
        <div class="millennium-trigger-station">
          <button id="intro-open-trigger" class="millennium-assemble-btn gatsby-vault-medallion" data-intro-trigger="true" title="Chạm để lắp con mắt vào kim tự tháp">
            <div class="millennium-btn-content">
              <span class="millennium-btn-icon">
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current text-[#ffd700]">
                  <polygon points="12,22 2,4 22,4" fill="none" stroke="#ffd700" stroke-width="2.2" stroke-linejoin="round"/>
                  <circle cx="12" cy="11" r="3.2" fill="#ffd700"/>
                </svg>
              </span>
              <div class="millennium-btn-text">
                <strong>𓂀 LẮP CON MẮT VÀO KIM TỰ THÁP // ASSEMBLE SACRED EYE</strong>
                <small>CHẠM KHẢM CON MẮT HOÀNG KIM • HOÀN TẤT BẢO VẬT NGÀN NĂM &amp; KHAI MỞ HÔN LỄ</small>
              </div>
            </div>
          </button>
        </div>

        <!-- Sacred Millennium Inscription -->
        <div class="millennium-sacred-footer">
          <span>THE MILLENNIUM PUZZLE • CHÂN ÁI NGÀN NĂM KẾT NỐI VĨNH HẰNG</span>
        </div>

      </div>
    </div>
  `;
}

// -------------------------------------------------------------------------
// 8. TROPICAL DESTINATION: FOLD TICKET DOSSIER & CINEMATIC AIRLINER TAKEOFF
// -------------------------------------------------------------------------
function renderTropicalBoardingPass({ couple, heroImg }) {
  return `
    <div id="envelope-scene" class="cinematic-gate scene-tropical-takeoff scene-tropical-boardingpass">
      <!-- Turquoise Ocean Backdrop with Sunlight Refraction Caustics -->
      <div class="tropical-sea-caustics"></div>

      <!-- Swaying Tropical Palm & Monstera Fronds Silhouette -->
      <div class="tropical-palm-silhouettes">
        <div class="palm-frond frond-left">
          <svg viewBox="0 0 200 160" class="w-48 h-36 opacity-30">
            <path d="M 0,0 Q 80,40 160,20 Q 180,60 120,90 Q 60,110 0,60 Z" fill="#0A4D54"/>
            <path d="M 20,0 Q 110,60 190,40 Q 170,90 90,130 Q 30,120 10,40 Z" fill="#2E704D"/>
          </svg>
        </div>
        <div class="palm-frond frond-right">
          <svg viewBox="0 0 200 160" class="w-48 h-36 opacity-30">
            <path d="M 200,0 Q 120,40 40,20 Q 20,60 80,90 Q 140,110 200,60 Z" fill="#0A4D54"/>
            <path d="M 180,0 Q 90,60 10,40 Q 30,90 110,130 Q 170,120 190,40 Z" fill="#2E704D"/>
          </svg>
        </div>
      </div>

      <!-- Floating Tropical Blossom Petals (Frangipani) -->
      <div class="tropical-petals-breeze">
        <span class="frangipani-petal fp-1"></span>
        <span class="frangipani-petal fp-2"></span>
        <span class="frangipani-petal fp-3"></span>
      </div>

      <!-- The Dossier & Airliner Stage -->
      <div class="tropical-dossier-flight-stage">
        
        <!-- Saddle Leather Travel Passport Folder with Foldable Flaps -->
        <div class="passport-leather-wallet passport-leather-dossier bi-fold-dossier">
          
          <div class="bi-fold-spread">
            <!-- Left Leaf: Couple Passport ID (Flips over 180 deg on close) -->
            <div class="dossier-leaf leaf-left">
              <!-- Inside Front Face: Passport ID -->
              <div class="leaf-face leaf-front passport-id-page">
                <div class="passport-gold-crest">
                  <span class="crest-icon">✦</span>
                  <h4>HỘ CHIẾU TÌNH YÊU // LOVE PASSPORT</h4>
                  <small>REPUBLIC OF HAPPINESS • VOYAGE 2026</small>
                </div>
                <div class="passport-id-content">
                  <div class="passport-photo-frame">
                    <img src="${heroImg}" alt="Couple" class="passport-couple-photo" />
                    <span class="photo-visa-stamp">VALID</span>
                  </div>
                  <div class="passport-meta-list">
                    <div class="meta-item"><label>PASSENGER:</label><strong><span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span></strong></div>
                    <div class="meta-item"><label>ORIGIN:</label><strong>SAIGON (SGN)</strong></div>
                    <div class="meta-item"><label>DESTINATION:</label><strong>BALI RESORT (DPS)</strong></div>
                    <div class="meta-item"><label>CLASS:</label><strong>VIP FIRST SUITE</strong></div>
                  </div>
                </div>
                <div class="passport-machine-code">
                  <span>P&lt;VNM${couple.groomShortName.toUpperCase()}&lt;&lt;${couple.brideShortName.toUpperCase()}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span>
                  <span>281120268VNM9999999M2611280&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;02</span>
                </div>
              </div>

              <!-- Outside Back Face: Saddle Leather with Gold Foil Airline Seal -->
              <div class="leaf-face leaf-back passport-cover-exterior">
                <div class="cover-stitch-border"></div>
                <div class="cover-gold-crest">
                  <span class="crest-eagle">✦</span>
                  <h3>EVERAFTER AIRWAYS</h3>
                  <p>FIRST CLASS TRAVEL DOSSIER</p>
                  <div class="cover-emblem">❖ • ⚜ • ❖</div>
                  <small>BALI RESORT • 28.11.2026</small>
                </div>
              </div>
            </div>

            <!-- Right Leaf: First Class Boarding Pass Ticket -->
            <div class="dossier-leaf leaf-right">
              <div class="luxury-boardingpass-rig dossier-interior-ticket">
                <div class="pass-main-ticket">
                  <div class="pass-ticket-header">
                    <span class="pass-airline-title">FIRST CLASS SUITE // EA-1128</span>
                    <span class="pass-flight-number">GATE 07 • PRIORITY VIP</span>
                  </div>

                  <div class="pass-route-row">
                    <div class="route-point">
                      <span class="airport-code">SGN</span>
                      <small>SAIGON</small>
                    </div>
                    <div class="route-flight-arc">
                      <svg viewBox="0 0 180 50" class="flight-arc-svg">
                        <path d="M 10,40 Q 90,5 170,40" fill="none" stroke="#f27a59" stroke-width="2.5" stroke-dasharray="5 4" class="arc-path"/>
                      </svg>
                      <div class="airplane-flight-icon">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current text-amber-400">
                          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                        </svg>
                        <span class="airplane-jet-flame"></span>
                      </div>
                    </div>
                    <div class="route-point text-right">
                      <span class="airport-code">DPS</span>
                      <small>BALI RESORT</small>
                    </div>
                  </div>

                  <div class="pass-passenger-grid">
                    <div class="passenger-cell">
                      <label>PASSENGER(S)</label>
                      <strong><span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span></strong>
                    </div>
                    <div class="passenger-cell">
                      <label>DATE &amp; TIME</label>
                      <strong>28 NOV 2026 // 16:30</strong>
                    </div>
                    <div class="passenger-cell">
                      <label>SEAT / CLASS</label>
                      <strong>01A &amp; 01B // VIP SUITE</strong>
                    </div>
                  </div>

                  <!-- Barcode & e-ticket verification strip -->
                  <div class="pass-barcode-strip">
                    <div class="barcode-bars">
                      <span></span><span></span><span></span><span></span><span></span>
                      <span></span><span></span><span></span><span></span><span></span>
                      <span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <span class="barcode-number">EA • 2811 • 2026 • VIP</span>
                  </div>
                </div>

                <!-- Crimson Customs & Immigration Rubber Stamp Overlay (Slam Animation) -->
                <div class="pass-customs-stamp-overlay">
                  <div class="customs-stamp-box">
                    <div class="stamp-star-row">✦ ✦ ✦</div>
                    <span class="stamp-authority">IMMIGRATION PASSPORT CONTROL</span>
                    <strong class="stamp-verdict">ENTRY GRANTED</strong>
                    <small class="stamp-location">BALI RESORT • 28.11.2026</small>
                    <span class="stamp-verified-seal">APPROVED FOR LOVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Touch Check-In Trigger Button -->
          <div class="boardingpass-trigger-zone takeoff-trigger-zone">
            <button id="intro-open-trigger" class="boardingpass-tear-btn takeoff-action-btn" data-intro-trigger="true" title="Chạm để đóng vé và cất cánh">
              <span class="checkin-stamp-icon">
                <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current text-amber-300">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </span>
              <div class="checkin-label-block">
                <strong>ĐÓNG VÉ &amp; CẤT CÁNH // FOLD TICKET &amp; FLY</strong>
                <small>CHẠM ĐÓNG MỘC HẢI QUAN, GẬP TẬP VÉ &amp; PHI CƠ CẤT CÁNH ĐẾN BALI</small>
              </div>
            </button>
          </div>

        </div>

        <!-- Cinematic 3D Luxury Airliner Taking Off Across Sky -->
        <div class="cinematic-airliner-takeoff">
          <div class="airliner-shadow"></div>
          <div class="airliner-jet-hull">
            <svg viewBox="0 0 220 110" class="airliner-svg">
              <defs>
                <linearGradient id="jetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#ffffff"/>
                  <stop offset="60%" stop-color="#e2e8f0"/>
                  <stop offset="100%" stop-color="#94a3b8"/>
                </linearGradient>
                <linearGradient id="jetGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#d4af37"/>
                  <stop offset="100%" stop-color="#ffd700"/>
                </linearGradient>
              </defs>
              <!-- Fuselage Body -->
              <path d="M 215,50 C 205,35 150,30 80,40 L 25,25 L 12,27 L 30,50 L 8,50 L 0,45 L 0,60 L 12,58 L 30,58 L 50,70 L 70,70 L 55,60 L 160,58 C 198,58 212,55 215,50 Z" fill="url(#jetGrad)"/>
              <!-- Golden Livery Stripe -->
              <path d="M 45,51 L 210,51 C 195,54 165,55 110,55 L 45,55 Z" fill="url(#jetGold)"/>
              <!-- Swept Wings -->
              <polygon points="120,50 65,105 90,105 150,50" fill="#cbd5e1" stroke="#94a3b8" stroke-width="0.8"/>
              <polygon points="82,100 88,105 86,95" fill="#ffd700"/>
              <!-- Jet Engine Nacelle -->
              <ellipse cx="108" cy="66" rx="16" ry="5.5" fill="#334155"/>
              <ellipse cx="118" cy="66" rx="3" ry="4.5" fill="#f59e0b"/>
              <!-- Afterburner Golden Flame -->
              <polygon points="94,64 78,66 94,68" fill="#38bdf8"/>
              <polygon points="92,65 84,66 92,67" fill="#ffffff"/>
              <!-- Cockpit & Cabin Windows -->
              <circle cx="140" cy="47" r="1.5" fill="#0f172a"/>
              <circle cx="150" cy="47" r="1.5" fill="#0f172a"/>
              <circle cx="160" cy="47" r="1.5" fill="#0f172a"/>
              <circle cx="170" cy="47" r="1.5" fill="#0f172a"/>
              <circle cx="180" cy="47" r="1.5" fill="#0f172a"/>
              <circle cx="190" cy="47" r="1.5" fill="#0f172a"/>
            </svg>
            <div class="airliner-vapor-trail trail-top"></div>
            <div class="airliner-vapor-trail trail-bottom"></div>
          </div>
        </div>

        <div class="takeoff-footer-tag">
          <span>FIRST CLASS PASSENGER DOSSIER • EVERAFTER AIRWAYS // BALI 2026</span>
        </div>

      </div>
    </div>
  `;
}

// -------------------------------------------------------------------------
// 9. K-WEDDING MINIMAL: CHEONGDAM STUDIO LINEN FOLIO & SATIN SILK RIBBON
// -------------------------------------------------------------------------
function renderKWeddingStudioFolio({ couple, heroImg }) {
  return `
    <div id="envelope-scene" class="cinematic-gate scene-kwedding-folio">
      <!-- Cheongdam Studio Soft 5500K Daylight Gradient -->
      <div class="seoul-studio-light-backdrop"></div>

      <!-- Luxury Stitched Linen Keepsake Folio -->
      <div class="studio-linen-folio">
        
        <!-- Linen Stitching Border Rim -->
        <div class="folio-stitch-border"></div>

        <!-- Framed Crystal Clear Studio Couple Portrait -->
        <div class="folio-photo-mat">
          <div class="photo-inner-shadow"></div>
          <img src="${heroImg}" class="folio-couple-photo" alt="${couple.groomShortName} & ${couple.brideShortName}" />
        </div>

        <!-- Translucent Milky Vellum Tracing Paper Sheet -->
        <div class="folio-vellum-sheet">
          <div class="vellum-paper-grain"></div>
          <div class="vellum-silver-calligraphy">
            <span class="hangul-vow-title">영원한 사랑과 약속</span>
            <span class="hangul-vow-sub">LỜI THỀ VĨNH CỬU • THE TIMELESS PLEDGE</span>
            <h2 class="vellum-names"><span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span></h2>
            <div class="vellum-date-seal">
              <span>SEOUL STUDIO ARCHIVE</span>
              <strong>2026 . 11 . 28</strong>
            </div>
          </div>
        </div>

        <!-- 3D Satin Silk Ribbon Assembly & Hand-Tied Bow Knot -->
        <div class="satin-ribbon-assembly">
          <div class="ribbon-horizontal-band band-left"></div>
          <div class="ribbon-horizontal-band band-right"></div>
          
          <div class="satin-bow-knot-rig">
            <div class="bow-center-core"></div>
            <div class="bow-loop loop-left"></div>
            <div class="bow-loop loop-right"></div>
            <div class="bow-tail tail-left"></div>
            <div class="bow-tail tail-right"></div>
          </div>
        </div>

        <!-- Untie Ribbon Button Trigger -->
        <div class="folio-trigger-zone">
          <button id="intro-open-trigger" class="untie-ribbon-btn" data-intro-trigger="true" title="Chạm để tháo nơ lụa và mở trang ảnh">
            <span class="ribbon-pearl-pin">✦</span>
            <div class="untie-label-block">
              <strong>THÁO NƠ LỤA CÔ DÂU // UNTIE SILK RIBBON</strong>
              <small>GENTLE PAGE LIFT • SEOUL STUDIO KEEPSAKE</small>
            </div>
          </button>
        </div>

      </div>
    </div>
  `;
}

// -------------------------------------------------------------------------
// 10. WATERCOLOR ROMANCE: SABLE BRUSH DIP & TURBULENT CAPILLARY PIGMENT BLOOM
// -------------------------------------------------------------------------
function renderWatercolorBloom({ couple }) {
  return `
    <div id="envelope-scene" class="cinematic-gate scene-watercolor-bloom">
      <!-- Embedded SVG Filter for Authentic Fluid Capillary Bleed -->
      <svg class="hidden-filter-defs" style="position: absolute; width: 0; height: 0; pointer-events: none;">
        <defs>
          <filter id="capillary-bleed-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="26" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <!-- 300gsm Cold-Press Cotton Watercolor Paper with Deckled Edge -->
      <div class="watercolor-arches-paper">
        <div class="paper-deckle-fringe"></div>

        <!-- Blind-Debossed Header -->
        <div class="watercolor-debossed-header">
          <span class="debossed-french-tag">L'AQUARELLE DE L'AMOUR // GIVERNY</span>
          <h2 class="debossed-names"><span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span></h2>
          <span class="debossed-date">SAMEDI, 28 NOVEMBRE 2026</span>
        </div>

        <!-- Liquid Watercolor Capillary Bloom Layer with Authentic Expansion -->
        <div class="capillary-bloom-stage">
          
          <!-- Concentric Organic Fluid Pigment Bleeds with SVG Displacement Filter -->
          <div class="fluid-pigment-reservoir">
            <div class="pigment-wash wash-peony-rose"></div>
            <div class="pigment-wash wash-french-lavender"></div>
            <div class="pigment-wash wash-sage-olive"></div>
            <div class="pigment-wash wash-champagne-gold"></div>
            <div class="pigment-gilded-veins"></div>
          </div>

          <!-- Central Pure Optical Waterdrop Lens -->
          <div class="pure-waterdrop-lens">
            <div class="waterdrop-surface-tension"></div>
            <div class="waterdrop-highlight"></div>
            <div class="water-ripple-ring ring-1"></div>
            <div class="water-ripple-ring ring-2"></div>
          </div>

          <!-- Fine Sable Artist Quill Brush Poised Above Drop -->
          <div class="artist-quill-brush">
            <div class="brush-wooden-handle"></div>
            <div class="brush-brass-ferrule"></div>
            <div class="brush-sable-hairs"></div>
            <div class="brush-wet-pigment-tip"></div>
          </div>

        </div>

        <!-- Poetic Script Quote -->
        <div class="watercolor-poetic-footer">
          <p>"Tựa một giọt màu mềm loang trên trang giấy trắng, tình yêu ngân vang"</p>
        </div>

        <!-- Fine Artist Brush Touch Trigger -->
        <div class="watercolor-brush-trigger-zone">
          <button id="intro-open-trigger" class="brush-dip-trigger-btn" data-intro-trigger="true" title="Chạm đầu cọ để loang màu nước">
            <span class="brush-quill-icon">
              <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current text-rose-500">
                <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.71a.996.996 0 0 0-1.41 0L12 11.59l2.41 2.41 7.3-7.29c.39-.39.39-1.02 0-1.42z"/>
              </svg>
            </span>
            <div class="brush-label-block">
              <strong>CHẠM ĐẦU CỌ LOANG MÀU NƯỚC</strong>
              <small>WET-ON-WET CAPILLARY BLEED &amp; GOLD SHIMMER</small>
            </div>
          </button>
        </div>

      </div>
    </div>
  `;
}


  // --- src/components/TemplateSwitcher.js ---
/**
 * Interactive Design Inspector & Template Switcher
 * Allows real-time switching of 10 templates, toggling & reordering 17 modules, personalizing guest names, and audio controls
 */

function renderTemplateSwitcher({
  templates,
  activeTemplateId,
  config,
  guestName,
  isPlaying,
  volume,
  isDrawerOpen,
  viewportMode
}) {
  const activeTemplate = templates.find((t) => t.id === activeTemplateId) || templates[0];

  return `
    <!-- Top Floating Inspector Bar (always above intro and modules) -->
    <!-- Top Floating Inspector Bar (always above intro and modules) -->
    <header class="fixed top-0 left-0 right-0 z-[99999] bg-stone-900/98 text-white backdrop-blur-md border-b border-stone-800 shadow-2xl transition-all overflow-hidden">
      <div class="max-w-7xl mx-auto px-2 sm:px-3 py-1.5 flex items-center justify-between gap-1.5 sm:gap-2 text-xs">
        
        <!-- Left: Branding & Dropdown Selector -->
        <div class="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
          <div class="flex items-center gap-1.5 pr-1.5 border-r border-stone-700 shrink-0">
            <span class="text-rose-400 font-bold tracking-wider uppercase text-[10px] sm:text-[11px]">EverAfter</span>
            <a href="showcase.html" class="px-2 py-0.5 rounded-full bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 font-bold border border-amber-400/40 text-[9px] sm:text-[10px] flex items-center gap-1 transition no-underline shadow-sm" title="Khám phá toàn bộ 30 mẫu thiệp cưới">
              <span>✦ 30 Mẫu Showcase</span>
            </a>
          </div>

          <!-- Quick Dropdown for 1-Click Access to all 10 Templates -->
          <div class="flex items-center gap-1 min-w-0">
            <select 
              id="template-select-dropdown" 
              class="bg-stone-800 border border-amber-400 text-amber-300 font-bold rounded-lg px-2 py-1 text-[11px] outline-none hover:bg-stone-700 cursor-pointer transition shadow-md max-w-[145px] sm:max-w-[260px] md:max-w-none truncate"
              title="Chọn 1 trong 10 Template Cưới độc nhất"
            >
              ${templates.map((t, idx) => `
                <option value="${t.id}" ${t.id === activeTemplateId ? 'selected' : ''}>
                  #${idx + 1} - ${t.shortName || t.name}
                </option>
              `).join('')}
            </select>
          </div>

          <!-- Active Concept Indicator Tag -->
          <div class="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800 border border-stone-700 text-stone-200 text-[11px] shrink-0">
            <span class="text-amber-400 font-mono text-[9px] uppercase tracking-wider font-bold">Intro Concept:</span>
            <span class="text-stone-100 font-medium truncate max-w-[280px]">${activeTemplate.introConcept || activeTemplate.tagline}</span>
          </div>

        </div>

        <!-- Right: Actions (Replay Intro, Guest Name, Music, Viewport, Drawer) -->
        <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          <!-- Prominent Replay Intro Button -->
          <button 
            id="replay-intro-btn" 
            aria-label="Kích hoạt lại màn hình Intro 3 giây độc nhất của template này"
            class="px-2.5 sm:px-3 py-1.5 min-h-[34px] sm:min-h-[36px] bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-lg text-[10.5px] sm:text-[11px] transition-all flex items-center gap-1 shadow-md active:scale-95 shrink-0" 
            title="Kích hoạt lại màn hình Intro 3 giây độc nhất của template này"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            <span class="tb-btn-text-mobile hidden sm:inline">Mở Lại</span>
          </button>

          <!-- Viewport Mode Buttons -->
          <div class="tb-hide-mobile hidden lg:flex items-center bg-stone-800 rounded-lg p-0.5 border border-stone-700">
            <button data-viewport="desktop" aria-label="Xem trước giao diện Desktop" class="viewport-btn p-1.5 rounded text-stone-300 hover:text-white ${viewportMode === 'desktop' ? 'bg-stone-700 text-white' : ''}" title="Desktop Full">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </button>
            <button data-viewport="tablet" aria-label="Xem trước giao diện Tablet 768px" class="viewport-btn p-1.5 rounded text-stone-300 hover:text-white ${viewportMode === 'tablet' ? 'bg-stone-700 text-white' : ''}" title="Tablet (768px)">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </button>
            <button data-viewport="mobile" aria-label="Xem trước giao diện Mobile 390px" class="viewport-btn p-1.5 rounded text-stone-300 hover:text-white ${viewportMode === 'mobile' ? 'bg-stone-700 text-white' : ''}" title="Mobile (390px)">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </button>
          </div>

          <!-- Guest Personalization Input Modal / Field -->
          <div class="tb-hide-mobile relative group hidden md:block">
            <div class="flex items-center bg-stone-800 border border-stone-700 rounded-lg px-2 py-1 text-[11px] gap-1.5">
              <span class="text-stone-400">Khách:</span>
              <input 
                type="text" 
                id="guest-name-input" 
                value="${guestName || 'Quý Khách'}" 
                class="bg-transparent border-none outline-none text-amber-300 w-20 sm:w-24 font-medium text-[11px]" 
                placeholder="Tên khách mời..."
                title="Thay đổi tên khách để test tính năng cá nhân hóa {guestName}"
              />
            </div>
          </div>

          <!-- Music Player Toggle -->
          <div class="flex items-center gap-1 bg-stone-800 border border-stone-700 rounded-lg px-2 py-1 shrink-0">
            <button id="toggle-music-btn" aria-label="${isPlaying ? 'Tắt nhạc nền cưới' : 'Bật nhạc nền cưới'}" class="flex items-center gap-1 text-stone-200 hover:text-amber-300 transition py-1 px-1.5" title="Bật/Tắt nhạc nền">
              ${isPlaying ? `
                <div class="flex items-end gap-0.5 h-3.5">
                  <span class="w-0.5 bg-amber-400 animate-audio-bar-1"></span>
                  <span class="w-0.5 bg-amber-400 animate-audio-bar-2"></span>
                  <span class="w-0.5 bg-amber-400 animate-audio-bar-3"></span>
                  <span class="w-0.5 bg-amber-400 animate-audio-bar-4"></span>
                </div>
                <span class="tb-btn-text-mobile hidden md:inline text-[10px] text-amber-300">Nhạc Bật</span>
              ` : `
                <svg class="w-3.5 h-3.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>
                <span class="tb-btn-text-mobile hidden md:inline text-[10px] text-stone-400">Tắt</span>
              `}
            </button>
            <input 
              type="range" 
              id="volume-slider" 
              min="0" 
              max="1" 
              step="0.05" 
              value="${volume}" 
              class="tb-hide-mobile w-10 h-1 accent-amber-400 bg-stone-700 rounded cursor-pointer hidden lg:inline" 
              title="Âm lượng"
            />
          </div>

          <!-- Drawer Toggle Button (17 Modules & Settings) -->
          <button id="toggle-drawer-btn" aria-label="Mở bảng quản lý 17 module và cài đặt" class="px-2.5 py-1.5 min-h-[34px] bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg text-[10.5px] sm:text-[11px] transition flex items-center gap-1 shadow shrink-0 active:scale-95">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            <span class="hidden sm:inline">17 Module (${config.modules.filter(m => m.enabled).length})</span>
            <span class="sm:hidden font-mono text-[10px]">17</span>
          </button>
        </div>

      </div>
    </header>

    <!-- Slide-over Drawer for 17 Modules Customization -->
    <div id="customizer-drawer" class="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-stone-900 text-stone-100 shadow-2xl border-l border-stone-800 transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto">
      <div class="p-5 border-b border-stone-800 flex items-center justify-between sticky top-0 bg-stone-900/95 backdrop-blur z-10">
        <div>
          <h3 class="font-bold text-base text-amber-400">Quản Lý 17 Module</h3>
          <p class="text-xs text-stone-400">Bật/tắt &amp; đổi thứ tự hiển thị tức thì</p>
        </div>
        <button id="close-drawer-btn" aria-label="Đóng bảng quản lý module" class="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <!-- Quick Action: Enable All / Disable All -->
      <div class="p-4 bg-stone-800/50 border-b border-stone-800 flex items-center justify-between text-xs">
        <span class="text-stone-300">Đang hiển thị: <strong class="text-amber-400">${config.modules.filter(m => m.enabled).length}</strong>/17</span>
        <div class="flex gap-2">
          <button id="enable-all-modules" class="px-2.5 py-1.5 bg-stone-700 hover:bg-stone-600 rounded text-stone-200 text-[11px] font-semibold cursor-pointer">Bật Tất Cả</button>
          <button id="disable-all-modules" class="px-2.5 py-1.5 bg-stone-700 hover:bg-stone-600 rounded text-stone-200 text-[11px] font-semibold cursor-pointer">Tắt Hết</button>
        </div>
      </div>

      <!-- Module List with Toggle & Reorder Buttons -->
      <div class="p-4 space-y-2" id="modules-reorder-list">
        ${config.modules.map((mod, index) => `
          <div class="flex items-center justify-between p-2.5 rounded-lg border ${mod.enabled ? 'bg-stone-800/80 border-stone-700' : 'bg-stone-900/50 border-stone-800 opacity-60'} transition">
            <div class="flex items-center gap-2.5 min-w-0">
              <input 
                type="checkbox" 
                data-module-id="${mod.id}" 
                aria-label="Bật hoặc tắt module ${mod.name}"
                class="module-toggle-checkbox w-4 h-4 rounded accent-amber-500 cursor-pointer" 
                ${mod.enabled ? 'checked' : ''}
              />
              <div class="truncate">
                <div class="text-xs font-semibold ${mod.enabled ? 'text-white' : 'text-stone-400'} flex items-center gap-1.5">
                  <span class="w-4 text-[10px] text-stone-500 font-mono">#${index + 1}</span>
                  <span class="truncate">${mod.name}</span>
                </div>
                <div class="text-[10px] text-stone-400 font-mono">id: ${mod.id} • ${mod.variant}</div>
              </div>
            </div>

            <!-- Reorder Buttons -->
            <div class="flex items-center gap-1 shrink-0 ml-2">
              <button 
                data-move-up="${mod.id}" 
                aria-label="Di chuyển module ${mod.name} lên trên"
                class="move-module-btn p-1.5 min-w-[32px] min-h-[32px] flex items-center justify-center rounded hover:bg-stone-700 text-stone-400 hover:text-white ${index === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}" 
                ${index === 0 ? 'disabled' : ''}
                title="Di chuyển lên trên"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
              </button>
              <button 
                data-move-down="${mod.id}" 
                aria-label="Di chuyển module ${mod.name} xuống dưới"
                class="move-module-btn p-1.5 min-w-[32px] min-h-[32px] flex items-center justify-center rounded hover:bg-stone-700 text-stone-400 hover:text-white ${index === config.modules.length - 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}" 
                ${index === config.modules.length - 1 ? 'disabled' : ''}
                title="Di chuyển xuống dưới"
              >
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Template Palette & DNA Summary Card -->
      <div class="p-4 m-4 rounded-xl bg-stone-800/70 border border-stone-700 text-xs">
        <h4 class="font-bold text-amber-300 mb-2 flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${activeTemplate.palette[0].hex}"></span>
          <span>${activeTemplate.name} Design DNA</span>
        </h4>
        <p class="text-stone-300 text-[11px] mb-2 leading-relaxed">${activeTemplate.tagline}</p>
        <div class="space-y-1 text-[11px] text-stone-400 font-mono">
          <div><strong class="text-stone-200">Layout:</strong> ${activeTemplate.layoutSkeleton}</div>
          <div><strong class="text-stone-200">Fonts:</strong> ${activeTemplate.fonts.display.split(',')[0]} / ${activeTemplate.fonts.body.split(',')[0]}</div>
          <div><strong class="text-stone-200">Motif:</strong> ${activeTemplate.motif}</div>
          <div><strong class="text-amber-300">Intro Concept:</strong> ${activeTemplate.introConcept || 'Bespoke Ceremony'}</div>
        </div>
        <div class="flex gap-2 mt-3 pt-2 border-t border-stone-700">
          ${activeTemplate.palette.map(p => `
            <div class="flex-1 text-center">
              <div class="h-6 rounded border border-white/20 mb-1" style="background-color: ${p.hex}" title="${p.name} (${p.hex})"></div>
              <div class="text-[9px] text-stone-400 truncate">${p.hex}</div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}


  // --- src/components/Modals.js ---
/**
 * Interactive Modals: Image Lightbox & Video Player
 */

function renderLightboxModal() {
  return `
    <div id="lightbox-modal" class="fixed inset-0 z-50 hidden bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <button id="close-lightbox-btn" aria-label="Đóng ảnh phóng to" class="absolute top-5 right-5 text-white/70 hover:text-white p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="max-w-4xl max-h-[85vh] flex flex-col items-center">
        <img id="lightbox-img" src="" alt="Enlarged gallery photo" class="max-h-[75vh] w-auto max-w-full rounded-xl shadow-2xl object-contain mb-3" />
        <div class="text-center text-white">
          <h4 id="lightbox-title" class="font-title font-bold text-lg"></h4>
          <p id="lightbox-caption" class="text-xs text-white/70 font-serif italic mt-0.5"></p>
        </div>
      </div>
    </div>
  `;
}

function renderVideoModal() {
  return `
    <div id="video-modal" class="fixed inset-0 z-50 hidden bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <button id="close-video-btn" aria-label="Đóng video cưới" class="absolute top-5 right-5 text-white/70 hover:text-white p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="max-w-4xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/20">
        <iframe 
          id="video-iframe" 
          class="w-full h-full" 
          src="" 
          title="Wedding Video" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
    </div>
  `;
}


  // --- src/components/modules/ModuleIntro.js ---
/**
 * Module 1: Intro Mở Thiệp (Hero Banner & Announcement)
 * 10 Radically Distinct Design Archetypes:
 * - vietnamese-heritage: Imperial Royal Scroll with red silk brocade, Song Hỷ seal, flanking couplets
 * - minimalist-modern: Architectural Swiss Monolith with raw GPS coordinates and monospace brackets
 * - luxury-gold-foil: Versailles 24K Gold Filigree Arch with royal monogram crest and gold shimmer
 * - pressed-botanical: Handmade Deckle-Edge Cotton Paper with pressed olive sprig and calligraphic seal
 * - bohemian-rustic: Pampas Grass & Macramé Sunburst Arch with warm terracotta desert sun
 * - washi-ikebana-zen: Kyoto Tea Pavilion with vertical Tategaki typography, Enso ink ring, and cinnabar seal
 * - art-deco-1920s: The Great Gatsby 1920s Golden Fan and stepped ziggurat marquee
 * - tropical-destination: First Class Boarding Pass & Resort Itinerary with coastal nautical coordinates
 * - k-wedding-minimal: Seoul Fashion Editorial Magazine Cover with 35mm Portra film metadata
 * - watercolor-romance: Monet Pastel Water Garden with pigment bleed washes and floating cherry blossoms
 */

function renderModuleIntro({ config, activeTemplate, moduleData }) {
  const content = moduleData.content || {};
  const couple = config.couple;
  const templateId = activeTemplate.id;

  const renderers = {
    'vietnamese-heritage': renderVietnameseHero,
    'minimalist-modern': renderMinimalistHero,
    'luxury-gold-foil': renderLuxuryHero,
    'pressed-botanical': renderBotanicalHero,
    'bohemian-rustic': renderBohoHero,
    'washi-ikebana-zen': renderZenHero,
    'art-deco-1920s': renderArtDecoHero,
    'tropical-destination': renderTropicalHero,
    'k-wedding-minimal': renderKWeddingHero,
    'watercolor-romance': renderWatercolorHero
  };

  const renderer = renderers[templateId] || renderVietnameseHero;
  return renderer({ config, content, couple, templateId });
}

// 1. VIETNAMESE HERITAGE: Hoàng Triều Đại Hỷ
function renderVietnameseHero({ config, content, couple }) {
  return `
    <section id="module-intro" class="relative py-24 px-4 text-center overflow-hidden bg-[#780016] text-[#fbf0d9]">
      <div class="absolute inset-0 pointer-events-none opacity-15 bg-[radial-gradient(#f0c05a_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <!-- Hanging Lantern Accents -->
      <div class="max-w-4xl mx-auto relative z-10">
        <div class="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#f0c05a]/60 bg-[#50000e]/80 text-[#FFE082] text-xs font-serif font-bold tracking-[0.2em] uppercase mb-8 shadow-md">
          <span>❖</span>
          <span class="whitespace-nowrap">${content.invitationSubtitle || "HOÀNG TRIỀU KÍNH BÁO • HỶ SỰ NGHÌN NĂM"}</span>
          <span>❖</span>
        </div>

        <!-- Imperial Double Happiness Song Hỷ Crest -->
        <div class="w-20 h-20 mx-auto mb-6 rounded-2xl border-2 border-[#f0c05a] bg-[#8d001a] flex items-center justify-center shadow-[0_0_30px_rgba(240,192,90,0.3)]">
          <span class="text-4xl font-serif text-[#f0c05a] font-bold">囍</span>
        </div>

        <!-- Couple Names in Imperial Calligraphy -->
        <h1 class="text-3xl sm:text-5xl md:text-6xl font-title tracking-normal text-[#fcf3dc] leading-tight mb-4 drop-shadow-md">
          <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span>
          <span class="inline-block px-2 text-[#f0c05a] italic font-serif">và</span>
          <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
        </h1>

        <!-- Flanking Couplets Ribbon -->
        <div class="my-6 max-w-md mx-auto py-2 border-y border-[#f0c05a]/40 text-xs sm:text-sm font-serif font-bold tracking-widest text-[#FFE082]">
          ✦ LOAN PHỤNG HÒA MINH • PHU THÊ GIAO BÁI ✦
        </div>

        <p class="text-xl sm:text-2xl font-mono tracking-[0.3em] text-[#fcf3dc] mb-3">
          ${content.dateDisplay || "28 . 11 . 2026"}
        </p>

        <p class="text-xs sm:text-sm font-serif italic text-[#FFE082] font-semibold max-w-md mx-auto">
          ${couple.headline || "Duyên do trời định, tình bởi lòng người. Kính mời quan viên hai họ chung vui."}
        </p>

        <div class="mt-12">
          <a href="#module-couple" class="inline-flex items-center gap-2 text-xs font-serif font-bold tracking-widest text-[#FFE082] hover:text-white transition">
            <span>XEM LỄ CƯỚI</span>
            <svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </a>
        </div>
      </div>
    </section>
  `;
}

// 2. MINIMALIST MODERN: Swiss Architectural Monolith
function renderMinimalistHero({ config, content, couple }) {
  return `
    <section id="module-intro" class="relative py-28 px-6 bg-[#0f0f0f] text-[#ffffff] font-sans overflow-hidden">
      <!-- Monolithic Grid Guides -->
      <div class="absolute inset-0 pointer-events-none opacity-10 border-b border-[#ffffff] grid grid-cols-6 h-full w-full">
        <div class="border-r border-white h-full"></div>
        <div class="border-r border-white h-full"></div>
        <div class="border-r border-white h-full"></div>
        <div class="border-r border-white h-full"></div>
        <div class="border-r border-white h-full"></div>
        <div></div>
      </div>

      <div class="max-w-6xl mx-auto relative z-10">
        <!-- Top Raw Meta -->
        <div class="flex flex-wrap justify-between items-center text-[10px] font-mono tracking-widest uppercase border-b border-white/20 pb-4 mb-12 text-stone-300 font-bold gap-2">
          <div>[EDITION // 2026]</div>
          <div>CEREMONY PROTOCOL // N° 01</div>
          <div>GPS: 10.7769° N, 106.7009° E</div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div class="lg:col-span-8">
            <span class="text-xs font-mono uppercase tracking-[0.3em] text-stone-400 font-bold block mb-4">
              THE MATRIMONY ANNOUNCEMENT OF
            </span>
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-white">
              <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span><br/>
              <span class="text-white/40">+</span> <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
            </h1>
          </div>

          <div class="lg:col-span-4 border-l-2 border-stone-700 pl-6 space-y-4">
            <div class="font-mono text-3xl font-light tracking-tight text-white">
              [${content.dateDisplay || "2026.11.28"}]
            </div>
            <p class="text-xs font-mono text-stone-300 uppercase leading-relaxed font-bold">
              HO CHI MINH CITY // VIETNAM.<br/>
              JOIN US AS WE ARCHITECT OUR SHARED TOMORROW.
            </p>
            <div class="pt-4">
              <a href="#module-couple" class="inline-block px-5 py-2.5 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-stone-200 transition">
                ENTER ARCHIVE ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 3. LUXURY GOLD FOIL: Versailles 24K Royal Palace
function renderLuxuryHero({ config, content, couple }) {
  return `
    <section id="module-intro" class="relative py-28 px-4 text-center bg-[#0d0d12] text-[#f7e8c3] overflow-hidden">
      <!-- Gold Foil Ornate Background Ambient -->
      <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)]"></div>

      <div class="max-w-3xl mx-auto relative z-10 border-2 border-[#d4af37]/60 p-8 sm:p-14 bg-[#14141d]/90 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_0_40px_rgba(212,175,55,0.08)]">
        
        <!-- Acanthus Gilded Corner Flourishes -->
        <div class="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]"></div>
        <div class="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#d4af37]"></div>
        <div class="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#d4af37]"></div>
        <div class="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]"></div>

        <!-- Royal Monogram Seal -->
        <div class="w-16 h-16 mx-auto mb-6 rounded-full border border-[#d4af37] flex items-center justify-center bg-gradient-to-b from-[#d4af37]/20 to-transparent shadow-[0_0_20px_rgba(212,175,55,0.3)]">
          <span class="font-title text-xl text-[#f7e8c3] tracking-widest font-bold">${couple.monogram}</span>
        </div>

        <p class="text-xs uppercase tracking-[0.35em] text-[#f5ce62] font-serif font-bold mb-4">
          DE PAR LE ROI ET LA REINE • ROYAL WEDDING
        </p>

        <h1 class="text-3xl sm:text-5xl md:text-6xl font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#e3c770] via-[#fff4cc] to-[#cf9e38] leading-tight mb-4 drop-shadow">
          <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span>
          <span class="inline-block px-2 text-[#f5ce62]">&amp;</span>
          <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
        </h1>

        <div class="flex items-center justify-center gap-4 my-6 text-[#d4af37]">
          <span class="w-12 h-px bg-current"></span>
          <span class="text-sm">✦ ⚜ ✦</span>
          <span class="w-12 h-px bg-current"></span>
        </div>

        <p class="text-lg font-serif tracking-[0.25em] text-[#f7e8c3] font-bold mb-3">
          ${content.dateDisplay || "SATURDAY, THE TWENTY-EIGHTH OF NOVEMBER"}
        </p>

        <p class="text-xs sm:text-sm font-serif italic text-[#f7e8c3] max-w-md mx-auto">
          "Request the pleasure of your company at the celebration of their eternal union."
        </p>

        <div class="mt-8">
          <a href="#module-couple" class="inline-block px-6 py-2.5 border-2 border-[#d4af37] text-xs font-serif font-bold uppercase tracking-[0.2em] text-[#f5ce62] hover:bg-[#d4af37] hover:text-black transition duration-300">
            DISCOVER PROTOCOL ↓
          </a>
        </div>

      </div>
    </section>
  `;
}

// 4. PRESSED BOTANICAL: Natural Herbarium & Field Notes
function renderBotanicalHero({ config, content, couple }) {
  return `
    <section id="module-intro" class="relative py-24 px-4 bg-[#f8f6f0] text-[#334233] text-center overflow-hidden">
      <!-- Deckle paper edge container -->
      <div class="max-w-3xl mx-auto relative p-8 sm:p-14 bg-[#ffffff] border-2 border-[#d9d4c5] shadow-lg rounded-sm">
        
        <!-- Washi tape at top -->
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#eeddbb]/80 rotate-1 shadow-xs border border-[#cca] pointer-events-none"></div>

        <div class="text-[11px] font-mono uppercase tracking-[0.25em] text-[#2D5A30] font-bold mb-4">
          HERBARIUM ARCHIVE • SPECIMEN N° 1128
        </div>

        <div class="flex justify-center mb-4">
          <!-- Hand-drawn leaf branch SVG -->
          <svg class="w-12 h-12 text-[#2D5A30]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22C12 22 12 13 19 6C12 6 6 12 6 19M12 14C14 12 17 11 17 11M10 16C8 14 7 11 7 11"/>
          </svg>
        </div>

        <h1 class="text-3xl sm:text-5xl md:text-6xl font-serif italic text-[#1f2e1f] leading-tight mb-3">
          <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span>
          <span class="inline-block px-2 font-normal font-sans text-xl sm:text-2xl text-[#2D5A30]">&amp;</span>
          <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
        </h1>

        <div class="w-16 h-0.5 bg-[#2D5A30] mx-auto my-5"></div>

        <p class="text-sm font-mono tracking-widest text-[#1e3a24] font-bold mb-2">
          ${content.dateDisplay || "NOVEMBER 28, 2026"}
        </p>

        <p class="text-xs font-serif italic text-[#1f2e1f] max-w-md mx-auto font-medium">
          "Planted in love, nurtured in patience, blooming forever together in nature's grace."
        </p>

        <div class="mt-8">
          <a href="#module-couple" class="inline-block text-xs font-mono font-bold tracking-widest uppercase text-[#2D5A30] border-b-2 border-[#2D5A30] pb-1 hover:text-[#1e3a24] transition">
            Explore Botanical Story ↓
          </a>
        </div>

      </div>
    </section>
  `;
}

// 5. BOHEMIAN RUSTIC: Pampas Sun & Desert Macrame
function renderBohoHero({ config, content, couple }) {
  return `
    <section id="module-intro" class="relative py-24 px-4 bg-[#fbf6f0] text-[#713f28] text-center overflow-hidden">
      <!-- Sun Arch Motif -->
      <div class="max-w-3xl mx-auto relative p-8 sm:p-14 rounded-t-full border-t-2 border-x-2 border-[#d99873] bg-white/80 backdrop-blur shadow-md">
        
        <!-- Terracotta Sun Rays SVG -->
        <div class="w-16 h-16 mx-auto mb-4 text-[#c26d43]">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="20"/>
            <path d="M50 10v12M50 78v12M10 50h12M78 50h12M22 22l9 9M69 69l9 9M22 78l9-9M69 31l9-9" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
          </svg>
        </div>

        <span class="text-xs uppercase tracking-[0.3em] font-sans font-bold text-[#8C3B18] block mb-2">
          WILD AT HEART • FREE SPIRIT WEDDING
        </span>

        <h1 class="text-3xl sm:text-5xl md:text-6xl font-serif text-[#522917] font-bold leading-tight mb-4">
          <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span>
          <span class="inline-block px-2 italic font-serif text-[#c26d43]">&amp;</span>
          <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
        </h1>

        <div class="flex items-center justify-center gap-3 my-4 text-[#c26d43]">
          <span>✦</span>
          <span class="text-xs uppercase tracking-widest font-mono font-bold">${content.dateDisplay || "28 . 11 . 2026"}</span>
          <span>✦</span>
        </div>

        <p class="text-xs sm:text-sm font-serif italic text-[#451E11] max-w-sm mx-auto font-medium">
          "Two souls dancing under the desert sun, bound by nothing but wild devotion."
        </p>

        <div class="mt-8">
          <a href="#module-couple" class="inline-block px-6 py-2.5 rounded-full bg-[#c26d43] text-white text-xs font-sans font-bold uppercase tracking-widest hover:bg-[#a8552e] transition shadow">
            Join The Festivities ↓
          </a>
        </div>

      </div>
    </section>
  `;
}

// 6. WASHI IKEBANA ZEN: Kyoto Tea Pavilion & Tategaki
function renderZenHero({ config, content, couple }) {
  return `
    <section id="module-intro" class="relative py-28 px-4 bg-[#f4f2ec] text-[#2c2b29] overflow-hidden">
      <!-- Enso Watermark in Background -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-[12px] border-[#2c2b29]/5 pointer-events-none"></div>

      <div class="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <!-- Left: Japanese Vertical Typography Concept -->
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-sm bg-[#b33927] text-white flex items-center justify-center text-xs font-serif font-bold shadow-sm">
            結
          </div>
          <div class="text-left space-y-1">
            <span class="text-[11px] font-mono uppercase tracking-[0.3em] text-[#3D3B37] font-bold block">KYOTO ZEN CEREMONY</span>
            <div class="text-xs font-serif text-[#1f1e1c] font-medium">一期一会 • VẠN THỜI KHẮC CÓ MỘT LẦN GẶP GỠ</div>
          </div>
        </div>

        <!-- Center: Couple Names -->
        <div class="text-center md:text-left">
          <h1 class="text-3xl sm:text-5xl md:text-6xl font-serif font-normal tracking-wide text-[#1f1e1c] leading-tight mb-2">
            <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span>
            <span class="inline-block px-1 text-[#b33927] italic font-serif">×</span>
            <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
          </h1>
          <p class="text-sm font-mono tracking-[0.25em] text-[#1f1e1c] font-bold">
            ${content.dateDisplay || "令和八年十一月二十八日 • 2026.11.28"}
          </p>
        </div>

        <!-- Right: Seal & Scroll CTA -->
        <div class="text-center md:text-right">
          <a href="#module-couple" class="inline-flex items-center gap-2 text-xs font-serif font-bold tracking-widest text-[#1f1e1c] border-2 border-[#2c2b29] px-5 py-2.5 rounded-sm hover:border-[#b33927] hover:bg-[#b33927] hover:text-white transition shadow-sm">
            <span>NHẬP THẤT</span>
            <span>↓</span>
          </a>
        </div>

      </div>
    </section>
  `;
}

// 7. ART DECO 1920s: The Great Gatsby Grand Marquee
function renderArtDecoHero({ config, content, couple }) {
  return `
    <section id="module-intro" class="relative py-28 px-4 bg-[#121619] text-[#e0b768] text-center overflow-hidden">
      <!-- Art Deco Stepped Border -->
      <div class="max-w-4xl mx-auto relative p-8 sm:p-14 border-4 border-[#e0b768] shadow-[0_0_50px_rgba(224,183,104,0.15)] bg-[#191f24]">
        
        <!-- Stepped Ziggurat Corners -->
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-1 bg-[#121619] border border-[#e0b768] text-[10px] font-mono tracking-[0.4em] uppercase text-[#F5DEB3] font-bold">
          THE ROARING TWENTIES GALA
        </div>

        <!-- Art Deco Fan Symbol -->
        <div class="w-16 h-10 mx-auto mb-6 flex justify-center items-end text-[#e0b768]">
          <svg viewBox="0 0 100 60" fill="currentColor" class="w-16 h-10">
            <path d="M50 60 L10 10 A50 50 0 0 1 90 10 Z" opacity="0.2"/>
            <path d="M50 60 L20 15 A40 40 0 0 1 80 15 Z" opacity="0.4"/>
            <path d="M50 60 L30 20 A30 30 0 0 1 70 20 Z" opacity="0.8"/>
            <circle cx="50" cy="60" r="8"/>
          </svg>
        </div>

        <h1 class="text-3xl sm:text-5xl md:text-6xl font-title uppercase tracking-widest text-[#fff] leading-tight mb-4 drop-shadow">
          <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span>
          <span class="inline-block px-2 text-[#e0b768]">&amp;</span>
          <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
        </h1>

        <div class="flex items-center justify-center gap-4 my-6 text-[#e0b768]">
          <span class="w-16 h-0.5 bg-[#e0b768]"></span>
          <span class="text-sm font-mono tracking-[0.3em] uppercase text-[#F5DEB3] font-bold">${content.dateDisplay || "NOVEMBER 28, 1926 // 2026"}</span>
          <span class="w-16 h-0.5 bg-[#e0b768]"></span>
        </div>

        <p class="text-xs sm:text-sm font-serif italic text-[#E8DCC2] max-w-md mx-auto mb-8 font-medium">
          "A little party never killed nobody. Cordially inviting you to an unforgettable night of jazz and gold."
        </p>

        <a href="#module-couple" class="inline-block px-8 py-3 bg-[#e0b768] text-[#121619] text-xs font-title font-bold tracking-[0.25em] uppercase hover:bg-white transition duration-300 shadow">
          ADMIT ONE TO SOIRÉE ↓
        </a>

      </div>
    </section>
  `;
}

// 8. TROPICAL DESTINATION: First Class Island Boarding Pass
function renderTropicalHero({ config, content, couple }) {
  return `
    <section id="module-intro" class="relative py-24 px-4 bg-[#f0f9f8] text-[#0a444c] overflow-hidden">
      <div class="max-w-4xl mx-auto relative z-10 bg-white rounded-3xl border-2 border-[#a6dcd8] shadow-xl overflow-hidden">
        
        <!-- Boarding Pass Header Ribbon -->
        <div class="bg-gradient-to-r from-[#0d6e75] to-[#149d9b] text-white px-6 py-4 flex flex-wrap justify-between items-center text-xs font-mono tracking-widest uppercase">
          <div class="flex items-center gap-2">
            <span>FLIGHT NO. LV-2026</span>
            <span class="opacity-50">|</span>
            <span>CLASS: FIRST / DESTINATION WEDDING</span>
          </div>
          <div class="text-[#d0f5f2] font-bold">BOARDING NOW</div>
        </div>

        <!-- Body with Island Breeze Accents -->
        <div class="p-8 sm:p-12 text-center">
          <div class="inline-block px-4 py-1 rounded-full bg-[#e3f6f5] text-[#063A42] text-[11px] font-sans font-bold tracking-widest uppercase mb-4">
            PALM OASIS • DANANG COASTLINE • 16.0544° N, 108.2022° E
          </div>

          <h1 class="text-3xl sm:text-5xl md:text-6xl font-serif text-[#09353b] leading-tight mb-4 font-bold">
            <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span>
            <span class="inline-block px-2 italic text-[#149d9b]">&amp;</span>
            <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
          </h1>

          <p class="text-base sm:text-lg font-mono text-[#063A42] font-bold tracking-widest mb-4">
            ${content.dateDisplay || "NOVEMBER 28, 2026"}
          </p>

          <p class="text-xs sm:text-sm font-sans text-[#08353b] max-w-md mx-auto mb-8 font-medium">
            Pack your sunscreen and island cocktail attire. We're getting married by the turquoise sea!
          </p>

          <div class="flex flex-wrap justify-center gap-4">
            <a href="#module-couple" class="px-6 py-3 rounded-full bg-[#063A42] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#04282e] transition shadow-md">
              VIEW RESORT ITINERARY ↓
            </a>
          </div>
        </div>

      </div>
    </section>
  `;
}

// 9. K-WEDDING MINIMAL: Seoul Studio Lookbook Magazine
function renderKWeddingHero({ config, content, couple }) {
  return `
    <section id="module-intro" class="relative py-28 px-4 bg-[#faf9f6] text-[#222] font-sans overflow-hidden">
      <div class="max-w-4xl mx-auto border-t-2 border-b-2 border-stone-800 py-12 px-6">
        
        <!-- Fashion Masthead Top Bar -->
        <div class="flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-stone-700 font-bold uppercase mb-8 border-b-2 border-stone-300 pb-3">
          <div>SEOUL EDITION // VOGUE BRIDAL</div>
          <div>ISSUE N° 1128 • VOL. 26</div>
          <div>GANGNAM-GU, SEOUL</div>
        </div>

        <div class="text-center">
          <span class="text-[11px] tracking-[0.3em] uppercase text-stone-800 font-bold font-serif block mb-3">
            CEREMONY &amp; RECEPTION
          </span>

          <h1 class="text-3xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight text-stone-900 mb-6 leading-tight">
            <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span>
            <span class="inline-block px-2 text-sm font-sans tracking-widest uppercase text-stone-700 font-bold align-middle">with</span>
            <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
          </h1>

          <div class="w-12 h-0.5 bg-stone-900 mx-auto my-6"></div>

          <p class="text-sm font-mono tracking-widest text-stone-900 font-bold mb-3">
            ${content.dateDisplay || "2026 . 11 . 28 SATURDAY"}
          </p>

          <p class="text-xs font-serif italic text-stone-800 max-w-sm mx-auto mb-8 font-medium">
            "A quiet promise whispered in the heart of autumn, carrying warmth into forever."
          </p>

          <a href="#module-couple" class="inline-block text-xs font-mono tracking-[0.25em] uppercase font-bold text-stone-900 border-b-2 border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition">
            OPEN LOOKBOOK ↓
          </a>
        </div>

      </div>
    </section>
  `;
}

// 10. WATERCOLOR ROMANCE: Monet Pastel Water Garden
function renderWatercolorHero({ config, content, couple }) {
  return `
    <section id="module-intro" class="relative py-28 px-4 text-center bg-[#fdf9fc] text-[#4d384d] overflow-hidden">
      <!-- Watercolor Splashes in Background -->
      <div class="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#fde2ea] filter blur-3xl opacity-60 pointer-events-none"></div>
      <div class="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#e3ecfa] filter blur-3xl opacity-60 pointer-events-none"></div>

      <div class="max-w-3xl mx-auto relative z-10 p-8 sm:p-14 rounded-3xl bg-white/80 backdrop-blur-md border-2 border-[#f0d8e8] shadow-xl">
        
        <span class="text-xs uppercase tracking-[0.3em] font-sans font-bold text-[#6B2149] block mb-3">
          SWEET MELODY OF LOVE
        </span>

        <h1 class="text-3xl sm:text-5xl md:text-6xl font-serif text-[#3b253b] italic leading-tight mb-4">
          <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span>
          <span class="inline-block px-2 text-[#d88bb5]">&amp;</span>
          <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
        </h1>

        <div class="flex items-center justify-center gap-3 my-5 text-[#d88bb5]">
          <span>✦</span>
          <span class="text-sm font-mono tracking-widest text-[#521636] font-bold">${content.dateDisplay || "28 . 11 . 2026"}</span>
          <span>✦</span>
        </div>

        <p class="text-xs sm:text-sm font-serif italic text-[#3b253b] max-w-md mx-auto mb-8 font-medium">
          "Like colors bleeding into soft paper, our two lives have blended into one beautiful story."
        </p>

        <a href="#module-couple" class="inline-block px-7 py-3 rounded-full bg-gradient-to-r from-[#c25e8e] to-[#8755c2] text-white text-xs font-sans font-bold uppercase tracking-widest shadow-md hover:opacity-90 transition">
          Discover Our Story ↓
        </a>

      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleCouple.js ---
/**
 * Module 2: Cô Dâu & Chú Rể (The Bride & Groom)
 * Multi-Skeleton Layout Engine: 10 radically different layout architectures
 */

function renderModuleCouple({ config, activeTemplate, moduleData }) {
  const couple = config.couple;
  const content = moduleData.content;
  const templateId = activeTemplate.id;
  const heroImg = `./assets/images/couples/${templateId}.jpg`;

  // Real-time Countdown calculation to weddingDate
  const targetTime = new Date(couple.weddingDate).getTime();
  const now = new Date().getTime();
  const diff = Math.max(0, targetTime - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // ========================================================
  // SKELETON 1: VIETNAMESE HERITAGE (Imperial Scroll & Couplets)
  // ========================================================
  if (templateId === "vietnamese-heritage") {
    return `
      <section id="module-couple" class="py-24 px-4 relative overflow-hidden bg-[#F9F3E3]">
        <div class="max-w-5xl mx-auto">
          
          <!-- Imperial Scroll Header with Traditional Couplets -->
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-3 px-6 py-1.5 rounded-full bg-[#9B1B1E] text-[#D89F38] border-2 border-[#D89F38] text-xs font-bold tracking-[0.25em] shadow-md mb-4">
              <span>囍</span><span>HỶ SỰ HOÀNG TRIỀU</span><span>囍</span>
            </div>
            <h2 class="text-4xl sm:text-6xl font-title text-[#9B1B1E] font-bold tracking-tight mb-3">
              <span class="inline-block whitespace-nowrap">${couple.groomName}</span> <span class="text-[#D89F38] font-serif">&amp;</span> <span class="inline-block whitespace-nowrap">${couple.brideName}</span>
            </h2>
            <div class="flex items-center justify-center gap-4 text-xs font-serif italic text-[#7E4B4D] max-w-md mx-auto my-3">
              <span>Trăm năm tình viên mãn</span>
              <span class="w-1.5 h-1.5 rounded-full bg-[#D89F38]"></span>
              <span>Bạc đầu nghĩa phu thê</span>
            </div>
          </div>

          <!-- Imperial Red Lacquer Frame & Portrait -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <!-- Chú Rể -->
            <div class="md:col-span-4 p-8 heritage-box text-center md:text-right border-2 border-[#D89F38]/50">
              <span class="text-xs uppercase tracking-[0.25em] text-[#9B1B1E] font-bold block mb-1">TÂN LANG</span>
              <h3 class="text-2xl sm:text-3xl font-title text-[#9B1B1E] font-bold mb-3"><span class="inline-block whitespace-nowrap">${content.groom.fullName}</span></h3>
              <p class="text-xs sm:text-sm text-[#7E4B4D] leading-relaxed mb-4 font-serif italic">${content.groom.desc}</p>
              <span class="inline-block px-3 py-1 rounded bg-[#9B1B1E]/10 border border-[#9B1B1E]/20 text-xs text-[#9B1B1E] font-mono">
                ${content.groom.tagline}
              </span>
            </div>

            <!-- Arched Royal Portrait -->
            <div class="md:col-span-4 flex justify-center">
              <div class="w-68 sm:w-76 h-96 sm:h-[440px] rounded-t-[160px] rounded-b-2xl overflow-hidden border-4 border-[#D89F38] shadow-2xl p-2 bg-[#9B1B1E] relative">
                <div class="w-full h-full rounded-t-[150px] rounded-b-xl overflow-hidden relative">
                  <img src="${heroImg}" alt="Couple" class="w-full h-full object-cover object-top filter contrast-[1.04]" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#4A1517]/80 via-transparent to-transparent"></div>
                  <div class="absolute bottom-5 inset-x-0 text-center text-[#F9F3E3]">
                    <div class="text-lg font-bold font-title text-[#D89F38]">囍 ${couple.monogram} 囍</div>
                    <div class="text-xs uppercase tracking-widest opacity-90 mt-1">${couple.city}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cô Dâu -->
            <div class="md:col-span-4 p-8 heritage-box text-center md:text-left border-2 border-[#D89F38]/50">
              <span class="text-xs uppercase tracking-[0.25em] text-[#9B1B1E] font-bold block mb-1">TÂN NƯƠNG</span>
              <h3 class="text-2xl sm:text-3xl font-title text-[#9B1B1E] font-bold mb-3"><span class="inline-block whitespace-nowrap">${content.bride.fullName}</span></h3>
              <p class="text-xs sm:text-sm text-[#7E4B4D] leading-relaxed mb-4 font-serif italic">${content.bride.desc}</p>
              <span class="inline-block px-3 py-1 rounded bg-[#9B1B1E]/10 border border-[#9B1B1E]/20 text-xs text-[#9B1B1E] font-mono">
                ${content.bride.tagline}
              </span>
            </div>

          </div>

          <!-- Auspicious Lunar Countdown Clock -->
          <div class="mt-16 max-w-xl mx-auto p-8 bg-[#FFFDF8] border-2 border-[#D89F38] shadow-xl text-center rounded-xl relative">
            <p class="text-xs uppercase tracking-[0.3em] font-bold text-[#9B1B1E] mb-4">NGÀY LÀNH THÁNG TỐT BÁO HỶ</p>
            <div class="grid grid-cols-4 gap-3 text-center" id="live-countdown-grid">
              <div class="p-3 bg-[#9B1B1E] text-[#F9F3E3] rounded-lg border border-[#D89F38]">
                <span class="block text-3xl font-bold font-mono">${days}</span>
                <span class="text-xs uppercase tracking-widest text-[#D89F38]">Ngày</span>
              </div>
              <div class="p-3 bg-[#9B1B1E] text-[#F9F3E3] rounded-lg border border-[#D89F38]">
                <span class="block text-3xl font-bold font-mono">${hours}</span>
                <span class="text-xs uppercase tracking-widest text-[#D89F38]">Giờ</span>
              </div>
              <div class="p-3 bg-[#9B1B1E] text-[#F9F3E3] rounded-lg border border-[#D89F38]">
                <span class="block text-3xl font-bold font-mono">${minutes}</span>
                <span class="text-xs uppercase tracking-widest text-[#D89F38]">Phút</span>
              </div>
              <div class="p-3 bg-[#9B1B1E] text-[#F9F3E3] rounded-lg border border-[#D89F38]">
                <span class="block text-3xl font-bold font-mono">${seconds}</span>
                <span class="text-xs uppercase tracking-widest text-[#D89F38]">Giây</span>
              </div>
            </div>
            <div class="mt-5 text-xs text-[#7E4B4D] font-mono">
              Ngày: ${couple.weddingDate.split("T")[0].split("-").reverse().join(" / ")} • 🪷 ${couple.lunarDate || ''}
            </div>
          </div>

        </div>
      </section>
    `;
  }

  // ========================================================
  // SKELETON 2: MINIMALIST MODERN (Architectural Asymmetric Monolith)
  // ========================================================
  if (templateId === "minimalist-modern") {
    return `
      <section id="module-couple" class="py-24 px-6 relative bg-[#F9F9F8] text-[#111111] border-b border-black">
        <div class="max-w-6xl mx-auto">
          
          <!-- Top Technical Meta Coordinates -->
          <div class="flex justify-between items-center text-xs font-mono tracking-widest border-b border-black pb-4 mb-16 text-stone-500">
            <span>INDEX // 02_COUPLE</span>
            <span>SPEC: THE UNION ARCHIVE</span>
            <span>LAT: 21.0285° N, 105.8542° E</span>
          </div>

          <!-- Asymmetric Monolith Grid: Stark Typography on Left, Square Frame on Right -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div class="lg:col-span-7">
              <span class="text-xs font-mono tracking-[0.4em] uppercase text-stone-400 block mb-4">[ EDITORIAL WEDDING 2026 ]</span>
              <h1 class="text-6xl sm:text-8xl font-title font-light tracking-tighter leading-none mb-8">
                <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span><br/>
                <span class="italic font-serif text-stone-400">&amp;</span> <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
              </h1>
              
              <div class="border-t border-black pt-6 max-w-lg mb-8">
                <p class="text-sm font-light leading-relaxed text-stone-700">
                  “${couple.quote || 'Tối giản không phải là bớt đi, mà là tìm thấy những giá trị cốt lõi nhất của tình yêu.'}”
                </p>
              </div>

              <!-- Two Column Minimalist Profiles -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-stone-300 pt-6">
                <div>
                  <span class="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-1">01 / GROOM</span>
                  <h4 class="font-title text-xl font-bold"><span class="inline-block whitespace-nowrap">${content.groom.fullName}</span></h4>
                  <p class="text-xs text-stone-600 mt-2 font-light leading-relaxed">${content.groom.desc}</p>
                </div>
                <div>
                  <span class="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-1">02 / BRIDE</span>
                  <h4 class="font-title text-xl font-bold"><span class="inline-block whitespace-nowrap">${content.bride.fullName}</span></h4>
                  <p class="text-xs text-stone-600 mt-2 font-light leading-relaxed">${content.bride.desc}</p>
                </div>
              </div>
            </div>

            <!-- Stark 1:1 Aspect Ratio Architectural Portrait -->
            <div class="lg:col-span-5">
              <div class="border border-black p-3 bg-white">
                <div class="aspect-square w-full overflow-hidden bg-stone-200">
                  <img src="${heroImg}" alt="Architectural Couple" class="w-full h-full object-cover filter grayscale contrast-[1.1]" />
                </div>
                <div class="mt-3 flex justify-between items-center text-xs font-mono">
                  <span>FIG 01. MONOLITH</span>
                  <span>${couple.city}</span>
                </div>
              </div>

              <!-- Minimal Stark Countdown -->
              <div class="mt-8 border border-black p-6 bg-black text-white">
                <div class="text-xs font-mono tracking-widest uppercase mb-4 text-stone-400">[ COUNTDOWN TIMER ]</div>
                <div class="grid grid-cols-4 gap-2 text-center font-mono">
                  <div class="border-r border-stone-700 pr-2">
                    <span class="text-3xl font-light">${days}</span>
                    <span class="text-xs uppercase tracking-widest text-stone-500 block">DAYS</span>
                  </div>
                  <div class="border-r border-stone-700 pr-2">
                    <span class="text-3xl font-light">${hours}</span>
                    <span class="text-xs uppercase tracking-widest text-stone-500 block">HRS</span>
                  </div>
                  <div class="border-r border-stone-700 pr-2">
                    <span class="text-3xl font-light">${minutes}</span>
                    <span class="text-xs uppercase tracking-widest text-stone-500 block">MIN</span>
                  </div>
                  <div>
                    <span class="text-3xl font-light">${seconds}</span>
                    <span class="text-xs uppercase tracking-widest text-stone-500 block">SEC</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    `;
  }

  // ========================================================
  // SKELETON 3: LUXURY GOLD FOIL (Imperial Symmetrical Folio)
  // ========================================================
  if (templateId === "luxury-gold-foil") {
    return `
      <section id="module-couple" class="py-28 px-4 relative bg-[#0F0F12] text-[#FDF8EE] overflow-hidden">
        <div class="max-w-5xl mx-auto text-center">
          
          <!-- Royal Crest Lockup -->
          <div class="w-20 h-20 mx-auto mb-6 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center bg-[#17171C] shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            <span class="-rotate-45 font-title text-2xl text-[#D4AF37] font-bold tracking-widest">${couple.monogram}</span>
          </div>

          <p class="text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-serif font-bold mb-2">ROYAL INVITATION &amp; CELEBRATION</p>
          <h2 class="text-4xl sm:text-6xl font-title tracking-[0.1em] uppercase mb-4 text-[#FFF0CA]">
            <span class="inline-block whitespace-nowrap">${couple.groomName}</span> <span class="text-[#D4AF37] font-serif">&amp;</span> <span class="inline-block whitespace-nowrap">${couple.brideName}</span>
          </h2>
          <div class="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6"></div>

          <!-- Symmetrical Folio Framing -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-12">
            
            <div class="md:col-span-4 p-8 bg-[#17171C] border border-[#D4AF37]/40 shadow-xl text-center md:text-right">
              <span class="text-xs tracking-[0.3em] uppercase text-[#D4AF37] block mb-1">THE GROOM</span>
              <h3 class="text-2xl font-title text-[#FFF0CA] font-bold mb-3"><span class="inline-block whitespace-nowrap">${content.groom.fullName}</span></h3>
              <p class="text-xs text-[#B3ADA2] leading-relaxed mb-4 font-serif italic">${content.groom.desc}</p>
              <span class="text-xs text-[#D4AF37] tracking-widest font-mono">[ ${content.groom.tagline} ]</span>
            </div>

            <!-- Gilded Double Border Portrait Frame -->
            <div class="md:col-span-4 flex justify-center">
              <div class="w-72 h-[420px] p-2 bg-[#17171C] border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.25)] relative">
                <div class="w-full h-full border border-[#D4AF37]/50 overflow-hidden relative">
                  <img src="${heroImg}" alt="Luxury Portrait" class="w-full h-full object-cover filter contrast-[1.05]" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div class="absolute bottom-4 inset-x-0 text-center text-[#D4AF37]">
                    <div class="text-xs tracking-[0.3em] font-serif uppercase">Black Tie Affair</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="md:col-span-4 p-8 bg-[#17171C] border border-[#D4AF37]/40 shadow-xl text-center md:text-left">
              <span class="text-xs tracking-[0.3em] uppercase text-[#D4AF37] block mb-1">THE BRIDE</span>
              <h3 class="text-2xl font-title text-[#FFF0CA] font-bold mb-3"><span class="inline-block whitespace-nowrap">${content.bride.fullName}</span></h3>
              <p class="text-xs text-[#B3ADA2] leading-relaxed mb-4 font-serif italic">${content.bride.desc}</p>
              <span class="text-xs text-[#D4AF37] tracking-widest font-mono">[ ${content.bride.tagline} ]</span>
            </div>

          </div>

          <!-- 24K Gold Countdown Ingot -->
          <div class="mt-14 max-w-xl mx-auto p-8 bg-[#17171C] border border-[#D4AF37]/60 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <p class="text-xs uppercase tracking-[0.35em] text-[#D4AF37] mb-4">COUNTDOWN TO IMPERIAL SOIRÉE</p>
            <div class="grid grid-cols-4 gap-4 text-center font-title">
              <div class="p-4 bg-black/60 border border-[#D4AF37]/30">
                <span class="text-3xl font-bold text-[#FFF0CA]">${days}</span>
                <span class="text-xs uppercase tracking-widest text-[#D4AF37] block mt-1">DAYS</span>
              </div>
              <div class="p-4 bg-black/60 border border-[#D4AF37]/30">
                <span class="text-3xl font-bold text-[#FFF0CA]">${hours}</span>
                <span class="text-xs uppercase tracking-widest text-[#D4AF37] block mt-1">HOURS</span>
              </div>
              <div class="p-4 bg-black/60 border border-[#D4AF37]/30">
                <span class="text-3xl font-bold text-[#FFF0CA]">${minutes}</span>
                <span class="text-xs uppercase tracking-widest text-[#D4AF37] block mt-1">MINUTES</span>
              </div>
              <div class="p-4 bg-black/60 border border-[#D4AF37]/30">
                <span class="text-3xl font-bold text-[#FFF0CA]">${seconds}</span>
                <span class="text-xs uppercase tracking-widest text-[#D4AF37] block mt-1">SECONDS</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  // ========================================================
  // SKELETON 4: PRESSED BOTANICAL (Herbarium Specimen Scrapbook)
  // ========================================================
  if (templateId === "pressed-botanical") {
    return `
      <section id="module-couple" class="py-24 px-4 relative bg-[#F7F5EE] text-[#243828]">
        <div class="max-w-5xl mx-auto">
          
          <div class="text-center mb-16">
            <div class="inline-block px-4 py-1 border border-[#B86B53] text-[#B86B53] text-xs font-serif italic mb-3">
              Specimen No. 1128 • Herbarium Collection
            </div>
            <h2 class="text-4xl sm:text-5xl font-title font-normal tracking-tight text-[#243828]">
              <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> <span class="font-serif italic text-[#B86B53]">&amp;</span> <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
            </h2>
            <div class="w-16 h-0.5 bg-[#3D5A43] mx-auto my-4"></div>
            <p class="text-sm font-serif italic text-[#596D5E] max-w-lg mx-auto">
              “Như hai nhành hoa dại quấn quýt giữa sườn đồi, cùng tắm nắng sớm và đón gió ngàn.”
            </p>
          </div>

          <!-- Staggered Field Notes Skeleton -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div class="md:col-span-4 p-8 bg-[#FCFAF5] border border-[#D6D0C2] shadow-md rounded text-center md:text-right">
              <span class="text-xs font-mono tracking-widest uppercase text-[#3D5A43] block mb-1">FIELD NOTE // GROOM</span>
              <h3 class="text-2xl font-title text-[#243828] font-bold mb-2"><span class="inline-block whitespace-nowrap">${content.groom.fullName}</span></h3>
              <p class="text-xs text-[#596D5E] leading-relaxed mb-4 font-serif italic">${content.groom.desc}</p>
              <span class="text-xs text-[#B86B53] font-serif italic">✦ ${content.groom.tagline}</span>
            </div>

            <!-- Herbarium Glass Mounting Frame -->
            <div class="md:col-span-4 flex justify-center">
              <div class="w-72 h-[410px] bg-[#FCFAF5] p-3 border border-[#D6D0C2] shadow-xl relative transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div class="w-full h-full overflow-hidden border border-[#E5E0D4] relative">
                  <img src="${heroImg}" alt="Botanical Couple" class="w-full h-full object-cover" />
                </div>
                <div class="mt-2 text-center text-xs font-serif italic text-[#596D5E]">
                  Fig 01. Pressed Wildflowers &amp; Couple
                </div>
              </div>
            </div>

            <div class="md:col-span-4 p-8 bg-[#FCFAF5] border border-[#D6D0C2] shadow-md rounded text-center md:text-left">
              <span class="text-xs font-mono tracking-widest uppercase text-[#3D5A43] block mb-1">FIELD NOTE // BRIDE</span>
              <h3 class="text-2xl font-title text-[#243828] font-bold mb-2"><span class="inline-block whitespace-nowrap">${content.bride.fullName}</span></h3>
              <p class="text-xs text-[#596D5E] leading-relaxed mb-4 font-serif italic">${content.bride.desc}</p>
              <span class="text-xs text-[#B86B53] font-serif italic">✦ ${content.bride.tagline}</span>
            </div>

          </div>

          <!-- Earthy Countdown Calendar -->
          <div class="mt-14 max-w-xl mx-auto p-6 bg-[#FCFAF5] border border-[#D6D0C2] shadow text-center rounded">
            <p class="text-xs font-serif italic text-[#3D5A43] mb-4">Đếm Ngày Chung Đôi Trong Mùa Hoa</p>
            <div class="grid grid-cols-4 gap-3 text-center font-mono">
              <div class="p-3 bg-[#F7F5EE] border border-[#D6D0C2]">
                <span class="text-2xl font-bold text-[#3D5A43]">${days}</span>
                <span class="text-xs uppercase tracking-widest text-[#596D5E] block">Ngày</span>
              </div>
              <div class="p-3 bg-[#F7F5EE] border border-[#D6D0C2]">
                <span class="text-2xl font-bold text-[#3D5A43]">${hours}</span>
                <span class="text-xs uppercase tracking-widest text-[#596D5E] block">Giờ</span>
              </div>
              <div class="p-3 bg-[#F7F5EE] border border-[#D6D0C2]">
                <span class="text-2xl font-bold text-[#3D5A43]">${minutes}</span>
                <span class="text-xs uppercase tracking-widest text-[#596D5E] block">Phút</span>
              </div>
              <div class="p-3 bg-[#F7F5EE] border border-[#D6D0C2]">
                <span class="text-2xl font-bold text-[#3D5A43]">${seconds}</span>
                <span class="text-xs uppercase tracking-widest text-[#596D5E] block">Giây</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  // ========================================================
  // SKELETON 5: BOHEMIAN RUSTIC (Polaroid Collage & Desert Sunset)
  // ========================================================
  if (templateId === "bohemian-rustic") {
    return `
      <section id="module-couple" class="py-24 px-4 relative bg-[#F6EFE6] text-[#4A3A34] overflow-hidden">
        <div class="max-w-5xl mx-auto text-center">
          
          <div class="inline-block px-4 py-1.5 rounded-full bg-[#FFFBF5] text-[#C86D51] font-serif italic text-xs mb-3 shadow">
            ✦ Free Spirit &amp; Desert Sun
          </div>
          <h2 class="text-5xl sm:text-7xl font-title text-[#C86D51] mb-2">
            <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
          </h2>
          <p class="text-base font-serif italic text-[#7E6C64] max-w-md mx-auto mb-12">
            “Cùng nhau đi qua bão cát, cùng nhau đón ánh hoàng hôn ấm áp nhất.”
          </p>

          <!-- Polaroid Mount Collage -->
          <div class="flex flex-col md:flex-row items-center justify-center gap-8 my-8">
            
            <div class="w-72 bg-white p-4 pb-8 shadow-xl rounded-sm transform -rotate-3 hover:rotate-0 transition-transform">
              <div class="h-64 overflow-hidden mb-3">
                <img src="${heroImg}" alt="Groom & Bride" class="w-full h-full object-cover" />
              </div>
              <div class="font-title text-2xl text-[#C86D51]"><span class="inline-block whitespace-nowrap">${content.groom.fullName}</span></div>
              <p class="text-xs text-[#7E6C64] mt-1 font-serif italic">${content.groom.tagline}</p>
            </div>

            <div class="w-72 bg-white p-4 pb-8 shadow-xl rounded-sm transform rotate-2 hover:rotate-0 transition-transform">
              <div class="h-64 overflow-hidden mb-3">
                <img src="./assets/images/gallery/bouquet.jpg" alt="Bridal Flowers" class="w-full h-full object-cover" />
              </div>
              <div class="font-title text-2xl text-[#C86D51]"><span class="inline-block whitespace-nowrap">${content.bride.fullName}</span></div>
              <p class="text-xs text-[#7E6C64] mt-1 font-serif italic">${content.bride.tagline}</p>
            </div>

          </div>

          <!-- Boho Terracotta Countdown Box -->
          <div class="mt-12 max-w-lg mx-auto p-6 bg-[#FFFBF5] border-2 border-[#E6D8C8] rounded-2xl shadow-md">
            <p class="text-sm font-serif italic text-[#C86D51] mb-3">Hành Trình Bắt Đầu Sau</p>
            <div class="grid grid-cols-4 gap-3 text-center">
              <div class="p-3 bg-[#F6EFE6] rounded-xl text-[#C86D51]">
                <span class="block text-3xl font-bold font-title">${days}</span>
                <span class="text-xs uppercase font-serif">Ngày</span>
              </div>
              <div class="p-3 bg-[#F6EFE6] rounded-xl text-[#C86D51]">
                <span class="block text-3xl font-bold font-title">${hours}</span>
                <span class="text-xs uppercase font-serif">Giờ</span>
              </div>
              <div class="p-3 bg-[#F6EFE6] rounded-xl text-[#C86D51]">
                <span class="block text-3xl font-bold font-title">${minutes}</span>
                <span class="text-xs uppercase font-serif">Phút</span>
              </div>
              <div class="p-3 bg-[#F6EFE6] rounded-xl text-[#C86D51]">
                <span class="block text-3xl font-bold font-title">${seconds}</span>
                <span class="text-xs uppercase font-serif">Giây</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  // ========================================================
  // SKELETON 6: WASHI / IKEBANA ZEN (Japanese Vertical Flow & Ma)
  // ========================================================
  if (templateId === "washi-ikebana-zen") {
    return `
      <section id="module-couple" class="py-24 px-4 relative bg-[#FAF8F5] text-[#1F2421]">
        <div class="max-w-5xl mx-auto">
          
          <div class="text-center mb-16">
            <div class="w-14 h-14 mx-auto mb-3 border-2 border-[#1F2421] rounded-full border-b-transparent flex items-center justify-center transform -rotate-45">
              <span class="font-serif text-[#BC4749] text-base rotate-45">和</span>
            </div>
            <h2 class="text-3xl sm:text-5xl font-title tracking-[0.2em] font-light mb-2">
              <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> ＆ <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
            </h2>
            <p class="text-xs tracking-[0.3em] uppercase text-[#606863] mt-2">MINDFUL UNION • 一期一会</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div class="md:col-span-5 p-8 bg-white border-l-4 border-[#BC4749] shadow-sm">
              <span class="text-xs font-mono text-[#BC4749] tracking-widest block mb-2">GROOM PROFILE</span>
              <h3 class="text-2xl font-title font-semibold mb-2"><span class="inline-block whitespace-nowrap">${content.groom.fullName}</span></h3>
              <p class="text-xs text-[#606863] leading-relaxed mb-4">${content.groom.desc}</p>
              <div class="h-0.5 w-12 bg-[#BC4749] mb-4"></div>
              <span class="text-xs font-mono text-[#606863] tracking-wider">${content.groom.tagline}</span>
            </div>

            <!-- Asymmetric Zen Portrait -->
            <div class="md:col-span-7 flex justify-center">
              <div class="w-full max-w-md h-88 overflow-hidden border border-[#E5E0D8] shadow-md bg-white p-2">
                <img src="${heroImg}" alt="Zen Couple" class="w-full h-full object-cover" />
              </div>
            </div>

          </div>

          <!-- Zen Countdown Bar -->
          <div class="mt-16 max-w-lg mx-auto p-6 bg-white border border-[#E5E0D8] text-center shadow-xs">
            <p class="text-xs font-serif tracking-[0.2em] text-[#606863] mb-4">THỜI KHẮC VIÊN MÃN</p>
            <div class="grid grid-cols-4 gap-4 text-center font-mono">
              <div>
                <span class="text-3xl font-light">${days}</span>
                <span class="text-xs uppercase text-[#BC4749] block">日 / DAYS</span>
              </div>
              <div>
                <span class="text-3xl font-light">${hours}</span>
                <span class="text-xs uppercase text-[#BC4749] block">時 / HRS</span>
              </div>
              <div>
                <span class="text-3xl font-light">${minutes}</span>
                <span class="text-xs uppercase text-[#BC4749] block">分 / MIN</span>
              </div>
              <div>
                <span class="text-3xl font-light">${seconds}</span>
                <span class="text-xs uppercase text-[#BC4749] block">秒 / SEC</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  // ========================================================
  // SKELETON 7: ART DECO 1920s (Stepped Ziggurat & Sunburst)
  // ========================================================
  if (templateId === "art-deco-1920s") {
    return `
      <section id="module-couple" class="py-24 px-4 relative bg-[#0B1015] text-[#F4EFE6] overflow-hidden">
        <div class="max-w-5xl mx-auto text-center">
          
          <div class="text-xs font-mono tracking-[0.4em] uppercase text-[#E5B25D] mb-3">GRAND GATSBY BALLROOM</div>
          <h2 class="text-4xl sm:text-6xl font-title text-[#E5B25D] tracking-widest uppercase mb-3">
            <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
          </h2>
          <div class="flex items-center justify-center gap-2 my-4">
            <div class="h-px w-16 bg-[#E5B25D]"></div>
            <div class="w-2.5 h-2.5 rotate-45 border border-[#E5B25D]"></div>
            <div class="h-px w-16 bg-[#E5B25D]"></div>
          </div>

          <!-- Stepped Ziggurat Card Layout -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-10">
            
            <div class="md:col-span-4 p-8 bg-[#121921] border border-[#E5B25D] text-center md:text-right" style="clip-path: polygon(0 14px, 14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px));">
              <span class="text-xs tracking-[0.3em] uppercase text-[#E5B25D] block mb-1">THE GENTLEMAN</span>
              <h3 class="text-2xl font-title text-[#F4EFE6] font-bold mb-3"><span class="inline-block whitespace-nowrap">${content.groom.fullName}</span></h3>
              <p class="text-xs text-[#A3ADB7] leading-relaxed mb-4">${content.groom.desc}</p>
              <span class="text-xs text-[#E5B25D] font-mono">[ ${content.groom.tagline} ]</span>
            </div>

            <div class="md:col-span-4 flex justify-center">
              <div class="w-72 h-[410px] bg-[#121921] p-3 border-2 border-[#E5B25D] shadow-[0_0_40px_rgba(229,178,93,0.2)]">
                <div class="w-full h-full overflow-hidden border border-[#E5B25D]/50 relative">
                  <img src="${heroImg}" alt="Art Deco Couple" class="w-full h-full object-cover filter contrast-[1.08]" />
                </div>
              </div>
            </div>

            <div class="md:col-span-4 p-8 bg-[#121921] border border-[#E5B25D] text-center md:text-left" style="clip-path: polygon(0 14px, 14px 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0 calc(100% - 14px));">
              <span class="text-xs tracking-[0.3em] uppercase text-[#E5B25D] block mb-1">THE LADY</span>
              <h3 class="text-2xl font-title text-[#F4EFE6] font-bold mb-3"><span class="inline-block whitespace-nowrap">${content.bride.fullName}</span></h3>
              <p class="text-xs text-[#A3ADB7] leading-relaxed mb-4">${content.bride.desc}</p>
              <span class="text-xs text-[#E5B25D] font-mono">[ ${content.bride.tagline} ]</span>
            </div>

          </div>

          <!-- Deco Countdown Box -->
          <div class="mt-12 max-w-lg mx-auto p-6 bg-[#121921] border border-[#E5B25D]">
            <p class="text-xs font-mono uppercase tracking-[0.35em] text-[#E5B25D] mb-4">COUNTDOWN TO GATSBY REVELRY</p>
            <div class="grid grid-cols-4 gap-3 text-center font-title">
              <div class="p-3 bg-black/60 border border-[#E5B25D]/40">
                <span class="text-3xl font-bold text-[#E5B25D]">${days}</span>
                <span class="text-xs uppercase tracking-widest text-stone-400 block mt-1">DAYS</span>
              </div>
              <div class="p-3 bg-black/60 border border-[#E5B25D]/40">
                <span class="text-3xl font-bold text-[#E5B25D]">${hours}</span>
                <span class="text-xs uppercase tracking-widest text-stone-400 block mt-1">HOURS</span>
              </div>
              <div class="p-3 bg-black/60 border border-[#E5B25D]/40">
                <span class="text-3xl font-bold text-[#E5B25D]">${minutes}</span>
                <span class="text-xs uppercase tracking-widest text-stone-400 block mt-1">MIN</span>
              </div>
              <div class="p-3 bg-black/60 border border-[#E5B25D]/40">
                <span class="text-3xl font-bold text-[#E5B25D]">${seconds}</span>
                <span class="text-xs uppercase tracking-widest text-stone-400 block mt-1">SEC</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  // ========================================================
  // SKELETON 8: TROPICAL DESTINATION (Panoramic Coastal Horizon)
  // ========================================================
  if (templateId === "tropical-destination") {
    return `
      <section id="module-couple" class="py-24 px-4 relative bg-[#FFF9F2] text-[#123337]">
        <div class="max-w-6xl mx-auto">
          
          <div class="text-center mb-16">
            <span class="px-4 py-1 rounded-full bg-teal-100 text-[#0A4D54] font-semibold text-xs uppercase tracking-wider mb-3 inline-block">
              ✦ Beach Wedding Horizon • Phú Quốc
            </span>
            <h2 class="text-4xl sm:text-6xl font-title text-[#0A4D54] mb-3">
              <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
            </h2>
            <p class="text-xs uppercase font-mono tracking-widest text-[#F27A59]">
              FLIGHT NO. 1128 // DESTINATION CELEBRATION
            </p>
          </div>

          <!-- Wide 16:9 Panoramic Beach Card -->
          <div class="rounded-3xl overflow-hidden border-2 border-[#E4D8C9] shadow-xl bg-white mb-12">
            <div class="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div class="lg:col-span-7 h-80 sm:h-96 overflow-hidden">
                <img src="${heroImg}" alt="Tropical Wedding" class="w-full h-full object-cover" />
              </div>
              <div class="lg:col-span-5 p-8 sm:p-10">
                <span class="text-xs font-mono uppercase tracking-widest text-[#F27A59] block mb-2">BOARDING PASS DETAILS</span>
                <h3 class="text-2xl font-title font-bold text-[#0A4D54] mb-4">${couple.headline}</h3>
                <p class="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-serif italic">
                  “${couple.quote}”
                </p>
                <div class="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-[#0A4D54]">
                  <div>Địa điểm: The Coastal Resort, Phú Quốc</div>
                  <div class="mt-1">Khởi hành: 28 Tháng 11, 2026</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Island Countdown -->
          <div class="max-w-xl mx-auto p-6 rounded-2xl bg-white border border-[#E4D8C9] shadow-md text-center">
            <p class="text-xs font-semibold uppercase tracking-widest text-[#0A4D54] mb-4">Đếm Ngược Giờ Cất Cánh</p>
            <div class="grid grid-cols-4 gap-3 text-center font-mono">
              <div class="p-3 bg-teal-50 rounded-xl text-[#0A4D54]">
                <span class="text-2xl font-bold">${days}</span>
                <span class="text-xs uppercase tracking-wider block">Ngày</span>
              </div>
              <div class="p-3 bg-teal-50 rounded-xl text-[#0A4D54]">
                <span class="text-2xl font-bold">${hours}</span>
                <span class="text-xs uppercase tracking-wider block">Giờ</span>
              </div>
              <div class="p-3 bg-teal-50 rounded-xl text-[#0A4D54]">
                <span class="text-2xl font-bold">${minutes}</span>
                <span class="text-xs uppercase tracking-wider block">Phút</span>
              </div>
              <div class="p-3 bg-teal-50 rounded-xl text-[#0A4D54]">
                <span class="text-2xl font-bold">${seconds}</span>
                <span class="text-xs uppercase tracking-wider block">Giây</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  // ========================================================
  // SKELETON 9: K-WEDDING MINIMAL (Seoul Bridal Studio 35mm Film)
  // ========================================================
  if (templateId === "k-wedding-minimal") {
    return `
      <section id="module-couple" class="py-24 px-4 relative bg-[#F7F4EF] text-[#383431]">
        <div class="max-w-5xl mx-auto">
          
          <div class="text-center mb-16">
            <div class="text-xs font-mono tracking-widest text-[#B8ADA0] mb-2">SEOUL STUDIO EDITORIAL // 2026</div>
            <h2 class="text-4xl sm:text-5xl font-title text-[#383431] tracking-wide mb-3">
              <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> <span class="font-serif italic text-[#B8ADA0]">&amp;</span> <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
            </h2>
            <div class="w-12 h-0.5 bg-[#B8ADA0] mx-auto my-3"></div>
            <p class="text-xs uppercase tracking-[0.25em] text-[#7A736C]">Quiet Luxury Bridal Collection</p>
          </div>

          <!-- 35mm Film Frame Montage -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div class="md:col-span-5 p-8 bg-white border border-[#D6CEC2] shadow-sm">
              <span class="text-xs font-mono tracking-widest uppercase text-[#B8ADA0] block mb-2">ARCHIVE SPEC // NO. 01</span>
              <h3 class="text-2xl font-title font-semibold mb-2"><span class="inline-block whitespace-nowrap">${content.groom.fullName}</span></h3>
              <p class="text-xs text-[#7A736C] leading-relaxed mb-4">${content.groom.desc}</p>
              <div class="border-t border-[#D6CEC2] pt-3 mt-4">
                <span class="text-xs font-mono text-[#B8ADA0] tracking-widest uppercase">${content.groom.tagline}</span>
              </div>
            </div>

            <!-- Studio Film Portrait -->
            <div class="md:col-span-7 flex justify-center">
              <div class="w-full max-w-sm p-4 bg-white border border-[#D6CEC2] shadow-md">
                <div class="flex justify-between items-center text-[8px] font-mono text-[#B8ADA0] mb-2">
                  <span>KODAK PORTRA 400</span>
                  <span>35MM • EXP 24</span>
                </div>
                <div class="aspect-[3/4] overflow-hidden bg-stone-100">
                  <img src="${heroImg}" alt="Seoul Studio" class="w-full h-full object-cover" />
                </div>
                <div class="text-center text-xs font-mono text-[#B8ADA0] mt-2">
                  SEOUL BRIDAL ARCHIVE // LA MARIÉE
                </div>
              </div>
            </div>

          </div>

          <!-- Studio Film Countdown -->
          <div class="mt-14 max-w-md mx-auto p-6 bg-white border border-[#D6CEC2] text-center shadow-xs">
            <p class="text-xs font-mono uppercase tracking-widest text-[#7A736C] mb-4">COUNTDOWN TO CEREMONY</p>
            <div class="grid grid-cols-4 gap-3 text-center font-mono">
              <div>
                <span class="text-2xl font-light text-[#383431]">${days}</span>
                <span class="text-[8px] uppercase tracking-wider text-[#B8ADA0] block">DAYS</span>
              </div>
              <div>
                <span class="text-2xl font-light text-[#383431]">${hours}</span>
                <span class="text-[8px] uppercase tracking-wider text-[#B8ADA0] block">HRS</span>
              </div>
              <div>
                <span class="text-2xl font-light text-[#383431]">${minutes}</span>
                <span class="text-[8px] uppercase tracking-wider text-[#B8ADA0] block">MIN</span>
              </div>
              <div>
                <span class="text-2xl font-light text-[#383431]">${seconds}</span>
                <span class="text-[8px] uppercase tracking-wider text-[#B8ADA0] block">SEC</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  // ========================================================
  // SKELETON 10: WATERCOLOR ROMANCE (Dreamy Glassmorphism Vignette)
  // ========================================================
  return `
    <section id="module-couple" class="py-24 px-4 relative bg-[#FAF6F8] text-[#422830]">
      <div class="max-w-5xl mx-auto text-center">
        
        <div class="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur border border-rose-200 text-xs font-serif italic text-[#D88A8A] mb-3 shadow-xs">
          ✦ Giọt Màu Yêu Thương
        </div>
        <h2 class="text-4xl sm:text-6xl font-title text-[#642838] mb-3">
          <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> <span class="font-serif italic text-[#D88A8A]">&amp;</span> <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
        </h2>
        <p class="text-sm font-serif italic text-[#7A5862] max-w-md mx-auto mb-12">
          “Tình yêu như bức tranh màu nước, mỗi ngày bên nhau là một nét cọ ngọt ngào.”
        </p>

        <!-- Frosted Glass Vignette Cards -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div class="md:col-span-4 p-8 bg-white/70 backdrop-blur-md rounded-3xl border border-rose-200 shadow-md text-center md:text-right">
            <span class="text-xs uppercase tracking-widest text-[#D88A8A] font-semibold block mb-1">CHÚ RỂ</span>
            <h3 class="text-2xl font-title text-[#642838] font-bold mb-2"><span class="inline-block whitespace-nowrap">${content.groom.fullName}</span></h3>
            <p class="text-xs text-[#7A5862] leading-relaxed mb-4 font-serif italic">${content.groom.desc}</p>
            <span class="text-xs text-[#D88A8A] font-serif italic">✦ ${content.groom.tagline}</span>
          </div>

          <div class="md:col-span-4 flex justify-center">
            <div class="w-72 h-[410px] rounded-3xl overflow-hidden p-2 bg-white/80 backdrop-blur border border-rose-200 shadow-xl relative">
              <div class="w-full h-full rounded-2xl overflow-hidden">
                <img src="${heroImg}" alt="Watercolor Couple" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div class="md:col-span-4 p-8 bg-white/70 backdrop-blur-md rounded-3xl border border-rose-200 shadow-md text-center md:text-left">
            <span class="text-xs uppercase tracking-widest text-[#D88A8A] font-semibold block mb-1">CÔ DÂU</span>
            <h3 class="text-2xl font-title text-[#642838] font-bold mb-2"><span class="inline-block whitespace-nowrap">${content.bride.fullName}</span></h3>
            <p class="text-xs text-[#7A5862] leading-relaxed mb-4 font-serif italic">${content.bride.desc}</p>
            <span class="text-xs text-[#D88A8A] font-serif italic">✦ ${content.bride.tagline}</span>
          </div>

        </div>

        <!-- Watercolor Soft Countdown -->
        <div class="mt-14 max-w-xl mx-auto p-6 rounded-3xl bg-white/70 backdrop-blur border border-rose-200 shadow-sm text-center">
          <p class="text-xs font-serif italic text-[#642838] mb-4">Đếm Ngược Khoảnh Khắc Ngọt Ngào</p>
          <div class="grid grid-cols-4 gap-3 text-center">
            <div class="p-3 bg-rose-50 rounded-2xl text-[#642838]">
              <span class="text-2xl font-bold font-title">${days}</span>
              <span class="text-xs uppercase font-serif text-[#D88A8A] block">Ngày</span>
            </div>
            <div class="p-3 bg-rose-50 rounded-2xl text-[#642838]">
              <span class="text-2xl font-bold font-title">${hours}</span>
              <span class="text-xs uppercase font-serif text-[#D88A8A] block">Giờ</span>
            </div>
            <div class="p-3 bg-rose-50 rounded-2xl text-[#642838]">
              <span class="text-2xl font-bold font-title">${minutes}</span>
              <span class="text-xs uppercase font-serif text-[#D88A8A] block">Phút</span>
            </div>
            <div class="p-3 bg-rose-50 rounded-2xl text-[#642838]">
              <span class="text-2xl font-bold font-title">${seconds}</span>
              <span class="text-xs uppercase font-serif text-[#D88A8A] block">Giây</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleFamily.js ---
/**
 * Module 3: Hai Gia Đình (Parents & Family Lineage)
 * 10 Radically Distinct Design Archetypes:
 * - vietnamese-heritage: Ancestral Red Lacquer Wooden Tablets with dragon/phoenix motifs
 * - minimalist-modern: Technical Lineage Specification Sheet with raw coordinate codes
 * - luxury-gold-foil: Versailles Crested Royal Decree with 24K gold Fleur-de-lis framing
 * - pressed-botanical: Dual Herbarium Field Notes with washi tape and pressed botanical sprigs
 * - bohemian-rustic: Pinned Polaroid Cards with natural jute twine and dried flowers
 * - washi-ikebana-zen: Hanging Calligraphy Scrolls (Kakejiku) with red vermilion inkan seals
 * - art-deco-1920s: Gatsby Ballroom Society Cards with stepped ziggurat chevron corners
 * - tropical-destination: Dual Island Transit Visas / Maritime family registry
 * - k-wedding-minimal: Seoul Fashion Magazine Editorial Double-Spread
 * - watercolor-romance: Soft Frosted Glassmorphism with bleeding pastel watercolor wash
 */

function renderModuleFamily({ config, activeTemplate, moduleData }) {
  const content = moduleData.content || {};
  const groomSide = content.groomSide || {};
  const brideSide = content.brideSide || {};
  const templateId = activeTemplate.id;

  const renderers = {
    'vietnamese-heritage': renderVietnameseFamily,
    'minimalist-modern': renderMinimalistFamily,
    'luxury-gold-foil': renderLuxuryFamily,
    'pressed-botanical': renderBotanicalFamily,
    'bohemian-rustic': renderBohoFamily,
    'washi-ikebana-zen': renderZenFamily,
    'art-deco-1920s': renderArtDecoFamily,
    'tropical-destination': renderTropicalFamily,
    'k-wedding-minimal': renderKWeddingFamily,
    'watercolor-romance': renderWatercolorFamily
  };

  const renderer = renderers[templateId] || renderVietnameseFamily;
  return renderer({ config, content, groomSide, brideSide });
}

// 1. VIETNAMESE HERITAGE: Biển Gỗ Sơn Son Thếp Vàng & Mâm Quả Hoàng Tộc
function renderVietnameseFamily({ config, content, groomSide, brideSide }) {
  return `
    <section id="module-family" class="py-24 px-4 bg-[#630012] text-[#fbf0d9] relative">
      <div class="max-w-5xl mx-auto relative z-10">
        
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#f0c05a]/40 bg-[#42000c] text-[#f0c05a] text-xs font-serif tracking-widest uppercase mb-3">
            <span>❖ HAI HỌ ĐỒNG THUẬN ❖</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-title text-[#fcf3dc] tracking-tight mb-3">${content.title || "Trân Trọng Kính Báo"}</h2>
          <div class="flex items-center justify-center gap-3 text-[#f0c05a] my-3">
            <span class="w-12 h-px bg-current opacity-40"></span>
            <span class="text-xl">囍</span>
            <span class="w-12 h-px bg-current opacity-40"></span>
          </div>
          <p class="text-xs sm:text-sm font-serif italic text-[#f0c05a]/90 max-w-lg mx-auto">${content.subtitle || "Hân hoan thông báo ngày hạnh phúc của hai con"}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-11 gap-8 items-center">
          
          <!-- Nhà Trai: Biển Sơn Son -->
          <div class="md:col-span-5 p-8 rounded-2xl border-2 border-[#f0c05a] bg-[#800018] shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative text-center">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1 bg-[#f0c05a] text-[#630012] font-title font-bold text-xs tracking-widest uppercase rounded-md shadow">
              ${groomSide.title || "NHÀ TRAI • TÂN LANG"}
            </div>

            <div class="space-y-4 my-6">
              <div>
                <span class="text-[11px] font-serif uppercase tracking-widest text-[#f0c05a]/80 block">Thân Phụ</span>
                <strong class="font-title text-2xl text-[#fff] tracking-wide block">${groomSide.father}</strong>
              </div>
              <div class="w-12 h-px bg-[#f0c05a]/30 mx-auto"></div>
              <div>
                <span class="text-[11px] font-serif uppercase tracking-widest text-[#f0c05a]/80 block">Thân Mẫu</span>
                <strong class="font-title text-2xl text-[#fff] tracking-wide block">${groomSide.mother}</strong>
              </div>
            </div>

            <div class="pt-4 border-t border-[#f0c05a]/30 text-xs font-serif text-[#fbf0d9]/80 leading-relaxed">
              <p>Địa Điểm: ${groomSide.address}</p>
              ${groomSide.phone ? `<p class="mt-1 font-mono text-[11px] text-[#f0c05a]">Hotline: ${groomSide.phone}</p>` : ''}
            </div>
          </div>

          <!-- Central Dragon-Phoenix Emblem -->
          <div class="md:col-span-1 flex justify-center py-4 md:py-0">
            <div class="w-12 h-12 rounded-full border border-[#f0c05a] flex items-center justify-center text-[#f0c05a] bg-[#42000c] shadow-lg">
              <span class="text-lg">❖</span>
            </div>
          </div>

          <!-- Nhà Gái: Biển Sơn Son -->
          <div class="md:col-span-5 p-8 rounded-2xl border-2 border-[#f0c05a] bg-[#800018] shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative text-center">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1 bg-[#f0c05a] text-[#630012] font-title font-bold text-xs tracking-widest uppercase rounded-md shadow">
              ${brideSide.title || "NHÀ GÁI • TÂN NƯƠNG"}
            </div>

            <div class="space-y-4 my-6">
              <div>
                <span class="text-[11px] font-serif uppercase tracking-widest text-[#f0c05a]/80 block">Thân Phụ</span>
                <strong class="font-title text-2xl text-[#fff] tracking-wide block">${brideSide.father}</strong>
              </div>
              <div class="w-12 h-px bg-[#f0c05a]/30 mx-auto"></div>
              <div>
                <span class="text-[11px] font-serif uppercase tracking-widest text-[#f0c05a]/80 block">Thân Mẫu</span>
                <strong class="font-title text-2xl text-[#fff] tracking-wide block">${brideSide.mother}</strong>
              </div>
            </div>

            <div class="pt-4 border-t border-[#f0c05a]/30 text-xs font-serif text-[#fbf0d9]/80 leading-relaxed">
              <p>Địa Điểm: ${brideSide.address}</p>
              ${brideSide.phone ? `<p class="mt-1 font-mono text-[11px] text-[#f0c05a]">Hotline: ${brideSide.phone}</p>` : ''}
            </div>
          </div>

        </div>

        <div class="text-center mt-12 text-xs sm:text-sm font-serif italic text-[#f0c05a]/90 max-w-lg mx-auto">
          “${content.note || "Sự hiện diện của quý thân bằng quyến thuộc là niềm vinh hạnh lớn nhất của hai gia đình chúng tôi."}”
        </div>

      </div>
    </section>
  `;
}

// 2. MINIMALIST MODERN: Swiss Lineage Specification Sheet
function renderMinimalistFamily({ config, content, groomSide, brideSide }) {
  return `
    <section id="module-family" class="py-24 px-6 bg-[#141414] text-white font-sans border-b border-white/10">
      <div class="max-w-5xl mx-auto">
        
        <div class="border-b border-white/20 pb-4 mb-12 flex justify-between items-end">
          <div>
            <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 block">MODULE_03 // ANCESTRAL LINEAGE</span>
            <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">TWO FAMILIES</h2>
          </div>
          <div class="font-mono text-xs text-white/40">[01 // 02]</div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <!-- Lineage 01: Paternal -->
          <div class="border border-white/20 p-8 space-y-6">
            <div class="font-mono text-xs uppercase tracking-widest text-white/50 border-b border-white/10 pb-3 flex justify-between">
              <span>01_PATERNAL // GROOM</span>
              <span>BRANCH_A</span>
            </div>

            <div class="space-y-4">
              <div>
                <span class="text-[10px] font-mono text-white/40 uppercase block">FATHER_OF_GROOM</span>
                <div class="text-2xl font-bold tracking-tight">${groomSide.father}</div>
              </div>
              <div>
                <span class="text-[10px] font-mono text-white/40 uppercase block">MOTHER_OF_GROOM</span>
                <div class="text-2xl font-bold tracking-tight">${groomSide.mother}</div>
              </div>
            </div>

            <div class="pt-4 border-t border-white/10 font-mono text-xs text-white/60">
              LOC: ${groomSide.address}<br/>
              TEL: ${groomSide.phone || "N/A"}
            </div>
          </div>

          <!-- Lineage 02: Maternal -->
          <div class="border border-white/20 p-8 space-y-6">
            <div class="font-mono text-xs uppercase tracking-widest text-white/50 border-b border-white/10 pb-3 flex justify-between">
              <span>02_MATERNAL // BRIDE</span>
              <span>BRANCH_B</span>
            </div>

            <div class="space-y-4">
              <div>
                <span class="text-[10px] font-mono text-white/40 uppercase block">FATHER_OF_BRIDE</span>
                <div class="text-2xl font-bold tracking-tight">${brideSide.father}</div>
              </div>
              <div>
                <span class="text-[10px] font-mono text-white/40 uppercase block">MOTHER_OF_BRIDE</span>
                <div class="text-2xl font-bold tracking-tight">${brideSide.mother}</div>
              </div>
            </div>

            <div class="pt-4 border-t border-white/10 font-mono text-xs text-white/60">
              LOC: ${brideSide.address}<br/>
              TEL: ${brideSide.phone || "N/A"}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

// 3. LUXURY GOLD FOIL: Versailles Crested Royal Decree
function renderLuxuryFamily({ config, content, groomSide, brideSide }) {
  return `
    <section id="module-family" class="py-24 px-4 bg-[#0a0a0f] text-[#f7e8c3]">
      <div class="max-w-5xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-serif block mb-2">ROYAL HERALDRY &amp; LINEAGE</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#e3c770] via-[#fff4cc] to-[#cf9e38] tracking-wide mb-3">
            Two Noble Houses
          </h2>
          <div class="flex items-center justify-center gap-4 text-[#d4af37] my-3">
            <span class="w-12 h-px bg-current"></span>
            <span>⚜</span>
            <span class="w-12 h-px bg-current"></span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- House of Groom -->
          <div class="p-8 sm:p-10 border border-[#d4af37]/40 bg-[#12121c] relative text-center shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
            <div class="w-10 h-10 mx-auto mb-4 border border-[#d4af37] rounded-full flex items-center justify-center text-xs text-[#d4af37]">
              ⚜
            </div>
            <span class="text-xs font-serif uppercase tracking-[0.3em] text-[#d4af37] block mb-4">THE HOUSE OF GROOM</span>
            
            <div class="space-y-4 my-6 font-serif">
              <div>
                <span class="text-[11px] uppercase tracking-widest text-[#d4af37]/60 block">Lord Father</span>
                <strong class="text-2xl text-[#fff] tracking-wide font-normal block">${groomSide.father}</strong>
              </div>
              <div class="w-10 h-px bg-[#d4af37]/30 mx-auto"></div>
              <div>
                <span class="text-[11px] uppercase tracking-widest text-[#d4af37]/60 block">Lady Mother</span>
                <strong class="text-2xl text-[#fff] tracking-wide font-normal block">${groomSide.mother}</strong>
              </div>
            </div>

            <div class="pt-4 border-t border-[#d4af37]/20 text-xs font-serif text-[#f7e8c3]/70">
              <p>${groomSide.address}</p>
            </div>
          </div>

          <!-- House of Bride -->
          <div class="p-8 sm:p-10 border border-[#d4af37]/40 bg-[#12121c] relative text-center shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
            <div class="w-10 h-10 mx-auto mb-4 border border-[#d4af37] rounded-full flex items-center justify-center text-xs text-[#d4af37]">
              ⚜
            </div>
            <span class="text-xs font-serif uppercase tracking-[0.3em] text-[#d4af37] block mb-4">THE HOUSE OF BRIDE</span>
            
            <div class="space-y-4 my-6 font-serif">
              <div>
                <span class="text-[11px] uppercase tracking-widest text-[#d4af37]/60 block">Lord Father</span>
                <strong class="text-2xl text-[#fff] tracking-wide font-normal block">${brideSide.father}</strong>
              </div>
              <div class="w-10 h-px bg-[#d4af37]/30 mx-auto"></div>
              <div>
                <span class="text-[11px] uppercase tracking-widest text-[#d4af37]/60 block">Lady Mother</span>
                <strong class="text-2xl text-[#fff] tracking-wide font-normal block">${brideSide.mother}</strong>
              </div>
            </div>

            <div class="pt-4 border-t border-[#d4af37]/20 text-xs font-serif text-[#f7e8c3]/70">
              <p>${brideSide.address}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

// 4. PRESSED BOTANICAL: Dual Herbarium Field Notes with Washi Tape
function renderBotanicalFamily({ config, content, groomSide, brideSide }) {
  return `
    <section id="module-family" class="py-24 px-4 bg-[#f3efe6] text-[#2c3d2c]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#587358] block mb-2">FAMILY GENEALOGY • FIELD SPECIMEN</span>
          <h2 class="text-3xl sm:text-5xl font-serif italic text-[#1f2e1f] mb-3">Two Roots, One Blossom</h2>
          <div class="w-16 h-px bg-[#a3b3a3] mx-auto my-3"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Groom Field Note -->
          <div class="p-8 bg-white border border-[#d4cbba] rounded-sm shadow relative">
            <div class="absolute -top-3 left-8 w-24 h-6 bg-[#eeddbb]/90 -rotate-2 border border-[#cca] pointer-events-none"></div>
            
            <span class="text-[11px] font-mono uppercase tracking-widest text-[#6b7c6b] block mb-4">SPECIMEN A: PATERNAL ROOT</span>
            
            <div class="space-y-4 my-6 font-serif">
              <div>
                <span class="text-xs font-mono text-[#8b9c8b] block">FATHER</span>
                <strong class="text-xl text-[#2c3d2c]">${groomSide.father}</strong>
              </div>
              <div>
                <span class="text-xs font-mono text-[#8b9c8b] block">MOTHER</span>
                <strong class="text-xl text-[#2c3d2c]">${groomSide.mother}</strong>
              </div>
            </div>

            <div class="pt-4 border-t border-[#e2dcd0] text-xs font-serif italic text-[#5c705c]">
              Địa Điểm: ${groomSide.address}
            </div>
          </div>

          <!-- Bride Field Note -->
          <div class="p-8 bg-white border border-[#d4cbba] rounded-sm shadow relative">
            <div class="absolute -top-3 right-8 w-24 h-6 bg-[#eeddbb]/90 rotate-2 border border-[#cca] pointer-events-none"></div>
            
            <span class="text-[11px] font-mono uppercase tracking-widest text-[#6b7c6b] block mb-4">SPECIMEN B: MATERNAL ROOT</span>
            
            <div class="space-y-4 my-6 font-serif">
              <div>
                <span class="text-xs font-mono text-[#8b9c8b] block">FATHER</span>
                <strong class="text-xl text-[#2c3d2c]">${brideSide.father}</strong>
              </div>
              <div>
                <span class="text-xs font-mono text-[#8b9c8b] block">MOTHER</span>
                <strong class="text-xl text-[#2c3d2c]">${brideSide.mother}</strong>
              </div>
            </div>

            <div class="pt-4 border-t border-[#e2dcd0] text-xs font-serif italic text-[#5c705c]">
              Địa Điểm: ${brideSide.address}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

// 5. BOHEMIAN RUSTIC: Pinned Kraft Polaroids & Jute Twine
function renderBohoFamily({ config, content, groomSide, brideSide }) {
  return `
    <section id="module-family" class="py-24 px-4 bg-[#f8f1e9] text-[#6d3e29]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-[#b8623b] block mb-2">FAMILY CIRCLE</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#522917] mb-2">The Tribes Who Raised Us</h2>
          <div class="text-xl text-[#d99873]">✦ • ✦</div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div class="p-8 bg-[#fffaf5] border-2 border-[#d99873]/50 rounded-2xl shadow-md text-center relative rotate-[-1deg]">
            <div class="w-8 h-8 rounded-full bg-[#c26d43] text-white flex items-center justify-center mx-auto mb-4 text-xs">
              ✦
            </div>
            <h3 class="font-serif text-lg font-bold uppercase tracking-wider text-[#a8552e] mb-4">${groomSide.title || "Nhà Trai"}</h3>
            
            <div class="space-y-3 font-serif my-4">
              <div>
                <span class="text-xs text-[#844c33]/70 uppercase block">Thân phụ</span>
                <strong class="text-xl text-[#522917]">${groomSide.father}</strong>
              </div>
              <div>
                <span class="text-xs text-[#844c33]/70 uppercase block">Thân mẫu</span>
                <strong class="text-xl text-[#522917]">${groomSide.mother}</strong>
              </div>
            </div>

            <div class="pt-4 border-t border-[#e8d5c4] text-xs font-serif text-[#78432a]">
              Địa Điểm: ${groomSide.address}
            </div>
          </div>

          <div class="p-8 bg-[#fffaf5] border-2 border-[#d99873]/50 rounded-2xl shadow-md text-center relative rotate-[1deg]">
            <div class="w-8 h-8 rounded-full bg-[#c26d43] text-white flex items-center justify-center mx-auto mb-4 text-xs">
              ✦
            </div>
            <h3 class="font-serif text-lg font-bold uppercase tracking-wider text-[#a8552e] mb-4">${brideSide.title || "Nhà Gái"}</h3>
            
            <div class="space-y-3 font-serif my-4">
              <div>
                <span class="text-xs text-[#844c33]/70 uppercase block">Thân phụ</span>
                <strong class="text-xl text-[#522917]">${brideSide.father}</strong>
              </div>
              <div>
                <span class="text-xs text-[#844c33]/70 uppercase block">Thân mẫu</span>
                <strong class="text-xl text-[#522917]">${brideSide.mother}</strong>
              </div>
            </div>

            <div class="pt-4 border-t border-[#e8d5c4] text-xs font-serif text-[#78432a]">
              Địa Điểm: ${brideSide.address}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

// 6. WASHI IKEBANA ZEN: Hanging Calligraphy Scrolls (Kakejiku)
function renderZenFamily({ config, content, groomSide, brideSide }) {
  return `
    <section id="module-family" class="py-24 px-4 bg-[#efede6] text-[#2c2b29]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-[11px] font-mono uppercase tracking-[0.3em] text-[#3D3B37] font-bold block mb-2">両家のご紹介 • TWO FAMILIES</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#1f1e1c] font-normal mb-2">Thân Tộc Đồng Quy</h2>
          <div class="w-12 h-px bg-[#b33927] mx-auto my-3"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <!-- Groom Scroll -->
          <div class="p-8 bg-[#faf8f4] border-t-4 border-b-4 border-[#2c2b29] border-x border-[#dcd8ce] shadow-sm relative text-center">
            <div class="inline-block px-3 py-1 bg-[#b33927] text-white text-[11px] font-serif font-bold mb-4 rounded-xs">
              新郎側 • NHÀ TRAI
            </div>
            
            <div class="space-y-4 my-6 font-serif">
              <div>
                <span class="text-xs text-[#3D3B37] font-bold block">父 • Thân Phụ</span>
                <strong class="text-xl text-[#1f1e1c] block">${groomSide.father}</strong>
              </div>
              <div>
                <span class="text-xs text-[#3D3B37] font-bold block">母 • Thân Mẫu</span>
                <strong class="text-xl text-[#1f1e1c] block">${groomSide.mother}</strong>
              </div>
            </div>

            <div class="pt-4 border-t border-[#e2ddd3] text-xs font-serif text-[#1f1e1c] font-medium">
              ${groomSide.address}
            </div>
          </div>

          <!-- Bride Scroll -->
          <div class="p-8 bg-[#faf8f4] border-t-4 border-b-4 border-[#2c2b29] border-x border-[#dcd8ce] shadow-sm relative text-center">
            <div class="inline-block px-3 py-1 bg-[#b33927] text-white text-[11px] font-serif font-bold mb-4 rounded-xs">
              新婦側 • NHÀ GÁI
            </div>
            
            <div class="space-y-4 my-6 font-serif">
              <div>
                <span class="text-xs text-[#3D3B37] font-bold block">父 • Thân Phụ</span>
                <strong class="text-xl text-[#1f1e1c] block">${brideSide.father}</strong>
              </div>
              <div>
                <span class="text-xs text-[#3D3B37] font-bold block">母 • Thân Mẫu</span>
                <strong class="text-xl text-[#1f1e1c] block">${brideSide.mother}</strong>
              </div>
            </div>

            <div class="pt-4 border-t border-[#e2ddd3] text-xs font-serif text-[#1f1e1c] font-medium">
              ${brideSide.address}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

// 7. ART DECO 1920s: Great Gatsby Ballroom VIP Society Cards
function renderArtDecoFamily({ config, content, groomSide, brideSide }) {
  return `
    <section id="module-family" class="py-24 px-4 bg-[#14191c] text-[#e0b768]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-[10px] font-mono uppercase tracking-[0.4em] text-[#e0b768]/70 block mb-2">DISTINGUISHED PATRONS</span>
          <h2 class="text-3xl sm:text-5xl font-title uppercase tracking-widest text-white mb-2">The Two Families</h2>
          <div class="w-24 h-0.5 bg-[#e0b768] mx-auto my-3"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div class="p-8 border-2 border-[#e0b768] bg-[#1a2126] relative text-center">
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[#e0b768] text-[#14191c] font-title font-bold text-xs uppercase tracking-widest">
              GROOM'S PARENTS
            </div>
            
            <div class="space-y-4 my-6">
              <div>
                <span class="text-[10px] font-mono uppercase tracking-widest text-[#e0b768]/60 block">Father</span>
                <strong class="text-2xl font-title text-white tracking-wide block">${groomSide.father}</strong>
              </div>
              <div>
                <span class="text-[10px] font-mono uppercase tracking-widest text-[#e0b768]/60 block">Mother</span>
                <strong class="text-2xl font-title text-white tracking-wide block">${groomSide.mother}</strong>
              </div>
            </div>

            <div class="pt-4 border-t border-[#e0b768]/30 text-xs font-serif text-[#c7af85]">
              ${groomSide.address}
            </div>
          </div>

          <div class="p-8 border-2 border-[#e0b768] bg-[#1a2126] relative text-center">
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[#e0b768] text-[#14191c] font-title font-bold text-xs uppercase tracking-widest">
              BRIDE'S PARENTS
            </div>
            
            <div class="space-y-4 my-6">
              <div>
                <span class="text-[10px] font-mono uppercase tracking-widest text-[#e0b768]/60 block">Father</span>
                <strong class="text-2xl font-title text-white tracking-wide block">${brideSide.father}</strong>
              </div>
              <div>
                <span class="text-[10px] font-mono uppercase tracking-widest text-[#e0b768]/60 block">Mother</span>
                <strong class="text-2xl font-title text-white tracking-wide block">${brideSide.mother}</strong>
              </div>
            </div>

            <div class="pt-4 border-t border-[#e0b768]/30 text-xs font-serif text-[#c7af85]">
              ${brideSide.address}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

// 8. TROPICAL DESTINATION: Dual Maritime Passports & Island Visas
function renderTropicalFamily({ config, content, groomSide, brideSide }) {
  return `
    <section id="module-family" class="py-24 px-4 bg-[#e8f6f5] text-[#0a444c]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#0d6e75] block mb-2">FAMILY MANIFEST</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#09353b] mb-2">Parents of the Couple</h2>
          <div class="text-lg text-[#149d9b]">✦ • ✦ </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div class="p-8 bg-white rounded-2xl border border-[#a6dcd8] shadow-md relative">
            <span class="px-3 py-1 rounded-full bg-[#e3f6f5] text-[#0d6e75] text-[11px] font-bold uppercase tracking-wider inline-block mb-4">
              PORT A: GROOM'S LINEAGE
            </span>
            <div class="space-y-4 my-4">
              <div>
                <span class="text-xs text-[#3b6d73] uppercase block">Father</span>
                <strong class="text-xl text-[#09353b]">${groomSide.father}</strong>
              </div>
              <div>
                <span class="text-xs text-[#3b6d73] uppercase block">Mother</span>
                <strong class="text-xl text-[#09353b]">${groomSide.mother}</strong>
              </div>
            </div>
            <div class="pt-4 border-t border-[#d0f0ee] text-xs text-[#3b6d73]">
              Địa Điểm: ${groomSide.address}
            </div>
          </div>

          <div class="p-8 bg-white rounded-2xl border border-[#a6dcd8] shadow-md relative">
            <span class="px-3 py-1 rounded-full bg-[#e3f6f5] text-[#0d6e75] text-[11px] font-bold uppercase tracking-wider inline-block mb-4">
              PORT B: BRIDE'S LINEAGE
            </span>
            <div class="space-y-4 my-4">
              <div>
                <span class="text-xs text-[#3b6d73] uppercase block">Father</span>
                <strong class="text-xl text-[#09353b]">${brideSide.father}</strong>
              </div>
              <div>
                <span class="text-xs text-[#3b6d73] uppercase block">Mother</span>
                <strong class="text-xl text-[#09353b]">${brideSide.mother}</strong>
              </div>
            </div>
            <div class="pt-4 border-t border-[#d0f0ee] text-xs text-[#3b6d73]">
              Địa Điểm: ${brideSide.address}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

// 9. K-WEDDING MINIMAL: Seoul Editorial Double-Spread
function renderKWeddingFamily({ config, content, groomSide, brideSide }) {
  return `
    <section id="module-family" class="py-24 px-4 bg-[#f8f7f4] text-[#222]">
      <div class="max-w-4xl mx-auto border-t border-b border-[#ddd] py-12">
        
        <div class="text-center mb-12">
          <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-700 font-bold block mb-2">FAMILY INTERVIEW // ISSUE 1128</span>
          <h2 class="text-3xl sm:text-4xl font-serif font-light text-stone-900 mb-2">The Two Families</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div class="space-y-4 border-l-2 border-stone-900 pl-6">
            <span class="text-xs font-mono uppercase tracking-widest text-stone-900 font-bold block">GROOM'S SIDE</span>
            <div>
              <span class="text-xs text-stone-700 font-medium block">Father</span>
              <div class="text-2xl font-serif text-stone-900 font-medium">${groomSide.father}</div>
            </div>
            <div>
              <span class="text-xs text-stone-700 font-medium block">Mother</span>
              <div class="text-2xl font-serif text-stone-900 font-medium">${groomSide.mother}</div>
            </div>
            <div class="text-xs text-stone-800 font-mono font-medium pt-2">
              ${groomSide.address}
            </div>
          </div>

          <div class="space-y-4 border-l-2 border-stone-900 pl-6">
            <span class="text-xs font-mono uppercase tracking-widest text-stone-900 font-bold block">BRIDE'S SIDE</span>
            <div>
              <span class="text-xs text-stone-700 font-medium block">Father</span>
              <div class="text-2xl font-serif text-stone-900 font-medium">${brideSide.father}</div>
            </div>
            <div>
              <span class="text-xs text-stone-700 font-medium block">Mother</span>
              <div class="text-2xl font-serif text-stone-900 font-medium">${brideSide.mother}</div>
            </div>
            <div class="text-xs text-stone-800 font-mono font-medium pt-2">
              ${brideSide.address}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

// 10. WATERCOLOR ROMANCE: Soft Frosted Glassmorphism with Pastel Petals
function renderWatercolorFamily({ config, content, groomSide, brideSide }) {
  return `
    <section id="module-family" class="py-24 px-4 bg-[#fbf5f9] text-[#4d384d]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-[#b876a2] block mb-2">WITH LOVE &amp; BLESSINGS</span>
          <h2 class="text-3xl sm:text-5xl font-serif italic text-[#3b253b] mb-2">Our Beloved Families</h2>
          <div class="text-lg text-[#d88bb5]">✦ • ✦</div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div class="p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-[#f0d8e8] shadow-lg text-center">
            <span class="px-4 py-1 rounded-full bg-[#fde2ea] text-[#a64a78] text-xs font-serif font-bold uppercase tracking-wider inline-block mb-4">
              Nhà Trai
            </span>
            <div class="space-y-3 font-serif my-4">
              <div>
                <span class="text-xs text-[#8c678c] block">Thân phụ</span>
                <strong class="text-2xl text-[#3b253b] font-normal">${groomSide.father}</strong>
              </div>
              <div>
                <span class="text-xs text-[#8c678c] block">Thân mẫu</span>
                <strong class="text-2xl text-[#3b253b] font-normal">${groomSide.mother}</strong>
              </div>
            </div>
            <div class="pt-4 border-t border-[#f2e1ed] text-xs text-[#7a587a]">
              Địa Điểm: ${groomSide.address}
            </div>
          </div>

          <div class="p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-[#f0d8e8] shadow-lg text-center">
            <span class="px-4 py-1 rounded-full bg-[#fde2ea] text-[#a64a78] text-xs font-serif font-bold uppercase tracking-wider inline-block mb-4">
              Nhà Gái
            </span>
            <div class="space-y-3 font-serif my-4">
              <div>
                <span class="text-xs text-[#8c678c] block">Thân phụ</span>
                <strong class="text-2xl text-[#3b253b] font-normal">${brideSide.father}</strong>
              </div>
              <div>
                <span class="text-xs text-[#8c678c] block">Thân mẫu</span>
                <strong class="text-2xl text-[#3b253b] font-normal">${brideSide.mother}</strong>
              </div>
            </div>
            <div class="pt-4 border-t border-[#f2e1ed] text-xs text-[#7a587a]">
              Địa Điểm: ${brideSide.address}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleInvitation.js ---
/**
 * Module 4: Lời Mời Trân Quý (Bespoke Physical-Style Wedding Invitation Card)
 * 10 Radically Distinct, Museum-Grade Design Archetypes:
 * 1. vietnamese-heritage: Sớ Hỷ Hoàng Cung Lụa Đỏ dát vàng, triện son Song Hỷ
 * 2. minimalist-modern: Thẻ Mời Kiến Trúc Thụy Sĩ Swiss Style dập chìm
 * 3. luxury-gold-foil: Thiệp Hoàng Gia Versailles Folio nhung đen ép kim 24K
 * 4. pressed-botanical: Giấy Mỹ Thuật Xé Mép Thủ Công đính nhành ô liu & sáp niêm
 * 5. bohemian-rustic: Thiệp Giấy Kraft Sa Mạc mộc mạc cỏ lau & nơ cói
 * 6. washi-ikebana-zen: Giấy Washi Dâu Tằm Kyoto mực thuỷ mặc & triện Inkan
 * 7. art-deco-1920s: Thiệp Dạ Vũ Gatsby 1920s viền quạt nan vàng kim lộng lẫy
 * 8. tropical-destination: Tấm Thẻ Lên Tàu Nghỉ Dưỡng Tình Yêu miền nhiệt đới
 * 9. k-wedding-minimal: Tấm Thiệp Giấy Mờ Vellum Seoul Editorial Chic thanh khiết
 * 10. watercolor-romance: Bức Hoạ Vườn Monet loang màu pastel & cánh hoa mẫu đơn
 */

function renderModuleInvitation({ config, activeTemplate, moduleData, guestName }) {
  const content = moduleData.content || {};
  const couple = config.couple;
  const currentGuest = guestName || "Quý Khách";
  const templateId = activeTemplate.id;

  // Family data lookup from config.modules (or default)
  const familyMod = (config.modules || []).find(m => m.id === 'family');
  const familyContent = familyMod ? familyMod.content : {};
  const groomSide = familyContent.groomSide || {
    title: "NHÀ TRAI",
    father: "Ông Nguyễn Văn Đức",
    mother: "Bà Lê Thị Thu Hà",
    roleDesc: "Trưởng nam",
    address: "Ba Đình, Hà Nội"
  };
  const brideSide = familyContent.brideSide || {
    title: "NHÀ GÁI",
    father: "Ông Trần Quốc Toàn",
    mother: "Bà Phạm Hoàng Yến",
    roleDesc: "Út nữ",
    address: "Quận 1, TP. Hồ Chí Minh"
  };

  const personalizedGreeting = (content.personalGreetingTemplate || "Kính gửi: {guestName}").replace(/\{guestName\}/g, currentGuest);
  const personalizedText = (content.invitationText || "Sự hiện diện của {guestName} là niềm vinh hạnh to lớn cho gia đình chúng tôi.").replace(/\{guestName\}/g, currentGuest);

  const sharedProps = {
    config,
    couple,
    content,
    groomSide,
    brideSide,
    personalizedGreeting,
    personalizedText,
    currentGuest
  };

  const renderers = {
    'vietnamese-heritage': renderVietnameseInvitation,
    'minimalist-modern': renderMinimalistInvitation,
    'luxury-gold-foil': renderLuxuryInvitation,
    'pressed-botanical': renderBotanicalInvitation,
    'bohemian-rustic': renderBohoInvitation,
    'washi-ikebana-zen': renderZenInvitation,
    'art-deco-1920s': renderArtDecoInvitation,
    'tropical-destination': renderTropicalInvitation,
    'k-wedding-minimal': renderKWeddingInvitation,
    'watercolor-romance': renderWatercolorInvitation
  };

  const renderer = renderers[templateId] || renderVietnameseInvitation;
  return renderer(sharedProps);
}

// ========================================================
// 1. VIETNAMESE HERITAGE: Sớ Hỷ Hoàng Cung Lụa Đỏ & Triện Ấn Hoàng Triều
// ========================================================
function renderVietnameseInvitation({ config, couple, content, groomSide, brideSide, personalizedGreeting, personalizedText }) {
  return `
    <section id="module-invitation" class="py-24 px-4 bg-[#780016] text-[#FBF0D9] relative overflow-hidden reveal-on-scroll">
      <!-- Background Brocade Watermark Pattern -->
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#D89F38_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div class="max-w-3xl mx-auto relative">
        
        <!-- Physical Card Container with Gold Frame & Shadow -->
        <div class="p-8 sm:p-14 rounded-3xl border-4 border-[#D89F38] bg-[#8D001A] shadow-[0_25px_60px_rgba(0,0,0,0.7),inset_0_0_40px_rgba(216,159,56,0.15)] text-center relative">
          
          <!-- Traditional Corner Ornaments -->
          <div class="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#D89F38]"></div>
          <div class="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#D89F38]"></div>
          <div class="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#D89F38]"></div>
          <div class="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#D89F38]"></div>

          <!-- Ornate Song Hỷ Top Crest -->
          <div class="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-[#D89F38] bg-[#5A0011] flex items-center justify-center text-3xl text-[#D89F38] font-serif font-bold shadow-lg">
            囍
          </div>

          <span class="text-xs uppercase tracking-[0.35em] text-[#D89F38] font-serif block mb-1">
            THIỆP HỒNG BÁO HỶ
          </span>
          <h2 class="text-2xl sm:text-3xl font-serif text-[#FBF0D9] font-bold tracking-wider mb-6">
            LỄ THÀNH HÔN
          </h2>

          <!-- Parents / Two Families Columns -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-[#D89F38]/40 mb-8 text-xs sm:text-sm font-serif">
            <!-- Nhà Trai -->
            <div class="space-y-1.5 sm:border-r sm:border-[#D89F38]/30 sm:pr-4">
              <span class="text-[#D89F38] font-bold tracking-widest uppercase block text-[11.5px]">${groomSide.title}</span>
              <p class="font-semibold text-base text-[#FFF7E6]"><span class="inline-block whitespace-nowrap">${groomSide.father}</span></p>
              <p class="font-semibold text-base text-[#FFF7E6]"><span class="inline-block whitespace-nowrap">${groomSide.mother}</span></p>
              <p class="text-[#D89F38]/80 text-[11.5px] italic">${groomSide.address}</p>
            </div>
            <!-- Nhà Gái -->
            <div class="space-y-1.5 sm:pl-4">
              <span class="text-[#D89F38] font-bold tracking-widest uppercase block text-[11.5px]">${brideSide.title}</span>
              <p class="font-semibold text-base text-[#FFF7E6]"><span class="inline-block whitespace-nowrap">${brideSide.father}</span></p>
              <p class="font-semibold text-base text-[#FFF7E6]"><span class="inline-block whitespace-nowrap">${brideSide.mother}</span></p>
              <p class="text-[#D89F38]/80 text-[11.5px] italic">${brideSide.address}</p>
            </div>
          </div>

          <!-- Sacred Announcement -->
          <p class="text-xs sm:text-sm font-serif italic text-[#FBF0D9]/80 mb-6">
            Trân trọng kính báo tin vui Lễ Thành Hôn của hai con chúng tôi:
          </p>

          <!-- Couple Names in Prominent Imperial Typography -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 my-6 text-2xl sm:text-4xl font-serif font-bold text-[#D89F38]">
            <span class="inline-block whitespace-nowrap">${couple.groomName}</span>
            <span class="text-lg text-[#FBF0D9]/60 font-serif italic font-normal">&amp;</span>
            <span class="inline-block whitespace-nowrap">${couple.brideName}</span>
          </div>

          <div class="flex items-center justify-center gap-6 text-xs text-[#D89F38]/80 font-serif mb-8">
            <span>(${groomSide.roleDesc || 'Trưởng nam'})</span>
            <span>•</span>
            <span>(${brideSide.roleDesc || 'Út nữ'})</span>
          </div>

          <!-- Personalized Guest Callout Banner -->
          <div class="inline-block px-8 py-3 rounded-full bg-[#D89F38] text-[#5A0011] font-title font-bold text-sm sm:text-base tracking-widest uppercase mb-6 shadow-md">
            ${personalizedGreeting}
          </div>

          <!-- Invitation Message Body -->
          <p class="text-sm sm:text-base leading-relaxed text-[#FCF3DC] mb-8 font-serif max-w-xl mx-auto">
            ${personalizedText}
          </p>

          <!-- Ceremony Time & Location Box -->
          <div class="p-6 rounded-2xl bg-[#5A0011]/80 border border-[#D89F38]/40 max-w-xl mx-auto mb-8 shadow-inner">
            <span class="text-[11.5px] uppercase tracking-widest text-[#D89F38] font-bold block mb-1">Thời Gian &amp; Địa Điểm Tiệc Cưới</span>
            <p class="text-base sm:text-lg font-serif font-bold text-white mb-1">18:00 • Thứ Bảy, Ngày 28 Tháng 11 Năm 2026</p>
            <p class="text-xs font-serif italic text-[#D89F38]/90 mb-2">(Tức ngày 20 tháng 10 năm Bính Ngọ)</p>
            <p class="text-xs text-[#FCF3DC]/80 font-sans">Trung Tâm Hội Nghị White Palace, Hà Nội</p>
          </div>

          <!-- Vermilion Seal / Stamp -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-[#D89F38]/60 bg-[#9B1B1E] text-xs font-serif text-[#D89F38] tracking-widest uppercase">
            <span>印</span> <span>Trăm Năm Gắn Kết • Hạnh Phúc Vẹn Toàn</span>
          </div>

        </div>

      </div>
    </section>
  `;
}

// ========================================================
// 2. MINIMALIST MODERN: Stark Swiss Architectural Typographic Card
// ========================================================
function renderMinimalistInvitation({ config, couple, content, groomSide, brideSide, personalizedGreeting, personalizedText }) {
  return `
    <section id="module-invitation" class="py-24 px-6 bg-[#0f0f0f] text-white font-sans border-b border-white/10 reveal-on-scroll">
      <div class="max-w-4xl mx-auto">
        
        <div class="border-2 border-white/30 bg-[#161616] p-8 sm:p-14 shadow-2xl relative space-y-8">
          
          <!-- Top Metadata Grid Header -->
          <div class="flex flex-wrap justify-between items-center text-xs font-mono tracking-widest uppercase text-white/50 border-b border-white/15 pb-4">
            <div>FOLIO: #INV-2026-MINH-ANH</div>
            <div>STATUS: CONFIRMED SOLEMNIZATION</div>
            <div>EDITION: 01/01</div>
          </div>

          <!-- Formal Header -->
          <div class="space-y-2">
            <span class="text-xs font-mono uppercase tracking-[0.3em] text-white/60 block">DOCUMENT // FORMAL INVITATION</span>
            <h2 class="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white uppercase">
              THE MARRIAGE OF <span class="inline-block whitespace-nowrap font-bold">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap font-bold">${couple.brideShortName}</span>
            </h2>
          </div>

          <!-- Family Credentials Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-white/15 text-xs font-mono">
            <div>
              <span class="text-white/40 block mb-1 uppercase tracking-wider">// PATERNAL LINE</span>
              <p class="font-bold text-white text-sm"><span class="inline-block whitespace-nowrap">${groomSide.father}</span> &amp; <span class="inline-block whitespace-nowrap">${groomSide.mother}</span></p>
              <p class="text-white/60">${groomSide.address}</p>
            </div>
            <div>
              <span class="text-white/40 block mb-1 uppercase tracking-wider">// MATERNAL LINE</span>
              <p class="font-bold text-white text-sm"><span class="inline-block whitespace-nowrap">${brideSide.father}</span> &amp; <span class="inline-block whitespace-nowrap">${brideSide.mother}</span></p>
              <p class="text-white/60">${brideSide.address}</p>
            </div>
          </div>

          <!-- Recipient Highlight -->
          <div class="p-4 bg-white/5 border-l-4 border-white font-mono text-base sm:text-lg font-bold tracking-tight text-white uppercase">
            ${personalizedGreeting}
          </div>

          <!-- Invitation Text -->
          <p class="text-sm sm:text-lg font-light text-white/90 leading-relaxed max-w-3xl">
            ${personalizedText}
          </p>

          <!-- Precision Date & Coordinate Box -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15 font-mono text-xs text-white/70">
            <div>
              <span class="text-white/40 block uppercase">DATE &amp; TIME</span>
              <span class="text-white font-bold">28.11.2026 // 18:00 GMT+7</span>
            </div>
            <div>
              <span class="text-white/40 block uppercase">VENUE PROTOCOL</span>
              <span class="text-white font-bold">WHITE PALACE BALLROOM</span>
            </div>
            <div>
              <span class="text-white/40 block uppercase">COORDINATES</span>
              <span class="text-white font-bold">21.0285° N, 105.8542° E</span>
            </div>
          </div>

          <!-- Signoff Monogram -->
          <div class="flex justify-between items-end pt-4">
            <span class="text-xs font-mono text-white/40 uppercase">WE AWAIT YOUR HONORABLE PRESENCE</span>
            <span class="font-mono text-xl sm:text-2xl font-black tracking-widest text-white">[${couple.monogram}]</span>
          </div>

        </div>

      </div>
    </section>
  `;
}

// ========================================================
// 3. LUXURY GOLD FOIL: Versailles Gilded Royal Folio
// ========================================================
function renderLuxuryInvitation({ config, couple, content, groomSide, brideSide, personalizedGreeting, personalizedText }) {
  return `
    <section id="module-invitation" class="py-24 px-4 bg-[#0a0a0f] text-[#f7e8c3] relative reveal-on-scroll">
      <div class="max-w-3xl mx-auto">
        
        <div class="p-8 sm:p-14 border-2 border-[#D4AF37] bg-[#12121a] shadow-[0_20px_70px_rgba(0,0,0,0.9),inset_0_0_60px_rgba(212,175,55,0.12)] text-center relative overflow-hidden">
          
          <!-- Acanthus Gilded Corner Flourishes -->
          <div class="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]"></div>
          <div class="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]"></div>
          <div class="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]"></div>
          <div class="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]"></div>

          <!-- Royal Monogram Crest -->
          <div class="w-16 h-16 mx-auto mb-4 border-2 border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] text-2xl shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            ⚜
          </div>

          <span class="text-xs font-serif uppercase tracking-[0.4em] text-[#D4AF37] block mb-2">ROYAL SOLEMNIZATION</span>
          <h2 class="text-2xl sm:text-4xl font-serif text-[#FFF] tracking-wider mb-6">
            LỄ THÀNH HÔN HOÀNG GIA
          </h2>

          <!-- Parents announcement -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-[#D4AF37]/30 mb-8 font-serif text-xs sm:text-sm">
            <div class="space-y-1">
              <span class="text-[#D4AF37] tracking-widest text-[11.5px] uppercase block">${groomSide.title}</span>
              <p class="text-white font-medium text-base"><span class="inline-block whitespace-nowrap">${groomSide.father}</span></p>
              <p class="text-white font-medium text-base"><span class="inline-block whitespace-nowrap">${groomSide.mother}</span></p>
            </div>
            <div class="space-y-1">
              <span class="text-[#D4AF37] tracking-widest text-[11.5px] uppercase block">${brideSide.title}</span>
              <p class="text-white font-medium text-base"><span class="inline-block whitespace-nowrap">${brideSide.father}</span></p>
              <p class="text-white font-medium text-base"><span class="inline-block whitespace-nowrap">${brideSide.mother}</span></p>
            </div>
          </div>

          <!-- Couple Names -->
          <div class="text-2xl sm:text-4xl font-serif text-[#D4AF37] tracking-widest font-bold my-4">
            <span class="inline-block whitespace-nowrap">${couple.groomName}</span> <span class="text-white font-light text-xl">&amp;</span> <span class="inline-block whitespace-nowrap">${couple.brideName}</span>
          </div>

          <!-- Personalized Greeting -->
          <div class="inline-block px-8 py-2.5 border-2 border-[#D4AF37] text-base sm:text-lg font-serif text-white tracking-wide my-6 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            ${personalizedGreeting}
          </div>

          <p class="text-sm sm:text-base leading-relaxed text-[#F7E8C3]/90 mb-8 font-serif max-w-xl mx-auto">
            ${personalizedText}
          </p>

          <!-- Venue & Time -->
          <div class="p-6 border border-[#D4AF37]/40 max-w-lg mx-auto mb-8 font-serif">
            <p class="text-xs uppercase tracking-widest text-[#D4AF37] mb-1">Gala Banquet Reception</p>
            <p class="text-lg font-bold text-white mb-1">18:00 • Saturday, November 28, 2026</p>
            <p class="text-xs text-[#F7E8C3]/75">Grand Imperial Ballroom, Luxury Hotel Hanoi</p>
          </div>

          <p class="text-xs font-serif uppercase tracking-[0.25em] text-[#D4AF37]/80">
            AMOR VINCIT OMNIA • TÌNH YÊU CHIẾN THẮNG TẤT CẢ
          </p>

        </div>

      </div>
    </section>
  `;
}

// ========================================================
// 4. PRESSED BOTANICAL: Deckle-edge Handmade Cotton Rag Paper
// ========================================================
function renderBotanicalInvitation({ config, couple, content, groomSide, brideSide, personalizedGreeting, personalizedText }) {
  return `
    <section id="module-invitation" class="py-24 px-4 bg-[#F5F2EB] text-[#2C3D2C] relative reveal-on-scroll">
      <div class="max-w-3xl mx-auto">
        
        <div class="p-8 sm:p-14 bg-[#FCFBF8] border border-[#D9D4C5] shadow-xl rounded-md text-center relative">
          
          <!-- Handmade Paper Washi Tape Stamp -->
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#E3DAC9]/80 rotate-1 shadow-xs border border-[#C5BBAA] pointer-events-none"></div>

          <!-- Botanical Leaf Icon -->
          <div class="w-12 h-12 mx-auto mb-3 text-[#4A6741] flex items-center justify-center text-2xl">
            🌿
          </div>

          <span class="text-xs font-mono uppercase tracking-[0.3em] text-[#4A6741] block mb-2">BOTANICAL INVITATION</span>
          <h2 class="text-2xl sm:text-4xl font-serif text-[#2C3D2C] font-normal mb-6">
            Thiệp Cưới Mộc Miên
          </h2>

          <!-- Parents Presentation -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-[#4A6741]/20 mb-8 font-serif text-xs sm:text-sm">
            <div class="space-y-1">
              <span class="text-[#4A6741] font-semibold uppercase tracking-wider text-[11.5px] block">${groomSide.title}</span>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${groomSide.father}</span></p>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${groomSide.mother}</span></p>
            </div>
            <div class="space-y-1">
              <span class="text-[#4A6741] font-semibold uppercase tracking-wider text-[11.5px] block">${brideSide.title}</span>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${brideSide.father}</span></p>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${brideSide.mother}</span></p>
            </div>
          </div>

          <!-- Couple Typography -->
          <div class="text-2xl sm:text-4xl font-serif text-[#3A5632] italic font-normal my-4">
            <span class="inline-block whitespace-nowrap">${couple.groomName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideName}</span>
          </div>

          <!-- Guest Greeting Badge -->
          <div class="inline-block px-6 py-2 rounded-full bg-[#EBF1EB] border border-[#CBD8CB] text-sm sm:text-base font-serif italic text-[#2C3D2C] my-6">
            ${personalizedGreeting}
          </div>

          <p class="text-sm sm:text-base leading-relaxed text-[#3A4D3A] mb-8 font-serif max-w-xl mx-auto">
            ${personalizedText}
          </p>

          <!-- Date & Venue -->
          <div class="p-6 bg-[#F3F6F3] border-l-4 border-[#4A6741] max-w-lg mx-auto mb-6 text-left font-serif">
            <p class="text-xs uppercase tracking-widest text-[#4A6741] mb-1 font-bold">Lễ Thành Hôn &amp; Tiệc Chiêu Đãi</p>
            <p class="text-base sm:text-lg font-bold text-[#2C3D2C] mb-1">18:00 • Thứ Bảy, Ngày 28 Tháng 11 Năm 2026</p>
            <p class="text-xs text-stone-600">Khu Nghỉ Dưỡng Sinh Thái Thảo Nguyên, Hà Nội</p>
          </div>

          <p class="text-xs font-mono uppercase tracking-widest text-[#4A6741]/80">
            NỞ HOA BÌNH YÊN • TRỌN ĐỜI GẮN KẾT
          </p>

        </div>

      </div>
    </section>
  `;
}

// ========================================================
// 5. BOHEMIAN RUSTIC: Desert Sun Kraft Parchment
// ========================================================
function renderBohoInvitation({ config, couple, content, groomSide, brideSide, personalizedGreeting, personalizedText }) {
  return `
    <section id="module-invitation" class="py-24 px-4 bg-[#F7EFE6] text-[#713F28] relative reveal-on-scroll">
      <div class="max-w-3xl mx-auto">
        
        <div class="p-8 sm:p-14 rounded-3xl bg-[#FFF9F2] border-2 border-[#D99873]/70 shadow-2xl text-center relative overflow-hidden">
          
          <div class="text-3xl text-[#C26D43] mb-2">✦</div>

          <span class="text-xs uppercase tracking-[0.3em] font-sans font-bold text-[#C26D43] block mb-2">
            BOHEMIAN WEDDING CELEBRATION
          </span>
          <h2 class="text-2xl sm:text-4xl font-serif text-[#713F28] font-bold mb-6">
            Lời Hẹn Dưới Bầu Trời Sao
          </h2>

          <!-- Parents Presentation -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-[#D99873]/30 mb-8 font-serif text-xs sm:text-sm">
            <div class="space-y-1">
              <span class="text-[#C26D43] font-bold uppercase tracking-wider text-[11.5px] block">${groomSide.title}</span>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${groomSide.father}</span></p>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${groomSide.mother}</span></p>
            </div>
            <div class="space-y-1">
              <span class="text-[#C26D43] font-bold uppercase tracking-wider text-[11.5px] block">${brideSide.title}</span>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${brideSide.father}</span></p>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${brideSide.mother}</span></p>
            </div>
          </div>

          <!-- Couple Names -->
          <div class="text-2xl sm:text-4xl font-serif text-[#A84A22] font-bold my-4">
            <span class="inline-block whitespace-nowrap">${couple.groomName}</span> <span class="text-[#C26D43] font-normal">&amp;</span> <span class="inline-block whitespace-nowrap">${couple.brideName}</span>
          </div>

          <!-- Greeting -->
          <div class="inline-block px-8 py-3 rounded-full bg-[#C26D43]/15 text-sm sm:text-base font-serif font-bold text-[#844C33] my-6">
            ${personalizedGreeting}
          </div>

          <p class="text-sm sm:text-base leading-relaxed text-[#63331D] mb-8 font-serif max-w-xl mx-auto">
            ${personalizedText}
          </p>

          <!-- Venue & Time -->
          <div class="p-6 rounded-2xl bg-[#F5E6D6] border border-[#D99873]/50 max-w-lg mx-auto mb-6 text-center font-serif">
            <p class="text-xs uppercase tracking-widest text-[#844C33] font-bold mb-1">Sunset Ceremony &amp; Bonfire Party</p>
            <p class="text-base sm:text-lg font-bold text-[#713F28] mb-1">18:00 • Thứ Bảy, Ngày 28 Tháng 11 Năm 2026</p>
            <p class="text-xs text-[#844C33]">Đồi Gió Rustic Haven, Hà Nội</p>
          </div>

          <p class="text-xs font-sans uppercase tracking-widest text-[#C26D43]">
            CÙNG KHIÊU VŨ DƯỚI ÁNH HOÀNG HÔN
          </p>

        </div>

      </div>
    </section>
  `;
}

// ========================================================
// 6. WASHI IKEBANA ZEN: Kyoto Washi Mulberry Paper Letter
// ========================================================
function renderZenInvitation({ config, couple, content, groomSide, brideSide, personalizedGreeting, personalizedText }) {
  return `
    <section id="module-invitation" class="py-24 px-4 bg-[#EFECE6] text-[#2C2B29] relative reveal-on-scroll">
      <div class="max-w-3xl mx-auto">
        
        <div class="p-8 sm:p-14 bg-[#FAF8F4] border border-[#DCD8CE] shadow-lg text-center relative">
          
          <!-- Japanese Vermilion Inkan Stamp -->
          <div class="w-12 h-12 mx-auto mb-4 bg-[#B33927] text-white flex items-center justify-center text-sm font-serif font-bold rounded-sm shadow-md">
            絆
          </div>

          <span class="text-xs font-mono uppercase tracking-[0.35em] text-[#78746C] block mb-2">ICHIGO ICHIE • NHẤT KỲ NHẤT HỘI</span>
          <h2 class="text-2xl sm:text-3xl font-serif text-[#1F1E1C] font-normal mb-6">
            Thư Mời Hỷ Sự Thiền Môn
          </h2>

          <!-- Parents Presentation -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-stone-300 mb-8 font-serif text-xs sm:text-sm">
            <div class="space-y-1">
              <span class="text-[#B33927] font-semibold uppercase tracking-wider text-[11.5px] block">${groomSide.title}</span>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${groomSide.father}</span></p>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${groomSide.mother}</span></p>
            </div>
            <div class="space-y-1">
              <span class="text-[#B33927] font-semibold uppercase tracking-wider text-[11.5px] block">${brideSide.title}</span>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${brideSide.father}</span></p>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${brideSide.mother}</span></p>
            </div>
          </div>

          <!-- Couple -->
          <div class="text-2xl sm:text-4xl font-serif text-[#2C2B29] tracking-widest my-4">
            <span class="inline-block whitespace-nowrap">${couple.groomName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideName}</span>
          </div>

          <!-- Greeting -->
          <div class="inline-block px-8 py-2 border-b-2 border-[#B33927] text-base sm:text-lg font-serif text-[#1F1E1C] my-6">
            ${personalizedGreeting}
          </div>

          <p class="text-sm sm:text-base leading-relaxed text-[#403E3B] mb-8 font-serif max-w-xl mx-auto">
            ${personalizedText}
          </p>

          <!-- Venue & Time -->
          <div class="p-6 bg-[#F0EDE6] max-w-lg mx-auto mb-6 font-serif text-stone-700">
            <p class="text-xs uppercase tracking-widest text-[#B33927] mb-1 font-bold">Lễ Hằng Thuận &amp; Tiệc Chay Tịnh</p>
            <p class="text-base sm:text-lg font-bold text-stone-900 mb-1">18:00 • Thứ Bảy, 28.11.2026</p>
            <p class="text-xs text-stone-600">Thiền Viện Trúc Lâm Sóc Sơn, Hà Nội</p>
          </div>

          <p class="text-xs font-serif text-[#78746C] italic">
            “Gặp gỡ một lần, trân quý một đời.”
          </p>

        </div>

      </div>
    </section>
  `;
}

// ========================================================
// 7. ART DECO 1920s: The Great Gatsby VIP Soirée Golden Ticket
// ========================================================
function renderArtDecoInvitation({ config, couple, content, groomSide, brideSide, personalizedGreeting, personalizedText }) {
  return `
    <section id="module-invitation" class="py-24 px-4 bg-[#101417] text-[#E0B768] relative reveal-on-scroll">
      <div class="max-w-3xl mx-auto">
        
        <div class="p-8 sm:p-14 border-4 border-[#E0B768] bg-[#161C21] shadow-[0_0_60px_rgba(224,183,104,0.25)] text-center relative overflow-hidden">
          
          <span class="text-xs font-mono uppercase tracking-[0.45em] text-[#E0B768] block mb-2">EXCLUSIVE GUEST ADMISSION</span>
          <h2 class="text-2xl sm:text-4xl font-title text-[#F5DEB3] font-bold tracking-widest uppercase mb-6">
            GATSBY WEDDING SOIRÉE
          </h2>

          <!-- Parents Presentation -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y-2 border-[#E0B768]/40 mb-8 font-title text-xs sm:text-sm">
            <div class="space-y-1">
              <span class="text-[#E0B768] font-bold tracking-widest text-[11.5px] uppercase block">${groomSide.title}</span>
              <p class="text-white font-bold text-base"><span class="inline-block whitespace-nowrap">${groomSide.father}</span></p>
              <p class="text-white font-bold text-base"><span class="inline-block whitespace-nowrap">${groomSide.mother}</span></p>
            </div>
            <div class="space-y-1">
              <span class="text-[#E0B768] font-bold tracking-widest text-[11.5px] uppercase block">${brideSide.title}</span>
              <p class="text-white font-bold text-base"><span class="inline-block whitespace-nowrap">${brideSide.father}</span></p>
              <p class="text-white font-bold text-base"><span class="inline-block whitespace-nowrap">${brideSide.mother}</span></p>
            </div>
          </div>

          <!-- Couple -->
          <div class="text-2xl sm:text-4xl font-title text-[#E0B768] tracking-[0.25em] font-bold uppercase my-4">
            <span class="inline-block whitespace-nowrap">${couple.groomName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideName}</span>
          </div>

          <!-- Greeting -->
          <div class="inline-block px-8 py-3 bg-[#E0B768] text-[#101417] text-base sm:text-lg font-title font-bold uppercase tracking-widest my-6 shadow-lg">
            ${personalizedGreeting}
          </div>

          <p class="text-sm sm:text-base leading-relaxed text-[#F0E6D2] mb-8 font-serif max-w-xl mx-auto">
            ${personalizedText}
          </p>

          <!-- Venue & Time -->
          <div class="p-6 border-2 border-[#E0B768]/50 bg-[#0E1317] max-w-lg mx-auto mb-6 font-title">
            <p class="text-xs uppercase tracking-widest text-[#E0B768] mb-1 font-bold">Midnight Champagne Gala</p>
            <p class="text-base sm:text-lg font-bold text-white mb-1">18:00 • SATURDAY, NOVEMBER 28, 2026</p>
            <p class="text-xs text-[#E0B768]/80">The Grand Ballroom, 1920s Metropolis</p>
          </div>

          <p class="text-xs font-mono uppercase tracking-widest text-[#C7AF85]">
            DRESS CODE: BLACK TIE &amp; GLAMOROUS VINTAGE
          </p>

        </div>

      </div>
    </section>
  `;
}

// ========================================================
// 8. TROPICAL DESTINATION: Coastal Luxury Resort Boarding Folio
// ========================================================
function renderTropicalInvitation({ config, couple, content, groomSide, brideSide, personalizedGreeting, personalizedText }) {
  return `
    <section id="module-invitation" class="py-24 px-4 bg-[#EDF9F8] text-[#0A444C] relative reveal-on-scroll">
      <div class="max-w-3xl mx-auto">
        
        <div class="p-8 sm:p-14 rounded-3xl bg-white border-2 border-[#A6DCD8] shadow-2xl text-center relative overflow-hidden">
          
          <div class="text-3xl text-[#0D828A] mb-2">🌴</div>

          <span class="text-xs uppercase tracking-[0.3em] font-sans font-bold text-[#0D828A] block mb-2">
            DESTINATION WEDDING PASSPORT
          </span>
          <h2 class="text-2xl sm:text-4xl font-serif text-[#0A444C] font-bold mb-6">
            Hành Trình Tình Yêu Ven Biển
          </h2>

          <!-- Parents Presentation -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-[#A6DCD8] mb-8 font-sans text-xs sm:text-sm">
            <div class="space-y-1">
              <span class="text-[#0D828A] font-bold uppercase tracking-wider text-[11.5px] block">${groomSide.title}</span>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${groomSide.father}</span></p>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${groomSide.mother}</span></p>
            </div>
            <div class="space-y-1">
              <span class="text-[#0D828A] font-bold uppercase tracking-wider text-[11.5px] block">${brideSide.title}</span>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${brideSide.father}</span></p>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${brideSide.mother}</span></p>
            </div>
          </div>

          <!-- Couple -->
          <div class="text-2xl sm:text-4xl font-serif text-[#0D828A] font-bold my-4">
            <span class="inline-block whitespace-nowrap">${couple.groomName}</span> <span class="text-stone-400 font-light">&amp;</span> <span class="inline-block whitespace-nowrap">${couple.brideName}</span>
          </div>

          <!-- Greeting -->
          <div class="inline-block px-8 py-3 rounded-full bg-[#E0F7F6] text-sm sm:text-base font-serif text-[#09353B] font-bold my-6">
            ${personalizedGreeting}
          </div>

          <p class="text-sm sm:text-base leading-relaxed text-[#1D5259] mb-8 font-sans max-w-xl mx-auto">
            ${personalizedText}
          </p>

          <!-- Venue & Time -->
          <div class="p-6 rounded-2xl bg-[#E0F7F6]/60 border border-[#A6DCD8] max-w-lg mx-auto mb-6 text-center font-sans">
            <p class="text-xs uppercase tracking-widest text-[#0D828A] font-bold mb-1">Oceanfront Vows &amp; Sunset Dinner</p>
            <p class="text-base sm:text-lg font-bold text-[#0A444C] mb-1">18:00 • Thứ Bảy, 28 Tháng 11 Năm 2026</p>
            <p class="text-xs text-[#0D828A]">Vinpearl Luxury Resort &amp; Villas</p>
          </div>

          <p class="text-xs font-sans uppercase tracking-widest text-[#0D828A]">
            SEA YOU AT THE SHORE • HẸN GẶP BẠN BÊN BỜ BIỂN
          </p>

        </div>

      </div>
    </section>
  `;
}

// ========================================================
// 9. K-WEDDING MINIMAL: Seoul Chic Vellum Editorial Overlay
// ========================================================
function renderKWeddingInvitation({ config, couple, content, groomSide, brideSide, personalizedGreeting, personalizedText }) {
  return `
    <section id="module-invitation" class="py-24 px-4 bg-[#F8F7F4] text-[#222] relative reveal-on-scroll">
      <div class="max-w-3xl mx-auto">
        
        <div class="border-2 border-stone-300 bg-white p-8 sm:p-14 shadow-xl text-center space-y-6 relative">
          
          <span class="text-xs font-mono uppercase tracking-[0.35em] text-stone-400 block">SEOUL EDITORIAL // ISSUE 1128</span>
          <h2 class="text-2xl sm:text-4xl font-serif text-stone-900 font-normal">
            Lễ Thành Hôn
          </h2>

          <!-- Parents Presentation -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-stone-200 font-serif text-xs sm:text-sm">
            <div class="space-y-1">
              <span class="text-stone-400 font-mono uppercase tracking-wider text-[11.5px] block">${groomSide.title}</span>
              <p class="font-bold text-stone-900 text-base"><span class="inline-block whitespace-nowrap">${groomSide.father}</span></p>
              <p class="font-bold text-stone-900 text-base"><span class="inline-block whitespace-nowrap">${groomSide.mother}</span></p>
            </div>
            <div class="space-y-1">
              <span class="text-stone-400 font-mono uppercase tracking-wider text-[11.5px] block">${brideSide.title}</span>
              <p class="font-bold text-stone-900 text-base"><span class="inline-block whitespace-nowrap">${brideSide.father}</span></p>
              <p class="font-bold text-stone-900 text-base"><span class="inline-block whitespace-nowrap">${brideSide.mother}</span></p>
            </div>
          </div>

          <!-- Couple -->
          <div class="text-2xl sm:text-4xl font-serif text-stone-900 font-normal my-4">
            <span class="inline-block whitespace-nowrap">${couple.groomName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideName}</span>
          </div>

          <!-- Greeting -->
          <div class="inline-block px-8 py-2 border-b border-stone-900 text-base sm:text-lg font-serif text-stone-900 my-4">
            ${personalizedGreeting}
          </div>

          <p class="text-sm sm:text-base leading-relaxed text-stone-700 font-serif max-w-xl mx-auto">
            ${personalizedText}
          </p>

          <!-- Venue & Time -->
          <div class="p-6 border border-stone-200 bg-stone-50 max-w-lg mx-auto font-serif">
            <p class="text-xs uppercase tracking-widest text-stone-500 mb-1">Reception Banquet</p>
            <p class="text-base sm:text-lg font-bold text-stone-900 mb-1">18:00 • Thứ Bảy, 28.11.2026</p>
            <p class="text-xs text-stone-600">The Shilla Grand Hall, Hà Nội</p>
          </div>

          <p class="text-xs font-mono uppercase tracking-widest text-stone-400">
            A BEAUTIFUL DAY BEGINS WITH YOU
          </p>

        </div>

      </div>
    </section>
  `;
}

// ========================================================
// 10. WATERCOLOR ROMANCE: Monet Pastel Water Garden Impressionist Folio
// ========================================================
function renderWatercolorInvitation({ config, couple, content, groomSide, brideSide, personalizedGreeting, personalizedText }) {
  return `
    <section id="module-invitation" class="py-24 px-4 bg-[#FDF7FA] text-[#4D384D] relative reveal-on-scroll">
      <div class="max-w-3xl mx-auto">
        
        <div class="p-8 sm:p-14 rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-rose-200/60 shadow-2xl text-center relative overflow-hidden">
          
          <div class="text-3xl text-rose-400 mb-2">🌸</div>

          <span class="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-rose-500 block mb-2">
            MONET PASTEL GARDEN INVITATION
          </span>
          <h2 class="text-2xl sm:text-4xl font-serif text-[#6B325B] font-bold mb-6">
            Bản Tình Ca Mùa Thu
          </h2>

          <!-- Parents Presentation -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-rose-200/70 mb-8 font-serif text-xs sm:text-sm">
            <div class="space-y-1">
              <span class="text-rose-500 font-semibold uppercase tracking-wider text-[11.5px] block">${groomSide.title}</span>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${groomSide.father}</span></p>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${groomSide.mother}</span></p>
            </div>
            <div class="space-y-1">
              <span class="text-rose-500 font-semibold uppercase tracking-wider text-[11.5px] block">${brideSide.title}</span>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${brideSide.father}</span></p>
              <p class="font-bold text-stone-800 text-base"><span class="inline-block whitespace-nowrap">${brideSide.mother}</span></p>
            </div>
          </div>

          <!-- Couple in Soft Watercolor Script -->
          <div class="text-2xl sm:text-4xl font-serif text-[#8A3361] italic font-bold my-4">
            <span class="inline-block whitespace-nowrap">${couple.groomName}</span> <span class="text-rose-300 font-normal">&amp;</span> <span class="inline-block whitespace-nowrap">${couple.brideName}</span>
          </div>

          <!-- Greeting -->
          <div class="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-rose-100 to-purple-100 text-sm sm:text-base font-serif italic text-[#8A3361] font-bold my-6 shadow-sm">
            ${personalizedGreeting}
          </div>

          <p class="text-sm sm:text-base leading-relaxed text-[#593D59] mb-8 font-serif max-w-xl mx-auto">
            ${personalizedText}
          </p>

          <!-- Venue & Time -->
          <div class="p-6 rounded-2xl bg-gradient-to-br from-rose-50/80 to-purple-50/80 border border-rose-200/80 max-w-lg mx-auto mb-6 text-center font-serif">
            <p class="text-xs uppercase tracking-widest text-rose-500 font-bold mb-1">Tiệc Cưới Vườn Hoa Cổ Điển</p>
            <p class="text-base sm:text-lg font-bold text-[#6B325B] mb-1">18:00 • Thứ Bảy, Ngày 28 Tháng 11 Năm 2026</p>
            <p class="text-xs text-purple-700/80">Monet Garden Ballroom, White Palace</p>
          </div>

          <p class="text-xs font-serif italic text-rose-400">
            “Gửi trọn yêu thương và hẹn ngày chung vui rực rỡ!”
          </p>

        </div>

      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleStory.js ---
/**
 * Module 5: Chuyện Tình Yêu (Our Love Story Timeline)
 * 10 Radically Distinct Design Archetypes:
 * - vietnamese-heritage: Dải Lụa Đỏ Đồng Tâm & Sớ Kỷ Niệm with Song Hỷ gold coins
 * - minimalist-modern: Monolithic Linear Chrono-Trace with raw milestone coordinates
 * - luxury-gold-foil: Versailles Gilded Court Chronology with royal laurel nodes
 * - pressed-botanical: Field Journal Botanical Growth with washi tape & pressed petals
 * - bohemian-rustic: Scrapbook Road Trip Diary with polaroids & twine bindings
 * - washi-ikebana-zen: Stepping Stones Across Zen Garden with ripple water lines
 * - art-deco-1920s: Great Gatsby Vinyl Record Grooves & Roaring 20s Marquee
 * - tropical-destination: Island Hopper Expedition Log with nautical travel stamps
 * - k-wedding-minimal: Seoul Cinema 35mm Negative Film Strip Stripboard
 * - watercolor-romance: Monet Pastel Water Garden Stream with floating petal milestones
 */

function renderModuleStory({ config, activeTemplate, moduleData }) {
  const content = moduleData.content || {};
  const milestones = content.milestones || [];
  const templateId = activeTemplate.id;

  const renderers = {
    'vietnamese-heritage': renderVietnameseStory,
    'minimalist-modern': renderMinimalistStory,
    'luxury-gold-foil': renderLuxuryStory,
    'pressed-botanical': renderBotanicalStory,
    'bohemian-rustic': renderBohoStory,
    'washi-ikebana-zen': renderZenStory,
    'art-deco-1920s': renderArtDecoStory,
    'tropical-destination': renderTropicalStory,
    'k-wedding-minimal': renderKWeddingStory,
    'watercolor-romance': renderWatercolorStory
  };

  const renderer = renderers[templateId] || renderVietnameseStory;
  return renderer({ config, content, milestones });
}

// 1. VIETNAMESE HERITAGE: Dải Lụa Đỏ Đồng Tâm & Sớ Kỷ Niệm
function renderVietnameseStory({ config, content, milestones }) {
  return `
    <section id="module-story" class="py-24 px-4 bg-[#630012] text-[#fbf0d9] relative">
      <div class="max-w-4xl mx-auto relative z-10">
        
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#f0c05a]/40 bg-[#42000c] text-[#f0c05a] text-xs font-serif tracking-widest uppercase mb-3">
            <span>❖ DUYÊN NỢ BA SINH ❖</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-title text-[#fcf3dc] tracking-tight mb-2">${content.title || "Chuyện Tình Chúng Mình"}</h2>
          <div class="flex items-center justify-center gap-3 text-[#f0c05a] my-2">
            <span class="w-12 h-px bg-current opacity-40"></span>
            <span class="text-lg">囍</span>
            <span class="w-12 h-px bg-current opacity-40"></span>
          </div>
          <p class="text-xs sm:text-sm font-serif italic text-[#f0c05a]/80">${content.subtitle || "Hành trình từ hai người xa lạ đến một tổ ấm"}</p>
        </div>

        <div class="space-y-12 relative">
          <!-- Central Red Silk Thread -->
          <div class="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-[#f0c05a]/40"></div>

          ${milestones.map((m, idx) => {
            const isEven = idx % 2 === 0;
            return `
              <div class="relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}">
                
                <div class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-[#f0c05a] bg-[#800018] items-center justify-center text-xs font-title font-bold text-[#f0c05a] z-10 shadow">
                  ${idx + 1}
                </div>

                <div class="w-full md:w-1/2 p-6 rounded-2xl border-2 border-[#f0c05a] bg-[#800018] shadow-lg ${isEven ? 'md:text-left' : 'md:text-right'}">
                  <span class="inline-block px-3 py-1 rounded-md bg-[#f0c05a] text-[#630012] font-title font-bold text-xs tracking-wider uppercase mb-3 shadow">
                    NĂM ${m.year}
                  </span>
                  <h3 class="text-2xl font-title text-white font-bold mb-2">${m.title}</h3>
                  <p class="text-xs sm:text-sm font-serif text-[#fbf0d9]/90 leading-relaxed mb-3">${m.description}</p>
                  ${m.location ? `<div class="text-xs font-serif text-[#f0c05a]">Địa Điểm: ${m.location}</div>` : ''}
                </div>

                <div class="w-full md:w-1/2 flex justify-center">
                  <div class="w-full max-w-xs h-48 rounded-xl overflow-hidden border-2 border-[#f0c05a] shadow-md">
                    <img src="${m.image || './assets/images/gallery/rings.jpg'}" alt="${m.title}" class="w-full h-full object-cover hover:scale-105 transition duration-500"/>
                  </div>
                </div>

              </div>
            `;
          }).join('')}
        </div>

      </div>
    </section>
  `;
}

// 2. MINIMALIST MODERN: Monolithic Linear Chrono-Trace
function renderMinimalistStory({ config, content, milestones }) {
  return `
    <section id="module-story" class="py-24 px-6 bg-[#141414] text-white font-sans border-b border-white/10">
      <div class="max-w-5xl mx-auto">
        
        <div class="border-b border-white/20 pb-4 mb-12 flex justify-between items-end">
          <div>
            <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 block">MODULE_05 // CHRONOLOGY</span>
            <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">THE JOURNEY</h2>
          </div>
          <div class="font-mono text-xs text-white/40">[STEPS // ${milestones.length}]</div>
        </div>

        <div class="space-y-12">
          ${milestones.map((m, idx) => `
            <div class="border border-white/20 p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div class="md:col-span-3 font-mono">
                <div class="text-xs text-white/40 uppercase">STEP_0${idx + 1}</div>
                <div class="text-3xl font-bold tracking-tight text-white mt-1">${m.year}</div>
                <div class="text-xs text-white/60 mt-1">${m.dateStr || ''}</div>
              </div>

              <div class="md:col-span-5 space-y-2 font-mono">
                <h3 class="text-xl font-bold uppercase tracking-tight text-white">${m.title}</h3>
                <p class="text-xs text-white/70 leading-relaxed">${m.description}</p>
                ${m.location ? `<div class="text-[10px] text-white/40">// LOC: ${m.location}</div>` : ''}
              </div>

              <div class="md:col-span-4 h-40 overflow-hidden border border-white/20">
                <img src="${m.image || './assets/images/gallery/rings.jpg'}" alt="${m.title}" class="w-full h-full object-cover filter grayscale contrast-125"/>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 3. LUXURY GOLD FOIL: Versailles Gilded Court Chronology
function renderLuxuryStory({ config, content, milestones }) {
  return `
    <section id="module-story" class="py-24 px-4 bg-[#0a0a0f] text-[#f7e8c3]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-serif block mb-2">ROYAL CHRONICLES</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#e3c770] via-[#fff4cc] to-[#cf9e38] tracking-wide mb-3">
            Our Love Story
          </h2>
          <div class="flex items-center justify-center gap-4 text-[#d4af37] my-3">
            <span class="w-12 h-px bg-current"></span>
            <span>⚜</span>
            <span class="w-12 h-px bg-current"></span>
          </div>
        </div>

        <div class="space-y-12">
          ${milestones.map((m, idx) => `
            <div class="p-8 border border-[#d4af37]/40 bg-[#12121c] flex flex-col md:flex-row gap-8 items-center shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
              <div class="w-full md:w-2/3 space-y-3 font-serif">
                <div class="flex items-center gap-3 text-xs uppercase tracking-widest text-[#d4af37]">
                  <span>CHAPTER 0${idx + 1}</span>
                  <span>•</span>
                  <span>ANNO ${m.year}</span>
                </div>
                <h3 class="text-2xl text-[#fff] font-normal">${m.title}</h3>
                <p class="text-xs sm:text-sm text-[#f7e8c3]/80 leading-relaxed">${m.description}</p>
                ${m.location ? `<div class="text-xs text-[#d4af37]/70 italic">⚜ ${m.location}</div>` : ''}
              </div>

              <div class="w-full md:w-1/3 h-44 border border-[#d4af37]/50 p-1">
                <img src="${m.image || './assets/images/gallery/rings.jpg'}" alt="${m.title}" class="w-full h-full object-cover"/>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 4. PRESSED BOTANICAL: Field Journal Botanical Growth
function renderBotanicalStory({ config, content, milestones }) {
  return `
    <section id="module-story" class="py-24 px-4 bg-[#f8f6f0] text-[#2c3d2c]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#587358] block mb-2">BOTANICAL FIELD LOG • GROWTH</span>
          <h2 class="text-3xl sm:text-5xl font-serif italic text-[#1f2e1f] mb-3">How We Bloomed</h2>
          <div class="w-16 h-px bg-[#a3b3a3] mx-auto my-3"></div>
        </div>

        <div class="space-y-10">
          ${milestones.map((m, idx) => `
            <div class="p-8 bg-white border border-[#d9d4c5] rounded-sm shadow relative flex flex-col md:flex-row gap-8 items-center">
              <div class="w-full md:w-2/3 space-y-3 font-serif">
                <span class="text-[11px] font-mono uppercase tracking-widest text-[#6b7c6b] block">
                  STAGE 0${idx + 1} // ${m.year}
                </span>
                <h3 class="text-2xl italic text-[#1f2e1f]">${m.title}</h3>
                <p class="text-xs sm:text-sm text-[#475c47] leading-relaxed">${m.description}</p>
                ${m.location ? `<div class="text-xs font-mono text-[#587358]">Địa Điểm: ${m.location}</div>` : ''}
              </div>

              <div class="w-full md:w-1/3 h-44 border border-[#cbd8cb] p-1 bg-[#fbfdfb]">
                <img src="${m.image || './assets/images/gallery/rings.jpg'}" alt="${m.title}" class="w-full h-full object-cover"/>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 5. BOHEMIAN RUSTIC: Scrapbook Road Trip Diary
function renderBohoStory({ config, content, milestones }) {
  return `
    <section id="module-story" class="py-24 px-4 bg-[#fbf6f0] text-[#713f28]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-[#b8623b] block mb-2">ROADMAP OF LOVE</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#522917] mb-2">Our Wild Journey</h2>
          <div class="text-xl text-[#d99873]">✦ • ✦</div>
        </div>

        <div class="space-y-10">
          ${milestones.map((m, idx) => `
            <div class="p-8 rounded-3xl bg-[#fffaf5] border-2 border-[#d99873]/50 shadow-md flex flex-col md:flex-row gap-8 items-center">
              <div class="w-full md:w-2/3 space-y-3 font-serif">
                <span class="px-3 py-1 rounded-full bg-[#c26d43]/15 text-[#a8552e] text-xs font-bold uppercase inline-block">
                  ✦ MILESTONE ${m.year}
                </span>
                <h3 class="text-2xl font-bold text-[#522917]">${m.title}</h3>
                <p class="text-xs sm:text-sm text-[#78432a] leading-relaxed">${m.description}</p>
                ${m.location ? `<div class="text-xs text-[#b8623b]">Địa Điểm: ${m.location}</div>` : ''}
              </div>

              <div class="w-full md:w-1/3 h-44 rounded-2xl overflow-hidden border border-[#eed8c5]">
                <img src="${m.image || './assets/images/gallery/rings.jpg'}" alt="${m.title}" class="w-full h-full object-cover"/>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 6. WASHI IKEBANA ZEN: Stepping Stones Across Zen Garden
function renderZenStory({ config, content, milestones }) {
  return `
    <section id="module-story" class="py-24 px-4 bg-[#f4f2ec] text-[#2c2b29]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-[11px] font-mono uppercase tracking-[0.3em] text-[#3D3B37] font-bold block mb-2">歩み • STEPPING STONES</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#1f1e1c] font-normal mb-2">Dấu Vết Tình Duyên</h2>
          <div class="w-12 h-px bg-[#b33927] mx-auto my-3"></div>
        </div>

        <div class="space-y-10">
          ${milestones.map((m, idx) => `
            <div class="p-8 bg-[#faf8f4] border-2 border-[#dcd8ce] shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div class="w-full md:w-2/3 space-y-3 font-serif">
                <span class="inline-block px-2.5 py-0.5 bg-[#b33927] text-white text-[10px] font-bold rounded-xs">
                  ${m.year} • 第0${idx + 1}章
                </span>
                <h3 class="text-2xl text-[#1f1e1c] font-bold">${m.title}</h3>
                <p class="text-xs sm:text-sm text-[#1f1e1c] leading-relaxed">${m.description}</p>
                ${m.location ? `<div class="text-xs text-[#1f1e1c] font-medium">Địa Điểm: ${m.location}</div>` : ''}
              </div>

              <div class="w-full md:w-1/3 h-44 border border-[#e2ddd3] p-1">
                <img src="${m.image || './assets/images/gallery/rings.jpg'}" alt="${m.title}" class="w-full h-full object-cover"/>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 7. ART DECO 1920s: Great Gatsby Vinyl Record Grooves
function renderArtDecoStory({ config, content, milestones }) {
  return `
    <section id="module-story" class="py-24 px-4 bg-[#121619] text-[#e0b768]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-[10px] font-mono uppercase tracking-[0.4em] text-[#e0b768] block mb-2">CHRONICLE OF PASSION</span>
          <h2 class="text-3xl sm:text-5xl font-title uppercase tracking-widest text-white mb-2">The Golden Era</h2>
          <div class="w-24 h-0.5 bg-[#e0b768] mx-auto my-3"></div>
        </div>

        <div class="space-y-10">
          ${milestones.map((m, idx) => `
            <div class="p-8 border-2 border-[#e0b768] bg-[#191f24] flex flex-col md:flex-row gap-8 items-center">
              <div class="w-full md:w-2/3 space-y-3">
                <span class="px-3 py-1 bg-[#e0b768] text-[#121619] font-title font-bold text-xs uppercase tracking-widest inline-block">
                  TRACK 0${idx + 1} // ${m.year}
                </span>
                <h3 class="text-2xl font-title uppercase text-white tracking-wide">${m.title}</h3>
                <p class="text-xs sm:text-sm font-serif text-[#c7af85] leading-relaxed">${m.description}</p>
                ${m.location ? `<div class="text-xs font-mono text-[#e0b768]">✦ ${m.location}</div>` : ''}
              </div>

              <div class="w-full md:w-1/3 h-44 border border-[#e0b768]/60 p-1">
                <img src="${m.image || './assets/images/gallery/rings.jpg'}" alt="${m.title}" class="w-full h-full object-cover"/>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 8. TROPICAL DESTINATION: Island Hopper Expedition Log
function renderTropicalStory({ config, content, milestones }) {
  return `
    <section id="module-story" class="py-24 px-4 bg-[#f0f9f8] text-[#0a444c]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-widest font-sans font-bold text-[#0d6e75] block mb-2">TRAVEL LOG</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#09353b] mb-2">Island Hopper Romance</h2>
          <div class="text-lg text-[#149d9b]">✦ • ✦ </div>
        </div>

        <div class="space-y-10">
          ${milestones.map((m, idx) => `
            <div class="p-8 rounded-3xl bg-white border border-[#a6dcd8] shadow-md flex flex-col md:flex-row gap-8 items-center">
              <div class="w-full md:w-2/3 space-y-3 font-sans">
                <span class="px-3 py-1 rounded-full bg-[#e3f6f5] text-[#0d6e75] font-bold text-xs uppercase inline-block">
                  PORT 0${idx + 1} // ${m.year}
                </span>
                <h3 class="text-2xl font-serif text-[#09353b] font-bold">${m.title}</h3>
                <p class="text-xs sm:text-sm text-[#3b6d73] leading-relaxed">${m.description}</p>
                ${m.location ? `<div class="text-xs text-[#0d6e75] font-mono">Địa Điểm: ${m.location}</div>` : ''}
              </div>

              <div class="w-full md:w-1/3 h-44 rounded-2xl overflow-hidden border border-[#a6dcd8]">
                <img src="${m.image || './assets/images/gallery/rings.jpg'}" alt="${m.title}" class="w-full h-full object-cover"/>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 9. K-WEDDING MINIMAL: Seoul Cinema 35mm Negative Strip
function renderKWeddingStory({ config, content, milestones }) {
  return `
    <section id="module-story" class="py-24 px-4 bg-[#faf9f6] text-[#222]">
      <div class="max-w-4xl mx-auto border-t border-b border-[#222] py-14">
        
        <div class="text-center mb-12">
          <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-700 font-bold block mb-2">STORYBOARD // ISSUE 1128</span>
          <h2 class="text-3xl sm:text-4xl font-serif font-light text-stone-900 mb-2">Our Chronicle</h2>
        </div>

        <div class="space-y-10">
          ${milestones.map((m, idx) => `
            <div class="border-t-2 border-stone-800 pt-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div class="md:col-span-8 space-y-2 font-serif">
                <span class="text-xs font-mono uppercase tracking-widest text-stone-900 font-bold">FRAME 0${idx + 1} • ${m.year}</span>
                <h3 class="text-2xl text-stone-900 font-bold">${m.title}</h3>
                <p class="text-xs sm:text-sm text-stone-800 leading-relaxed">${m.description}</p>
                ${m.location ? `<div class="text-xs font-mono text-stone-700 font-medium">LOC: ${m.location}</div>` : ''}
              </div>

              <div class="md:col-span-4 h-40 border-2 border-stone-300">
                <img src="${m.image || './assets/images/gallery/rings.jpg'}" alt="${m.title}" class="w-full h-full object-cover"/>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 10. WATERCOLOR ROMANCE: Monet Pastel Water Garden Stream
function renderWatercolorStory({ config, content, milestones }) {
  return `
    <section id="module-story" class="py-24 px-4 bg-[#fdf9fc] text-[#4d384d]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-[#b876a2] block mb-2">GENTLE MEMORIES</span>
          <h2 class="text-3xl sm:text-5xl font-serif italic text-[#3b253b] mb-2">Hành Trình Yêu Thương</h2>
          <div class="text-lg text-[#d88bb5]">✦ • ✦</div>
        </div>

        <div class="space-y-10">
          ${milestones.map((m, idx) => `
            <div class="p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-[#f0d8e8] shadow-lg flex flex-col md:flex-row gap-8 items-center">
              <div class="w-full md:w-2/3 space-y-3 font-serif">
                <span class="px-4 py-1 rounded-full bg-[#fde2ea] text-[#a64a78] text-xs font-bold inline-block">
                  ✦ ${m.year} • Dấu Mốc 0${idx + 1}
                </span>
                <h3 class="text-2xl italic text-[#3b253b]">${m.title}</h3>
                <p class="text-xs sm:text-sm text-[#7a587a] leading-relaxed">${m.description}</p>
                ${m.location ? `<div class="text-xs text-[#b876a2]">Địa Điểm: ${m.location}</div>` : ''}
              </div>

              <div class="w-full md:w-1/3 h-44 rounded-2xl overflow-hidden border border-[#f0d8e8]">
                <img src="${m.image || './assets/images/gallery/rings.jpg'}" alt="${m.title}" class="w-full h-full object-cover"/>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleEvents.js ---
/**
 * Module 6: Sự Kiện Cưới (Wedding Events: Ceremony & Reception)
 * 10 Radically Distinct Design Archetypes:
 * - vietnamese-heritage: Imperial Ceremonial Decree with Lunar Hours and Royal Silk Trims
 * - minimalist-modern: Technical Chronological Protocol with raw monospace time codes
 * - luxury-gold-foil: Versailles Royal Gala Banquet Program with Gilded Acanthus Frames
 * - pressed-botanical: Nature Field Guide Gathering Schedule with botanical leaf motifs
 * - bohemian-rustic: Desert Sunset Festival Schedule with warm terracotta badges
 * - washi-ikebana-zen: Kyoto Shinto & Tea Pavilion Program with quiet Zen harmony
 * - art-deco-1920s: Great Gatsby Ballroom Soirée Program with brass stepped ziggurats
 * - tropical-destination: Coastal Beach Resort Itinerary with nautical flight icons
 * - k-wedding-minimal: Seoul Glasshouse Matrimony Program with editorial serif layout
 * - watercolor-romance: Monet Pastel Water Garden Itinerary with floating petal badges
 */

function renderModuleEvents({ config, activeTemplate, moduleData }) {
  const content = moduleData.content || {};
  const events = content.events || [];
  const templateId = activeTemplate.id;

  const renderers = {
    'vietnamese-heritage': renderVietnameseEvents,
    'minimalist-modern': renderMinimalistEvents,
    'luxury-gold-foil': renderLuxuryEvents,
    'pressed-botanical': renderBotanicalEvents,
    'bohemian-rustic': renderBohoEvents,
    'washi-ikebana-zen': renderZenEvents,
    'art-deco-1920s': renderArtDecoEvents,
    'tropical-destination': renderTropicalEvents,
    'k-wedding-minimal': renderKWeddingEvents,
    'watercolor-romance': renderWatercolorEvents
  };

  const renderer = renderers[templateId] || renderVietnameseEvents;
  return renderer({ config, content, events });
}

// 1. VIETNAMESE HERITAGE: Sớ Nghi Lễ & Giờ Hoàng Đạo
function renderVietnameseEvents({ config, content, events }) {
  return `
    <section id="module-events" class="py-24 px-4 bg-[#630012] text-[#fbf0d9] relative">
      <div class="max-w-5xl mx-auto relative z-10">
        
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#f0c05a]/60 bg-[#42000c] text-[#FFE082] text-xs font-serif font-bold tracking-widest uppercase mb-3">
            <span>❖ GIỜ LÀNH THÀNH HÔN ❖</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-title text-[#fcf3dc] tracking-tight mb-2">${content.title || "Lịch Trình Sự Kiện"}</h2>
          <div class="flex items-center justify-center gap-3 text-[#f0c05a] my-2">
            <span class="w-12 h-px bg-current opacity-40"></span>
            <span class="text-lg">囍</span>
            <span class="w-12 h-px bg-current opacity-40"></span>
          </div>
          <p class="text-xs sm:text-sm font-serif italic text-[#FFE082] font-semibold">${content.subtitle || "Các mốc thời gian và địa điểm diễn ra lễ cưới"}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${events.map((evt, idx) => `
            <div class="p-8 rounded-2xl border-2 border-[#f0c05a] bg-[#800018] shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between relative">
              <div>
                <div class="flex justify-between items-center mb-4 pb-3 border-b border-[#f0c05a]/40">
                  <span class="px-3 py-1 rounded-md bg-[#f0c05a] text-[#630012] font-title font-bold text-xs tracking-wider uppercase">
                    NGHI LỄ 0${idx + 1}
                  </span>
                  <div class="text-right">
                    <span class="font-mono text-xl font-bold text-[#fcf3dc]">${evt.time}</span>
                    <span class="block text-[11px] font-serif text-[#FFE082] font-semibold">${evt.date}</span>
                  </div>
                </div>

                <h3 class="text-2xl font-title text-[#fff] font-bold mb-3">${evt.name}</h3>
                <p class="text-xs sm:text-sm font-serif text-[#fffdfa] mb-6 leading-relaxed">${evt.description}</p>
                
                <div class="p-4 rounded-xl bg-[#45000b] border-2 border-[#f0c05a]/60 mb-6 space-y-2 text-xs font-serif">
                  <div class="font-bold text-[#FFE082] flex items-center gap-2 text-sm">
                    <span>Địa Điểm:</span>
                    <span>${evt.locationName}</span>
                  </div>
                  <div class="text-[#fcf3dc] pl-5 font-medium leading-relaxed">
                    ${evt.address}
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a href="${evt.mapUrl || 'https://maps.google.com'}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center rounded-xl text-center text-xs font-serif font-bold bg-[#f0c05a] text-[#630012] hover:bg-[#fff] transition shadow whitespace-nowrap">
                  Chỉ Đường Google Maps
                </a>
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(evt.name)}&location=${encodeURIComponent(evt.address)}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center rounded-xl text-center text-xs font-serif font-bold bg-[#50000e] border-2 border-[#f0c05a] text-[#FFE082] hover:bg-[#f0c05a] hover:text-[#630012] transition shadow whitespace-nowrap">
                  Thêm Vào Lịch
                </a>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 2. MINIMALIST MODERN: Technical Chronological Protocol
function renderMinimalistEvents({ config, content, events }) {
  return `
    <section id="module-events" class="py-24 px-6 bg-[#141414] text-white font-sans border-b border-white/10">
      <div class="max-w-5xl mx-auto">
        
        <div class="border-b border-white/20 pb-4 mb-12 flex justify-between items-end">
          <div>
            <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-400 block font-bold">MODULE_06 // TIME SCHEDULE</span>
            <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">ITINERARY</h2>
          </div>
          <div class="font-mono text-xs text-stone-300 font-bold">[COUNT // ${events.length}]</div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${events.map((evt, idx) => `
            <div class="border-2 border-stone-700 bg-stone-900/60 p-8 flex flex-col justify-between">
              <div>
                <div class="font-mono text-xs text-stone-300 uppercase tracking-widest border-b border-stone-700 pb-3 mb-4 flex justify-between">
                  <span class="font-bold">EVT_0${idx + 1} // PROTOCOL</span>
                  <span class="text-white font-bold">${evt.time}</span>
                </div>

                <h3 class="text-2xl font-bold uppercase tracking-tight text-white mb-2">${evt.name}</h3>
                <p class="text-xs font-mono text-stone-200 mb-6 leading-relaxed">${evt.description}</p>

                <div class="bg-black/60 border border-stone-700 p-4 mb-6 font-mono text-xs space-y-1">
                  <div class="text-white font-bold">// ${evt.locationName}</div>
                  <div class="text-stone-300">${evt.address}</div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="${evt.mapUrl || 'https://maps.google.com'}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center bg-white text-black font-mono text-xs font-bold uppercase tracking-wider text-center hover:bg-stone-200 transition whitespace-nowrap">
                  NAVIGATE GPS →
                </a>
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(evt.name)}&location=${encodeURIComponent(evt.address)}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center border-2 border-stone-400 text-stone-100 font-mono text-xs font-bold uppercase tracking-wider text-center hover:border-white hover:text-white transition whitespace-nowrap">
                  SYNC CAL
                </a>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 3. LUXURY GOLD FOIL: Versailles Royal Gala Banquet Program
function renderLuxuryEvents({ config, content, events }) {
  return `
    <section id="module-events" class="py-24 px-4 bg-[#0a0a0f] text-[#f7e8c3]">
      <div class="max-w-5xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.4em] text-[#f5ce62] font-serif font-bold block mb-2">ROYAL GALA ITINERARY</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#e3c770] via-[#fff4cc] to-[#cf9e38] tracking-wide mb-3">
            Ceremonial Order
          </h2>
          <div class="flex items-center justify-center gap-4 text-[#d4af37] my-3">
            <span class="w-12 h-px bg-current"></span>
            <span>⚜</span>
            <span class="w-12 h-px bg-current"></span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${events.map((evt, idx) => `
            <div class="p-8 border-2 border-[#d4af37]/60 bg-[#12121c] relative flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
              <div>
                <div class="flex justify-between items-center mb-4 border-b border-[#d4af37]/40 pb-3">
                  <span class="text-xs font-serif uppercase tracking-[0.2em] text-[#f5ce62] font-bold">ACT 0${idx + 1}</span>
                  <span class="font-serif text-lg text-[#f7e8c3] tracking-widest font-bold">${evt.time}</span>
                </div>

                <h3 class="text-2xl font-serif text-[#fff] font-bold mb-3">${evt.name}</h3>
                <p class="text-xs sm:text-sm font-serif text-[#f7e8c3] mb-6 leading-relaxed">${evt.description}</p>

                <div class="p-4 border border-[#d4af37]/40 bg-[#181824] mb-6 text-xs font-serif">
                  <div class="text-[#f5ce62] font-bold text-sm">⚜ ${evt.locationName}</div>
                  <div class="text-[#f7e8c3] mt-1 font-medium">${evt.address}</div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="${evt.mapUrl || 'https://maps.google.com'}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center border border-[#d4af37] bg-[#d4af37] text-black font-serif text-xs font-bold uppercase tracking-widest text-center hover:bg-white transition shadow whitespace-nowrap">
                  Palace Map
                </a>
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(evt.name)}&location=${encodeURIComponent(evt.address)}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center border-2 border-[#d4af37] text-[#f5ce62] font-serif text-xs font-bold uppercase tracking-widest text-center hover:bg-[#d4af37] hover:text-black transition whitespace-nowrap">
                  Calendar
                </a>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 4. PRESSED BOTANICAL: Nature Field Guide Gathering Schedule
function renderBotanicalEvents({ config, content, events }) {
  return `
    <section id="module-events" class="py-24 px-4 bg-[#f8f6f0] text-[#2c3d2c]">
      <div class="max-w-5xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#2D5A30] font-bold block mb-2">FIELD SCHEDULE • CEREMONY</span>
          <h2 class="text-3xl sm:text-5xl font-serif italic text-[#1f2e1f] font-bold mb-3">Order of Gathering</h2>
          <div class="w-16 h-px bg-[#a3b3a3] mx-auto my-3"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${events.map((evt, idx) => `
            <div class="p-8 bg-white border-2 border-[#d9d4c5] rounded-sm shadow-md relative flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-4 border-b border-[#e5dfd2] pb-3">
                  <span class="text-[11px] font-mono uppercase tracking-widest text-[#2D5A30] font-bold">GATHERING 0${idx + 1}</span>
                  <span class="font-mono text-sm font-bold text-[#2c3d2c]">${evt.time}</span>
                </div>

                <h3 class="text-2xl font-serif italic text-[#1f2e1f] font-bold mb-3">${evt.name}</h3>
                <p class="text-xs sm:text-sm font-serif text-[#1f2e1f] mb-6 leading-relaxed">${evt.description}</p>

                <div class="p-4 bg-[#f4f7f4] border-l-4 border-[#2D5A30] mb-6 text-xs font-serif">
                  <div class="font-bold text-[#1e3a24] text-sm">✦ ${evt.locationName}</div>
                  <div class="text-[#263e26] mt-1 font-medium">${evt.address}</div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="${evt.mapUrl || 'https://maps.google.com'}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center bg-[#2D5A30] text-white text-xs font-mono font-bold uppercase tracking-wider text-center rounded-sm hover:bg-[#1e3a24] transition shadow whitespace-nowrap">
                  View Garden Map
                </a>
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(evt.name)}&location=${encodeURIComponent(evt.address)}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center border-2 border-[#2D5A30] text-[#1e3a24] text-xs font-mono font-bold uppercase tracking-wider text-center rounded-sm hover:bg-[#2D5A30] hover:text-white transition whitespace-nowrap">
                  Save Date
                </a>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 5. BOHEMIAN RUSTIC: Desert Sunset Festival Schedule
function renderBohoEvents({ config, content, events }) {
  return `
    <section id="module-events" class="py-24 px-4 bg-[#fbf6f0] text-[#713f28]">
      <div class="max-w-5xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.3em] font-sans font-bold text-[#8C3B18] block mb-2">FESTIVAL LINEUP</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#522917] font-bold mb-2">Timeline of Joy</h2>
          <div class="text-xl text-[#d99873]">✦ • ✦</div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${events.map((evt, idx) => `
            <div class="p-8 rounded-3xl bg-[#fffaf5] border-2 border-[#d99873] shadow-md flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-4 border-b border-[#eed8c5] pb-3">
                  <span class="px-3 py-1 rounded-full bg-[#c26d43]/20 text-[#8C3B18] font-serif font-bold text-xs uppercase">
                    STAGE 0${idx + 1}
                  </span>
                  <span class="font-serif text-lg font-bold text-[#63331d]">${evt.time}</span>
                </div>

                <h3 class="text-2xl font-serif font-bold text-[#522917] mb-3">${evt.name}</h3>
                <p class="text-xs sm:text-sm font-serif text-[#451E11] mb-6 leading-relaxed">${evt.description}</p>

                <div class="p-4 rounded-xl bg-[#f5e6d6] border-2 border-[#d99873] mb-6 text-xs font-serif">
                  <div class="font-bold text-[#5c2410] text-sm">✦ ${evt.locationName}</div>
                  <div class="text-[#451E11] mt-1 font-medium">${evt.address}</div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="${evt.mapUrl || 'https://maps.google.com'}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center rounded-full bg-[#c26d43] text-white text-xs font-sans font-bold uppercase tracking-wider text-center hover:bg-[#a8552e] transition shadow whitespace-nowrap">
                  Festival Map
                </a>
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(evt.name)}&location=${encodeURIComponent(evt.address)}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center rounded-full border-2 border-[#A04A22] text-[#8C3B18] text-xs font-sans font-bold uppercase tracking-wider text-center hover:bg-[#A04A22] hover:text-white transition whitespace-nowrap">
                  Sync
                </a>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 6. WASHI IKEBANA ZEN: Kyoto Shinto & Tea Pavilion Program
function renderZenEvents({ config, content, events }) {
  return `
    <section id="module-events" class="py-24 px-4 bg-[#f4f2ec] text-[#2c2b29]">
      <div class="max-w-5xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-[11px] font-mono uppercase tracking-[0.3em] text-[#3D3B37] font-bold block mb-2">儀式次第 • WEDDING CEREMONY</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#1f1e1c] font-normal mb-2">Thời Gian Hôn Lễ</h2>
          <div class="w-12 h-px bg-[#b33927] mx-auto my-3"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${events.map((evt, idx) => `
            <div class="p-8 bg-[#faf8f4] border-2 border-[#dcd8ce] shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-4 border-b border-[#e5e1d8] pb-3">
                  <span class="inline-block px-2.5 py-0.5 bg-[#b33927] text-white text-[10px] font-serif font-bold rounded-xs">
                    第0${idx + 1}部
                  </span>
                  <span class="font-mono text-sm tracking-wider text-[#1f1e1c] font-bold">${evt.time}</span>
                </div>

                <h3 class="text-2xl font-serif text-[#1f1e1c] font-bold mb-3">${evt.name}</h3>
                <p class="text-xs sm:text-sm font-serif text-[#2c2b29] mb-6 leading-relaxed">${evt.description}</p>

                <div class="p-4 bg-[#f0ede6] border-l-4 border-[#3D3B37] mb-6 text-xs font-serif">
                  <div class="font-bold text-[#1f1e1c] text-sm">✦ ${evt.locationName}</div>
                  <div class="text-[#1f1e1c] mt-1 font-medium">${evt.address}</div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="${evt.mapUrl || 'https://maps.google.com'}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center border-2 border-[#2c2b29] bg-[#2c2b29] text-white text-xs font-serif font-bold tracking-wider text-center hover:bg-white hover:text-[#2c2b29] transition shadow whitespace-nowrap">
                  Bản Đồ Địa Điểm
                </a>
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(evt.name)}&location=${encodeURIComponent(evt.address)}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center border-2 border-[#3D3B37] text-[#1f1e1c] text-xs font-serif font-bold text-center hover:border-[#b33927] hover:bg-[#b33927] hover:text-white transition whitespace-nowrap">
                  Lưu Lịch
                </a>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 7. ART DECO 1920s: Great Gatsby Ballroom Soirée Program
function renderArtDecoEvents({ config, content, events }) {
  return `
    <section id="module-events" class="py-24 px-4 bg-[#121619] text-[#e0b768]">
      <div class="max-w-5xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-[10px] font-mono uppercase tracking-[0.4em] text-[#F5DEB3] font-bold block mb-2">SOIRÉE ORDER OF EVENTS</span>
          <h2 class="text-3xl sm:text-5xl font-title uppercase tracking-widest text-white mb-2">The Grand Schedule</h2>
          <div class="w-24 h-0.5 bg-[#e0b768] mx-auto my-3"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${events.map((evt, idx) => `
            <div class="p-8 border-2 border-[#e0b768] bg-[#191f24] relative flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
              <div>
                <div class="flex justify-between items-center mb-4 border-b border-[#e0b768]/40 pb-3">
                  <span class="px-3 py-1 bg-[#e0b768] text-[#121619] font-title font-bold text-xs uppercase tracking-widest">
                    ACT 0${idx + 1}
                  </span>
                  <span class="font-mono text-lg font-bold text-white">${evt.time}</span>
                </div>

                <h3 class="text-2xl font-title uppercase tracking-wide text-white mb-3">${evt.name}</h3>
                <p class="text-xs sm:text-sm font-serif text-[#E8DCC2] mb-6 leading-relaxed">${evt.description}</p>

                <div class="p-4 border border-[#e0b768]/60 bg-[#121619] mb-6 text-xs font-serif">
                  <div class="text-[#F5DEB3] font-bold text-sm">✦ ${evt.locationName}</div>
                  <div class="text-[#E8DCC2] mt-1 font-medium">${evt.address}</div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="${evt.mapUrl || 'https://maps.google.com'}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center bg-[#e0b768] text-[#121619] font-title font-bold text-xs uppercase tracking-widest text-center hover:bg-white transition shadow whitespace-nowrap">
                  Venue Directions
                </a>
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(evt.name)}&location=${encodeURIComponent(evt.address)}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center border-2 border-[#e0b768] text-[#F5DEB3] font-title font-bold text-xs uppercase tracking-widest text-center hover:bg-[#e0b768] hover:text-[#121619] transition whitespace-nowrap">
                  Calendar
                </a>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 8. TROPICAL DESTINATION: Coastal Beach Resort Itinerary
function renderTropicalEvents({ config, content, events }) {
  return `
    <section id="module-events" class="py-24 px-4 bg-[#f0f9f8] text-[#0a444c]">
      <div class="max-w-5xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-widest font-sans font-bold text-[#063A42] block mb-2">RESORT ITINERARY</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#09353b] font-bold mb-2">Island Timetable</h2>
          <div class="text-lg text-[#149d9b]">✦ • ✦ </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${events.map((evt, idx) => `
            <div class="p-8 rounded-3xl bg-white border-2 border-[#a6dcd8] shadow-md flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-4 border-b border-[#d0f0ee] pb-3">
                  <span class="px-3 py-1 rounded-full bg-[#e3f6f5] text-[#063A42] font-sans font-bold text-xs uppercase">
                    STAGE 0${idx + 1}
                  </span>
                  <span class="font-mono text-base font-bold text-[#09353b]">${evt.time}</span>
                </div>

                <h3 class="text-2xl font-serif text-[#09353b] font-bold mb-3">${evt.name}</h3>
                <p class="text-xs sm:text-sm font-sans text-[#08353b] mb-6 leading-relaxed">${evt.description}</p>

                <div class="p-4 rounded-2xl bg-[#e3f6f5] border border-[#a6dcd8] mb-6 text-xs font-sans">
                  <div class="font-bold text-[#063A42] text-sm">✦ ${evt.locationName}</div>
                  <div class="text-[#08353b] mt-1 font-medium">${evt.address}</div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="${evt.mapUrl || 'https://maps.google.com'}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center rounded-full bg-[#063A42] text-white text-xs font-sans font-bold uppercase tracking-wider text-center hover:bg-[#084b50] transition shadow whitespace-nowrap">
                  Google Map
                </a>
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(evt.name)}&location=${encodeURIComponent(evt.address)}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center rounded-full border-2 border-[#063A42] text-[#063A42] text-xs font-sans font-bold uppercase tracking-wider text-center hover:bg-[#063A42] hover:text-white transition whitespace-nowrap">
                  Add Cal
                </a>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 9. K-WEDDING MINIMAL: Seoul Glasshouse Matrimony Program
function renderKWeddingEvents({ config, content, events }) {
  return `
    <section id="module-events" class="py-24 px-4 bg-[#faf9f6] text-[#222]">
      <div class="max-w-5xl mx-auto border-t-2 border-b-2 border-stone-800 py-14">
        
        <div class="text-center mb-12">
          <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-700 font-bold block mb-2">RUNWAY &amp; CEREMONY // ISSUE 1128</span>
          <h2 class="text-3xl sm:text-4xl font-serif font-normal text-stone-900 mb-2">Event Schedule</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${events.map((evt, idx) => `
            <div class="border-t-2 border-stone-800 pt-6 flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-4">
                  <span class="text-xs font-mono uppercase tracking-widest text-stone-900 font-bold">PROGRAM 0${idx + 1}</span>
                  <span class="font-mono text-sm text-stone-900 font-bold">${evt.time}</span>
                </div>

                <h3 class="text-2xl font-serif text-stone-900 font-bold mb-2">${evt.name}</h3>
                <p class="text-xs font-serif text-stone-800 mb-6 leading-relaxed">${evt.description}</p>

                <div class="py-3 border-y border-stone-300 mb-6 text-xs font-mono space-y-1">
                  <div class="text-stone-900 font-bold">${evt.locationName}</div>
                  <div class="text-stone-700 font-medium">${evt.address}</div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="${evt.mapUrl || 'https://maps.google.com'}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center bg-stone-900 text-white text-xs font-mono font-bold uppercase tracking-widest text-center hover:bg-stone-700 transition whitespace-nowrap">
                  View Map →
                </a>
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(evt.name)}&location=${encodeURIComponent(evt.address)}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center border-2 border-stone-400 text-stone-900 font-mono text-xs font-bold uppercase tracking-widest text-center hover:border-black transition whitespace-nowrap">
                  Sync
                </a>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 10. WATERCOLOR ROMANCE: Monet Pastel Water Garden Itinerary
function renderWatercolorEvents({ config, content, events }) {
  return `
    <section id="module-events" class="py-24 px-4 bg-[#fdf9fc] text-[#4d384d]">
      <div class="max-w-5xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.3em] font-sans font-bold text-[#6B2149] block mb-2">PRECIOUS MOMENTS</span>
          <h2 class="text-3xl sm:text-5xl font-serif italic text-[#3b253b] font-bold mb-2">Order of Celebrations</h2>
          <div class="text-lg text-[#d88bb5]">✦ • ✦</div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${events.map((evt, idx) => `
            <div class="p-8 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#f0d8e8] shadow-lg flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-center mb-4 border-b border-[#f2e1ed] pb-3">
                  <span class="px-3 py-1 rounded-full bg-[#fad0e2] text-[#521636] font-serif font-bold text-xs">
                    Khoảnh Khắc 0${idx + 1}
                  </span>
                  <span class="font-mono text-sm font-bold text-[#3b253b]">${evt.time}</span>
                </div>

                <h3 class="text-2xl font-serif italic text-[#3b253b] font-bold mb-3">${evt.name}</h3>
                <p class="text-xs sm:text-sm font-serif text-[#3b253b] mb-6 leading-relaxed">${evt.description}</p>

                <div class="p-4 rounded-2xl bg-gradient-to-r from-[#fde2ea] to-[#e3ecfa] mb-6 text-xs font-serif border border-[#f0d8e8]">
                  <div class="font-bold text-[#521636] text-sm">Địa Điểm: ${evt.locationName}</div>
                  <div class="text-[#3b253b] mt-1 font-medium">${evt.address}</div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="${evt.mapUrl || 'https://maps.google.com'}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center rounded-full bg-gradient-to-r from-[#c25e8e] to-[#8755c2] text-white text-xs font-serif font-bold tracking-wider text-center shadow hover:opacity-90 transition whitespace-nowrap">
                  Xem Bản Đồ
                </a>
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(evt.name)}&location=${encodeURIComponent(evt.address)}" target="_blank" rel="noopener noreferrer" class="py-2.5 px-4 min-h-[44px] flex items-center justify-center rounded-full border-2 border-[#912d68] text-[#6B2149] font-bold text-xs font-serif text-center hover:bg-[#fad0e2] transition whitespace-nowrap">
                  Lưu Lịch
                </a>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleSaveTheDate.js ---
/**
 * Module 7: Save The Date (Interactive Calendar & Bespoke Real-Time Countdown Timer)
 * - Harmonized UX/UI Calendar with hand-drawn Heart Enclosure (Khoanh trái tim)
 * - 10 Themed Live Countdown Dials (Ngày, Giờ, Phút, Giây) with full WCAG AA contrast
 * - High-Contrast One-Click Google Calendar & Apple/Outlook iCal (.ics) export
 */

function renderModuleSaveTheDate({ config, activeTemplate, moduleData }) {
  const content = moduleData.content || {};
  const couple = config.couple;
  const templateId = activeTemplate.id;

  // Parse wedding date (Default: 2026-11-28 18:00:00)
  const weddingDateObj = new Date(couple.weddingDate || "2026-11-28T18:00:00");
  const targetDay = weddingDateObj.getDate() || 28;
  const targetMonth = weddingDateObj.getMonth() + 1; // 11
  const targetYear = weddingDateObj.getFullYear() || 2026;

  // Initial countdown calculation (prevents empty flash before JS timer ticks)
  const now = new Date().getTime();
  const diff = Math.max(0, weddingDateObj.getTime() - now);
  const initDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const initHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const initMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const initSeconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Generate 30 days for November 2026 (Nov 1, 2026 was a Sunday -> CN = 1)
  const daysList = content.calendarDays || Array.from({ length: 30 }, (_, i) => i + 1);

  // Theme-specific Countdown Card Styling Archetypes (All strictly high-contrast)
  const themeCountdownStyles = {
    'vietnamese-heritage': {
      wrap: 'bg-[#9B1B1E]/10 border-2 border-[#D89F38] shadow-inner',
      dial: 'bg-[#9B1B1E] border-2 border-[#D89F38] text-[#FFE082] shadow-md',
      label: 'text-[#FFE082] font-bold font-serif tracking-widest',
      secondsColor: 'text-[#FFE082]',
      accent: '#9B1B1E'
    },
    'minimalist-modern': {
      wrap: 'bg-stone-100 border border-stone-300 dark:bg-stone-900 dark:border-stone-700',
      dial: 'bg-black text-white dark:bg-white dark:text-black font-mono shadow-sm',
      label: 'text-stone-300 dark:text-stone-700 font-mono uppercase tracking-widest font-bold',
      secondsColor: 'text-white dark:text-black',
      accent: '#000000'
    },
    'luxury-gold-foil': {
      wrap: 'bg-[#181824] border-2 border-[#D4AF37]/60 shadow-2xl',
      dial: 'bg-[#0f0f17] border-2 border-[#D4AF37] text-[#FFF4CC] shadow-[0_0_15px_rgba(212,175,55,0.3)]',
      label: 'text-[#D4AF37] font-serif uppercase tracking-[0.2em] font-bold',
      secondsColor: 'text-[#FFF4CC]',
      accent: '#D4AF37'
    },
    'pressed-botanical': {
      wrap: 'bg-[#EBF1EB] border-2 border-[#4A6741]/30',
      dial: 'bg-[#4A6741] text-[#F4F7F4] shadow-sm',
      label: 'text-[#EBF1EB] font-serif tracking-wider font-bold',
      secondsColor: 'text-[#F4F7F4]',
      accent: '#4A6741'
    },
    'bohemian-rustic': {
      wrap: 'bg-[#FBEFE3] border-2 border-[#C26D43]/40',
      dial: 'bg-[#C26D43] text-[#FFF7F0] shadow-md',
      label: 'text-[#FFF7F0] font-serif font-bold tracking-wider',
      secondsColor: 'text-[#FFF7F0]',
      accent: '#C26D43'
    },
    'washi-ikebana-zen': {
      wrap: 'bg-[#EFECE6] border-2 border-[#7D766D]/30',
      dial: 'bg-[#1F1E1C] text-[#F9F8F6] font-serif shadow-sm',
      label: 'text-[#EFECE6] font-mono tracking-wider font-bold',
      secondsColor: 'text-[#F9F8F6]',
      accent: '#B33927'
    },
    'art-deco-1920s': {
      wrap: 'bg-[#1A2026] border-2 border-[#E0B768] shadow-2xl',
      dial: 'bg-[#0E1317] border border-[#E0B768] text-[#F5DEB3] shadow-[0_0_16px_rgba(224,183,104,0.3)]',
      label: 'text-[#E0B768] font-title font-bold tracking-widest uppercase',
      secondsColor: 'text-[#F5DEB3]',
      accent: '#E0B768'
    },
    'tropical-destination': {
      wrap: 'bg-[#E0F7F6] border-2 border-[#0D828A]/40',
      dial: 'bg-[#0A4D54] text-white shadow-md',
      label: 'text-white font-bold tracking-wider',
      secondsColor: 'text-white',
      accent: '#0A4D54'
    },
    'k-wedding-minimal': {
      wrap: 'bg-stone-100 border border-stone-300 shadow-sm',
      dial: 'bg-stone-900 text-white font-mono shadow-xs',
      label: 'text-stone-300 font-mono tracking-widest uppercase font-bold',
      secondsColor: 'text-white',
      accent: '#262626'
    },
    'watercolor-romance': {
      wrap: 'bg-rose-50 border-2 border-rose-200/80 shadow-md',
      dial: 'bg-gradient-to-br from-[#9D366A] to-[#7E3B87] text-white shadow-md',
      label: 'text-white font-serif italic font-bold',
      secondsColor: 'text-white',
      accent: '#9D366A'
    }
  };

  const currentStyle = themeCountdownStyles[templateId] || themeCountdownStyles['vietnamese-heritage'];

  // Google Calendar URL generator
  const gcalTitle = encodeURIComponent(`Lễ Cưới: ${couple.groomShortName} & ${couple.brideShortName}`);
  const gcalDetails = encodeURIComponent(`Trân trọng kính mời quý khách tham dự lễ cưới của ${couple.groomName} và ${couple.brideName}.\nĐịa điểm: ${couple.city}`);
  const calendarDateKey = `${targetYear}${String(targetMonth).padStart(2, "0")}${String(targetDay).padStart(2, "0")}`;
  const gcalDates = `${calendarDateKey}T110000Z/${calendarDateKey}T150000Z`;
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${gcalTitle}&dates=${gcalDates}&details=${gcalDetails}&location=${encodeURIComponent(couple.city)}`;

  // iCal data download content
  const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//EverAfter Wedding Suite//VN
BEGIN:VEVENT
UID:wedding-${targetYear}${targetMonth}${targetDay}@everafter.vn
DTSTAMP:20260101T000000Z
DTSTART:${calendarDateKey}T110000Z
DTEND:${calendarDateKey}T150000Z
SUMMARY:Lễ Cưới ${couple.groomShortName} & ${couple.brideShortName}
DESCRIPTION:Trân trọng kính mời quý khách tham dự lễ cưới trọng đại.
LOCATION:${couple.city}
END:VEVENT
END:VCALENDAR`;

  const icsHref = `data:text/calendar;charset=utf8,${encodeURIComponent(icsData)}`;

  return `
    <section id="module-saveTheDate" class="py-24 px-4 relative transition-colors duration-500 reveal-on-scroll">
      <div class="max-w-2xl mx-auto">
        
        <!-- Main Elegant Card Container -->
        <div class="p-6 sm:p-12 rounded-3xl border border-stone-300 dark:border-stone-700 bg-white/95 dark:bg-stone-900/90 backdrop-blur-xl shadow-2xl text-center relative overflow-hidden">
          
          <!-- Section Tag & Title -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 mb-4 shadow-xs">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span class="text-xs uppercase tracking-[0.25em] font-bold">Lưu Lại Ngày Cưới • Save Our Date</span>
          </div>

          <h2 class="text-3xl sm:text-5xl font-title tracking-tight mb-2 text-stone-900 dark:text-stone-100 font-bold">
            ${content.title || "Lưu Lại Ngày Chung Đôi"}
          </h2>
          
          <div class="flex items-center justify-center gap-3 text-sm font-bold text-stone-800 dark:text-stone-200 mb-8 font-mono">
            <span>Thứ Bảy, ${targetDay} Tháng ${targetMonth} Năm ${targetYear}</span>
            <span class="text-stone-400">•</span>
            <span class="font-serif italic text-xs text-stone-600 dark:text-stone-400 font-medium">${couple.lunarDate || "Ngày 20/10 năm Bính Ngọ"}</span>
          </div>

          <!-- ========================================================
               1. THE HARMONIZED CALENDAR WITH SVG HEART ENCLOSURE
               ======================================================== -->
          <div class="p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 mb-10 max-w-lg mx-auto shadow-md">
            
            <div class="flex items-center justify-between mb-4 border-b border-stone-200 dark:border-stone-800 pb-3">
              <span class="font-title font-bold text-base sm:text-lg tracking-wide uppercase text-stone-900 dark:text-stone-100">Tháng ${targetMonth} / ${targetYear}</span>
              <span class="text-xs font-mono font-bold text-stone-600 dark:text-stone-400">${couple.city || "Địa điểm tiệc cưới"} • Giờ Hỷ Sự: 18:00</span>
            </div>

            <!-- Days of Week Header (CN, T2, T3, T4, T5, T6, T7) -->
            <div class="grid grid-cols-7 gap-1 text-xs font-mono font-bold text-stone-700 dark:text-stone-300 mb-3 text-center">
              <span class="text-red-600 font-black">CN</span>
              <span>T2</span>
              <span>T3</span>
              <span>T4</span>
              <span>T5</span>
              <span>T6</span>
              <span>T7</span>
            </div>

            <!-- Calendar Days Grid (Day 28 highlighted with heart pulse) -->
            <div class="grid grid-cols-7 gap-1.5 sm:gap-2 text-xs sm:text-sm font-mono text-center items-center">
              ${daysList.map(d => {
                const isTarget = d === targetDay;
                if (isTarget) {
                  return `
                    <div class="h-10 sm:h-12 flex items-center justify-center relative group cursor-default">
                      <!-- Pulsing Hand-Drawn Heart Enclosure Marker -->
                      <svg class="absolute inset-0 w-full h-full text-red-500 calendar-heart-marker pointer-events-none drop-shadow-md z-0" viewBox="0 0 48 48" fill="none">
                        <path 
                          d="M 24,14 C 20,6 7,8 7,20 C 7,30 17,37 24,44 C 31,37 41,30 41,20 C 41,8 28,6 24,14 Z" 
                          stroke="currentColor" 
                          stroke-width="2.6" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          fill="currentColor" 
                          fill-opacity="0.16"
                        />
                      </svg>
                      <!-- Bold Center Day Number -->
                      <span class="relative z-10 font-black text-base sm:text-lg text-red-600 dark:text-red-400 drop-shadow scale-110">
                        ${d}
                      </span>
                    </div>
                  `;
                }
                return `
                  <div class="h-10 sm:h-12 flex items-center justify-center rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-stone-800 dark:text-stone-100 font-bold">
                    ${d}
                  </div>
                `;
              }).join('')}
            </div>

            <div class="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-center gap-2 text-xs font-serif italic text-red-700 dark:text-red-400 font-semibold">
              <svg class="w-3.5 h-3.5 fill-current animate-pulse text-red-600" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <span>Ngày 28: Khoảnh khắc trọn đời của chúng mình</span>
            </div>

          </div>

          <!-- ========================================================
               2. THEMED REAL-TIME COUNTDOWN TIMER (Ngày - Giờ - Phút - Giây)
               ======================================================== -->
          <div class="p-6 rounded-2xl ${currentStyle.wrap} mb-8 max-w-lg mx-auto shadow-md">
            <span class="text-xs uppercase tracking-[0.25em] font-bold block mb-4 ${currentStyle.label}">
              Thời Gian Đếm Ngược Đến Ngày Trọng Đại
            </span>

            <div id="save-the-date-countdown" class="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              
              <!-- NGÀY -->
              <div class="countdown-box-ticking p-3 sm:p-4 rounded-xl ${currentStyle.dial} flex flex-col items-center justify-center">
                <span class="countdown-days text-2xl sm:text-4xl font-bold tracking-tight" data-countdown="days">
                  ${initDays}
                </span>
                <span class="text-xs ${currentStyle.label} mt-1">NGÀY</span>
              </div>

              <!-- GIỜ -->
              <div class="countdown-box-ticking p-3 sm:p-4 rounded-xl ${currentStyle.dial} flex flex-col items-center justify-center">
                <span class="countdown-hours text-2xl sm:text-4xl font-bold tracking-tight" data-countdown="hours">
                  ${String(initHours).padStart(2, '0')}
                </span>
                <span class="text-xs ${currentStyle.label} mt-1">GIỜ</span>
              </div>

              <!-- PHÚT -->
              <div class="countdown-box-ticking p-3 sm:p-4 rounded-xl ${currentStyle.dial} flex flex-col items-center justify-center">
                <span class="countdown-minutes text-2xl sm:text-4xl font-bold tracking-tight" data-countdown="minutes">
                  ${String(initMinutes).padStart(2, '0')}
                </span>
                <span class="text-xs ${currentStyle.label} mt-1">PHÚT</span>
              </div>

              <!-- GIÂY -->
              <div class="countdown-box-ticking p-3 sm:p-4 rounded-xl ${currentStyle.dial} flex flex-col items-center justify-center">
                <span class="countdown-seconds countdown-seconds-pulse text-2xl sm:text-4xl font-bold tracking-tight ${currentStyle.secondsColor}" data-countdown="seconds">
                  ${String(initSeconds).padStart(2, '0')}
                </span>
                <span class="text-xs ${currentStyle.label} mt-1">GIÂY</span>
              </div>

            </div>
          </div>

          <!-- Emotional Quote -->
          <p class="text-sm italic font-serif text-stone-700 dark:text-stone-300 mb-8 max-w-md mx-auto leading-relaxed font-medium">
            “${content.quote || "Sự hiện diện của quý khách là lời chúc phúc tuyệt vời nhất dành cho đôi uyên ương chúng tôi!"}”
          </p>

          <!-- ========================================================
               3. CALENDAR ACTION BUTTONS (Google Calendar & iCal Download)
               ======================================================== -->
          <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            
            <a 
              href="${googleCalendarUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-stone-900 text-white hover:bg-stone-800 dark:bg-amber-400 dark:text-stone-950 transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span>Thêm Vào Google Calendar</span>
            </a>

            <a 
              href="${icsHref}" 
              download="dam-cuoi-${couple.groomShortName}-${couple.brideShortName}.ics"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-white text-stone-900 border-2 border-stone-400 hover:border-stone-900 hover:bg-stone-100 dark:bg-stone-800 dark:text-stone-100 dark:border-stone-600 dark:hover:border-amber-400 transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              <span>Tải File Lịch (.ics / Apple)</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleWeddingParty.js ---
/**
 * Module 8: Wedding Party (Bridesmaids & Groomsmen)
 * High Contrast & Harmonious Visual Hierarchy
 */

function renderModuleWeddingParty({ config, activeTemplate, moduleData }) {
  const content = moduleData.content;
  const bridesmaids = content.bridesmaids || [];
  const groomsmen = content.groomsmen || [];

  return `
    <section id="module-weddingParty" class="py-24 px-4 relative transition-colors duration-500 reveal-on-scroll">
      <div class="max-w-5xl mx-auto">
        
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-bold uppercase tracking-[0.25em] mb-3 shadow-xs">
            <span>Our Companions</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-title tracking-tight mb-3 text-stone-900 dark:text-stone-100 font-bold">${content.title || "Những Người Đồng Hành"}</h2>
          <p class="text-sm text-stone-600 dark:text-stone-400 max-w-lg mx-auto italic font-serif">${content.subtitle || "Dàn phù dâu và phù rể tuyệt vời luôn sát cánh bên chúng mình"}</p>
        </div>

        <!-- Two Columns: Groomsmen and Bridesmaids -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <!-- Phù Rể -->
          <div class="space-y-6">
            <h3 class="text-xl font-title font-bold text-center pb-2 border-b-2 border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 flex items-center justify-center gap-2">
              <span>Chú Rể: Dàn Phù Rể</span>
            </h3>
            
            <div class="space-y-4">
              ${groomsmen.map(gm => `
                <div class="p-6 rounded-2xl border-2 border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/90 shadow-md flex items-center gap-4 hover:border-amber-500 transition-all group">
                  <div class="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-stone-300 dark:border-stone-700 shadow-md group-hover:scale-105 transition-transform">
                    <img src="${gm.avatar}" alt="${gm.name}" class="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <h4 class="font-title font-bold text-base text-stone-900 dark:text-stone-100">${gm.name}</h4>
                    <span class="text-xs font-bold text-amber-800 dark:text-amber-300 block mb-0.5">${gm.role}</span>
                    <span class="text-xs font-medium text-stone-600 dark:text-stone-400 block mb-1.5">${gm.relationship}</span>
                    <p class="text-xs italic font-serif text-stone-800 dark:text-stone-200 leading-relaxed">“${gm.quote}”</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Phù Dâu -->
          <div class="space-y-6">
            <h3 class="text-xl font-title font-bold text-center pb-2 border-b-2 border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 flex items-center justify-center gap-2">
              <span>Cô Dâu: Dàn Phù Dâu</span>
            </h3>
            
            <div class="space-y-4">
              ${bridesmaids.map(bm => `
                <div class="p-6 rounded-2xl border-2 border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/90 shadow-md flex items-center gap-4 hover:border-rose-400 transition-all group">
                  <div class="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-stone-300 dark:border-stone-700 shadow-md group-hover:scale-105 transition-transform">
                    <img src="${bm.avatar}" alt="${bm.name}" class="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <h4 class="font-title font-bold text-base text-stone-900 dark:text-stone-100">${bm.name}</h4>
                    <span class="text-xs font-bold text-rose-800 dark:text-rose-300 block mb-0.5">${bm.role}</span>
                    <span class="text-xs font-medium text-stone-600 dark:text-stone-400 block mb-1.5">${bm.relationship}</span>
                    <p class="text-xs italic font-serif text-stone-800 dark:text-stone-200 leading-relaxed">“${bm.quote}”</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleVideo.js ---
/**
 * Module 9: Video Cưới (Cinematic Wedding Film / Teaser)
 */

function renderModuleVideo({ config, activeTemplate, moduleData }) {
  const content = moduleData.content;

  return `
    <section id="module-video" class="py-20 px-4 relative transition-colors duration-500">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-12">
          <span class="text-xs uppercase tracking-[0.25em] font-semibold opacity-70 block mb-2">Cinematic Film</span>
          <h2 class="text-3xl sm:text-5xl font-title tracking-tight mb-3">${content.title || "Thước Phim Hạnh Phúc"}</h2>
          <p class="text-sm opacity-80 max-w-lg mx-auto italic font-serif">${content.subtitle || "Một vài giây phút ngọt ngào được ghi lại"}</p>
        </div>

        <div class="relative rounded-3xl overflow-hidden border border-current/20 shadow-2xl bg-black aspect-video group">
          <img 
            src="${content.posterImage || './assets/images/gallery/venue.jpg'}" 
            alt="Wedding Video Poster" 
            class="w-full h-full object-cover opacity-80 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
            loading="lazy"
          />

          <!-- Play Button Overlay -->
          <div class="absolute inset-0 flex items-center justify-center">
            <button 
              id="open-video-modal-btn" 
              aria-label="Phát video cưới"
              class="w-20 h-20 rounded-full bg-white/90 text-stone-900 flex items-center justify-center pl-1 shadow-2xl hover:scale-110 hover:bg-white transition-all duration-300 animate-pulse-gentle cursor-pointer"
              title="Phát Video"
            >
              <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </button>
          </div>

          <!-- Bottom Caption Overlay -->
          <div class="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white flex justify-between items-end">
            <div>
              <p class="text-sm font-medium tracking-wide">${content.caption}</p>
            </div>
            <span class="text-xs font-mono px-2.5 py-1 rounded bg-white/20 backdrop-blur">
              ${content.duration || "03:45"}
            </span>
          </div>

        </div>

      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleAlbum.js ---
/**
 * Module 10: Album Ảnh Cưới (Photo Gallery with Interactive Lightbox)
 * 10 Radically Distinct Design Archetypes:
 * - vietnamese-heritage: Bình Phong Tứ Bình & Khung Tranh Hoàng Triều
 * - minimalist-modern: Brutalist Swiss Asymmetric Masonry with technical frame labels
 * - luxury-gold-foil: Louvre Museum Gilded Baroque Salon Gallery
 * - pressed-botanical: Transparent Glass Specimen Herbarium Slides with washi tape
 * - bohemian-rustic: Pinned Polaroid Wire Line with wooden clothespins
 * - washi-ikebana-zen: Tatami Grid Order & Ma Negative Space with Japanese Seals
 * - art-deco-1920s: Great Gatsby Beveled Mirror & Stepped Ziggurat Frames
 * - tropical-destination: Sun-Drenched Ocean Driftwood Frames & Coastal Views
 * - k-wedding-minimal: Seoul High-Fashion 35mm Contact Sheet & Proofing Board
 * - watercolor-romance: Monet Floating Lily Pad Pastel Gallery with soft clouds
 */

function renderModuleAlbum({ config, activeTemplate, moduleData }) {
  const content = moduleData.content || {};
  const images = content.images || [];
  const templateId = activeTemplate.id;

  const renderers = {
    'vietnamese-heritage': renderVietnameseAlbum,
    'minimalist-modern': renderMinimalistAlbum,
    'luxury-gold-foil': renderLuxuryAlbum,
    'pressed-botanical': renderBotanicalAlbum,
    'bohemian-rustic': renderBohoAlbum,
    'washi-ikebana-zen': renderZenAlbum,
    'art-deco-1920s': renderArtDecoAlbum,
    'tropical-destination': renderTropicalAlbum,
    'k-wedding-minimal': renderKWeddingAlbum,
    'watercolor-romance': renderWatercolorAlbum
  };

  const renderer = renderers[templateId] || renderVietnameseAlbum;
  return renderer({ config, content, images });
}

// 1. VIETNAMESE HERITAGE: Bình Phong Tứ Bình & Khung Tranh Hoàng Cung
function renderVietnameseAlbum({ config, content, images }) {
  return `
    <section id="module-album" class="py-24 px-4 bg-[#780016] text-[#fbf0d9] relative">
      <div class="max-w-6xl mx-auto relative z-10">
        
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#f0c05a]/40 bg-[#50000e] text-[#f0c05a] text-xs font-serif tracking-widest uppercase mb-3">
            <span>❖ BÌNH PHONG KỶ NIỆM ❖</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-title text-[#fcf3dc] tracking-tight mb-2">${content.title || "Khoảnh Khắc Kỷ Niệm"}</h2>
          <div class="flex items-center justify-center gap-3 text-[#f0c05a] my-2">
            <span class="w-12 h-px bg-current opacity-40"></span>
            <span class="text-lg">囍</span>
            <span class="w-12 h-px bg-current opacity-40"></span>
          </div>
          <p class="text-xs sm:text-sm font-serif italic text-[#f0c05a]/80">${content.subtitle || "Từng ánh mắt và nụ cười ghi dấu tình yêu"}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${images.map((img, idx) => `
            <div 
              class="gallery-item-card group relative rounded-2xl overflow-hidden border-2 border-[#f0c05a] bg-[#8d001a] p-2 shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer" role="button" tabindex="0" aria-label="Xem ảnh ${img.title}" data-lightbox-src="${img.url}"
              data-lightbox-title="${img.title}"
              data-lightbox-caption="${img.caption || ''}"
            >
              <div class="h-72 w-full overflow-hidden rounded-xl border border-[#f0c05a]/40">
                <img src="${img.url}" alt="${img.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>
              </div>
              <div class="pt-3 pb-1 text-center">
                <span class="text-[10px] font-serif uppercase tracking-widest text-[#f0c05a] block">KHOẢNH KHẮC 0${idx + 1}</span>
                <h4 class="font-title text-base text-white font-bold">${img.title}</h4>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 2. MINIMALIST MODERN: Brutalist Swiss Asymmetric Masonry
function renderMinimalistAlbum({ config, content, images }) {
  return `
    <section id="module-album" class="py-24 px-6 bg-[#0f0f0f] text-white font-sans border-b border-white/10">
      <div class="max-w-6xl mx-auto">
        
        <div class="border-b border-white/20 pb-4 mb-12 flex justify-between items-end">
          <div>
            <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 block">MODULE_10 // VISUAL ARCHIVE</span>
            <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">GALLERY</h2>
          </div>
          <div class="font-mono text-xs text-white/40">[COUNT // ${images.length}]</div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${images.map((img, idx) => `
            <div 
              class="gallery-item-card group border border-white/20 p-2 cursor-pointer bg-[#141414]" role="button" tabindex="0" aria-label="Xem ảnh ${img.title}" data-lightbox-src="${img.url}"
              data-lightbox-title="${img.title}"
              data-lightbox-caption="${img.caption || ''}"
            >
              <div class="h-64 overflow-hidden">
                <img src="${img.url}" alt="${img.title}" class="w-full h-full object-cover filter grayscale contrast-125 group-hover:filter-none transition-all duration-500" loading="lazy"/>
              </div>
              <div class="flex justify-between items-center pt-2 font-mono text-[10px] text-white/60 uppercase">
                <span>[RAW_${idx + 1}]</span>
                <span>${img.title}</span>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 3. LUXURY GOLD FOIL: Louvre Museum Gilded Baroque Salon Gallery
function renderLuxuryAlbum({ config, content, images }) {
  return `
    <section id="module-album" class="py-24 px-4 bg-[#0a0a0f] text-[#f7e8c3]">
      <div class="max-w-6xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-serif block mb-2">ROYAL SALON EXHIBITION</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#e3c770] via-[#fff4cc] to-[#cf9e38] tracking-wide mb-3">
            The Gallery of Memories
          </h2>
          <div class="flex items-center justify-center gap-4 text-[#d4af37] my-3">
            <span class="w-12 h-px bg-current"></span>
            <span>⚜</span>
            <span class="w-12 h-px bg-current"></span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${images.map(img => `
            <div 
              class="gallery-item-card group p-3 border-2 border-[#d4af37] bg-[#12121c] shadow-[0_15px_40px_rgba(0,0,0,0.8)] cursor-pointer" role="button" tabindex="0" aria-label="Xem ảnh ${img.title}" data-lightbox-src="${img.url}"
              data-lightbox-title="${img.title}"
              data-lightbox-caption="${img.caption || ''}"
            >
              <div class="h-72 overflow-hidden border border-[#d4af37]/40">
                <img src="${img.url}" alt="${img.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy"/>
              </div>
              <div class="pt-3 text-center font-serif">
                <h4 class="text-sm font-normal text-white uppercase tracking-wider">${img.title}</h4>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 4. PRESSED BOTANICAL: Transparent Glass Specimen Slides
function renderBotanicalAlbum({ config, content, images }) {
  return `
    <section id="module-album" class="py-24 px-4 bg-[#f8f6f0] text-[#2c3d2c]">
      <div class="max-w-6xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#587358] block mb-2">BOTANICAL GLASS SPECIMENS</span>
          <h2 class="text-3xl sm:text-5xl font-serif italic text-[#1f2e1f] mb-3">Memory Herbarium</h2>
          <div class="w-16 h-px bg-[#a3b3a3] mx-auto my-3"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${images.map(img => `
            <div 
              class="gallery-item-card group p-4 bg-white border border-[#d9d4c5] rounded-sm shadow relative cursor-pointer" role="button" tabindex="0" aria-label="Xem ảnh ${img.title}" data-lightbox-src="${img.url}"
              data-lightbox-title="${img.title}"
              data-lightbox-caption="${img.caption || ''}"
            >
              <div class="h-64 overflow-hidden border border-[#e5dfd2]">
                <img src="${img.url}" alt="${img.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy"/>
              </div>
              <div class="pt-3 text-center font-serif italic text-sm text-[#475c47]">
                ${img.title}
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 5. BOHEMIAN RUSTIC: Pinned Polaroid Wire Line
function renderBohoAlbum({ config, content, images }) {
  return `
    <section id="module-album" class="py-24 px-4 bg-[#fbf6f0] text-[#713f28]">
      <div class="max-w-6xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-[#b8623b] block mb-2">SUN-DRIED POLAROIDS</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#522917] mb-2">Memories in the Breeze</h2>
          <div class="text-xl text-[#d99873]">✦ • ✦</div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${images.map((img, idx) => {
            const rot = idx % 2 === 0 ? '-rotate-1' : 'rotate-1';
            return `
              <div 
                class="gallery-item-card group p-4 pb-6 bg-[#fffaf5] border-2 border-[#d99873]/50 rounded-xl shadow-md ${rot} hover:rotate-0 transition duration-300 cursor-pointer" role="button" tabindex="0" aria-label="Xem ảnh ${img.title}" data-lightbox-src="${img.url}"
                data-lightbox-title="${img.title}"
                data-lightbox-caption="${img.caption || ''}"
              >
                <div class="h-64 overflow-hidden rounded-lg mb-3">
                  <img src="${img.url}" alt="${img.title}" class="w-full h-full object-cover" loading="lazy"/>
                </div>
                <div class="text-center font-serif text-sm font-bold text-[#63331d]">
                  ${img.title}
                </div>
              </div>
            `;
          }).join('')}
        </div>

      </div>
    </section>
  `;
}

// 6. WASHI IKEBANA ZEN: Tatami Grid Order & Ma Negative Space
function renderZenAlbum({ config, content, images }) {
  return `
    <section id="module-album" class="py-24 px-4 bg-[#f4f2ec] text-[#2c2b29]">
      <div class="max-w-6xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-[11px] font-mono uppercase tracking-[0.3em] text-[#3D3B37] font-bold block mb-2">写真帖 • MEMORY ALBUM</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#1f1e1c] font-normal mb-2">Thời Khắc Lưu Giữ</h2>
          <div class="w-12 h-px bg-[#b33927] mx-auto my-3"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${images.map(img => `
            <div 
              class="gallery-item-card group p-2 bg-[#faf8f4] border-2 border-[#dcd8ce] shadow-sm cursor-pointer" role="button" tabindex="0" aria-label="Xem ảnh ${img.title}" data-lightbox-src="${img.url}"
              data-lightbox-title="${img.title}"
              data-lightbox-caption="${img.caption || ''}"
            >
              <div class="h-64 overflow-hidden">
                <img src="${img.url}" alt="${img.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy"/>
              </div>
              <div class="pt-3 pb-1 text-center font-serif text-xs font-bold text-[#1f1e1c]">
                ${img.title}
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 7. ART DECO 1920s: Great Gatsby Beveled Mirror & Stepped Ziggurat Frames
function renderArtDecoAlbum({ config, content, images }) {
  return `
    <section id="module-album" class="py-24 px-4 bg-[#121619] text-[#e0b768]">
      <div class="max-w-6xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-[10px] font-mono uppercase tracking-[0.4em] text-[#e0b768] block mb-2">GLAMOUR PORTFOLIO</span>
          <h2 class="text-3xl sm:text-5xl font-title uppercase tracking-widest text-white mb-2">The Golden Lens</h2>
          <div class="w-24 h-0.5 bg-[#e0b768] mx-auto my-3"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${images.map(img => `
            <div 
              class="gallery-item-card group p-3 border-2 border-[#e0b768] bg-[#191f24] cursor-pointer" role="button" tabindex="0" aria-label="Xem ảnh ${img.title}" data-lightbox-src="${img.url}"
              data-lightbox-title="${img.title}"
              data-lightbox-caption="${img.caption || ''}"
            >
              <div class="h-64 overflow-hidden border border-[#e0b768]/40">
                <img src="${img.url}" alt="${img.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy"/>
              </div>
              <div class="pt-3 text-center font-title uppercase tracking-wider text-xs text-[#e0b768]">
                ${img.title}
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 8. TROPICAL DESTINATION: Sun-Drenched Ocean Driftwood Frames
function renderTropicalAlbum({ config, content, images }) {
  return `
    <section id="module-album" class="py-24 px-4 bg-[#f0f9f8] text-[#0a444c]">
      <div class="max-w-6xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-widest font-sans font-bold text-[#0d6e75] block mb-2">ISLAND SNAPSHOTS</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#09353b] mb-2">Ocean Memories</h2>
          <div class="text-lg text-[#149d9b]">✦ • ✦ </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${images.map(img => `
            <div 
              class="gallery-item-card group p-3 rounded-2xl bg-white border border-[#a6dcd8] shadow-md cursor-pointer" role="button" tabindex="0" aria-label="Xem ảnh ${img.title}" data-lightbox-src="${img.url}"
              data-lightbox-title="${img.title}"
              data-lightbox-caption="${img.caption || ''}"
            >
              <div class="h-64 rounded-xl overflow-hidden">
                <img src="${img.url}" alt="${img.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy"/>
              </div>
              <div class="pt-3 text-center font-serif text-sm text-[#09353b] font-bold">
                ${img.title}
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 9. K-WEDDING MINIMAL: Seoul High-Fashion Contact Sheet & Proofing Board
function renderKWeddingAlbum({ config, content, images }) {
  return `
    <section id="module-album" class="py-24 px-4 bg-[#faf9f6] text-[#222]">
      <div class="max-w-6xl mx-auto border-t border-b border-[#222] py-14">
        
        <div class="text-center mb-12">
          <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-700 font-bold block mb-2">EDITORIAL PROOFING // ISSUE 1128</span>
          <h2 class="text-3xl sm:text-4xl font-serif font-light text-stone-900 mb-2">Photo Archive</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${images.map((img, idx) => `
            <div 
              class="gallery-item-card group cursor-pointer border-t-2 border-stone-800 pt-3" role="button" tabindex="0" aria-label="Xem ảnh ${img.title}" data-lightbox-src="${img.url}"
              data-lightbox-title="${img.title}"
              data-lightbox-caption="${img.caption || ''}"
            >
              <div class="h-64 overflow-hidden border-2 border-stone-300">
                <img src="${img.url}" alt="${img.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy"/>
              </div>
              <div class="flex justify-between items-center pt-2 font-mono text-[10px] text-stone-800 font-bold">
                <span>FRAME // ${idx + 1}A</span>
                <span>${img.title}</span>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 10. WATERCOLOR ROMANCE: Monet Floating Lily Pad Pastel Gallery
function renderWatercolorAlbum({ config, content, images }) {
  return `
    <section id="module-album" class="py-24 px-4 bg-[#fdf9fc] text-[#4d384d]">
      <div class="max-w-6xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-[#b876a2] block mb-2">SWEET MOMENTS</span>
          <h2 class="text-3xl sm:text-5xl font-serif italic text-[#3b253b] mb-2">Khu Vườn Kỷ Niệm</h2>
          <div class="text-lg text-[#d88bb5]">✦ • ✦</div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${images.map(img => `
            <div 
              class="gallery-item-card group p-3 rounded-3xl bg-white/70 backdrop-blur-md border border-[#f0d8e8] shadow-md cursor-pointer" role="button" tabindex="0" aria-label="Xem ảnh ${img.title}" data-lightbox-src="${img.url}"
              data-lightbox-title="${img.title}"
              data-lightbox-caption="${img.caption || ''}"
            >
              <div class="h-64 rounded-2xl overflow-hidden">
                <img src="${img.url}" alt="${img.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy"/>
              </div>
              <div class="pt-3 text-center font-serif italic text-sm text-[#7a587a]">
                ${img.title}
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleDressCode.js ---
/**
 * Module 11: Dress Code (Attire Suggestions & Color Palette Swatches)
 * 10 Radically Distinct Design Archetypes:
 * - vietnamese-heritage: Áo Dài Gấm Lụa Hoàng Triều with imperial gold swatches
 * - minimalist-modern: Technical Pantone / CMYK Color System Swatches with raw monospace specs
 * - luxury-gold-foil: Versailles Black Tie & Gown Protocol with 24K gold foil framing
 * - pressed-botanical: Natural Linen & Earthy Plant Pigment Swatches with botanical sketches
 * - bohemian-rustic: Desert Sun Boho Chic & Terracotta Swatches
 * - washi-ikebana-zen: Kyoto Natural Fiber & Muted Wabi-Sabi Tones
 * - art-deco-1920s: The Great Gatsby 1920s Glamour Flapper & Tuxedo Guide
 * - tropical-destination: Island Coastal Resort Cocktail & Breezy Linen Palette
 * - k-wedding-minimal: Seoul Fashion Studio Editorial Color Card
 * - watercolor-romance: Monet Soft Pastel Pigment Swatches with floating petals
 */

function renderModuleDressCode({ config, activeTemplate, moduleData }) {
  const content = moduleData.content || {};
  const palette = content.palette || [];
  const templateId = activeTemplate.id;

  const renderers = {
    'vietnamese-heritage': renderVietnameseDressCode,
    'minimalist-modern': renderMinimalistDressCode,
    'luxury-gold-foil': renderLuxuryDressCode,
    'pressed-botanical': renderBotanicalDressCode,
    'bohemian-rustic': renderBohoDressCode,
    'washi-ikebana-zen': renderZenDressCode,
    'art-deco-1920s': renderArtDecoDressCode,
    'tropical-destination': renderTropicalDressCode,
    'k-wedding-minimal': renderKWeddingDressCode,
    'watercolor-romance': renderWatercolorDressCode
  };

  const renderer = renderers[templateId] || renderVietnameseDressCode;
  return renderer({ config, content, palette });
}

// 1. VIETNAMESE HERITAGE: Áo Dài Gấm Lụa Hoàng Triều
function renderVietnameseDressCode({ config, content, palette }) {
  return `
    <section id="module-dressCode" class="py-24 px-4 bg-[#630012] text-[#fbf0d9] relative">
      <div class="max-w-4xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#f0c05a]/40 bg-[#42000c] text-[#f0c05a] text-xs font-serif tracking-widest uppercase mb-3">
            <span>❖ Y PHỤC DỰ TIỆC ❖</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-title text-[#fcf3dc] tracking-tight mb-2">${content.title || "Gợi Ý Trang Phục"}</h2>
          <div class="flex items-center justify-center gap-3 text-[#f0c05a] my-2">
            <span class="w-12 h-px bg-current opacity-40"></span>
            <span class="text-lg">囍</span>
            <span class="w-12 h-px bg-current opacity-40"></span>
          </div>
          <p class="text-xs sm:text-sm font-serif italic text-[#f0c05a]/80">${content.subtitle || "Để ngày vui thêm phần đồng điệu và trang trọng"}</p>
        </div>

        <div class="p-8 sm:p-12 rounded-3xl border-2 border-[#f0c05a] bg-[#800018] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <p class="text-sm font-serif leading-relaxed text-center mb-8 max-w-xl mx-auto text-[#fcf3dc]">
            ${content.description}
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            ${palette.map(color => `
              <div class="p-3 rounded-2xl border border-[#f0c05a]/40 bg-[#50000e] text-center shadow">
                <div class="w-full h-16 rounded-xl mb-3 border-2 border-[#f0c05a]" style="background-color: ${color.hex}"></div>
                <div class="text-xs font-title font-bold text-white mb-0.5">${color.name}</div>
                <div class="text-[10px] font-mono text-[#f0c05a] uppercase">${color.hex}</div>
              </div>
            `).join('')}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#f0c05a]/30 font-serif">
            <div class="p-5 rounded-2xl bg-[#50000e] border border-[#f0c05a]/30">
              <h4 class="font-title font-bold text-base mb-3 text-[#f0c05a]">✦ Dành Cho Quý Ông</h4>
              <ul class="space-y-2 text-xs text-[#fbf0d9]/90">
                ${(content.suggestionsGroom || []).map(s => `<li class="flex items-start gap-2"><span class="text-[#f0c05a]">•</span><span>${s}</span></li>`).join('')}
              </ul>
            </div>

            <div class="p-5 rounded-2xl bg-[#50000e] border border-[#f0c05a]/30">
              <h4 class="font-title font-bold text-base mb-3 text-[#f0c05a]">✦ Dành Cho Quý Cô</h4>
              <ul class="space-y-2 text-xs text-[#fbf0d9]/90">
                ${(content.suggestionsBride || []).map(s => `<li class="flex items-start gap-2"><span class="text-[#f0c05a]">•</span><span>${s}</span></li>`).join('')}
              </ul>
            </div>
          </div>

          <div class="mt-6 text-center text-xs font-serif italic text-[#f0c05a]/80">
            Ghi chú: Lưu ý: ${content.notes}
          </div>
        </div>
      </div>
    </section>
  `;
}

// 2. MINIMALIST MODERN: Technical Pantone / CMYK Color System
function renderMinimalistDressCode({ config, content, palette }) {
  return `
    <section id="module-dressCode" class="py-24 px-6 bg-[#141414] text-white font-sans border-b border-white/10">
      <div class="max-w-4xl mx-auto">
        <div class="border-b border-white/20 pb-4 mb-12 flex justify-between items-end">
          <div>
            <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 block">MODULE_11 // COLOR PALETTE</span>
            <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">DRESS CODE</h2>
          </div>
          <div class="font-mono text-xs text-white/40">[SWATCH_COUNT // ${palette.length}]</div>
        </div>

        <div class="border border-white/20 p-8 sm:p-12 bg-[#0f0f0f] font-mono">
          <p class="text-xs text-white/70 uppercase leading-relaxed mb-8 max-w-xl">
            // SPECIFICATION: ${content.description}
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            ${palette.map(color => `
              <div class="border border-white/20 p-2 bg-[#191919]">
                <div class="w-full h-16 mb-2 border border-white/10" style="background-color: ${color.hex}"></div>
                <div class="text-[11px] font-bold uppercase text-white">${color.name}</div>
                <div class="text-[10px] text-white/50">${color.hex}</div>
              </div>
            `).join('')}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10 text-xs">
            <div class="space-y-2">
              <div class="font-bold text-white uppercase">// MASCULINE_ATTIRE</div>
              <ul class="space-y-1 text-white/70">
                ${(content.suggestionsGroom || []).map(s => `<li>- ${s}</li>`).join('')}
              </ul>
            </div>
            <div class="space-y-2">
              <div class="font-bold text-white uppercase">// FEMININE_ATTIRE</div>
              <ul class="space-y-1 text-white/70">
                ${(content.suggestionsBride || []).map(s => `<li>- ${s}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div class="mt-6 text-[11px] text-white/40 pt-4 border-t border-white/10">
            NOTE: ${content.notes}
          </div>
        </div>
      </div>
    </section>
  `;
}

// 3. LUXURY GOLD FOIL: Versailles Black Tie & Royal Gown
function renderLuxuryDressCode({ config, content, palette }) {
  return `
    <section id="module-dressCode" class="py-24 px-4 bg-[#0a0a0f] text-[#f7e8c3]">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-serif block mb-2">COURT ATTIRE PROTOCOL</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#e3c770] via-[#fff4cc] to-[#cf9e38] tracking-wide mb-3">
            Royal Dress Code
          </h2>
          <div class="flex items-center justify-center gap-4 text-[#d4af37] my-3">
            <span class="w-12 h-px bg-current"></span>
            <span>⚜</span>
            <span class="w-12 h-px bg-current"></span>
          </div>
        </div>

        <div class="p-8 sm:p-12 border border-[#d4af37]/40 bg-[#12121c] shadow-[0_15px_40px_rgba(0,0,0,0.8)] font-serif">
          <p class="text-sm leading-relaxed text-center mb-8 max-w-xl mx-auto text-[#f7e8c3]/90">
            ${content.description}
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            ${palette.map(color => `
              <div class="p-3 border border-[#d4af37]/30 bg-[#181824] text-center">
                <div class="w-full h-16 mb-3 border border-[#d4af37]" style="background-color: ${color.hex}"></div>
                <div class="text-xs text-white uppercase">${color.name}</div>
                <div class="text-[10px] text-[#d4af37] font-mono">${color.hex}</div>
              </div>
            `).join('')}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#d4af37]/20">
            <div class="p-5 border border-[#d4af37]/20 bg-[#181824]">
              <h4 class="text-sm font-bold text-[#d4af37] uppercase mb-3">⚜ Gentlemen</h4>
              <ul class="space-y-2 text-xs text-[#f7e8c3]/80">
                ${(content.suggestionsGroom || []).map(s => `<li>• ${s}</li>`).join('')}
              </ul>
            </div>
            <div class="p-5 border border-[#d4af37]/20 bg-[#181824]">
              <h4 class="text-sm font-bold text-[#d4af37] uppercase mb-3">⚜ Ladies</h4>
              <ul class="space-y-2 text-xs text-[#f7e8c3]/80">
                ${(content.suggestionsBride || []).map(s => `<li>• ${s}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div class="mt-6 text-center text-xs text-[#d4af37]/70 italic">
            ${content.notes}
          </div>
        </div>
      </div>
    </section>
  `;
}

// 4. PRESSED BOTANICAL: Natural Linen & Earthy Plant Pigments
function renderBotanicalDressCode({ config, content, palette }) {
  return `
    <section id="module-dressCode" class="py-24 px-4 bg-[#f8f6f0] text-[#2c3d2c]">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#587358] block mb-2">EARTHY PIGMENTS • FABRICS</span>
          <h2 class="text-3xl sm:text-5xl font-serif italic text-[#1f2e1f] mb-3">Garden Attire Guide</h2>
          <div class="w-16 h-px bg-[#a3b3a3] mx-auto my-3"></div>
        </div>

        <div class="p-8 sm:p-12 bg-white border border-[#d9d4c5] rounded-sm shadow font-serif">
          <p class="text-sm leading-relaxed text-center mb-8 max-w-xl mx-auto text-[#475c47]">
            ${content.description}
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            ${palette.map(color => `
              <div class="p-3 border border-[#cbd8cb] bg-[#fbfdfb] text-center">
                <div class="w-full h-16 mb-2 border border-[#cbd8cb]" style="background-color: ${color.hex}"></div>
                <div class="text-xs font-bold text-[#2c3d2c]">${color.name}</div>
                <div class="text-[10px] font-mono text-[#6b7c6b]">${color.hex}</div>
              </div>
            `).join('')}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#cbd8cb] text-xs">
            <div class="p-4 bg-[#f8faf8] border-l-2 border-[#587358]">
              <div class="font-bold text-[#2c3d2c] mb-2">✦ Gentlemen</div>
              <ul class="space-y-1 text-[#475c47]">
                ${(content.suggestionsGroom || []).map(s => `<li>- ${s}</li>`).join('')}
              </ul>
            </div>
            <div class="p-4 bg-[#f8faf8] border-l-2 border-[#587358]">
              <div class="font-bold text-[#2c3d2c] mb-2">✦ Ladies</div>
              <ul class="space-y-1 text-[#475c47]">
                ${(content.suggestionsBride || []).map(s => `<li>- ${s}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 5. BOHEMIAN RUSTIC: Desert Sun Boho Chic
function renderBohoDressCode({ config, content, palette }) {
  return `
    <section id="module-dressCode" class="py-24 px-4 bg-[#fbf6f0] text-[#713f28]">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-[#b8623b] block mb-2">BOHO CHIC ATTIRE</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#522917] mb-2">Terracotta &amp; Warm Hues</h2>
          <div class="text-xl text-[#d99873]">✦ • ✦</div>
        </div>

        <div class="p-8 sm:p-12 rounded-3xl bg-[#fffaf5] border-2 border-[#d99873]/50 shadow-md font-serif">
          <p class="text-sm leading-relaxed text-center mb-8 max-w-xl mx-auto text-[#78432a]">
            ${content.description}
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            ${palette.map(color => `
              <div class="p-3 rounded-2xl border border-[#eed8c5] bg-white text-center shadow-sm">
                <div class="w-full h-16 rounded-xl mb-2" style="background-color: ${color.hex}"></div>
                <div class="text-xs font-bold text-[#522917]">${color.name}</div>
                <div class="text-[10px] font-mono text-[#c26d43]">${color.hex}</div>
              </div>
            `).join('')}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#eed8c5] text-xs">
            <div class="p-4 rounded-2xl bg-[#f5e6d6]">
              <div class="font-bold text-[#844c33] mb-2">✦ Men's Boho Attire</div>
              <ul class="space-y-1 text-[#63331d]">
                ${(content.suggestionsGroom || []).map(s => `<li>• ${s}</li>`).join('')}
              </ul>
            </div>
            <div class="p-4 rounded-2xl bg-[#f5e6d6]">
              <div class="font-bold text-[#844c33] mb-2">✦ Women's Boho Attire</div>
              <ul class="space-y-1 text-[#63331d]">
                ${(content.suggestionsBride || []).map(s => `<li>• ${s}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 6. WASHI IKEBANA ZEN: Kyoto Natural Fiber
function renderZenDressCode({ config, content, palette }) {
  return `
    <section id="module-dressCode" class="py-24 px-4 bg-[#f4f2ec] text-[#2c2b29]">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-[11px] font-mono uppercase tracking-[0.3em] text-[#3D3B37] font-bold block mb-2">服装規定 • DRESS CODE</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#1f1e1c] font-normal mb-2">Sắc Màu Hòa Hợp</h2>
          <div class="w-12 h-px bg-[#b33927] mx-auto my-3"></div>
        </div>

        <div class="p-8 sm:p-12 bg-[#faf8f4] border-2 border-[#dcd8ce] shadow-sm font-serif">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            ${palette.map(color => `
              <div class="p-3 border-2 border-[#e5e1d8] bg-white text-center">
                <div class="w-full h-16 mb-2 border border-stone-200" style="background-color: ${color.hex}"></div>
                <div class="text-xs font-bold text-[#1f1e1c]">${color.name}</div>
                <div class="text-[10px] font-mono font-bold text-[#3D3B37]">${color.hex}</div>
              </div>
            `).join('')}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t-2 border-[#e5e1d8] text-xs">
            <div class="p-4 bg-[#f0ede6] border-l-4 border-[#3D3B37]">
              <div class="font-bold text-[#1f1e1c] text-sm mb-2">Quý Ông</div>
              <ul class="space-y-1 text-[#1f1e1c] font-medium">
                ${(content.suggestionsGroom || []).map(s => `<li>- ${s}</li>`).join('')}
              </ul>
            </div>
            <div class="p-4 bg-[#f0ede6] border-l-4 border-[#3D3B37]">
              <div class="font-bold text-[#1f1e1c] text-sm mb-2">Quý Cô</div>
              <ul class="space-y-1 text-[#1f1e1c] font-medium">
                ${(content.suggestionsBride || []).map(s => `<li>- ${s}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 7. ART DECO 1920s: The Great Gatsby 1920s Glamour
function renderArtDecoDressCode({ config, content, palette }) {
  return `
    <section id="module-dressCode" class="py-24 px-4 bg-[#121619] text-[#e0b768]">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-[10px] font-mono uppercase tracking-[0.4em] text-[#e0b768] block mb-2">SOIRÉE ATTIRE</span>
          <h2 class="text-3xl sm:text-5xl font-title uppercase tracking-widest text-white mb-2">1920s Glamour</h2>
          <div class="w-24 h-0.5 bg-[#e0b768] mx-auto my-3"></div>
        </div>

        <div class="p-8 sm:p-12 border-2 border-[#e0b768] bg-[#191f24]">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            ${palette.map(color => `
              <div class="p-3 border border-[#e0b768]/40 bg-[#121619] text-center">
                <div class="w-full h-16 mb-2 border border-[#e0b768]" style="background-color: ${color.hex}"></div>
                <div class="text-xs font-title uppercase text-white">${color.name}</div>
                <div class="text-[10px] font-mono text-[#e0b768]">${color.hex}</div>
              </div>
            `).join('')}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#e0b768]/30 text-xs font-serif">
            <div class="p-4 border border-[#e0b768]/40 bg-[#121619]">
              <div class="font-title text-[#e0b768] uppercase font-bold mb-2">✦ Tuxedos &amp; Suits</div>
              <ul class="space-y-1 text-[#c7af85]">
                ${(content.suggestionsGroom || []).map(s => `<li>• ${s}</li>`).join('')}
              </ul>
            </div>
            <div class="p-4 border border-[#e0b768]/40 bg-[#121619]">
              <div class="font-title text-[#e0b768] uppercase font-bold mb-2">✦ Flapper &amp; Evening Gowns</div>
              <ul class="space-y-1 text-[#c7af85]">
                ${(content.suggestionsBride || []).map(s => `<li>• ${s}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 8. TROPICAL DESTINATION: Island Coastal Resort Cocktail
function renderTropicalDressCode({ config, content, palette }) {
  return `
    <section id="module-dressCode" class="py-24 px-4 bg-[#f0f9f8] text-[#0a444c]">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-widest font-sans font-bold text-[#0d6e75] block mb-2">RESORT CHIC</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#09353b] mb-2">Island Palette</h2>
          <div class="text-lg text-[#149d9b]">✦ • ✦ </div>
        </div>

        <div class="p-8 sm:p-12 rounded-3xl bg-white border border-[#a6dcd8] shadow-md font-sans">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            ${palette.map(color => `
              <div class="p-3 rounded-2xl border border-[#a6dcd8] bg-[#fbfdfd] text-center">
                <div class="w-full h-16 rounded-xl mb-2" style="background-color: ${color.hex}"></div>
                <div class="text-xs font-bold text-[#09353b]">${color.name}</div>
                <div class="text-[10px] font-mono text-[#0d6e75]">${color.hex}</div>
              </div>
            `).join('')}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#d0f0ee] text-xs">
            <div class="p-4 rounded-2xl bg-[#e3f6f5]">
              <div class="font-bold text-[#0d6e75] mb-2">✦ Men's Coastal Attire</div>
              <ul class="space-y-1 text-[#3b6d73]">
                ${(content.suggestionsGroom || []).map(s => `<li>• ${s}</li>`).join('')}
              </ul>
            </div>
            <div class="p-4 rounded-2xl bg-[#e3f6f5]">
              <div class="font-bold text-[#0d6e75] mb-2">✦ Women's Coastal Attire</div>
              <ul class="space-y-1 text-[#3b6d73]">
                ${(content.suggestionsBride || []).map(s => `<li>• ${s}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 9. K-WEDDING MINIMAL: Seoul Fashion Studio Editorial Color Card
function renderKWeddingDressCode({ config, content, palette }) {
  return `
    <section id="module-dressCode" class="py-24 px-4 bg-[#faf9f6] text-[#222]">
      <div class="max-w-4xl mx-auto border-t border-b border-[#222] py-14">
        <div class="text-center mb-12">
          <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-700 font-bold block mb-2">COLOR PALETTE // ISSUE 1128</span>
          <h2 class="text-3xl sm:text-4xl font-serif font-light text-stone-900 mb-2">Dress Code</h2>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          ${palette.map(color => `
            <div class="border-t-2 border-stone-800 pt-3 text-center">
              <div class="w-full h-16 mb-2 border border-stone-300" style="background-color: ${color.hex}"></div>
              <div class="text-xs font-serif font-bold text-stone-900">${color.name}</div>
              <div class="text-[10px] font-mono font-bold text-stone-700">${color.hex}</div>
            </div>
          `).join('')}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t-2 border-stone-300 text-xs font-serif">
          <div>
            <div class="font-mono text-stone-900 font-bold uppercase tracking-wider mb-2">MEN'S STYLING</div>
            <ul class="space-y-1 text-stone-800 font-medium">
              ${(content.suggestionsGroom || []).map(s => `<li>- ${s}</li>`).join('')}
            </ul>
          </div>
          <div>
            <div class="font-mono text-stone-900 font-bold uppercase tracking-wider mb-2">WOMEN'S STYLING</div>
            <ul class="space-y-1 text-stone-800 font-medium">
              ${(content.suggestionsBride || []).map(s => `<li>- ${s}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}

// 10. WATERCOLOR ROMANCE: Monet Soft Pastel Pigments
function renderWatercolorDressCode({ config, content, palette }) {
  return `
    <section id="module-dressCode" class="py-24 px-4 bg-[#fdf9fc] text-[#4d384d]">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-[#b876a2] block mb-2">PASTEL HARMONY</span>
          <h2 class="text-3xl sm:text-5xl font-serif italic text-[#3b253b] mb-2">Sắc Màu Tiệc Cưới</h2>
          <div class="text-lg text-[#d88bb5]">✦ • ✦</div>
        </div>

        <div class="p-8 sm:p-12 rounded-3xl bg-white/70 backdrop-blur-md border border-[#f0d8e8] shadow-xl font-serif">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            ${palette.map(color => `
              <div class="p-3 rounded-2xl border border-[#f0d8e8] bg-white/80 text-center shadow-sm">
                <div class="w-full h-16 rounded-xl mb-2" style="background-color: ${color.hex}"></div>
                <div class="text-xs font-serif italic text-[#3b253b]">${color.name}</div>
                <div class="text-[10px] font-mono text-[#b876a2]">${color.hex}</div>
              </div>
            `).join('')}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#f0d8e8] text-xs">
            <div class="p-4 rounded-2xl bg-gradient-to-r from-[#fde2ea]/50 to-[#e3ecfa]/50">
              <div class="font-bold text-[#8a3361] mb-2">✦ Trang Phục Nam</div>
              <ul class="space-y-1 text-[#7a587a]">
                ${(content.suggestionsGroom || []).map(s => `<li>• ${s}</li>`).join('')}
              </ul>
            </div>
            <div class="p-4 rounded-2xl bg-gradient-to-r from-[#fde2ea]/50 to-[#e3ecfa]/50">
              <div class="font-bold text-[#8a3361] mb-2">✦ Trang Phục Nữ</div>
              <ul class="space-y-1 text-[#7a587a]">
                ${(content.suggestionsBride || []).map(s => `<li>• ${s}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleFAQ.js ---
/**
 * Module 12: Câu Hỏi Thường Gặp (FAQ Accordion)
 * High Contrast & Crisp Visual Polish
 */

function renderModuleFAQ({ config, activeTemplate, moduleData }) {
  const content = moduleData.content;
  const items = content.items || [];

  return `
    <section id="module-faq" class="py-24 px-4 relative transition-colors duration-500 reveal-on-scroll">
      <div class="max-w-3xl mx-auto">
        
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-bold uppercase tracking-[0.25em] mb-3 shadow-xs">
            <span>Q &amp; A</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-title tracking-tight mb-3 text-stone-900 dark:text-stone-100 font-bold">${content.title || "Hỏi &amp; Đáp"}</h2>
          <p class="text-sm text-stone-600 dark:text-stone-400 max-w-lg mx-auto italic font-serif">${content.subtitle || "Mọi thông tin cần thiết giúp bạn chuẩn bị tốt nhất cho buổi tiệc"}</p>
        </div>

        <div class="space-y-4">
          ${items.map((item, idx) => `
            <div class="faq-accordion-item rounded-2xl border-2 border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/90 shadow-sm overflow-hidden transition-all hover:border-amber-400">
              <button 
                class="faq-accordion-toggle w-full p-5 text-left font-title font-bold text-base sm:text-lg flex justify-between items-center gap-4 hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors cursor-pointer"
                data-faq-index="${idx}"
                aria-expanded="false"
                aria-controls="faq-content-${idx}"
              >
                <span class="text-stone-900 dark:text-stone-100">${item.question}</span>
                <span class="faq-icon transform transition-transform duration-300 text-amber-600 dark:text-amber-400 font-mono text-xl shrink-0 font-bold">+</span>
              </button>
              <div id="faq-content-${idx}" class="faq-content hidden p-5 pt-0 text-sm text-stone-700 dark:text-stone-300 leading-relaxed border-t border-stone-200 dark:border-stone-800 font-normal">
                ${item.answer}
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleRSVP.js ---
/**
 * Module 13: Xác Nhận Tham Dự (Interactive RSVP Form)
 * 10 Radically Distinct Design Archetypes:
 * - vietnamese-heritage: Thiệp Hồi Báo Hoàng Triều with Song Hỷ seal & gold silk trims
 * - minimalist-modern: Terminal Declaration Sheet with monospace form inputs & sharp angles
 * - luxury-gold-foil: Versailles Royal Decree RSVP with 24K gold foil frames
 * - pressed-botanical: Herbarium Cotton Postcard with sage green inputs & dried olive accents
 * - bohemian-rustic: Desert Sun Festival Pass with warm terracotta & pampas accents
 * - washi-ikebana-zen: Kyoto Tea Shrine Ema Tablet with cinnabar seal & serene tones
 * - art-deco-1920s: Great Gatsby VIP Soirée Reservation with stepped brass chevron
 * - tropical-destination: Island Flight Boarding Pass Confirmation with coastal blues
 * - k-wedding-minimal: Seoul Fashion Atelier RSVP Slip with high-contrast serif
 * - watercolor-romance: Monet Floating Petal Wish Card with frosted glassmorphism
 */

function renderModuleRSVP({ config, activeTemplate, moduleData, guestName }) {
  const content = moduleData.content || {};
  const dietaryOptions = content.dietaryOptions || ["Ăn mặn tiêu chuẩn", "Ăn chay thanh tịnh", "Không ăn hải sản"];
  const templateId = activeTemplate.id;

  const renderers = {
    'vietnamese-heritage': renderVietnameseRSVP,
    'minimalist-modern': renderMinimalistRSVP,
    'luxury-gold-foil': renderLuxuryRSVP,
    'pressed-botanical': renderBotanicalRSVP,
    'bohemian-rustic': renderBohoRSVP,
    'washi-ikebana-zen': renderZenRSVP,
    'art-deco-1920s': renderArtDecoRSVP,
    'tropical-destination': renderTropicalRSVP,
    'k-wedding-minimal': renderKWeddingRSVP,
    'watercolor-romance': renderWatercolorRSVP
  };

  const renderer = renderers[templateId] || renderVietnameseRSVP;
  return renderer({ config, content, dietaryOptions, guestName });
}

// 1. VIETNAMESE HERITAGE: Thiệp Hồi Báo Hoàng Triều
function renderVietnameseRSVP({ config, content, dietaryOptions, guestName }) {
  return `
    <section id="module-rsvp" class="py-24 px-4 bg-[#780016] text-[#fbf0d9] relative">
      <div class="max-w-2xl mx-auto relative z-10">
        
        <div class="p-8 sm:p-12 rounded-3xl border-2 border-[#f0c05a] bg-[#8d001a] shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative">
          
          <div class="text-center mb-8">
            <div class="w-12 h-12 mx-auto mb-3 rounded-full border border-[#f0c05a] bg-[#50000e] flex items-center justify-center text-xl text-[#f0c05a] font-serif font-bold">
              囍
            </div>
            <h2 class="text-3xl sm:text-4xl font-title text-[#fcf3dc] tracking-tight mb-2">${content.title || "Xác Nhận Tham Dự"}</h2>
            <p class="text-xs sm:text-sm font-serif italic text-[#FFE082] font-semibold">${content.subtitle || "Sự hiện diện của quý khách là niềm vinh hạnh to lớn cho hai gia đình"}</p>
            <div class="mt-2 text-xs font-mono text-[#FFE082] font-bold">${content.deadlineText || "Xin vui lòng phản hồi trước ngày 15/11/2026"}</div>
          </div>

          <form id="rsvp-interactive-form" class="space-y-5 font-serif">
            <div>
              <label class="block text-xs font-title uppercase tracking-wider mb-1.5 text-[#FFE082] font-bold">Họ &amp; Tên Khách Mời *</label>
              <input type="text" id="rsvp-name" required value="${guestName || ''}" placeholder="Nhập họ tên của bạn..." class="w-full px-4 py-3 rounded-xl border-2 border-[#f0c05a]/70 bg-[#50000e] text-[#fcf3dc] placeholder-[#f0c05a]/75 text-sm focus:outline-none focus:ring-2 focus:ring-[#f0c05a] transition font-medium"/>
            </div>

            <div>
              <label class="block text-xs font-title uppercase tracking-wider mb-1.5 text-[#FFE082] font-bold">Số Điện Thoại *</label>
              <input type="tel" id="rsvp-phone" required placeholder="09xx xxx xxx" class="w-full px-4 py-3 rounded-xl border-2 border-[#f0c05a]/70 bg-[#50000e] text-[#fcf3dc] placeholder-[#f0c05a]/75 text-sm focus:outline-none focus:ring-2 focus:ring-[#f0c05a] transition font-medium"/>
            </div>

            <div>
              <label class="block text-xs font-title uppercase tracking-wider mb-2 text-[#FFE082] font-bold">Quý khách sẽ tham dự chứ? *</label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex items-center gap-2 p-3 rounded-xl border-2 border-[#f0c05a]/70 bg-[#50000e] cursor-pointer hover:bg-[#600012] transition">
                  <input type="radio" name="attendance" value="yes" checked class="accent-[#f0c05a] w-4 h-4"/>
                  <span class="text-xs font-bold text-[#fcf3dc]">Chắc chắn tham dự ❖</span>
                </label>
                <label class="flex items-center gap-2 p-3 rounded-xl border-2 border-[#f0c05a]/70 bg-[#50000e] cursor-pointer hover:bg-[#600012] transition">
                  <input type="radio" name="attendance" value="no" class="accent-[#f0c05a] w-4 h-4"/>
                  <span class="text-xs font-bold text-[#fcf3dc]">Rất tiếc không thể</span>
                </label>
              </div>
            </div>

            <div id="rsvp-guests-container">
              <label class="block text-xs font-title uppercase tracking-wider mb-1.5 text-[#FFE082] font-bold">Số lượng người tham dự</label>
              <select id="rsvp-guests-count" class="w-full px-4 py-3 rounded-xl border-2 border-[#f0c05a]/70 bg-[#50000e] text-[#fcf3dc] text-sm focus:outline-none focus:ring-2 focus:ring-[#f0c05a] transition font-medium">
                <option value="1">1 người (Chỉ mình tôi)</option>
                <option value="2">2 người (Tôi và người thương)</option>
                <option value="3">Gia đình 3 người</option>
                <option value="4">Gia đình 4 người</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-title uppercase tracking-wider mb-1.5 text-[#FFE082] font-bold">Chế độ cỗ tiệc</label>
              <select id="rsvp-dietary" class="w-full px-4 py-3 rounded-xl border-2 border-[#f0c05a]/70 bg-[#50000e] text-[#fcf3dc] text-sm focus:outline-none focus:ring-2 focus:ring-[#f0c05a] transition font-medium">
                ${dietaryOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-xs font-title uppercase tracking-wider mb-1.5 text-[#FFE082] font-bold">Lời chúc mừng hỷ sự</label>
              <textarea id="rsvp-message" rows="3" placeholder="Gửi lời chúc tới cô dâu & chú rể..." class="w-full px-4 py-3 rounded-xl border-2 border-[#f0c05a]/70 bg-[#50000e] text-[#fcf3dc] placeholder-[#f0c05a]/75 text-sm focus:outline-none focus:ring-2 focus:ring-[#f0c05a] transition resize-none font-medium"></textarea>
            </div>

            <button type="submit" class="w-full py-3.5 px-6 rounded-xl font-title font-bold text-sm uppercase tracking-widest bg-[#f0c05a] hover:bg-white text-[#630012] transition-all shadow-lg hover:shadow-xl">
              Xác Nhận Tham Dự Hỷ Sự
            </button>
          </form>

          <div id="rsvp-success-card" class="hidden mt-6 p-6 rounded-2xl bg-[#50000e] border-2 border-[#f0c05a] text-center text-[#fcf3dc]">
            <div class="text-3xl mb-2">❖</div>
            <h4 class="font-title font-bold text-base mb-1 text-[#f0c05a]">Gửi Xác Nhận Thành Công!</h4>
            <p class="text-xs font-serif leading-relaxed text-[#fcf3dc]">${content.successMessage}</p>
          </div>

        </div>

      </div>
    </section>
  `;
}

// 2. MINIMALIST MODERN: Terminal Declaration Sheet
function renderMinimalistRSVP({ config, content, dietaryOptions, guestName }) {
  return `
    <section id="module-rsvp" class="py-24 px-6 bg-[#0f0f0f] text-white font-sans border-b border-white/10">
      <div class="max-w-2xl mx-auto">
        
        <div class="border-2 border-stone-700 p-8 sm:p-12 bg-[#141414]">
          <div class="border-b border-stone-700 pb-4 mb-8 flex justify-between items-end font-mono">
            <div>
              <div class="text-[10px] text-stone-400 uppercase font-bold">// MODULE_13 PROTOCOL</div>
              <h2 class="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">RSVP DECLARATION</h2>
            </div>
            <div class="text-xs text-stone-300 font-bold">[DEADLINE // 15.11]</div>
          </div>

          <form id="rsvp-interactive-form" class="space-y-5 font-mono">
            <div>
              <label class="block text-[11px] uppercase tracking-widest mb-1.5 text-stone-200 font-bold">RECIPIENT_NAME *</label>
              <input type="text" id="rsvp-name" required value="${guestName || ''}" placeholder="ENTER NAME..." class="w-full px-4 py-3 bg-black border-2 border-stone-600 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-white transition"/>
            </div>

            <div>
              <label class="block text-[11px] uppercase tracking-widest mb-1.5 text-stone-200 font-bold">CONTACT_TEL *</label>
              <input type="tel" id="rsvp-phone" required placeholder="+84 ..." class="w-full px-4 py-3 bg-black border-2 border-stone-600 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-white transition"/>
            </div>

            <div>
              <label class="block text-[11px] uppercase tracking-widest mb-2 text-stone-200 font-bold">STATUS_ATTENDANCE *</label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex items-center gap-2 p-3 border-2 border-stone-600 bg-black cursor-pointer hover:border-white transition">
                  <input type="radio" name="attendance" value="yes" checked class="accent-white w-4 h-4"/>
                  <span class="text-xs uppercase font-bold text-white">[+] ATTENDING</span>
                </label>
                <label class="flex items-center gap-2 p-3 border-2 border-stone-600 bg-black cursor-pointer hover:border-white transition">
                  <input type="radio" name="attendance" value="no" class="accent-white w-4 h-4"/>
                  <span class="text-xs uppercase font-bold text-stone-300">[-] DECLINE</span>
                </label>
              </div>
            </div>

            <div id="rsvp-guests-container">
              <label class="block text-[11px] uppercase tracking-widest mb-1.5 text-stone-200 font-bold">COUNT_SEATS</label>
              <select id="rsvp-guests-count" class="w-full px-4 py-3 bg-black border-2 border-stone-600 text-white text-xs focus:outline-none focus:border-white transition">
                <option value="1">1 GUEST</option>
                <option value="2">2 GUESTS</option>
                <option value="3">3 GUESTS</option>
                <option value="4">4 GUESTS</option>
              </select>
            </div>

            <div>
              <label class="block text-[11px] uppercase tracking-widest mb-1.5 text-stone-200 font-bold">DIET_SPEC</label>
              <select id="rsvp-dietary" class="w-full px-4 py-3 bg-black border-2 border-stone-600 text-white text-xs focus:outline-none focus:border-white transition">
                ${dietaryOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-[11px] uppercase tracking-widest mb-1.5 text-stone-200 font-bold">TRANSMISSION_NOTE</label>
              <textarea id="rsvp-message" rows="3" placeholder="TYPE NOTE..." class="w-full px-4 py-3 bg-black border-2 border-stone-600 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-white transition resize-none"></textarea>
            </div>

            <button type="submit" class="w-full py-3.5 px-6 font-mono font-bold text-xs uppercase tracking-[0.25em] bg-white text-black hover:bg-stone-200 transition-all shadow">
              SUBMIT DECLARATION →
            </button>
          </form>

          <div id="rsvp-success-card" class="hidden mt-6 p-6 border-2 border-white bg-white/10 text-center font-mono text-xs">
            <div class="text-2xl mb-1">[CONFIRMED]</div>
            <p class="text-white">${content.successMessage}</p>
          </div>
        </div>

      </div>
    </section>
  `;
}

// 3. LUXURY GOLD FOIL: Versailles Royal Decree RSVP
function renderLuxuryRSVP({ config, content, dietaryOptions, guestName }) {
  return `
    <section id="module-rsvp" class="py-24 px-4 bg-[#0a0a0f] text-[#f7e8c3]">
      <div class="max-w-2xl mx-auto">
        
        <div class="p-8 sm:p-12 border-2 border-[#d4af37] bg-[#12121c] shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative">
          <div class="text-center mb-8">
            <div class="w-10 h-10 mx-auto mb-3 border border-[#d4af37] rounded-full flex items-center justify-center text-[#d4af37]">
              ⚜
            </div>
            <span class="text-xs uppercase tracking-[0.4em] text-[#f5ce62] font-serif font-bold block mb-1">ROYAL COURT INVITATION</span>
            <h2 class="text-3xl font-serif text-white tracking-wide mb-2">${content.title || "Confirm Attendance"}</h2>
            <div class="text-xs font-serif text-[#f5ce62] font-medium italic">${content.deadlineText || "Kindly respond before November 15, 2026"}</div>
          </div>

          <form id="rsvp-interactive-form" class="space-y-5 font-serif">
            <div>
              <label class="block text-xs uppercase tracking-widest text-[#f5ce62] font-bold mb-1.5">Guest Full Name *</label>
              <input type="text" id="rsvp-name" required value="${guestName || ''}" placeholder="Lord / Lady..." class="w-full px-4 py-3 border-2 border-[#d4af37]/60 bg-[#181824] text-white placeholder-[#d4af37]/70 text-sm focus:outline-none focus:border-[#d4af37] transition"/>
            </div>

            <div>
              <label class="block text-xs uppercase tracking-widest text-[#f5ce62] font-bold mb-1.5">Telephone Number *</label>
              <input type="tel" id="rsvp-phone" required placeholder="+84 ..." class="w-full px-4 py-3 border-2 border-[#d4af37]/60 bg-[#181824] text-white placeholder-[#d4af37]/70 text-sm focus:outline-none focus:border-[#d4af37] transition"/>
            </div>

            <div>
              <label class="block text-xs uppercase tracking-widest text-[#f5ce62] font-bold mb-2">Will you grace us with your presence? *</label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex items-center gap-2 p-3 border-2 border-[#d4af37]/60 bg-[#181824] cursor-pointer hover:border-[#d4af37] transition">
                  <input type="radio" name="attendance" value="yes" checked class="accent-[#d4af37] w-4 h-4"/>
                  <span class="text-xs font-bold text-white">Accepts With Pleasure ⚜</span>
                </label>
                <label class="flex items-center gap-2 p-3 border-2 border-[#d4af37]/60 bg-[#181824] cursor-pointer hover:border-[#d4af37] transition">
                  <input type="radio" name="attendance" value="no" class="accent-[#d4af37] w-4 h-4"/>
                  <span class="text-xs font-medium text-stone-300">Regretfully Declines</span>
                </label>
              </div>
            </div>

            <div id="rsvp-guests-container">
              <label class="block text-xs uppercase tracking-widest text-[#f5ce62] font-bold mb-1.5">Party Size</label>
              <select id="rsvp-guests-count" class="w-full px-4 py-3 border-2 border-[#d4af37]/60 bg-[#181824] text-white text-sm focus:outline-none focus:border-[#d4af37] transition">
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>

            <div>
              <label class="block text-xs uppercase tracking-widest text-[#f5ce62] font-bold mb-1.5">Banquet Preferences</label>
              <select id="rsvp-dietary" class="w-full px-4 py-3 border-2 border-[#d4af37]/60 bg-[#181824] text-white text-sm focus:outline-none focus:border-[#d4af37] transition">
                ${dietaryOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-xs uppercase tracking-widest text-[#f5ce62] font-bold mb-1.5">Heartfelt Blessing</label>
              <textarea id="rsvp-message" rows="3" placeholder="Your words of felicitations..." class="w-full px-4 py-3 border-2 border-[#d4af37]/60 bg-[#181824] text-white placeholder-[#d4af37]/70 text-sm focus:outline-none focus:border-[#d4af37] transition resize-none"></textarea>
            </div>

            <button type="submit" class="w-full py-3.5 px-6 font-serif uppercase tracking-[0.25em] text-xs font-bold bg-[#d4af37] text-black hover:bg-white transition-all shadow-md">
              Confirm Royal Attendance ⚜
            </button>
          </form>

          <div id="rsvp-success-card" class="hidden mt-6 p-6 border-2 border-[#d4af37] bg-[#181824] text-center font-serif text-sm text-[#f7e8c3]">
            <div class="text-2xl mb-1">⚜</div>
            <p>${content.successMessage}</p>
          </div>
        </div>

      </div>
    </section>
  `;
}

// 4. PRESSED BOTANICAL: Herbarium Cotton Postcard
function renderBotanicalRSVP({ config, content, dietaryOptions, guestName }) {
  return `
    <section id="module-rsvp" class="py-24 px-4 bg-[#f8f6f0] text-[#2c3d2c]">
      <div class="max-w-2xl mx-auto">
        <div class="p-8 sm:p-12 bg-white border-2 border-[#d9d4c5] rounded-sm shadow-md relative">
          <div class="text-center mb-8">
            <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#2D5A30] font-bold block mb-1">REPLY POSTCARD</span>
            <h2 class="text-3xl font-serif italic text-[#1f2e1f] font-bold mb-2">${content.title || "Confirm Attendance"}</h2>
            <div class="text-xs font-mono text-[#2D5A30] font-semibold">${content.deadlineText || "Please reply before Nov 15"}</div>
          </div>

          <form id="rsvp-interactive-form" class="space-y-5 font-serif">
            <div>
              <label class="block text-xs font-mono uppercase tracking-wider text-[#2D5A30] font-bold mb-1.5">Your Name *</label>
              <input type="text" id="rsvp-name" required value="${guestName || ''}" placeholder="Full name..." class="w-full px-4 py-3 border-2 border-[#a3bfa3] bg-[#fbfdfb] text-sm text-[#1f2e1f] placeholder-[#587358]/80 focus:outline-none focus:border-[#2D5A30] transition font-medium"/>
            </div>
            <div>
              <label class="block text-xs font-mono uppercase tracking-wider text-[#2D5A30] font-bold mb-1.5">Phone Number *</label>
              <input type="tel" id="rsvp-phone" required placeholder="09xx..." class="w-full px-4 py-3 border-2 border-[#a3bfa3] bg-[#fbfdfb] text-sm text-[#1f2e1f] placeholder-[#587358]/80 focus:outline-none focus:border-[#2D5A30] transition font-medium"/>
            </div>
            <div>
              <label class="block text-xs font-mono uppercase tracking-wider text-[#2D5A30] font-bold mb-2">Attendance *</label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex items-center gap-2 p-3 border-2 border-[#a3bfa3] bg-[#fbfdfb] cursor-pointer hover:border-[#2D5A30] transition">
                  <input type="radio" name="attendance" value="yes" checked class="accent-[#2D5A30] w-4 h-4"/>
                  <span class="text-xs font-bold text-[#1f2e1f]">Joyfully Accept ✦</span>
                </label>
                <label class="flex items-center gap-2 p-3 border-2 border-[#a3bfa3] bg-[#fbfdfb] cursor-pointer hover:border-[#2D5A30] transition">
                  <input type="radio" name="attendance" value="no" class="accent-[#2D5A30] w-4 h-4"/>
                  <span class="text-xs text-[#475c47] font-medium">Regretfully Decline</span>
                </label>
              </div>
            </div>
            <div id="rsvp-guests-container">
              <label class="block text-xs font-mono uppercase tracking-wider text-[#2D5A30] font-bold mb-1.5">Number of Guests</label>
              <select id="rsvp-guests-count" class="w-full px-4 py-3 border-2 border-[#a3bfa3] bg-[#fbfdfb] text-sm text-[#1f2e1f] focus:outline-none focus:border-[#2D5A30] transition font-medium">
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-mono uppercase tracking-wider text-[#2D5A30] font-bold mb-1.5">Meal Preference</label>
              <select id="rsvp-dietary" class="w-full px-4 py-3 border-2 border-[#a3bfa3] bg-[#fbfdfb] text-sm text-[#1f2e1f] focus:outline-none focus:border-[#2D5A30] transition font-medium">
                ${dietaryOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-mono uppercase tracking-wider text-[#2D5A30] font-bold mb-1.5">Note for Couple</label>
              <textarea id="rsvp-message" rows="3" placeholder="Warm words..." class="w-full px-4 py-3 border-2 border-[#a3bfa3] bg-[#fbfdfb] text-sm text-[#1f2e1f] placeholder-[#587358]/80 focus:outline-none focus:border-[#2D5A30] transition resize-none font-medium"></textarea>
            </div>
            <button type="submit" class="w-full py-3 px-6 bg-[#2D5A30] text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-[#1e3a24] transition rounded-sm shadow">
              Send Botanical Reply ✦
            </button>
          </form>

          <div id="rsvp-success-card" class="hidden mt-6 p-6 bg-[#f4f7f4] border-2 border-[#2D5A30] text-center font-serif text-sm text-[#1f2e1f]">
            ${content.successMessage}
          </div>
        </div>
      </div>
    </section>
  `;
}

// 5. BOHEMIAN RUSTIC: Desert Sun Festival Pass
function renderBohoRSVP({ config, content, dietaryOptions, guestName }) {
  return `
    <section id="module-rsvp" class="py-24 px-4 bg-[#fbf6f0] text-[#713f28]">
      <div class="max-w-2xl mx-auto">
        <div class="p-8 sm:p-12 rounded-3xl bg-[#fffaf5] border-2 border-[#d99873] shadow-lg text-center">
          <div class="text-2xl text-[#c26d43] mb-2">✦</div>
          <h2 class="text-3xl font-serif text-[#522917] font-bold mb-2">${content.title || "Join The Tribe"}</h2>
          <div class="text-xs font-serif text-[#8C3B18] font-bold mb-6">${content.deadlineText || "Let us know before Nov 15"}</div>

          <form id="rsvp-interactive-form" class="space-y-5 text-left font-serif">
            <div>
              <label class="block text-xs uppercase font-bold text-[#5c2410] mb-1">Your Name *</label>
              <input type="text" id="rsvp-name" required value="${guestName || ''}" placeholder="Full name..." class="w-full px-4 py-3 rounded-xl border-2 border-[#d99873] bg-white text-sm text-[#451E11] placeholder-[#b8623b]/80 focus:outline-none focus:border-[#c26d43] transition font-medium"/>
            </div>
            <div>
              <label class="block text-xs uppercase font-bold text-[#5c2410] mb-1">Phone *</label>
              <input type="tel" id="rsvp-phone" required placeholder="09xx..." class="w-full px-4 py-3 rounded-xl border-2 border-[#d99873] bg-white text-sm text-[#451E11] placeholder-[#b8623b]/80 focus:outline-none focus:border-[#c26d43] transition font-medium"/>
            </div>
            <div>
              <label class="block text-xs uppercase font-bold text-[#5c2410] mb-1">Attendance *</label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex items-center gap-2 p-3 rounded-xl border-2 border-[#d99873] bg-white cursor-pointer hover:border-[#c26d43] transition">
                  <input type="radio" name="attendance" value="yes" checked class="accent-[#c26d43] w-4 h-4"/>
                  <span class="text-xs font-bold text-[#522917]">Yes, Can't Wait!</span>
                </label>
                <label class="flex items-center gap-2 p-3 rounded-xl border-2 border-[#d99873] bg-white cursor-pointer hover:border-[#c26d43] transition">
                  <input type="radio" name="attendance" value="no" class="accent-[#c26d43] w-4 h-4"/>
                  <span class="text-xs text-[#78432a] font-medium">Sending Love from Afar</span>
                </label>
              </div>
            </div>
            <div id="rsvp-guests-container">
              <label class="block text-xs uppercase font-bold text-[#5c2410] mb-1">Guests</label>
              <select id="rsvp-guests-count" class="w-full px-4 py-3 rounded-xl border-2 border-[#d99873] bg-white text-sm text-[#451E11] focus:outline-none focus:border-[#c26d43] transition font-medium">
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
              </select>
            </div>
            <div>
              <label class="block text-xs uppercase font-bold text-[#5c2410] mb-1">Food</label>
              <select id="rsvp-dietary" class="w-full px-4 py-3 rounded-xl border-2 border-[#d99873] bg-white text-sm text-[#451E11] focus:outline-none focus:border-[#c26d43] transition font-medium">
                ${dietaryOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs uppercase font-bold text-[#5c2410] mb-1">Message</label>
              <textarea id="rsvp-message" rows="3" placeholder="Warm wishes..." class="w-full px-4 py-3 rounded-xl border-2 border-[#d99873] bg-white text-sm text-[#451E11] placeholder-[#b8623b]/80 focus:outline-none focus:border-[#c26d43] transition resize-none font-medium"></textarea>
            </div>
            <button type="submit" class="w-full py-3.5 px-6 rounded-full bg-[#c26d43] text-white font-sans text-xs uppercase font-bold tracking-widest hover:bg-[#a8552e] transition shadow">
              Confirm Festival Pass ✦
            </button>
          </form>

          <div id="rsvp-success-card" class="hidden mt-6 p-6 rounded-2xl bg-[#f5e6d6] border-2 border-[#d99873] text-center font-serif text-sm text-[#522917]">
            ${content.successMessage}
          </div>
        </div>
      </div>
    </section>
  `;
}

// 6. WASHI IKEBANA ZEN: Kyoto Tea Shrine Ema Tablet
function renderZenRSVP({ config, content, dietaryOptions, guestName }) {
  return `
    <section id="module-rsvp" class="py-24 px-4 bg-[#f4f2ec] text-[#2c2b29]">
      <div class="max-w-2xl mx-auto">
        <div class="p-8 sm:p-12 bg-[#faf8f4] border-2 border-[#dcd8ce] shadow-sm text-center">
          <div class="w-8 h-8 rounded-full bg-[#b33927] text-white flex items-center justify-center mx-auto mb-3 text-xs font-serif font-bold">
            結
          </div>
          <h2 class="text-3xl font-serif text-[#1f1e1c] font-normal mb-2">${content.title || "Xác Nhận Tham Dự"}</h2>
          <div class="text-xs font-serif text-[#3D3B37] font-bold mb-6">${content.deadlineText || "Kính mong phản hồi trước ngày 15/11/2026"}</div>

          <form id="rsvp-interactive-form" class="space-y-5 text-left font-serif">
            <div>
              <label class="block text-xs text-[#1f1e1c] font-bold mb-1">Họ Tên *</label>
              <input type="text" id="rsvp-name" required value="${guestName || ''}" placeholder="Nhập họ tên..." class="w-full px-4 py-3 border-2 border-[#c2bdae] bg-white text-sm text-[#1f1e1c] placeholder-[#5e5a52] focus:outline-none focus:border-[#2c2b29] transition font-medium"/>
            </div>
            <div>
              <label class="block text-xs text-[#1f1e1c] font-bold mb-1">Số Điện Thoại *</label>
              <input type="tel" id="rsvp-phone" required placeholder="09xx..." class="w-full px-4 py-3 border-2 border-[#c2bdae] bg-white text-sm text-[#1f1e1c] placeholder-[#5e5a52] focus:outline-none focus:border-[#2c2b29] transition font-medium"/>
            </div>
            <div>
              <label class="block text-xs text-[#1f1e1c] font-bold mb-1">Tham Dự *</label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex items-center gap-2 p-3 border-2 border-[#c2bdae] bg-white cursor-pointer hover:border-[#2c2b29] transition">
                  <input type="radio" name="attendance" value="yes" checked class="accent-[#b33927] w-4 h-4"/>
                  <span class="text-xs font-bold text-[#1f1e1c]">Chắc chắn tham dự</span>
                </label>
                <label class="flex items-center gap-2 p-3 border-2 border-[#c2bdae] bg-white cursor-pointer hover:border-[#2c2b29] transition">
                  <input type="radio" name="attendance" value="no" class="accent-[#b33927] w-4 h-4"/>
                  <span class="text-xs text-[#5e5a52] font-medium">Rất tiếc vắng mặt</span>
                </label>
              </div>
            </div>
            <div id="rsvp-guests-container">
              <label class="block text-xs text-[#1f1e1c] font-bold mb-1">Số Khách</label>
              <select id="rsvp-guests-count" class="w-full px-4 py-3 border-2 border-[#c2bdae] bg-white text-sm text-[#1f1e1c] focus:outline-none focus:border-[#2c2b29] transition font-medium">
                <option value="1">1 người</option>
                <option value="2">2 người</option>
              </select>
            </div>
            <div>
              <label class="block text-xs text-[#1f1e1c] font-bold mb-1">Ẩm Thực</label>
              <select id="rsvp-dietary" class="w-full px-4 py-3 border-2 border-[#c2bdae] bg-white text-sm text-[#1f1e1c] focus:outline-none focus:border-[#2c2b29] transition font-medium">
                ${dietaryOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs text-[#1f1e1c] font-bold mb-1">Lời Nhắn</label>
              <textarea id="rsvp-message" rows="3" placeholder="Tâm tình gửi trao..." class="w-full px-4 py-3 border-2 border-[#c2bdae] bg-white text-sm text-[#1f1e1c] placeholder-[#5e5a52] focus:outline-none focus:border-[#2c2b29] transition resize-none font-medium"></textarea>
            </div>
            <button type="submit" class="w-full py-3 px-6 bg-[#2c2b29] text-white text-xs font-serif font-bold tracking-widest hover:bg-[#b33927] transition shadow">
              Gửi Phúc Đáp Thiệp Cưới
            </button>
          </form>

          <div id="rsvp-success-card" class="hidden mt-6 p-6 bg-[#f0ede6] border-2 border-[#dcd8ce] text-center font-serif text-sm text-[#1f1e1c]">
            ${content.successMessage}
          </div>
        </div>
      </div>
    </section>
  `;
}

// 7. ART DECO 1920s: Great Gatsby VIP Soirée Reservation
function renderArtDecoRSVP({ config, content, dietaryOptions, guestName }) {
  return `
    <section id="module-rsvp" class="py-24 px-4 bg-[#121619] text-[#e0b768]">
      <div class="max-w-2xl mx-auto">
        <div class="p-8 sm:p-12 border-4 border-[#e0b768] bg-[#191f24] shadow-[0_0_40px_rgba(224,183,104,0.2)] text-center">
          <span class="text-[10px] font-mono uppercase tracking-[0.4em] text-[#F5DEB3] font-bold block mb-2">SOIRÉE RESERVATIONS</span>
          <h2 class="text-3xl font-title uppercase tracking-widest text-white mb-2">${content.title || "Confirm Your Seat"}</h2>
          <div class="text-xs font-mono text-[#F5DEB3] font-bold mb-6">${content.deadlineText || "R.S.V.P. BEFORE NOV 15"}</div>

          <form id="rsvp-interactive-form" class="space-y-5 text-left font-title">
            <div>
              <label class="block text-xs uppercase tracking-wider text-[#F5DEB3] font-bold mb-1">Guest Name *</label>
              <input type="text" id="rsvp-name" required value="${guestName || ''}" placeholder="Full name..." class="w-full px-4 py-3 border-2 border-[#e0b768]/70 bg-[#121619] text-white placeholder-[#c7af85] text-sm focus:outline-none focus:border-[#e0b768] transition"/>
            </div>
            <div>
              <label class="block text-xs uppercase tracking-wider text-[#F5DEB3] font-bold mb-1">Telephone *</label>
              <input type="tel" id="rsvp-phone" required placeholder="09xx..." class="w-full px-4 py-3 border-2 border-[#e0b768]/70 bg-[#121619] text-white placeholder-[#c7af85] text-sm focus:outline-none focus:border-[#e0b768] transition"/>
            </div>
            <div>
              <label class="block text-xs uppercase tracking-wider text-[#F5DEB3] font-bold mb-1">Attendance *</label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex items-center gap-2 p-3 border-2 border-[#e0b768]/70 bg-[#121619] cursor-pointer hover:border-[#e0b768] transition">
                  <input type="radio" name="attendance" value="yes" checked class="accent-[#e0b768] w-4 h-4"/>
                  <span class="text-xs text-white font-bold uppercase whitespace-nowrap">Will Attend Soirée</span>
                </label>
                <label class="flex items-center gap-2 p-3 border-2 border-[#e0b768]/70 bg-[#121619] cursor-pointer hover:border-[#e0b768] transition">
                  <input type="radio" name="attendance" value="no" class="accent-[#e0b768] w-4 h-4"/>
                  <span class="text-xs text-[#E8DCC2] uppercase whitespace-nowrap">Cannot Attend</span>
                </label>
              </div>
            </div>
            <div id="rsvp-guests-container">
              <label class="block text-xs uppercase tracking-wider text-[#F5DEB3] font-bold mb-1">Seats</label>
              <select id="rsvp-guests-count" class="w-full px-4 py-3 border-2 border-[#e0b768]/70 bg-[#121619] text-white text-sm focus:outline-none focus:border-[#e0b768] transition">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
              </select>
            </div>
            <div>
              <label class="block text-xs uppercase tracking-wider text-[#F5DEB3] font-bold mb-1">Dining Selection</label>
              <select id="rsvp-dietary" class="w-full px-4 py-3 border-2 border-[#e0b768]/70 bg-[#121619] text-white text-sm focus:outline-none focus:border-[#e0b768] transition">
                ${dietaryOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs uppercase tracking-wider text-[#F5DEB3] font-bold mb-1">Telegram to the Couple</label>
              <textarea id="rsvp-message" rows="3" placeholder="Words for the hosts..." class="w-full px-4 py-3 border-2 border-[#e0b768]/70 bg-[#121619] text-white placeholder-[#c7af85] text-sm focus:outline-none focus:border-[#e0b768] transition resize-none"></textarea>
            </div>
            <button type="submit" class="w-full py-3.5 px-6 bg-[#e0b768] text-[#121619] font-title font-bold text-xs uppercase tracking-[0.25em] hover:bg-white transition shadow">
              Reserve Ballroom Table
            </button>
          </form>

          <div id="rsvp-success-card" class="hidden mt-6 p-6 border-2 border-[#e0b768] bg-[#121619] text-center font-title text-sm text-[#e0b768]">
            ${content.successMessage}
          </div>
        </div>
      </div>
    </section>
  `;
}

// 8. TROPICAL DESTINATION: Island Flight Boarding Pass Confirmation
function renderTropicalRSVP({ config, content, dietaryOptions, guestName }) {
  return `
    <section id="module-rsvp" class="py-24 px-4 bg-[#f0f9f8] text-[#0a444c]">
      <div class="max-w-2xl mx-auto">
        <div class="p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#a6dcd8] shadow-xl text-center">
          <div class="text-2xl text-[#149d9b] mb-2">✦</div>
          <h2 class="text-3xl font-serif text-[#09353b] font-bold mb-2">${content.title || "Confirm Boarding"}</h2>
          <div class="text-xs font-sans text-[#063A42] font-bold mb-6">${content.deadlineText || "Confirm before Nov 15"}</div>

          <form id="rsvp-interactive-form" class="space-y-5 text-left font-sans">
            <div>
              <label class="block text-xs font-bold text-[#063A42] mb-1">Passenger Name *</label>
              <input type="text" id="rsvp-name" required value="${guestName || ''}" placeholder="Full name..." class="w-full px-4 py-3 rounded-xl border-2 border-[#a6dcd8] bg-[#fbfdfd] text-sm text-[#09353b] placeholder-[#3b6d73] focus:outline-none focus:border-[#0d6e75] transition font-medium"/>
            </div>
            <div>
              <label class="block text-xs font-bold text-[#063A42] mb-1">Contact Tel *</label>
              <input type="tel" id="rsvp-phone" required placeholder="09xx..." class="w-full px-4 py-3 rounded-xl border-2 border-[#a6dcd8] bg-[#fbfdfd] text-sm text-[#09353b] placeholder-[#3b6d73] focus:outline-none focus:border-[#0d6e75] transition font-medium"/>
            </div>
            <div>
              <label class="block text-xs font-bold text-[#063A42] mb-1">Boarding Status *</label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex items-center gap-2 p-3 rounded-xl border-2 border-[#a6dcd8] bg-[#fbfdfd] cursor-pointer hover:border-[#0d6e75] transition">
                  <input type="radio" name="attendance" value="yes" checked class="accent-[#0d6e75] w-4 h-4"/>
                  <span class="text-xs font-bold text-[#09353b]">Ready for Boarding ✦</span>
                </label>
                <label class="flex items-center gap-2 p-3 rounded-xl border-2 border-[#a6dcd8] bg-[#fbfdfd] cursor-pointer hover:border-[#0d6e75] transition">
                  <input type="radio" name="attendance" value="no" class="accent-[#0d6e75] w-4 h-4"/>
                  <span class="text-xs text-[#08353b] font-medium">Flight Cancelled</span>
                </label>
              </div>
            </div>
            <div id="rsvp-guests-container">
              <label class="block text-xs font-bold text-[#063A42] mb-1">Passenger Count</label>
              <select id="rsvp-guests-count" class="w-full px-4 py-3 rounded-xl border-2 border-[#a6dcd8] bg-[#fbfdfd] text-sm text-[#09353b] focus:outline-none focus:border-[#0d6e75] transition font-medium">
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-[#063A42] mb-1">Catering</label>
              <select id="rsvp-dietary" class="w-full px-4 py-3 rounded-xl border-2 border-[#a6dcd8] bg-[#fbfdfd] text-sm text-[#09353b] focus:outline-none focus:border-[#0d6e75] transition font-medium">
                ${dietaryOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-[#063A42] mb-1">Message</label>
              <textarea id="rsvp-message" rows="3" placeholder="Island wishes..." class="w-full px-4 py-3 rounded-xl border-2 border-[#a6dcd8] bg-[#fbfdfd] text-sm text-[#09353b] placeholder-[#3b6d73] focus:outline-none focus:border-[#0d6e75] transition resize-none font-medium"></textarea>
            </div>
            <button type="submit" class="w-full py-3.5 px-6 rounded-full bg-[#063A42] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#04282e] transition shadow">
              Confirm Flight Reservation
            </button>
          </form>

          <div id="rsvp-success-card" class="hidden mt-6 p-6 rounded-2xl bg-[#e3f6f5] border-2 border-[#a6dcd8] text-center font-sans text-sm text-[#09353b]">
            ${content.successMessage}
          </div>
        </div>
      </div>
    </section>
  `;
}

// 9. K-WEDDING MINIMAL: Seoul Fashion Atelier RSVP Slip
function renderKWeddingRSVP({ config, content, dietaryOptions, guestName }) {
  return `
    <section id="module-rsvp" class="py-24 px-4 bg-[#faf9f6] text-[#222]">
      <div class="max-w-2xl mx-auto border-t-2 border-b-2 border-stone-800 py-14">
        <div class="text-center mb-8">
          <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-700 font-bold block mb-1">REGISTRATION // ISSUE 1128</span>
          <h2 class="text-3xl font-serif font-light text-stone-900 mb-2">${content.title || "RSVP Slip"}</h2>
          <div class="text-xs font-mono text-stone-700 font-bold">${content.deadlineText || "Please reply before Nov 15"}</div>
        </div>

        <form id="rsvp-interactive-form" class="space-y-5 text-left font-serif">
          <div>
            <label class="block text-xs font-mono uppercase tracking-widest text-stone-900 font-bold mb-1">Name *</label>
            <input type="text" id="rsvp-name" required value="${guestName || ''}" placeholder="Full name..." class="w-full px-4 py-3 border-2 border-stone-300 bg-white text-stone-900 placeholder-stone-500 text-sm focus:outline-none focus:border-black transition font-medium"/>
          </div>
          <div>
            <label class="block text-xs font-mono uppercase tracking-widest text-stone-900 font-bold mb-1">Phone *</label>
            <input type="tel" id="rsvp-phone" required placeholder="09xx..." class="w-full px-4 py-3 border-2 border-stone-300 bg-white text-stone-900 placeholder-stone-500 text-sm focus:outline-none focus:border-black transition font-medium"/>
          </div>
          <div>
            <label class="block text-xs font-mono uppercase tracking-widest text-stone-900 font-bold mb-1">Status *</label>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label class="flex items-center gap-2 p-3 border-2 border-stone-300 bg-white cursor-pointer hover:border-black transition">
                <input type="radio" name="attendance" value="yes" checked class="accent-black w-4 h-4"/>
                <span class="text-xs font-bold text-stone-900">Attending</span>
              </label>
              <label class="flex items-center gap-2 p-3 border-2 border-stone-300 bg-white cursor-pointer hover:border-black transition">
                <input type="radio" name="attendance" value="no" class="accent-black w-4 h-4"/>
                <span class="text-xs text-stone-700 font-medium">Declined</span>
              </label>
            </div>
          </div>
          <div id="rsvp-guests-container">
            <label class="block text-xs font-mono uppercase tracking-widest text-stone-900 font-bold mb-1">Seats</label>
            <select id="rsvp-guests-count" class="w-full px-4 py-3 border-2 border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:border-black transition font-medium">
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-mono uppercase tracking-widest text-stone-900 font-bold mb-1">Diet</label>
            <select id="rsvp-dietary" class="w-full px-4 py-3 border-2 border-stone-300 bg-white text-stone-900 text-sm focus:outline-none focus:border-black transition font-medium">
              ${dietaryOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="block text-xs font-mono uppercase tracking-widest text-stone-900 font-bold mb-1">Note</label>
            <textarea id="rsvp-message" rows="3" placeholder="Warm words..." class="w-full px-4 py-3 border-2 border-stone-300 bg-white text-stone-900 placeholder-stone-500 text-sm focus:outline-none focus:border-black transition resize-none font-medium"></textarea>
          </div>
          <button type="submit" class="w-full py-3.5 px-6 bg-stone-900 text-white font-mono text-xs uppercase font-bold tracking-widest hover:bg-black transition shadow">
            Submit RSVP Slip →
          </button>
        </form>

        <div id="rsvp-success-card" class="hidden mt-6 p-6 border-2 border-stone-900 text-center font-serif text-sm text-stone-900">
          ${content.successMessage}
        </div>
      </div>
    </section>
  `;
}

// 10. WATERCOLOR ROMANCE: Monet Floating Petal Wish Card
function renderWatercolorRSVP({ config, content, dietaryOptions, guestName }) {
  return `
    <section id="module-rsvp" class="py-24 px-4 bg-[#fdf9fc] text-[#4d384d]">
      <div class="max-w-2xl mx-auto">
        <div class="p-8 sm:p-12 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#f0d8e8] shadow-xl text-center">
          <div class="text-2xl text-[#d88bb5] mb-2">✦</div>
          <h2 class="text-3xl font-serif italic text-[#3b253b] font-bold mb-2">${content.title || "Xác Nhận Tham Dự"}</h2>
          <div class="text-xs font-serif text-[#6B2149] font-bold mb-6">${content.deadlineText || "Xin gửi phản hồi trước ngày 15/11/2026"}</div>

          <form id="rsvp-interactive-form" class="space-y-5 text-left font-serif">
            <div>
              <label class="block text-xs font-bold text-[#521636] mb-1">Họ Tên Khách Mời *</label>
              <input type="text" id="rsvp-name" required value="${guestName || ''}" placeholder="Nhập họ tên..." class="w-full px-4 py-3 rounded-2xl border-2 border-[#f0d8e8] bg-white text-sm text-[#3b253b] placeholder-[#8a3361]/70 focus:outline-none focus:border-[#912d68] transition font-medium"/>
            </div>
            <div>
              <label class="block text-xs font-bold text-[#521636] mb-1">Số Điện Thoại *</label>
              <input type="tel" id="rsvp-phone" required placeholder="09xx..." class="w-full px-4 py-3 rounded-2xl border-2 border-[#f0d8e8] bg-white text-sm text-[#3b253b] placeholder-[#8a3361]/70 focus:outline-none focus:border-[#912d68] transition font-medium"/>
            </div>
            <div>
              <label class="block text-xs font-bold text-[#521636] mb-1">Sự Hiện Diện Của Bạn *</label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex items-center gap-2 p-3 rounded-2xl border-2 border-[#f0d8e8] bg-white cursor-pointer hover:border-[#912d68] transition">
                  <input type="radio" name="attendance" value="yes" checked class="accent-[#d88bb5] w-4 h-4"/>
                  <span class="text-xs font-bold text-[#3b253b]">Chắc chắn tham dự ✦</span>
                </label>
                <label class="flex items-center gap-2 p-3 rounded-2xl border-2 border-[#f0d8e8] bg-white cursor-pointer hover:border-[#912d68] transition">
                  <input type="radio" name="attendance" value="no" class="accent-[#d88bb5] w-4 h-4"/>
                  <span class="text-xs text-[#6B2149] font-medium">Rất tiếc vắng mặt</span>
                </label>
              </div>
            </div>
            <div id="rsvp-guests-container">
              <label class="block text-xs font-bold text-[#521636] mb-1">Số Khách Cùng Đi</label>
              <select id="rsvp-guests-count" class="w-full px-4 py-3 rounded-2xl border-2 border-[#f0d8e8] bg-white text-sm text-[#3b253b] focus:outline-none focus:border-[#912d68] transition font-medium">
                <option value="1">1 người</option>
                <option value="2">2 người</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-[#521636] mb-1">Khẩu Vị Tiệc Cưới</label>
              <select id="rsvp-dietary" class="w-full px-4 py-3 rounded-2xl border-2 border-[#f0d8e8] bg-white text-sm text-[#3b253b] focus:outline-none focus:border-[#912d68] transition font-medium">
                ${dietaryOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-[#521636] mb-1">Lời Chúc Yêu Thương</label>
              <textarea id="rsvp-message" rows="3" placeholder="Gửi gắm lời chúc ngọt ngào..." class="w-full px-4 py-3 rounded-2xl border-2 border-[#f0d8e8] bg-white text-sm text-[#3b253b] placeholder-[#8a3361]/70 focus:outline-none focus:border-[#912d68] transition resize-none font-medium"></textarea>
            </div>
            <button type="submit" class="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#c25e8e] to-[#8755c2] text-white font-serif text-xs font-bold uppercase tracking-wider hover:opacity-90 transition shadow">
              Gửi Phúc Đáp Cánh Hoa ✦
            </button>
          </form>

          <div id="rsvp-success-card" class="hidden mt-6 p-6 rounded-2xl bg-[#fde2ea] border-2 border-[#f0d8e8] text-center font-serif text-sm text-[#521636] font-bold">
            ${content.successMessage}
          </div>
        </div>
      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleBanking.js ---
/**
 * Module 14: Mừng Cưới / Hộp Mừng (Wedding Gift Box & Banking QR)
 * 10 Radically Distinct Design Archetypes - Optimized for High Contrast & Readability (WCAG AA)
 */

function renderModuleBanking({ config, activeTemplate, moduleData }) {
  const content = moduleData.content || {};
  const accounts = content.accounts || [];
  const templateId = activeTemplate.id;

  const renderers = {
    'vietnamese-heritage': renderVietnameseBanking,
    'minimalist-modern': renderMinimalistBanking,
    'luxury-gold-foil': renderLuxuryBanking,
    'pressed-botanical': renderBotanicalBanking,
    'bohemian-rustic': renderBohoBanking,
    'washi-ikebana-zen': renderZenBanking,
    'art-deco-1920s': renderArtDecoBanking,
    'tropical-destination': renderTropicalBanking,
    'k-wedding-minimal': renderKWeddingBanking,
    'watercolor-romance': renderWatercolorBanking
  };

  const renderer = renderers[templateId] || renderVietnameseBanking;
  return renderer({ config, content, accounts });
}

// 1. VIETNAMESE HERITAGE: Phong Bao Lì Xì Đỏ Mừng Hỷ Sự
function renderVietnameseBanking({ config, content, accounts }) {
  return `
    <section id="module-banking" class="py-24 px-4 bg-[#780016] text-[#fbf0d9] relative">
      <div class="max-w-4xl mx-auto relative z-10">
        
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#f0c05a] bg-[#50000e] text-[#f0c05a] text-xs font-serif tracking-widest uppercase mb-3 shadow">
            <span>❖ CHÚC PHÚC ĐÔI LỨA ❖</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-title text-[#fcf3dc] tracking-tight mb-2">${content.title || "Hộp Mừng Hỷ Sự"}</h2>
          <div class="flex items-center justify-center gap-3 text-[#f0c05a] my-2">
            <span class="w-12 h-px bg-current opacity-60"></span>
            <span class="text-xl">囍</span>
            <span class="w-12 h-px bg-current opacity-60"></span>
          </div>
          <p class="text-xs sm:text-sm font-serif italic text-[#FFE082]">${content.subtitle || "Phong bao lì xì gửi gắm tâm tình và lời chúc phúc trăm năm"}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${accounts.map(acc => `
            <div class="p-8 rounded-2xl border-2 border-[#f0c05a] bg-[#8d001a] shadow-[0_15px_40px_rgba(0,0,0,0.6)] text-center flex flex-col justify-between relative overflow-hidden">
              
              <!-- Subtle decorative fold -->
              <div class="absolute -top-12 left-0 right-0 h-14 bg-[#50000e] border-b-2 border-[#f0c05a]/60 pointer-events-none opacity-20"></div>

              <div>
                <div class="inline-block px-5 py-1.5 rounded-full bg-[#f0c05a] text-[#630012] font-title font-bold text-xs tracking-wider uppercase mb-6 shadow-md border border-[#fff]/40">
                  ❖ ${acc.roleLabel || (acc.role === 'groom' ? 'Mừng Chú Rể' : 'Mừng Cô Dâu')}
                </div>

                <div class="w-48 h-48 mx-auto p-3 bg-white rounded-xl border-2 border-[#f0c05a] shadow-lg mb-6 flex items-center justify-center">
                  <img src="${acc.qrCodeImage}" alt="QR ${acc.holderName}" class="w-full h-full object-contain" loading="lazy"/>
                </div>

                <h3 class="font-title text-xl text-white font-bold mb-1">${acc.holderName}</h3>
                <div class="text-xs font-serif text-[#f0c05a] mb-1 font-bold tracking-wide">${acc.bankName}</div>
                ${acc.branch ? `<div class="text-xs font-serif text-[#fbf0d9] mb-4 font-medium">${acc.branch}</div>` : ''}

                <!-- High-contrast royal parchment container -->
                <div class="p-3.5 rounded-xl bg-[#FFFDF8] border-2 border-[#D89F38] flex items-center justify-between gap-3 max-w-xs mx-auto mb-4 shadow-md">
                  <span class="font-mono text-base font-bold text-[#9B1B1E] tracking-wider">${acc.accountNumber}</span>
                  <button class="copy-account-btn px-3 py-1.5 rounded-lg bg-[#9B1B1E] text-[#F0C05A] hover:bg-[#780016] hover:text-white transition text-xs font-title font-bold shadow" data-account="${acc.accountNumber}">
                    Sao chép
                  </button>
                </div>
              </div>

              <p class="text-xs font-serif italic text-[#FFE082] font-medium">Quét mã VietQR bằng bất kỳ ứng dụng ngân hàng nào</p>
            </div>
          `).join('')}
        </div>

        <div class="text-center mt-10 text-xs sm:text-sm font-serif italic text-[#FFE082] max-w-md mx-auto leading-relaxed">
          ${content.wishingNote || "Mọi lời chúc và sự đồng hành của bạn là món quà vô giá nhất đối với chúng mình."}
        </div>

      </div>
    </section>
  `;
}

// 2. MINIMALIST MODERN: Monolithic Titanium Metal Card
function renderMinimalistBanking({ config, content, accounts }) {
  return `
    <section id="module-banking" class="py-24 px-6 bg-[#0f0f0f] text-white font-sans border-b border-white/10">
      <div class="max-w-4xl mx-auto">
        
        <div class="border-b border-white/20 pb-4 mb-12 flex justify-between items-end">
          <div>
            <span class="text-xs font-mono uppercase tracking-[0.3em] text-stone-300 block mb-1">MODULE_14 // DIRECT TRANSFER</span>
            <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1">GIFT BOX</h2>
          </div>
          <div class="font-mono text-xs text-stone-300 font-bold">[SECURE_QR // VIETQR]</div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${accounts.map(acc => `
            <div class="border border-stone-700 p-8 flex flex-col justify-between bg-[#141414] shadow-md">
              <div>
                <div class="font-mono text-xs text-stone-300 uppercase tracking-widest border-b border-stone-800 pb-3 mb-6 flex justify-between">
                  <span class="font-bold">TRANSFER // ${acc.role === 'groom' ? 'GROOM' : 'BRIDE'}</span>
                  <span class="text-white font-bold">${acc.bankName}</span>
                </div>

                <div class="w-48 h-48 mx-auto p-3 bg-white mb-6 flex items-center justify-center">
                  <img src="${acc.qrCodeImage}" alt="QR ${acc.holderName}" class="w-full h-full object-contain" loading="lazy"/>
                </div>

                <div class="text-center">
                  <h3 class="font-mono text-lg font-bold uppercase tracking-tight text-white mb-1">${acc.holderName}</h3>
                  <div class="font-mono text-xs text-stone-300 font-semibold mb-4">${acc.branch || 'HEADQUARTERS'}</div>
                </div>

                <div class="bg-stone-900 border border-stone-600 p-3 flex items-center justify-between gap-2 max-w-xs mx-auto mb-4 font-mono text-xs">
                  <span class="font-bold text-white tracking-widest text-sm">${acc.accountNumber}</span>
                  <button class="copy-account-btn px-3 py-1.5 bg-white text-black font-bold uppercase hover:bg-stone-200 transition" data-account="${acc.accountNumber}">
                    COPY
                  </button>
                </div>
              </div>

              <div class="font-mono text-xs text-stone-400 text-center uppercase tracking-wider font-medium">
                SCAN WITH MOBILE BANKING APP
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 3. LUXURY GOLD FOIL: 24K Gold Bullion Royal Treasury
function renderLuxuryBanking({ config, content, accounts }) {
  return `
    <section id="module-banking" class="py-24 px-4 bg-[#0a0a0f] text-[#f7e8c3]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-serif font-bold block mb-2">ROYAL TREASURY &amp; TRIBUTE</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#e3c770] via-[#fff4cc] to-[#cf9e38] tracking-wide mb-3">
            Wedding Registry
          </h2>
          <div class="flex items-center justify-center gap-4 text-[#d4af37] my-3">
            <span class="w-12 h-px bg-current"></span>
            <span>⚜</span>
            <span class="w-12 h-px bg-current"></span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${accounts.map(acc => `
            <div class="p-8 border-2 border-[#d4af37]/60 bg-[#12121c] relative flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.8)] text-center">
              <div>
                <span class="text-xs font-serif uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-4">
                  ⚜ ${acc.roleLabel || (acc.role === 'groom' ? "GROOM'S FUND" : "BRIDE'S FUND")}
                </span>

                <div class="w-48 h-48 mx-auto p-3 bg-white border-2 border-[#d4af37] shadow-lg mb-6 flex items-center justify-center">
                  <img src="${acc.qrCodeImage}" alt="QR ${acc.holderName}" class="w-full h-full object-contain" loading="lazy"/>
                </div>

                <h3 class="font-serif text-xl text-white font-bold mb-1">${acc.holderName}</h3>
                <div class="text-xs font-serif text-[#f3e5ab] font-bold mb-4">${acc.bankName}</div>

                <div class="p-3 border-2 border-[#d4af37]/50 bg-[#181824] flex items-center justify-between gap-2 max-w-xs mx-auto mb-4 font-serif text-xs shadow-md">
                  <span class="font-mono text-[#fff4cc] tracking-widest font-bold text-sm">${acc.accountNumber}</span>
                  <button class="copy-account-btn px-3.5 py-1.5 bg-gradient-to-r from-[#d4af37] to-[#ecc875] text-black font-serif text-xs uppercase tracking-widest font-bold hover:brightness-110 transition shadow" data-account="${acc.accountNumber}">
                    Copy
                  </button>
                </div>
              </div>

              <div class="text-xs font-serif text-[#f7e8c3] italic font-medium">
                Scan via VietQR for direct court blessings
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 4. PRESSED BOTANICAL: Hand-folded Herbarium Seed Packet
function renderBotanicalBanking({ config, content, accounts }) {
  return `
    <section id="module-banking" class="py-24 px-4 bg-[#f8f6f0] text-[#1e3a24]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs font-mono uppercase tracking-[0.25em] text-[#2c5033] font-bold block mb-2">SEEDS OF HAPPINESS • GIFT FUND</span>
          <h2 class="text-3xl sm:text-5xl font-serif italic text-[#1f2e1f] font-bold mb-3">Blessings for our Journey</h2>
          <div class="w-16 h-px bg-[#4a6741] mx-auto my-3"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${accounts.map(acc => `
            <div class="p-8 bg-white border-2 border-[#cbd8cb] rounded-lg shadow-sm relative flex flex-col justify-between text-center">
              <div>
                <span class="text-xs font-mono uppercase tracking-widest text-[#2c5033] font-bold block mb-4">
                  ✦ SEED PACKET // ${acc.roleLabel || (acc.role === 'groom' ? 'GROOM' : 'BRIDE')}
                </span>

                <div class="w-48 h-48 mx-auto p-3 bg-white border border-[#cbd8cb] rounded-sm shadow-sm mb-6 flex items-center justify-center">
                  <img src="${acc.qrCodeImage}" alt="QR ${acc.holderName}" class="w-full h-full object-contain" loading="lazy"/>
                </div>

                <h3 class="font-serif italic text-xl text-[#1f2e1f] font-bold mb-1">${acc.holderName}</h3>
                <div class="text-xs font-mono text-[#2c5033] font-bold mb-4">${acc.bankName}</div>

                <div class="p-3 bg-[#f0f4ef] border-2 border-[#cbd8cb] flex items-center justify-between gap-2 max-w-xs mx-auto mb-4 font-mono text-xs rounded-sm shadow-xs">
                  <span class="text-[#1e3a24] font-bold text-sm">${acc.accountNumber}</span>
                  <button class="copy-account-btn px-3 py-1.5 bg-[#2c5033] text-white text-xs uppercase tracking-wider rounded-sm hover:bg-[#1e3a24] transition font-bold shadow-xs" data-account="${acc.accountNumber}">
                    Copy
                  </button>
                </div>
              </div>

              <div class="text-xs font-serif italic text-[#2c5033] font-medium">
                Quét mã VietQR bằng bất kỳ ứng dụng ngân hàng nào
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 5. BOHEMIAN RUSTIC: Terracotta Wish Jar with Dried Pampas
function renderBohoBanking({ config, content, accounts }) {
  return `
    <section id="module-banking" class="py-24 px-4 bg-[#fbf6f0] text-[#713f28]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.3em] font-sans font-bold text-[#b8623b] block mb-2">LOVE TOKENS</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#522917] mb-2 font-bold">Our Wishing Well</h2>
          <div class="text-xl text-[#d99873]">✦ • ✦</div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${accounts.map(acc => `
            <div class="p-8 rounded-3xl bg-[#fffaf5] border-2 border-[#d99873] shadow-md flex flex-col justify-between text-center">
              <div>
                <span class="px-4 py-1.5 rounded-full bg-[#c26d43] text-white font-serif font-bold text-xs uppercase inline-block mb-4 shadow">
                  ✦ ${acc.roleLabel || (acc.role === 'groom' ? 'Mừng Chú Rể' : 'Mừng Cô Dâu')}
                </span>

                <div class="w-48 h-48 mx-auto p-3 bg-white rounded-2xl border border-[#eed8c5] shadow-sm mb-6 flex items-center justify-center">
                  <img src="${acc.qrCodeImage}" alt="QR ${acc.holderName}" class="w-full h-full object-contain" loading="lazy"/>
                </div>

                <h3 class="font-serif text-xl font-bold text-[#451e11] mb-1">${acc.holderName}</h3>
                <div class="text-xs font-serif text-[#8c3b18] font-bold mb-4">${acc.bankName}</div>

                <div class="p-3 rounded-xl bg-[#f5e6d6] border-2 border-[#d99873] flex items-center justify-between gap-2 max-w-xs mx-auto mb-4 font-serif text-xs shadow-xs">
                  <span class="font-mono text-[#451e11] font-bold text-sm">${acc.accountNumber}</span>
                  <button class="copy-account-btn px-3.5 py-1.5 rounded-full bg-[#c26d43] text-white text-xs font-sans font-bold uppercase tracking-wider hover:bg-[#a8552e] transition shadow" data-account="${acc.accountNumber}">
                    Copy
                  </button>
                </div>
              </div>

              <div class="text-xs font-serif italic text-[#5c2814] font-medium">
                Cảm ơn tình cảm ấm áp của bạn đã luôn dành cho chúng mình!
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 6. WASHI IKEBANA ZEN: Traditional Shugi-bukuro (祝儀袋) with Mizuhiki Knot
function renderZenBanking({ config, content, accounts }) {
  return `
    <section id="module-banking" class="py-24 px-4 bg-[#f4f2ec] text-[#1f1e1c]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs font-mono uppercase tracking-[0.3em] text-[#3d3b37] font-bold block mb-2">ご祝儀 • SHUGI-BUKURO CELEBRATION</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#1f1e1c] font-normal mb-2">Tâm Tình Chúc Phúc</h2>
          <div class="w-12 h-px bg-[#b33927] mx-auto my-3"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${accounts.map(acc => `
            <div class="p-8 bg-[#faf8f4] border-2 border-[#dcd8ce] shadow-sm flex flex-col justify-between text-center relative rounded-sm">
              <div class="w-8 h-8 rounded-full bg-[#b33927] text-white flex items-center justify-center mx-auto mb-3 text-xs font-serif font-bold shadow">
                寿
              </div>

              <div>
                <span class="inline-block px-3.5 py-1 bg-[#1f1e1c] text-white text-xs font-serif mb-4 rounded-xs font-semibold">
                  ${acc.roleLabel || (acc.role === 'groom' ? '新郎側 • Chú Rể' : '新婦側 • Cô Dâu')}
                </span>

                <div class="w-48 h-48 mx-auto p-3 bg-white border border-[#dcd8ce] mb-6 flex items-center justify-center shadow-xs">
                  <img src="${acc.qrCodeImage}" alt="QR ${acc.holderName}" class="w-full h-full object-contain" loading="lazy"/>
                </div>

                <h3 class="font-serif text-xl text-[#1f1e1c] font-bold mb-1">${acc.holderName}</h3>
                <div class="text-xs font-serif text-[#3d3b37] font-bold mb-4">${acc.bankName}</div>

                <div class="p-3 bg-[#eae6dd] border border-[#c5bfb3] flex items-center justify-between gap-2 max-w-xs mx-auto mb-4 font-mono text-xs rounded-xs">
                  <span class="text-[#1f1e1c] font-bold text-sm">${acc.accountNumber}</span>
                  <button class="copy-account-btn px-3.5 py-1.5 border-2 border-[#1f1e1c] bg-[#1f1e1c] text-white text-xs font-serif hover:bg-[#b33927] hover:border-[#b33927] transition font-bold" data-account="${acc.accountNumber}">
                    Sao chép
                  </button>
                </div>
              </div>

              <div class="text-xs font-serif text-[#3d3b37] italic font-medium">
                Quét mã VietQR chuyển khoản mừng duyên
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 7. ART DECO 1920s: Great Gatsby Speakeasy Brass VIP Safe
function renderArtDecoBanking({ config, content, accounts }) {
  return `
    <section id="module-banking" class="py-24 px-4 bg-[#121619] text-[#e0b768]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs font-mono uppercase tracking-[0.4em] text-[#e0b768] font-bold block mb-2">PATRON TRIBUTE</span>
          <h2 class="text-3xl sm:text-5xl font-title uppercase tracking-widest text-white mb-2">The Golden Vault</h2>
          <div class="w-24 h-0.5 bg-[#e0b768] mx-auto my-3"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${accounts.map(acc => `
            <div class="p-8 border-2 border-[#e0b768] bg-[#191f24] relative flex flex-col justify-between text-center shadow-lg">
              <div>
                <span class="px-3.5 py-1 bg-[#e0b768] text-[#121619] font-title font-bold text-xs uppercase tracking-widest inline-block mb-4 shadow">
                  VAULT // ${acc.role === 'groom' ? 'GROOM' : 'BRIDE'}
                </span>

                <div class="w-48 h-48 mx-auto p-3 bg-white border-2 border-[#e0b768] shadow-[0_0_20px_rgba(224,183,104,0.3)] mb-6 flex items-center justify-center">
                  <img src="${acc.qrCodeImage}" alt="QR ${acc.holderName}" class="w-full h-full object-contain" loading="lazy"/>
                </div>

                <h3 class="font-title uppercase text-xl text-white font-bold tracking-wide mb-1">${acc.holderName}</h3>
                <div class="text-xs font-serif text-[#f5deb3] font-bold mb-4">${acc.bankName}</div>

                <div class="p-3 border-2 border-[#e0b768] bg-[#121619] flex items-center justify-between gap-2 max-w-xs mx-auto mb-4 font-mono text-xs shadow">
                  <span class="font-bold text-white tracking-wider text-sm">${acc.accountNumber}</span>
                  <button class="copy-account-btn px-3.5 py-1.5 bg-[#e0b768] text-[#121619] font-title font-bold text-xs uppercase tracking-widest hover:bg-white transition" data-account="${acc.accountNumber}">
                    Copy
                  </button>
                </div>
              </div>

              <div class="text-xs font-mono uppercase tracking-widest text-[#e0b768] font-medium">
                Direct bank wire via VietQR
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 8. TROPICAL DESTINATION: Honeymoon Island Travel Fund & Boarding Pass
function renderTropicalBanking({ config, content, accounts }) {
  return `
    <section id="module-banking" class="py-24 px-4 bg-[#f0f9f8] text-[#063a42]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-widest font-sans font-bold text-[#0a4d54] block mb-2">HONEYMOON FUND</span>
          <h2 class="text-3xl sm:text-5xl font-serif text-[#063a42] font-bold mb-2">Island Wishing Box</h2>
          <div class="text-lg text-[#149d9b]">✦ • ✦ </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${accounts.map(acc => `
            <div class="p-8 rounded-3xl bg-white border-2 border-[#a6dcd8] shadow-md flex flex-col justify-between text-center">
              <div>
                <span class="px-4 py-1.5 rounded-full bg-[#0a4d54] text-white font-sans font-bold text-xs uppercase inline-block mb-4 shadow">
                  ✦ ${acc.roleLabel || (acc.role === 'groom' ? 'Groom Fund' : 'Bride Fund')}
                </span>

                <div class="w-48 h-48 mx-auto p-3 bg-white rounded-2xl border border-[#a6dcd8] shadow-sm mb-6 flex items-center justify-center">
                  <img src="${acc.qrCodeImage}" alt="QR ${acc.holderName}" class="w-full h-full object-contain" loading="lazy"/>
                </div>

                <h3 class="font-serif text-xl font-bold text-[#063a42] mb-1">${acc.holderName}</h3>
                <div class="text-xs font-sans text-[#0d6e75] font-bold mb-4">${acc.bankName}</div>

                <div class="p-3 rounded-2xl bg-[#e3f6f5] border-2 border-[#a6dcd8] flex items-center justify-between gap-2 max-w-xs mx-auto mb-4 font-mono text-xs shadow-xs">
                  <span class="font-bold text-[#063a42] text-sm">${acc.accountNumber}</span>
                  <button class="copy-account-btn px-4 py-1.5 rounded-full bg-[#0a4d54] text-white font-sans font-bold text-xs uppercase hover:bg-[#063a42] transition shadow" data-account="${acc.accountNumber}">
                    Copy
                  </button>
                </div>
              </div>

              <div class="text-xs font-sans text-[#0a4d54] italic font-semibold">
                Thank you for contributing to our honeymoon adventures!
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 9. K-WEDDING MINIMAL: Seoul Chuk-ui-geum (축의금) Minimal Silk Envelope
function renderKWeddingBanking({ config, content, accounts }) {
  return `
    <section id="module-banking" class="py-24 px-4 bg-[#faf9f6] text-[#111]">
      <div class="max-w-4xl mx-auto border-t-2 border-b-2 border-stone-800 py-14">
        
        <div class="text-center mb-12">
          <span class="text-xs font-mono uppercase tracking-[0.3em] text-stone-700 font-bold block mb-2">CHUK-UI-GEUM (축의금) // ISSUE 1128</span>
          <h2 class="text-3xl sm:text-4xl font-serif font-light text-stone-900 mb-2">Blessings &amp; Gift Box</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${accounts.map(acc => `
            <div class="border border-stone-300 p-8 flex flex-col justify-between text-center bg-white shadow-sm rounded-lg">
              <div>
                <span class="text-xs font-mono uppercase tracking-widest text-stone-700 font-bold block mb-4">
                  ACCOUNT // ${acc.role === 'groom' ? 'GROOM' : 'BRIDE'}
                </span>

                <div class="w-48 h-48 mx-auto p-3 bg-white border border-stone-200 mb-6 flex items-center justify-center shadow-xs">
                  <img src="${acc.qrCodeImage}" alt="QR ${acc.holderName}" class="w-full h-full object-contain" loading="lazy"/>
                </div>

                <h3 class="font-serif text-xl text-stone-900 font-bold mb-1">${acc.holderName}</h3>
                <div class="text-xs font-mono text-stone-700 font-bold mb-4">${acc.bankName}</div>

                <div class="py-3 px-4 bg-stone-50 border border-stone-300 rounded-md flex items-center justify-between gap-2 max-w-xs mx-auto mb-4 font-mono text-xs shadow-xs">
                  <span class="text-stone-900 font-bold text-sm tracking-wide">${acc.accountNumber}</span>
                  <button class="copy-account-btn text-xs font-mono uppercase tracking-widest bg-stone-900 text-white px-3 py-1.5 rounded hover:bg-stone-800 transition font-bold" data-account="${acc.accountNumber}">
                    Copy
                  </button>
                </div>
              </div>

              <div class="text-xs font-serif text-stone-700 italic font-medium">
                Scan VietQR to send congratulations
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// 10. WATERCOLOR ROMANCE: Monet Pastel Wish Box
function renderWatercolorBanking({ config, content, accounts }) {
  return `
    <section id="module-banking" class="py-24 px-4 bg-[#fdf9fc] text-[#3b253b]">
      <div class="max-w-4xl mx-auto">
        
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-[0.3em] font-sans font-bold text-[#6b2149] block mb-2">SWEET WISHES</span>
          <h2 class="text-3xl sm:text-5xl font-serif italic text-[#3b253b] font-bold mb-2">Hộp Mừng Yêu Thương</h2>
          <div class="text-lg text-[#d88bb5]">✦ • ✦</div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${accounts.map(acc => `
            <div class="p-8 rounded-3xl bg-white/90 backdrop-blur-md border-2 border-[#f0d8e8] shadow-lg flex flex-col justify-between text-center">
              <div>
                <span class="px-4 py-1.5 rounded-full bg-[#9d366a] text-white font-serif font-bold text-xs inline-block mb-4 shadow">
                  ✦ ${acc.roleLabel || (acc.role === 'groom' ? 'Mừng Chú Rể' : 'Mừng Cô Dâu')}
                </span>

                <div class="w-48 h-48 mx-auto p-3 bg-white rounded-2xl border border-[#f0d8e8] shadow-sm mb-6 flex items-center justify-center">
                  <img src="${acc.qrCodeImage}" alt="QR ${acc.holderName}" class="w-full h-full object-contain" loading="lazy"/>
                </div>

                <h3 class="font-serif italic text-xl text-[#3b253b] font-bold mb-1">${acc.holderName}</h3>
                <div class="text-xs font-serif text-[#6b2149] font-bold mb-4">${acc.bankName}</div>

                <div class="p-3 rounded-2xl bg-white/95 border-2 border-[#e8b6d3] flex items-center justify-between gap-2 max-w-xs mx-auto mb-4 font-mono text-xs shadow-sm">
                  <span class="font-bold text-[#521636] text-sm">${acc.accountNumber}</span>
                  <button class="copy-account-btn px-4 py-1.5 rounded-full bg-gradient-to-r from-[#9d366a] to-[#7e3b87] text-white font-serif text-xs font-bold shadow hover:brightness-110 transition" data-account="${acc.accountNumber}">
                    Sao chép
                  </button>
                </div>
              </div>

              <div class="text-xs font-serif italic text-[#521636] font-medium">
                Cảm ơn những lời chúc ngọt ngào nhất của bạn!
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleRegistry.js ---
/**
 * Module 15: Gift Registry (Wishlist Items & Registry Selection)
 * High Contrast & Crisp Visual Polish
 */

function renderModuleRegistry({ config, activeTemplate, moduleData }) {
  const content = moduleData.content;
  const items = content.items || [];

  return `
    <section id="module-registry" class="py-24 px-4 relative transition-colors duration-500 reveal-on-scroll">
      <div class="max-w-5xl mx-auto">
        
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-bold uppercase tracking-[0.25em] mb-3 shadow-xs">
            <span>Wishlist</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-title tracking-tight mb-3 text-stone-900 dark:text-stone-100 font-bold">${content.title || "Danh Sách Quà Tặng"}</h2>
          <p class="text-sm text-stone-600 dark:text-stone-400 max-w-lg mx-auto italic font-serif">${content.subtitle || "Những món quà nhỏ ấm cúng cho tổ ấm mới của hai đứa"}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${items.map(item => `
            <div class="p-5 rounded-2xl border-2 border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/90 shadow-md flex flex-col justify-between group hover:border-amber-400 transition-all">
              
              <div>
                <div class="h-44 rounded-xl overflow-hidden mb-4 border border-stone-200 dark:border-stone-700 relative">
                  <img 
                    src="${item.imageUrl}" 
                    alt="${item.title}" 
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                  ${item.isClaimed ? `
                    <div class="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center">
                      <span class="px-3 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider shadow">
                        ✓ Đã Được Tặng
                      </span>
                    </div>
                  ` : ''}
                </div>

                <span class="text-xs uppercase font-mono tracking-wider text-stone-600 dark:text-stone-400 font-bold block mb-1">${item.category}</span>
                <h4 class="font-title font-bold text-base text-stone-900 dark:text-stone-100 mb-1">${item.title}</h4>
                <div class="text-xs font-bold text-amber-800 dark:text-amber-400 font-mono mb-4">${item.priceEstimate || ''}</div>
              </div>

              <div>
                ${item.isClaimed ? `
                  <button disabled class="w-full py-2.5 rounded-xl text-xs font-bold bg-stone-100 text-stone-400 dark:bg-stone-800 dark:text-stone-500 cursor-not-allowed border border-stone-200 dark:border-stone-700">
                    Đã Gửi Tặng
                  </button>
                ` : `
                  <a 
                    href="${item.linkUrl || '#'}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="block w-full py-2.5 rounded-xl text-center text-xs font-bold bg-stone-900 text-white hover:bg-stone-800 dark:bg-amber-400 dark:text-stone-950 transition shadow-sm hover:scale-102"
                  >
                    Gửi Tặng Món Này
                  </a>
                `}
              </div>

            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleGuestbook.js ---
/**
 * Module 16: Sổ Lưu Bút & Băng Chuyền Lời Chúc (Auto-Sliding Wishes Slide Bar)
 * High Contrast & Crisp Visual Polish (WCAG AA Compliant)
 */

function renderModuleGuestbook({ config, activeTemplate, moduleData, guestName, wishesList }) {
  const content = moduleData.content || {};
  const wishes = wishesList || content.preloadedWishes || [
    {
      id: "w-1",
      author: "Hoàng Yến & Minh Đức",
      relation: "Bạn thân từ Đại học",
      message: "Chúc hai bạn trăm năm hạnh phúc, đầu bạc răng long! Mong chờ một đám cưới thế kỷ tràn ngập niềm vui và yêu thương.",
      createdAt: "Hôm nay, 09:30",
      avatar: "YĐ"
    },
    {
      id: "w-2",
      author: "Nguyễn Tuấn Anh",
      relation: "Đồng nghiệp chú rể",
      message: "Chúc mừng người anh em đã tìm được bến đỗ bình yên của cuộc đời. Chúc gia đình nhỏ luôn ấm áp, ngập tràn tiếng cười!",
      createdAt: "Hôm qua, 18:45",
      avatar: "TA"
    },
    {
      id: "w-3",
      author: "Chị Thảo My",
      relation: "Chị họ cô dâu",
      message: "Nhìn hai đứa hạnh phúc rạng ngời chị mừng rơi nước mắt. Chúc Mai Anh & Nhật Minh mãi mãi yêu thương nhau như ngày đầu nhé!",
      createdAt: "2 ngày trước",
      avatar: "TM"
    },
    {
      id: "w-4",
      author: "Gia đình Bác Thành",
      relation: "Họ hàng nhà trai",
      message: "Chúc hai cháu vạn sự cát tường, phu thê hòa thuận, sớm sinh quý tử. Hai gia đình kết thông gia chúc phúc bền lâu!",
      createdAt: "3 ngày trước",
      avatar: "BT"
    },
    {
      id: "w-5",
      author: "Lan Hương",
      relation: "Bạn cấp 3 cô dâu",
      message: "Cô dâu xinh đẹp nhất quả đất! Chúc đôi bạn trẻ có một tuần trăng mật rực rỡ và cuộc sống hôn nhân viên mãn trọn vẹn.",
      createdAt: "4 ngày trước",
      avatar: "LH"
    }
  ];

  return `
    <section id="module-guestbook" class="py-24 px-4 relative transition-colors duration-500 reveal-on-scroll">
      <div class="max-w-6xl mx-auto">
        
        <!-- Header -->
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 mb-3 shadow-xs">
            <span class="text-xs uppercase tracking-[0.25em] font-bold">Guestbook & Wishes Wall</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-title tracking-tight mb-3 text-stone-900 dark:text-stone-100 font-bold">
            ${content.title || "Sổ Lưu Bút Yêu Thương"}
          </h2>
          <p class="text-sm text-stone-600 dark:text-stone-400 max-w-lg mx-auto italic font-serif">
            ${content.subtitle || "Những dòng tâm tình ngọt ngào và lời chúc phúc gửi tới đôi uyên ương"}
          </p>
        </div>

        <!-- ========================================================
             1. AUTO-SLIDING WISHES CAROUSEL / SLIDE BAR
             ======================================================== -->
        <div class="mb-14 relative">
          
          <!-- Controls Header: Prev/Next Buttons + Auto-slide status -->
          <div class="flex items-center justify-between mb-4 px-2">
            <div class="flex items-center gap-2 text-xs font-mono font-bold text-stone-700 dark:text-stone-300">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span id="guestbook-pause-indicator">Tự động trượt • Rê chuột để tạm dừng</span>
            </div>

            <div class="flex items-center gap-2">
              <button 
                id="guestbook-prev-btn" 
                type="button" 
                aria-label="Lời chúc trước"
                class="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border-2 border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 flex items-center justify-center hover:bg-stone-900 hover:text-white dark:hover:bg-amber-400 dark:hover:text-stone-950 transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button 
                id="guestbook-next-btn" 
                type="button" 
                aria-label="Lời chúc kế tiếp"
                class="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border-2 border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 flex items-center justify-center hover:bg-stone-900 hover:text-white dark:hover:bg-amber-400 dark:hover:text-stone-950 transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- Slide Carousel Track Viewport -->
          <div class="wishes-carousel-wrapper overflow-hidden rounded-3xl p-1" id="wishes-carousel-box">
            <div id="guestbook-slide-track" class="wishes-slide-track flex">
              ${wishes.map((w, index) => `
                <div class="wish-card-slide p-6 sm:p-8 rounded-3xl border-2 border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/90 backdrop-blur-xl shadow-lg flex flex-col justify-between hover:border-amber-400 transition-all group">
                  
                  <div>
                    <!-- Decorative Quote Mark & Hearts -->
                    <div class="flex items-center justify-between mb-4">
                      <span class="text-3xl sm:text-4xl text-amber-500 font-serif leading-none font-bold group-hover:scale-110 transition-transform">“</span>
                      <div class="flex items-center gap-1 text-red-500 text-xs font-mono font-bold">
                        <span>❤️</span>
                        <span>#${index + 1}</span>
                      </div>
                    </div>

                    <!-- Wish Message -->
                    <p class="text-sm sm:text-base italic font-serif leading-relaxed text-stone-800 dark:text-stone-100 mb-6 line-clamp-4 font-normal">
                      ${w.message}
                    </p>
                  </div>

                  <!-- Wish Author Info Footer -->
                  <div class="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-stone-800">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-amber-500 text-stone-950 font-black text-xs flex items-center justify-center shadow-md ring-2 ring-amber-400/40">
                        ${w.avatar || (w.author ? w.author.substring(0, 2).toUpperCase() : 'KH')}
                      </div>
                      <div>
                        <h4 class="font-title font-bold text-sm tracking-tight text-stone-900 dark:text-stone-100">${w.author}</h4>
                        <span class="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800 text-xs font-mono font-bold">
                          ${w.relation || 'Khách quý'}
                        </span>
                      </div>
                    </div>
                    <span class="text-xs font-mono text-stone-600 dark:text-stone-400 font-bold whitespace-nowrap">${w.createdAt || 'Vừa xong'}</span>
                  </div>

                </div>
              `).join('')}
            </div>
          </div>

          <!-- Carousel Dots Indicator -->
          <div id="guestbook-dots-container" class="flex items-center justify-center gap-2 mt-4">
            ${wishes.map((_, i) => `
              <button 
                class="w-2.5 h-2.5 rounded-full transition-all ${i === 0 ? 'bg-amber-500 w-7' : 'bg-stone-300 dark:bg-stone-700 hover:bg-amber-400'}"
                data-slide-index="${i}"
                aria-label="Slide ${i + 1}"
              ></button>
            `).join('')}
          </div>

        </div>

        <!-- ========================================================
             2. GUESTBOOK SUBMISSION FORM
             ======================================================== -->
        <div class="max-w-2xl mx-auto p-6 sm:p-10 rounded-3xl border-2 border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/90 backdrop-blur-xl shadow-xl">
          <div class="text-center mb-6">
            <h3 class="font-title font-bold text-xl sm:text-2xl mb-1 text-stone-900 dark:text-stone-100">Gửi Lời Chúc Tới Đôi Uyên Ương</h3>
            <p class="text-xs text-stone-600 dark:text-stone-400 font-serif italic">Lời chúc của bạn sẽ xuất hiện ngay trên băng chuyền sổ lưu bút</p>
          </div>
          
          <form id="guestbook-submit-form" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider mb-1.5 text-stone-800 dark:text-stone-200">Tên Của Bạn *</label>
                <input 
                  type="text" 
                  id="guestbook-author" 
                  required 
                  value="${guestName || ''}" 
                  placeholder="Ví dụ: Hoàng Yến, Bác Thành..." 
                  class="w-full px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 placeholder:text-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all font-sans"
                />
              </div>

              <div>
                <label class="block text-xs font-bold uppercase tracking-wider mb-1.5 text-stone-800 dark:text-stone-200">Mối Quan Hệ</label>
                <input 
                  type="text" 
                  id="guestbook-relation" 
                  placeholder="Ví dụ: Bạn thân cô dâu / Đồng nghiệp..." 
                  class="w-full px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 placeholder:text-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all font-sans"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold uppercase tracking-wider mb-1.5 text-stone-800 dark:text-stone-200">Lời Chúc Phúc *</label>
              <textarea 
                id="guestbook-message" 
                rows="3" 
                required 
                placeholder="Viết những lời chúc ngọt ngào, ý nghĩa nhất tại đây..." 
                class="w-full px-4 py-3 rounded-xl border-2 border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 placeholder:text-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all resize-none font-sans"
              ></textarea>
            </div>

            <div class="text-center pt-2">
              <button 
                type="submit" 
                class="w-full sm:w-auto px-10 py-3.5 rounded-full font-title font-bold text-xs uppercase tracking-widest bg-amber-500 hover:bg-amber-400 text-stone-950 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
              >
                Gửi Lời Chúc Phúc Lên Sổ Lưu Bút
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  `;
}


  // --- src/components/modules/ModuleThankYou.js ---
/**
 * Module 17: Cảm Ơn (Thank You & Closing)
 * 10 Radically Distinct Design Archetypes:
 * - vietnamese-heritage: Lời Cảm Tạ Hoàng Triều with Song Hỷ gold seal
 * - minimalist-modern: End-of-transmission Monolithic Closing [FIN_2026]
 * - luxury-gold-foil: Versailles Royal Signoff with gilded Fleur-de-lis
 * - pressed-botanical: Herbarium Floral Farewell with pressed sprig
 * - bohemian-rustic: Desert Sunset Farewell with macrame & feather
 * - washi-ikebana-zen: Kyoto Tea Pavilion Bow with Enso ring & Inkan
 * - art-deco-1920s: The Great Gatsby Final Curtain Call
 * - tropical-destination: Island Sunset Wave Farewell
 * - k-wedding-minimal: Seoul Fashion Editorial Colophon
 * - watercolor-romance: Monet Pastel Sunset Garden Farewell
 */

function renderModuleThankYou({ config, activeTemplate, moduleData }) {
  const content = moduleData.content || {};
  const couple = config.couple;
  const templateId = activeTemplate.id;

  const renderers = {
    'vietnamese-heritage': renderVietnameseThankYou,
    'minimalist-modern': renderMinimalistThankYou,
    'luxury-gold-foil': renderLuxuryThankYou,
    'pressed-botanical': renderBotanicalThankYou,
    'bohemian-rustic': renderBohoThankYou,
    'washi-ikebana-zen': renderZenThankYou,
    'art-deco-1920s': renderArtDecoThankYou,
    'tropical-destination': renderTropicalThankYou,
    'k-wedding-minimal': renderKWeddingThankYou,
    'watercolor-romance': renderWatercolorThankYou
  };

  const renderer = renderers[templateId] || renderVietnameseThankYou;
  return renderer({ config, content, couple });
}

// 1. VIETNAMESE HERITAGE: Lời Cảm Tạ Hoàng Triều
function renderVietnameseThankYou({ config, content, couple }) {
  return `
    <footer id="module-thankYou" class="py-24 px-4 bg-[#50000e] text-[#fbf0d9] text-center border-t-2 border-[#f0c05a] relative">
      <div class="max-w-2xl mx-auto">
        <div class="w-16 h-16 mx-auto rounded-full border-2 border-[#f0c05a] bg-[#800018] flex items-center justify-center font-title text-2xl text-[#f0c05a] font-bold mb-6 shadow">
          囍
        </div>
        <h2 class="text-3xl sm:text-5xl font-title text-[#fcf3dc] tracking-tight mb-4">${content.title || "Chân Thành Cảm Tạ"}</h2>
        <p class="text-sm sm:text-base leading-relaxed opacity-90 mb-8 font-serif italic max-w-lg mx-auto text-[#fbf0d9]">
          “${content.message || "Sự hiện diện và lời chúc phúc của quý vị là món quà vô giá nhất đối với tân lang tân nương."}”
        </p>
        <div class="text-2xl sm:text-3xl font-title text-[#f0c05a] tracking-wide mb-6">
          ${content.signature || `<span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>`}
        </div>
        ${content.hashtag ? `<div class="inline-block px-5 py-1.5 rounded-full border border-[#f0c05a]/50 bg-[#630012] text-[#f0c05a] text-xs font-mono mb-10">${content.hashtag}</div>` : ''}
        <div>
          <button id="scroll-to-top-btn" aria-label="Cuộn lại đầu trang" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-title font-bold border border-[#f0c05a] text-[#f0c05a] hover:bg-[#f0c05a] hover:text-[#50000e] transition shadow min-h-[44px] cursor-pointer">
            ↑ Quay Lại Đầu Trang
          </button>
        </div>
        <div class="mt-12 text-[10px] uppercase tracking-[0.25em] text-[#f0c05a]/50 font-serif">
          Hỷ Sự Bách Niên Giai Lão • EverAfter Suite
        </div>
      </div>
    </footer>
  `;
}

// 2. MINIMALIST MODERN: End-of-transmission Monolithic Closing
function renderMinimalistThankYou({ config, content, couple }) {
  return `
    <footer id="module-thankYou" class="py-24 px-6 bg-[#0a0a0a] text-white font-sans text-center border-t border-white/20">
      <div class="max-w-2xl mx-auto font-mono">
        <div class="text-xs text-white/40 uppercase mb-4">// TRANSMISSION_END</div>
        <h2 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">${content.title || "THANK YOU"}</h2>
        <p class="text-xs sm:text-sm text-white/70 leading-relaxed mb-8 max-w-md mx-auto uppercase">
          ${content.message}
        </p>
        <div class="text-xl font-bold tracking-widest text-white mb-6">
          [<span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> + <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>]
        </div>
        <div class="mb-10">
          <button id="scroll-to-top-btn" aria-label="Cuộn lại đầu trang" class="px-6 py-2 border border-white/40 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition min-h-[44px] cursor-pointer inline-flex items-center justify-center">
            [↑ TOP_OF_STREAM]
          </button>
        </div>
        <div class="text-[10px] text-white/30 uppercase tracking-[0.3em]">
          ARCHITECTED WITH EVERAFTER SUITE // 2026
        </div>
      </div>
    </footer>
  `;
}

// 3. LUXURY GOLD FOIL: Versailles Royal Signoff
function renderLuxuryThankYou({ config, content, couple }) {
  return `
    <footer id="module-thankYou" class="py-24 px-4 bg-[#07070a] text-[#f7e8c3] text-center border-t border-[#d4af37]/40 font-serif">
      <div class="max-w-2xl mx-auto">
        <div class="w-12 h-12 mx-auto mb-4 border border-[#d4af37] rounded-full flex items-center justify-center text-[#d4af37]">
          ⚜
        </div>
        <h2 class="text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#e3c770] via-[#fff4cc] to-[#cf9e38] tracking-wide mb-4">
          ${content.title || "With Utmost Gratitude"}
        </h2>
        <p class="text-sm leading-relaxed text-[#f7e8c3]/80 italic mb-8 max-w-lg mx-auto">
          “${content.message}”
        </p>
        <div class="text-2xl text-[#d4af37] tracking-[0.2em] mb-6">
          <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
        </div>
        <div class="mb-10">
          <button id="scroll-to-top-btn" aria-label="Cuộn lại đầu trang" class="px-6 py-2 border border-[#d4af37] text-xs uppercase tracking-[0.2em] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition min-h-[44px] cursor-pointer inline-flex items-center justify-center">
            ↑ Return to Top
          </button>
        </div>
        <div class="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/50">
          Royal Matrimony • EverAfter Suite
        </div>
      </div>
    </footer>
  `;
}

// 4. PRESSED BOTANICAL: Herbarium Floral Farewell
function renderBotanicalThankYou({ config, content, couple }) {
  return `
    <footer id="module-thankYou" class="py-24 px-4 bg-[#f3efe6] text-[#2c3d2c] text-center border-t border-[#d4cbba] font-serif">
      <div class="max-w-2xl mx-auto">
        <div class="text-2xl text-[#587358] mb-3">✦ </div>
        <h2 class="text-3xl sm:text-5xl italic text-[#1f2e1f] mb-4">${content.title || "With Deep Gratitude"}</h2>
        <p class="text-sm leading-relaxed text-[#475c47] italic mb-8 max-w-md mx-auto">
          “${content.message}”
        </p>
        <div class="text-xl text-[#2c3d2c] tracking-widest mb-6">
          <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
        </div>
        <div class="mb-10">
          <button id="scroll-to-top-btn" aria-label="Cuộn lại đầu trang" class="px-5 py-2 border border-[#587358] text-xs font-mono uppercase tracking-wider text-[#587358] hover:bg-[#587358] hover:text-white transition rounded-sm min-h-[44px] cursor-pointer inline-flex items-center justify-center">
            ↑ Back to Top
          </button>
        </div>
        <div class="text-[10px] font-mono uppercase tracking-widest text-[#6b7c6b]">
          Botanical Collection • EverAfter Suite
        </div>
      </div>
    </footer>
  `;
}

// 5. BOHEMIAN RUSTIC: Desert Sunset Farewell
function renderBohoThankYou({ config, content, couple }) {
  return `
    <footer id="module-thankYou" class="py-24 px-4 bg-[#f8f1e9] text-[#713f28] text-center border-t-2 border-[#d99873]/50 font-serif">
      <div class="max-w-2xl mx-auto">
        <div class="text-2xl text-[#c26d43] mb-3">✦</div>
        <h2 class="text-3xl sm:text-5xl text-[#522917] mb-4">${content.title || "Forever Grateful"}</h2>
        <p class="text-sm leading-relaxed text-[#78432a] italic mb-8 max-w-md mx-auto">
          “${content.message}”
        </p>
        <div class="text-2xl text-[#c26d43] mb-6">
          <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
        </div>
        <div class="mb-10">
          <button id="scroll-to-top-btn" aria-label="Cuộn lại đầu trang" class="px-6 py-2.5 rounded-full bg-[#c26d43] text-white text-xs font-sans uppercase font-bold tracking-widest hover:bg-[#a8552e] transition shadow min-h-[44px] cursor-pointer inline-flex items-center justify-center">
            ↑ Back to Sun
          </button>
        </div>
        <div class="text-[10px] uppercase tracking-widest text-[#b8623b]">
          Wild at Heart • EverAfter Suite
        </div>
      </div>
    </footer>
  `;
}

// 6. WASHI IKEBANA ZEN: Kyoto Tea Pavilion Bow
function renderZenThankYou({ config, content, couple }) {
  return `
    <footer id="module-thankYou" class="py-24 px-4 bg-[#efede6] text-[#2c2b29] text-center border-t border-[#dcd8ce] font-serif">
      <div class="max-w-2xl mx-auto">
        <div class="w-8 h-8 rounded-full bg-[#b33927] text-white flex items-center justify-center mx-auto mb-4 text-xs font-bold shadow-sm">
          感
        </div>
        <h2 class="text-3xl sm:text-5xl text-[#1f1e1c] font-normal mb-4">${content.title || "Chân Thành Cảm Tạ"}</h2>
        <p class="text-sm leading-relaxed text-[#1f1e1c] mb-8 max-w-md mx-auto font-medium">
          “${content.message}”
        </p>
        <div class="text-xl text-[#1f1e1c] font-bold mb-6">
          <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> × <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
        </div>
        <div class="mb-10">
          <button id="scroll-to-top-btn" aria-label="Cuộn lại đầu trang" class="px-5 py-2 border-2 border-[#2c2b29] text-xs font-serif font-bold tracking-wider text-[#1f1e1c] hover:bg-[#2c2b29] hover:text-white transition shadow-sm min-h-[44px] cursor-pointer inline-flex items-center justify-center">
            ↑ Trở Lại Đầu Trang
          </button>
        </div>
        <div class="text-[10px] font-mono uppercase tracking-[0.25em] text-[#3D3B37] font-bold">
          Kyoto Zen Suite • EverAfter
        </div>
      </div>
    </footer>
  `;
}

// 7. ART DECO 1920s: The Great Gatsby Final Curtain Call
function renderArtDecoThankYou({ config, content, couple }) {
  return `
    <footer id="module-thankYou" class="py-24 px-4 bg-[#0d1013] text-[#e0b768] text-center border-t-2 border-[#e0b768]">
      <div class="max-w-2xl mx-auto">
        <span class="text-[10px] font-mono uppercase tracking-[0.4em] text-[#F5DEB3] font-bold block mb-2">CURTAIN CALL</span>
        <h2 class="text-3xl sm:text-5xl font-title uppercase tracking-widest text-white mb-4">${content.title || "THANK YOU"}</h2>
        <p class="text-xs sm:text-sm font-serif text-[#E8DCC2] leading-relaxed mb-8 max-w-md mx-auto font-medium">
          “${content.message}”
        </p>
        <div class="text-2xl font-title uppercase text-[#F5DEB3] tracking-widest mb-6 font-bold">
          <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
        </div>
        <div class="mb-10">
          <button id="scroll-to-top-btn" aria-label="Cuộn lại đầu trang" class="px-6 py-2.5 bg-[#e0b768] text-[#121619] font-title font-bold text-xs uppercase tracking-widest hover:bg-white transition shadow min-h-[44px] cursor-pointer inline-flex items-center justify-center">
            ↑ Back to Top
          </button>
        </div>
        <div class="text-[10px] font-mono uppercase tracking-widest text-[#F5DEB3] font-bold">
          Roaring 20s Gala • EverAfter Suite
        </div>
      </div>
    </footer>
  `;
}

// 8. TROPICAL DESTINATION: Island Sunset Wave Farewell
function renderTropicalThankYou({ config, content, couple }) {
  return `
    <footer id="module-thankYou" class="py-24 px-4 bg-[#e8f6f5] text-[#0a444c] text-center border-t-2 border-[#a6dcd8] font-sans">
      <div class="max-w-2xl mx-auto">
        <div class="text-2xl text-[#063A42] mb-3">✦</div>
        <h2 class="text-3xl sm:text-5xl font-serif text-[#09353b] font-bold mb-4">${content.title || "Mahalo & Thank You"}</h2>
        <p class="text-sm leading-relaxed text-[#08353b] mb-8 max-w-md mx-auto font-medium">
          “${content.message}”
        </p>
        <div class="text-2xl font-serif text-[#063A42] mb-6 font-bold">
          <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
        </div>
        <div class="mb-10">
          <button id="scroll-to-top-btn" aria-label="Cuộn lại đầu trang" class="px-6 py-2.5 rounded-full bg-[#063A42] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#04282e] transition shadow min-h-[44px] cursor-pointer inline-flex items-center justify-center">
            ↑ Back to Top
          </button>
        </div>
        <div class="text-[10px] uppercase tracking-widest text-[#063A42] font-bold">
          Tropical Destination • EverAfter Suite
        </div>
      </div>
    </footer>
  `;
}

// 9. K-WEDDING MINIMAL: Seoul Fashion Editorial Colophon
function renderKWeddingThankYou({ config, content, couple }) {
  return `
    <footer id="module-thankYou" class="py-24 px-4 bg-[#f8f7f4] text-[#222] text-center border-t-2 border-stone-800 font-serif">
      <div class="max-w-2xl mx-auto">
        <span class="text-[10px] font-mono uppercase tracking-[0.3em] text-stone-700 font-bold block mb-2">COLOPHON // ISSUE 1128</span>
        <h2 class="text-3xl sm:text-4xl font-light text-stone-900 mb-4">${content.title || "With Sincere Thanks"}</h2>
        <p class="text-xs sm:text-sm text-stone-800 leading-relaxed mb-8 max-w-md mx-auto font-medium">
          “${content.message}”
        </p>
        <div class="text-xl text-stone-900 tracking-widest mb-6 font-medium">
          <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
        </div>
        <div class="mb-10">
          <button id="scroll-to-top-btn" aria-label="Cuộn lại đầu trang" class="px-6 py-2.5 border-2 border-stone-800 text-stone-900 text-xs font-mono uppercase tracking-widest font-bold hover:bg-stone-900 hover:text-white transition shadow-sm min-h-[44px] cursor-pointer inline-flex items-center justify-center">
            ↑ Back to Top
          </button>
        </div>
        <div class="text-[10px] font-mono uppercase tracking-widest text-stone-700 font-bold">
          Seoul Bridal Studio • EverAfter Suite
        </div>
      </div>
    </footer>
  `;
}

// 10. WATERCOLOR ROMANCE: Monet Pastel Sunset Garden Farewell
function renderWatercolorThankYou({ config, content, couple }) {
  return `
    <footer id="module-thankYou" class="py-24 px-4 bg-[#fbf5f9] text-[#4d384d] text-center border-t border-[#f0d8e8] font-serif">
      <div class="max-w-2xl mx-auto">
        <div class="text-2xl text-[#d88bb5] mb-3">✦</div>
        <h2 class="text-3xl sm:text-5xl italic text-[#3b253b] mb-4">${content.title || "Chân Thành Cảm Ơn"}</h2>
        <p class="text-sm leading-relaxed text-[#7a587a] italic mb-8 max-w-md mx-auto">
          “${content.message}”
        </p>
        <div class="text-2xl text-[#d88bb5] tracking-wide mb-6">
          <span class="inline-block whitespace-nowrap">${couple.groomShortName}</span> &amp; <span class="inline-block whitespace-nowrap">${couple.brideShortName}</span>
        </div>
        <div class="mb-10">
          <button id="scroll-to-top-btn" aria-label="Cuộn lại đầu trang" class="px-7 py-2.5 rounded-full bg-gradient-to-r from-[#e39bbd] to-[#b395d9] text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition shadow min-h-[44px] cursor-pointer inline-flex items-center justify-center">
            ↑ Trở Về Đầu Trang
          </button>
        </div>
        <div class="text-[10px] uppercase tracking-widest text-[#b876a2]">
          Watercolor Romance • EverAfter Suite
        </div>
      </div>
    </footer>
  `;
}


  // --- src/app.js ---
/**
 * EverAfter Wedding Website Templates Suite - Master Orchestrator
 */







// Module Renderers

















// Module Renderer Mapping Table
const moduleRenderers = {
  intro: renderModuleIntro,
  couple: renderModuleCouple,
  family: renderModuleFamily,
  invitation: renderModuleInvitation,
  story: renderModuleStory,
  events: renderModuleEvents,
  saveTheDate: renderModuleSaveTheDate,
  weddingParty: renderModuleWeddingParty,
  video: renderModuleVideo,
  album: renderModuleAlbum,
  dressCode: renderModuleDressCode,
  faq: renderModuleFAQ,
  rsvp: renderModuleRSVP,
  banking: renderModuleBanking,
  registry: renderModuleRegistry,
  guestbook: renderModuleGuestbook,
  thankYou: renderModuleThankYou
};

// EverAfter host context bridge. The Suite renderer is data-driven rather
// than data-field-driven, so the shared invitation context is projected into
// its existing config before the first render. No new template capability is
// introduced; this only replaces the demo couple/event values.
function applyEverAfterContext(config, context) {
  const fields = context && context.fields ? context.fields : {};
  const text = (value, fallback = "") => value === undefined || value === null ? fallback : String(value);
  const firstDate = text(context && context.dateISO, "");
  const dateDisplay = text(fields.date, firstDate ? firstDate.split("-").reverse().join(" . ") : "");
  const dateDots = firstDate ? firstDate.split("-").reverse().join(".") : dateDisplay.replace(/\s*·\s*/g, ".");
  const bride = text(fields.bride, config.couple.brideShortName || config.couple.brideName);
  const groom = text(fields.groom, config.couple.groomShortName || config.couple.groomName);
  const city = text(fields.city, config.couple.city);
  const headline = text(fields.headline, config.couple.headline);
  const invite = text(fields.invite, "");
  const monogram = text(fields.monogram, `${bride} & ${groom}`);
  const findModule = (id) => config.modules.find((module) => module.id === id);

  config.siteSettings.title = `${groom} & ${bride} - Wedding Invitation`;
  config.couple.brideName = bride;
  config.couple.brideShortName = bride;
  config.couple.groomName = groom;
  config.couple.groomShortName = groom;
  config.couple.monogram = monogram;
  config.couple.city = city;
  config.couple.headline = headline;
  if (firstDate) config.couple.weddingDate = `${firstDate}T18:00:00`;

  const intro = findModule("intro");
  if (intro) {
    intro.content.coupleNames = monogram;
    intro.content.dateDisplay = dateDisplay;
    intro.monogram = monogram;
  }
  const couple = findModule("couple");
  if (couple) {
    couple.content.groom.fullName = groom;
    couple.content.bride.fullName = bride;
  }
  const invitation = findModule("invitation");
  if (invitation) {
    invitation.content.personalGreetingTemplate = text(fields.headline, invitation.content.personalGreetingTemplate);
    if (invite) invitation.content.invitationText = invite;
  }
  const events = findModule("events");
  if (events && Array.isArray(events.content.events)) {
    [0, 1].forEach((index) => {
      const title = fields[`events.${index}.title`];
      const place = fields[`events.${index}.place`];
      const event = events.content.events[index];
      if (!event) return;
      if (title) event.name = text(title, event.name);
      if (place) {
        const lines = text(place).split(/\n+/).map((line) => line.trim()).filter(Boolean);
        event.locationName = lines[0] || event.locationName;
        event.address = lines.slice(1).join(", ") || lines[0] || event.address;
      }
      if (dateDots) event.date = dateDots;
    });
  }
  const saveTheDate = findModule("saveTheDate");
  if (saveTheDate && firstDate) {
    saveTheDate.content.targetDate = `${firstDate}T18:00:00`;
    const dateParts = firstDate.split("-");
    const targetYear = Number(dateParts[0] || 0);
    const targetMonth = Number(dateParts[1] || 1);
    const targetDay = Number(dateParts[2] || 1);
    saveTheDate.content.calendarMonth = `Tháng ${targetMonth} / ${targetYear || ""}`;
    saveTheDate.content.highlightDay = targetDay;
    saveTheDate.content.calendarDays = targetYear
      ? Array.from({ length: new Date(targetYear, targetMonth, 0).getDate() }, (_, index) => index + 1)
      : saveTheDate.content.calendarDays;
    saveTheDate.content.firstDayOfWeek = targetYear
      ? new Date(targetYear, targetMonth - 1, 1).getDay()
      : saveTheDate.content.firstDayOfWeek;
  }
  const story = findModule("story");
  if (story && Array.isArray(story.content?.milestones) && firstDate) {
    const lastMilestone = story.content.milestones[story.content.milestones.length - 1];
    const dateParts = firstDate.split("-");
    if (lastMilestone) {
      lastMilestone.year = dateParts[0] || lastMilestone.year;
      lastMilestone.dateStr = `${Number(dateParts[2] || 1)} Tháng ${Number(dateParts[1] || 1)}, ${dateParts[0] || ""}`;
      const eventPlace = text(fields["events.1.place"] || fields["events.0.place"], "").split(/\n+/).map((line) => line.trim()).filter(Boolean)[0];
      if (eventPlace) lastMilestone.location = eventPlace;
    }
  }
  return config;
}

function applyRenderedEverAfterContext(root, context) {
  if (!root || !context || typeof document === "undefined") return;
  const dateISO = context.dateISO ? String(context.dateISO) : "";
  if (!dateISO) return;
  const [year, month, day] = dateISO.split("-");
  if (!year || !month || !day) return;
  const dateDots = `${day}.${month}.${year}`;
  const dateDisplay = `${day} · ${month} · ${year}`;
  const dateCompact = `${year}.${month}.${day}`;
  const dateVietnamese = `${Number(day)} Tháng ${Number(month)}, ${year}`;
  const dateVietnameseLong = `${Number(day)} Tháng ${Number(month)} Năm ${year}`;
  const dateObject = new Date(`${dateISO}T12:00:00`);
  const englishDate = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(dateObject).toUpperCase();
  const englishDay = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(dateObject).toUpperCase();
  const englishDateWithWeekday = `${englishDay}, ${year}`;
  const vietnameseWeekday = new Intl.DateTimeFormat("vi-VN", { weekday: "long" }).format(dateObject).replace(/^./, (letter) => letter.toUpperCase());
  const cityUpper = String(context.fields?.city || "").trim().toUpperCase();
  const bride = String(context.fields?.bride || "").trim();
  const groom = String(context.fields?.groom || "").trim();
  const brideUpper = bride.toUpperCase();
  const groomUpper = groom.toUpperCase();
  const monogram = String(context.fields?.monogram || `${bride} & ${groom}`).trim();
  const replacements = [
    ["NGUYEN NHAT MINH", groomUpper],
    ["TRAN MAI ANH", brideUpper],
    ["NGUYỄN NHẬT MINH", groomUpper],
    ["TRẦN MAI ANH", brideUpper],
    ["NHẬT MINH", groomUpper],
    ["MAI ANH", brideUpper],
    ["Nhật Minh", groom],
    ["Mai Anh", bride],
    ["NM ❖ MA", `${groom.charAt(0).toUpperCase()} ❖ ${bride.charAt(0).toUpperCase()}`],
    ["28 . 11 . 2026", dateDisplay],
    ["28.11.2026", dateDots],
    ["2026.11.28", dateCompact],
    ["28 Tháng 11, 2026", dateVietnamese],
    ["28 Tháng 11 Năm 2026", dateVietnameseLong],
    ["NOVEMBER 28, 1926 // 2026", `${englishDate} // ${year}`],
    ["NOVEMBER 28, 2026", englishDate],
    ["SATURDAY, NOVEMBER 28, 2026", englishDateWithWeekday],
    ["SATURDAY, THE TWENTY-EIGHTH OF NOVEMBER", englishDay],
    ["Thứ Bảy, Ngày 28 Tháng 11 Năm 2026", `${vietnameseWeekday}, Ngày ${dateVietnameseLong}`],
    ["Thứ Bảy, 28.11.2026", `${vietnameseWeekday}, ${dateDots}`],
  ];
  if (monogram) replacements.push(["M & A", monogram]);
  if (cityUpper) replacements.push(["HO CHI MINH CITY", cityUpper]);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let current;
  while ((current = walker.nextNode())) textNodes.push(current);
  textNodes.forEach((node) => {
    let value = node.nodeValue || "";
    replacements.forEach(([from, to]) => { value = value.split(from).join(to); });
    node.nodeValue = value;
  });
}

class WeddingApp {
  constructor() {
    // Deep clone initial config
    this.config = JSON.parse(JSON.stringify(defaultWeddingConfig));
    this.templates = templatesData;
    this.invitationContext = null;

    // Read URL query parameters (?template=...&guest=...)
    const urlParams = new URLSearchParams(window.location.search);
    const paramTemplate = urlParams.get('template');
    const paramGuest = urlParams.get('guest');
    const rawContext = urlParams.get('context');
    if (rawContext) {
      try {
        this.invitationContext = JSON.parse(rawContext);
        applyEverAfterContext(this.config, this.invitationContext);
      } catch (error) { console.warn('EverAfter context ignored', error); }
    }

    this.activeTemplateId = (paramTemplate && this.templates.find(t => t.id === paramTemplate)) 
      ? paramTemplate 
      : this.config.templateId;

    this.guestName = paramGuest || "Quý Khách";
    this.isIntroOpen = urlParams.get('skipIntro') === 'true' || urlParams.get('opened') === 'true';
    this.isDrawerOpen = false;
    this.isClean = urlParams.get('clean') === 'true' || urlParams.get('embed') === 'true';
    this.viewportMode = 'desktop'; // 'desktop' | 'tablet' | 'mobile'

    // Guestbook dynamic state
    const guestbookMod = this.config.modules.find(m => m.id === 'guestbook');
    this.wishesList = guestbookMod ? [...guestbookMod.content.preloadedWishes] : [];

    // Music State
    this.isPlayingMusic = false;
    this.volume = this.config.music.volume || 0.6;
    weddingMusic.setVolume(this.volume);
    weddingMusic.subscribe(({ isPlaying, volume }) => {
      this.isPlayingMusic = isPlaying;
      this.volume = volume;
      this.updateMusicUI();
    });

    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
    this.startCountdownTimer();
  }

  getActiveTemplate() {
    return this.templates.find(t => t.id === this.activeTemplateId) || this.templates[0];
  }

  render() {
    const root = document.getElementById('root');
    if (!root) return;

    const activeTemplate = this.getActiveTemplate();

    // Sort enabled modules by order
    const sortedModules = [...this.config.modules]
      .sort((a, b) => a.order - b.order)
      .filter(m => m.enabled);

    // Render modules HTML
    const modulesHtml = sortedModules.map(mod => {
      const renderer = moduleRenderers[mod.id];
      if (!renderer) return `<!-- Unknown module ${mod.id} -->`;
      return renderer({
        config: this.config,
        activeTemplate,
        moduleData: mod,
        guestName: this.guestName,
        wishesList: this.wishesList
      });
    }).join('\n');

    // Viewport container styling for responsive preview
    let viewportClass = "w-full transition-all duration-300";
    if (this.viewportMode === 'tablet') {
      viewportClass = "max-w-[768px] mx-auto border-x border-stone-400/30 shadow-2xl my-6 rounded-2xl overflow-hidden transition-all duration-300";
    } else if (this.viewportMode === 'mobile') {
      viewportClass = "max-w-[390px] mx-auto border-x-4 border-stone-800 shadow-2xl my-6 rounded-3xl overflow-hidden transition-all duration-300 ring-8 ring-stone-900/40";
    }

    const isCleanMode = this.isClean || (window.self !== window.top);

    root.innerHTML = `
      <!-- Template Switcher & Inspector Top Bar (hidden in clean/iframe mode) -->
      ${isCleanMode ? '' : renderTemplateSwitcher({
        templates: this.templates,
        activeTemplateId: this.activeTemplateId,
        config: this.config,
        guestName: this.guestName,
        isPlaying: this.isPlayingMusic,
        volume: this.volume,
        isDrawerOpen: this.isDrawerOpen,
        viewportMode: this.viewportMode
      })}

      <!-- Main Wedding Website Viewport with Active Template Theme Class -->
      <div class="${isCleanMode ? '' : 'pt-14 bg-stone-900/10'} min-h-screen">
        <main 
          id="app-viewport" 
          class="theme-${this.activeTemplateId} ${viewportClass} min-h-screen transition-colors duration-500 relative"
          style="--font-title: ${activeTemplate.fonts.display}; --font-body: ${activeTemplate.fonts.body};"
        >
          ${modulesHtml}
        </main>
      </div>

      <!-- Intro Opening Ceremony Screen (if not yet opened) -->
      ${renderIntroScreen({
        config: this.config,
        activeTemplate,
        isOpen: this.isIntroOpen
      })}

      <!-- Interactive Modals -->
      ${renderLightboxModal()}
      ${renderVideoModal()}
    `;

    // Some legacy templates contain sample dates/city names directly in their
    // markup. Replace those rendered literals after the module render so the
    // editor/preview/public viewer stay aligned with the EverAfter invitation.
    applyRenderedEverAfterContext(root, this.invitationContext);

    this.attachEventListeners();
    this.initScrollAnimations();
    this.initGuestbookSlideBar();
    this.tickCountdownOnce();
  }

  updateMusicUI() {
    const musicBtn = document.getElementById('toggle-music-btn');
    if (!musicBtn) return;

    if (this.isPlayingMusic) {
      musicBtn.innerHTML = `
        <div class="flex items-end gap-0.5 h-3.5">
          <span class="w-0.5 bg-amber-400 animate-audio-bar-1"></span>
          <span class="w-0.5 bg-amber-400 animate-audio-bar-2"></span>
          <span class="w-0.5 bg-amber-400 animate-audio-bar-3"></span>
          <span class="w-0.5 bg-amber-400 animate-audio-bar-4"></span>
        </div>
        <span class="hidden sm:inline text-[10px] text-amber-300">Nhạc Bật</span>
      `;
    } else {
      musicBtn.innerHTML = `
        <svg class="w-3.5 h-3.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path></svg>
        <span class="hidden sm:inline text-[10px] text-stone-400">Tắt</span>
      `;
    }
  }

  attachEventListeners() {
    // 1. Template Switcher Pill Click
    document.querySelectorAll('.template-select-btn').forEach(btn => {
      btn.onclick = (e) => {
        const id = btn.getAttribute('data-template-id');
        if (id) {
          this.activeTemplateId = id;
          this.config.templateId = id;
          this.isIntroOpen = false; // Always show the bespoke intro!
          this.render();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    });

    // 1b. Template Switcher Dropdown (instant select from all 10)
    const templateSelect = document.getElementById('template-select-dropdown');
    if (templateSelect) {
      templateSelect.onchange = (e) => {
        const id = e.target.value;
        if (id) {
          this.activeTemplateId = id;
          this.config.templateId = id;
          this.isIntroOpen = false;
          this.render();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    }

    // 2. Intro "Mở Thiệp" button / wax seal click
    const handleOpenIntro = (e) => {
      if (e) e.stopPropagation();
      const scene = document.getElementById('envelope-scene');
      if (scene) {
        if (scene.classList.contains('is-opening')) return;
        scene.classList.add('is-opening');
      }

      // Play tailored cinematic audio cue
      weddingMusic.playCeremonyCue(this.activeTemplateId);

      if (this.config.music.autoplayAfterOpen && !this.isPlayingMusic) {
        setTimeout(() => {
          weddingMusic.play();
        }, 1200);
      }

      this.launchCelebrationEffect();

      // Exactly 3.0s cinematic ceremony sequence!
      setTimeout(() => {
        this.isIntroOpen = true;
        this.render();
      }, 3000);
    };

    const openBtn = document.getElementById('intro-open-btn');
    const sealTrigger = document.getElementById('intro-open-trigger');
    if (openBtn) openBtn.onclick = handleOpenIntro;
    if (sealTrigger) sealTrigger.onclick = handleOpenIntro;
    document.querySelectorAll('#envelope-scene [data-intro-trigger], #envelope-scene button, .luxury-seal-btn, .cinematic-cta, #intro-open-trigger, #intro-open-btn').forEach(el => {
      el.onclick = handleOpenIntro;
    });

    // Auto-trigger opening if requested via URL for testing & visual verification
    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('state') === 'opening') {
        setTimeout(() => {
          handleOpenIntro();
        }, 300);
      }
    } catch (e) {}

    // 3. Replay Intro Button
    const replayBtn = document.getElementById('replay-intro-btn');
    if (replayBtn) {
      replayBtn.onclick = () => {
        this.isIntroOpen = false;
        this.render();
      };
    }

    // 4. Drawer Toggle (17 Modules Customizer)
    const toggleDrawerBtn = document.getElementById('toggle-drawer-btn');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    if (toggleDrawerBtn) {
      toggleDrawerBtn.onclick = () => {
        this.isDrawerOpen = !this.isDrawerOpen;
        const drawer = document.getElementById('customizer-drawer');
        if (drawer) {
          drawer.classList.toggle('translate-x-full', !this.isDrawerOpen);
          drawer.classList.toggle('translate-x-0', this.isDrawerOpen);
        }
      };
    }
    if (closeDrawerBtn) {
      closeDrawerBtn.onclick = () => {
        this.isDrawerOpen = false;
        const drawer = document.getElementById('customizer-drawer');
        if (drawer) {
          drawer.classList.add('translate-x-full');
          drawer.classList.remove('translate-x-0');
        }
      };
    }

    // 5. Module Toggle Checkboxes
    document.querySelectorAll('.module-toggle-checkbox').forEach(cb => {
      cb.onchange = (e) => {
        const modId = cb.getAttribute('data-module-id');
        const targetMod = this.config.modules.find(m => m.id === modId);
        if (targetMod) {
          targetMod.enabled = cb.checked;
          this.render();
        }
      };
    });

    // 6. Module Reorder (Up / Down)
    document.querySelectorAll('.move-module-btn').forEach(btn => {
      btn.onclick = () => {
        const moveUpId = btn.getAttribute('data-move-up');
        const moveDownId = btn.getAttribute('data-move-down');
        const targetId = moveUpId || moveDownId;
        const index = this.config.modules.findIndex(m => m.id === targetId);

        if (index !== -1) {
          if (moveUpId && index > 0) {
            const temp = this.config.modules[index];
            this.config.modules[index] = this.config.modules[index - 1];
            this.config.modules[index - 1] = temp;
          } else if (moveDownId && index < this.config.modules.length - 1) {
            const temp = this.config.modules[index];
            this.config.modules[index] = this.config.modules[index + 1];
            this.config.modules[index + 1] = temp;
          }
          // Re-index order numbers
          this.config.modules.forEach((m, i) => m.order = i + 1);
          this.render();
        }
      };
    });

    // 7. Enable / Disable All Modules
    const enableAllBtn = document.getElementById('enable-all-modules');
    const disableAllBtn = document.getElementById('disable-all-modules');
    if (enableAllBtn) {
      enableAllBtn.onclick = () => {
        this.config.modules.forEach(m => m.enabled = true);
        this.render();
      };
    }
    if (disableAllBtn) {
      disableAllBtn.onclick = () => {
        this.config.modules.forEach(m => m.enabled = false);
        this.render();
      };
    }

    // 8. Viewport Toggle Buttons
    document.querySelectorAll('.viewport-btn').forEach(btn => {
      btn.onclick = () => {
        const mode = btn.getAttribute('data-viewport');
        if (mode) {
          this.viewportMode = mode;
          this.render();
        }
      };
    });

    // 9. Guest Personalization Input
    const guestInput = document.getElementById('guest-name-input');
    if (guestInput) {
      guestInput.oninput = (e) => {
        this.guestName = e.target.value.trim() || "Quý Khách";
        // Update all personalized placeholders without full re-render
        const greetingPill = document.querySelector('#module-invitation .bg-current\\/10');
        if (greetingPill) {
          greetingPill.textContent = `Kính gửi ${this.guestName}`;
        }
      };
    }

    // 10. Music Player Toggle & Volume
    const musicBtn = document.getElementById('toggle-music-btn');
    if (musicBtn) {
      musicBtn.onclick = () => weddingMusic.toggle();
    }
    const volumeSlider = document.getElementById('volume-slider');
    if (volumeSlider) {
      volumeSlider.oninput = (e) => weddingMusic.setVolume(parseFloat(e.target.value));
    }

    // 11. FAQ Accordions
    document.querySelectorAll('.faq-accordion-toggle').forEach(btn => {
      btn.onclick = () => {
        const parent = btn.closest('.faq-accordion-item');
        const content = parent.querySelector('.faq-content');
        const icon = parent.querySelector('.faq-icon');
        const isClosed = content.classList.contains('hidden');

        document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.faq-icon').forEach(i => i.textContent = '+');
        document.querySelectorAll('.faq-accordion-toggle').forEach(b => b.setAttribute('aria-expanded', 'false'));

        if (isClosed) {
          content.classList.remove('hidden');
          icon.textContent = '−';
          btn.setAttribute('aria-expanded', 'true');
        }
      };
    });

    // 12. RSVP Form Submission
    const rsvpForm = document.getElementById('rsvp-interactive-form');
    if (rsvpForm) {
      rsvpForm.onsubmit = (e) => {
        e.preventDefault();
        const successCard = document.getElementById('rsvp-success-card');
        if (successCard) {
          successCard.classList.remove('hidden');
          rsvpForm.classList.add('opacity-50', 'pointer-events-none');
          this.launchCelebrationEffect();
        }
      };
    }

    // 13. Copy Account Number Button
    document.querySelectorAll('.copy-account-btn').forEach(btn => {
      btn.onclick = () => {
        const acc = btn.getAttribute('data-account');
        if (acc) {
          navigator.clipboard.writeText(acc).then(() => {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = `<span>✓ Đã Chép</span>`;
            setTimeout(() => {
              btn.innerHTML = originalHTML;
            }, 2000);
          });
        }
      };
    });

    // 14. Guestbook Form Submission
    const gbForm = document.getElementById('guestbook-submit-form');
    if (gbForm) {
      gbForm.onsubmit = (e) => {
        e.preventDefault();
        const author = document.getElementById('guestbook-author').value.trim() || 'Khách Quý';
        const relation = document.getElementById('guestbook-relation').value.trim() || 'Bạn bè';
        const message = document.getElementById('guestbook-message').value.trim();

        if (message) {
          const newWish = {
            id: `wish-${Date.now()}`,
            author,
            relation,
            message,
            createdAt: 'Vừa xong',
            avatar: author.substring(0, 2).toUpperCase()
          };
          this.wishesList.unshift(newWish);
          this.render();
          this.launchCelebrationEffect();
        }
      };
    }

    // 15. Lightbox Modal Click & Keyboard Navigation
    document.querySelectorAll('.gallery-item-card').forEach(card => {
      const openCard = () => {
        const src = card.getAttribute('data-lightbox-src');
        const title = card.getAttribute('data-lightbox-title');
        const caption = card.getAttribute('data-lightbox-caption');

        const modal = document.getElementById('lightbox-modal');
        const img = document.getElementById('lightbox-img');
        const titleEl = document.getElementById('lightbox-title');
        const captionEl = document.getElementById('lightbox-caption');

        if (modal && img) {
          img.src = src;
          titleEl.textContent = title;
          captionEl.textContent = caption;
          modal.classList.remove('hidden');
        }
      };

      card.onclick = openCard;
      card.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCard();
        }
      };
    });

    const closeLightboxBtn = document.getElementById('close-lightbox-btn');
    const lightboxModal = document.getElementById('lightbox-modal');
    if (closeLightboxBtn && lightboxModal) {
      closeLightboxBtn.onclick = () => lightboxModal.classList.add('hidden');
      lightboxModal.onclick = (e) => {
        if (e.target === lightboxModal) lightboxModal.classList.add('hidden');
      };
    }

    // 16. Video Modal Click
    const openVideoBtn = document.getElementById('open-video-modal-btn');
    const videoModal = document.getElementById('video-modal');
    const closeVideoBtn = document.getElementById('close-video-btn');
    const videoIframe = document.getElementById('video-iframe');

    if (openVideoBtn && videoModal) {
      openVideoBtn.onclick = () => {
        const videoMod = this.config.modules.find(m => m.id === 'video');
        if (videoIframe && videoMod) {
          videoIframe.src = videoMod.content.videoUrl;
        }
        videoModal.classList.remove('hidden');
      };
    }
    if (closeVideoBtn && videoModal) {
      closeVideoBtn.onclick = () => {
        if (videoIframe) videoIframe.src = '';
        videoModal.classList.add('hidden');
      };
    }

    // 17. Global Keyboard Accessibility: Escape key dismisses open modals & drawers
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const lb = document.getElementById('lightbox-modal');
        if (lb && !lb.classList.contains('hidden')) {
          lb.classList.add('hidden');
        }
        const vm = document.getElementById('video-modal');
        if (vm && !vm.classList.contains('hidden')) {
          const vIframe = document.getElementById('video-iframe');
          if (vIframe) vIframe.src = '';
          vm.classList.add('hidden');
        }
        if (this.isDrawerOpen) {
          this.isDrawerOpen = false;
          const drawer = document.getElementById('customizer-drawer');
          if (drawer) {
            drawer.classList.add('translate-x-full');
            drawer.classList.remove('translate-x-0');
          }
        }
      }
    });

    // 18. Scroll to top button
    const scrollTopBtn = document.getElementById('scroll-to-top-btn');
    if (scrollTopBtn) {
      scrollTopBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }
  }

  tickCountdownOnce() {
    const couple = this.config.couple;
    const targetTime = new Date(couple.weddingDate || "2026-11-28T18:00:00").getTime();
    const now = new Date().getTime();
    const diff = Math.max(0, targetTime - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update ModuleSaveTheDate & any other countdown dials
    document.querySelectorAll('[data-countdown="days"], .countdown-days').forEach(el => el.textContent = days);
    document.querySelectorAll('[data-countdown="hours"], .countdown-hours').forEach(el => el.textContent = String(hours).padStart(2, '0'));
    document.querySelectorAll('[data-countdown="minutes"], .countdown-minutes').forEach(el => el.textContent = String(minutes).padStart(2, '0'));
    document.querySelectorAll('[data-countdown="seconds"], .countdown-seconds').forEach(el => el.textContent = String(seconds).padStart(2, '0'));

    // Also update any live-countdown-grid
    const grid = document.getElementById('live-countdown-grid');
    if (grid) {
      const nums = grid.querySelectorAll('.font-bold');
      if (nums.length >= 4) {
        nums[0].textContent = days;
        nums[1].textContent = hours;
        nums[2].textContent = minutes;
        nums[3].textContent = seconds;
      }
    }
  }

  startCountdownTimer() {
    if (this.countdownInterval) clearInterval(this.countdownInterval);
    this.tickCountdownOnce();
    this.countdownInterval = setInterval(() => {
      this.tickCountdownOnce();
    }, 1000);
  }

  initScrollAnimations() {
    if (this.scrollObserver) {
      this.scrollObserver.disconnect();
    }

    const options = {
      root: null,
      rootMargin: '0px 0px 50px 0px',
      threshold: 0.01
    };

    this.scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, options);

    // Observe all module sections, footers, and revealable elements
    const elements = document.querySelectorAll('[id^="module-"], .reveal-on-scroll, .reveal-scale');
    elements.forEach(el => {
      this.scrollObserver.observe(el);

      // Immediately reveal if already within the viewport on initial render
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-visible');
      }
    });

    // Fallback passive listener for guaranteed trigger across fast scrolls
    const onScrollCheck = () => {
      elements.forEach(el => {
        if (!el.classList.contains('is-visible')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight + 50 && rect.bottom > 0) {
            el.classList.add('is-visible');
          }
        }
      });
    };
    window.addEventListener('scroll', onScrollCheck, { passive: true });
    onScrollCheck();
  }

  initGuestbookSlideBar() {
    if (this.guestbookInterval) {
      clearInterval(this.guestbookInterval);
      this.guestbookInterval = null;
    }

    const track = document.getElementById('guestbook-slide-track');
    const container = document.getElementById('wishes-carousel-box');
    if (!track || !container) return;

    const slides = track.querySelectorAll('.wish-card-slide');
    if (!slides || slides.length === 0) return;

    if (this.currentWishSlide === undefined || this.currentWishSlide >= slides.length) {
      this.currentWishSlide = 0;
    }

    const updateSlidePosition = () => {
      const firstSlide = slides[0];
      const slideWidth = firstSlide.offsetWidth + 20; // 20px gap
      const maxSlide = Math.max(0, slides.length - 1);
      if (this.currentWishSlide > maxSlide) this.currentWishSlide = 0;
      if (this.currentWishSlide < 0) this.currentWishSlide = maxSlide;

      track.style.transform = `translateX(-${this.currentWishSlide * slideWidth}px)`;

      // Update dots indicator
      const dots = document.querySelectorAll('#guestbook-dots-container button');
      dots.forEach((dot, idx) => {
        if (idx === this.currentWishSlide) {
          dot.className = 'w-7 h-2.5 rounded-full bg-amber-500 transition-all';
        } else {
          dot.className = 'w-2.5 h-2.5 rounded-full bg-current/20 hover:bg-current/40 transition-all';
        }
      });
    };

    updateSlidePosition();

    // Auto-slide interval (every 3.5 seconds)
    const startAutoSlide = () => {
      if (this.guestbookInterval) clearInterval(this.guestbookInterval);
      this.guestbookInterval = setInterval(() => {
        this.currentWishSlide = (this.currentWishSlide + 1) % slides.length;
        updateSlidePosition();
      }, 3500);
    };

    startAutoSlide();

    // Pause on hover
    container.onmouseenter = () => {
      if (this.guestbookInterval) {
        clearInterval(this.guestbookInterval);
        this.guestbookInterval = null;
      }
      const ind = document.getElementById('guestbook-pause-indicator');
      if (ind) ind.textContent = 'Đã tạm dừng • Rê chuột ra ngoài để tiếp tục trượt';
    };

    container.onmouseleave = () => {
      startAutoSlide();
      const ind = document.getElementById('guestbook-pause-indicator');
      if (ind) ind.textContent = 'Tự động trượt • Rê chuột để tạm dừng';
    };

    // Prev / Next button handlers
    const prevBtn = document.getElementById('guestbook-prev-btn');
    const nextBtn = document.getElementById('guestbook-next-btn');

    if (prevBtn) {
      prevBtn.onclick = () => {
        this.currentWishSlide = (this.currentWishSlide - 1 + slides.length) % slides.length;
        updateSlidePosition();
      };
    }

    if (nextBtn) {
      nextBtn.onclick = () => {
        this.currentWishSlide = (this.currentWishSlide + 1) % slides.length;
        updateSlidePosition();
      };
    }

    // Dots click handlers
    const dots = document.querySelectorAll('#guestbook-dots-container button');
    dots.forEach((dot, idx) => {
      dot.onclick = () => {
        this.currentWishSlide = idx;
        updateSlidePosition();
      };
    });
  }

  launchCelebrationEffect() {
    // Elegant particle confetti
    const colors = ['#D89F38', '#9B1B1E', '#F8D98C', '#E5B25D', '#D88A8A'];
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'fixed pointer-events-none z-50 rounded-full';
      const size = Math.random() * 8 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `-10px`;
      particle.style.opacity = Math.random() * 0.7 + 0.3;
      particle.style.transform = `rotate(${Math.random() * 360}deg)`;
      particle.style.transition = `transform ${Math.random() * 2 + 2}s linear, top ${Math.random() * 2 + 2}s linear, opacity 2s ease-out`;

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.style.top = '105vh';
        particle.style.transform = `rotate(${Math.random() * 720}deg) scale(0.5)`;
        particle.style.opacity = '0';
      }, 50);

      setTimeout(() => {
        particle.remove();
      }, 4000);
    }
  }
}

// Start Application safely on DOM Ready or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new WeddingApp();
  });
} else {
  new WeddingApp();
}


})();
