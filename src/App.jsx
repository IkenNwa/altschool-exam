import RouterApp from "./components/RouterApp";
import "./App.css";
import { UserContext } from "./components/UserContext";
import { useState } from "react";
import { useMemo } from "react";

function App() {
  const [user, setUser] = useState(null);

  const providerUser = useMemo(() => ({user, setUser}), [user, setUser])

  return (
    <div className="App">
      <UserContext.Provider value={providerUser} >
        <RouterApp />
      </UserContext.Provider>
    </div>
  );
}

export default App;
