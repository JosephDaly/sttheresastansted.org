## Next Mass:




<table>
{% for mass in site.data.masstimes %}
<tr>
<td>{{mass.Date}}</td>
<td>{{mass.Title}}</td>
</tr>
{% endfor %}
</table>
