var textField = document.getElementById("input").value;

parseInput(textField);
function parseInput(string) {
  var array = string.split("\n");
  var replaceHTML = "";
  var headerText = "";
  var headerNum = 1;
  for(var i=0; i<array.length; i++) {
    if(array[i].charAt(0) == "#") {
      var titleText = array[i].substring(1,array[i].length).trim();
      replaceHTML += title(titleText);
    } else if(array[i].charAt(0) == "}") {
      headerText = array[i].substring(1,array[i].length).split(",");
      for(var q=0; q<headerText.length; q++) {
        headerText[q] = headerText[q].trim();
      }
      headerNum = headerText.length;
      replaceHTML += header(headerText, headerNum);
    } else if(array[i].charAt(0) == "*") {
      var rowText = array[i].substring(1,array[i].length).trim().split("(");
      replaceHTML += row(headerText, rowText[0], headerNum);
      
      if(rowText.length>1) {
        var rowSelection = rowText[1].substring(0, rowText[1].length-1);
        var rowsSelected = rowSelection.split(",");
        for(var q=0; q<rowsSelected.length; q++) {
          var str = headerText + rowText[0] + headerNum;
        }
      }
    }
  }
  replaceHTML = replaceHTML.substring(14,replaceHTML.length);
  document.getElementById("content").innerHTML = replaceHTML;
}

function title(name) {
  var string = "</table></div><div class='kinkTable'><h3>"
  string += name;
  string += "</h3>"
  return string;
}

function header(name, num) {
  var string = "<table><tr>"
  for(var i=0; i<num; i++) {
    string += "<th>"
    string += name[i];
    string += "</th>"
  }
  string += "<th></th></tr>"
  return string;
}

function row(head, name, num) {
  var string = "<tr>"
  for(var q=0; q<num; q++) {
    string += "<td class='radio'>"
    for(var i=0; i<6; i++) {
      string += radio(head[q], name, i);
    }

    string += "</td>"
  }
  string += "<td class='label'>"
  string += name;
  string += "</td>"
  string += "</tr>"
  return string;
}

function radio(head, name, index) {
  var valueArray = ["none", "fave", "like", "okay", "maybe", "no"];
  var string = "<input id='"
  string += head + name + index;
  string += "' type='radio' name='"
  string += head + name;
  string += "' value='"
  string += valueArray[index];
  string += "'>"
  string += "<label class='";
  string += valueArray[index];
  string += "' for='"
  string += head + name + index;
  string += "'></label>"
  return string;
}
