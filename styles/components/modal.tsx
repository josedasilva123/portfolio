import React from "react";
import { MdClose } from "react-icons/md";
import { useClickOutisde } from "../../hooks/useOutsideClick";
import { tSizeList } from "../config/breakpoints";

interface iModalPosition{
    h: 'left' | 'center' | 'right';
    v: 'top' | 'center' | 'bottom';
}

interface iModal {
  children: React.ReactNode;
  className?: string;
  modalPosition: iModalPosition;
  modalPadding?: tSizeList;
  modalMaxWidth?: string;
  modalHeight?: string;
  modalMaxHeight?: string;
  modalScroll?: boolean;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BaseModal: React.FC<iModal> = ({
  children,
  className,
  active,
  setActive,
}) => {
  const modalBox: any = useClickOutisde(() => setActive(false)); 
  return (
    <>
      {active && (
        <div className={className}>
          <div className="overlay">
            <div className="box" ref={modalBox}>
              <button className="close" onClick={() => setActive(false)}>
                <MdClose size={24} />
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BaseModal;
