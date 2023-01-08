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
            Senior Tech Recruiter, currently at{" "}
            <a
              target="_blank"
              style={{ fontSize: "1em" }}
              href="https://neo4j.com/"
            >
              @Neo4j
            </a>
          </h1>

          <br />
          <br />
          <a className="green" href="mailto:pietromattei@outlook.com">
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
