# St Theresa of Lisieux Church, Stansted
## Next Mass
<div id="nextMass" style="font-size: xxx-large; text-align: center"></div>

## Upcoming
<table id="upcomingTable"></table>

## Where to find us

<iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=0.19879996776580813%2C51.90977187162156%2C0.2017772197723389%2C51.91184511171202&amp;layer=mapnik&amp;marker=51.91080850363098%2C0.2002885937690735" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=51.91081&amp;mlon=0.20029#map=19/51.91081/0.20029">View Larger Map</a></small>



<script lang="js">
// What time is it now?
let now = Date.now();

// Get all upcoming events, excluding past events
let massTimes = {{ site.data.masstimes | jsonify }}.map(x => { x["timestamp"] = Date.parse(x.Date); return x; })
    .filter(x => x.timestamp >= now)
    .sort((a, b) => a.timestamp - b.timestamp);

// Find first event of type Mass
let nextMass = massTimes.find(x => x.Type === 'Mass');

// Output title
let titleParagraph = document.createElement("p");
titleParagraph.appendChild(document.createTextNode(nextMass.Title));

// Format and output date
let date = new Date(nextMass.timestamp);
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
};
const dateTimeFormat = new Intl.DateTimeFormat('en-GB', options);
let dateParagraph = document.createElement("p");
dateParagraph.appendChild(document.createTextNode(dateTimeFormat.format(date)));

// Add to document
document.getElementById("nextMass").replaceChildren(
titleParagraph,
dateParagraph
);

// Add next 5 upcoming of all types to table
let table = document.getElementById("upcomingTable");
let nextFive = massTimes.slice(0, 5).map(x => {
    let row = document.createElement("tr");
    let dateCell = document.createElement("td");
    dateCell.appendChild(document.createTextNode(dateTimeFormat.format(new Date(x.timestamp))));
    let titleCell = document.createElement("td");
    titleCell.appendChild(document.createTextNode(x.Title));
    row.appendChild(dateCell);
    row.appendChild(titleCell);
    return row;
});
nextFive.forEach(x => table.appendChild(x));
</script>
