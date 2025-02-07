import disableDevtool from 'disable-devtool';

export function DisableDevtoolProvider() {
  if (import.meta.env.VITE_ENVIRONMENT === 'production') {
    disableDevtool();
  }

  return <></>;
}
