import React, { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Shield, Lock, Key, Database, Globe, CheckCircle, AlertTriangle, FileText, Users, Zap, Eye, Code } from 'lucide-react';

export const SecurityWhitepaper: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: Shield },
    { id: 'threat-model', title: 'Threat Model', icon: AlertTriangle },
    { id: 'cryptography', title: 'Cryptographic Primitives', icon: Lock },
    { id: 'architecture', title: 'Encryption Architecture', icon: Key },
    { id: 'authentication', title: 'Client-Server Auth', icon: Users },
    { id: 'compliance', title: 'Audit & Compliance', icon: CheckCircle },
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
                  <h2 className="text-lg font-semibold text-white mb-4 font-display">Security Whitepaper</h2>
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
                    Security Whitepaper
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                    Security <span className="gradient-text">Whitepaper</span>
                  </h1>
                  <p className="text-xl text-gray-400 max-w-3xl">
                    A technical deep-dive into the cryptographic primitives and protocols that power HushKey Vault.
                    Understanding our security architecture and threat model.
                  </p>
                  <div className="mt-6 text-sm text-gray-500">
                    Version 2.1 - Last Updated: May 14, 2024
                  </div>
                </div>

                {/* Overview */}
                {activeSection === 'overview' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                          <Shield className="h-6 w-6 text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Security Overview</h2>
                      </div>

                      <p className="text-xl text-gray-300 mb-6">
                        HushKey Vault implements military-grade encryption with a zero-knowledge architecture.
                        This document details our cryptographic foundations and security guarantees.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Lock className="h-8 w-8 text-primary-400 mx-auto mb-3" />
                          <div className="text-2xl font-mono font-bold text-primary-400 mb-2">AES-256</div>
                          <div className="text-sm text-gray-400">Encryption Standard</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Key className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                          <div className="text-2xl font-mono font-bold text-emerald-400 mb-2">PBKDF2</div>
                          <div className="text-sm text-gray-400">Key Derivation</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Eye className="h-8 w-8 text-red-400 mx-auto mb-3" />
                          <div className="text-2xl font-mono font-bold text-red-400 mb-2">Zero-Knowledge</div>
                          <div className="text-sm text-gray-400">Architecture</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Shield className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                          <div className="text-2xl font-mono font-bold text-purple-400 mb-2">SOC2</div>
                          <div className="text-sm text-gray-400">Compliant</div>
                        </div>
                      </div>

                      <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-emerald-300 font-semibold mb-1">Security Guarantee</div>
                            <div className="text-emerald-400/70 text-sm">
                              HushKey Vault protects your data against database breaches, network interception,
                              and malicious insiders through client-side encryption and zero-knowledge architecture.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Threat Model */}
                {activeSection === 'threat-model' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-red-600/20 rounded-lg mr-4">
                          <AlertTriangle className="h-6 w-6 text-red-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Threat Model</h2>
                      </div>

                      <p className="text-gray-300 text-lg mb-6">
                        HushKey is designed to withstand sophisticated attacks. Our threat model considers
                        the most dangerous scenarios an attacker could attempt.
                      </p>

                      <div className="space-y-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Database className="h-5 w-5 text-red-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">Database Breach</h3>
                          </div>
                          <p className="text-gray-400 mb-4">
                            An attacker gains full read access to our production database through SQL injection,
                            insider access, or infrastructure compromise.
                          </p>
                          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                            <div className="flex items-start">
                              <Shield className="h-5 w-5 text-red-400 mr-2 mt-0.5" />
                              <div>
                                <div className="text-red-300 font-semibold mb-1">Protection</div>
                                <div className="text-red-400/70 text-sm">All data is encrypted client-side. Attackers see only ciphertext.</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Globe className="h-5 w-5 text-orange-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">Network Interception (MITM)</h3>
                          </div>
                          <p className="text-gray-400 mb-4">
                            An attacker intercepts and modifies traffic between client and server using
                            DNS poisoning, BGP hijacking, or compromised TLS certificates.
                          </p>
                          <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                            <div className="flex items-start">
                              <Lock className="h-5 w-5 text-orange-400 mr-2 mt-0.5" />
                              <div>
                                <div className="text-orange-300 font-semibold mb-1">Protection</div>
                                <div className="text-orange-400/70 text-sm">End-to-end encryption with TLS 1.3 and authenticated encryption.</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Users className="h-5 w-5 text-purple-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">Malicious Insider</h3>
                          </div>
                          <p className="text-gray-400 mb-4">
                            A HushKey employee or contractor with legitimate access attempts to access user data
                            through backdoors, privilege escalation, or direct database access.
                          </p>
                          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                            <div className="flex items-start">
                              <Eye className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                              <div>
                                <div className="text-purple-300 font-semibold mb-1">Protection</div>
                                <div className="text-purple-400/70 text-sm">Zero-knowledge architecture - we physically cannot access user data.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mt-6">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-blue-300 font-semibold mb-1">Security Conclusion</div>
                            <div className="text-blue-400/70 text-sm">
                              In all three threat scenarios, attackers retrieve only encrypted blobs that are
                              computationally infeasible to decrypt without the user's Master Password.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Cryptographic Primitives */}
                {activeSection === 'cryptography' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                          <Lock className="h-6 w-6 text-purple-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Cryptographic Primitives</h2>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-6">
                        <div className="flex items-start">
                          <Code className="h-6 w-6 text-primary-400 mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Web Crypto API Standard</h3>
                            <p className="text-gray-300">
                              We rely exclusively on standard, peer-reviewed algorithms provided by the
                              <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API" className="text-primary-400 hover:underline ml-1">
                                Web Crypto API
                              </a>.
                              We do not implement custom cryptographic primitives.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Key className="h-5 w-5 text-emerald-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">Key Derivation</h3>
                          </div>
                          <div className="mb-4">
                            <div className="text-2xl font-mono font-bold text-emerald-400 mb-2">PBKDF2-HMAC-SHA256</div>
                            <div className="text-sm text-gray-400">Industry-standard password-based key derivation</div>
                          </div>
                          <div className="space-y-2 text-sm text-gray-400">
                            <div className="flex justify-between">
                              <span>Iterations:</span>
                              <span className="text-emerald-300 font-mono">600,000</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Salt:</span>
                              <span className="text-emerald-300 font-mono">32 bytes</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Output:</span>
                              <span className="text-emerald-300 font-mono">256-bit KEK</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Shield className="h-5 w-5 text-blue-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">Data Encryption</h3>
                          </div>
                          <div className="mb-4">
                            <div className="text-2xl font-mono font-bold text-blue-400 mb-2">AES-256-GCM</div>
                            <div className="text-sm text-gray-400">Authenticated encryption with Galois/Counter Mode</div>
                          </div>
                          <div className="space-y-3 text-sm text-gray-400">
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              <span><strong>Confidentiality:</strong> AES-256 prevents unauthorized reading</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              <span><strong>Integrity:</strong> GCM provides authentication tags</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              <span><strong>AEAD:</strong> Authenticated Encryption with Associated Data</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Encryption Architecture */}
                {activeSection === 'architecture' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-orange-600/20 rounded-lg mr-4">
                          <Key className="h-6 w-6 text-orange-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Encryption Architecture</h2>
                      </div>

                      <p className="text-gray-300 text-lg mb-6">
                        HushKey uses a hierarchical key structure (encryption onion) that enables advanced features
                        like password changing and secure sharing without re-encrypting the entire vault.
                      </p>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-6">
                        <h3 className="text-lg font-semibold text-white mb-4">The Encryption Onion</h3>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold">1</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Master Password</div>
                              <div className="text-sm text-gray-400">User's primary password → Account Key (PBKDF2)</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold">2</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Account Key</div>
                              <div className="text-sm text-gray-400">Unlocks → Vault Key (stored wrapped on server)</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold">3</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Vault Key</div>
                              <div className="text-sm text-gray-400">Decrypts → Individual Item Keys</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold">4</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Item Keys</div>
                              <div className="text-sm text-gray-400">Decrypt → Actual Item Data (passwords, notes, etc.)</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <h3 className="text-lg font-semibold text-white mb-4">Benefits</h3>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Password changes without re-encryption</li>
                            <li>• Secure item sharing capabilities</li>
                            <li>• Efficient key rotation</li>
                            <li>• Granular access control</li>
                          </ul>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <h3 className="text-lg font-semibold text-white mb-4">Security Properties</h3>
                          <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Forward secrecy maintained</li>
                            <li>• Compromised keys don't expose all data</li>
                            <li>• Hierarchical trust relationships</li>
                            <li>• Efficient cryptographic operations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Client-Server Authentication */}
                {activeSection === 'authentication' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-green-600/20 rounded-lg mr-4">
                          <Users className="h-6 w-6 text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Client-Server Authentication</h2>
                      </div>

                      <p className="text-gray-300 text-lg mb-6">
                        HushKey uses advanced cryptographic protocols to authenticate users without exposing
                        sensitive information to the server.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Zap className="h-5 w-5 text-primary-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">SRP Protocol</h3>
                          </div>
                          <p className="text-gray-400 text-sm mb-4">
                            Secure Remote Password protocol enables password-based authentication
                            without sending the password to the server.
                          </p>
                          <div className="space-y-2 text-sm text-gray-400">
                            <li>• Zero-knowledge password proof</li>
                            <li>• Protection against server compromise</li>
                            <li>• Forward secrecy properties</li>
                            <li>• Resistance to dictionary attacks</li>
                          </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Shield className="h-5 w-5 text-emerald-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">Session Keys</h3>
                          </div>
                          <p className="text-gray-400 text-sm mb-4">
                            Session-specific keys derived from the master password provide
                            additional authentication layers.
                          </p>
                          <div className="space-y-2 text-sm text-gray-400">
                            <li>• Ephemeral key generation</li>
                            <li>• Time-limited validity</li>
                            <li>• Device-specific binding</li>
                            <li>• Automatic rotation</li>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mt-6">
                        <div className="flex items-start">
                          <Lock className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-blue-300 font-semibold mb-1">Authentication Guarantee</div>
                            <div className="text-blue-400/70 text-sm">
                              The server never sees the user's master password or the keys used for vault decryption.
                              Authentication proves identity without compromising cryptographic secrets.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Audit & Compliance */}
                {activeSection === 'compliance' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-emerald-600/20 rounded-lg mr-4">
                          <CheckCircle className="h-6 w-6 text-emerald-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Audit & Compliance</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <FileText className="h-8 w-8 text-primary-400 mx-auto mb-3" />
                          <div className="text-lg font-semibold text-white mb-2">Annual Audits</div>
                          <div className="text-sm text-gray-400">Independent security assessments</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Shield className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                          <div className="text-lg font-semibold text-white mb-2">SOC 2 Type II</div>
                          <div className="text-sm text-gray-400">Trust services compliance</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <CheckCircle className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                          <div className="text-lg font-semibold text-white mb-2">ISO 27001</div>
                          <div className="text-sm text-gray-400">Information security management</div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Audit History</h3>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                            <div>
                              <div className="font-semibold text-white">Q4 2023 - CipherSec Partners</div>
                              <div className="text-sm text-gray-400">Complete cryptographic implementation review</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                            <div>
                              <div className="font-semibold text-white">Q2 2023 - NCC Group</div>
                              <div className="text-sm text-gray-400">Infrastructure and API security assessment</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                            <div>
                              <div className="font-semibold text-white">Q4 2022 - Trail of Bits</div>
                              <div className="text-sm text-gray-400">Client-side cryptography and browser security</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-emerald-300 font-semibold mb-1">Continuous Security</div>
                            <div className="text-emerald-400/70 text-sm">
                              Our security practices extend beyond audits with continuous monitoring,
                              automated testing, and regular security updates to maintain the highest
                              standards of data protection.
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