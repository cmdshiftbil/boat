import { Children, cloneElement } from "react";

const RightPanelContent = ({ children, className = "", index }: any) => {
  return (
    <div
      className="relative right-panel-content h-screen w-full flex justify-center items-center flex-col"
      data-right-panel-marker={index}
    >
      {children}
    </div>
  );
};

export default RightPanelContent;
