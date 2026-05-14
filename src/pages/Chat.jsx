import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 1. 별도로 분리한 모달 컴포넌트 불러오기
import EmergencyModal from "./EmergencyModal";
import EndModal from "./EndModal";

// 2. * as S 문법으로 스타일 한 줄로 불러오기
import * as S from "./Chat.styled";

// 3. 프로젝트 이미지 자원 불러오기
import lighthouseImg from "../image/lighthouse.png";
import settingsIconImg from "../image/settings.svg";
import homeIconImg from "../image/home2.svg";
import mapIconImg from "../image/map-pin2.svg";
import emergencyIconImg from "../image/alert-triangle.svg";

const API_BASE_URL = import.meta.env.API_BASE_URL;

const Chat = () => {
    const navigate = useNavigate();

    // 앱 상태 관리 ('IDLE': 대화전, 'TALKING': 대화중, 'ARRIVED': 목적지 도착)
    const [status, setStatus] = useState("IDLE");
    const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
    const [isEndModalOpen, setIsEndModalOpen] = useState(false);

    // 마이크 상태 관리
    const [isListening, setIsListening] = useState(false);

    // AI가 화면에 보여주고 읽어줄 메시지 상태 관리
    const [aiMessage, setAiMessage] = useState(
        "안녕하세요, OO님!\n귀가를 시작하겠습니다.",
    );

    // 추후 UI 확장용 위험도 상태
    const [riskLevel, setRiskLevel] = useState("NORMAL");
    const [suggestedAction, setSuggestedAction] = useState("KEEP_TALKING");

    // ==========================================
    // 🎤 음성 인식 및 API 통신 로직 (STT & TTS)
    // ==========================================

    // 1. 브라우저 마이크 켜기 (STT)
    const startListening = () => {
        if (isListening) return;

        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert(
                "이 브라우저는 음성 인식을 지원하지 않습니다. Chrome을 사용해 주세요.",
            );
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = "ko-KR";
        recognition.interimResults = false;
        recognition.continuous = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            setIsListening(true);
            setStatus("TALKING");
            setAiMessage("듣고 있습니다. 말씀해 주세요...");
        };

        // 사용자가 말을 마치면 실행되는 함수
        recognition.onresult = async (event) => {
            const userText = event.results[0][0].transcript;

            setAiMessage(`"${userText}"\n인식 완료, 답변을 생성 중입니다...`);

            // 백엔드로 데이터 전송
            await sendToBackend(userText);
        };

        recognition.onerror = (event) => {
            console.error("음성 인식 오류:", event.error);

            if (event.error === "not-allowed") {
                setAiMessage(
                    "마이크 권한이 차단되었습니다.\n브라우저에서 마이크 권한을 허용해 주세요.",
                );
                return;
            }

            if (event.error === "no-speech") {
                setAiMessage(
                    "음성이 감지되지 않았습니다.\n마이크 버튼을 눌러 다시 말씀해 주세요.",
                );
                return;
            }

            setAiMessage(
                "음성 인식 중 오류가 발생했습니다.\n마이크 버튼을 눌러 다시 시도해 주세요.",
            );
        };

        recognition.onend = () => {
            setIsListening(false);
            console.log("음성 인식 종료");
        };

        recognition.start();
    };

    // 2. 백엔드 /api/ai/chat 서버와 연동하기
    const sendToBackend = async (text) => {
        let aiResponseText = "";

        if (!API_BASE_URL) {
            console.error("VITE_API_BASE_URL 환경변수가 설정되지 않았습니다.");
            aiResponseText =
                "서버 주소 설정이 필요합니다. 관리자에게 문의해 주세요.";
            setAiMessage(aiResponseText);
            speakText(aiResponseText);
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/api/ai/chat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: text }),
            });

            if (!response.ok) {
                throw new Error(`서버 에러 응답: ${response.status}`);
            }

            const data = await response.json();

            // 백엔드 ApiResponse 구조 기준
            const result = data.result;

            aiResponseText =
                result?.reply ||
                "응답을 받아왔지만 메시지 형식이 올바르지 않습니다.";

            setRiskLevel(result?.riskLevel || "NORMAL");
            setSuggestedAction(result?.suggestedAction || "KEEP_TALKING");

            // 위험 상황이면 긴급 모달을 바로 띄우고 싶을 때 사용 가능
            // if (result?.riskLevel === "DANGER") {
            //     setIsEmergencyOpen(true);
            // }
        } catch (error) {
            console.error("API 통신 실패:", error);

            aiResponseText =
                "서버 연결이 불안정합니다.\n마이크 버튼을 눌러 다시 말씀해 주세요.";
        }

        // 받아온 응답을 화면에 반영하고 말로 읽어주기
        setAiMessage(aiResponseText);
        speakText(aiResponseText);
    };

    // 3. AI 답변 소리로 읽어주기 (TTS)
    const speakText = (text) => {
        if (!text) return;

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "ko-KR";
        utterance.rate = 0.95;

        window.speechSynthesis.speak(utterance);
    };

    // ==========================================
    // 🖱️ 중앙 메인 버튼 클릭 핸들러
    // ==========================================
    const handleMainButtonClick = () => {
        if (status === "IDLE" || status === "TALKING") {
            startListening();
        } else if (status === "ARRIVED") {
            setIsEndModalOpen(true);
        }
    };

    return (
        <S.Container>
            <S.ScrollArea>
                <S.HeaderSection>
                    <S.Header>
                        혼자 <S.Highlight>ON</S.Highlight>
                    </S.Header>
                    <S.SettingsBtn>
                        <img src={settingsIconImg} alt="설정" />
                    </S.SettingsBtn>
                </S.HeaderSection>

                <S.TopStatusText>
                    {status === "IDLE"
                        ? "· · · · · 대화 준비 중입니다 · · · · ·"
                        : isListening
                          ? "· · · · · 음성을 듣고 있습니다 · · · · ·"
                          : "· · · · · 임시 녹음 중입니다 · · · · ·"}
                </S.TopStatusText>

                <S.CenterSection>
                    <S.WaveContainer>
                        <S.RingWave $delay="0s" />
                        <S.RingWave $delay="1.5s" />
                    </S.WaveContainer>

                    <S.LighthouseCircle>
                        <img src={lighthouseImg} alt="등대" />
                        <S.AIText>음성 AI</S.AIText>
                    </S.LighthouseCircle>

                    <S.MessageSection>
                        <S.MainMessage
                            style={{ fontSize: "22px", whiteSpace: "pre-wrap" }}
                        >
                            {aiMessage}
                        </S.MainMessage>
                    </S.MessageSection>

                    <S.StartButton onClick={handleMainButtonClick}>
                        {isListening
                            ? "듣는 중... 🎤"
                            : status === "ARRIVED"
                              ? "대화 끝내기 🎤"
                              : "대화 시작하기 🎤"}
                    </S.StartButton>
                </S.CenterSection>
            </S.ScrollArea>

            {/* 하단 네비게이션 영역 */}
            <S.FixedBottomNav>
                <S.NavBackgroundSVG
                    viewBox="0 0 430 95"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <mask id="navMask">
                            <path
                                d="M0 30 C0 13.43 13.43 0 30 0 H120 C155 0 165 62 215 62 C265 62 275 0 310 0 H400 C416.57 0 430 13.43 430 30 V95 H0 V30Z"
                                fill="white"
                            />
                        </mask>
                        <radialGradient
                            id="centerHighlight"
                            cx="50%"
                            cy="100%"
                            r="50%"
                        >
                            <stop
                                offset="0%"
                                stopColor="rgba(255, 255, 255, 0.15)"
                            />
                            <stop
                                offset="100%"
                                stopColor="rgba(255, 255, 255, 0)"
                            />
                        </radialGradient>
                        <filter
                            id="softGlow"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                        >
                            <feGaussianBlur stdDeviation="4" result="blur" />
                        </filter>
                    </defs>
                    <path
                        d="M0 30 C0 13.43 13.43 0 30 0 H120 C155 0 165 62 215 62 C265 62 275 0 310 0 H400 C416.57 0 430 13.43 430 30 V95 H0 V30Z"
                        fill="#242736"
                    />
                    <g mask="url(#navMask)">
                        <path
                            d="M-10 32 C-10 15 15 3 30 3 H120 C155 3 165 65 215 65 C265 65 275 3 310 3 H400 C415 3 440 15 440 32"
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.3)"
                            strokeWidth="8"
                            filter="url(#softGlow)"
                        />
                        <rect
                            x="150"
                            y="62"
                            width="130"
                            height="20"
                            fill="url(#centerHighlight)"
                        />
                    </g>
                </S.NavBackgroundSVG>

                {/* 홈 버튼 누르면 IDLE(초기화) 상태로 강제 이동 */}
                <S.NavButton
                    onClick={() => {
                        setStatus("IDLE");
                        setRiskLevel("NORMAL");
                        setSuggestedAction("KEEP_TALKING");
                        setAiMessage(
                            "안녕하세요, OO님!\n귀가를 시작하겠습니다.",
                        );
                    }}
                >
                    <img src={homeIconImg} alt="홈" />
                    <span>홈</span>
                </S.NavButton>

                {/* 언제든 긴급 상황 모달을 열 수 있는 센터 긴급 버튼 */}
                <S.EmergencyWrapper onClick={() => setIsEmergencyOpen(true)}>
                    <S.EmergencyGlow />
                    <S.EmergencyGlass />
                    <S.EmergencyCircle>
                        <img src={emergencyIconImg} alt="긴급" />
                        <span>긴급</span>
                    </S.EmergencyCircle>
                </S.EmergencyWrapper>

                <S.NavButton>
                    <img src={mapIconImg} alt="지도" />
                    <span>지도</span>
                </S.NavButton>
            </S.FixedBottomNav>

            <EmergencyModal
                isOpen={isEmergencyOpen}
                onClose={() => setIsEmergencyOpen(false)}
            />

            <EndModal
                isOpen={isEndModalOpen}
                onClose={() => setIsEndModalOpen(false)}
                onConfirm={() => {
                    setIsEndModalOpen(false);
                    setStatus("IDLE");
                    setRiskLevel("NORMAL");
                    setSuggestedAction("KEEP_TALKING");
                    setAiMessage("안녕하세요, OO님!\n귀가를 시작하겠습니다.");
                }}
            />
        </S.Container>
    );
};

export default Chat;
