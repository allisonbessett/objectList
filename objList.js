/*jslint browser: true*/
/*global $, jQuery, alert*/


$(document).ready(function () {
  var i = 0, e = event, tBody = $('#tBody'), addButton = $('#addItemButton'), cityForm = $('#cityForm'), cityTable = $('#cityTable'), submit = $('#submit'), city = $('#city'), country = $('#country'), count = 0;
  var arr = [];
  var mCity;
  var mCountry;
  
  cityForm.hide();
  addButton.on("click", function (e) {
    event.preventDefault();
    cityForm.show();
    cityTable.hide();
  });
  
  function updateArray(city, country) {
    arr.push({mCity: city, mCountry: country});
  }
  function populateTable() {
    $('#cityTable tbody').html('<tr></tr>'); //need to clear the table before appending arr to prevent duplicate entries
    console.log("arr size " + arr.length);
    for (i = 0; i < arr.length; i++) {
      // this query finds the child tbody of the cityTable
      $('#cityTable tbody').append('<tr><td>' + arr[i].mCity + '</td>' + '<td>' + arr[i].mCountry + '</td></tr>'); 
//      
      count++;
    }
  }

  submit.on("click", function (e) {
    e.preventDefault();
    console.log(":::" + city.val());
    updateArray(city.val(), country.val());
    populateTable();
    cityForm.hide();
    cityTable.show();
  });
  
});