import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ApiDocs: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 max-w-4xl mx-auto px-6">
      <ScrollReveal animation="fade-in">
        <div className="prose prose-invert max-w-none">
          <h1 className="font-display">HushKey Vault API Reference</h1>
          <p className="lead text-xl text-gray-300">
            Integrate HushKey Vault programmatically. Designed for developers who want to automate secret management.
          </p>

          <h2>Authentication</h2>
          <p>
            The HushKey API uses API Keys for authentication. You can generate a key from your Account Settings.
            Include the key in the header of all requests.
          </p>
          <pre>Authorization: Bearer hk_live_550e8400-e29b-41d4-a716-446655440000</pre>

          <h2>Endpoints</h2>

          <h3>Get Vault Status</h3>
          <p>Returns the metadata and sync status of the user's vault.</p>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 font-mono text-sm mb-4">
            <span className="text-emerald-400">GET</span> <span className="text-gray-300">https://api.hushkey.io/v1/vault/status</span>
          </div>
          
          <h4>Response</h4>
          <pre>{`{
  "status": "synced",
  "last_sync": "2023-10-27T14:30:00Z",
  "item_count": 142,
  "vault_version": 24
}`}</pre>

          <h3>Fetch Encrypted Items</h3>
          <p>
            Retrieves items from the vault. 
            <strong> Note:</strong> The API returns encrypted blobs. You must decrypt them client-side using your implementation of the HushKey crypto primitives.
          </p>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 font-mono text-sm mb-4">
            <span className="text-emerald-400">GET</span> <span className="text-gray-300">https://api.hushkey.io/v1/items</span>
          </div>

          <h4>Query Parameters</h4>
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>limit</td>
                <td>integer</td>
                <td>Number of items to return (max 100)</td>
              </tr>
              <tr>
                <td>updated_after</td>
                <td>timestamp</td>
                <td>Filter items modified after date</td>
              </tr>
            </tbody>
          </table>

          <h2>Client-Side Decryption</h2>
          <p>
            Data returned from the API is encrypted using <code>AES-256-GCM</code>. 
            The structure of an item blob is as follows:
          </p>
          <pre>{`interface EncryptedBlob {
  iv: string;           // Base64 encoded initialization vector
  data: string;         // Base64 encoded ciphertext
  authTag: string;      // Base64 authentication tag
  keyId: string;        // ID of the wrapping key
}`}</pre>

          <p>
            For a full implementation of the decryption logic in Node.js, Python, and Go, 
            please refer to our <a href="#" className="text-primary-400 hover:underline">SDKs on GitHub</a>.
          </p>

          <h2>Rate Limits</h2>
          <p>
            The API is rate-limited to 1,000 requests per minute per IP address. 
            Enterprise plans offer custom limits.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
};