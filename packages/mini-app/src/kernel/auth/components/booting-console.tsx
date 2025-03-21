import { memo } from 'react';

import { Blink } from '@/components/animation/blink';
import { Timing, TimingFrame } from '@/components/animation/timing';
import { LogoTypo } from '@/components/logo';
import { TelegramInitStatus, useTelegram } from '@/lib/hook/use-telegram';

import {
  ConsoleContainer,
  ConsoleTable,
  CursorWaiting,
  Text,
} from './booting-console.style';

export const BootingConsole = memo(function BootingConsole({
  onBootingConsoleEnd,
}: {
  onBootingConsoleEnd: () => void;
}) {
  const { status, telegramUser, isTMA } = useTelegram();

  return (
    <ConsoleContainer>
      <TimingFrame display={true}>
        <Timing start={0.3} duration={0.2}>
          <LogoTypo fill="#2fff00" />
        </Timing>
        <Timing start={0.5} duration={0.1}>
          <Text>#############################</Text>
        </Timing>
        <Timing start={0.6} duration={0.8}>
          <Text>
            Copyright (c) {new Date().getFullYear()}
            {'  '}Fission
          </Text>
          <Text>This app can only be used in the Telegram environment</Text>
          <Text>CPU Intel 80386</Text>
          <Text>Base Memory Size : 640KB</Text>
          <Text>Version : {import.meta.env.VITE_DEVOPS_VERSION}</Text>
        </Timing>
        <Timing start={1.4} duration={0.1}>
          <Text>#############################</Text>
        </Timing>
      </TimingFrame>

      <TimingFrame start={3} display={status !== TelegramInitStatus.Idle}>
        <Timing start={0} duration={0.3}>
          {!isTMA && (
            <Text>
              Environment Check............. <Blink>FAIL</Blink>
              <br />
              You should run this app in Telegram
            </Text>
          )}
          {isTMA && (
            <Text>
              Environment Check.............<Blink>OK</Blink>
            </Text>
          )}
        </Timing>

        {isTMA && (
          <>
            <Timing start={0.3} duration={0.8}>
              <ConsoleTable>
                <thead>
                  <tr>
                    <th>
                      <Text>Key</Text>
                    </th>
                    <th>
                      <Text>Value</Text>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Text>Handle</Text>
                    </td>
                    <td>
                      <Text>@{telegramUser?.username}</Text>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Text>Name</Text>
                    </td>
                    <td>
                      <Text>
                        {telegramUser?.firstName} {telegramUser?.lastName}
                      </Text>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Text>Subscription</Text>
                    </td>
                    <td>
                      <Text>
                        {telegramUser?.isPremium ? '★ PREMIUM USER' : '-'}
                      </Text>
                    </td>
                  </tr>
                </tbody>
              </ConsoleTable>
            </Timing>
            <Timing start={1.9} duration={0.1}>
              <Text>#############################</Text>
            </Timing>

            <Timing start={2} duration={1} onAnimationEnd={onBootingConsoleEnd}>
              <Text>
                Starting Window 95...
                <CursorWaiting />
              </Text>
            </Timing>
          </>
        )}
      </TimingFrame>
    </ConsoleContainer>
  );
});
