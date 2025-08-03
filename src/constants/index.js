import { checkus_agoda, checkus_airbnb, checkus_bookingcom, gallery_img1, gallery_img10, gallery_img11, gallery_img12, gallery_img13, gallery_img14, gallery_img15, gallery_img16, gallery_img17, gallery_img18, gallery_img19, gallery_img2, gallery_img20, gallery_img21, gallery_img22, gallery_img3, gallery_img4, gallery_img5, gallery_img6, gallery_img7, gallery_img8, gallery_img9, LogoIconMain } from '../assets/img';
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


export const testimonials = [
  {
    name: "Johnny",
    date: "May 2025",
    platform: "Airbnb",
    logo: checkus_airbnb,
    rating: 5,
    review: "I had an absolutely wonderful stay at Rommel’s place! From the moment I arrived, I felt right at home. The place was exceptionally clean and comfortable, with a level of cleanliness that truly sets it apart. I was especially impressed by the weekly cleaning service – a rare find in an Airbnb! The security of the place made me feel at ease, and the location was perfect – close to everything I needed. Rommel is a fantastic host, ensuring that everything was perfect for my stay. By far the best Airbnb experience I’ve had. Highly recommend!"
  },
  {
    name: "Martha",
    date: "August 2024",
    platform: "Airbnb",
    logo: checkus_airbnb,
    rating: 5,
    review: "Place was very comfy and clean. Bed sheets and pillows smelled good, and amenities were complete. It had everything we needed, plus the host was very kind and responsive! I liked the privacy and quietness of the place, really recommend booking this place 😁"
  },
  {
    name: "Camille",
    date: "April 2025",
    platform: "Airbnb",
    logo: checkus_airbnb,
    rating: 5,
    review: "Perfect location, walking distance to famous restaurants. Loved the place!"
  },
  {
    name: "David",
    date: "September 2024",
    platform: "Airbnb",
    logo: checkus_airbnb,
    rating: 5,
    review: "This was my second time staying here. Clean and matches the pictures and description.  Will consider staying again next time I am in town."
  },
  {
    name: "Mishell",
    date: "August 2023",
    platform: "Airbnb",
    logo: checkus_airbnb,
    rating: 5,
    review: "Highly recommend this place and Rommel, it was a great location restaurants across the road and others in walkable distance. Also had a little store across the road. Very convenient location not too far way from the main centre of Dumaguete was easy to find trike driver. The unit was amazing , clean and comfortable . Highly reccomend to stay there when visiting Dumaguete. Rommel was amazing very responsive and accomadating! . Will definitely stay again. Thank you Rommel 😊"
  },
  {
    name: "Peter",
    date: "April  2024",
    platform: "Booking.com",
    logo: checkus_bookingcom,
    rating: 9.0,
    review: "Clean and we were very well helped by the lady who handed the keys over to us."
  },
  {
    name: "Michael",
    date: "April  2024",
    platform: "Booking.com",
    logo: checkus_bookingcom,
    rating: 9.0,
    review: "comfortable & clean"
  },
  {
    name: "David",
    date: "August 2024",
    platform: "Booking.com",
    logo: checkus_bookingcom,
    rating: 10.0,
    review: "Good value and good location"
  },
  {
    name: "Maurice",
    date: "May 2024",
    platform: "Booking.com",
    logo: checkus_bookingcom,
    rating: 10.0,
    review: "Great"
  },
  {
    name: "Mary",
    date: "March 2024",
    platform: "Booking.com",
    logo: checkus_bookingcom,
    rating: 10.0,
    review: "Cozy clean condo unit close to everything you need (restaurants/shops in the center)"
  },
  {
    name: "marie",
    date: "April 2025",
    platform: "Agoda",
    logo: checkus_agoda,
    rating: 10,
    review: "Overall experience 10/10. The owner is super accommodating."
  },
  {
    name: "shaurya",
    date: "November 2024",
    platform: "Agoda",
    logo: checkus_agoda,
    rating: 10,
    review: "Great little condo excellent location Value for money A bit over the top with security who keep checking with you as to whether u reside there"
  },
  {
    name: "shaurya",
    date: "May 2023",
    platform: "Agoda",
    logo: checkus_agoda,
    rating: 10,
    review: "Rommel and Jephat, we’re beyond all expectations. Great hosts great people. After having another place drop us without reason, they went above and beyond to help us and out group. I recommend them to anyone going to Dumaguete."
  },
];

export const galleryImgList = [gallery_img1, gallery_img2, gallery_img3, gallery_img4, gallery_img5, gallery_img6, gallery_img7, gallery_img8, gallery_img9, gallery_img10,
  gallery_img11, gallery_img12, gallery_img13, gallery_img14, gallery_img15, gallery_img16, gallery_img17, gallery_img18, gallery_img19, gallery_img20, gallery_img21, gallery_img22
]