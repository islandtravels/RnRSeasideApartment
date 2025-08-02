import { checkus_agoda, checkus_airbnb, checkus_bookingcom, gallery_img1, gallery_img10, gallery_img11, gallery_img12, gallery_img13, gallery_img2, gallery_img3, gallery_img4, gallery_img5, gallery_img6, gallery_img7, gallery_img8, gallery_img9, LogoIconMain } from '../assets/img';
import {
  FaClock,
  FaUsers,
  FaChild,
  FaDog,
  FaBan,
  FaSmokingBan,
  FaDoorClosed,
  FaTrashAlt,
  FaUtensils,
} from "react-icons/fa";

export const img1 = [
  gallery_img1,
  gallery_img2,
  gallery_img3,
  gallery_img4,
];
export const img2 = [
  gallery_img5,
  gallery_img6,
  gallery_img7,
  gallery_img8,
];
export const img3 = [
  gallery_img9,
  gallery_img10,
  gallery_img11,
  gallery_img12,
];

export const rating_info = [
  {
    img: checkus_airbnb,
    rating: "4.8 / 5",
    reviews: "28",
    link: "https://www.airbnb.com/rooms/823379786177377624?",
  },
  {
    img: checkus_agoda,
    rating: "9.7 / 10",
    reviews: "31",
    link: "https://www.agoda.com/r-r-s-rest-and-recreation-at-marina-spatial/hotel/dumaguete-ph.html",
  },
  {
    img: checkus_bookingcom,
    rating: "8.4 / 10",
    reviews: "15",
    link: "https://www.booking.com/hotel/ph/2br-cozy-seaside-condo-in-dumaguete.html?",
  },
]


export const houseRulesList = [
  {
    icon: FaClock,
    title: "Check-in",
    content: ["From 2:00 PM to 6:00 PM"],
    note: "Please inform us of your arrival time in advance.",
  },
  {
    icon: FaClock,
    title: "Check-out",
    content: ["Until 12:00 PM"],
    note: "Please inform us of your departure time in advance.",
  },
  {
    icon: FaUsers,
    title: "Maximum Guests",
    content: ["4 guests only"],
  },
  {
    icon: FaChild,
    title: "Children Policy",
    content: ["Children over 10 are welcome.", "14+ are considered adults."],
  },
  {
    icon: FaDog,
    title: "No Pets Allowed",
    content: ["Please do not bring pets."],
  },
  {
    icon: FaBan,
    title: "No Parties or Events",
  },
  {
    icon: FaSmokingBan,
    title: "Smoking is Not Allowed",
  },
  {
    icon: FaDoorClosed,
    title: "Before Leaving",
    content: ["Turn off A/C, lock windows and doors."],
  },
  {
    icon: FaTrashAlt,
    title: "Trash Disposal",
    content: ["Use the designated area inside the building."],
  },
  {
    icon: FaUtensils,
    title: "Kitchen Use",
    content: ["You may use all kitchen items.", "Please clean them before leaving."],
  },
];