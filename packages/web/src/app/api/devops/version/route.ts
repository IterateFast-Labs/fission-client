export async function GET() {
  return new Response(
    `${process.env.NEXT_PUBLIC_ENVIRONMENT}-${process.env.NEXT_PUBLIC_VERSION}`,
    {
      headers: {
        'content-type': 'text/plain',
      },
    },
  );
}
