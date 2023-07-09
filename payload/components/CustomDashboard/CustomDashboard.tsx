import { ElementButton } from "payload/components/rich-text";
import { buildAndDeploy } from "../../utilities/hooks";
import "./index.scss";

const DeployButton = () => (
  <>
    <div style={{ marginTop: "20px" }}></div>
    <h3>Deploy CMS to the website</h3>
    <p>
      Click the button whenever you want to reflect the latest changes to the
      website.
    </p>

    <button
      onClick={async (e) => {
        e.preventDefault();
        const ask = confirm(
          "Are you sure to deploy the latest changes to the website?"
        );
        if (ask) {
          const result = await buildAndDeploy();
          setTimeout(() => {
            alert(result);
          }, 500);
        }
      }}
    >
      Deploy CMS
    </button>
  </>
);

export const CustomDashboard = () => {
  return (
    <div>
      <div style={{ marginTop: "20px" }}></div>
      <hr className="custom-line" />
      <DeployButton />
    </div>
  );
};
