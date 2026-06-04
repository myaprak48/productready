export const metadata = {
  title: "Amazon Product Photo Editor | ProductReady",
  description:
    "Edit Amazon product photos with AI. Remove backgrounds, create white backgrounds and prepare images for Amazon listings.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-8">
        Amazon Product Photo Editor
      </h1>

      <p className="text-xl text-gray-400 mb-8">
        Create Amazon-ready product photos in seconds. Remove backgrounds,
        add clean white backgrounds and improve product presentation with AI.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Why Amazon Sellers Need Better Photos
      </h2>

      <p className="text-gray-400">
        Professional product images help increase click-through rates,
        improve conversions and build customer trust.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Features
      </h2>

      <ul className="list-disc pl-6 text-gray-400">
        <li>Background removal</li>
        <li>White background generation</li>
        <li>Marketplace-ready export</li>
        <li>Fast AI processing</li>
      </ul>
    </main>
  );
}