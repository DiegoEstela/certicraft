import React, { createContext, useState, useEffect } from "react";
import {
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";
import LoginApp from "../components/Login/login";
import FullLoader from "../components/FullLoader/FullLoader";
import { ThemeProvider } from "@emotion/react";
import { primaryTheme } from "../themes/themes";
import { Box, CssBaseline } from "@mui/material";
import Header from "../components/Header/Header";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      <ThemeProvider theme={primaryTheme}>
        <CssBaseline />
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            margin: 0,
            padding: 0,
            overflow: "hidden",
          }}
        >
          {loading ? <FullLoader /> : user ? <>{children} </> : 
          <> 
          <Header />
          <LoginApp />
          </> 
          }
        </Box>
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
