import getPayloadClient from "@/payload/payloadClient";

export const getServices = async () => {
  const payload = await getPayloadClient();
  const services = await payload.find({
    collection: "services",
    where: {
      showInHomePage: { equals: true },
    },
    limit: 4,
  });
  return services.docs;
};
