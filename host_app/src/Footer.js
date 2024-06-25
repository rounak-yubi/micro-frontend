import React from "react";
import styled from "styled-components";

const FooterUIWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;

  .footer {
    padding: 1rem;
    background-color: #333;
    color: #fff;
    text-align: center;
  }

  .footer .social-links a {
    margin: 0 0.5rem;
    color: #fff;
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <FooterUIWrapper>
      <footer className="footer">
        <p>&copy; 2024 Yubi. All rights reserved.</p>
      </footer>
    </FooterUIWrapper>
  );
};

export default Footer;
