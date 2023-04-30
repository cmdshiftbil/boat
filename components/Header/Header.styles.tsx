export const HeaderWrapper = ({ children }: any) => {
  return (
    <header className="flex flex-row justify-between items-center relative z-50 h-40 text-shark-50 px-12">
      {children}
    </header>
  );
};
