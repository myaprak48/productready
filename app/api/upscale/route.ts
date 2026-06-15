import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import Replicate from "replicate";
export const runtime = "nodejs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json(
        { error: "No image uploaded" },
        { status: 400 }
      );
    }

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "productready-upscale",
            resource_type: "image",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(buffer);
    });

    const publicId = uploadResult.public_id;

    const output: any = await replicate.run(
  "nightmareai/real-esrgan",
  {
    input: {
      image: uploadResult.secure_url,
      scale: 4,
      face_enhance: false,
    },
  }
);

console.log("Replicate output:", output);

const upscaledUrl =
  Array.isArray(output)
    ? output[0]
    : output?.url
    ? output.url()
    : output;

return NextResponse.json({
  success: true,
  originalUrl: uploadResult.secure_url,
  upscaledUrl,
});
} catch (error: any) {
    console.error("Upscale error:", error?.message || error);

    return NextResponse.json(
      { error: error?.message || "AI upscale failed" },
      { status: 500 }
    );
  }
}