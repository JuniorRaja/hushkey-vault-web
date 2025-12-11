import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 max-w-4xl mx-auto px-6">
      <ScrollReveal animation="fade-in">
        <div className="prose prose-invert max-w-none">
          <h1 className="font-display">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: May 14, 2024</p>
          
          <p className="lead text-xl text-gray-300">
            At HushKey, privacy isn't just a policy—it's our architecture. 
            We designed our system so that we physically cannot access your private data.
          </p>

          <h2>1. The Zero-Knowledge Guarantee</h2>
          <p>
            "Zero-Knowledge" means that HushKey (the service provider) knows nothing about the data you store.
          </p>
          <ul>
            <li>We do not know your Master Password.</li>
            <li>We do not have a copy of your encryption keys.</li>
            <li>We cannot see, read, or monetize your stored logins, notes, or credit cards.</li>
          </ul>
          <p>
            All encryption and decryption happens exclusively on your device (browser, mobile app, or desktop client). 
            The data transmitted to our servers is already encrypted and looks like random noise to us.
          </p>

          <h2>2. Data We Do Collect</h2>
          <p>
            To operate the service, we must collect minimal metadata:
          </p>
          <ul>
            <li><strong>Account Info:</strong> Your email address (for account identification) and a hashed verifier of your password (SRP protocol) to authenticate you without sending the password.</li>
            <li><strong>Payment Info:</strong> If you subscribe to a paid plan, our payment processor (Stripe) handles your billing details. We do not store credit card numbers.</li>
            <li><strong>Device Info:</strong> IP address and device type, retained for 30 days for security auditing and fraud prevention.</li>
          </ul>

          <h2>3. Third-Party Subprocessors</h2>
          <p>
            We use a strictly limited set of third-party services:
          </p>
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Purpose</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AWS / Supabase</td>
                <td>Encrypted Blob Storage</td>
                <td>USA / EU</td>
              </tr>
              <tr>
                <td>Stripe</td>
                <td>Payment Processing</td>
                <td>Global</td>
              </tr>
              <tr>
                <td>Postmark</td>
                <td>Transactional Emails</td>
                <td>USA</td>
              </tr>
            </tbody>
          </table>

          <h2>4. Data Deletion</h2>
          <p>
            You can delete your account at any time from the Settings menu. 
            When you delete your account, your encrypted vault data is immediately wiped from our live database 
            and removed from backups within 30 days. This action is irreversible.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            For privacy concerns, GDPR data requests, or security reports, please contact our Data Protection Officer at:
            <br />
            <a href="mailto:privacy@hushkey.io" className="text-primary-400 hover:underline">privacy@hushkey.io</a>
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
};