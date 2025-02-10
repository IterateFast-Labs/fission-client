/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEVOPS_VERSION: string;
  readonly VITE_ENVIRONMENT: 'development' | 'production';
  readonly VITE_API_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
