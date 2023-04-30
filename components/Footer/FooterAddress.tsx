import BlueprintLabel from "../BlueprintLabel";

const FooterAddress = () => {
  return (
    <section>
      <BlueprintLabel label="Address" />
      <address className="flex flex-col text-shark-50">
        <span>Alpha Nero FZ LLC</span>
        <span>Warehouse C07 1-2-3</span>
        <span>Dubai Production City P.O. BOX 485008</span>
        <span>Dubai, United Arab Emirates</span>
      </address>
    </section>
  );
};

export default FooterAddress;
