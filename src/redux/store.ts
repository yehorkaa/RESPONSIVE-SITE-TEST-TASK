import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./rootReducer";

export const store = configureStore({
    reducer: reducers ,// тут у нас корневой редюсер который идет как объект из многих редюсеров
})
// нам нужен тип нашего хранилища чтобы делать кастомные хуки с помощью ТС
export type TypeRootState = ReturnType<typeof store.getState> // берем все состояние и возвращаем как тип