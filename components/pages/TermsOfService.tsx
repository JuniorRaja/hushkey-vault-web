import React, { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { FileText, Users, Shield, AlertTriangle, Mail, Scale, CheckCircle, Lock, Database } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: FileText },
    { id: 'acceptance', title: 'Acceptance of Terms', icon: CheckCircle },
    { id: 'service', title: 'Description of Service', icon: Database },
    { id: 'responsibilities', title: 'User Responsibilities', icon: Users },
    { id: 'architecture', title: 'Zero-Knowledge Architecture', icon: Shield },
    { id: 'termination', title: 'Account Termination', icon: AlertTriangle },
    { id: 'liability', title: 'Limitation of Liability', icon: Scale },
    { id: 'contact', title: 'Contact Information', icon: Mail },
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
                  <h2 className="text-lg font-semibold text-white mb-4 font-display">Terms of Service</h2>
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
                    <FileText className="h-4 w-4 mr-2" />
                    Terms of Service
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                    Terms of <span className="gradient-text">Service</span>
                  </h1>
                  <p className="text-xl text-gray-400 max-w-3xl">
                    Understanding your rights and responsibilities when using HushKey Vault.
                    These terms ensure a secure and trustworthy relationship.
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
                        <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                          <FileText className="h-6 w-6 text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Terms Overview</h2>
                      </div>

                      <p className="text-xl text-gray-300 mb-6">
                        These Terms of Service ("Terms") govern your use of HushKey Vault, a secure password management service
                        provided by HushKey Security ("we," "us," or "our").
                      </p>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-6">
                        <div className="flex items-start">
                          <Scale className="h-6 w-6 text-primary-400 mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Legal Agreement</h3>
                            <p className="text-gray-300">
                              By accessing or using HushKey Vault, you enter into a binding legal agreement with us.
                              These terms protect both your rights and ours while ensuring secure service delivery.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Shield className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                          <div className="text-lg font-semibold text-white mb-2">Security First</div>
                          <div className="text-sm text-gray-400">Your data security is our top priority</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                          <div className="text-lg font-semibold text-white mb-2">User Rights</div>
                          <div className="text-sm text-gray-400">Clear rights and responsibilities</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Lock className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                          <div className="text-lg font-semibold text-white mb-2">Zero Knowledge</div>
                          <div className="text-sm text-gray-400">Privacy through cryptography</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Acceptance of Terms */}
                {activeSection === 'acceptance' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-green-600/20 rounded-lg mr-4">
                          <CheckCircle className="h-6 w-6 text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Acceptance of Terms</h2>
                      </div>

                      <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6 mb-6">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-emerald-300 font-semibold mb-1">Binding Agreement</div>
                            <div className="text-emerald-400/70 text-sm">
                              By accessing or using HushKey Vault, you agree to be bound by these Terms.
                              If you disagree with any part of these terms, you may not access the service.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 text-gray-300">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                            <span className="text-primary-400 font-bold text-sm">1</span>
                          </div>
                          <div>
                            <div className="font-semibold text-white">Account Creation</div>
                            <div className="text-sm text-gray-400">Creating an account signifies your acceptance of these terms</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                            <span className="text-primary-400 font-bold text-sm">2</span>
                          </div>
                          <div>
                            <div className="font-semibold text-white">Service Usage</div>
                            <div className="text-sm text-gray-400">Using any HushKey Vault features constitutes agreement</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                            <span className="text-primary-400 font-bold text-sm">3</span>
                          </div>
                          <div>
                            <div className="font-semibold text-white">Continued Use</div>
                            <div className="text-sm text-gray-400">Continuing to use the service after updates means acceptance</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Description of Service */}
                {activeSection === 'service' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                          <Database className="h-6 w-6 text-purple-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Description of Service</h2>
                      </div>

                      <p className="text-gray-300 text-lg mb-6">
                        HushKey Vault is a zero-knowledge password manager that provides enterprise-grade security
                        through client-side encryption and distributed architecture.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Shield className="h-5 w-5 text-emerald-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">Security Features</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• AES-256-GCM encryption</li>
                            <li>• Client-side key derivation</li>
                            <li>• Zero-knowledge architecture</li>
                            <li>• Military-grade cryptography</li>
                          </ul>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Database className="h-5 w-5 text-blue-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">Storage & Sync</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Secure data storage</li>
                            <li>• Cross-device synchronization</li>
                            <li>• Offline access capabilities</li>
                            <li>• Conflict-free replication</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mt-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Supported Data Types</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <Lock className="h-6 w-6 text-primary-400" />
                            </div>
                            <div className="text-sm text-gray-400">Passwords</div>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <FileText className="h-6 w-6 text-emerald-400" />
                            </div>
                            <div className="text-sm text-gray-400">Secure Notes</div>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <div className="h-6 w-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded"></div>
                            </div>
                            <div className="text-sm text-gray-400">Credit Cards</div>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <Users className="h-6 w-6 text-orange-400" />
                            </div>
                            <div className="text-sm text-gray-400">Identity Docs</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* User Responsibilities */}
                {activeSection === 'responsibilities' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-orange-600/20 rounded-lg mr-4">
                          <Users className="h-6 w-6 text-orange-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">User Responsibilities</h2>
                      </div>

                      <p className="text-gray-300 text-lg mb-6">
                        As a user of HushKey Vault, you are responsible for maintaining the security and proper use of your account.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Lock className="h-5 w-5 text-red-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">Critical Responsibilities</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Master password confidentiality</li>
                            <li>• Account security maintenance</li>
                            <li>• Legal compliance with laws</li>
                            <li>• Regular data backups</li>
                          </ul>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Shield className="h-5 w-5 text-emerald-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">Security Best Practices</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Use strong, unique passwords</li>
                            <li>• Enable two-factor authentication</li>
                            <li>• Keep software updated</li>
                            <li>• Monitor account activity</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-6 mt-6">
                        <div className="flex items-start">
                          <AlertTriangle className="h-5 w-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-amber-300 font-semibold mb-1">Important Notice</div>
                            <div className="text-amber-400/70 text-sm">
                              You are solely responsible for all activities that occur under your account.
                              Any breach of these responsibilities may result in service termination.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Zero-Knowledge Architecture */}
                {activeSection === 'architecture' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-red-600/20 rounded-lg mr-4">
                          <Shield className="h-6 w-6 text-red-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Zero-Knowledge Architecture</h2>
                      </div>

                      <p className="text-gray-300 text-lg mb-6">
                        HushKey operates on a true zero-knowledge principle, ensuring your data privacy even from us.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Lock className="h-8 w-8 text-primary-400 mx-auto mb-3" />
                          <div className="text-lg font-semibold text-white mb-2">We Can't See</div>
                          <div className="text-sm text-gray-400">No access to your encryption keys</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Shield className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                          <div className="text-lg font-semibold text-white mb-2">Client-Side</div>
                          <div className="text-sm text-gray-400">All crypto happens in your browser</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Database className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                          <div className="text-lg font-semibold text-white mb-2">Encrypted Storage</div>
                          <div className="text-sm text-gray-400">Only encrypted blobs on our servers</div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4">Technical Implementation</h3>
                        <div className="space-y-4 text-gray-300">
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold text-sm">1</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Key Derivation</div>
                              <div className="text-sm text-gray-400">PBKDF2 transforms your password into encryption keys</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold text-sm">2</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Client Encryption</div>
                              <div className="text-sm text-gray-400">AES-256-GCM encrypts data before transmission</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold text-sm">3</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Secure Storage</div>
                              <div className="text-sm text-gray-400">Encrypted data stored with access controls</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Account Termination */}
                {activeSection === 'termination' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-red-600/20 rounded-lg mr-4">
                          <AlertTriangle className="h-6 w-6 text-red-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Account Termination</h2>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-6">
                        <div className="flex items-start">
                          <AlertTriangle className="h-6 w-6 text-amber-400 mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Termination Rights</h3>
                            <p className="text-gray-300 mb-4">
                              You may terminate your account at any time through the account settings.
                              Upon termination, your encrypted data will be permanently deleted from our servers.
                            </p>
                            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                              <p className="text-red-300 text-sm m-0">
                                <strong>Warning:</strong> This action cannot be undone. All your data will be permanently lost.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <h3 className="text-lg font-semibold text-white mb-4">Termination Process</h3>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Access account settings</li>
                            <li>• Navigate to "Delete Account"</li>
                            <li>• Confirm deletion</li>
                            <li>• Immediate data removal</li>
                          </ul>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <h3 className="text-lg font-semibold text-white mb-4">What Happens Next</h3>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Account becomes inaccessible</li>
                            <li>• Encrypted data deleted</li>
                            <li>• Service access terminated</li>
                            <li>• No refunds for paid plans</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Limitation of Liability */}
                {activeSection === 'liability' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-gray-600/20 rounded-lg mr-4">
                          <Scale className="h-6 w-6 text-gray-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Limitation of Liability</h2>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-6">
                        <div className="flex items-start">
                          <Scale className="h-6 w-6 text-primary-400 mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Service Warranty</h3>
                            <p className="text-gray-300">
                              HushKey Vault is provided "as is" without warranties of any kind, either express or implied,
                              including but not limited to warranties of merchantability, fitness for a particular purpose,
                              and non-infringement.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <h3 className="text-lg font-semibold text-white mb-4">Liability Limitations</h3>
                          <div className="space-y-3 text-sm text-gray-400">
                            <div className="flex items-start">
                              <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages</span>
                            </div>
                            <div className="flex items-start">
                              <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span>Our total liability shall not exceed the amount paid by you for the service in the 12 months preceding the claim</span>
                            </div>
                            <div className="flex items-start">
                              <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span>We are not liable for data loss due to forgotten passwords or user error</span>
                            </div>
                            <div className="flex items-start">
                              <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span>Third-party service interruptions are not our responsibility</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Information */}
                {activeSection === 'contact' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-green-600/20 rounded-lg mr-4">
                          <Mail className="h-6 w-6 text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Contact Information</h2>
                      </div>

                      <p className="text-gray-300 text-lg mb-6">
                        For questions about these Terms of Service, please contact our legal team.
                      </p>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                        <div className="flex items-center mb-4">
                          <Mail className="h-5 w-5 text-primary-400 mr-3" />
                          <h3 className="text-lg font-semibold text-white">Legal Inquiries</h3>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                          Questions about these Terms, legal compliance, or service agreements
                        </p>
                        <a
                          href="mailto:contactme@prasannar.com"
                          className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          contactme@prasannar.com
                        </a>
                      </div>

                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mt-6">
                        <div className="flex items-start">
                          <Shield className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-blue-300 font-semibold mb-1">Response Policy</div>
                            <div className="text-blue-400/70 text-sm">
                              We aim to respond to all legal inquiries within 5 business days.
                              Complex matters may require additional time for proper review.
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
