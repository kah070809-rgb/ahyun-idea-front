import React, { useState, useRef } from "react";
import styled from "styled-components";

const EmergencyModal = ({ isOpen, onClose }) => {
    const [dragX, setDragX] = useState(0);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    if (!isOpen) return null;

    const handleStart = () => {
        isDragging.current = true;
    };

    const handleMove = (e) => {
        if (!isDragging.current) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const containerRect = containerRef.current.getBoundingClientRect();
        const maxDist = containerRect.width - 50;
        let newX = clientX - containerRect.left - 25;

        if (newX < 0) newX = 0;
        if (newX > maxDist) {
            newX = maxDist;
            handleSuccess();
        }
        setDragX(newX);
    };

    const handleEnd = () => {
        isDragging.current = false;
        if (dragX < 150) setDragX(0);
    };

    const handleSuccess = () => {
        isDragging.current = false;
        alert("🚨 긴급 신고가 접수되었습니다!");
        onClose();
        setDragX(0);
    };

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseBtn onClick={onClose}>×</CloseBtn>
                <ModalTitle>긴급 상황이신가요?</ModalTitle>

                <ActionButton color="#E9B25B">보호자 위치 공유</ActionButton>
                <ActionButton color="#F32300" textColor="white">
                    SOS 신고
                </ActionButton>

                <SlideTrack
                    ref={containerRef}
                    onMouseMove={handleMove}
                    onMouseUp={handleEnd}
                    onMouseLeave={handleEnd}
                    onTouchMove={handleMove}
                    onTouchEnd={handleEnd}
                >
                    <SlideHandle
                        onMouseDown={handleStart}
                        onTouchStart={handleStart}
                        style={{ transform: `translateX(${dragX}px)` }}
                    >
                        {/* 여기에 등대 아이콘 이미지를 넣으세요 */}
                        🚨
                    </SlideHandle>
                    <SlideText>밀어서 바로 신고하기</SlideText>
                </SlideTrack>
            </ModalContent>
        </ModalOverlay>
    );
};

export default EmergencyModal;

// ==========================================
// ✨ 스타일 정의 (이 부분이 빠져서 에러가 났던 거예요!)
// ==========================================

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
`;

const CloseBtn = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #999;
`;

const ModalTitle = styled.h3`
    font-size: 19px;
    margin: 0 0 20px 0;
    font-weight: 800;
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
    margin-bottom: 12px;
    cursor: pointer;

    /* 그림자 효과로 입체감 주기 */
    box-shadow: 0 4px 0px rgba(0, 0, 0, 0.1);

    /* 0.1초 동안 부드럽게 변하게 함 */
    transition: all 0.1s ease;

    /* 버튼을 누르고 있을 때 (클릭 효과) */
    &:active {
        /* 1. 약간 작아지게 해서 눌리는 느낌 전달 */
        transform: scale(0.97);

        /* 2. 그림자를 줄여서 바닥에 붙는 느낌 전달 */
        box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);

        /* 3. 살짝 어둡게 해서 시각적 피드백 주기 */
        filter: brightness(90%);
    }

    /* 마우스를 올렸을 때 (선택 사항) */
    &:hover {
        filter: brightness(105%);
    }
`;

const SlideTrack = styled.div`
    width: 100%;
    height: 54px;
    background: #969696;
    border-radius: 27px;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 4px;
    overflow: hidden;
`;

const SlideHandle = styled.div`
    width: 44px;
    height: 44px;
    background: #fcebb6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 5px;
    z-index: 2;
    cursor: grab;
    /* 드래그 중이 아닐 때만 부드럽게 복귀 */
    transition: ${(props) =>
        props.style.transform === "translateX(0px)" ? "0.3s ease-out" : "none"};
`;

const SlideText = styled.span`
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: white;
    user-select: none;
    margin-left: 20px;
`;
