import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ComparisonRow {
  feature: string;
  hushKey: boolean | string;
  lastPass: boolean | string;
  onePassword: boolean | string;
  bitwarden: boolean | string;
  hushKeyHighlight?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  HERO = 'hero',
  FEATURES = 'features',
  SECURITY = 'security',
  COMPARISON = 'comparison',
  PRICING = 'pricing',
  FAQ = 'faq'
}