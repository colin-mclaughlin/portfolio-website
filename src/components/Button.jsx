const Button = ({ name, isBeam = false, containerClass, link }) => {
  const content = (
    <>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </>
  );

  return link ? (
    <a
      href={link}
      download
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${containerClass}`}
    >
      {content}
    </a>
  ) : (
    <button className={`btn ${containerClass}`}>
      {content}
    </button>
  );
};

export default Button;
