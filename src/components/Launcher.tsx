import { useEffect, useState } from 'react';
import { MINI_APPS, type Category } from '../constants/miniApps';
import { Header } from './Header';
import { AdSlider } from './AdSlider';
import { CategoryFilter } from './CategoryFilter';
import { AppGrid } from './AppGrid';

const DebugLogs = () => {
  const [t, setT] = useState(new Date().getTime());
  const [show, setShow] = useState(false);

  const [authCode, setAuthCode] = useState('??');

  const [logs, setLogs] = useState<string[]>([]);

  const queryParams = new URLSearchParams(window.location.search);
  const queryParamsInJson = Object.fromEntries(queryParams.entries());

  const sdkLoaded = Boolean(typeof my !== 'undefined');

  useEffect(() => {
    if (!sdkLoaded) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLogs((prevLogs) => [...prevLogs, 'Loading SDK...']);
    setLogs((prevLogs) => [...prevLogs, typeof my.getAuthCode]);
    try {
      my.getAuthCode({
        scopes: 'auth_user',
        success: (res: any) => {
          setLogs((prevLogs) => [...prevLogs, 'Got auth code...']);
          setAuthCode(res.authCode);
        },
      });
    } catch (err) {
      console.log(err);
      setLogs((prevLogs) => [...prevLogs, '[ERROR] unable to get auth code']);
    }
  }, [sdkLoaded]);

  const handleCopyToClipboard = (text: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
  }

  if (!show) {
    return (
      <div className="z-50 fixed bottom-0 left-0 w-full bg-black/40 text-white text-xs p-1 font-mono font-light overflow-auto">
        <button className="text-underline w-full text-center" onClick={() => setShow(true)}>Show Debug Logs</button>
      </div>
    )
  }
  return (
    <div key={t} className="z-50 fixed bottom-0 left-0 w-full h-40 bg-black/40 text-white text-xs p-1 font-mono font-light overflow-auto">
      <div className="flex justify-end"><button type="button" onClick={() => {
        setT(new Date().getTime());
      }}>Refresh</button></div>
      <div>
        <div>JSAPI: {sdkLoaded ? 'YES' : 'NO'}</div>
        <div>AuthCode: <a className="text-underline" href="#" onClick={handleCopyToClipboard(authCode)}>{authCode}</a></div>
      </div>
      <div>Params:</div>
      <div>
        <pre>{JSON.stringify(queryParamsInJson, null, 2)}</pre>
      </div>
      <div>
        <div>Logs:</div>
        <div className="text-[10px]">
          {logs.map((log, index) => (
            <div key={index}>{log}</div>
          ))}
        </div>
      </div>
      <div className="flex justify-end"><button type="button" onClick={() => {
        window.location.reload()
      }}>Refresh Page</button></div>
    </div>
  )
}

export function Launcher() {

  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredApps =
    selectedCategory === 'all'
      ? MINI_APPS
      : MINI_APPS.filter((app) => app.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <AdSlider />
      <CategoryFilter
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <AppGrid apps={filteredApps} />
      <DebugLogs />
    </div>
  );
}
