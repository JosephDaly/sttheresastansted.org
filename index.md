---
title: Demo Website
---

## Next Mass
<div id="nextMass" style="font-size: xxx-large; text-align: center"></div>

## Upcoming
<table id="upcomingTable"></table>

## Where to find us

<iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=0.19879996776580813%2C51.90977187162156%2C0.2017772197723389%2C51.91184511171202&amp;layer=mapnik&amp;marker=51.91080850363098%2C0.2002885937690735" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=51.91081&amp;mlon=0.20029#map=19/51.91081/0.20029">View Larger Map</a></small>

<div id="timemachine" style="display: none;">
<h2>Control time</h2>

<p id="currentTime"></p>
  <input type="range" min="1" max="100" value="50" id="timeSlider">
</div>

<script src="script.js"></script>
<script lang="js">
let upcomingEventData = {{ site.data.masstimes | jsonify }};
update(upcomingEventData, Date.now());
</script>
