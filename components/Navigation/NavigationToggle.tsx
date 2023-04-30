const Path = (props: any) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const NavigationToggle = ({ onToggle }: any) => (
  <button onClick={onToggle} className="z-10 relative p-6">
    MENU
  </button>
);

export default NavigationToggle;
