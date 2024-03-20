# St Theresa of Lisieux Church, Stansted
## Next Mass:
<div id="nextMass" style="font-size: xxx-large; text-align: center"></div>

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
let table = document.getElementById("upcoming");
let nextFive = massTimes.slice(0, 5).map(x => {
    let row = document.createElement("tr");
    let dateCell = document.createElement("td");
    dateCell.appendChild(document.createTextNode(dateTimeFormat.format(new Date(x.timestamp))));
    let titleCell = document.createElement("td");
    titleCell.appendChild(document.createTextNode(x.Title));
    row.appendChild(dateCell);
    row.appendChild(titleCell);
});
table.replaceChildren(nextFive);
</script>

## Upcoming:
<table id="upcoming">
</table>
