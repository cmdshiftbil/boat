import React from "react";
import { Icon } from "../GridCard/Icon";
import GridCard from "../GridCard";
import Title from "../Title";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  position: number;
  className?: string;
}

export default function ServiceCard({
  title,
  position,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "border border-caramel-900/50 flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] justify-end w-full",
        className
      )}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white stroke-caramel-300" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white stroke-caramel-300" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white stroke-caramel-300" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white stroke-caramel-300" />

      <GridCard title={`${position + 1}`} />

      <div className="pb-6 pt-4 flex flex-col gap-6 w-full">
        <Title as="h3" className="flex flex-row gap-3">
          <span>
            {position + 1}
            <span className="font-bold text-caramel-500">/</span>
          </span>

          {title}
        </Title>
        <Button variant="outline" className="text-caramel-100" size="lg">
          Learn More
        </Button>
      </div>
    </motion.div>
  );
}
