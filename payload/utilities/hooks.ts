import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload/types";

export const buildAndDeploy = async (deployUrl?: string) => {
  // const url = deployUrl ?? "https://api.vercel.com/v1/integrations/deploy/prj_sgjyoynUg0amTZ7DoO4453GY9kMA/dfGqdnH1QR";
  const url = deployUrl ?? process.env.DEPLOY_HOOK;

  if (process.env.NODE_ENV !== "development" && url) {
    console.log("Deploying a new build...");
    await fetch(url);
    return "Deploy successful. Please wait a few minutes for your changes to reflect in the website";
  } else {
    console.log("Skipping build as either not production or URL is not available...", {
      "process.env.NODE_ENV": process.env.NODE_ENV,
      url
    });
    return "Skipping deployment due to development environment";
  }
}

const triggerDeployHookAfterChange: CollectionAfterChangeHook = async ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  operation, // name of the operation ie. 'create', 'update'
}) => {
  // Disable auto deploys as they are costly
  // await buildAndDeploy();
  return doc;
}
const triggerDeployHookAfterDelete: CollectionAfterDeleteHook = async ({
  req, // full express request
  id, // id of document to delete
  doc, // deleted document
}) => {
  // Disable auto deploys as they are costly
  // await buildAndDeploy();
  return doc;
}

export {
  triggerDeployHookAfterChange,
  triggerDeployHookAfterDelete
};
