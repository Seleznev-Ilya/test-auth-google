import { useContext, useState } from "react";
import "./App.css";
import { Context } from "./index";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function App() {
  const [user, serUser] = useState(null);
  const { auth } = useContext(Context);

  const handleGoogleSingIn = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    serUser(user);
    console.log(" user", { user });
  };
  return (
    <div className="App">
      <button onClick={handleGoogleSingIn} className="App__btn">
        Continue with Google
      </button>
      {user && (
        <div>
          <div>{user?.displayName}</div>
          <div>{user?.email}</div>
          <img src={user?.photoURL} alt="User" />
        </div>
      )}
    </div>
  );
}

export default App;
