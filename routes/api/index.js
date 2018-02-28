const router = require("express").Router();
const userRoutes = require("./users");
const inventoryRoutes = require("./inventory");
const templateRoutes = require("./templates");

//Child directories of "/api", apiRoutes

// Users route
router.use("/users", userRoutes);
// Inventory route
router.use("/inventory", inventoryRoutes);
// Template route
router.use("/templates", templateRoutes);

router.post("/browse", async (req, res, next) => {
    const { recipient, message } = req.body;
    try {
        await sendEmail(recipient, message);
        res.json({message: 'Your query has been sent'});
        await next();
       } catch (e) {
        await next(e);
     }
   });

module.exports = router;