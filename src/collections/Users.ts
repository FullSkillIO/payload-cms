import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["firstName", "lastName", "email"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "email",
      type: "text",
      hidden: true,
    },
    {
      name: "lastName",
      type: "text",
    },
    {
      name: "firstName",
      type: "text",
    },

    {
      name: "career",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "companyName",
          type: "text",
        },
        {
          name: "months",
          type: "text",
        },
        {
          name: "industry",
          type: "text",
        },
      ],
    },

    {
      name: "skills",
      type: "array",
      fields: [
        {
          name: "prof",
          type: "text",
        },
        {
          name: "name",
          type: "text",
        },
      ],
    },
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;
