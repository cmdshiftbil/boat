const ElbowLineRight = () => {
  return null;
};

ElbowLineRight.HorizontalLine = function LinePartOne(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width={497}
      height={2}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="elbow-line-right-horizontal"
      {...props}
    >
      <path d="M0 1h496.5" stroke="#fff" />
    </svg>
  );
};

ElbowLineRight.Elbow = function Elbow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={315}
      height={315}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="elbow-line-right-elbow"
      {...props}
    >
      <path d="M0 1h24c160.163 0 290 129.837 290 290v24" stroke="#fff" />
    </svg>
  );
};

ElbowLineRight.VerticalLine = function VerticalLine(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width={1}
      height={248}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="elbow-line-right-vertical"
      {...props}
    >
      <path d="M.5 247.5V0" stroke="#fff" />
    </svg>
  );
};

export default ElbowLineRight;
