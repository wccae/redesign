var eventsRaw = `Workshop Title|Date|Time|Location
Culinary Demo|Thursday, January 16|9:30am-12:00pm|Contra Costa College
College Readiness Week|Tuesday - Thursday<br>February 25-27|AM & PM times|WCCAE
Financial Aid Workshop|Wednesday, February 5|6:30pm-8:00pm|DeJean WCCAE Campus<br>Bldg. E, Room 103
Financial Aid Workshop|Tuesday, February 11|10:00am-12:00pm|DeJean WCCAE Campus<br>Bldg. E, Room 103
Contra Costa College Information & Application|Thursday, February 27|10:00am-12:00pm|Alvarado WCCAE Campus
Career Readiness Week|Tuesday – Thursday<br>March 3-5|TBD|DeJean WCCAE Campus<br>Bldg. E, Room 103
West County Workforce Development Board Job Fair|March|10:00am-1:00pm|Contra Costa College
SparkPoint Welcome Group Orientation|Tuesday, March 24|12:30pm-2:00pm|DeJean WCCAE Campus<br>Bldg. E, Room 103
Contra Costa College Tour|Wednesday, March 25|9:30am-12:00pm|Contra Costa College
Contra Costa College Information & Application|Tuesday, April 21|6:30pm-8:00pm|Richmond High WCCAE Campus
Contra Costa College Information & Application|Thursday, April 23|12:30pm-2:30pm|DeJean WCCAE Campus<br>Bldg. E, Room 103
Contra Costa College Information & Application|Tuesday, May 12|12:30pm-2:30pm|DeJean WCCAE Campus<br>Bldg. E, Room 103
Contra Costa College Information & Application|Thursday, May 14 (tentative)|6:30pm-8:00pm|DeJean WCCAE Campus<br>Bldg. E, Room 103`

var eventsMatrix = parseString(eventsRaw);

var eventsTableHTML = createTableHTML(eventsMatrix);

console.log(eventsTableHTML)

function parseString(str){
  var lines = str.split('\n');

  var matrix = [];
  
  lines.forEach(function(line){
    matrix.push(line.split('|'));
  })

  return matrix;
}

// only works for 4 columns
function createTableHTML(matrix){

  var tableHTML = `
<table>
  <tr>
    <th>${matrix[0][0]}</th>
    <th>${matrix[0][1]}</th>
    <th>${matrix[0][2]}</th>
    <th>${matrix[0][3]}</th>
  </tr>
`

  matrix.forEach(function(row, index){
    if (index > 0){
      tableHTML += `
  <tr>
    <td>${row[0]}</td>
    <td>${row[1]}</td>
    <td>${row[2]}</td>
    <td>${row[3]}</td>
  </tr>
`
    }
  });

  tableHTML += `</table>`

  return tableHTML;
}



