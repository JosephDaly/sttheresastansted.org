# St Theresa of Lisieux Church, Stansted
## Next Mass:
<div id="nextMass" style="font-size: x-large"></div>

<script>
let now = Date.now();

let massTimes = {{ site.data.masstimes | jsonify }}.map(x => { x["timestamp"] = Date.parse(x.Date); return x; })
    .filter(x => x.timestamp >= now)
    .sort((a, b) => a.timestamp - b.timestamp);

let nextMass = massTimes.find(x => x.Type === 'Mass');
document.getElementById("nextMass").replaceChildren(
    document.createTextNode(nextMass.Date + ' ' + nextMass.Title)
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
