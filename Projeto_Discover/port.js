const themeToggle = document.querySelector("#switch")

themeToggle.addEventListener("click", () => {
  const html = document.documentElement
  const isLightMode = html.classList.toggle("light")

  themeToggle.setAttribute("aria-pressed", String(isLightMode))
  themeToggle.setAttribute(
    "aria-label",
    isLightMode ? "Ativar tema escuro" : "Ativar tema claro"
  )
})
