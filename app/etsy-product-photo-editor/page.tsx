export const metadata = {
  title: "Etsy Product Photo Editor | ProductReady",
  description:
    "Edit Etsy product photos with AI. Remove backgrounds, create clean product images and improve your Etsy listings.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-8">
        Etsy Product Photo Editor
      </h1>

      <p className="text-xl text-gray-400 mb-8">
        Create beautiful Etsy product photos with AI. Remove backgrounds,
        improve image quality and attract more buyers.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Why Etsy Photos Matter
      </h2>

      <p className="text-gray-400">
        High-quality product images help Etsy sellers stand out and increase sales.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Features
      </h2>

      <ul className="list-disc pl-6 text-gray-400">
        <li>Background removal</li>
        <li>Professional product presentation</li>
        <li>Fast AI editing</li>
      </ul>
    </main>
  );
}