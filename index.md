# St Theresa of Lisieux Church, Stansted
## Next Mass:
<div id="nextMass" style="font-size: xxx-large; text-align: center"></div>

<script>
let now = Date.now();

let massTimes = {{ site.data.masstimes | jsonify }}.map(x => { x["timestamp"] = Date.parse(x.Date); return x; })
    .filter(x => x.timestamp >= now)
    .sort((a, b) => a.timestamp - b.timestamp);

let nextMass = massTimes.find(x => x.Type === 'Mass');

let titleParagraph = document.createElement("p");
titleParagraph.appendChild(document.createTextNode(nextMass.Title));


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

document.getElementById("nextMass").replaceChildren(
titleParagraph,
dateParagraph
);

</script>


<table>
{% for mass in site.data.masstimes %}
<tr>
<td>{{mass.Date | date: "%a %e %b %Y %H:%M"}}</td>
<td>{{mass.Title}}</td>
</tr>
{% endfor %}
</table>
