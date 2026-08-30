import sharp from "sharp"

const src = "assets/tushar.jpg"
const meta = await sharp(src).metadata()
console.log("[v0] source", meta.width, "x", meta.height)

// Face sits slightly right of centre and in the upper third of the frame.
const side = Math.round(meta.height * 0.46)
const left = Math.round(meta.width * 0.56 - side / 2)
const top = Math.round(meta.height * 0.29 - side / 2)

console.log("[v0] crop", { side, left, top })

await sharp(src)
  .extract({
    left: Math.max(0, Math.min(left, meta.width - side)),
    top: Math.max(0, Math.min(top, meta.height - side)),
    width: side,
    height: side,
  })
  .resize(560, 560, { fit: "cover" })
  // cool the photo toward the alpine palette
  .modulate({ brightness: 1.04 })
  .tint({ r: 176, g: 208, b: 240 })
  .linear(1.06, -8)
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile("assets/portrait.jpg")

console.log("[v0] wrote assets/portrait.jpg")
