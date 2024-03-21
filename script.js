function update(data, now)
{
  // Get all upcoming events, excluding past events
  let massTimes = data.map(x => { x["timestamp"] = Date.parse(x.Date); return x; })
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

  // Add next 7 days upcoming of all types to table
  let sevenDays = 7 * 24 * 60 * 60 * 1000;
  let sevenDaysFromNow = now + sevenDays;
  let table = document.getElementById("upcomingTable");
  let nextFive = massTimes.filter(x => x.timestamp < sevenDaysFromNow).map(x => {
      let row = document.createElement("tr");
      let dateCell = document.createElement("td");
      dateCell.style.whiteSpace = 'nowrap';
      dateCell.appendChild(document.createTextNode(dateTimeFormat.format(new Date(x.timestamp))));
      let titleCell = document.createElement("td");
      titleCell.appendChild(document.createTextNode(x.Title));
      row.appendChild(dateCell);
      row.appendChild(titleCell);
      return row;
  });
  nextFive.forEach(x => table.appendChild(x));
  document.getElementById('currentTime').replaceChildren(document.createTextNode(dateTimeFormat.format(now)));

  // Time machine
  if (window.location.hash) {
    document.getElementById('timemachine').style.display = 'inline-block';
    let timeSlider = document.getElementById('timeSlider');

    let numbers = data.map(x => Date.parse(x.Date));
    let min = Math.min.apply(null, numbers);
    let max = Math.max.apply(null, numbers);

    timeSlider.min = min;
    timeSlider.max = max;
    timeSlider.value = now;

    timeSlider.onchange = event => {
      update(data, event.value);
    };
  }
}
