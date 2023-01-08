import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex light-bg justify-space">
      <div className="logo white">
        <Link href="/">Pietro Mattei</Link>
      </div>

      <ul className="flex white">
        <li className="green">
          <Link href="/">{"Home"}</Link>
        </li>
        <li>
          <Link href="/#about">About Me.</Link>
        </li>
        <li>
          <Link href="public/pietrocv.pdf">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}
