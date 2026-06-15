import { useDispatch, useSelector } from "react-redux";

/**
 * Typed dispatch hook — use instead of `useDispatch()` directly
 */
export const useAppDispatch = () => useDispatch();

/**
 * Typed selector hook — use instead of `useSelector()` directly
 */
export const useAppSelector = (selector) => useSelector(selector);
