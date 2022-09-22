function generateHTML(teamSection) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="../src/style.css" />
    </head>
    <body>
      <header>
        <div class="text-center text-white py-5">
          <h1>My Team</h1>
        </div>
      </header>
      <section class="container pt-5">
        <div class="row justify-content-md-center">
        ${teamSection}
        </div>
      </section>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
}

module.exports = generateHTML;
