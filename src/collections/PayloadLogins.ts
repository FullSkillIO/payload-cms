import { CollectionConfig } from "payload/types";

const PayloadLogins: CollectionConfig = {
  slug: "payload-logins",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default PayloadLogins;
