'use server';

import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import Logo from '@/components/logo';
import Booting from '@/kernal/booting/components/booting';
import Background3D from '@/landing/components/background-3d';
import Hero3D from '@/landing/components/hero-3d';

export default async function Home() {
  return (
    <>
      <Booting />
      <main className="bg-material min-h-[calc(100svh_-_32px)] p-3">
        <header className="bg-primary w-full h-[calc(100svh-56px)] flex items-center justify-center relative overflow-y-auto">
          <div className="absolute inset-0 z-0">
            <Background3D />
          </div>

          <div className="md:max-w-[400px] w-full z-10 py-10">
            <Hero3D className="w-full aspect-square px-5" />
            <Logo className="mx-auto w-64 sm:w-80 px-5" />
            <h1 className="sr-only">Fission</h1>

            <div className="flex justify-center gap-2 flex-wrap">
              <Link
                target="_blank"
                className={buttonVariants({
                  variant: 'outline',
                })}
                href="https://docs.fission.lol"
              >
                Docs
              </Link>
              <Link
                target="_blank"
                className={buttonVariants({
                  variant: 'outline',
                })}
                href="https://x.com/fission_web3"
              >
                𝕏(Twitter)
              </Link>
              <Link
                target="_blank"
                className={buttonVariants({
                  variant: 'outline',
                })}
                href="https://discord.gg/7KYf23ke9x"
              >
                Discord
              </Link>
              <Link
                target="_blank"
                className={buttonVariants({
                  variant: 'outline',
                })}
                href="https://t.me/FissionApp_bot"
              >
                App
              </Link>
            </div>
          </div>
        </header>
      </main>
    </>
  );
}
