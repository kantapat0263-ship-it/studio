import type { LucideIcon } from "lucide-react";
import { Zap, ShieldCheck, AirVent } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#affiliates', label: 'Our Group' },
  { href: '#contact', label: 'Contact' },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  details: string[];
};

export const services: Service[] = [
  {
    icon: Zap,
    title: 'Electrical and Communication System',
    details: [
        'High Voltage Electrical System',
        'Transformer',
        'Generator',
        'Distribution Board',
        'Electrical & Communication',
        'Telephone System',
        'Sound & Paging System',
        'Building Automation System',
        'Fire Alarm System',
        'Security System',
        'Closed Circuit Television System',
        'Master Antenna & Satellite Television System',
        'Lightning Protection & Grounding System',
        'Computer & Data Communication System',
        'Access Control',
        'Door Alarm',
        'Guard Tour',
        'Nurse Call',
        'Solar Cell Power Plant',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Sanitary and Fire Protection System',
    details: [
        'Cold Water System',
        'Soil Waste & Vent. Piping System',
        'Fire Protection System',
        'Sprinkler System',
        'Air Compressor & Gas Piping System',
    ],
  },
  {
    icon: AirVent,
    title: 'Air Conditioning and Ventilation System',
    details: [
        'Chilled Water System',
        'Split Type & Package Air Conditioning System',
        'Ventilation System',
        'Pressurization System',
        'Ducting System',
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  imagePlaceholderId: string;
};

export const projects: Project[] = [
    {
        id: 'p1',
        title: 'ARL CUSTOMER SERVICE IMPROVEMENT7 station',
        description: 'Customer service improvement project.',
        imagePlaceholderId: 'project-1'
    },
    {
        id: 'p2',
        title: 'คาราบาว APM ประกอบธุรกิจผลิตและจัดหาบรรจุภัณฑ์',
        description: 'Packaging manufacturing project.',
        imagePlaceholderId: 'project-2'
    },
    {
        id: 'p3',
        title: 'The Cove Condominium Pattaya',
        description: 'Hotel & Condominium project.',
        imagePlaceholderId: 'project-3'
    },
    {
        id: 'p4',
        title: 'Central Rama II',
        description: 'Shopping mall project.',
        imagePlaceholderId: 'project-4'
    },
    {
        id: 'p5',
        title: 'IPST',
        description: 'Active government project.',
        imagePlaceholderId: 'project-5'
    },
    {
        id: 'p6',
        title: 'Panyapiwat Institute of Management',
        description: 'Educational building project.',
        imagePlaceholderId: 'project-6'
    }
];

export type Affiliate = {
  name: string;
  description: string[];
};

export const affiliates: Affiliate[] = [
    {
        name: 'P-ADVANCED CONSTRUCTION CO.,LTD.',
        description: [
            'Building Work',
            'High Rise Building Work',
            'Main Factory Work',
            'Building Renovation Work',
            'Civil work',
            'Earth Work and Site Installation work',
            'Demolition Work',
        ]
    },
    {
        name: 'PLANET ENGINEERING CO.,LTD.',
        description: ['Electrical system installation']
    }
];
