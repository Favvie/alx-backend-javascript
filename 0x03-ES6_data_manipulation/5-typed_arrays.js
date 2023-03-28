export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8DataView = new DataView(buffer);
  int8DataView.setInt8(position, value);
  return int8DataView;
}
