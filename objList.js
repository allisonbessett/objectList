/*jslint browser: true*/
/*global $, jQuery, alert*/

// TODO: Create array var
// TODO: Write function that creates a table row (tr) for each obj in array, with a cell (td) for each property to be displayed. 
//TODO: Append each of these to the table body. 

//TODO: Write listener for new item button. It should hide the table and show the form. It should set a listener for the form's submit button. 
//TODO: Write event listener for submit button that creates an obj using the form data and adds that obj to the array. 
//TODO: The listener (above) should call the first function I wrote to recreate the table with the updated database and show that table, hiding the form. 

// make a fuction to update the array
// make a global var table = $(query for table body)

// this is a function to update the global array
// function updateArray(city, country)
// array.push({mcity:city, mcountry:country})

// this is a functino to populate the table
// function populateTable()
// 1. itierate through the array
//    for (each item in the table)


// "Submit"
// 1. Read city and country text
// 2. call the updateArray function
// 3. hide the form
// 4. 


$(document).ready(function () {
  var i = 0, e = event, arr = [i], tBody = $('#tBody'), addButton = $('#addItemButton'), tRow = $('#tRow'), cityForm = $('#cityForm'), cityTable = $('#cityTable'), submit = $('#submit'), tCity = $('#tCity'), tCountry = $('tCountry'), city = "city", country = "country";
  

  cityForm.hide();
  addButton.on("click", function (e) {
    event.preventDefault();
    cityForm.show();
    cityTable.hide();
  });
    

//    $countMsg = $('li[id="countMsg"]').append("Count: ");
  submit.on("click", function (event) {
    city.val();
    country.val();
    console.log("Working");
    function updateArray(city, country) {
      arr.push({tCity: city, tCountry: country}); //ask
    }
    cityTable.show();
    cityForm.hide();
    function populateTable() {
      for (i; i <= arr.length; i++) {
        var insert = tRow.insertCell(0);
        insert.append(city, country);
      
      }
    }
  });
  
});