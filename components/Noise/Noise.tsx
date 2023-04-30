const Noise = () => {
  return (
    <div
      //   className="fixed top-0 left-0 w-screen h-screen z-1000 pointer-events-none opacity-30 bg-repeat bg-cover bg-center bg-[length:400px_600px] mix-blend-overlay"
      className="fixed w-screen h-screen opacity-10 z-[1000] pointer-events-none left-0 top-0 bg-[length:300px_500px] mix-blend-overlay"
      style={{ backgroundImage: "url('/images/noise.gif')" }}
    ></div>
  );
};

export default Noise;
