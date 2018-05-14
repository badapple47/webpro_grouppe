เป็นส่วนหนึ่งของวิชา egco 427 - web programming

feature list
- สมัครสมาชิก เพื่อเข้าใจเว็บไซต์
- หน้ารวม News/event ข่าวที่หน้าสนใจของ มหาวิทยาลัย
- Event แสดงคนใน Directory ที่สมัคร eventว่ามีใครบ้าง และสามารถสมัครได้ (หลังจากสมัครจะได้ QR code ที่เกิดจาก Eventid + UserId เพื่อเป็นตัวยืนยันการสมัคร) 
- กระดานสารานุกรมของคณะวิศวะกรรมศาสตร์ สามารถกดเข้าไปดูข้อมูลส่วนตัวได้ และสามารถแก้ไขข้อมูลส่วนตัวของตัวเองได้


เขียนด้วย vue.js

how to run

* don't forget cors toggle

- npm install
- npm start
- สร้าง collection ของ MongoDB ชื่อ events news และ users


events db

{ 
    "_id" : ObjectId("5af4c81e640a35150872b4af"), 
    "event" : "Incrisis Salaya", 
    "dayStart" : "1", 
    "monthStart" : "สิงหาคม", 
    "yearStart" : "2561", 
    "dayEnd" : "1", 
    "monthEnd" : "6", 
    "yearEnd" : "2561", 
    "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t31.0-8/27797487_1405062859622555_5125450815084866467_o.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHDc0CDUmg9XTg8TGGkkpG5_bhaWTLSTQvZ3M1mDqA7WbYXz9qmHLNaMOubhDGN_MvBeEnjutiI2XMhXFB0hOThFHrhZLILiz7QYxvW6AhTZg&oh=d24dd50511b2baeb9eb08ac6a687dc9d&oe=5B534AAD", 
    "description" : "คอนเสิร์ตของคณะวิศกรรมศาสตร์ มหาวิทยาลัยมหิดล Incrisis Concert by EGMU ถือว่าเป็นงานเป็นไฮไลท์ของทุกปี ซึ่งจะไม่ได้มีแค่เด็กของมหิดลที่มาดูงานนี้จะมีคนนอกเข้ามาเยอะมากๆ ก็ไม่รู้ทำไมเหมือนกัน แต่เยอะจริงๆสำหรับปีนี้มาในคอนเซ็ปร้อนแรง ในงานก็เลยแมร่งย้อมแดงอย่างเดียว แดงไป 6 ชั่วโมง ไอ้เราก็อุส่าห์เดินไปบอกแล้วว่าพี่ ตอนพักเบรคเปิดไฟสลับให้หน่อย ย้อมสีเดียวมันถ่ายรูปยากครับ ก็เปิดอยู่แว๊บนึงแล้วแมร่งก็แดงอีก ก็ซุยกันไป แดงก็แดง กูจะไม่ยอมทำรูปขาวดำเด็ดขาดปีนี้โดยส่วนตัวเราเฉยๆกับบรรยากาศภายในงานมากๆ ไฟมันไม่สวย บู๊ธจัดไม่มีอะไรเลย มันดูมีแค่คอนเสิร์ต แต่กูยังดีที่ของกินมีค่อนข้างเยอะ อันนี้โอเคอยู่คอนนี้ก็น่าจะเป็นคอนสุดท้ายแล้ว ไวเหมือนกัน รูปตอนปี 1 ยังลงไม่ครบเลยเลย 55555 แล้วคอนนี้รู้สึกได้เจอคนเยอะมากๆ เรียกได้ว่าเจอหมดแต่ถ่ายไม่ค่อยครบ วิ่งไปนู่นนี่นั่นวุ่นทั้งงาน ก็ถ้าไม่ได้ถ่ายใคร เราขอโทษตากล้องมีเยอะถ่ายกับคนอื่นไปก็ได้", 
    "userId" : [
        "5af175e7191e353b505f7027", 
        "5af175e7191e353b505f7027", 
        "5af175e7191e353b505f7027", 
        "5af4c62d325c861442ff3624", 
        "5af4c213325c861442ff3623", 
        "5af4ea9054b5fa19723d7a34", 
        "5af4ee3d23c4e2199718f933", 
        "5af4f3a9fd29dc1a38640e3a", 
        "5af4f393fd29dc1a38640e39", 
        "5af4f534fd29dc1a38640e3b", 
        "5af4fd63fd02ee1aae1e422a", 
        "5af50dd433eb561d869eb67c", 
        "5af50fcb33eb561d869eb67d", 
        "5af5129433eb561d869eb67e", 
        "5af4fcaefd02ee1aae1e4229"
    ], 
    "view" : NumberInt(126), 
    "location" : "Mahidol University", 
    "shortDescription" : "คอนเสิร์ตที่ยิ่งใหญ่ที่สุดในศาลายา"
}
{ 
    "_id" : ObjectId("5af4c81e640a35150872b4b0"), 
    "event" : "วิธีพระราชทานปริญญาบัตร ประจำปีการศึกษา 2560", 
    "dayStart" : "20", 
    "monthStart" : "ธันวาคม", 
    "yearStart" : "2561", 
    "dayEnd" : "25", 
    "monthEnd" : "9", 
    "yearEnd" : "2561", 
    "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/31239532_1775179915883288_6572446036248231936_o.png?_nc_cat=0&_nc_eui2=v1%3AAeG6QzSJKXmr-amjj8t6Buy4bxtgmBJiKqbGDVJ5G4-dmHxKTqe1T2m9DmGU8OSN1XAHrzkQzxfP8VwB8wNWiBhsWphmyc0EkCb9Y2iTUF6Jeg&oh=f805a064020f5aa24e94a3d8df7be1c2&oe=5B8B4AB6", 
    "description" : "กำหนดการฝึกซ้อมและพิธีพระราชทานปริญญาบัตร มหาวิทยาลัยมหิดล ประจำปีการศึกษา 2560 ซ้อมย่อย อาทิตย์ 16 กย. 61 ซ้อมใหญ่ อังคาร 18 กย. 61 สถานที่และเวลา : โปรดติดตามประกาศจากมหาวิทยาลัย เพิ่มเติม", 
    "userId" : [
        "5af4c62d325c861442ff3624", 
        "5af4f534fd29dc1a38640e3b", 
        "5af4fcaefd02ee1aae1e4229", 
        "5af4fd63fd02ee1aae1e422a", 
        "5af50dd433eb561d869eb67c", 
        "5af50fcb33eb561d869eb67d"
    ], 
    "view" : NumberInt(33), 
    "location" : "Mahidol University"
}
{ 
    "_id" : ObjectId("5af4c81e640a35150872b4b1"), 
    "event" : "วันมหิดล", 
    "dayStart" : "24", 
    "monthStart" : "มีนาคม", 
    "yearStart" : "2561", 
    "dayEnd" : "24", 
    "monthEnd" : "9", 
    "yearEnd" : "2561", 
    "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t39.2147-6/c0.209.476.249/p476x249/21276093_1552381364829812_5385930431323439104_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeFrfUMZ3UI_C5_Wb2irw6pCU6TbZFPp0RwiKwGiQul-NQ94Gt95g14wZpkX-trorVCGnU_iy83TrSCK1pGBKyYg-5Z3Fl4ZsHNml89mEW_INQ&oh=1027f88fabc0e9fda3e3fa4cdd344751&oe=5B97DDC9", 
    "description" : "มหาวิทยาลัยมหิดลขอเชิญชาวมหิดล ทั้งศิษย์เก่า ศิษย์ปัจจุบัน อาจารย์ บุคลากรและคนไทยทุกคน ร่วมทำความดีเพื่อผู้อื่น เนื่องใน วันมหิดล Mahidol Day of Service ดังพระราชปณิธานที่ว่า ขอให้ถือผลประโยชน์ส่วนตัวเป็นที่สอง ประโยชน์ของเพื่อนมนุษย์เป็นกิจที่หนึ่ง", 
    "userId" : [
        "5af4fd63fd02ee1aae1e422a", 
        "5af50dd433eb561d869eb67c", 
        "5af5129433eb561d869eb67e"
    ], 
    "view" : NumberInt(15), 
    "location" : "Mahidol University"
}
{ 
    "_id" : ObjectId("5af4c81e640a35150872b4b2"), 
    "event" : "ทำนุบำรุงพระพุทธศาสนาและถวายผ้าพระกฐินพระราชทาน", 
    "dayStart" : "31", 
    "monthStart" : "สิงหาคม", 
    "yearStart" : "2561", 
    "dayEnd" : "31", 
    "monthEnd" : "10", 
    "yearEnd" : "2561", 
    "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/20993039_1527465307321418_9006119411114552269_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGptiN48etEvJqfbtG9Ar67nTQeVwVOU_CO8jdIgHpdURNl8olTsOEWPqUp9oGPX1my3lpJrG1VdJTFehuh4bygH4atCoGi0C8_nsHdTSlBiw&oh=0230f851129d8d6085b79c645a4a7247&oe=5B952CE1", 
    "description" : "มหาวิทยาลัยมหิดลขอเชิญร่วมทำนุบำรุงพระพุทธศาสนาและถวายผ้าพระกฐินพระราชทาน ณ วัดพระงาม (พระอารามหลวงชั้นตรี) ต.พระปฐมเจดีย์ อ.เมือง จ.นครปฐม **วันอังคารที่ 31 ตุลาคม 2560", 
    "userId" : [
        "5af1762983d2c303f4ed27ff", 
        "5af4fabdfd02ee1aae1e4226", 
        "5af4fd63fd02ee1aae1e422a", 
        "5af50fcb33eb561d869eb67d"
    ], 
    "view" : NumberInt(22), 
    "location" : "Mahidol University"
}
{ 
    "_id" : ObjectId("5af4c81e640a35150872b4b3"), 
    "event" : "ทำธงที่ระลึก", 
    "dayStart" : "30", 
    "monthStart" : "เมษายน", 
    "yearStart" : "2561", 
    "dayEnd" : "30", 
    "monthEnd" : "6", 
    "yearEnd" : "2561", 
    "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t31.0-8/19575026_1472846502783299_2528380368298570342_o.png?_nc_cat=0&_nc_eui2=v1%3AAeEhf5BC3ml9MULbnOfOSpDXaDh1j3mL01GA7kIxZgfnfDXrXT1hsevBGI-QA4qDNzaGIlkrgeCqSQrjNCsuUQela3WUjvO158orf9dJWRqRVg&oh=29f2729f00792d87a1c2e6c8773f6404&oe=5B55A89B", 
    "description" : "กลับมาอีกครั้ง กับการทำธงที่ระลึก #วันมหิดล ประจำปี 2560 วันศุกร์ที่ 30 มิถุนายน นี้ ณ โรงพยาบาลศิริราช เวลา 19.00 น. - 6.00 น.", 
    "userId" : [
        "5af4c62d325c861442ff3624", 
        "5af4fd63fd02ee1aae1e422a", 
        "5af50fcb33eb561d869eb67d"
    ], 
    "view" : NumberInt(12), 
    "location" : "Mahidol University"
}
{ 
    "_id" : ObjectId("5af4c81e640a35150872b4b4"), 
    "event" : "บริจาคโลหิต", 
    "dayStart" : "5", 
    "monthStart" : "มกราคม", 
    "yearStart" : "2561", 
    "dayEnd" : "5", 
    "monthEnd" : "9", 
    "yearEnd" : "2561", 
    "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/21034325_1526720717395877_1554113049749229784_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeEvugs4HsEkDOhvwGdHw-7-DisRcroOnFqXvNtgHhEvg8JRBj8zkaCMfEAtu-tJd0bNTV8OYFsL4T_Pf1aLOI1FwBRTWgALtRHguZ9mNuEJLg&oh=fd2e9229e47b5703d48120b6c62a2e57&oe=5B873F4D", 
    "description" : "ขอเชิญร่วมบริจาคโลหิต ตั้งแต่เวลา 8.30 - 11.30 น. วันที่ 5 กันยายน 2560 ณ ห้องประชุม 322 ชั้น 3 ศูนย์การเรียนรู้มหิดล มหาวิทยาลัยมหิดล ศาลายา Blood donation, September 5th, 2017. 8.30am - 11.30am , Room 322, 3rd floor, Mahidol Learning Center (MLC)", 
    "userId" : [
        "5af1762983d2c303f4ed27ff", 
        "5af4c62d325c861442ff3624", 
        "5af4f534fd29dc1a38640e3b"
    ], 
    "view" : NumberInt(7), 
    "location" : "Mahidol University"
}
{ 
 
    "event" : "TRAM TOUR", 
    "dayStart" : "14", 
    "monthStart" : "สิงหาคม", 
    "yearStart" : "2561", 
    "dayEnd" : "14", 
    "monthEnd" : "6", 
    "yearEnd" : "2561", 
    "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
    "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩‍👩‍👧‍👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘️ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
    "userId" : [

    ], 
    "view" : NumberInt(0)
}

{ 
 
    "event" : "TRAM TOUR1", 
    "dayStart" : "14", 
    "monthStart" : "สิงหาคม", 
    "yearStart" : "2561", 
    "dayEnd" : "14", 
    "monthEnd" : "6", 
    "yearEnd" : "2561", 
    "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
    "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩‍👩‍👧‍👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘️ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
    "userId" : [

    ], 
    "view" : NumberInt(0),
    "shortDescription" : "รับลมกับรถแทรมศาลายาพาทัวร์",
    "location":"Mahidol Salaya"
}
{ 
 
    "event" : "TRAM TOUR2", 
    "dayStart" : "14", 
    "monthStart" : "สิงหาคม", 
    "yearStart" : "2561", 
    "dayEnd" : "14", 
    "monthEnd" : "6", 
    "yearEnd" : "2561", 
    "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
    "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩‍👩‍👧‍👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘️ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
    "userId" : [

    ], 
    "view" : NumberInt(0)
}
{ 
 
    "event" : "TRAM TOUR3", 
    "dayStart" : "14", 
    "monthStart" : "สิงหาคม", 
    "yearStart" : "2561", 
    "dayEnd" : "14", 
    "monthEnd" : "6", 
    "yearEnd" : "2561", 
    "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
    "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩‍👩‍👧‍👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘️ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
    "userId" : [

    ], 
    "view" : NumberInt(0)
}
{ 
 
    "event" : "TRAM TOUR4", 
    "dayStart" : "14", 
    "monthStart" : "สิงหาคม", 
    "yearStart" : "2561", 
    "dayEnd" : "14", 
    "monthEnd" : "6", 
    "yearEnd" : "2561", 
    "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
    "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩‍👩‍👧‍👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘️ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
    "userId" : [

    ], 
    "view" : NumberInt(0)
}
{ 
 
    "event" : "TRAM TOUR5", 
    "dayStart" : "14", 
    "monthStart" : "สิงหาคม", 
    "yearStart" : "2561", 
    "dayEnd" : "14", 
    "monthEnd" : "6", 
    "yearEnd" : "2561", 
    "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
    "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩‍👩‍👧‍👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘️ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
    "userId" : [

    ], 
    "view" : NumberInt(0)
}
{ 
 
    "event" : "TRAM TOUR6", 
    "dayStart" : "14", 
    "monthStart" : "สิงหาคม", 
    "yearStart" : "2561", 
    "dayEnd" : "14", 
    "monthEnd" : "6", 
    "yearEnd" : "2561", 
    "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
    "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩‍👩‍👧‍👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘️ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
    "userId" : [

    ], 
    "view" : NumberInt(0)
}
{ 
 
    "event" : "TRAM TOUR7", 
    "dayStart" : "14", 
    "monthStart" : "สิงหาคม", 
    "yearStart" : "2561", 
    "dayEnd" : "14", 
    "monthEnd" : "6", 
    "yearEnd" : "2561", 
    "image" : "https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792649_1754418241292789_2614652629887454165_n.jpg?_nc_cat=0&_nc_eui2=AeGRX6IqvOaMyF7CAsbUnxaar9U8KILKCXDTwdameSwGTe-UXK8WBOsi939ek5Evzp0-ygF9OIfGGiqBSu1FUfCnozCBe-d4jVWzoS7Jc0K5QQ&oh=5b576cf13264e8a38a212d084b84d682&oe=5B8B36CA", 
    "description" : "อุทยานธรรมชาติวิทยาสิรีรุกขชาติ ม.มหิดล ศาลายา \nมีบริการ รถราง 🚎(TRAM TOUR) แล้วนะ บอกต่อ!!! \nชวนเพื่อนๆ และชาวแก๊งค์ 👬👩‍👩‍👧‍👧 \nมานั่งรถราง(TRAM TOUR) ชมพืชสมุนไพรไทย🌱🍀☘️ \nพร้อมการบรรยาย ลักษณะของพืชและสรรพคุณต่างๆ \nท่านจะได้ทั้งความรู้และความสนุก ที่ท่านไม่เคยรู้มาก่อน \nโดยจะเปิดให้บริการ รถรางรอบแรก เวลา 10.45 น. \nเริ่มตั้งแต่วันพุธที่ 14 มีนาคม 2561", 
    "userId" : [

    ], 
    "view" : NumberInt(0)
}



news db

{ 
    "_id" : ObjectId("5af47948640a3503656c99f7"), 
    "news" : "คลินิกรัก(ษา)ภาษา Language Clinic", 
    "day" : NumberInt(8), 
    "month" : "กุมภาพันธ์", 
    "year" : NumberInt(2018), 
    "image" : "https://scontent.fbkk3-1.fna.fbcdn.net/v/t1.0-9/31698787_1783743811693565_4203972860441526272_o.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGbNILme8cdXuzDaMs51eMLjhitBPy8k8qhx8Ww1iMJWugNcWARdJ62g6Swr9hJkltuEj8X_qL2ZA8STcBXPWaFARMJMOBJkStVQdTgQx8n0Q&oh=8aca3ffe2ecf1c8f7b6ee769ec757e26&oe=5B8FEA5E", 
    "description" : "ขอเชิญบุคลากรและนักศึกษาเข้าร่วมโครงการ “คลินิกรัก(ษา)ภาษา Language Clinic” โดยไม่เสียค่าใช้จ่าย เพื่อขอรับคำปรึกษาและแนวทางการพัฒนาทักษะการเขียนและการออกเสียงภาษาอังกฤษจากอาจารย์ผู้เชี่ยวชาญ ระหว่างวันที่ 19 มีนาคม – 6 กันยายน 2561 เวลา 14.00 – 16.00 น. ณ ศูนย์การเรียนรู้ภาษา (LLC) ชั้น 3 อาคารศูนย์การเรียนรู้มหิดล มหาวิทยาลัยมหิดล ติดต่อสอบถามได้ที่คุณธันย์นิชา จิรฐาธนะพงศ์ (เมย์) โทร.02-849-4611 หรืออีเมล tannicha.jit@mahidol.edu",
    "view" : 0,
    "location" : "มหาวิทยาลัยมหิดล"
 }

 {"news":"ประกาศ!! หอสมุดกลางปิดทำการ", 
"day":6, 
"month":"สิงหาคม", 
"year":2018, 
"location" : "มหาวิทยาลัยมหิดล",
"image":"https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29792105_1757309764336970_999458444765298688_n.jpg?_nc_cat=0&_nc_eui2=AeEYQwWNf-DGweYQZqGaUdzaZsIy0KsB9wxVwCpjJw8fgqus0EnTqtWnwpwxDQsrPXfOz_IaBnw7Y8zWMJyER-nysxzQ-llJZfuOTlvvvR6X-w&oh=a055eac3b8e924cc8ec8b9cf92a5e75c&oe=5B8557C5", 
"description":"ประกาศ!! หอสมุดกลางปิดทำการ 
 
ในวันศุกร์ที่ 6 เมษายน 2561 เนื่องในวันจักรี 
 
และจะเปิดให้บริการตามปกติในวันเสาร์ที่ 7 เมษายน 2561 
 
สำหรับท่านใดที่ต้องการคืนหนังสือ กรุณาใช้บริการตู้ Library Book Return 
 
บริเวณด้านข้างประตูทางเข้าหน้าอาคารหอสมุดฯ ขออภัยในความไม่สะดวกครับ 
", 
"view":0}

{"news":"แฮปปี้ ฉีดยาแล้ว ปลอดภัยกับทุกคน",
"day":11,
"month":"พฤษภาคม",
"year":2018,
"image":"https://scontent.fbkk3-2.fna.fbcdn.net/v/t31.0-8/28953911_1733382653376997_1374991678471620856_o.jpg?_nc_cat=0&_nc_eui2=AeFxeh4a0QXKwck0KHCW1Qh-QlTeADaYKjDRG2TpDNliPn3WIhRIELAbZ-NfsKk_IgFcQnsoJUNuzFMPCUyv4Xoswrc3RX8EAh_fcBsjl7DtPw&oh=3203373fae601589a10c0880ea35ca6e&oe=5B529427",
"description":"ฝากน้องๆ นักศึกษาที่ศาลายาทุกคน และบุคลากรที่น่ารัก ช่วยเป็นหูเป็นตาดูแลพี่ happy ด้วยนะคะ ตอนนี้พวกเรากำลังหาบ้านให้ แต่คงต้องพิจารณาหลายๆ อย่างด้วย ทั้งความพร้อมของผู้รับเลี้ยง บริเวณที่พี่เค้าจะไปอยู่ เพื่อนๆ คนไหนมีใครที่จะช่วยรับเลี้ยงได้ ขอความกรุณาแจ้งด้วยนะคะ แต่ขอพี่ๆ แอดมินไปดูสถานที่และความพร้อมนิดนึงค่า แต่เค้าฉีดยาแล้ว รับรองว่าไม่เป็นพิษเป็นภัยกับใครแต่อย่างใด 
.....ขอบคุณค่าาา
",
"view":0,
"location":"มหาวิทยาลัยมหิดล"}

{"news":"สัตวแพทย์ ฉีดยาน้องหมาแแมว ฟรี!!", 
"day":11, 
"month":"พฤษภาคม", 
"year":2018, 
"image":"https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/29136606_1733647193369894_8206087149938802688_n.jpg?_nc_cat=0&_nc_eui2=AeFXG0MG6PXVANamo3jKFwaAKsTw1XnFTh47MzNt3FAbEIE_ldXbMsj-26aoeivn1fhVgRn2H3kqKpnin87kHGjQE6qmL-GtA7hzfFpkfsXHNQ&oh=cf38b7784fc52260453f42ee803ebbbe&oe=5B58B7BD", 
"description":"คณะสัตวแพทยศาสตร์ มหาวิทยาลัยมหิดล ให้บริการฉีดวัคซีนป้องกันโรคเรบีส์ (โรคพิษสุนัขบ้า) ตั้งแต่วันที่ 13 มีนาคม 2561 เป็นต้นไป (ฟรีเฉพาะค่าวัคซีน 300 ตัวจนกว่าวัคซีนจะหมด / ค่าฉีดตัวละ 50 บาท) 
 
ให้บริการฉีดเฉพาะสุนัขและแมว รับบริการได้ที่ คลินิก ม.มหิดลคนรักสัตว์ ตั้งแต่เวลา 08.30 - 20.30 น. 
 
สอบถามรายละเอียดเพิ่มเติมโทร. 0-2444-6550 กด 0 
", 
"view":0, 
"location":"มหาวิทยาลัยมหิดล"}


