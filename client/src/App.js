import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Modal from "react-modal";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DashBoard from "./Pages/DashBoard";
import AddExpense from "./components/AddExpense";
import { Routes, Route } from "react-router-dom";
import SetBudget from "./components/SetBudget";
import Main from "./Pages/Main";
import MainAnalysis from "./Pages/MainAnalysis";
import MainSpendAnalysis from "./Pages/MainSpendAnalysis";
import MainDaily from "./Pages/MainDaily";
import ConfirmDelete from "./Pages/ConfirmDelete";
import { Scrollbars } from "react-custom-scrollbars";
import Contact from "./Pages/contactUs";

Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenLogin, setIsOpenLogin] = useState(false);
  const [modalIsOpenExpense, setIsOpenExpense] = useState(false);
  const [modalIsOpenBudget, setIsOpenBudget] = useState(false);
  const [modalisOpenConfirm, setIsOpenConfirm] = useState(false);
  const [modalIsOpenContact, setIsOpenContact] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();

  const [deleteId, setDeleteId] = useState();

  // Modal Open/Close Functions
  function openModalContact() {
    setIsOpenContact(true);
  }

  function closeModalContact() {
    setIsOpenContact(false);
  }

  function openModalConfirm() {
    setIsOpenConfirm(true);
  }

  function closeModalConfirm() {
    setIsOpenConfirm(false);
  }
  
  function openModalExpense() {
    setIsOpenExpense(true);
  }

  function closeModalExpense() {
    setIsOpenExpense(false);
  }

  function openModalBudget() {
    setIsOpenBudget(true);
  }

  function closeModalBudget() {
    setIsOpenBudget(false);
  }

  function openModalSignup() {
    setIsOpen(true);
  }

  function closeModalSignup() {
    setIsOpen(false);
  }

  function openModalLogin() {
    setIsOpenLogin(true);
  }

  function closeModalLogin() {
    setIsOpenLogin(false);
  }

  // Styling for modals
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#ffffff",
      border: "2px solid #007BFF", // Blue border
      color: "#000000",
      width: `${window.innerWidth > 420 ? "40%" : "95vw"}`,
    },
  };

  const customStylesContact = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#ffffff", 
      border: "2px solid #007BFF", // Blue border
      color: "#000000",
      width: "70%",
      height: "82%",
    },
  };

  return (
    <Scrollbars style={{ width: "100vw", height: "100vh" }}>
      <div className="app-container" style={{ backgroundColor: "#f0f8ff" }}>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                openModalContact={openModalContact}
                openModalSignup={openModalSignup}
                openModalLogin={openModalLogin}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              ></LandingPage>
            }
          />
          <Route
            path="dashboard"
            element={
              <DashBoard
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                openModalExpense={openModalExpense}
              />
            }
          >
            <Route
              path=""
              element={
                <Main
                  setDeleteId={setDeleteId}
                  openModalConfirm={openModalConfirm}
                  openModalBudget={openModalBudget}
                />
              }
            />
            <Route path="analysis" element={<MainAnalysis />} />
            <Route path="dailyspendanalysis" element={<MainSpendAnalysis />} />
            <Route path="daily" element={<MainDaily />} />
          </Route>
          <Route path="/contact-us" element={<Contact />} />
        </Routes>

        {/* Signup Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModalSignup}
          style={customStyles}
        >
          <button onClick={closeModalSignup} className="close-modal-btn">
            &times;
          </button>
          <Signup closeModalSignup={closeModalSignup} openModalLogin={openModalLogin} />
        </Modal>

        {/* Login Modal */}
        <Modal
          isOpen={modalIsOpenLogin}
          onRequestClose={closeModalLogin}
          style={customStyles}
        >
          <button onClick={closeModalLogin} className="close-modal-btn">
            &times;
          </button>
          <Login closeModalLogin={closeModalLogin} openModalSignup={openModalSignup} />
        </Modal>

        {/* Add Expense Modal */}
        <Modal
          isOpen={modalIsOpenExpense}
          onRequestClose={closeModalExpense}
          style={customStyles}
        >
          <button onClick={closeModalExpense} className="close-modal-btn">
            &times;
          </button>
          <AddExpense closeModalExpense={closeModalExpense} />
        </Modal>

        {/* Budget Modal */}
        <Modal
          isOpen={modalIsOpenBudget}
          onRequestClose={closeModalBudget}
          style={customStyles}
        >
          <button onClick={closeModalBudget} className="close-modal-btn">
            &times;
          </button>
          <SetBudget closeModalBudget={closeModalBudget} />
        </Modal>

        {/* Confirm Delete Modal */}
        <Modal
          isOpen={modalisOpenConfirm}
          onRequestClose={closeModalConfirm}
          style={customStyles}
        >
          <button onClick={closeModalConfirm} className="close-modal-btn">
            &times;
          </button>
          <ConfirmDelete deleteId={deleteId} closeModalConfirm={closeModalConfirm} />
        </Modal>

        {/* Contact Us Modal */}
        <Modal
          isOpen={modalIsOpenContact}
          onRequestClose={closeModalContact}
          style={customStylesContact}
        >
          <button onClick={closeModalContact} className="close-modal-btn">
            &times;
          </button>
          <Contact closeModalContact={closeModalContact} />
        </Modal>
      </div>
    </Scrollbars>
  );
}

export default App;
