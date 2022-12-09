import React from "react";
import "./banner.css";
export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="max-width">
          <div className="banner-contents">
            <p className="sub-text">포트폴리오</p>
            <p className="main-text">
              안녕하세요.
              <br />
              프론트엔드 개발자
              <br />
              이광렬입니다.
            </p>
            <p className="description">사용자 경험을 우선시 생각하여, 보다 나은 환경으로 최적의 경험을 선사 하고자 노력하고 있는 개발자 입니다.</p>
          </div>
        </div>
      </div>
    </>
  );
}
