import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload/types";

const buildAndDeploy = async () => {
  if (process.env.NODE_ENV !== "development") {
    console.log("Deploying due to CMS changes");
    await fetch("https://api.vercel.com/v1/integrations/deploy/prj_sgjyoynUg0amTZ7DoO4453GY9kMA/dfGqdnH1QR");
  }
}

const triggerDeployHookAfterChange: CollectionAfterChangeHook = async ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  operation, // name of the operation ie. 'create', 'update'
}) => {
  await buildAndDeploy();
  return doc;
}
const triggerDeployHookAfterDelete: CollectionAfterDeleteHook = async ({
  req, // full express request
  id, // id of document to delete
  doc, // deleted document
}) => {
  await buildAndDeploy();
  return doc;
}

export {
  triggerDeployHookAfterChange,
  triggerDeployHookAfterDelete
};
