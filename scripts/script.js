document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");

    // убираем active у кнопок и панелей
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".tab-panel")
      .forEach((p) => p.classList.remove("active"));

    // добавляем active текущей кнопке и панели
    btn.classList.add("active");
    document.getElementById(targetId).classList.add("active");
  });
});
