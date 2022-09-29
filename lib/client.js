import SanityClient  from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";

export const client = SanityClient({
    projectId: "c9yhbctm",
    dataset: 'production',
    apiVersion: "2022-08-23",
    useCdn: true,
    token: 'skYKqLSVF8alZrFitRdrzEG0GsULtOD9zEaAd4j4WgnEJJvPukdnXcglenKvhI0BIJuZ7UQmNlHw3uIfJDzbFl3dgqZGthVXgV5wEP6JuYysg6Cc8PD0UVMqPfT9zHPlvpoqPqdlk04UX48F0g9vellSbMFfXnRlSHk3uwEAG5CZdUndg3qC'
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)