import React from "react";
import styled from "styled-components";

// 💡 bg(배경색), color(글자색), onClick(클릭이벤트), children(버튼 안 글자/아이콘)을 받습니다.
const Button = ({ children, onClick, bg = "#e9b25b", color = "#1c1c3c" }) => {
    return (
        <StyledButton bg={bg} color={color} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.button`
    width: 100%;
    padding: 18px 0;
    border-radius: 15px; /* 둥근 모서리 */
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    cursor: pointer;

    /* props로 받은 색상을 적용합니다 (안 넘겨주면 기본 노란색/남색 글자) */
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};

    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* 살짝 그림자 */
    margin-bottom: 12px; /* 버튼 여러 개 있을 때 아래 여백 */

    /* 마이크 아이콘 등과 글자를 나란히 배치하기 위해 */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    /* 누를 때 살짝 눌리는 애니메이션 효과! (이런 디테일이 심사위원 점수 땁니다) */
    &:active {
        transform: scale(0.98);
    }
`;
