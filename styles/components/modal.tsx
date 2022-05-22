import React from "react";
import { MdClose } from "react-icons/md";
import { useClickOutisde } from "../../hooks/useOutsideClick";

interface iModal {
  children: React.ReactNode;
  className?: string;
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
              <button onClick={() => setActive(false)}>
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
