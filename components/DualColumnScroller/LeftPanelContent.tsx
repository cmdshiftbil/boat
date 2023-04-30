const LeftPanelContent = ({ children, index }: any) => {
  return (
    <div
      className="left-panel-content text-4xl text-shark-50 font-bold absolute opacity-0"
      data-left-panel-marker={index}
    >
      {children}
    </div>
  );
};

export default LeftPanelContent;
