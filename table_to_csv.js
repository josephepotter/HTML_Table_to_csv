/*
Title: HTML Table to csv
Author: Joseph Potter
Date Last Edited: 10/6/2017
Version: 0.1
*/
function table_to_csv(selector, file_name){
  var table = $(selector);//Get the table(s)
  table.each( function( index, element ){
    //Iterate over each table
    var csv = '';
    var rows = $( this ).find('tr');
    rows.each( function( index, element ){
      //Iterate over each row
      elements = $( this ).children();
      elements.each( function( index, element ){
        //Iterate over each element
        csv += $( this ).text() + ',';//Add element to csv
      });
      csv = csv.slice(0, -1);//Remove trailing comma
      csv += '\n';
    });
    var file = document.createElement('a');
    file.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    file.download = file_name;//Make the file Downloadable
    file.click();//Download the file
  });
}
