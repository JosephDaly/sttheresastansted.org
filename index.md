## Next Mass:

<script>

let massTimes = {{ site.data.masstimes | jsonify }}

</script>

<table>
{% for mass in site.data.masstimes %}
<tr>
<td>{{mass.Date | date: "%a %e %b %Y %H:%M"}}</td>
<td>{{mass.Title}}</td>
</tr>
{% endfor %}
</table>
