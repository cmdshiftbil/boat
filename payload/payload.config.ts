import path from "path";
import { buildConfig } from "payload/config";
import Icon from "./components/Icon";
import Logo from "./components/Logo";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { Projects } from "./collections/Projects";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { Clients } from "./collections/Clients";
import { Services } from "./collections/Services";
import { Posts } from "./collections/Posts";
import { Pages } from "./collections/Pages";
import { CustomDashboard } from "./components/CustomDashboard/CustomDashboard";

const adapter = s3Adapter({
  config: {
    endpoint: process.env.NEXT_PUBLIC_S3_ENDPOINT,
    region: process.env.S3_REGION,
    forcePathStyle: true,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
    },
  },
  bucket: process.env.NEXT_PUBLIC_S3_BUCKET as string,
});

export default buildConfig({
  collections: [Projects, Media, Users, Clients, Posts, Pages, Services],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },

  admin: {
    components: {
      graphics: {
        Icon: Icon,
        Logo: Logo,
      },
      afterDashboard: [CustomDashboard],
    },
  },
  // cors: ["localhost:3000", "alpha-nero-media.s3.ap-south-1.amazonaws.com"],
  cors: "*",

  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter,
          disablePayloadAccessControl: true,
        },
      },
    }),
  ],
});
