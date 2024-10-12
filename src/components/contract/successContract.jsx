export default function SuccessContract({ handleTop }) {
  return (
    <div className="success-contract-container">
      <h2 className="thank-you">THANK YOU</h2>
      <p className="success-text">
        Thank you for your contact.
        <br /> Our staff will contact you as soon as possible.
        <br /> Thank you for your patience.
      </p>
      <button className="contract-btn" onClick={handleTop}>
        TOP
      </button>
    </div>
  );
}
