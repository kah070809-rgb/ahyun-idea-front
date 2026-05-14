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
                <Title>
                    혼자 <Highlight>ON</Highlight>
                </Title>

                <IndicatorGroup>
                    <Dot />
                    <Dot />
                    <Dot $active={true} />
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
    //padding-bottom: 80px;
    width: 100%;
`;

const Title = styled.h1`
    color: white;
    font-size: 42px;
    font-weight: 800;
    margin: 0 0 40px 0;
    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
`;

const Highlight = styled.span`
    color: #f2c94c;
`;

const IndicatorGroup = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 60px;
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) =>
        props.$active ? "#F2C94C" : "rgba(255, 255, 255, 0.3)"};
`;

const StartButton = styled.button`
    width: 85%;
    max-width: 350px;
    height: 56px;
    background-color: #e0e0e0;
    border: none;
    border-radius: 12px;
    color: #333;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 60px;
    cursor: pointer;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);

    &:active {
        background-color: #bdbdbd;
    }
`;
