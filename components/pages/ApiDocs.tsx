import React, { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Code, Database, Key, Shield, Zap, Globe, Server, FileText, Github, Copy, CheckCircle, AlertTriangle } from 'lucide-react';

export const ApiDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Code },
    { id: 'database', label: 'Database Schema', icon: Database },
    { id: 'authentication', label: 'Authentication', icon: Key },
    { id: 'endpoints', label: 'API Endpoints', icon: Server },
    { id: 'encryption', label: 'Encryption', icon: Shield },
    { id: 'examples', label: 'Code Examples', icon: FileText },
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
                  <h2 className="text-lg font-semibold text-white mb-4 font-display">API Reference</h2>
                  <nav className="space-y-2">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                            activeTab === tab.id
                              ? 'bg-primary-600/20 border border-primary-500/30 text-primary-300'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="text-sm font-medium">{tab.label}</span>
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
                    <Code className="h-4 w-4 mr-2" />
                    API Reference
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                    HushKey Vault <span className="gradient-text">API</span>
                  </h1>
                  <p className="text-xl text-gray-400 max-w-3xl">
                    Build your own password manager using our Supabase database schema and API endpoints.
                    Everything you need to create secure, zero-knowledge applications.
                  </p>
                </div>

                {/* Overview */}
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                          <Code className="h-6 w-6 text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">API Overview</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Database className="h-8 w-8 text-primary-400 mx-auto mb-3" />
                          <div className="text-lg font-semibold text-white mb-2">Supabase Backend</div>
                          <div className="text-sm text-gray-400">PostgreSQL database with real-time capabilities</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Shield className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                          <div className="text-lg font-semibold text-white mb-2">Zero-Knowledge</div>
                          <div className="text-sm text-gray-400">Client-side encryption, server never sees plaintext</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
                          <Zap className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                          <div className="text-lg font-semibold text-white mb-2">Real-time Sync</div>
                          <div className="text-sm text-gray-400">Instant synchronization across all devices</div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4">Architecture</h3>
                        <div className="space-y-4 text-gray-300">
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold text-sm">1</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Client-Side Encryption</div>
                              <div className="text-sm text-gray-400">All sensitive data is encrypted in the browser before being sent to Supabase</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold text-sm">2</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Supabase Storage</div>
                              <div className="text-sm text-gray-400">Encrypted blobs are stored in PostgreSQL with user-specific access control</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-primary-400 font-bold text-sm">3</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">Real-time Updates</div>
                              <div className="text-sm text-gray-400">Changes sync instantly across all user devices using Supabase's real-time features</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Database Schema */}
                {activeTab === 'database' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-emerald-600/20 rounded-lg mr-4">
                          <Database className="h-6 w-6 text-emerald-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Database Schema</h2>
                      </div>

                      <div className="space-y-6">
                        {/* Vaults Table */}
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Database className="h-5 w-5 text-primary-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">vaults</h3>
                            <span className="ml-2 text-xs bg-primary-600/20 text-primary-300 px-2 py-1 rounded">Main Table</span>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-gray-700">
                                  <th className="text-left text-gray-400 py-2">Column</th>
                                  <th className="text-left text-gray-400 py-2">Type</th>
                                  <th className="text-left text-gray-400 py-2">Description</th>
                                </tr>
                              </thead>
                              <tbody className="text-gray-300">
                                <tr className="border-b border-gray-700/50">
                                  <td className="py-2"><code>id</code></td>
                                  <td className="py-2 text-primary-400">uuid</td>
                                  <td className="py-2">Primary key, references auth.users</td>
                                </tr>
                                <tr className="border-b border-gray-700/50">
                                  <td className="py-2"><code>encrypted_data</code></td>
                                  <td className="py-2 text-primary-400">text</td>
                                  <td className="py-2">AES-256-GCM encrypted vault blob</td>
                                </tr>
                                <tr className="border-b border-gray-700/50">
                                  <td className="py-2"><code>version</code></td>
                                  <td className="py-2 text-primary-400">integer</td>
                                  <td className="py-2">Vault version for conflict resolution</td>
                                </tr>
                                <tr>
                                  <td className="py-2"><code>updated_at</code></td>
                                  <td className="py-2 text-primary-400">timestamp</td>
                                  <td className="py-2">Last modification timestamp</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Sync Metadata Table */}
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center mb-4">
                            <Zap className="h-5 w-5 text-blue-400 mr-3" />
                            <h3 className="text-lg font-semibold text-white">sync_metadata</h3>
                            <span className="ml-2 text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded">Sync Table</span>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-gray-700">
                                  <th className="text-left text-gray-400 py-2">Column</th>
                                  <th className="text-left text-gray-400 py-2">Type</th>
                                  <th className="text-left text-gray-400 py-2">Description</th>
                                </tr>
                              </thead>
                              <tbody className="text-gray-300">
                                <tr className="border-b border-gray-700/50">
                                  <td className="py-2"><code>id</code></td>
                                  <td className="py-2 text-primary-400">uuid</td>
                                  <td className="py-2">Primary key</td>
                                </tr>
                                <tr className="border-b border-gray-700/50">
                                  <td className="py-2"><code>user_id</code></td>
                                  <td className="py-2 text-primary-400">uuid</td>
                                  <td className="py-2">References auth.users</td>
                                </tr>
                                <tr className="border-b border-gray-700/50">
                                  <td className="py-2"><code>device_id</code></td>
                                  <td className="py-2 text-primary-400">text</td>
                                  <td className="py-2">Unique device identifier</td>
                                </tr>
                                <tr>
                                  <td className="py-2"><code>last_sync</code></td>
                                  <td className="py-2 text-primary-400">timestamp</td>
                                  <td className="py-2">Last successful sync timestamp</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Authentication */}
                {activeTab === 'authentication' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                          <Key className="h-6 w-6 text-purple-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Authentication</h2>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <h3 className="text-lg font-semibold text-white mb-4">Supabase Auth</h3>
                          <p className="text-gray-300 mb-4">
                            HushKey uses Supabase's built-in authentication system. Users authenticate through:
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center text-gray-300">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              Email/Password
                            </div>
                            <div className="flex items-center text-gray-300">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              OAuth providers (Google, GitHub)
                            </div>
                            <div className="flex items-center text-gray-300">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              Magic links
                            </div>
                            <div className="flex items-center text-gray-300">
                              <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                              Phone authentication
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <h3 className="text-lg font-semibold text-white mb-4">Row Level Security (RLS)</h3>
                          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
                            <div className="flex items-start">
                              <Shield className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                              <div>
                                <div className="text-blue-300 font-semibold">Security Policy</div>
                                <div className="text-blue-400/70 text-sm">Users can only access their own vault data</div>
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <pre className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-sm overflow-x-auto">
                              <code className="text-gray-300">
{`-- RLS Policy for vaults table
CREATE POLICY "Users can only access their own vault"
ON vaults FOR ALL USING (auth.uid() = id);`}
                              </code>
                            </pre>
                            <button
                              onClick={() => copyToClipboard(`-- RLS Policy for vaults table\nCREATE POLICY "Users can only access their own vault"\nON vaults FOR ALL USING (auth.uid() = id);`, 'rls-policy')}
                              className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                            >
                              {copiedCode === 'rls-policy' ? (
                                <CheckCircle className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <Copy className="h-4 w-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* API Endpoints */}
                {activeTab === 'endpoints' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-orange-600/20 rounded-lg mr-4">
                          <Server className="h-6 w-6 text-orange-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">API Endpoints</h2>
                      </div>

                      <div className="space-y-6">
                        {/* Vault Status */}
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <span className="bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded text-sm font-mono font-bold mr-3">GET</span>
                              <code className="text-gray-300">/rest/v1/vaults</code>
                            </div>
                            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">Supabase REST</span>
                          </div>
                          <p className="text-gray-400 mb-4">Retrieve user's encrypted vault data</p>

                          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-4">
                            <h4 className="text-white font-semibold mb-2">Response</h4>
                            <pre className="text-sm text-gray-300 overflow-x-auto">
{`[
  {
    "id": "user-uuid",
    "encrypted_data": "U2FsdGVkX1...",
    "version": 42,
    "updated_at": "2024-01-15T10:30:00Z"
  }
]`}
                            </pre>
                          </div>
                        </div>

                        {/* Sync Metadata */}
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded text-sm font-mono font-bold mr-3">POST</span>
                              <code className="text-gray-300">/rest/v1/sync_metadata</code>
                            </div>
                            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">Supabase REST</span>
                          </div>
                          <p className="text-gray-400 mb-4">Update sync metadata for conflict resolution</p>

                          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                            <h4 className="text-white font-semibold mb-2">Request Body</h4>
                            <pre className="text-sm text-gray-300 overflow-x-auto">
{`{
  "user_id": "user-uuid",
  "device_id": "device-123",
  "last_sync": "2024-01-15T10:30:00Z"
}`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Encryption */}
                {activeTab === 'encryption' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-red-600/20 rounded-lg mr-4">
                          <Shield className="h-6 w-6 text-red-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Encryption Details</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="text-2xl font-mono font-bold text-primary-400 mb-2">AES-256-GCM</div>
                          <div className="text-sm text-gray-400 mb-4">Encryption Algorithm</div>
                          <ul className="space-y-2 text-sm text-gray-300">
                            <li>• 256-bit key strength</li>
                            <li>• Galois/Counter Mode</li>
                            <li>• Authenticated encryption</li>
                            <li>• Web Crypto API compliant</li>
                          </ul>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="text-2xl font-mono font-bold text-emerald-400 mb-2">PBKDF2</div>
                          <div className="text-sm text-gray-400 mb-4">Key Derivation</div>
                          <ul className="space-y-2 text-sm text-gray-300">
                            <li>• Password-based key derivation</li>
                            <li>• HMAC-SHA256 hashing</li>
                            <li>• 100,000 iterations</li>
                            <li>• Salted for security</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4">Encrypted Data Structure</h3>
                        <div className="relative">
                          <pre className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-sm overflow-x-auto">
                            <code className="text-gray-300">
{`interface EncryptedItem {
  iv: string;        // Base64 IV (12 bytes)
  data: string;      // Base64 ciphertext
  authTag: string;   // Base64 auth tag (16 bytes)
  keyId: string;     // Key identifier
  metadata: {
    type: 'login' | 'card' | 'note';
    created: string;
    modified: string;
  };
}`}
                            </code>
                          </pre>
                          <button
                            onClick={() => copyToClipboard(`interface EncryptedItem {
  iv: string;        // Base64 IV (12 bytes)
  data: string;      // Base64 ciphertext
  authTag: string;   // Base64 auth tag (16 bytes)
  keyId: string;     // Key identifier
  metadata: {
    type: 'login' | 'card' | 'note';
    created: string;
    modified: string;
  };
}`, 'encrypted-interface')}
                            className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                          >
                            {copiedCode === 'encrypted-interface' ? (
                              <CheckCircle className="h-4 w-4 text-emerald-400" />
                            ) : (
                              <Copy className="h-4 w-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Code Examples */}
                {activeTab === 'examples' && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-green-600/20 rounded-lg mr-4">
                          <FileText className="h-6 w-6 text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white font-display">Code Examples</h2>
                      </div>

                      <div className="space-y-6">
                        {/* JavaScript/TypeScript Example */}
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-white">JavaScript/TypeScript</h3>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs bg-yellow-600/20 text-yellow-300 px-2 py-1 rounded">Web Crypto API</span>
                              <button
                                onClick={() => copyToClipboard(`// Initialize Supabase client
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Authenticate user
const { data: user } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'user-password'
})

// Fetch encrypted vault
const { data: vault } = await supabase
  .from('vaults')
  .select('*')
  .eq('id', user.id)
  .single()

// Decrypt using Web Crypto API
async function decryptVault(encryptedData, masterPassword) {
  const key = await deriveKey(masterPassword)
  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: encryptedData.iv },
    key,
    encryptedData.data
  )
  return JSON.parse(new TextDecoder().decode(decrypted))
}`, 'js-example')}
                                className="p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                              >
                                {copiedCode === 'js-example' ? (
                                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                                ) : (
                                  <Copy className="h-4 w-4 text-gray-400" />
                                )}
                              </button>
                            </div>
                          </div>
                          <pre className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-sm overflow-x-auto">
                            <code className="text-gray-300">
{`// Initialize Supabase client
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Authenticate user
const { data: user } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'user-password'
})

// Fetch encrypted vault
const { data: vault } = await supabase
  .from('vaults')
  .select('*')
  .eq('id', user.id)
  .single()

// Decrypt using Web Crypto API
async function decryptVault(encryptedData, masterPassword) {
  const key = await deriveKey(masterPassword)
  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: encryptedData.iv },
    key,
    encryptedData.data
  )
  return JSON.parse(new TextDecoder().decode(decrypted))
}`}
                            </code>
                          </pre>
                        </div>

                        {/* SQL Schema Example */}
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-white">Database Schema</h3>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded">PostgreSQL</span>
                              <button
                                onClick={() => copyToClipboard(`-- Create vaults table
CREATE TABLE vaults (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  encrypted_data TEXT NOT NULL,
  version INTEGER NOT NULL DEFAULT 1,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create sync_metadata table
CREATE TABLE sync_metadata (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  device_id TEXT NOT NULL,
  last_sync TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE vaults ENABLE ROW LEVEL SECURITY;
ALTER TABLE sync_metadata ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can only access their own vault"
ON vaults FOR ALL USING (auth.uid() = id);

CREATE POLICY "Users can only access their own sync metadata"
ON sync_metadata FOR ALL USING (auth.uid() = user_id);`, 'sql-schema')}
                                className="p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                              >
                                {copiedCode === 'sql-schema' ? (
                                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                                ) : (
                                  <Copy className="h-4 w-4 text-gray-400" />
                                )}
                              </button>
                            </div>
                          </div>
                          <pre className="bg-gray-900 p-4 rounded-lg border border-gray-700 text-sm overflow-x-auto">
                            <code className="text-gray-300">
{`-- Create vaults table
CREATE TABLE vaults (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  encrypted_data TEXT NOT NULL,
  version INTEGER NOT NULL DEFAULT 1,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create sync_metadata table
CREATE TABLE sync_metadata (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  device_id TEXT NOT NULL,
  last_sync TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE vaults ENABLE ROW LEVEL SECURITY;
ALTER TABLE sync_metadata ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can only access their own vault"
ON vaults FOR ALL USING (auth.uid() = id);

CREATE POLICY "Users can only access their own sync metadata"
ON sync_metadata FOR ALL USING (auth.uid() = user_id);`}
                            </code>
                          </pre>
                        </div>

                        {/* GitHub Link */}
                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Github className="h-6 w-6 text-gray-300 mr-3" />
                              <div>
                                <div className="text-white font-semibold">Complete Implementation</div>
                                <div className="text-gray-400 text-sm">Check out the full source code on GitHub</div>
                              </div>
                            </div>
                            <a
                              href="https://github.com/JuniorRaja/hushkey-vault-app"
                              className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              View Code
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
