import Router from "express";

const router = new Router({
    prefix: "/personal",
  });
  
  router.get("/data", prodsController.getProducts);
  router.get("/skills", prodsController.addProduct);
  router.put("/:id", prodsController.modProduct);
