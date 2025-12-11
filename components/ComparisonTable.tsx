import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';
import { SectionId, ComparisonRow } from '../types';
import { ScrollReveal } from './ui/ScrollReveal';

const features: ComparisonRow[] = [
  { feature: 'Zero-Knowledge Architecture', hushKey: true, lastPass: true, onePassword: true, bitwarden: true },
  { feature: 'True Offline Mode', hushKey: true, lastPass: false, onePassword: 'Limited', bitwarden: 'Limited', hushKeyHighlight: true },
  { feature: 'Advanced Security Scanner', hushKey: true, lastPass: 'Basic', onePassword: true, bitwarden: 'Basic', hushKeyHighlight: true },
  { feature: '12+ Item Types', hushKey: true, lastPass: 'Limited', onePassword: true, bitwarden: 'Limited' },
  { feature: 'File Attachments (Free)', hushKey: true, lastPass: false, onePassword: false, bitwarden: false, hushKeyHighlight: true },
  { feature: 'Self-Hostable', hushKey: 'Soon', lastPass: false, onePassword: false, bitwarden: true },
  { feature: 'Cost per Month', hushKey: '$0.00', lastPass: '$3.00', onePassword: '$3.00', bitwarden: '$0.00', hushKeyHighlight: true },
];

const renderCell = (value: boolean | string) => {
  if (value === true) return <Check className="h-5 w-5 text-emerald-500 mx-auto transform transition-transform duration-300 group-hover/row:scale-110" />;
  if (value === false) return <X className="h-5 w-5 text-red-500 mx-auto opacity-50" />;
  if (value === 'Limited' || value === 'Basic') return <div className="flex items-center justify-center text-amber-400"><AlertTriangle className="h-4 w-4 mr-1" /> {value}</div>;
  return <span className="font-medium">{value}</span>;
};

export const ComparisonTable: React.FC = () => {
  return (
    <section id={SectionId.COMPARISON} className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose HushKey?</h2>
            <p className="text-gray-400">See how we stack up against the industry giants.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={200}>
          <div className="overflow-x-auto rounded-xl border border-gray-800 shadow-2xl shadow-black/40">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-800">
                  <th className="py-6 px-6 text-left text-gray-400 font-medium w-1/4">Feature</th>
                  <th className="py-6 px-6 text-white font-bold text-lg w-1/5 bg-primary-900/10 border-t-2 border-primary-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none"></div>
                    HushKey Vault
                  </th>
                  <th className="py-6 px-6 text-gray-300 font-medium w-1/5">LastPass</th>
                  <th className="py-6 px-6 text-gray-300 font-medium w-1/5">1Password</th>
                  <th className="py-6 px-6 text-gray-300 font-medium w-1/5">Bitwarden</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 bg-gray-900/40">
                {features.map((row, idx) => (
                  <tr key={idx} className="group/row hover:bg-gray-800/50 transition-colors duration-200">
                    <td className="py-4 px-6 text-left text-gray-300 font-medium group-hover/row:text-white transition-colors">{row.feature}</td>
                    <td className={`py-4 px-6 transition-colors duration-300 ${row.hushKeyHighlight ? 'text-emerald-400 font-bold bg-primary-900/5 group-hover/row:bg-primary-900/10' : 'text-gray-200 bg-primary-900/5 group-hover/row:bg-primary-900/10'}`}>
                      {renderCell(row.hushKey)}
                    </td>
                    <td className="py-4 px-6 text-gray-400">{renderCell(row.lastPass)}</td>
                    <td className="py-4 px-6 text-gray-400">{renderCell(row.onePassword)}</td>
                    <td className="py-4 px-6 text-gray-400">{renderCell(row.bitwarden)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};