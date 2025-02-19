/**
 * Step
 * - used in internal routing of the tay application
 */

export enum STEP {
  GATE = 'GATE',
  LABEL = 'LABEL',
  RESULT = 'RESULT',
  STATUS = 'STATUS',
}

/**
 * Scene
 * - used in visual novel interface
 */
export type Scene = {
  sceneId: string;
  background: string;
  character: string;
  characterStyle?: React.CSSProperties;
  whoIsTalking: string;
  dialog: string | (() => Promise<string>);
  select: {
    text: string;
    onClick: () => void;
  }[];
  onNext: () => void;
};
