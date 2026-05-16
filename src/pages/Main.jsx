import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import lighthouse from "../image/Group12.png";
import mapImg from "../image/map-pin1.svg";
import callImg from "../image/Vector.svg";
import homeImg from "../image/home1.svg";
import bellImg from "../image/bell.svg";
import settingImg from "../image/settings.svg";
import userImg from "../image/user.svg";
import map from "../image/map.png";
import { keyframes } from "styled-components";

const Main = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <ScrollArea>
                <HeaderSection>
                    <Header>
                        혼자 <Highlight>ON</Highlight>
                    </Header>
                    <Divider />
                </HeaderSection>

                <GreetingSection>
                    <GreetingText>
                        안녕하세요,
                        <br />
                        <UserName>[사용자 이름]</UserName>님!
                    </GreetingText>
                    <SubText>
                        당신의 안전한 귀가를 혼자 ON이 함께합니다.
                    </SubText>
                </GreetingSection>

                <CenterSection>
                    {/* 등대와 파장을 감싸는 전용 영역 */}
                    <LighthouseVisualArea>
                        {/* image_0.png와 유사한 뒤쪽 파장 효과 */}
                        <WaveContainer>
                            <RingWave $delay="0s" />
                            <RingWave $delay="1.2s" />
                            <RingWave $delay="2.4s" />
                        </WaveContainer>
                        {/* 등대 이미지를 앞으로 배치 */}
                        <MainLighthouseImage src={lighthouse} alt="등대와 빛" />
                    </LighthouseVisualArea>

                    {/* 메인 액션 버튼 영역 */}
                    <ActionButtons>
                        <SubButton1>
                            <Icon>
                                <img src={mapImg} alt="지도 경로" />
                            </Icon>
                            <BText>
                                지도로
                                <br />
                                안전 경로 확인
                            </BText>
                        </SubButton1>
                        <MainGlowingButton onClick={() => navigate("/chat")}>
                            실시간 AI
                            <br />
                            안심 대화 시작
                        </MainGlowingButton>
                        <SubButton2>
                            <Icon>
                                <img src={callImg} alt="긴급 연락처" />
                            </Icon>
                            <BText>
                                긴급 연락처 /<br />
                                도움 요청
                            </BText>
                        </SubButton2>
                    </ActionButtons>
                </CenterSection>

                <StatusSection>
                    <StatusTitle>오늘의 귀가</StatusTitle>
                    <img src={map} alt="" style={{ width: "100%" }} />
                </StatusSection>

                <BottomSpacer />
            </ScrollArea>

            <FixedBottomNav>
                <NavItem $active={true}>
                    <NavIcon>
                        <img src={homeImg} alt="홈" />
                    </NavIcon>
                    <Text>홈</Text>
                </NavItem>
                <NavItem>
                    <NavIcon>
                        <img src={mapImg} alt="지도" />
                    </NavIcon>
                    <Text>지도</Text>
                </NavItem>
                <NavItem>
                    <NavIcon>
                        <img src={bellImg} alt="긴급" />
                    </NavIcon>
                    <Text>긴급</Text>
                </NavItem>
                <NavItem onClick={() => navigate("/settings")}>
                    <NavIcon>
                        <img src={settingImg} alt="설정" />
                    </NavIcon>
                    <Text>설정</Text>
                </NavItem>
                <NavItem>
                    <NavIcon>
                        <img src={userImg} alt="마이페이지" />
                    </NavIcon>
                    <Text>마이페이지</Text>
                </NavItem>
            </FixedBottomNav>
        </Container>
    );
};

export default Main;

// ==========================================
// 🎨 스타일 정의
// ==========================================

const wavePulse = keyframes`
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0.4; }
    //20% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.5; }
    100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
`;

const Container = styled.div`
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
    height: 100dvh;
    background-color: #141a3a;
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const ScrollArea = styled.div`
    flex: 1;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

const HeaderSection = styled.div`
    padding: 20px 20px 0 20px;
`;
const Header = styled.div`
    font-size: 34px;
    color: #ffffff;
    font-family: "TitleFonts", sans-serif;
    text-shadow:
        0 0 8px rgba(255, 255, 255, 0.6),
        0 0 16px rgba(255, 255, 255, 0.3);
`;

const Highlight = styled.span`
    color: #f6ac34;
    text-shadow:
        0 0 8px rgba(246, 172, 52, 0.6),
        0 0 16px rgba(246, 172, 52, 0.3);
`;
const Divider = styled.div`
    width: 98%;
    height: 2px;
    margin-top: 11px;
    margin-bottom: 25px;
    background: rgba(255, 255, 255, 0.15);
`;

const GreetingSection = styled.div`
    padding: 0px 25px 10px 25px;
`;
const GreetingText = styled.div`
    font-size: 36px;
    font-family: "Pretendard-ExtraBold";
    line-height: 1.3;
    margin: 0;
`;
const UserName = styled.span`
    color: #e9b25b;
`;
const SubText = styled.div`
    font-size: 19px;
    color: #fff4f4;
    font-family: "pretendard-light";
    margin-top: 10px;
`;

const CenterSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px 0;
`;

/* ✨ 등대와 파장을 묶어주는 래퍼 */
const LighthouseVisualArea = styled.div`
    position: relative;
    width: 246px;
    height: 184px;
    display: flex;
    justify-content: center;
    align-items: center; /* 등대 이미지와 파장을 정중앙에 배치 */
`;

const MainLighthouseImage = styled.img`
    width: 246px;
    height: 184px;
    position: relative;
    z-index: 10; /* 파장보다 앞에 배치 */
`;

/* ✨ 파장 효과 스타일 수정 */
const WaveContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    z-index: 1;
`;

const RingWave = styled.div`
    position: absolute;

    /* 애니메이션이 시작되기 전에도 이 위치에 박혀 있도록 명시 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.5);

    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #e9b25b;
    background: radial-gradient(
        circle,
        rgba(246, 172, 52, 0.1) 0%,
        transparent 70%
    );

    /* forwards를 추가하거나 초기 상태를 위와 같이 맞추면 튐 현상이 사라집니다 */
    animation: ${wavePulse} 4s infinite ease-out;
    animation-delay: ${(props) => props.$delay};
`;

const ActionButtons = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 15px;
    margin-top: -20px;
    z-index: 20;
`;

const SubButton1 = styled.button`
    width: 95px;
    height: 95px;
    background: rgba(98, 98, 98, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    color: white;
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: inset -2px 2px 2px 0px rgba(255, 255, 255, 0.3);
`;

const SubButton2 = styled.button`
    width: 95px;
    height: 95px;
    background: rgba(98, 98, 98, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    color: white;
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.3);
`;

const MainGlowingButton = styled.button`
    /* ...기존 크기 및 배치 유지... */
    width: 136px;
    height: 136px;
    margin-top: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: transform 0.2s;
    position: relative;
    color: #000000;
    font-family: "Pretendard-Bold";
    font-size: 20px;
    line-height: 1.3;
    background: rgba(251, 221, 181, 0.5);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    /* 2. 테두리 수정: 일반 border는 제거하고 아래 방식 중 선택 */
    border: none;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        padding: 1px; /* 선의 두께 */
        /* 위아래는 흰색, 양옆은 투명하게 처리 */
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.7) 0%,
            rgba(255, 255, 255, 0) 20%,
            rgba(255, 255, 255, 0) 80%,
            rgba(255, 255, 255, 0.7) 100%
        );
        -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
    }
    /* 4. 뒤쪽 광채 (기존 코드 유지) */
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        background: #fbba6c;
        border-radius: 50%;
        filter: blur(20px);
        z-index: -1;
        opacity: 0.9;
    }
`;

const StatusSection = styled.div`
    padding: 0px 25px;
`;
const StatusTitle = styled.h3`
    font-size: 1.1rem;
    margin-bottom: 15px;
`;

const FixedBottomNav = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 85px;
    background-color: #141a3a;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: env(safe-area-inset-bottom);
    z-index: 1000;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => (props.$active ? "#e9b25b" : "#666")};
    font-size: 0.75rem;
    cursor: pointer;
`;
const NavIcon = styled.div`
    font-size: 12px;
    margin-bottom: 4px;
    color: #ffffff;
`;
const Icon = styled.div`
    font-size: 1.6rem;
    margin-bottom: 5px;
    color: #e9b25b;
`;
const BottomSpacer = styled.div`
    height: 100px;
`;

const Text = styled.div`
    font-size: 12px;
    font-family: "Pretendard-Light";
    color: #ffffff;
`;

const BText = styled.div`
    font-size: 14px;
    font-family: "Pretendard-Light";
    color: #ffffff;
`;
