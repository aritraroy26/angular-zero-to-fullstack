export const helloRoute = {
  path: "/hello",
  method: "get", // this shall be lower case,
  handler: (req, res) => {
    res.status(200).json({ course: "Full Stack Angular" });
    // res.status(200).send({ course: "Full Stack Angular" }); -> it sends the same json response as above
  },
};
