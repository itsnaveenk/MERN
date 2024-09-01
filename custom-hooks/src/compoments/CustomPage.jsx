import { useEffect, useState } from "react";

function CustomPage() {
  const isOnline = useIsOnline();
  
  return (<div>
    <h2>hiiii</h2>
    <div>{isOnline?"ONLINE":"OFFLINE"}</div>
  </div>);
};

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => {
      setIsOnline(true);
    });

    window.addEventListener('offline', () => {
      setIsOnline(false);
    });
  }, []);

  return isOnline;
}

export default CustomPage;