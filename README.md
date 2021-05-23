# TableToCSV

![Demo](https://media.giphy.com/media/OfVUl6dRuTT9LekpVG/giphy.gif)

**TableToCSV** is a lightweight, dependency-free Javascript library developed by [Goutham][1] for exporting HTML tables to a CSV file. TableToCSV is completely written in [TypeScript][2]. It allows you to download the HTML table as a CSV file very quickly. Also, it does not depend on any other library like [jQuery][3].

Things I used.

<p>
<img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square" />
<img alt="Webpack" src="https://img.shields.io/badge/-Webpack-8DD6F9?logo=webpack&logoColor=white&style=flat-square" /> 
<img alt="npm" src="https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white&style=flat-square" />
</p>

## Example

A basic example of TableToCSV

#### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Table To CSV</title>
  </head>
  <body>
    <div id="container">
      <button id="downlodbtn">Download</button>
      <table id="studentTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Kierra Gentry</td>
            <td>21</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Alden Cantrell</td>
            <td>22</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Thomas Crane</td>
            <td>22</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Miranda Shaffer</td>
            <td>21</td>
          </tr>
          <tr>
            <th>5</th>
            <td>Lizeth Daniels</td>
            <td>24</td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
  <script src="table-to-csv.min.js"></script>
  <script src="main.js"></script>
</html>
```

#### main.js

```JavaScript
function main() {
  const tableToCSV = new TableToCSV("#studentTable", {
    filename: "student-report-2021.csv",
    delimiter: ",", //delimiter (optional) default value ","
    ignoreColumns: [0], //column index (optional)
  });
  document.querySelector("#downlodbtn").addEventListener("click", (e) => {
    tableToCSV.download();
  });
}
main();
```

that's it, simple right :sunglasses:

## Build

To build the library from source, clone the project from github.

```
$ git clone https://github.com/gouthams96/table-to-csv.git
```

To install all the dependencies and build the library, run following commands in the root of the project.

```
$ cd table-to-csv
$ npm install
```

Then, the project can be build running:

```
$ npm run build
```

## Contribute

Contributions to the **TableToCSV** is are very welcome!.

[1]: https://github.com/gouthams96
[2]: https://www.typescriptlang.org/
[3]: https://jquery.com/
