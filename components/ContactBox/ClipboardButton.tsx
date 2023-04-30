import { useEffect, useState } from "react";

const ClipboardButton = ({ title, value, onClick, state }: any) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (state.value === value) {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  }, [state.value]);

  const onClickButton = () => {
    if (onClick) {
      onClick(value);
    }
  };

  return (
    <button
      type="button"
      className="relative inline-flex items-center px-6 py-6 text-sm font-semibold text-shark-50 ring-1 ring-inset ring-shark-50 hover:bg-shark-800 focus:z-10"
      onClick={onClickButton}
    >
      {isCopied ? "Copied!" : title}
    </button>
  );
};

export default ClipboardButton;
