# St Theresa of Lisieux Church, Stansted
## Next Mass:

<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

<script>

let massTimes = {{ site.data.masstimes | jsonify }}
let now = Date.now()



</script>

<table>
{% for mass in site.data.masstimes %}
<tr>
<td>{{mass.Date | date: "%a %e %b %Y %H:%M"}}</td>
<td>{{mass.Title}}</td>
</tr>
{% endfor %}
</table>
