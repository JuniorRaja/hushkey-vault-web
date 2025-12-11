import React, { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Shield, Database, Users, Mail, Eye, EyeOff, Lock, AlertTriangle, CheckCircle, Globe } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: Shield },
    { id: 'zero-knowledge', title: 'Zero-Knowledge Guarantee', icon: EyeOff },
    { id: 'data-collection', title: 'Data Collection', icon: Database },
    { id: 'third-parties', title: 'Third-Party Services', icon: Globe },
    { id: 'data-deletion', title: 'Data Deletion', icon: AlertTriangle },
    { id: 'contact', title: 'Contact Us', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <ScrollReveal animation="slide-in-left">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
                  <h2 className="text-lg font-semibold text-white mb-4 font-display">Privacy Policy</h2>
                  <nav className="space-y-2">
                    {sections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => setActiveSection(section.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                            activeSection === section.id
                              ? 'bg-primary-600/20 border border-primary-500/30 text-primary-300'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="text-sm font-medium">{section.title}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ScrollReveal animation="fade-in">
              <div className="space-y-12">

                {/* Header */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm font-medium mb-6">
                    <Shield className="h-4 w-4 mr-2" />
                    Privacy Policy
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                    Privacy <span className="gradient-text">Policy</span>
                  </h1>
                  <p className="text-xl text-gray-400 max-w-3xl">
                    Your privacy is our architecture. Learn how HushKey protects your data through
                    zero-knowledge encryption and minimal data collection.
                  </p>
                  <div className="mt-6 text-sm text-gray-500">
                    Last Updated: May 14, 2024
                  </div>
                </div>

                {/* Overview */}
                {activeSection === 'overview' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                          <Shield className="h-6 w-6 text-purple-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Privacy by Design</h2>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-6">
                        <div className="flex items-start">
                          <Lock className="h-6 w-6 text-emerald-400 mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Zero-Knowledge Architecture</h3>
                            <p className="text-gray-300">
                              At HushKey, privacy isn't just a policy—it's our core architecture. We designed our system
                              so that we physically cannot access your private data, even if we wanted to.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <EyeOff className="h-8 w-8 text-primary-400 mx-auto mb-3" />
                          <div className="text-lg font-semibold text-white mb-2">We Can't See</div>
                          <div className="text-sm text-gray-400">Your data appears as encrypted noise to our servers</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Shield className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                          <div className="text-lg font-semibold text-white mb-2">Client-Side Only</div>
                          <div className="text-sm text-gray-400">All encryption/decryption happens on your device</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Database className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                          <div className="text-lg font-semibold text-white mb-2">Minimal Data</div>
                          <div className="text-sm text-gray-400">We collect only what's necessary to operate the service</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Zero-Knowledge Guarantee */}
                {activeSection === 'zero-knowledge' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-red-600/20 rounded-lg mr-4">
                          <EyeOff className="h-6 w-6 text-red-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Zero-Knowledge Guarantee</h2>
                      </div>

                      <div className="mb-8">
                        <p className="text-xl text-gray-300 mb-6">
                          "Zero-Knowledge" means that HushKey (the service provider) knows nothing about the data you store.
                        </p>

                        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-6">
                          <div className="flex items-start">
                            <AlertTriangle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="text-red-300 font-semibold mb-1">Critical Security Principle</div>
                              <div className="text-red-400/70 text-sm">
                                Even in the event of a complete database breach, your data remains secure because it's encrypted
                                with keys only you possess.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">We Never See</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Your Master Password</li>
                            <li>• Your encryption keys</li>
                            <li>• Your stored passwords or data</li>
                            <li>• Any plaintext information</li>
                          </ul>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">What We Store</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Encrypted data blobs</li>
                            <li>• User account metadata</li>
                            <li>• Synchronization timestamps</li>
                            <li>• Anonymous usage statistics</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mt-6">
                        <h3 className="text-lg font-semibold text-white mb-4">How It Works</h3>
                        <div className="space-y-4 text-gray-300">
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold text-sm">1</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Client-Side Encryption</div>
                              <div className="text-sm text-gray-400">All sensitive data is encrypted in your browser before transmission</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold text-sm">2</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Server Storage</div>
                              <div className="text-sm text-gray-400">Only encrypted blobs are stored - they appear as random data to us</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold text-sm">3</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Client-Side Decryption</div>
                              <div className="text-sm text-gray-400">Data is only decrypted back to plaintext on your device</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Data Collection */}
                {activeSection === 'data-collection' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                          <Database className="h-6 w-6 text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Data Collection</h2>
                      </div>

                      <p className="text-gray-300 text-lg mb-6">
                        To operate the service securely and efficiently, we collect minimal metadata. We never collect or store your actual passwords or sensitive information.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Users className="h-5 w-5 text-primary-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">Account Info</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Email address (for identification)</li>
                            <li>• Hashed password verifier (SRP)</li>
                            <li>• Account creation timestamp</li>
                            <li>• Last login timestamp</li>
                          </ul>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <div className="h-5 w-5 bg-gradient-to-r from-blue-400 to-purple-400 rounded mr-3"></div>
                            <h3 className="text-lg font-semibold text-white">Payment Info</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Processed by Stripe (never stored)</li>
                            <li>• Subscription status</li>
                            <li>• Billing cycle information</li>
                            <li>• Anonymous usage metrics</li>
                          </ul>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Globe className="h-5 w-5 text-emerald-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">Device Info</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• IP address (30-day retention)</li>
                            <li>• Device type/browser</li>
                            <li>• Geographic region</li>
                            <li>• Security audit logs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Third-Party Services */}
                {activeSection === 'third-parties' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-emerald-600/20 rounded-lg mr-4">
                          <Globe className="h-6 w-6 text-emerald-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Third-Party Services</h2>
                      </div>

                      <p className="text-gray-300 text-lg mb-6">
                        We use a strictly limited set of third-party services, all chosen for their security practices and privacy commitments.
                      </p>

                      <div className="overflow-x-auto">
                        <table className="w-full bg-gray-800/50 rounded-lg border border-gray-700">
                          <thead>
                            <tr className="border-b border-gray-700">
                              <th className="text-left text-gray-400 py-4 px-6">Service</th>
                              <th className="text-left text-gray-400 py-4 px-6">Purpose</th>
                              <th className="text-left text-gray-400 py-4 px-6">Data Shared</th>
                              <th className="text-left text-gray-400 py-4 px-6">Location</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-300">
                            <tr className="border-b border-gray-700/50">
                              <td className="py-4 px-6">
                                <div className="flex items-center">
                                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                                  <span className="font-semibold">Supabase</span>
                                </div>
                              </td>
                              <td className="py-4 px-6">Database & Real-time Sync</td>
                              <td className="py-4 px-6">Encrypted blobs only</td>
                              <td className="py-4 px-6">USA / EU</td>
                            </tr>
                            <tr className="border-b border-gray-700/50">
                              <td className="py-4 px-6">
                                <div className="flex items-center">
                                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                                  <span className="font-semibold">Stripe</span>
                                </div>
                              </td>
                              <td className="py-4 px-6">Payment Processing</td>
                              <td className="py-4 px-6">Billing information</td>
                              <td className="py-4 px-6">Global</td>
                            </tr>
                            <tr>
                              <td className="py-4 px-6">
                                <div className="flex items-center">
                                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                                  <span className="font-semibold">Postmark</span>
                                </div>
                              </td>
                              <td className="py-4 px-6">Transactional Emails</td>
                              <td className="py-4 px-6">Email addresses only</td>
                              <td className="py-4 px-6">USA</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mt-6">
                        <div className="flex items-start">
                          <Shield className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-blue-300 font-semibold mb-1">Data Protection</div>
                            <div className="text-blue-400/70 text-sm">
                              All third-party services are SOC 2 compliant and undergo regular security audits.
                              We only share the minimum data necessary for service operation.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Data Deletion */}
                {activeSection === 'data-deletion' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-red-600/20 rounded-lg mr-4">
                          <AlertTriangle className="h-6 w-6 text-red-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Data Deletion</h2>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-6">
                        <div className="flex items-start">
                          <AlertTriangle className="h-6 w-6 text-amber-400 mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Account Deletion Process</h3>
                            <p className="text-gray-300 mb-4">
                              You can delete your account at any time from the Settings menu. This action is irreversible.
                            </p>
                            <div className="space-y-3 text-sm text-gray-400">
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                                <span>All encrypted vault data is immediately deleted from live database</span>
                              </div>
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                                <span>Backup data is removed within 30 days</span>
                              </div>
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                                <span>Account metadata is permanently erased</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <h3 className="text-lg font-semibold text-white mb-4">What Gets Deleted</h3>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Encrypted vault data</li>
                            <li>• Account metadata</li>
                            <li>• Sync history</li>
                            <li>• Device associations</li>
                            <li>• Usage statistics</li>
                          </ul>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <h3 className="text-lg font-semibold text-white mb-4">What Remains</h3>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Anonymous analytics (no PII)</li>
                            <li>• Regulatory compliance logs</li>
                            <li>• Service improvement metrics</li>
                            <li>• Publicly shared content (if any)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact */}
                {activeSection === 'contact' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-green-600/20 rounded-lg mr-4">
                          <Mail className="h-6 w-6 text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Contact Us</h2>
                      </div>

                      <p className="text-gray-300 text-lg mb-6">
                        For privacy concerns, GDPR data requests, or security reports, please contact our Data Protection team.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Mail className="h-5 w-5 text-primary-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">Privacy Inquiries</h3>
                          </div>
                          <p className="text-gray-400 text-sm mb-4">
                            Questions about data handling, GDPR requests, or privacy concerns
                          </p>
                          <a
                            href="mailto:contactme@prasannar.com"
                            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            contactme@prasannar.com
                          </a>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Shield className="h-5 w-5 text-emerald-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">Security Reports</h3>
                          </div>
                          <p className="text-gray-400 text-sm mb-4">
                            Report security vulnerabilities or suspicious activity
                          </p>
                          <a
                            href="mailto:contactme@prasannar.com"
                            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            contactme@prasannar.com
                          </a>
                        </div>
                      </div>

                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mt-6">
                        <div className="flex items-start">
                          <Eye className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-blue-300 font-semibold mb-1">Response Time</div>
                            <div className="text-blue-400/70 text-sm">
                              We aim to respond to all privacy-related inquiries within 48 hours.
                              Security reports receive priority handling within 24 hours.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
};
