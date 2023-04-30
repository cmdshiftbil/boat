export const NumberCounterWrapper = ({ children }: any) => {
  return (
    <div className="flex flex-col justify-center items-center text-shark-50 text-5xl font-bold">
      {children}
    </div>
  );
};

export const Number = ({ children }: any) => {
  return <h3 className="text-shark-50 text-9xl font-bold">{children}</h3>;
};

export const NumberCounterLabel = ({ children }: any) => {
  return <div className="text-shark-50 text-3xl font-bold">{children}</div>;
};
