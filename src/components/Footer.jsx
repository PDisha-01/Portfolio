import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Line */}
      <div className="footer-line"></div>

      {/* Main Footer */}
      <div className="footer-content">

        {/* Brand */}
        <div className="footer-brand">
          <h2>
            DISHA mallick<span>.</span>
          </h2>

          <p>
            DESIGN • CODE • INNOVATION
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">

          <a
            href="https://github.com/PDisha-01"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>

          <a
            href="https://www.linkedin.com/in/dishamallick/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>

          <a href="mailto:mallickdisha186@gmail.com">
            EMAIL
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 Zenith. All rights reserved.
        </p>

        <p>
          Built with love & curiosity.
        </p>

      </div>

    </footer>
  );
};

export default Footer;