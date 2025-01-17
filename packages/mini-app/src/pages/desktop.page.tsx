import { Button } from 'react95';
import { useNavigate } from 'react-router';

export function DesktopPage() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/', {
      replace: true,
    });
  };
  return (
    <div>
      <p>Desktop Page</p> <Button onClick={handleBack}>Back to main</Button>
    </div>
  );
}
