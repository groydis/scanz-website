type ScanzSeoOptions = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
};

export const useScanzSeo = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = "/logo.png",
  twitterCard = "summary_large_image",
}: ScanzSeoOptions) => {
  useSeoMeta({
    title,
    description,
    ogTitle: ogTitle ?? title,
    ogDescription: ogDescription ?? description,
    ogImage,
    twitterCard,
  });
};
