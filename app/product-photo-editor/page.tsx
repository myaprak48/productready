export const metadata = {
  title: "Product Photo Editor | ProductReady",
  description:
    "Edit product photos online with AI. Remove backgrounds, create white backgrounds, and prepare marketplace-ready images in seconds.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold mb-8">
        Product Photo Editor
      </h1>

      <p className="text-xl text-gray-400 mb-8">
        Edit product photos online with AI. ProductReady helps ecommerce sellers
        remove backgrounds, create clean product images, and prepare photos for
        Amazon, Etsy, Shopify, and online stores.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Why Product Photos Matter
      </h2>

      <p className="text-gray-400 mb-6">
        Product photos are often the first thing customers notice. High-quality
        images improve trust, increase clicks, and help products stand out in
        crowded marketplaces.
      </p>

      <p className="text-gray-400 mb-6">
        Clean product photography can improve conversion rates and create a more
        professional shopping experience.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        What ProductReady Helps You Do
      </h2>

      <ul className="list-disc pl-6 text-gray-400">
        <li>Remove image backgrounds</li>
        <li>Create white background product photos</li>
        <li>Generate transparent PNG images</li>
        <li>Prepare images for marketplaces</li>
        <li>Create professional ecommerce visuals</li>
      </ul>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        How It Works
      </h2>

      <ol className="list-decimal pl-6 text-gray-400">
        <li>Upload your image</li>
        <li>AI removes the background</li>
        <li>Create your preferred output</li>
        <li>Download the final image</li>
      </ol>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold mb-2">
        Can I edit product photos online?
      </h3>
      <p className="text-gray-400 mb-6">
        Yes. ProductReady lets you edit product photos with AI in seconds.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Do I need Photoshop?
      </h3>
      <p className="text-gray-400 mb-6">
        No. ProductReady is designed for beginners and ecommerce sellers.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        Can I create transparent PNG files?
      </h3>
      <p className="text-gray-400 mb-6">
        Yes. You can download transparent PNG product images after background removal.
      </p>

      <div className="mt-16">
        <h2 className="text-4xl font-bold mb-4">
          Edit Product Photos in Seconds
        </h2>

        <p className="text-gray-400 mb-6">
          Use ProductReady to remove backgrounds, create cleaner images, and prepare
          professional product photos for ecommerce.
        </p>

        <a
          href="/"
          className="inline-block rounded-full bg-white text-black px-6 py-3 font-semibold"
        >
          Try ProductReady Free
        </a>
      </div>

    </main>
  );
}