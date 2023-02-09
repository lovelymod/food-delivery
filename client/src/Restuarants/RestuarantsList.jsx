import KFC from "../assets/kfc-logo.png";
import Dairy from "../assets/dairyqueen.png";
import Pizza from "../assets/pizza.png";
import Donut from "../assets/donut.png";
import Kyoza from "../assets/kyoza logo.jpg";
import StarBuck from "../assets/starbusk.png";

export const Restuarants = [
  {
    id: "0",
    logo: KFC,
    name: "KFC (เคเอฟซี)",
    foods: {
      "ไก่วิงซ์แซ่บ 2 ชิ้น": "49 บาท",
      "ไก่วิงซ์แซ่บ 3 ชิ้น": "69 บาท",
      "ไก่ไม่มีกระดูก 2 ชิ้น": "49 บาท",
      เฟรนช์ฟรายส์ขนาดใหญ่: "59 บาท",
    },
  },
  {
    id: "1",
    logo: Dairy,
    name: "Dairy Queen",
  },
  {
    id: "2",
    logo: Pizza,
    name: "Pizza Company",
  },
  {
    id: "3",
    logo: Donut,
    name: "Mister Donut",
  },
  {
    id: "4",
    logo: Kyoza,
    name: "KINZA GYOZA (คินซ่าเกี๊ยวซ่า)",
  },
  {
    id: "5",
    logo: StarBuck,
    name: "Starbucks",
  },
];
