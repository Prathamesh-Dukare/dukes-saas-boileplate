export const services = [
  {
    id: 1,
    slug: 'cloud-storage',
    title: 'Cloud Storage Solutions',
    description: 'Secure and scalable cloud storage for your business.',
    details:
      'Our Cloud Storage Solutions offer secure, scalable, and easy-to-use storage options that integrate seamlessly with your existing infrastructure.',
    content:
      '<h1>Secure Your Data with Cloud Storage</h1><p>Our cloud storage solutions are designed to meet the needs of businesses of all sizes. Whether you need to store sensitive data or share files across your organization, our cloud storage has you covered.</p><h2>Why Choose Our Cloud Storage?</h2><ul><li>Highly secure and compliant</li><li>Scalable to your needs</li><li>24/7 customer support</li></ul>',
  },
  {
    id: 2,
    slug: 'crm',
    title: 'Customer Relationship Management',
    description: 'Manage your customer interactions effectively.',
    details:
      'Our CRM solutions help you manage and analyze customer interactions throughout the customer lifecycle, improving business relationships and streamlining processes.',
    content:
      '<h1>Enhance Customer Relationships with CRM</h1><p>Our CRM software enables you to manage all your customer interactions in one place, making it easier to track, analyze, and improve your customer relationships.</p><h2>Key Features of CRM</h2><ul><li>Automated workflows</li><li>Comprehensive analytics</li><li>Multi-channel support</li></ul>',
  },
  {
    id: 3,
    slug: 'data-analytics',
    title: 'Data Analytics Platform',
    description: 'Turn your data into actionable insights.',
    details:
      'Our Data Analytics Platform allows you to collect, analyze, and visualize data to make informed decisions. The platform supports real-time analytics and integrates with various data sources.',
    content:
      '<h1>Unlock Insights with Data Analytics</h1><p>Our Data Analytics Platform transforms your raw data into actionable insights, helping you make informed decisions and optimize your business processes.</p><h2>Key Features of Data Analytics</h2><ul><li>Real-time analytics</li><li>Easy integration with multiple data sources</li><li>Customizable dashboards</li></ul>',
  },
  {
    id: 4,
    slug: 'api-integration',
    title: 'API Integration Services',
    description:
      'Seamlessly integrate third-party services into your application.',
    details:
      'Our API Integration Services enable you to connect your application with third-party services seamlessly. We support various types of APIs including RESTful, SOAP, and GraphQL.',
    content:
      '<h1>Enhance Your App with API Integration</h1><p>Our API Integration Services allow you to extend the functionality of your application by integrating it with third-party services. Whether you need to add payment gateways, social media feeds, or other services, we’ve got you covered.</p><h2>Types of API We Support</h2><ul><li>RESTful APIs</li><li>SOAP APIs</li><li>GraphQL APIs</li></ul>',
  },
];

export const getServiceBySlug = (slug) => {
  const service = services
    .map((d) => {
      delete d.icon;
      return d;
    })
    .filter((d) => d.slug === slug);

  if (service.length) {
    return service[0];
  }

  return null;
};
