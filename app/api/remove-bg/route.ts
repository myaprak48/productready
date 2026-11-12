export async function POST(req: Request) {
  try {
        if (!process.env.REMOVE_BG_API_KEY) {
      console.error("REMOVE_BG_API_KEY bulunamadı!");
      return Response.json(
        { error: "API anahtarı bulunamadı" },
        { status: 500 }
      );
    }
    const formData = await req.formData();

    const image = formData.get("image") as File;

    const removeBgFormData = new FormData();
    removeBgFormData.append("image_file", image);
    removeBgFormData.append("size", "auto");

    const response = await fetch(
      "https://api.remove.bg/v1.0/removebg",
      {
        method: "POST",
        headers: {
          "X-Api-Key": process.env.REMOVE_BG_API_KEY!,
        },
        body: removeBgFormData,
      }
    );
if (!response.ok) {
  const errorText = await response.text();
  console.error("REMOVE.BG API YANITI:", errorText);

  return Response.json(
    { error: errorText },
    { status: 500 }
  );
}
    const blob = await response.blob();

    return new Response(blob, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    console.error("REMOVE BG SUNUCU HATASI:", error);

    return Response.json(
      { error: "Background removal failed" },
      { status: 500 }
    );
  }
}