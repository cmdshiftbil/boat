import { Children, cloneElement } from "react";

const RightPanelContent = ({ children, className = "", index }: any) => {
  return (
    <div
      className="right-panel-content h-screen w-full flex justify-center items-center"
      data-right-panel-marker={index}
    >
      {children}
    </div>
  );
};

export default RightPanelContent;
