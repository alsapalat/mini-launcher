import { useEffect, useState } from 'react';
import { MINI_APPS, type Category } from '../constants/miniApps';
import { Header } from './Header';
import { AdSlider } from './AdSlider';
import { CategoryFilter } from './CategoryFilter';
import { AppGrid } from './AppGrid';

function ensureReadyness(log: (msg: string) => void) {
  return new Promise((r) => {
    const interval = setInterval(() => {
      log('trying...');
      if (typeof my !== 'undefined') {
        clearInterval(interval);
        log('api is ready...');
        r(null);
      } else {
        log('waiting for api...');
      }
    }, 500);
  });
}

const DebugLogs = () => {
  const [t, setT] = useState(new Date().getTime());
  const [show, setShow] = useState(true);

  const [authCode, setAuthCode] = useState('??');

  const [logs, setLogs] = useState<string[]>([]);

  const sdkLoaded = Boolean(typeof my !== 'undefined');

  useEffect(() => {
    if (!sdkLoaded) return;
    const init = async () => {
      setLogs((prevLogs) => [...prevLogs, 'wait...']);
      await ensureReadyness((log) => {
        setLogs((prevLogs) => [...prevLogs, log]);
      });
      setLogs((prevLogs) => [...prevLogs, 'done!']);

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLogs((prevLogs) => [...prevLogs, 'Getting Version...']);
      setLogs((prevLogs) => [...prevLogs, `Version: ${my?.SDKVersion || '??'}`]);

      try {
        my.canIUse('alert')
          .then((res: any) => {
            setLogs((prevLogs) => [...prevLogs, `canIUse alert: ${JSON.stringify(res)}`]);
          })
          .catch((err: any) => {
            console.log(err);
            setLogs((prevLogs) => [...prevLogs, '[ERROR] unable to check canIUse for alert']);
          });
      } catch (err) {
        console.log(err);
        setLogs((prevLogs) => [...prevLogs, '[ERROR] unable to check alert']);
      }

      setLogs((prevLogs) => [...prevLogs, 'Getting System Info...']);
      try {
        my.getSystemInfo({
          success: (res: any) => {
            setLogs((prevLogs) => [...prevLogs, `got system info: ${JSON.stringify(res)}`]);
          }
        })
      } catch (err) {
        console.log(err);
        setLogs((prevLogs) => [...prevLogs, '[ERROR] unable to get system info']);
      }

      try {
        my.getEnv(function(res: any) {
          setLogs((prevLogs) => [...prevLogs, `env: ${JSON.stringify(res)}`]);
        });
      } catch (err) {
        console.log(err);
        setLogs((prevLogs) => [...prevLogs, '[ERROR] unable to get env']);
      }

      // setLogs((prevLogs) => [...prevLogs, 'Getting Run Scene...']);
      // my.getRunScene({
      //   success(result: any) {
      //     setLogs((prevLogs) => [...prevLogs, `mini version: ${JSON.stringify(result)}`]);
      //   },
      // })

      setLogs((prevLogs) => [...prevLogs, 'getting auth...']);
      try {
        my.getAuthCode({
          scopes: 'auth_user',
          success: (res: any) => {
            setLogs((prevLogs) => [...prevLogs, `got auth: ${JSON.stringify(res)}`]);
            setAuthCode(res.authCode);
          },
          fail: (err: any) => {
            setLogs((prevLogs) => [...prevLogs, `[FAIL]: ${JSON.stringify(err)}`]);
          },
          complete: () => {
            // Actions to perform upon completion (optional)
            setLogs((prevLogs) => [...prevLogs, 'completed!']);
          }
        });
      } catch (err) {
        console.log(err);
        setLogs((prevLogs) => [...prevLogs, '[ERROR] unable to get auth code']);
      }
    }
    init();
  }, [sdkLoaded]);

  const handleCopyToClipboard = (text: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setLogs((prevLogs) => [...prevLogs, 'copied to clipboard']);
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
      <div className="flex justify-center"><button type="button" onClick={() => {
        if (!sdkLoaded) {
          setLogs((prevLogs) => [...prevLogs, 'SDK not loaded']);
          return;
        }
        my.alert({
          title: 'Test Alert!!',
          content: window.navigator.userAgent,
          buttonText: 'Alert Button',
          success: function (res: any) {
            my.alert({
              content: 'success!' + JSON.stringify(res),
            });
          },
          fail: function () {
            my.alert({
              content: 'fail!',
            });
          },
          complete: function () {
            my.alert({
              content: 'complete!',
            });
          },
        });
      }}>Test Alert</button></div>
      <div className="flex justify-end"><button type="button" onClick={() => {
        setT(new Date().getTime());
      }}>Refresh</button></div>
      <div>
        <div>JSAPI: {sdkLoaded ? 'YES' : 'NO'}</div>
        <div>AuthCode: <a className="text-underline" href="#" onClick={handleCopyToClipboard(authCode)}>{authCode}</a></div>
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
