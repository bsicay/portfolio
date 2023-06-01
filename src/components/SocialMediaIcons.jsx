const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/brandon-ronaldo-sicay-cumes-8a6542205"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/bsicay"
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-8" alt="github-link" src="https://icon-library.com/images/github-icon-png/github-icon-png-29.jpg" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
