import { cn } from "@/utils/tailwind.utils";

export default function Container({ className, children }: any) {
  return (
    <div
      className={cn(className, "relative container mx-auto sm:px-6 lg:px-8")}
    >
      {children}
    </div>
  );
}
