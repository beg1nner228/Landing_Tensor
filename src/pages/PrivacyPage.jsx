export default function PrivacyPage() {
  return (
    <div className="legal-page">
    <h1>Privacy Policy</h1>
    <p><strong>Effective Date:</strong> June 19, 2026</p>

    <p>Tensor ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how our Progressive Web Application (PWA) handles information.</p>

    <h2>1. Offline-First & Local Storage (Zero Server Collection)</h2>
    <p>Tensor is built as a privacy-first, offline-first application. <strong>We do not operate backend servers to store your personal fitness data.</strong> All training logs, exercises, sets, weights, routines, and progress analytics are stored locally and exclusively on your own device using browser-based storage technologies (SQLite via OPFS / IndexedDB).</p>
    <ul>
        <li>We cannot access, read, or modify your fitness data.</li>
        <li>Your data never leaves your device unless you manually choose to export a backup.</li>
    </ul>

    <h2>2. Payment Processing (Paddle)</h2>
    <p>When you subscribe to Tensor Pro, payment processing is handled securely by our Merchant of Record, <strong>Paddle.com</strong>. Paddle collects your billing details, credit card information, or Apple Pay identifiers to process the subscription. Paddle handles this data in strict compliance with GDPR and PCI-DSS standards. We only receive an anonymized confirmation event token to unlock Pro features on your device.</p>

    <h2>3. Third-Party Analytics</h2>
    <p>We do not use invasive third-party tracking scripts or advertising networks. We may use privacy-respecting, anonymized telemetry (such as self-hosted or cookieless analytics) solely to monitor app crashes and improve UI stability, without linking it to your personal identity.</p>

    <h2>4. Data Retention and Deletion</h2>
    <p>Since all data is on your device, you have complete control over it. You can erase all data at any time by using the "Reset all data" button within the application settings or by clearing your browser's website data/cache.</p>

    <h2>5. Compliance (GDPR & Swiss nFADP)</h2>
    <p>Because we do not collect, store, or transmit your personal data to any servers, we comply by design with the European General Data Protection Regulation (GDPR) and the Swiss Federal Act on Data Protection (nFADP).</p>

    <h2>6. Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, you can contact us at: <strong>support@tensor.fit</strong></p>

    </div>
  );
}
