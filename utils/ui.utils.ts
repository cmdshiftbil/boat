import StairsUpIcon from "@/components/UserInterfaceElements/StairsUpIcon";

export const getLocalIcon = (icon: string) => {
  const iconDictionary: any = {
    stairsUpIcon: StairsUpIcon,
  };

  if (!iconDictionary[icon]) {
    console.error(`Icon ${icon} not found`);
    return;
  }

  return iconDictionary[icon];
};
