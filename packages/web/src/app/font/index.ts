import localFont from 'next/font/local';

export const font = localFont({
  src: [
    {
      path: './unifont-ex-mono.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});
