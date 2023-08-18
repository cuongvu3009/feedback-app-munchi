const Emoji = ({ symbol, label, size }: any) => {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? label : ""}
      style={{ fontSize: size }}
    >
      {symbol}
    </span>
  );
};

export default Emoji;
