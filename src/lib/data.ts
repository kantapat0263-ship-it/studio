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
  { href: '#contact', label: 'Contact' },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Zap,
    title: 'Electrical & Communication',
    description: 'High-voltage systems, BAS, fire alarms, CCTV, access control, networks, and solar cells.',
  },
  {
    icon: ShieldCheck,
    title: 'Sanitary & Fire Protection',
    description: 'Water systems, drainage, sprinklers, compressed air, and gas piping for complete building safety.',
  },
  {
    icon: AirVent,
    title: 'Air Conditioning & Ventilation',
    description: 'Chilled water systems, split/package units, ventilation, and pressurization for optimal climate control.',
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
        title: 'Seagate Technology',
        description: 'Industrial factory project.',
        imagePlaceholderId: 'project-1'
    },
    {
        id: 'p2',
        title: 'Harrow International School',
        description: 'Educational building project.',
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
