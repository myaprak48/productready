export async function POST(req: Request) {
  try {
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
          "X-Api-Key":
            "QRWMLefX1Nub6bf79RjQw76b" ,
        },
        body: removeBgFormData,
      }
    );
if (!response.ok) {
  const errorText = await response.text();

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
    return Response.json(
      { error: "Background removal failed" },
      { status: 500 }
    );
  }
}