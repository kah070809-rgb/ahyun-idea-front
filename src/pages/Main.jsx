import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import lighthouseGroup from "../image/Group20.png";
//import lightgroup from "../image/Group13.png";

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
                    {/* ✨ 나중에 직접 코드로 파동을 만들고 싶을 때 아래 주석을 해제하세요 */}
                    {/* <WaveContainer>
                        <RingWave $delay="0s" />
                        <RingWave $delay="1.2s" />
                        <RingWave $delay="2.4s" />
                    </WaveContainer> 
                    */}

                    {/* 등대 + 빛 + 원 이미지 영역 */}
                    <LighthouseArea>
                        <MainLighthouseImage
                            src={lighthouseGroup}
                            alt="등대와 빛"
                        />
                    </LighthouseArea>

                    {/* 메인 액션 버튼 영역 */}
                    <ActionButtons>
                        <SubButton>
                            <Icon>📍</Icon>
                            <span>
                                지도로
                                <br />
                                안전 경로 확인
                            </span>
                        </SubButton>
                        <MainGlowingButton onClick={() => navigate("/chat")}>
                            실시간 AI
                            <br />
                            안심 대화 시작
                        </MainGlowingButton>
                        <SubButton>
                            <Icon>📞</Icon>
                            <span>
                                긴급 연락처 /<br />
                                도움 요청
                            </span>
                        </SubButton>
                    </ActionButtons>
                </CenterSection>

                <StatusSection>
                    <StatusTitle>오늘의 귀가 현황</StatusTitle>
                    <StatusCard />
                </StatusSection>

                <BottomSpacer />
            </ScrollArea>

            {/* ✨ 하단 내비게이션 바 (설정하신 화면 너비 내에 고정) */}
            <FixedBottomNav>
                <NavItem $active={true}>
                    <NavIcon>🏠</NavIcon>
                    <span>홈</span>
                </NavItem>
                <NavItem>
                    <NavIcon>📍</NavIcon>
                    <span>지도</span>
                </NavItem>
                <NavItem>
                    <NavIcon>🔔</NavIcon>
                    <span>긴급</span>
                </NavItem>
                <NavItem onClick={() => navigate("/settings")}>
                    <NavIcon>⚙️</NavIcon>
                    <span>설정</span>
                </NavItem>
                <NavItem>
                    <NavIcon>👤</NavIcon>
                    <span>마이페이지</span>
                </NavItem>
            </FixedBottomNav>
        </Container>
    );
};

export default Main;

// ==========================================
// 🎨 스타일 정의
// ==========================================

/* ✨ 코드로 만드는 파장 애니메이션 주석 */
/*
const wavePulse = keyframes`
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0.9; }
    100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
`;
*/

const Container = styled.div`
    width: 100%;
    max-width: 430px; /* 일반적인 모바일 최대 너비, 프로젝트 설정에 맞게 조절하세요 */
    margin: 0 auto; /* 중앙 정렬 */
    height: 100dvh;
    background-color: #1c1c3c;
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
const Header = styled.h1`
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 10px;
`;
const Highlight = styled.span`
    color: #e9b25b;
`;
const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.15);
`;

const GreetingSection = styled.div`
    padding: 30px 25px 10px 25px;
`;
const GreetingText = styled.h2`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.3;
    margin: 0;
`;
const UserName = styled.span`
    color: #e9b25b;
`;
const SubText = styled.p`
    font-size: 1rem;
    color: #aaaaaa;
    margin-top: 10px;
`;

const CenterSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px 0;
    min-height: 480px;
`;

const LighthouseArea = styled.div`
    position: relative;
    width: 324px;
    height: 314px;
    display: flex;
    justify-content: center;
`;

const MainLighthouseImage = styled.img`
    width: 324px;
    height: 314px;
    position: relative;
    z-index: 10;
`;

/* ✨ 코드로 만드는 파장 스타일 주석 */
/*
const WaveContainer = styled.div`
    position: absolute;
    top: 28%;
    left: 50%;
    width: 0; 
    height: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RingWave = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid rgba(233, 178, 91, 0.4);
    box-shadow: 0 0 10px rgba(233, 178, 91, 0.2);
    animation: ${wavePulse} 4s infinite linear;
    animation-delay: ${(props) => props.$delay};
`;
*/

const ActionButtons = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 15px;
    margin-top: -30px;
    z-index: 20;
`;

const SubButton = styled.button`
    width: 95px;
    height: 95px;
    background: rgba(255, 255, 255, 0.1);
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
`;

const MainGlowingButton = styled.button`
    width: 140px;
    height: 140px;
    background: linear-gradient(145deg, #fceda8, #e9b25b);
    border-radius: 50%;
    border: 4px solid #1c1c3c;
    color: #1c1c3c;
    font-weight: 800;
    font-size: 1rem;
    line-height: 1.3;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: transform 0.2s;
    &:active {
        transform: scale(0.95);
    }
`;

const StatusSection = styled.div`
    padding: 30px 25px;
`;
const StatusTitle = styled.h3`
    font-size: 1.1rem;
    margin-bottom: 15px;
`;
const StatusCard = styled.div`
    width: 100%;
    height: 150px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
`;

const FixedBottomNav = styled.div`
    position: absolute; /* fixed가 아니라 absolute를 써서 Container 하단에 고정 */
    bottom: 0;
    width: 100%;
    height: 85px;
    background-color: #15152c;
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
    font-size: 1.5rem;
    margin-bottom: 4px;
`;
const Icon = styled.div`
    font-size: 1.6rem;
    margin-bottom: 5px;
    color: #e9b25b;
`;
const BottomSpacer = styled.div`
    height: 100px;
`;
