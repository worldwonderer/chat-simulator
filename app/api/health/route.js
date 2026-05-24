export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export function GET() {
  return Response.json(
    {
      ok: true,
      service: "chat-simulator",
      deepseekConfigured: Boolean(process.env.DEEPSEEK_API_KEY),
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
