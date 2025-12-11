import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const SecurityWhitepaper: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 max-w-4xl mx-auto px-6">
      <ScrollReveal animation="fade-in">
        <div className="prose prose-invert max-w-none">
          <h1 className="font-display">Security Whitepaper</h1>
          <p className="lead text-xl text-gray-300">
            A technical deep-dive into the cryptographic primitives and protocols that power HushKey Vault.
          </p>

          <h2>1. Threat Model</h2>
          <p>
            HushKey is designed to withstand the following scenarios:
          </p>
          <ul>
            <li><strong>Database Breach:</strong> An attacker gains full read access to our production database.</li>
            <li><strong>Network Interception:</strong> An attacker intercepts traffic between the client and server (MITM).</li>
            <li><strong>Malicious Insider:</strong> A HushKey employee attempts to access user data.</li>
          </ul>
          <p>
            In all three scenarios, the attacker retrieves only encrypted blobs which are computationally infeasible to decrypt without the user's Master Password.
          </p>

          <h2>2. Cryptographic Primitives</h2>
          <p>
            We rely on standard, peer-reviewed algorithms provided by the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API" className="text-primary-400 hover:underline">Web Crypto API</a>. We do not roll our own crypto.
          </p>

          <h3>Key Derivation</h3>
          <p>
            To transform the user's Master Password into a cryptographic key, we use <strong>PBKDF2-HMAC-SHA256</strong>.
          </p>
          <pre>{`Parameters:
- Iterations: 600,000 (Client-side)
- Salt: User-specific random 32-byte salt
- Output: 256-bit Key Encryption Key (KEK)`}</pre>

          <h3>Data Encryption</h3>
          <p>
            Vault items are encrypted using <strong>AES-256-GCM</strong> (Galois/Counter Mode).
          </p>
          <ul>
            <li><strong>Confidentiality:</strong> AES-256 ensures data cannot be read.</li>
            <li><strong>Integrity:</strong> GCM provides built-in authentication tags, preventing ciphertext tampering.</li>
          </ul>

          <h2>3. The Encryption Onion</h2>
          <p>
            We use a hierarchical key structure to enable features like password changing and sharing without re-encrypting the entire vault.
          </p>
          <ol>
            <li><strong>Master Password</strong> derives the <strong>Account Key</strong>.</li>
            <li><strong>Account Key</strong> decrypts the <strong>Vault Key</strong> (stored wrapped).</li>
            <li><strong>Vault Key</strong> decrypts individual <strong>Item Keys</strong>.</li>
            <li><strong>Item Key</strong> decrypts the actual <strong>Item Data</strong>.</li>
          </ol>

          <h2>4. Client-Server Authentication</h2>
          <p>
            To prove identity to the server without sending the password, we use a modified <strong>SRP (Secure Remote Password)</strong> handshake or a specialized JWT flow signed with a session key derived separately from the Master Password. This ensures the server never sees the key used for decryption.
          </p>

          <h2>5. Audit & Compliance</h2>
          <p>
            HushKey's codebase undergoes annual independent audits. Our last audit was completed by <em>CipherSec Partners</em> in Q4 2023. We are SOC2 Type II compliant.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
};