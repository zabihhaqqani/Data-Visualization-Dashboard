import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "../reducer/reducer";
import { fetchData } from "../utils/fetchData";
import { format, parseISO } from "date-fns";
import Cookies from "universal-cookie";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const cookies = new Cookies();

  const initialState = {
    data: [],
    gender: cookies.get("gender") ?? "both",
    age: cookies.get("age") ?? "all",
    startDate: cookies.get("startDate") ?? "",
    endDate: cookies.get("endDate") ?? "",
    applyDateFilter: cookies.get("applyDateFilter") ?? false,
    showFilters:false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //   cookie management
  const updateCookies = (newState) => {
    cookies.set("gender", newState.gender, { path: "/" });
    cookies.set("age", newState.age, { path: "/" });
    cookies.set("startDate", newState.startDate, { path: "/" });
    cookies.set("endDate", newState.endDate, { path: "/" });
    cookies.set("applyDateFilter", newState.applyDateFilter, { path: "/" });
  };

  const clearAllFilters = () => {
    dispatch({ type: "CANCEL_DATE_FILTER" });
    dispatch({ type: "CLEAR_ALL_FILTERS" });
    cookies.remove("gender", { path: "/" });
    cookies.remove("age", { path: "/" });
    cookies.remove("startDate", { path: "/" });
    cookies.remove("endDate", { path: "/" });
    cookies.remove("applyDateFilter", { path: "/" });
  };

  const dateData = [...state?.data]?.filter((item) =>
    state.applyDateFilter
      ? (!state.startDate || new Date(item.day) >= parseISO(state.startDate)) &&
        (!state.endDate || new Date(item.day) <= parseISO(state.endDate))
      : item
  );

  const filteredData = dateData?.filter(
    (item) =>
      (state.gender === "both" || item.gender === state.gender) &&
      (state.age === "all" || item.age === state.age)
  );

  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);

  useEffect(() => {
    updateCookies(state);
  }, [state]);


  return (
    <DataContext.Provider
      value={{ ...state, dispatch, filteredData, clearAllFilters }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
