import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      <NavBar />
      <div className="header flex light-bg">
        <div>
          <h1 className="white">
            Technical Recruiting Manager, currently at{" "}
            <a
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "1em" }}
              href="https://neo4j.com/"
            >
              @Neo4j
            </a>
          </h1>

          <br />
          <br />
          <a className="yellow" href="mailto:me@pietromattei.com">
            Get in touch!
          </a>
        </div>
        <Image
          src="/images/pietro-ai.png"
          width={600}
          height={600}
          alt="Pietro"
        />
      </div>
    </header>
  );
}
