import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import s from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const Homepage = lazy(async () => {
  return Promise.all([
    import("./pages/Homepage/Homepage"),
    new Promise((resolve) => setTimeout(resolve, 1500)),
    document.fonts.ready,
  ]).then(([moduleExports]) => moduleExports);
});

const Login = lazy(() => {
  return Promise.all([
    import("./pages/Login/Login"),
    new Promise((resolve) => setTimeout(resolve, 1500)),
    document.fonts.ready,
  ]).then(([moduleExports]) => moduleExports);
});

const Register = lazy(() => {
  return Promise.all([
    import("./pages/Register/Register"),
    new Promise((resolve) => setTimeout(resolve, 1500)),
    document.fonts.ready,
  ]).then(([moduleExports]) => moduleExports);
});

const AddExpert = lazy(() => {
  return Promise.all([
    import("./pages/AddExpert/AddExpert"),
    new Promise((resolve) => setTimeout(resolve, 1500)),
    document.fonts.ready,
  ]).then(([moduleExports]) => moduleExports);
});

const AddRate = lazy(() => {
  return Promise.all([
    import("./pages/AddRate/AddRate"),
    new Promise((resolve) => setTimeout(resolve, 1500)),
    document.fonts.ready,
  ]).then(([moduleExports]) => moduleExports);
});

const AddEvent = lazy(() => {
  return Promise.all([
    import("./pages/AddEvent/AddEvent"),
    new Promise((resolve) => setTimeout(resolve, 1500)),
    document.fonts.ready,
  ]).then(([moduleExports]) => moduleExports);
});

const Profile = lazy(() => {
  return Promise.all([
    import("./pages/Profile/Profile"),
    new Promise((resolve) => setTimeout(resolve, 1500)),
    document.fonts.ready,
  ]).then(([moduleExports]) => moduleExports);
});

const EditRate = lazy(() => {
  return Promise.all([
    import("./pages/EditRate/EditRate"),
    new Promise((resolve) => setTimeout(resolve, 1500)),
    document.fonts.ready,
  ]).then(([moduleExports]) => moduleExports);
});

const EditEvent = lazy(() => {
  return Promise.all([
    import("./pages/EditEvent/EditEvent"),
    new Promise((resolve) => setTimeout(resolve, 1500)),
    document.fonts.ready,
  ]).then(([moduleExports]) => moduleExports);
});

const EditExpert = lazy(() => {
  return Promise.all([
    import("./pages/EditExpert/EditExpert"),
    new Promise((resolve) => setTimeout(resolve, 1500)),
    document.fonts.ready,
  ]).then(([moduleExports]) => moduleExports);
});

const Page404 = lazy(() => {
  return Promise.all([
    import("./pages/Page404/Page404"),
    new Promise((resolve) => setTimeout(resolve, 1500)),
    document.fonts.ready,
  ]).then(([moduleExports]) => moduleExports);
});

function App() {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <div className={s.app}>
          <header className={s.header}>
            <Header />
          </header>
          <main className={s.content}>
            <Routes preserverScrollPosition={true}>
              <Route index path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/register" element={<Register />} /> */}
              <Route element={<PrivateRoute />}>
                <Route path="/add-rate" element={<AddRate />} />
                <Route path="/add-expert" element={<AddExpert />} />
                <Route path="/add-event" element={<AddEvent />} />
                <Route path="/edit-rate/:rateID" element={<EditRate />} />
                <Route path="/edit-event/:eventID" element={<EditEvent />} />
                <Route path="/edit-expert/:expertID" element={<EditExpert />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
              <Route path="*" element={<Page404 />} />
            </Routes>
          </main>
          <footer className={s.footer}>
            <Footer />
          </footer>
        </div>
      </Suspense>
    </>
  );
}

export default App;
