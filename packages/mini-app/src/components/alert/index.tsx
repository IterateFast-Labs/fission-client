import { Confcp118, Drvspace7, User4 } from '@react95/icons';
import React, { useCallback } from 'react';
import { Button } from 'react95';

import { useAlertStore } from '@/global-state/alert-store';

import { WindowCloseButton, WindowHeader } from '../react95/window';
import {
  AlertContainer,
  StyledWindow,
  StyledWindowContent,
} from './index.style';

type AlertType = 'plain' | 'error' | 'success' | 'warning';

export interface AlertProps {
  id: string;
  type?: AlertType;
  title?: string;
  message: React.ReactNode;
  closeable?: boolean;
  buttons?: (
    | {
        type: 'action';
        text: string;
        onClick: () => void;
      }
    | {
        type: 'close';
        text?: string;
        onClick?: () => void;
      }
  )[];
}

export function Alert({
  type = 'plain',
  id,
  message,
  title,
  closeable,
  buttons,
}: AlertProps) {
  const { removeAlert } = useAlertStore();

  const handleClose = useCallback(() => {
    removeAlert(id);
  }, [id]);

  const iconMap: Record<AlertType, React.ReactNode> = {
    warning: <Confcp118 />,
    error: <User4 />,
    success: <Drvspace7 />,
    plain: null,
  };

  return (
    <StyledWindow>
      <WindowHeader
        headerTitle={title || 'Alert'}
        button={closeable ? <WindowCloseButton onClick={handleClose} /> : null}
      />
      <StyledWindowContent>
        {type !== 'plain' && <div className="icon">{iconMap[type]}</div>}
        <div className="body">{message}</div>
        <div className="actions">
          {buttons?.map(
            (button, index) =>
              ({
                action: (
                  <Button size="lg" key={index} onClick={button.onClick}>
                    {button.text}
                  </Button>
                ),
                close: (
                  <Button
                    size="lg"
                    key={index}
                    onClick={button.onClick?.() || handleClose}
                  >
                    {button.text || 'Close'}
                  </Button>
                ),
              })[button.type],
          )}
        </div>
      </StyledWindowContent>
    </StyledWindow>
  );
}

export function AlertList() {
  const { alerts } = useAlertStore();
  return (
    <AlertContainer $display={alerts.length > 0}>
      {alerts.map((alert) => (
        <Alert key={alert.id} {...alert} />
      ))}
    </AlertContainer>
  );
}
