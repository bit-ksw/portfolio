import React from "react";
import Link from "next/link";
import "../../styles/main.scss";

class Header extends React.Component {
  render() {
    const title = this.props.title;
    return (
      <>
        <p>{title}</p>
        <p className="custom">
          <span className="custom-title">I am custom</span>
        </p>
        <Link href="/">
          <a style={{ fontSize: "20px" }}>Home</a>
        </Link>
        <Link href="/blogs">
          <a>blog</a>
        </Link>
        <Link href="/cv">
          <a>cv</a>
        </Link>
        <Link href="/portfolios">
          <a>portfolios</a>
        </Link>
        <style jsx>
          {`
            a {
              font-size: 20px;
            }
            .customClass {
              color: red;
            }
          `}
        </style>
      </>
    );
  }
}

export default Header;
