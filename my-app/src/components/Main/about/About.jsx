import React from "react";
import "./about.css";
import profImg from "../../../assets/prof.jpg";
import facebookImg from "../../../assets/Facebook.svg";
import twitterImg from "../../../assets/Twitter.svg";
import instagramImg from "../../../assets/Instagram.svg";
import githubImg from "../../../assets/Github.svg";
export default function About() {
  return (
    <aside class="about">
      <h2>About Me</h2>
      <img src={profImg} alt="" class="user-profile" />
      <p class="user-name">이광렬</p>
      <p class="user-description">
        프론트엔드
        <br />
        주니어개발자입니다.
      </p>
      <h3>카테고리</h3>
      <ul class="categories">
        <li>
          <a href="#">프론트엔드</a>
        </li>
        <li>
          <a href="#">영상디자인</a>
        </li>
        <li>
          <a href="#">UX/UI</a>
        </li>
      </ul>
      <h3>Follow</h3>
      <ul class="sns">
        <li>
          <a href="#">
            <img src={facebookImg} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitterImg} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagramImg} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={githubImg} alt="GitHub" />
          </a>
        </li>
      </ul>
    </aside>
  );
}
