import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// 이미지 경로는 본인의 폴더 구조에 맞게 꼭 확인하세요!
import lighthouseB from "../image/lighthouse background.png";

const Onboarding = () => {
    const navigate = useNavigate();

    return (
        <Container $bgImg={lighthouseB}>
            <ContentWrapper>
                <Header>
                    혼자 <Highlight>ON</Highlight>
                </Header>

                <IndicatorGroup>
                    {/* 왼쪽부터 말씀하신 색상 순서대로 적용했습니다 */}
                    <Dot $color="#9C9996" />
                    <Dot $color="#E2B372" />
                    <Dot $color="#FFA024" />
                </IndicatorGroup>

                <StartButton onClick={() => navigate("/main")}>
                    시작하기
                </StartButton>
            </ContentWrapper>
        </Container>
    );
};

export default Onboarding;

// --- Styled Components ---

const Container = styled.div`
    width: 100%;
    height: 100%;
    /* 배경 이미지 따옴표 처리로 공백 파일명 대응 */
    background: url("${(props) => props.$bgImg}") no-repeat center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 299px;
    height: 219px;

    /* 화면 하단 중앙 고정 방식 */
    position: absolute;
    bottom: 60px; /* 바닥에서 80px */
    left: 50%; /* 왼쪽에서 50% 지점으로 이동 */
    transform: translateX(
        -50%
    ); /* 본인 너비의 절반만큼 왼쪽으로 밀어서 진짜 중앙 맞추기 */
`;

export const Header = styled.div`
    font-size: 64px;
    color: #ffffff;
    font-family: "TitleFonts", sans-serif;
    text-shadow:
        0 0 8px rgba(255, 255, 255, 0.6),
        0 0 16px rgba(255, 255, 255, 0.3);
`;

export const Highlight = styled.span`
    color: #f6ac34;
    text-shadow:
        0 0 8px rgba(246, 172, 52, 0.6),
        0 0 16px rgba(246, 172, 52, 0.3);
`;

const IndicatorGroup = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 45px;
    margin-top: 34px;
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    /* props.$color로 받은 색상을 배경색으로 사용합니다 */
    background-color: ${(props) => props.$color};
`;

const StartButton = styled.button`
    width: 85%;
    max-width: 350px;
    height: 56px;
    background-color: #f6ac34;
    border: none;
    border-radius: 12px;
    color: #333;
    font-size: 24px;
    font-family: "GyeonggiTitle";
    cursor: pointer;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);

    &:active {
        background-color: #e59a2a;
        transform: scale(0.96);
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    }
`;
