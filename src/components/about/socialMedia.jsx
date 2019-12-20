import React from "react";

const SocialMedia = () => {
  return (
    <div className="contact-button">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/allenvbui"
      >
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt="linkedin"
          className="contact-icon"
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/allen-bui"
      >
        <img
          src="https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/github-square-social-media-512.png"
          alt="github"
          className="contact-icon"
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://twitter.com/_allen_bui"
      >
        <img
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-twitter-512.png"
          alt="twitter"
          className="contact-icon"
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/allen.bui/"
      >
        <img
          src="https://www.freepngimg.com/thumb/logo/62773-blog-logo-computer-instagram-icons-free-clipart-hd.png"
          alt="instagram"
          className="contact-icon"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
