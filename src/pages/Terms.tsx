
import React from "react";

const Terms: React.FC = () => (
  <section className="container mx-auto max-w-3xl px-4 py-16">
    <h1 className="text-3xl md:text-4xl font-bold text-paulstarr-accent mb-6">Terms &amp; Conditions</h1>
    <p className="text-paulstarr-600 mb-4">
      Welcome to Paulstar Auto Care! By accessing or using our services, you agree to comply with and be bound by the following terms and conditions:
    </p>
    <ul className="list-disc list-inside space-y-2 text-paulstarr-700 mb-6">
      <li>Services are provided as described in your booking confirmation.</li>
      <li>Payment must be made upon service completion unless otherwise agreed.</li>
      <li>Any cancellation should be made at least 24 hours before the appointment.</li>
      <li>We reserve the right to modify these terms at any time.</li>
    </ul>
    <p className="text-paulstarr-500">For more detail, please contact us or see our Privacy Policy.</p>
  </section>
);

export default Terms;
