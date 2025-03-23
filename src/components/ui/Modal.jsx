import { useState, cloneElement, useContext, createContext } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";

const ModalContext = createContext();

function Modal({ children }) {
  const [modalName, setModalName] = useState("");

  const openModal = (name) => {
    setModalName(name);
  };
  const closeModal = () => {
    setModalName("");
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modalName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, openName }) {
  const { openModal } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => openModal(openName) });
}

function Window({ children, windowName }) {
  const { t, i18n } = useTranslation();

  const { modalName, closeModal } = useContext(ModalContext);

  if (windowName !== modalName) {
    return null;
  }

  return createPortal(
    <div>
      <div
        className={`fixed left-0 top-0 z-[110] h-full w-full bg-[#00000050] backdrop-blur-sm`}
      ></div>

      <div className="fixed left-0 top-0 z-[1000] h-full w-full">
        <div
          className={`p-[50px] fixed left-[50%] top-[50%] z-50 max-h-[80vh] w-[90%] translate-x-[-50%] translate-y-[-50%] overflow-auto rounded-[30px] bg-white shadow-md md:w-[750px]`}
        >
          <button
            aria-label={t("general.close")}
            title={t("general.close")}
            onClick={closeModal}
            className={`absolute ${
              i18n.language === "ar" ? "left-[20px]" : "right-[20px]"
            } top-[10px] text-red-500 cursor-pointer`}
          >
            <FaTimes size={25} />
          </button>
          <div>{cloneElement(children, { onCloseModal: closeModal })}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
