import { BrowserHistory, createBrowserHistory } from "history";
import { useRef, useState, useLayoutEffect } from "react";
import { Router } from "react-router-dom";

export const customHistory = createBrowserHistory();

interface Props {
  basename?: string;
  children: React.ReactNode;
}
const CustomRouter = ({ basename, children }: Props) => {
  const historyRef = useRef<BrowserHistory | null>(null);
  if (historyRef.current === null) {
    historyRef.current = customHistory;
  }

  const history = historyRef.current;
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      // eslint-disable-next-line react/no-children-prop
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

export default CustomRouter;
