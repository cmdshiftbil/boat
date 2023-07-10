"use client";

import Button from "../../../../components/Button";
import Heading from "../../../../components/Heading";
import Text from "../../../../components/Text";

export const Header = () => {
  return (
    <header className="px-6 sm:px-12">
      <Heading className="mb-6 text-shark-50 sm:mb-12">Portfolio</Heading>

      <div className="flex flex-col gap-6 pb-5 lg:flex-row sm:items-center sm:justify-between sm:gap-12">
        <Text className="flex-1">
          As a leading retail fit out agency, we design and build retail
          showcase outlets for the world’s iconic luxury retail brands from the
          ground up to engineer incredible shopping experiences.
        </Text>
        <div className="flex-2">
          <Button to="/contact" className="w-full">
            Discuss your design with us
          </Button>
        </div>
      </div>
    </header>
  );
};
