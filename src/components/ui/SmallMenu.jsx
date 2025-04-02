import { useContext, useState, createContext } from "react";
import { createPortal } from "react-dom";
import { CiMenuKebab } from "react-icons/ci";

const SmallMenuContext = createContext();

export default function SmallMenu({ children }) {
  const [smallMenuName, setSmallMenuName] = useState(null);
  function openSmallMenu(arg) {
    setSmallMenuName(arg);
  }
  function closeSmallMenu() {
    setSmallMenuName(null);
  }

  return (
    <SmallMenuContext.Provider
      value={{ smallMenuName, openSmallMenu, closeSmallMenu }}
    >
      <div className=" bg-red-200 inline-block">{children}</div>
    </SmallMenuContext.Provider>
  );
}

function Toggle({ name }) {
  const { smallMenuName, openSmallMenu, closeSmallMenu } =
    useContext(SmallMenuContext);
  const handelClick = (e) => {
    const rect = e.target.closest("button").getBoundingClientRect();

    // const rect = toggleRef.current.getBoundingClientRect();
    // openSmallMenu(name, { top: rect.top + window.scrollY, left: rect.left });

    if (smallMenuName === "" || smallMenuName !== name) {
      openSmallMenu(name);
    } else {
      closeSmallMenu();
    }
  };

  return (
    <div
      className=" bg-gray-200 cursor-pointer p-1 m-1 rounded-[10px]  absolute top-[5px] right-[5px]"
      onClick={(e) => handelClick(e)}
    >
      <CiMenuKebab size={25} />
    </div>
  );
}
function List({ name, children }) {
  const { smallMenuName } = useContext(SmallMenuContext);

  if (smallMenuName !== name) {
    return null;
  }
  return createPortal(
    <div className=" bg-blue-500 flex gap-2 p-5 absolute top-[5px] right-[5px]">
      {children}
    </div>,
    document.body
  );
}
function Button({ children }) {
  return (
    <>
      <li>{children}</li>
    </>
  );
}

SmallMenu.Toggle = Toggle;
SmallMenu.List = List;
SmallMenu.Button = Button;
