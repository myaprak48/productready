import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://productreadyapp.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://productreadyapp.com/remove-background-from-image",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://productreadyapp.com/transparent-background-maker",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://productreadyapp.com/white-background-image",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://productreadyapp.com/amazon-product-photo-editor",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://productreadyapp.com/shopify-product-photo-editor",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://productreadyapp.com/etsy-product-photo-editor",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
  url: "https://productreadyapp.com/product-photo-editor",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://productreadyapp.com/product-image-cleaner",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://productreadyapp.com/ai-background-remover",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://productreadyapp.com/product-photo-background-remover",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://productreadyapp.com/background-remover-for-ecommerce",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
},
  ];
}