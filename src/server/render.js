export function renderFullHtml() {
  return `
    <html>
        <head>
            <title>BookSharingApp</title>
            <link rel="stylesheet" href="/main.css"/>
        </head>
        <body>
            <div id="app-root"></div>
            <script src="/bundle.js"></script>
        </body>
    </html>
  `;
}