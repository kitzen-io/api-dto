export default interface IBip32Derivation {
  masterFingerprint: Buffer;
  path: string;
  pubkey: Buffer;
}
