import Parallax from "@/components/Parallax";
import Text from "@/components/Text";

const MainHeadlineSection = () => {
  return (
    <section>
      <Parallax>
        <Text
          as="h1"
          className="font-extrabold  clamp-text-9xl text-shark-50"
          // className="font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-shark-200 to-shark-500"
          animate
        >
          We are forward-thinking retail concept development specialists.
        </Text>
      </Parallax>
    </section>
  );
};

export default MainHeadlineSection;
