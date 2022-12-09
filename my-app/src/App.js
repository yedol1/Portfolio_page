import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Home from "./pages/Home/Home";
import "./global.css";
import "./reset.css";
import UserContext from "./context/UserContext";

// import UserContext from "./context/UserContext";
// 전체 데이터 : https://raw.githubusercontent.com/weniv/react-blog/react/public/data.json
// // 이렇게 실무에서 모든 데이터가 한 공간에 있지 않습니다.

// blog 데이터 : https://raw.githubusercontent.com/weniv/react-blog/react/public/blog.json
// post 전체 데이터 : https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json
// post 개별 데이터 : https://raw.githubusercontent.com/weniv/react-blog/react/public/post1.json
function App() {
    const [userId, setUserId] = useState(1);
    const [isLogin, setIsLogin] = useState(true);
    return (
        <UserContext.Provider value={{ userId, isLogin }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog/:id" element={<BlogDetail />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}
export default App;
