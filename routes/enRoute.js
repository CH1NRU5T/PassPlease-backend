const express = require("express");
const crypto = require("crypto");
const router = express.Router();
router.post("/en", (req, res) => {
  let { key } = req.body;
  console.log("key: " + key);
  let ogKey = `-----BEGIN PUBLIC KEY-----\n${key}\n-----END PUBLIC KEY-----`;
  console.log("ogKey: " + ogKey);
  ogKey = ogKey.split(String.raw`\n`).join("\n");
  const edata = crypto.publicEncrypt(
    {
      key: ogKey,
      padding: crypto.constants.RSA_PKCS1_PADDING,
    },
    Buffer.from("ansh")
  );
  res.status(200).json({ e: edata.toString("base64") });
});
module.exports = router;
