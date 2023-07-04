// DEBUGGING: Useful for print which device screensize is currently visible
const ScreenSize = () => {
  return (
    <>
      <div className="block sm:hidden font-bold uppercase">xs</div>
      <div className="hidden sm:block md:hidden font-bold uppercase">sm</div>
      <div className="hidden md:block lg:hidden font-bold uppercase">md</div>
      <div className="hidden lg:block xl:hidden font-bold uppercase">lg</div>
      <div className="hidden xl:block 2xl:hidden font-bold uppercase">xl</div>
      <div className="hidden 2xl:block 3xl:hidden font-bold uppercase">2xl</div>
      <div className="hidden 3xl:block font-bold uppercase">3xl</div>
    </>
  );
};

export default ScreenSize;
