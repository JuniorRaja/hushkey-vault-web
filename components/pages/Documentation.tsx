import React, { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { BookOpen, Shield, Key, Database, Wifi, AlertTriangle, CheckCircle, Code, FileText, Users, Zap, Globe } from 'lucide-react';

export const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    { id: 'getting-started', title: 'Getting Started', icon: BookOpen },
    { id: 'security', title: 'Security & Encryption', icon: Shield },
    { id: 'features', title: 'Advanced Features', icon: Zap },
    { id: 'sync', title: 'Offline Sync', icon: Wifi },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: AlertTriangle },
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
                  <h2 className="text-lg font-semibold text-white mb-4 font-display">Documentation</h2>
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
                    <BookOpen className="h-4 w-4 mr-2" />
                    Documentation
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                    HushKey Vault <span className="gradient-text">Documentation</span>
                  </h1>
                  <p className="text-xl text-gray-400 max-w-3xl">
                    Comprehensive guides to help you secure, organize, and manage your digital identity with HushKey Vault.
                  </p>
                </div>

                {/* Getting Started */}
                {activeSection === 'getting-started' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-primary-600/20 rounded-lg mr-4">
                          <BookOpen className="h-6 w-6 text-primary-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Getting Started</h2>
                      </div>
                      <p className="text-gray-300 text-lg mb-6">
                        HushKey Vault is designed to be intuitive while offering powerful features for power users.
                        Getting started takes less than 2 minutes.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Key className="h-5 w-5 text-primary-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">1. Create Your Master Key</h3>
                          </div>
                          <p className="text-gray-400 text-sm mb-4">
                            Your Master Password is used to derive the encryption key (PBKDF2-HMAC-SHA256) that secures your entire vault.
                          </p>
                          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
                            <div className="flex items-start">
                              <AlertTriangle className="h-5 w-5 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                              <p className="text-amber-200 text-sm m-0">
                                <strong>Important:</strong> We are a zero-knowledge platform. We do not store your Master Password.
                                If you lose it, we cannot recover your data.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <FileText className="h-5 w-5 text-emerald-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">2. Add Your First Item</h3>
                          </div>
                          <p className="text-gray-400 text-sm mb-4">
                            Click the <code className="bg-gray-700 px-2 py-1 rounded text-primary-300 text-xs">+</code> button to add items.
                            HushKey supports over 12 item types.
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              Login credentials with TOTP
                            </div>
                            <div className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              Credit/debit card information
                            </div>
                            <div className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              Identity documents
                            </div>
                            <div className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              Secure encrypted notes
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Security & Encryption */}
                {activeSection === 'security' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-red-600/20 rounded-lg mr-4">
                          <Shield className="h-6 w-6 text-red-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Security & Encryption</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <div className="text-3xl font-mono font-bold text-primary-400 mb-2">AES-256-GCM</div>
                          <div className="text-sm text-gray-400">Encryption Standard</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <div className="text-3xl font-mono font-bold text-emerald-400 mb-2">PBKDF2</div>
                          <div className="text-sm text-gray-400">Key Derivation</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <div className="text-3xl font-mono font-bold text-blue-400 mb-2">Zero-Knowledge</div>
                          <div className="text-sm text-gray-400">Architecture</div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4">Zero-Knowledge Guarantee</h3>
                        <p className="text-gray-300 mb-4">
                          HushKey operates on a true zero-knowledge architecture. This means:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              We never see your Master Password
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              We cannot access your encryption keys
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              All data is encrypted client-side
                            </li>
                          </ul>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              Data appears as random noise to us
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              No backdoors or master keys exist
                            </li>
                            <li className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              Open source for transparency
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Advanced Features */}
                {activeSection === 'features' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                          <Zap className="h-6 w-6 text-purple-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Advanced Features</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Shield className="h-5 w-5 text-primary-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">Guardian Scanner</h3>
                          </div>
                          <p className="text-gray-400 text-sm mb-4">
                            Runs locally on your device to analyze vault security:
                          </p>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Weak password detection</li>
                            <li>• Password reuse analysis</li>
                            <li>• Compromised credential checking</li>
                            <li>• Entropy analysis</li>
                          </ul>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Code className="h-5 w-5 text-emerald-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">12+ Item Types</h3>
                          </div>
                          <p className="text-gray-400 text-sm mb-4">
                            Comprehensive support for all your digital assets:
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                            <div>• Login Credentials</div>
                            <div>• Credit Cards</div>
                            <div>• Identity Documents</div>
                            <div>• Secure Notes</div>
                            <div>• API Keys</div>
                            <div>• SSH Keys</div>
                            <div>• Software Licenses</div>
                            <div>• Bank Accounts</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Offline Sync */}
                {activeSection === 'sync' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                          <Wifi className="h-6 w-6 text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Offline Synchronization</h2>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-6">
                        <div className="flex items-center mb-4">
                          <Database className="h-5 w-5 text-primary-400 mr-3" />
                          <h3 className="text-lg font-semibold text-white">How It Works</h3>
                        </div>
                        <div className="space-y-4 text-gray-300">
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold text-sm">1</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Local Storage</div>
                              <div className="text-sm text-gray-400">Full encrypted vault stored in IndexedDB on your device</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold text-sm">2</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Offline Changes</div>
                              <div className="text-sm text-gray-400">Changes queued when offline, synced when connection restored</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold text-sm">3</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Conflict Resolution</div>
                              <div className="text-sm text-gray-400">Vector clock algorithm ensures data consistency</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4 text-center">
                          <Globe className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                          <div className="text-emerald-300 font-semibold">Always Available</div>
                          <div className="text-emerald-400/70 text-sm">Work anywhere, anytime</div>
                        </div>
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 text-center">
                          <Wifi className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                          <div className="text-blue-300 font-semibold">Auto Sync</div>
                          <div className="text-blue-400/70 text-sm">Seamless background sync</div>
                        </div>
                        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 text-center">
                          <Shield className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                          <div className="text-purple-300 font-semibold">Conflict Free</div>
                          <div className="text-purple-400/70 text-sm">Smart resolution system</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Troubleshooting */}
                {activeSection === 'troubleshooting' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-amber-600/20 rounded-lg mr-4">
                          <AlertTriangle className="h-6 w-6 text-amber-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Troubleshooting</h2>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Wifi className="h-5 w-5 text-blue-400 mr-3" />
                            Sync Issues
                          </h3>
                          <div className="space-y-3 text-gray-300">
                            <div className="flex items-start">
                              <div className="w-6 h-6 bg-emerald-600/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                              </div>
                              <div>
                                <div className="font-semibold text-emerald-300">Connected</div>
                                <div className="text-sm text-gray-400">Pulsating green dot indicates active connection</div>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              </div>
                              <div>
                                <div className="font-semibold text-red-300">Offline</div>
                                <div className="text-sm text-gray-400">Red dot indicates offline mode - changes will sync when connected</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Key className="h-5 w-5 text-primary-400 mr-3" />
                            Password Recovery
                          </h3>
                          <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                            <div className="flex items-start">
                              <AlertTriangle className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-red-200 text-sm m-0">
                                  <strong>Important:</strong> HushKey cannot recover your Master Password or vault data.
                                  We never store this information due to our zero-knowledge architecture.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <Users className="h-5 w-5 text-emerald-400 mr-3" />
                            Getting Help
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <a href="https://github.com/JuniorRaja/hushkey-vault-app" className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors">
                              <div className="flex items-center">
                                <div className="p-2 bg-gray-600 rounded-lg mr-3">
                                  <Code className="h-5 w-5 text-gray-300" />
                                </div>
                                <div>
                                  <div className="font-semibold text-white">GitHub Issues</div>
                                  <div className="text-sm text-gray-400">Report bugs or request features</div>
                                </div>
                              </div>
                            </a>
                            <a href="mailto:contactme@prasannar.com" className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors">
                              <div className="flex items-center">
                                <div className="p-2 bg-gray-600 rounded-lg mr-3">
                                  <Users className="h-5 w-5 text-gray-300" />
                                </div>
                                <div>
                                  <div className="font-semibold text-white">Contact Support</div>
                                  <div className="text-sm text-gray-400">Get help from our team</div>
                                </div>
                              </div>
                            </a>
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
