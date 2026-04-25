import vivekShuklaImg from '../assets/vivek_shukla.jpeg';
import memberSpotlightImg from '../assets/member_spotlight_may26.jpeg';

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  endTime: string;
  location: string;
  locationType: 'in-person' | 'virtual' | 'hybrid';
  image: string;
  category: string;
  speaker?: string;
  speakerTitle?: string;
  attendees: number;
  maxAttendees: number;
  price: string;
  isPast: boolean;
  tags: string[];
}

export const eventsData: Event[] = [
  {
    id: 10,
    title: "Member Spotlight Series",
    description: "Join us for an engaging Know Your Member Session where members get the opportunity to present their business, share their journey, and build meaningful connections within the HEH community. Know what other members do, discover collaboration opportunities, explore potential collaborations, and build valuable business connections.",
    date: "2026-05-09",
    time: "16:00",
    endTime: "18:00",
    location: "Cowork Valley - Madhapur",
    locationType: "in-person",
    image: memberSpotlightImg,
    category: "Networking",
    speaker: "Mr. Naveen",
    speakerTitle: "Founder, Bujjly | Host",
    attendees: 0,
    maxAttendees: 50,
    price: "Exclusively for Official Members",
    isPast: false,
    tags: ["Member Spotlight", "Networking", "Know Your Member", "Collaboration"]
  },
  {
    id: 8,
    title: "Business Model Canvas Workshop",
    description: "Join this session to explore how the Business Model Canvas works and learn how each element helps shape a stronger business idea. This hands-on workshop will guide you through the essential building blocks of creating and refining your business model with practical examples and interactive exercises.",
    date: "2026-01-03",
    time: "15:30",
    endTime: "17:30",
    location: "JIC - Jubilee Hills International Club",
    locationType: "in-person",
    image: "https://d2z9497xp8xb12.cloudfront.net/prod-images/503549c1766484122561044a36e1-62d0-4cde-82df-6dd7e342e0d1.png",
    category: "Workshop",
    speaker: "Praveen Dorna",
    speakerTitle: "Founder - Founders First Network, Head Founder Programs, T-Hub",
    attendees: 28,
    maxAttendees: 40,
    price: "Limited Seats Available",
    isPast: true,
    tags: ["Business Model", "Workshop", "Strategy"]
  },
  {
    id: 9,
    title: "Expert Talk & Networking Session",
    description: "Join this expert talk session and gain insights from real business experience. Learn practical lessons from a founder's real journey, network with serious entrepreneurs and business leaders, and understand what works and what to avoid in business.",
    date: "2026-01-31",
    time: "15:30",
    endTime: "17:30",
    location: "AOF - Kukatpalli",
    locationType: "in-person",
    image: vivekShuklaImg,
    category: "Expert Talk",
    speaker: "Vivek Shukla",
    speakerTitle: "Founder & CEO, Nukkad Shops | Guest Speaker",
    attendees: 40,
    maxAttendees: 40,
    price: "Limited Seats",
    isPast: true,
    tags: ["Expert Talk", "Networking", "Founder Stories", "Business Insights"]
  },
  {
    id: 7,
    title: "Members Breakfast Meet",
    description: "Join us for a Productive Morning for Meaningful Networking, Business Ideations and Discuss Growth Opportunities with fellow Business Leaders and our Advisor. Key agenda includes: Members Introduction, Business Insights, Business Case Studies, HEH Roadmap, Open Discussion, and Networking.",
    date: "2025-12-06",
    time: "09:00",
    endTime: "11:00",
    location: "Jubilee Hills International Club",
    locationType: "in-person",
    image: "",
    category: "Networking",
    speaker: "Sanjay Enishetty",
    speakerTitle: "Chief Mentor & Advisor - HEH",
    attendees: 45,
    maxAttendees: 50,
    price: "₹500 for Members | ₹600 for Visitors",
    isPast: true,
    tags: ["Networking", "Breakfast Meet", "Business Insights"]
  }
];
