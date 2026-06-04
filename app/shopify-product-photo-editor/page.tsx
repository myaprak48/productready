export const metadata = {
  title: "Shopify Product Photo Editor | ProductReady",
  description:
    "Edit Shopify product photos with AI. Create professional ecommerce images and increase conversions.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-8">
        Shopify Product Photo Editor
      </h1>

      <p className="text-xl text-gray-400 mb-8">
        Create clean Shopify-ready product images with AI.
        Remove backgrounds and improve your store visuals.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Why Shopify Stores Need Better Photos
      </h2>

      <p className="text-gray-400">
        Better product photos increase trust and improve conversion rates.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Features
      </h2>

      <ul className="list-disc pl-6 text-gray-400">
        <li>AI background removal</li>
        <li>White background generation</li>
        <li>Professional ecommerce images</li>
      </ul>
    </main>
  );
}