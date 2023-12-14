const invalidUrl = (ctx) => {
  ctx.response.status = 404;
  ctx.body = {
    status: "Not found",
    message: "Route not found",
  };
};

export default invalidUrl;
