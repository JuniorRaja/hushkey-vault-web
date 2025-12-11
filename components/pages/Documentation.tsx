import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Documentation: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 max-w-4xl mx-auto px-6">
      <ScrollReveal animation="fade-in">
        <div className="prose prose-invert max-w-none">
          <h1 className="font-display">HushKey Vault Documentation</h1>
          <p className="lead text-xl text-gray-300">
            Comprehensive guides to help you secure, organize, and manage your digital identity with HushKey Vault.
          </p>

          <h2>Getting Started</h2>
          <p>
            HushKey Vault is designed to be intuitive while offering powerful features for power users.
            Getting started takes less than 2 minutes.
          </p>
          
          <h3>1. Creating Your Master Key</h3>
          <p>
            When you first launch HushKey, you will be asked to create a Master Password. 
            <strong> This is the most important step.</strong> Your Master Password is used to derive the encryption key 
            (PBKDF2-HMAC-SHA256) that secures your entire vault.
          </p>
          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 my-4">
            <p className="text-amber-200 m-0 text-sm">
              <strong>Warning:</strong> We are a zero-knowledge platform. We do not store your Master Password. 
              If you lose it, we cannot recover your data.
            </p>
          </div>

          <h3>2. Your First Item</h3>
          <p>
            Click the <code className="text-primary-400">+</code> button in the bottom right corner to add an item.
            HushKey supports over 12 item types, including:
          </p>
          <ul>
            <li><strong>Login:</strong> Username, password, and TOTP MFA tokens.</li>
            <li><strong>Card:</strong> Credit and debit card information.</li>
            <li><strong>Identity:</strong> Driver's licenses, passports, and SSNs.</li>
            <li><strong>Secure Note:</strong> Encrypted text for keys, codes, or private thoughts.</li>
          </ul>

          <h2>Advanced Features</h2>
          
          <h3>The Guardian Scanner</h3>
          <p>
            The Guardian Scanner runs locally on your device. It analyzes your vault for:
          </p>
          <ul>
            <li>Weak passwords (entropy analysis)</li>
            <li>Reused passwords across multiple services</li>
            <li>Compromised credentials (via k-anonymity hash checking against HIBP)</li>
          </ul>

          <h3>Offline Synchronization</h3>
          <p>
            HushKey uses IndexedDB to store a full encrypted copy of your vault locally. 
            When you make changes offline, they are queued. Once an internet connection is detected, 
            an encrypted blob is synchronized with our relay servers using a conflict-resolution strategy based on vector clocks.
          </p>

          <h2>Troubleshooting</h2>
          <p>
            If you encounter sync issues, check the network indicator in the bottom left. 
            A pulsating green dot indicates active connection. A red dot indicates offline mode.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
};