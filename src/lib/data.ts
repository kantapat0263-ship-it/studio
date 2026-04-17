import type { LucideIcon } from "lucide-react";
import { Zap, ShieldCheck, AirVent } from "lucide-react";

export type NavLink = {
  href: string;
  label: { en: string; th: string };
};

export const navLinks: NavLink[] = [
  { href: "#home", label: { en: "Home", th: "หน้าหลัก" } },
  { href: "#about", label: { en: "About Us", th: "เกี่ยวกับเรา" } },
  { href: "#services", label: { en: "Services", th: "บริการ" } },
  { href: "#projects", label: { en: "Projects", th: "ผลงาน" } },
  { href: "#affiliates", label: { en: "Our Group", th: "บริษัทในเครือ" } },
  { href: "#contact", label: { en: "Contact", th: "ติดต่อเรา" } },
];

export type Service = {
  icon: LucideIcon;
  title: { en: string; th: string };
  details: string[];
};

export const services: Service[] = [
  {
    icon: Zap,
    title: {
      en: "Electrical and Communication System",
      th: "ระบบไฟฟ้าและการสื่อสาร",
    },
    details: [
      "High Voltage Electrical System",
      "Transformer",
      "Generator",
      "Distribution Board",
      "Electrical & Communication",
      "Telephone System",
      "Sound & Paging System",
      "Building Automation System",
      "Fire Alarm System",
      "Security System",
      "Closed Circuit Television System",
      "Master Antenna & Satellite Television System",
      "Lightning Protection & Grounding System",
      "Computer & Data Communication System",
      "Access Control",
      "Door Alarm",
      "Guard Tour",
      "Nurse Call",
      "Solar Cell Power Plant",
    ],
  },
  {
    icon: ShieldCheck,
    title: {
      en: "Sanitary and Fire Protection System",
      th: "ระบบสุขาภิบาลและป้องกันอัคคีภัย",
    },
    details: [
      "Cold Water System",
      "Soil Waste & Vent. Piping System",
      "Fire Protection System",
      "Sprinkler System",
      "Air Compressor & Gas Piping System",
    ],
  },
  {
    icon: AirVent,
    title: {
      en: "Air Conditioning and Ventilation System",
      th: "ระบบปรับอากาศและระบายอากาศ",
    },
    details: [
      "Chilled Water System",
      "Split Type & Package Air Conditioning System",
      "Ventilation System",
      "Pressurization System",
      "Ducting System",
    ],
  },
];

export type Project = {
  id: string;
  title: { en: string; th: string };
  description: { en: string; th: string };
  imagePlaceholderId: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: {
      en: "ARL CUSTOMER SERVICE IMPROVEMENT 7 station",
      th: "โครงการปรับปรุงการบริการลูกค้า ARL 7 สถานี",
    },
    description: {
      en: "Customer service improvement project.",
      th: "โครงการปรับปรุงการบริการลูกค้า",
    },
    imagePlaceholderId: "project-1",
  },
  {
    id: "p2",
    title: {
      en: "Carabao APM Packaging",
      th: "คาราบาว APM ประกอบธุรกิจผลิตและจัดหาบรรจุภัณฑ์",
    },
    description: {
      en: "Packaging manufacturing project.",
      th: "โครงการผลิตและจัดหาบรรจุภัณฑ์",
    },
    imagePlaceholderId: "project-2",
  },
  {
    id: "p3",
    title: {
      en: "The Cove Condominium Pattaya",
      th: "เดอะโคฟ คอนโดมิเนียม พัทยา",
    },
    description: {
      en: "Hotel & Condominium project.",
      th: "โครงการโรงแรมและคอนโดมิเนียม",
    },
    imagePlaceholderId: "project-3",
  },
  {
    id: "p4",
    title: { en: "Central Rama II", th: "เซ็นทรัล พระราม 2" },
    description: {
      en: "Shopping mall project.",
      th: "โครงการห้างสรรพสินค้า",
    },
    imagePlaceholderId: "project-4",
  },
  {
    id: "p5",
    title: {
      en: "IPST",
      th: "สถาบันส่งเสริมการสอนวิทยาศาสตร์และเทคโนโลยี (สสวท.)",
    },
    description: { en: "Active government project.", th: "โครงการของรัฐบาล" },
    imagePlaceholderId: "project-5",
  },
  {
    id: "p6",
    title: {
      en: "Panyapiwat Institute of Management",
      th: "สถาบันการจัดการปัญญาภิวัฒน์",
    },
    description: {
      en: "Educational building project.",
      th: "โครงการอาคารเรียน",
    },
    imagePlaceholderId: "project-6",
  },
];

export type Affiliate = {
  name: string;
  description: { en: string[]; th: string[] };
};

export const affiliates: Affiliate[] = [
  {
    name: "P-ADVANCED CONSTRUCTION CO.,LTD.",
    description: {
      en: [
        "Building Work",
        "High Rise Building Work",
        "Main Factory Work",
        "Building Renovation Work",
        "Civil work",
        "Earth Work and Site Installation work",
        "Demolition Work",
      ],
      th: [
        "งานอาคาร",
        "งานอาคารสูง",
        "งานโรงงาน",
        "งานปรับปรุงอาคาร",
        "งานโยธา",
        "งานดินและติดตั้งไซต์",
        "งานรื้อถอน",
      ],
    },
  },
  {
    name: "PLANET ENGINEERING CO.,LTD.",
    description: {
      en: ["Electrical system installation"],
      th: ["ติดตั้งระบบไฟฟ้า"],
    },
  },
];
