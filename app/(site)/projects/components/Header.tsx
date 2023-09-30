"use client";

import Title from "@/components/Title";
import Button from "../../../../components/Button";
import Heading from "../../../../components/Heading";
import Text from "../../../../components/Text";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import BouncyLine from "@/components/BouncyLine";

export const Header = () => {
  return (
    <FadeInStagger>
      <header className="sm:container px-6 sm:px-12">
        <FadeIn className="mb-6">
          <Title>Projects</Title>
        </FadeIn>
        <p className="text-2xl text-caramel-100">
          As a leading retail fit out agency, we design and build retail
          showcase outlets for the world’s iconic luxury retail brands from the
          ground up to engineer incredible shopping experiences.
        </p>

        <div className="mt-12">
          <BouncyLine />
        </div>

        {/* <div className="flex flex-col gap-6 pb-5 lg:flex-row sm:items-center sm:justify-between sm:gap-12">
          <Text className="flex-1">
            As a leading retail fit out agency, we design and build retail
            showcase outlets for the world’s iconic luxury retail brands from
            the ground up to engineer incredible shopping experiences.
          </Text>
          <div className="flex-2">
            <Button to="/contact" className="w-full">
              Discuss your design with us
            </Button>
          </div>
        </div> */}
      </header>
    </FadeInStagger>
  );
};
