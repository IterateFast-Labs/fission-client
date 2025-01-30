import React, { useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

import { useToastStore } from '@/global-state/toast-store';

import { WindowCloseButton } from './react95/window';

export interface ToastProps {
  id: string;
  message: React.ReactNode;
  duration?: number; // seconds
}

export function Toast({ message, duration = 4, id }: ToastProps) {
  const { removeToast } = useToastStore();

  const handleRemoveToast = useCallback(() => {
    removeToast(id);
  }, [id, removeToast]);

  return (
    <ToastBox
      key={id}
      $duration={duration}
      onAnimationEnd={() => handleRemoveToast()}
    >
      <div className="inside">{message}</div>
      <StyledCloseButton onClick={() => handleRemoveToast()} size="sm">
        Close
      </StyledCloseButton>
    </ToastBox>
  );
}

const StyledCloseButton = styled(WindowCloseButton)`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
`;

const toastAnimation = keyframes`
    from {
        opacity: 1;
        display: block;
    }
    to {
        opacity: 0;
        display: none;
    }
`;

const ToastBox = styled.div<{ $duration: number }>`
  position: relative;
  overflow: hidden;
  border: 8px solid;
  border-image: url('/toast-border.svg') 8;
  color: black;

  animation: ${toastAnimation} 0.5s forwards;
  animation-delay: ${(props) => props.$duration - 0.5}s;
  animation-play-state: ${(props) =>
    props.$duration !== Infinity ? 'running' : 'paused'};
  animation-timing-function: steps(5, end);

  .inside {
    background-color: #ffffe1;
    border: 1px solid #ffffe1;
    box-sizing: content-box;
    padding: 0 20px 0 3px;
    white-space: pre-line;
  }
`;

export function ToastList() {
  const { toasts } = useToastStore();

  return (
    <ToastBoxList>
      <div className="toast-list">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    </ToastBoxList>
  );
}

const ToastBoxList = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  max-height: 100svh;
  overflow-y: auto;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  /* pointer-events: none; */

  .toast-list {
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
