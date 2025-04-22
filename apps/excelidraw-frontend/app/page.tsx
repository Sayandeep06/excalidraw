"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check user preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Define styles based on dark mode
  const pageStyles = {
    minHeight: "100vh",
    width: "100%",
    transition: "background-color 0.3s",
    backgroundImage: darkMode
      ? "linear-gradient(to bottom right, #000000, #1a0a2e, #150a15)"
      : "linear-gradient(to bottom right, #fff5f5, #ffffff, #f0f5ff)",
    color: darkMode ? "#ffffff" : "#1a202c",
  }

  const containerStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  }

  const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ...containerStyles,
  }

  const logoStyles = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontWeight: "bold",
    fontSize: "1.25rem",
  }

  const iconStyles = {
    color: darkMode ? "#ff9b9b" : "#ff4d4d",
  }

  const buttonStyles = {
    padding: "0.5rem",
    borderRadius: "9999px",
    cursor: "pointer",
    background: darkMode ? "#312e81" : "#eef2ff",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const mainStyles = {
    ...containerStyles,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    paddingTop: "3rem",
    paddingBottom: "3rem",
  }

  const heroSectionStyles = {
    textAlign: "center" as const,
    maxWidth: "48rem",
    margin: "0 auto",
    padding: "4rem 0",
  }

  const headingStyles = {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    backgroundImage: darkMode
      ? "linear-gradient(to right, #ff9b9b, #ffcaca)"
      : "linear-gradient(to right, #ff4d4d, #4f46e5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    lineHeight: "1.2",
  }

  const paragraphStyles = {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    maxWidth: "36rem",
    margin: "0 auto 2rem auto",
    color: darkMode ? "#e0e7ff" : "#312e81",
  }

  const buttonContainerStyles = {
    display: "flex",
    flexDirection: "row" as const,
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
  }

  const primaryButtonStyles = {
    padding: "0.75rem 2rem",
    borderRadius: "0.5rem",
    fontWeight: "500",
    color: "white",
    backgroundImage: "linear-gradient(to right, #ff4d4d, #ff7070)",
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.2s",
  }

  const secondaryButtonStyles = {
    padding: "0.75rem 2rem",
    borderRadius: "0.5rem",
    fontWeight: "500",
    color: darkMode ? "white" : "#4338ca",
    background: darkMode ? "#312e81" : "white",
    border: darkMode ? "1px solid #4338ca" : "1px solid #e0e7ff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.2s",
  }

  const previewContainerStyles = {
    width: "100%",
    maxWidth: "64rem",
    height: "24rem",
    borderRadius: "0.75rem",
    marginBottom: "4rem",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    border: darkMode ? "1px solid rgba(255, 77, 77, 0.2)" : "1px solid #e0e7ff",
  }

  const previewStyles = {
    width: "100%",
    height: "100%",
    backgroundImage: darkMode
      ? "linear-gradient(to bottom right, #000000, #1a0a2e)"
      : "linear-gradient(to bottom right, #ffffff, #f0f5ff)",
    padding: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as const,
  }

  const featuresContainerStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    maxWidth: "80rem",
    margin: "0 auto 4rem auto",
    padding: "0 1rem",
  }

  const featureCardStyles = {
    padding: "1.5rem",
    borderRadius: "0.75rem",
    textAlign: "center" as const,
    background: darkMode ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.8)",
    border: darkMode ? "1px solid rgba(255, 77, 77, 0.3)" : "1px solid #e0e7ff",
    boxShadow: darkMode ? "none" : "0 4px 6px rgba(0, 0, 0, 0.05)",
  }

  const featureIconContainerStyles = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
  }

  const featureIconWrapperStyles = {
    padding: "0.75rem",
    borderRadius: "9999px",
    background: darkMode ? "rgba(255, 77, 77, 0.2)" : "#fff5f5",
  }

  const featureTitleStyles = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  }

  const featureTextStyles = {
    color: darkMode ? "#e0e7ff" : "#4338ca",
  }

  const ctaSectionStyles = {
    textAlign: "center" as const,
    maxWidth: "48rem",
    margin: "0 auto",
    padding: "3rem 0",
  }

  const ctaHeadingStyles = {
    fontSize: "1.875rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: darkMode ? "white" : "#312e81",
  }

  const footerStyles = {
    padding: "2rem 0",
    marginTop: "3rem",
    background: darkMode ? "#000000" : "#f0f5ff",
    textAlign: "center" as const,
  }

  const footerTextStyles = {
    color: darkMode ? "#a5b4fc" : "#4338ca",
    fontSize: "0.875rem",
  }

  // For responsive design
  const mediaQueryStyles = {
    "@media (min-width: 640px)": {
      buttonContainerStyles: {
        flexDirection: "row" as const,
      },
    },
  }

  return (
    <div style={pageStyles}>
      <header style={headerStyles}>
        <div className="mt-8" style={logoStyles}>
          <svg
            style={iconStyles}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
          <span>Excalidraw Clone</span>
        </div>
        <button className="mt-8" style={buttonStyles} onClick={toggleDarkMode}>
          {darkMode ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fcd34d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4338ca"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
      </header>

      <main style={mainStyles}>
        <section style={heroSectionStyles}>
          <h1 style={headingStyles}>Collaborate & Create Beautiful Diagrams</h1>

          <p style={paragraphStyles}>
            A simple yet powerful drawing tool for creating diagrams, wireframes, and illustrations. Share your ideas
            visually with our intuitive whiteboard.
          </p>

          <div style={buttonContainerStyles}>
            <button
              style={primaryButtonStyles}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Start Drawing
            </button>
            <button
              style={secondaryButtonStyles}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Learn More
            </button>
          </div>
        </section>

        <div style={previewContainerStyles}>
          <div style={previewStyles}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              {/* Simple mockup of the drawing app */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "10rem",
                  height: "10rem",
                  borderRadius: "0.5rem",
                  background: darkMode ? "#4338ca" : "white",
                  border: darkMode ? "none" : "1px solid #e0e7ff",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "33%",
                  left: "25%",
                  transform: "translate(-50%, -50%)",
                  width: "6rem",
                  height: "6rem",
                  borderRadius: "9999px",
                  background: darkMode ? "#ff7070" : "#ff9b9b",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "33%",
                  right: "25%",
                  transform: "translate(50%, 50%)",
                  width: "8rem",
                  height: "4rem",
                  borderRadius: "0.5rem",
                  background: darkMode ? "#6366f1" : "#a5b4fc",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  top: "25%",
                  right: "33%",
                  width: "5rem",
                  height: "0.25rem",
                  transform: "rotate(45deg)",
                  background: darkMode ? "#ff9b9b" : "#ff4d4d",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "25%",
                  left: "33%",
                  width: "5rem",
                  height: "0.25rem",
                  transform: "rotate(-45deg)",
                  background: darkMode ? "#a5b4fc" : "#6366f1",
                }}
              ></div>
            </div>
          </div>
        </div>

        <section style={featuresContainerStyles}>
          <div style={featureCardStyles}>
            <div style={featureIconContainerStyles}>
              <div style={featureIconWrapperStyles}>
                <svg
                  style={iconStyles}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </div>
            </div>
            <h3 style={featureTitleStyles}>Intuitive Drawing</h3>
            <p style={featureTextStyles}>
              Simple yet powerful tools to create diagrams, wireframes, and illustrations with ease.
            </p>
          </div>

          <div style={featureCardStyles}>
            <div style={featureIconContainerStyles}>
              <div style={featureIconWrapperStyles}>
                <svg
                  style={iconStyles}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </div>
            </div>
            <h3 style={featureTitleStyles}>Easy Sharing</h3>
            <p style={featureTextStyles}>Share your creations with a simple link or export to various formats.</p>
          </div>

          <div style={featureCardStyles}>
            <div style={featureIconContainerStyles}>
              <div style={featureIconWrapperStyles}>
                <svg
                  style={iconStyles}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
            <h3 style={featureTitleStyles}>Real-time Collaboration</h3>
            <p style={featureTextStyles}>Work together with your team in real-time, no matter where they are.</p>
          </div>
        </section>

        <section style={ctaSectionStyles}>
          <h2 style={ctaHeadingStyles}>Ready to bring your ideas to life?</h2>
          <button
            style={primaryButtonStyles}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Start Drawing Now
          </button>
        </section>
      </main>

      <footer style={footerStyles}>
        <div style={containerStyles}>
          <p style={footerTextStyles}>© {new Date().getFullYear()} Excalidraw Clone. All rights reserved.</p>
        </div>
      </footer>

      {/* Add responsive styles with media queries */}
      <style jsx>{`
        @media (min-width: 640px) {
          .button-container {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  )
}

