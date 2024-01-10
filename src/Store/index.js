import { configureStore } from "@reduxjs/toolkit";
import ToDoSlices from "./slices/ToDoSlices";



const store = configureStore({
    reducer: {
        todos: ToDoSlices
    }
})


export default store

