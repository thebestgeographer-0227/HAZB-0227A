# 林砚 · 个人作品集网站

极简深色风格（海青蓝渐变 · 辽远寂静感）的个人摄影作品集。纯静态站点，无构建步骤，可直接部署到 GitHub Pages / Vercel / 任意静态托管。

## 目录结构

```
.
├── index.html        # 首页：全屏风景欢迎页（名字「林砚」+ 身份「思想者 / 地理爱好者」）
├── portfolio.html    # 作品集：城市建筑 / 旷野遐想 / 建筑光影 / 生活碎片（不对称网格）
├── about.html        # 关于我：头像 + 300 字简介
├── contact.html      # 联系方式：留言表单 + QQ / 微信 / Behance 链接
├── assets/
│   ├── css/style.css # 设计系统与响应式样式
│   ├── js/main.js    # 导航 / 移动菜单 / 滚动入场 / 表单逻辑
│   └── img/          # 真实 AI 主图 + 秋日大兴安岭实拍占位
└── README.md
```

## 本地预览

直接用浏览器打开 `index.html` 即可；或起一个本地服务器（推荐，避免字体/路径问题）：

```bash
# Python
python3 -m http.server 8080
# 然后访问 http://localhost:8080
```

## 让联系表单真正收信（Formspree，约 2 分钟）

表单已接入 Formspree，提交后邮件会发到 **2442631394@qq.com**。只需一步：

1. 打开 https://formspree.io ，用 `2442631394@qq.com` 注册/登录，新建一个表单。
2. 复制表单地址里的 ID（形如 `https://formspree.io/f/abcdwxyz` 中的 `abcdwxyz`）。
3. 打开 `contact.html`，把这一行里的占位符替换掉：

   ```html
   <form id="contact-form" action="https://formspree.io/f/[[FORMSPREE_FORM_ID]]" method="POST">
   ```

   改成：

   ```html
   <form id="contact-form" action="https://formspree.io/f/abcdwxyz" method="POST">
   ```

> 未配置前，提交表单会自动回退为打开邮件客户端发到 `2442631394@qq.com`，不会报错。

## 部署到 GitHub Pages

1. 在 GitHub 新建一个仓库（如 `linyan-portfolio`），把本目录所有文件推送上去。
2. 仓库 **Settings → Pages → Build and deployment → Source 选 "Deploy from a branch"**，Branch 选 `main`，目录选 `/ (root)`，保存。
3. 等待约 1 分钟，访问 `https://<你的用户名>.github.io/<仓库名>/` 即可。
4. （可选）在 Pages 设置里绑定自定义域名。

> 若用 Vercel：直接导入该仓库，Framework 选 "Other"，Output Directory 留空，即可一键上线。

## 替换为你自己的内容

- **照片**：把 `assets/img/` 下的图片换成你的作品，保持同名即可；或改 HTML 里对应的 `src`。
- **占位摄影框**：作品集里深色渐变的占位格子（class 含 `ph`）是 CSS 生成的，替换成真实照片时把 `<div class="tile ... ph" ...>` 换成 `<div class="tile ..."><img src="你的图" /></div>` 即可。
- **社交链接**：在 `contact.html` 底部把 QQ / 微信 / Behance 的占位账号与 `href` 改成你自己的。
- **文案**：名字、身份、简介、项目描述均在各 HTML 中，直接编辑文字。

## 设计说明

- 配色：海青蓝多层径向渐变 + 胶片颗粒 + 暗角，营造「辽远寂静」感。
- 字体：Inter + Noto Sans SC（优雅无衬线，含中文回退）。
- 响应式：桌面 / 平板 / 手机三档断点，移动端含汉堡菜单与折叠网格。
- 隐私：页面不展示你的邮箱，仅用于表单投递配置。
