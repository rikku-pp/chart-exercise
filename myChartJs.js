
// let the editor know that `Chart` is defined by some code
// included in another file (in this case, `index.html`)
// Note: the code will still work without this line, but without it you
// will see an error in the editor

/* global Chart data colors*/
const genders = Object.keys(data);
const distribution = Object.values(data);

// initialize a chart and put it in the 'pieChart' div
const pie = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pie, {
  type: 'pie', // make it a pie chart
  data: {
    labels: genders, // use the array of genders to label each 
    datasets: [{
      data: distribution, // use the array of totals to draw pie slices
      // set each pie slice to a translucent color
      backgroundColor: colors,
      borderWidth: 0 // set border width to 0 pixels
    }]
  }
});



