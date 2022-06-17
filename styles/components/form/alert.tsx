import React from "react";
import { MdError } from "react-icons/md";

interface iAlert {
  children: React.ReactNode;
  className?: string;
  alertType?: "sucess" | "alert" | "error" | string;
  alertDuration?: number,
  fullWidth?: boolean;
}
const BaseAlert: React.FC<iAlert> = ({ children, className, alertType }) => {
  return (
    <div className={className} aria-label={alertType}>
      <div className="error">
        <MdError size={21} />
        <p>{children}</p>
      </div>
      <div className="progressBar">
        <span></span>
      </div>
    </div>
  );
};

export default BaseAlert;
