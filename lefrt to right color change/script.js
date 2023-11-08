let mouseMove = document.querySelector("#center");

mouseMove.addEventListener("mousemove", function (details) {
  let boxLocation = mouseMove.getBoundingClientRect();
  let insiderect = details.clientX - boxLocation.left;

  if (insiderect < boxLocation.width / 2) {
    let redcolor = gsap.utils.mapRange(
      0,
      boxLocation.width / 2,
      255,
      0,
      insiderect
    );
    gsap.to(mouseMove, {
      backgroundColor: `rgb(${redcolor},0,0)`,
    });
  } else {
    let bluecolor = gsap.utils.mapRange(
      boxLocation.width / 2,
      boxLocation.width,
      0,
      255,
      insiderect
    );
    gsap.to(mouseMove, {
      backgroundColor: `rgb(0,0,${bluecolor})`,
    });
  }
});

mouseMove.addEventListener("mouseleave", function () {
  gsap.to(mouseMove, {
    backgroundColor: "white",
  });
});
