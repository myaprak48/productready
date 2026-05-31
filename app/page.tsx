"use client";

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const removeBackground = async () => {
    if (!image) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("/api/remove-bg", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        alert(errorText);
        setLoading(false);
        return;
      }

      const imageBlob = await response.blob();
      const imageUrl = URL.createObjectURL(imageBlob);

      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        const originalImg = new Image();
        originalImg.src = preview || "";

        originalImg.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          canvas.width = originalImg.width;
          canvas.height = originalImg.height;

          if (ctx) {
          
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);


            const finalImage = canvas.toDataURL("image/png");
            setResult(finalImage);
          }

          setLoading(false);
        };
      };
    } catch (error) {
      console.error(error);
      alert("Background removal failed");
      setLoading(false);
    }
  };
const downloadWhiteBackground = () => {
  if (!result) return;

  const img = new Image();

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    if (ctx) {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(img, 0, 0);

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "productready-white.png";
      link.click();
    }
  };

  img.src = result;
};
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-8 max-w-7xl mx-auto">
        <nav className="flex items-center justify-between mb-20">
          <div className="text-2xl font-bold tracking-tight">ProductReady</div>

          <div className="hidden md:flex gap-8 text-sm text-gray-400">
 <a href="#examples" className="hover:text-white transition">
  Examples
</a>

<a href="#features" className="hover:text-white transition">
  Features
</a>

<a href="#pricing" className="hover:text-white transition">
  Pricing
</a>

<a href="#contact" className="hover:text-white transition">
  Contact
</a>
</div>
        </nav>

        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 mb-8">
            Built for ecommerce sellers and marketplaces
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.95]">
Sell Faster With Better
<br />
Product Images
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
Turn ordinary product photos into clean, professional images ready for Amazon, Etsy and Shopify.
</p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-sm">
              ✓ Marketplace Ready
            </span>
            <span className="px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-sm">
              ✓ White Background
            </span>
            <span className="px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-sm">
              ✓ HD Export
            </span>
            <span className="px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-sm">
              ✓ AI Powered
            </span>
          </div>

<label
  onClick={() =>
    document.getElementById("upload")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-2xl font-semibold cursor-pointer hover:bg-gray-200 transition"
>            Start Free
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>
      </section>

      <section className="px-6 pb-20">
<div
  id="upload"
  className="max-w-4xl mx-auto rounded-[2rem] border border-white/10 bg-zinc-950 p-4 md:p-8 shadow-2xl"
>          <label className="w-full h-56 md:h-72 border border-dashed border-gray-700 rounded-[1.5rem] flex items-center justify-center bg-zinc-900 cursor-pointer overflow-hidden">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="text-center">
                <p className="text-gray-300 text-lg font-medium">
  Drag & drop your image here
</p>

<p className="text-gray-500 text-sm mt-2">
  or click to upload
</p>

<p className="text-gray-600 text-xs mt-3">
  PNG, JPG, WEBP supported
</p>
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>

          <button
            onClick={removeBackground}
            disabled={!image || loading}
            className="mt-6 w-full bg-white text-black px-6 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "Removing Background..." : "Remove Background"}
          </button>

          {result && preview && (
            <div className="mt-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-center mb-3 text-gray-400">Before</p>
                  <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">
                    <img
                      src={preview}
                      alt="Original"
                      className="w-full h-80 object-contain"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-center mb-3 text-gray-400">After</p>
                  <div
  className="rounded-3xl overflow-hidden"
  style={{
  backgroundImage: `
  linear-gradient(45deg, #f3f4f6 25%, transparent 25%),
  linear-gradient(-45deg, #f3f4f6 25%, transparent 25%),
  linear-gradient(45deg, transparent 75%, #f3f4f6 75%),
  linear-gradient(-45deg, transparent 75%, #f3f4f6 75%)
`,
backgroundColor: "#ffffff",
    backgroundSize: "20px 20px",
    backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
  }}
>
                    <img
                      src={result}
                      alt="Result"
                      className="w-full h-80 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-8">
  <a
    href={result}
    download="productready-transparent.png"
    className="block text-center bg-white text-black px-6 py-4 rounded-2xl font-semibold"
  >
    Download Transparent PNG
  </a>

  <button
  onClick={downloadWhiteBackground}
  className="block text-center border border-white/20 px-6 py-4 rounded-2xl font-semibold"
>
  Download White Background
</button>
</div>
            </div>
          )}
        </div>
      </section>

      <section id="examples" className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
  See ProductReady in Action
</h2>
         <p className="text-gray-400 max-w-3xl mx-auto">
  See how ProductReady transforms everyday product photos into professional marketplace-ready images.
</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 ">
            <div className="h-96 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-gray-500">
              <img
  src="/demo-before.jpg"
  alt="Before"
  className="w-full h-full object-cover rounded-2xl"
/>
            </div>
            <div className="mt-4 text-center">
  <p className="font-semibold text-white">Before</p>
  <p className="text-gray-400 text-sm">
    Original Product Photo
  </p>
</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
            <div className="h-96 rounded-2xl bg-white flex items-center justify-center text-zinc-400">
              <img
  src="/demo-after.jpg"
  alt="After"
  className="w-full h-full object-cover rounded-2xl"
/>
            </div>
            <div className="mt-4 text-center">
  <p className="font-semibold text-white">After</p>
  <p className="text-gray-400 text-sm">
    Marketplace Ready Result
  </p>
</div>
          </div>
        </div>
      </section>

      <section id="solutions" className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="text-center mb-12">
  <h2 className="text-4xl font-bold mb-4">
  Built for Modern Ecommerce Sellers
</h2>

  <p className="text-gray-400 max-w-3xl mx-auto">
  Perfect for Amazon, Etsy, Shopify, eBay and marketplace sellers who need professional product images fast.
  </p>
</div>
<div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-sm text-gray-500 mb-3">For Ecommerce</p>
            <h2 className="text-3xl font-bold mb-4">
              Product photos that look ready for marketplaces.
            </h2>
            <p className="text-gray-400">
              Perfect for Shopify, Amazon, Etsy, eBay and online sellers who
              need clean product images fast.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-sm text-gray-500 mb-3">For Real Estate</p>
            <h2 className="text-3xl font-bold mb-4">
              Real estate photo enhancement is coming next.
            </h2>
            <p className="text-gray-400">
              Sky replacement, brightness improvement, object cleanup and
              listing-ready property images.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
            <h3 className="text-xl font-semibold mb-3">Remove Background</h3>
            <p className="text-gray-400">
              Remove distracting backgrounds from product photos instantly.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
            <h3 className="text-xl font-semibold mb-3">White Background</h3>
            <p className="text-gray-400">
              Generate clean white backgrounds for professional product
              listings.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
            <h3 className="text-xl font-semibold mb-3">Download Ready Image</h3>
            <p className="text-gray-400">
              Export a ready-to-use image for stores, marketplaces and ads.
            </p>
          </div>
        </div>
      </section>

    <section className="px-6 pb-24 max-w-7xl mx-auto">
  <div className="text-center mb-12">
    <h2 className="text-5xl font-bold mb-4">
      Why Sellers Choose ProductReady
    </h2>

    <p className="text-gray-400 text-xl">
      Designed for speed, simplicity and marketplace-ready results.
    </p>
  </div>

  <div id="features" className="grid md:grid-cols-3 gap-6">
    <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
      <h3 className="text-xl font-semibold mb-3">⚡ Save Time</h3>
      <p className="text-gray-400">
        Create professional product photos in seconds.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
      <h3 className="text-xl font-semibold mb-3">🎯 Professional Results</h3>
      <p className="text-gray-400">
        Clean, consistent product images every time.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
      <h3 className="text-xl font-semibold mb-3">🛒 Marketplace Ready</h3>
      <p className="text-gray-400">
        Perfect for Amazon, Etsy, Shopify and more.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
      <h3 className="text-xl font-semibold mb-3">📦 One-Click Export</h3>
      <p className="text-gray-400">
        Download ready-to-use images instantly.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
      <h3 className="text-xl font-semibold mb-3">🤖 AI Powered</h3>
      <p className="text-gray-400">
        Advanced AI handles the editing for you.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
      <h3 className="text-xl font-semibold mb-3">☁️ No Design Skills Needed</h3>
      <p className="text-gray-400">
        Anyone can create professional product photos.
      </p>
    </div>
  </div>
</section>

      
<section id="pricing" className="px-6 pb-24 max-w-7xl mx-auto">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4">
      Simple Pricing
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto">
      Start free and upgrade when your business grows.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
      <h3 className="text-2xl font-bold mb-4">Free</h3>
      <p className="text-5xl font-bold mb-6">$0</p>

     <ul className="space-y-3 text-gray-300">
  <li>✓ 5 Images</li>
  <li>✓ Transparent PNG</li>
  <li>✓ White Background</li>
</ul>
      <button className="mt-8 w-full rounded-2xl bg-white text-black py-3 font-semibold">
  Start Free
</button>
    </div>

 <div className="rounded-3xl border border-white/20 bg-zinc-900 p-8">

  <div className="inline-flex mb-4 rounded-full bg-white text-black px-3 py-1 text-xs font-semibold">
    Most Popular
  </div>

  <h3 className="text-2xl font-bold mb-4">Pro</h3>
      
      <p className="text-5xl font-bold mb-2">$9<span className="text-lg text-gray-400">/mo</span></p>
<p className="text-sm text-gray-400 mb-6">Most popular for sellers</p>

      <ul className="space-y-3 text-gray-300">
        <li>✓ Unlimited Images</li>
        <li>✓ HD Export</li>
        <li>✓ Priority Processing</li>
        <li>✓ Commercial Use</li>
      </ul>
      <a
  href="mailto:productreadyapp@gmail.com?subject=ProductReady Pro Plan"
  className="block mt-8 w-full text-center rounded-2xl bg-white text-black py-3 font-semibold hover:bg-gray-200 transition"
>
  Get Pro
</a>
    </div>

    <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
      <h3 className="text-2xl font-bold mb-4">Business</h3>
    <p className="text-5xl font-bold mb-6">$29<span className="text-lg text-gray-400">/mo</span></p>

      <ul className="space-y-3 text-gray-300">
        <li>✓ Team Access</li>
        <li>✓ Bulk Processing</li>
        <li>✓ API Access (Soon)</li>
      </ul>
      <a
  href="mailto:productreadyapp@gmail.com?subject=ProductReady Business Plan"
  className="block mt-8 w-full text-center rounded-2xl border border-white/20 py-3 font-semibold hover:bg-white/10 transition"
>
  Contact Sales
</a>
    </div>

  </div>
</section>
<section className="px-6 py-24 max-w-7xl mx-auto">

  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4">
      Trusted by Marketplace Sellers
    </h2>

    <p className="text-gray-400">
      Built for sellers on the world's largest ecommerce platforms.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 text-center">
      Amazon
    </div>

    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 text-center">
      Etsy
    </div>

    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 text-center">
      Shopify
    </div>

    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 text-center">
      eBay
    </div>

  </div>

</section>
<section className="px-6 py-24 max-w-4xl mx-auto">

  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4">
      Frequently Asked Questions
    </h2>

    <p className="text-gray-400">
      Everything you need to know about ProductReady.
    </p>
  </div>

  <div className="space-y-6">

    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
      <h3 className="font-semibold mb-2">Is ProductReady free to use?</h3>
      <p className="text-gray-400">
        Yes. You can process up to 5 images for free.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
      <h3 className="font-semibold mb-2">What image formats are supported?</h3>
      <p className="text-gray-400">
        PNG, JPG and WEBP.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
      <h3 className="font-semibold mb-2">Can I use images commercially?</h3>
      <p className="text-gray-400">
        Yes. Pro and Business plans include commercial usage rights.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
      <h3 className="font-semibold mb-2">Do you support bulk processing?</h3>
      <p className="text-gray-400">
        Bulk processing is available on Business plans.
      </p>
    </div>

  </div>

</section>
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xl font-bold">ProductReady</div>
            <p className="text-gray-500 text-sm mt-2">
              Transform product photos into marketplace-ready images in seconds.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-500">
            <span>Privacy</span>
            <span>Terms</span>
            <a
  href="mailto:productreadyapp@gmail.com"
  className="hover:text-white transition"
>
 productreadyapp@gmail.com
</a>
          </div>

          <p className="text-gray-600 text-sm"> © 2026 ProductReady. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}