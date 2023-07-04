import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload/types";

const buildAndDeploy = () => {
  if (process.env.NODE_ENV !== "development") {
    fetch("https://api.vercel.com/v1/integrations/deploy/prj_sgjyoynUg0amTZ7DoO4453GY9kMA/dfGqdnH1QR");
  }
}

const triggerDeployHookAfterChange: CollectionAfterChangeHook = ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  operation, // name of the operation ie. 'create', 'update'
}) => {
  console.log("triggerDeployHookAfterChange", {
    doc, operation
  });
  buildAndDeploy();
  return doc;
}
const triggerDeployHookAfterDelete: CollectionAfterDeleteHook = ({
  req, // full express request
  id, // id of document to delete
  doc, // deleted document
}) => {
  console.log("triggerDeployHookAfterDelete", {
    doc, id
  })
  buildAndDeploy();
  return doc;
}

export {
  triggerDeployHookAfterChange,
  triggerDeployHookAfterDelete
};
