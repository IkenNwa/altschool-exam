import RouterApp from "./components/RouterApp";
import "./App.css";
import { UserContext } from "./components/UserContext";
import { useState } from "react";
import { useMemo } from "react";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [user, setUser] = useState(null);

  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  const helmetContext = {}

  return (
    <>
      <HelmetProvider context={helmetContext}>
        <UserContext.Provider value={providerUser}>
          <RouterApp />
        </UserContext.Provider>
      </HelmetProvider>
    </>
  );
}

export default App;
