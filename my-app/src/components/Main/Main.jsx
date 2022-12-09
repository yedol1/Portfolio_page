import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";
import Posts from "./posts/Posts";
import About from "./about/About";
import PostData from "../../data.json";
import "./main.css";

export default function Main() {
  const posts = PostData.posts;

  return (
    <main>
      <div className="max-width">
        <h2 className="a11y-hidden">Post</h2>
        <ul className="posts">
          {/* components array로 생성 */}
          <Posts posts={posts} />
        </ul>
        <About />
      </div>
    </main>
  );
}
