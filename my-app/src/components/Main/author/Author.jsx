import React from "react";
import "./author.css";
import profImg from "../../../assets/prof.jpg";
export default function Author({ userName, profileImg, created }) {
  return (
    <dl class="author-wrap">
      <dt class="a11y-hidden">Author</dt>
      <dd class="author">
        <img src={profImg} alt="" /> {userName}
      </dd>
      <dt class="a11y-hidden">Created</dt>
      <dd class="created">{created}</dd>
    </dl>
  );
}
