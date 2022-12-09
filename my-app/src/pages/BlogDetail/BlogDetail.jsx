import { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import "./blogdetail.css";
import PostData from "../../data.json";
import profImg from "../../assets/prof.jpg";
export default function BlogDetail() {
  const { id } = useParams();

  const post = PostData.posts[parseInt(id) - 1];
  console.log(post);
  const renderingContents = [];
  let counter = 1;

  if (post !== undefined) {
    for (let content of post.contents) {
      if (content.type === "p") {
        renderingContents.push(<p key={counter}>{content.text}</p>);
        counter += 1;
      } else if (content.type === "img") {
        const url = content.src;
        renderingContents.push(<img key={counter} src={url} alt="" />);
        counter += 1;
      }
    }
  }

  return (
    <>
      <Banner />
      <>
        {post !== undefined ? (
          <div className="view">
            <div className="max-width">
              <section className="wrap-box">
                <div className="inner">
                  <dl className="author-wrap">
                    <dt className="a11y-hidden">Author</dt>
                    <dd className="author">
                      <img src={profImg} alt="" /> {post.userName}
                    </dd>
                    <dt className="a11y-hidden">Created</dt>
                    <dd className="created">2022.05.25</dd>
                  </dl>
                  <dl className="category">
                    <dt className="a11y-hidden">Category</dt>
                    <dd>{post.category[0]}</dd>
                  </dl>
                  <div className="title-wrap">
                    <h2>{post.title}</h2>
                  </div>
                  <hr />
                  <div className="view-contents">
                    {/* 조건부 렌더링 */}
                    {renderingContents}
                  </div>
                  <Link to="/" className="btn-back">
                    <span className="a11y-hidden">Back</span>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    </>
  );
}
