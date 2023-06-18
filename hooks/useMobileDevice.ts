import { useWindowSize } from "react-use";

const useMobileDevice = () => {
  const { width: windowWidth } = useWindowSize();
  const isMobile = windowWidth <= 1024;
  return isMobile;
}
export default useMobileDevice;
