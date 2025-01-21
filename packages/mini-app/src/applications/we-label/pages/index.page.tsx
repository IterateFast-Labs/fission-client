import { withSplash } from '@/applications/splash';
import { RootContainer } from '@/components/layout';
import { LogoImage } from '@/components/logo';

function WeLabelAppPage() {
  return (
    <RootContainer>
      <></>
    </RootContainer>
  );
}

const WeLabelAppWithSplash = withSplash(WeLabelAppPage, {
  logo: <LogoImage width={100} height={100} />,
  title: 'WeLabel',
  backgroundColor: 'black',
});

export default WeLabelAppWithSplash;
