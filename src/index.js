import "./index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoteBrowse } from "pages/NoteBrowse/NoteBrowse";
import { Note } from "pages/Note/Note";
import { NoteCreate } from "pages/NoteCreate/NoteCreate";
import { PageNotFound } from "pages/PageNotFound/PageNotFound";
import { ProtectedApp } from "App";
import { Signin } from "pages/Signin/Signin";
import { Signup } from "pages/Signup/Signup";
import { FirebaseApp } from "utils/firebase";
import { PersistGate } from "redux-persist/integration/react";
import { TestPage } from "pages/TestPage/TestPage";

FirebaseApp.init();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestPage/>}/>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<ProtectedApp />}>
            <Route path="/home" element={<NoteBrowse />} />
            <Route path="/home/note/:noteId" element={<Note />} />
            <Route path="/home/note/new" element={<NoteCreate />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
