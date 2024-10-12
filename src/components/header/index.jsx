import React from "react";

const Header = () => {
  return (
    <header id="header">
      <div className="pos-relative">
        <div className="logo">
          <a href="/">
            <img src="/icons/logo_idcvn.svg" alt="ICD VietNam" />
          </a>
        </div>
        <div className="mail">
          <a href="/">
            <img src="/icons/mail.svg" alt="ICD VietNam" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
