const PorfolioWrapper = ({ children }: any) => {
  return (
    <section className="grid gap-6 my-0 mx-auto pb-[30vh] grid-cols-portfolioContent p-6">
      {children}
    </section>
  );
};

export default PorfolioWrapper;
