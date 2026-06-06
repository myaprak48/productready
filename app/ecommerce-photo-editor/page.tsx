export const metadata = {
  title: "Ecommerce Photo Editor | ProductReady",
  description:
    "Edit ecommerce product photos with AI. Remove backgrounds, create white backgrounds, and prepare professional images for online stores.",
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-8">Ecommerce Photo Editor</h1>

      <p className="text-xl text-gray-400 mb-8">
        Edit ecommerce product photos with AI. ProductReady helps online sellers
        remove backgrounds, create clean product images, and prepare photos for
        Amazon, Etsy, Shopify, and marketplaces.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Why Ecommerce Photos Matter
      </h2>

      <p className="text-gray-400 mb-4">
        Product images are one of the most important parts of an online store.
        Clean, professional photos help customers understand your product and
        trust your brand.
      </p>

      <p className="text-gray-400">
        Messy backgrounds and inconsistent images can make a store look less
        professional. ProductReady helps create cleaner ecommerce visuals in
        seconds.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        What ProductReady Helps You Do
      </h2>

      <ul className="list-disc pl-6 text-gray-400 space-y-2">
        <li>Remove product photo backgrounds</li>
        <li>Create white background images</li>
        <li>Download transparent PNG product photos</li>
        <li>Prepare marketplace-ready images</li>
        <li>Create consistent ecommerce visuals</li>
      </ul>

      <h2 className="text-3xl font-bold mt-12 mb-4">How It Works</h2>

      <ol className="list-decimal pl-6 text-gray-400 space-y-2">
        <li>Upload your ecommerce product photo</li>
        <li>AI removes the background</li>
        <li>Choose transparent PNG or white background</li>
        <li>Download your edited product image</li>
      </ol>

      <h2 className="text-3xl font-bold mt-12 mb-4">
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold mt-8 mb-2">
        Can I edit ecommerce photos online?
      </h3>
      <p className="text-gray-400">
        Yes. ProductReady helps ecommerce sellers edit product photos online
        with AI.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-2">
        Can I use this for Amazon, Etsy, and Shopify?
      </h3>
      <p className="text-gray-400">
        Yes. ProductReady is designed for ecommerce sellers using marketplaces
        and online stores.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-2">
        Can I create white background product photos?
      </h3>
      <p className="text-gray-400">
        Yes. You can create clean white background images for ecommerce product
        listings.
      </p>

      <div className="mt-14 p-8 rounded-3xl border border-white/10 bg-white/5">
        <h2 className="text-3xl font-bold mb-4">
          Edit Ecommerce Photos With AI
        </h2>

        <p className="text-gray-400 mb-6">
          Remove backgrounds and create cleaner product images for your online
          store in seconds.
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