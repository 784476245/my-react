import {UNSAFE_DataRouterContext} from "react-router-dom";
import {type History} from "@remix-run/router";
import {useContext} from "react";

export const useHistory = () => {
  const context = useContext(UNSAFE_DataRouterContext);
  const navigator = context?.navigator;
  const state = context?.router?.state;
  const subscribe = context?.router?.subscribe;
  return {
    get location() {
      return state?.location;
    },
    get action() {
      return state?.historyAction;
    },
    listen: subscribe,
    ...navigator,
  } as unknown as History
}