# JavaScript - HTML Table to csv
#### **Author:** Joseph Potter
#### **Date Last Edited:** 10/6/2017
#### **Version:** 1.0
#### **Description:** This script will create a csv for any HTML table elements.
#### **Usage:** Usage is pretty simple. Here is an example with everything you need to know:
```html
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="table_to_csv.js"></script>
    <script>
      $(document).ready(function(){
        $("#download_table").click(function(){
          //Pass a jQuery selector and the file name.
          //If there are multiple tables found, they will all be
          //downloaded as separate files.
          table_to_csv("#food_table", "eating.csv");
        });
      });
    </script>
  </head>
  <body>
    <table id = "food_table">
      <tr>
        <th>Taco</th>
        <th>Spinach</th>
        <th>Spinach Taco</th>
      </tr>
      <tr>
        <td>Bad For You</td>
        <td>Disgusting</td>
        <td>Just Right</td>
      </tr>
    </table>
    <button id = "download_table">download table</button>
  </body>
</html>
```
