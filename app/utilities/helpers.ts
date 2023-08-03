import crypto from "node:crypto";

export function verifyRequestSignature (
  signature: any,
  appSecret: string,
  payload: any
) {
  if (!signature) {
    console.warn(`Couldn't find "x-hub-signature-256" in headers.`);
  } else {
    var elements = signature.split("=");
    var signatureHash = elements[1];
    var expectedHash = crypto
      .createHmac("sha256", appSecret)
      .update(payload)
      .digest("hex");
    if (signatureHash != expectedHash) {
      throw new Error("Couldn't validate the request signature.");
    }
  }
};
