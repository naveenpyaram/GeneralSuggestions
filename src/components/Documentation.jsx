import React from 'react';

const Documentation = () => {
  return (
    <div className="documentation container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Feature Recommendation App Documentation</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p>This application allows users to recommend new features, comment on existing features, and like features. Users can register, log in, and interact with the feature board seamlessly.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Registration</h2>
        <p>Follow these steps to register:</p>
        <ol className="list-decimal ml-6">
          <li>Navigate to the registration page.</li>
          <li>Fill in your username and password.</li>
          <li>Click the "Register" button.</li>
        </ol>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Login</h2>
        <p>Follow these steps to log in:</p>
        <ol className="list-decimal ml-6">
          <li>Navigate to the login page.</li>
          <li>Enter your username and password.</li>
          <li>Click the "Login" button.</li>
        </ol>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Adding a Feature</h2>
        <p>To recommend a new feature:</p>
        <ol className="list-decimal ml-6">
          <li>Log in to your account.</li>
          <li>Navigate to the "Suggest New Feature" section.</li>
          <li>Fill in the feature title and description.</li>
          <li>Click the "Submit Feature" button.</li>
        </ol>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Commenting on a Feature</h2>
        <p>To comment on an existing feature:</p>
        <ol className="list-decimal ml-6">
          <li>Log in to your account.</li>
          <li>Find the feature you want to comment on.</li>
          <li>Enter your comment in the "Add a comment" field.</li>
          <li>Click the "Comment" button.</li>
        </ol>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Liking a Feature</h2>
        <p>To like a feature:</p>
        <ol className="list-decimal ml-6">
          <li>Log in to your account.</li>
          <li>Find the feature you want to like.</li>
          <li>Click the "Thumbs Up" button.</li>
        </ol>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Logout</h2>
        <p>To log out of your account:</p>
        <ol className="list-decimal ml-6">
          <li>Click the "Logout" button in the navigation bar.</li>
        </ol>
      </section>
    </div>
  );
};

export default Documentation;
