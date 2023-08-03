"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRequestSignature = void 0;
const node_crypto_1 = __importDefault(require("node:crypto"));
function verifyRequestSignature(signature, appSecret, payload) {
    if (!signature) {
        console.warn(`Couldn't find "x-hub-signature-256" in headers.`);
    }
    else {
        var elements = signature.split("=");
        var signatureHash = elements[1];
        var expectedHash = node_crypto_1.default
            .createHmac("sha256", appSecret)
            .update(payload)
            .digest("hex");
        if (signatureHash != expectedHash) {
            throw new Error("Couldn't validate the request signature.");
        }
    }
}
exports.verifyRequestSignature = verifyRequestSignature;
;
