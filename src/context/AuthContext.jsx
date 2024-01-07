import { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "../reducer/authReducer";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = {
    isUserLoggedIn: false,
    user: {},
  };

  const navigate = useNavigate();
  const location = useLocation();

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loginUser = async (userLoginData) => {
    try {
      dispatch({ type: "IS_LOGGED_IN_TRUE", payload: true });
      navigate(
        location?.state?.from?.pathname ? location?.state?.from?.pathname : "/"
      );
    } catch (error) {
      dispatch({ type: "IS_LOGGED_IN_FALSE", payload: false });
      console.error(error);
    }
  };

  const userSignup = async (signupData) => {
    try {
      dispatch({ type: "IS_LOGGED_IN_TRUE", payload: true });
      navigate(
        location?.state?.from?.pathname ? location?.state?.from?.pathname : "/"
      );
    } catch (error) {
      dispatch({ type: "IS_LOGGED_IN_FALSE", payload: false });
      console.error(error);
    }
  };

  const userLogout = () => {
    dispatch({ type: "IS_LOGGED_IN_FALSE", payload: false });
    dispatch({ type: "SET_USER", payload: {} });
    navigate(
      location?.state?.from?.pathname ? location?.state?.from?.pathname : "/"
    );
  };

  return (
    <AuthContext.Provider value={{ ...state, loginUser, userSignup, userLogout }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
