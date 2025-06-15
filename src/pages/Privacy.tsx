
import React from "react";

const Privacy: React.FC = () => (
  <section className="container mx-auto max-w-3xl px-4 py-16">
    <h1 className="text-3xl md:text-4xl font-bold text-paulstarr-accent mb-6">Privacy Policy</h1>
    <p className="text-paulstarr-600 mb-4">
      This privacy policy explains how Paulstar Auto Care collects, uses, and protects your information:
    </p>
    <ul className="list-disc list-inside space-y-2 text-paulstarr-700 mb-6">
      <li>We collect personal information you provide when booking or contacting us.</li>
      <li>Your data will not be shared with third parties except as required by law.</li>
      <li>All payment information is processed through secure, encrypted channels.</li>
      <li>You may contact us at any time to request access or deletion of your data.</li>
    </ul>
    <p className="text-paulstarr-500">For further questions about your privacy, please contact our team directly.</p>
  </section>
);

export default Privacy;
