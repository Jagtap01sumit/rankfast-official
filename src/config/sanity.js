import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "cyz6zl3a",
    dataset: "production",
    apiVersion: "2021-06-07",
    useCdn: true,
})

export default client