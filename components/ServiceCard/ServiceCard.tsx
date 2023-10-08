import React from "react";
import { Icon } from "../GridCard/Icon";
import GridCard from "../GridCard";
import Title from "../Title";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import SchemaCard from "../SchemaCard/SchemaCard";

interface ServiceCardProps {
  title: string;
  position: number;
  className?: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  icon,
  title,
  position,
  className,
}: ServiceCardProps) {
  return (
    <SchemaCard maxWidth={false}>
      <GridCard title={icon} />
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
    </SchemaCard>
  );
}
