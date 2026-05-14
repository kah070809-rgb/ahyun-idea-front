import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Main from "./pages/Main";
import Chat from "./pages/Chat";

function App() {
    // 모바일 브라우저 높이(vh) 보정
    useEffect(() => {
        const setScreenSize = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };
        setScreenSize();
        window.addEventListener("resize", setScreenSize);
        return () => window.removeEventListener("resize", setScreenSize);
    }, []);

    return (
        <Router>
            <style>{`
                body, html { 
                    margin: 0; padding: 0; 
                    overflow: hidden; 
                    background-color: #444444; /* 브라우저 바깥 배경 */
                }
                * { box-sizing: border-box; }
            `}</style>

            {/* 메인 컨테이너: 화면 중앙 정렬 */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100vw",
                    height: "calc(var(--vh, 1vh) * 100)",
                }}
            >
                {/* 스마트폰 프레임 */}
                <div
                    style={{
                        width: "100%",
                        maxWidth: "402px",
                        height: "100%",
                        maxHeight: "874px",
                        backgroundColor: "#444444", // 사진 안 뜨면 이 색이 보임
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Onboarding />} />
                        <Route path="/main" element={<Main />} />
                        <Route path="/chat" element={<Chat />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Onboarding />} />
//                 {/* <Route path="/main" element={<Main />} /> */}
//             </Routes>
//         </BrowserRouter>
//     );
// }
// export default App;

// // --- 1. 온보딩 페이지 (여기에 디자인 다 넣었습니다) ---
// const Onboarding = () => {
//   const navigate = useNavigate();
//   return (
//     <div
//       style={{
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         color: "white",
//       }}
//     >
//       <h1 style={{ fontSize: "3rem", margin: "0" }}>
//         혼자 <span style={{ color: "#e9b25b" }}>ON</span>
//       </h1>
//       {/* 🕯️ 이모지 대신 나중에 <img> 태그만 넣으세요! */}
//       <div style={{ fontSize: "100px", margin: "40px" }}>🕯️</div>
//       <button
//         onClick={() => navigate("/main")}
//         style={{
//           backgroundColor: "#e9b25b",
//           border: "none",
//           padding: "15px 80px",
//           borderRadius: "10px",
//           fontSize: "1.2rem",
//           fontWeight: "bold",
//           cursor: "pointer",
//         }}
//       >
//         시작하기
//       </button>
//     </div>
//   );
// };

// // --- 2. 메인 페이지 (파일 따로 안 만들고 여기 바로 만듭니다) ---
// const Main = () => (
//   <div style={{ color: "white", padding: "20px", textAlign: "center" }}>
//     <h2>메인 페이지 준비 완료!</h2>
//   </div>
// );

// // --- 3. 메인 App (축제 레이아웃을 여기에 다 때려 넣음) ---
// export default function App() {
//   useEffect(() => {
//     const setScreenSize = () => {
//       const vh = window.innerHeight * 0.01;
//       document.documentElement.style.setProperty("--vh", `${vh}px`);
//     };
//     setScreenSize();
//     window.addEventListener("resize", setScreenSize);
//   }, []);

//   return (
//     <>
//       {/* 💡 축제 때 쓰던 GlobalStyle 내용을 여기에 직접 넣었습니다 (파일 안 만들어도 됨) */}
//       <style>{`
//         body, html { margin: 0; padding: 0; background-color: #f0f0f0; overflow: hidden; }
//         * { box-sizing: border-box; }
//       `}</style>

//       {/* 💡 축제 때 쓰던 Layout(Container) 역할을 하는 부분 */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "calc(var(--vh, 1vh) * 100)",
//           width: "100vw",
//         }}
//       >
//         {/* 💡 축제 때 쓰던 AppBox 역할을 하는 부분 */}
//         <div
//           style={{
//             width: "100%",
//             maxWidth: "430px",
//             height: "100%",
//             backgroundColor: "#1c1c3c",
//             position: "relative",
//             boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//             overflowY: "auto",
//           }}
//         >
