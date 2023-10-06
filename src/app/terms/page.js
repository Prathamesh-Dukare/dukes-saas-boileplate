import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import ProsePreview from '@/components/prose-preview';

const terms = `
<p><strong>Terms and Conditions for [Your SaaS Product]</strong></p><p><strong>Last Updated: [Date]</strong></p><p>These Terms and Conditions ("Terms") govern your use of [Your SaaS Product] ("Service") provided by [Your Company Name] ("Company," "we," or "us"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.</p><p><strong>1. Account Registration</strong></p><p>1.1. You must create an account to use the Service.
1.2. You are responsible for maintaining the confidentiality of your account information.
1.3. You must be at least 18 years old to use the Service.</p><p><strong>2. Use of the Service</strong></p><p>2.1. You agree to use the Service only for lawful purposes.
2.2. You may not use the Service for any illegal or unauthorized purpose.</p><p><strong>3. Payment and Billing</strong></p><p>3.1. You agree to pay all fees associated with your use of the Service as outlined in our pricing.
3.2. Payments are non-refundable except as expressly stated in our refund policy.</p><p><strong>4. Intellectual Property</strong></p><p>4.1. All content and materials provided through the Service are the property of [Your Company Name] and are protected by intellectual property laws.
4.2. You may not reproduce, distribute, or create derivative works from our content without our express written consent.</p><p><strong>5. Privacy</strong></p><p>5.1. We collect and use your personal information as outlined in our Privacy Policy.
5.2. By using the Service, you consent to our collection and use of your personal information as described in the Privacy Policy.</p><p><strong>6. Termination</strong></p><p>6.1. We reserve the right to terminate your access to the Service at our sole discretion.
6.2. You may terminate your account at any time by following the instructions provided in the Service.</p><p><strong>7. Disclaimer of Warranties</strong></p><p>7.1. The Service is provided "as is" and "as available" without warranties of any kind, either express or implied.
7.2. We do not guarantee that the Service will be error-free or uninterrupted.</p><p><strong>8. Limitation of Liability</strong></p><p>8.1. In no event shall [Your Company Name] be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Service.</p><p><strong>9. Changes to Terms</strong></p><p>9.1. We reserve the right to modify or update these Terms at any time. Any changes will be effective upon posting the revised Terms on our website.</p><p><strong>10. Contact Information</strong></p><p>10.1. For questions or concerns about these Terms, please contact us at [Contact Email].</p>
`;

export default function Terms() {
  return (
    <>
      <Nav />
      <ProsePreview content={terms} />
      <Footer />
    </>
  );
}
