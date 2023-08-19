import Button from "./Button";

const PaymentButton = ({ btnText }: { btnText: string }) => {
  return (
    <a
      href="https://buy.stripe.com/test_eVafZa59P71c5YkaEH"
      className="btn-secondary"
    >
      <Button version="secondary" btnText={btnText}></Button>
    </a>
  );
};

export default PaymentButton;
