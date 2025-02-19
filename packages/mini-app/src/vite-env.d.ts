/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEVOPS_VERSION: string;
  readonly VITE_ENVIRONMENT: 'development' | 'production';
  readonly VITE_API_HOST: string;

  readonly VITE_PROVIDER_DISABLE_TANSTACK_DEVTOOLS: 'true' | 'false';
  readonly VITE_PROVIDER_DISABLE_ERUDA: 'true' | 'false';
  readonly VITE_PROVIDER_DISABLE_MILLION: 'true' | 'false';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
