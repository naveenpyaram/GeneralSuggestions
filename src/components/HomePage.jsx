import React from 'react';
import { ArrowRight, Star, Shield, Zap, Github, Twitter, Linkedin, LogIn, UserPlus } from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="logo">FeatureHub</h1>
            
          </div>
          <div className="header-buttons">
            <button className="btn btn-outline">
            <a href="/login">
    <LogIn className="btn-icon" />
    Login
</a>
            </button>
            <button className="btn btn-outline">
              <a href="/register">
              <UserPlus className="btn-icon" />
              Register
              </a>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main">
        <div className="hero">
          <div className="hero-content">
            <div className="hero-grid">
              <div className="hero-text">
                <h2 className="hero-title">Discover Features That Matter</h2>
                <p className="hero-description">
                  Get personalized feature recommendations powered by AI. Build better products with data-driven insights.
                </p>
                <a href='/login'>
                <button className="btn btn-primary btn-large">
                  
                  Get Started <ArrowRight className="btn-icon-right" />
                 
                </button>
                </a>
              </div>
             
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features">
          <h3 className="features-title">Why Choose Us</h3>
          <div className="features-grid">
            {[
              {
                icon: <Star className="feature-icon" />,
                title: "Smart Recommendations",
                description: "AI-powered suggestions based on your user behavior and preferences"
              },
              {
                icon: <Shield className="feature-icon" />,
                title: "Secure Platform",
                description: "Enterprise-grade security with end-to-end encryption"
              },
              {
                icon: <Zap className="feature-icon" />,
                title: "Real-time Analytics",
                description: "Get instant insights with our powerful analytics dashboard"
              }
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">{feature.icon}</div>
                <h4 className="feature-card-title">{feature.title}</h4>
                <p className="feature-card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <h5 className="footer-title">FeatureHub</h5>
              <p className="footer-description">Making feature discovery smarter and easier for product teams.</p>
            </div>
            <div className="footer-section">
              <h6 className="footer-subtitle">Product</h6>
              <ul className="footer-links">
                <li><a href="/documentation" className="footer-link">Documentation</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h6 className="footer-subtitle">Company</h6>
              <ul className="footer-links">
                <li><a href="/about" className="footer-link">About</a></li>
               
              </ul>
            </div>
            <div className="footer-section">
              <h6 className="footer-subtitle">Connect</h6>
              <div className="social-icons">
                <Github className="social-icon" />
                <Twitter className="social-icon" />
                <Linkedin className="social-icon" />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 FeatureHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;