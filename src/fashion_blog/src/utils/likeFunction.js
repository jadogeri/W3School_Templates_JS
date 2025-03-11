export function likeFunction(event) {
    const x = event.currentTarget
    console.log(x)
    x.style.fontWeight = "bold";
    x.innerHTML = "✓ Liked";
  }
  