import React from 'react';

const About = () => {
  return (
    <div className="about container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Feature Recommendation App</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>This Feature Recommendation App is designed to facilitate interaction between business owners and users by allowing users to suggest new features, comment on existing features, and like features. This encourages a collaborative environment where users feel heard and involved in the development process.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Key Features</h2>
        <ul className="list-disc ml-6">
          <li>User Registration and Login</li>
          <li>Suggest New Features</li>
          <li>Comment on Existing Features</li>
          <li>Like Features</li>
          <li>Admin Review and Approval of Features</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Purpose</h2>
        <p>The purpose of this application is to create a transparent and interactive platform where users can contribute to the improvement of a product or service. By leveraging user feedback, business owners can prioritize feature development based on actual user needs and preferences.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <p>Users can register and log in to their accounts to start interacting with the app. Once logged in, users can suggest new features, comment on existing features, and like features they find valuable. Business owners can review and approve features, ensuring only the most relevant and beneficial suggestions are implemented.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>If you have any questions or feedback, please feel free to contact us at support@featurerecommendationapp.com.</p>
      </section>
    </div>
  );
};

export default About;
