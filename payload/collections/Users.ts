import { CollectionConfig } from "payload/types";
import { isAdmin, isAdminFieldLevel } from "../access/isAdmin";
import {
  isAdminOrSelf,
  isAdminOrSelfFieldLevel,
} from "../access/isAdminOrSelf";
import { triggerDeployHookAfterChange, triggerDeployHookAfterDelete } from "../utilities/hooks";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "firstName",
          type: "text",
          required: true,
        },
        {
          name: "lastName",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      defaultValue: ["editor"],
      required: true,
      access: {
        read: isAdminOrSelfFieldLevel,
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      options: ["admin", "editor"],
    },
  ],
  hooks: {
    afterChange: [triggerDeployHookAfterChange],
    afterDelete: [triggerDeployHookAfterDelete],
  }
};
