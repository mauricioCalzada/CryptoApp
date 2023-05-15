// src/utils/websocket.js

import { useEffect, useState, useRef } from 'react';

const useWebSocket = (url) => {
  const [prices, setPrices] = useState({});
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      ws.current.send('GNT18');
    };

    ws.current.onmessage = (e) => {
      const message = JSON.parse(e.data);
      setPrices(message);
    };

    return () => {
      ws.current.close();
    };
  }, [url]);

  return prices;
};

export default useWebSocket;
