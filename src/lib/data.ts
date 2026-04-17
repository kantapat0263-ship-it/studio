import type { LucideIcon } from "lucide-react";
import { Zap, Droplets, AirVent, Landmark } from 'lucide-react';

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
    title: 'Electrical Systems',
    description: 'Comprehensive electrical contracting for new construction, renovations, and maintenance, from high-voltage to data systems.',
  },
  {
    icon: Droplets,
    title: 'Plumbing & Sanitary',
    description: 'Expert installation and maintenance of plumbing and sanitary systems, ensuring efficient water supply and drainage solutions.',
  },
  {
    icon: AirVent,
    title: 'Air Conditioning',
    description: 'Design, installation, and servicing of HVAC systems for optimal comfort and air quality in any environment.',
  },
  {
    icon: Landmark,
    title: 'Structural Works',
    description: 'Robust structural engineering and construction services, from foundation to finish, ensuring project integrity and durability.',
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
        title: 'Commercial Tower Electrical',
        description: 'Full-scale electrical system installation for a 30-story commercial building.',
        imagePlaceholderId: 'project-1'
    },
    {
        id: 'p2',
        title: 'Industrial HVAC Overhaul',
        description: 'Complete replacement and modernization of a large factory\'s HVAC system for improved efficiency.',
        imagePlaceholderId: 'project-2'
    },
    {
        id: 'p3',
        title: 'Residential Complex Structure',
        description: 'Managed all structural work for a multi-unit housing development from the ground up.',
        imagePlaceholderId: 'project-3'
    },
    {
        id: 'p4',
        title: 'Hospital Plumbing System',
        description: 'Designed and installed a complex, high-reliability plumbing system for a new medical facility.',
        imagePlaceholderId: 'project-4'
    }
];

export const affiliates = [
    { name: 'LOTUS AAA', description: 'Specializing in advanced architectural acoustics.' },
    { name: 'LOTUS SMART', description: 'Pioneering smart building and IoT integration.' },
    { name: 'LOTUS ENERGY', description: 'Focused on renewable energy solutions and green construction.' },
]
