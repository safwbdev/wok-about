import React from "react";
import { HEADER_TEXT } from "../constants/lang";

export default function Header() {
  return (
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          {/* <Wok_icon /> */}
          <span class="navbar-brand">{HEADER_TEXT}</span>
        </div>
      </div>
    </nav>
  );
}
