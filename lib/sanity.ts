import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion : 'v1',
    dataset : 'production',
    projectId : process.env.SANITY_PROJECT_ID,
    useCdn : false,
});

const buidler = ImageUrlBuilder(client);

export function urlFor(source : any) {
    return buidler.image(source);
}