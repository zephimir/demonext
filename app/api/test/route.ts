export const GET = (req: Request) => {
  console.log("req", req);
  return Response.json({ message: "Hello World!" }, { status: 202 });
};
