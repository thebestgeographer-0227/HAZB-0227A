// 林砚 · 个人作品集 — 交互脚本
(function () {
  "use strict";

  // 导航：滚动加实底
  const nav = document.querySelector(".nav");
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add("solid");
    else nav.classList.remove("solid");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 移动端菜单
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  // 滚动入场动画
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // 联系表单：本地校验 + 反馈（真实投递由 Formspree 完成）
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const ok = form.querySelector(".form-ok");
      const email = form.querySelector("#email");
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email.value)) {
        email.focus();
        email.style.borderColor = "var(--accent)";
        return; // 阻止提交，等待用户修正
      }
      // 若仍是占位符，使用 mailto 兜底，避免误发到无效地址
      const action = form.getAttribute("action") || "";
      if (action.indexOf("[[FORMSPREE_FORM_ID]]") !== -1) {
        e.preventDefault();
        const name = encodeURIComponent(form.querySelector("#name").value);
        const msg = encodeURIComponent(form.querySelector("#message").value);
        window.location.href =
          "mailto:2442631394@qq.com?subject=作品集留言 · " +
          name +
          "&body=" +
          msg;
        if (ok) {
          ok.style.display = "block";
          ok.textContent = "尚未配置 Formspree，已为你打开邮件客户端发送。";
        }
      }
      // 否则交给 Formspree 正常提交
    });
  }
})();
