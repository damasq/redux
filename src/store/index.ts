import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../slices";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({ reducer });

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch as () => AppDispatch;

export const useAppSelector = useSelector as TypedUseSelectorHook<AppState>;
