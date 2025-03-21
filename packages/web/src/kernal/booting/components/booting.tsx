'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

import { Blink } from '@/components/animation/blink';
import { Timing, TimingFrame } from '@/components/animation/timing';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';

import CutScene from './cut-scene';
import MemoryCounter from './memory-counter';

enum STEP {
  INITIATION,
  CUT_SCENE,
  LOADING,
  FINISHED,
}

function Booting() {
  const [step, setStep] = useState<STEP>(STEP.INITIATION);

  if (step === STEP.INITIATION) {
    return (
      <div className="fixed inset-0 bg-black z-50">
        <div className="container mx-auto px-4">
          <Logo className="fill-console w-40 mb-2 mt-2" />
          <div className="space-y-2">
            <TimingFrame display start={0.5}>
              <p className="text-console text-xs sm:text-base">
                <b className="text-lg sm:text-2xl font-bold">Fission Web</b>
                <br />
                Copyright (c) {new Date().getFullYear()}, Fission
                <br />
                Version : 0.0.0
                <br />
                NVIDIA A100, 16 Processor(s)
                <br />
                Memory Test: <MemoryCounter />
              </p>
            </TimingFrame>
            <TimingFrame display start={1.5}>
              <div className="border-2 border-console p-px max-w-lg w-full">
                <div className="border-2 border-console p-1 space-y-0.5 sm:space-y-1">
                  <p className="text-console space-x-1 text-xs sm:text-base">
                    <span className="w-26 sm:w-40 inline-block font-bold">
                      CPU TYPE
                    </span>
                    <span>:</span>
                    <span>NVIDIA A100 80GB ×16</span>
                  </p>
                  <p className="text-console space-x-1 text-xs sm:text-base">
                    <span className="w-26 sm:w-40 inline-block font-bold">
                      Cache Memory
                    </span>
                    <span>:</span>
                    <span>N/A</span>
                  </p>
                  <p className="text-console space-x-1 text-xs sm:text-base">
                    <span className="w-26 sm:w-40 inline-block font-bold">
                      Memory Installed
                    </span>
                    <span>:</span>
                    <span>4000MB</span>
                  </p>
                </div>
                <div className="border-2 border-console p-1 space-y-0.5 sm:space-y-1">
                  <p className="text-console space-x-1 flex text-xs sm:text-base">
                    <span className="w-26 sm:w-40 inline-block shrink-0 font-bold">
                      User Agent
                    </span>
                    <span>:</span>
                    <span className="inline-block break-words whitespace-normal">
                      {typeof window !== 'undefined'
                        ? navigator.userAgent
                        : 'N/A'}
                    </span>
                  </p>
                  <p className="text-console space-x-1 text-xs sm:text-base">
                    <span className="w-26 sm:w-40 inline-block font-bold">
                      Display Type
                    </span>
                    <span>:</span>
                    <span>True HD-IPS+LCD 2560x1440</span>
                  </p>
                  <p className="text-console space-x-1 text-xs sm:text-base">
                    <span className="w-26 sm:w-40 inline-block font-bold">
                      Serial Port (s)
                    </span>
                    <span>:</span>
                    <span>A2DP</span>
                  </p>
                  <p className="text-console space-x-1 text-xs sm:text-base">
                    <span className="w-26 sm:w-40 inline-block font-bold">
                      GPS On Module (s)
                    </span>
                    <span>:</span>
                    <span>YES</span>
                  </p>
                </div>
              </div>
            </TimingFrame>

            <TimingFrame display start={2.5}>
              <Blink>
                <p className="text-console font-bold text-xs sm:text-base">
                  Initiation finished......
                </p>
              </Blink>
              <Timing
                start={0}
                duration={1}
                onAnimationEnd={() => setStep(STEP.CUT_SCENE)}
              >
                <p className="text-console text-xs sm:text-base">
                  Please wait for a moment.....
                </p>
              </Timing>
            </TimingFrame>
          </div>
        </div>
      </div>
    );
  }

  if (step === STEP.CUT_SCENE) {
    return (
      <div className="fixed inset-0 bg-black z-50">
        <div className="container mx-auto px-4">
          <CutScene
            onEnd={() => {
              setStep(STEP.LOADING);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn([
        'fixed top-0 sm:top-8 bottom-8 left-0 right-0 bg-black z-50',
        step === STEP.FINISHED &&
          'opacity-0 pointer-events-none transition-opacity duration-500',
      ])}
    >
      <div className="container mx-auto px-4 bg-material h-svh flex justify-center items-center">
        <TimingFrame
          display
          start={1}
          onDisplay={() => {
            setTimeout(() => {
              setStep(STEP.FINISHED);
            }, 1500);
          }}
        >
          <p>Loading....</p>
        </TimingFrame>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Booting));
