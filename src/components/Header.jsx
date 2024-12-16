

const Header = ({ title, text, className }) => {
    return (
      <header className={className}>
        <h2>{title}</h2>
        <p>{text}</p>
      </header>
    );
  };

  export default Header;