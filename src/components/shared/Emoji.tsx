const Emoji = ({ symbol, label }: any) => {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? label : ""}
      style={{ fontSize: "35px" }}
    >
      {symbol}
    </span>
  );
};

export default Emoji;
