import React, { useCallback } from 'react';

import { useToastStore } from '@/global-state/toast-store';

import { StyledCloseButton, ToastBox, ToastBoxList } from './index.style';

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
