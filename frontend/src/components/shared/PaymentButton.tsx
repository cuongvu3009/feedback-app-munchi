const PaymentButton = ({ btnText, paymentLink, btnVersion }: any) => {
  return (
    <a href={paymentLink} className={`btn-${btnVersion}`}>
      <button>{btnText}</button>
    </a>
  );
};

export default PaymentButton;
