import styled, { keyframes } from "styled-components";

export const wavePulse = keyframes`
    0% { transform: scale(1); opacity: 0.5; }
    100% { transform: scale(1.6); opacity: 0; }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
    height: 100dvh;
    background-color: #1a1a2e;
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;
export const ScrollArea = styled.div`
    flex: 1;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
export const HeaderSection = styled.div`
    padding: 20px 20px 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Header = styled.div`
    font-size: 1.6rem;
    font-weight: 800;
`;
export const Highlight = styled.span`
    color: #e9b25b;
`;
export const SettingsBtn = styled.button`
    background: none;
    border: none;
    img {
        width: 26px;
    }
`;
export const TopStatusText = styled.div`
    text-align: center;
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.85rem;
`;
export const CenterSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`;
export const LighthouseCircle = styled.div`
    position: relative;
    z-index: 10;
    width: 180px;
    height: 180px;
    background: radial-gradient(circle, #2a2a4a 0%, #1a1a2e 100%);
    border-radius: 50%;
    border: 3.5px solid #e9b25b;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 40px rgba(233, 178, 91, 0.25);
    img {
        width: 75px;
        margin-bottom: 12px;
    }
`;
export const WaveContainer = styled.div`
    position: absolute;
    top: 50px;
    width: 180px;
    height: 180px;
    z-index: 1;
`;
export const RingWave = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #e9b25b;
    animation: ${wavePulse} 4s infinite ease-out;
    animation-delay: ${(props) => props.$delay};
`;
export const AIText = styled.span`
    font-size: 1.3rem;
    font-weight: 800;
`;
export const MessageSection = styled.div`
    text-align: center;
    width: 320px;
    height: 167px;
    margin: 22px 0;
`;
export const MainMessage = styled.div`
    font-size: 28px;
    font-weight: 800;
    line-height: 1.4;
    margin-bottom: 10px;
`;
export const SubMessage = styled.div`
    color: #ffffff;
    font-size: 18px;
    line-height: 1.6;
    font-weight: 300;
    .yellow {
        color: #e9b25b;
        font-weight: 500;
    }
`;
export const StartButton = styled.button`
    width: 200px;
    height: 45px;
    background: linear-gradient(180deg, #fcebb6 0%, #e9b25b 100%);
    border: none;
    border-radius: 18px;
    color: #3f1d00;
    font-size: 1.2rem;
    font-weight: 800;
    box-shadow:
        0 0 30px rgba(233, 178, 91, 0.4),
        0 5px 15px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: 0.2s;
    &:active {
        transform: scale(0.97);
    }
`;
export const FixedBottomNav = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 77px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
    padding-bottom: 10px;
`;
export const NavBackgroundSVG = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`;
export const NavButton = styled.button`
    width: 76px;
    height: 76px;
    margin-bottom: 40px;
    background-color: #ff776d;
    background: linear-gradient(180deg, #ff8e85 0%, #ff776d 100%);
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow:
        inset 0 4px 4px rgba(255, 255, 255, 0.4),
        0 6px 12px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    /* 변화를 부드럽게 만들기 위해 추가 */
    transition: all 0.1s ease;

    img {
        width: 32px;
        margin-bottom: 4px;
        transition: transform 0.1s ease; /* 아이콘도 같이 반응하게 */
    }

    span {
        color: #3f1d00;
        font-size: 14px;
        font-weight: 800;
    }

    /* 🖱️ 눌리는 효과 추가 */
    &:active {
        /* 1. 버튼 전체를 살짝 아래로 내림 (Y축 이동) */
        transform: translateY(3px);

        /* 2. 바닥 그림자를 줄여서 밀착된 느낌 주기 */
        box-shadow:
            inset 0 2px 4px rgba(255, 255, 255, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.2);

        /* 3. 아이콘도 미세하게 작아지게 */
        img {
            transform: scale(0.95);
        }

        /* 4. 살짝 어둡게 피드백 */
        filter: brightness(95%);
    }
`;

export const EmergencyWrapper = styled.div`
    position: relative;
    width: 124px;
    height: 124px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
    cursor: pointer;
`;
export const EmergencyGlass = styled.div`
    position: absolute;
    width: 124px;
    height: 124px;
    border-radius: 50%;
    z-index: 5;
    background: radial-gradient(
        circle,
        rgba(252, 72, 42, 0.6) 30%,
        rgba(252, 72, 42, 0) 95%
    );
    filter: blur(8px);
`;
export const EmergencyGlow = styled.div`
    position: absolute;
    width: 124px;
    height: 124px;
    border-radius: 50%;
    pointer-events: none;
    background: radial-gradient(
        circle,
        rgba(252, 72, 42, 0.4) 0%,
        rgba(252, 72, 42, 0) 60%
    );
`;
export const EmergencyCircle = styled.div`
    position: relative;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    z-index: 10;
    background: radial-gradient(circle at 30% 30%, #f32300, #c21c00);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow:
        inset 0 5px 10px rgba(255, 255, 255, 0.4),
        0 10px 25px rgba(0, 0, 0, 0.5);
    img {
        width: 34px;
        margin-bottom: 2px;
    }
    span {
        font-size: 15px;
        font-weight: 800;
        color: white;
    }
`;
