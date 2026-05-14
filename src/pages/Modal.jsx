import React from "react";
import styled from "styled-components";

// 💡 isOpen: 모달이 열렸는지 여부, onClose: 닫기 함수, children: 모달 안쪽 내용물
const Modal = ({ isOpen, onClose, children }) => {
    // isOpen이 false면 아무것도 안 보여줌 (모달 닫힘 상태)
    if (!isOpen) return null;

    return (
        <Overlay onClick={onClose}>
            {/* e.stopPropagation()은 하얀 박스를 클릭했을 땐 모달이 안 닫히게 막아주는 역할! */}
            <ModalBox onClick={(e) => e.stopPropagation()}>
                <CloseIcon onClick={onClose}>✖</CloseIcon>
                {children}
            </ModalBox>
        </Overlay>
    );
};

export default Modal;

// --- 스타일 정의 ---
const Overlay = styled.div`
    position: absolute; /* App.js의 스마트폰 껍데기(AppBox) 기준 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* 뒷배경 어둡게 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; /* 화면 맨 앞으로 가져오기 */
`;

const ModalBox = styled.div`
    width: 85%;
    background-color: white;
    border-radius: 20px;
    padding: 30px 20px;
    position: relative;
    text-align: center;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;

const CloseIcon = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: #333;
`;
