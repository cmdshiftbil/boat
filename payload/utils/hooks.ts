import { CollectionAfterChangeHook } from "payload/types";

const triggerDeployHookAfterChange: CollectionAfterChangeHook = ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  operation, // name of the operation ie. 'create', 'update'
}) => {
  if (process.env.NODE_ENV !== "development") {
    fetch("https://api.vercel.com/v1/integrations/deploy/prj_sgjyoynUg0amTZ7DoO4453GY9kMA/dfGqdnH1QR");
  }
  return doc;
}

export { triggerDeployHookAfterChange };
