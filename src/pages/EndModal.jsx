import React from "react";
import styled from "styled-components";

const EndModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseBtn onClick={onClose}>×</CloseBtn>
                <ModalTitle>이용을 종료하시겠습니까?</ModalTitle>
                <ModalSubText>
                    '종료하기'를 선택하면 임시 녹음본이 삭제됩니다.
                </ModalSubText>
                <ActionButton
                    color="#F32300"
                    textColor="white"
                    onClick={onConfirm}
                >
                    종료하기
                </ActionButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default EndModal;

// --- 스타일 ---
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
`;
const ModalContent = styled.div`
    width: 280px;
    background: white;
    border-radius: 24px;
    padding: 30px 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;
const CloseBtn = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #999;
`;
const ModalTitle = styled.h3`
    font-size: 19px;
    margin: 0 0 10px 0;
    font-weight: 800;
`;
const ModalSubText = styled.p`
    font-size: 12px;
    color: #888;
    text-align: center;
    margin-bottom: 25px;
    line-height: 1.4;
    word-break: keep-all;
`;
const ActionButton = styled.button`
    width: 100%;
    height: 48px;
    background: ${(props) => props.color || "#eee"};
    color: ${(props) => props.textColor || "#3f1d00"};
    border: none;
    border-radius: 14px;
    font-weight: 800;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;
