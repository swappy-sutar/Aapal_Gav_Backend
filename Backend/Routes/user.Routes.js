import express from "express";
import passport from "passport";
import { updateUserProfile } from "../Controllers/user.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});

// Google Auth Routes
router.get("/login", (req, res) => {
  res.render("login");
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

router.get("/dashboard", (req, res) => {
    console.log("user", req.user);
    
  if (req.isAuthenticated()) {
    res.render("dashboard", { user: req.user });
  } else {
    res.redirect("/login");
  }
});

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/login");
  });
});


//User Profile Routes
router.post("/update-profile", updateUserProfile);

export default router;
