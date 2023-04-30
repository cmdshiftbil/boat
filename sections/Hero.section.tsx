import { FadeIn } from "@/components/Animations";
import ScrollIcon from "@/components/ScrollIcon";

const HeroSection = () => {
  return (
    <section className="mx-auto h-[calc(100vh-205px)] flex flex-col justify-between py-12">
      <div className="text-center mt-[30vh] ">
        <FadeIn>
          <h1 className="font-bold tracking-tight text-shark-300 text-6xl">
            Retail fit out contractor
          </h1>
          <p className="mt-6 text-lg leading-8 text-shark-400">
            retail experts for luxury lifestyle brands
          </p>
        </FadeIn>
      </div>
      <div className="flex justify-center items-center w-full">
        <ScrollIcon />
      </div>
    </section>
  );
};

export default HeroSection;
