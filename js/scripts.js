

let ctxOne = document.getElementById("myChartLine").getContext("2d");
let ctxTwo = document.getElementById("myChartBar").getContext("2d");
let ctxThree = document.getElementById("myChartDoughnut").getContext("2d");

let myChartLine = new Chart(ctxOne, {
  type: "line", 
  data: { 
          labels: ["16/22", "23-29", "30-05", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
          datasets: [
            {
              label: "Traffic",
              data: [500, 1200, 1000, 2000, 1500, 1800, 1200, 1800, 2300, 1500, 2500],
              backgroundColor: 
              "#cdcdcd",
              borderColor: 
              "#778899",
            borderWidth: .5

    }//end datasets
  ]//end datasets array. Don't understand. Is this an object in an array? Argh!
},//end myChartLine
options: {
    legend: {
      display: false
    },
  
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
});

let myChartBar = new Chart(ctxTwo, {
    type: 'bar',
    data: {
          labels: ["S", "M", "T", "W", "T", "F", "S"],
          datasets: [
          {
            data: [70, 110, 175, 125, 225, 200, 105],
            backgroundColor: "midnightblue"
            
           }//end datasets
  ]//end datasets array. 
},//end myChartLine
options: {
  legend: {
    display: false
  },
    scales: {
        yAxes: [{
            ticks: {
                max: 250,
                min: 0,
                stepSize: 50
            }
        }]
    }
}
});


    


    let myChartDoughnut = new Chart(ctxThree, {
        type: 'doughnut',
        data: {
            labels: ["Desktop", "Tablet", "Phones"],
            datasets: [
              {
                
                data: [220, 70, 70],
                backgroundColor: ["midnightBlue", "green", "lightblue"]
               
                
              }//end datasets
            ]//end datasets array
          },//end myChartDoughnut
          options: {
            legend: {
              position: "right"
            },
              scales: {
                xAxes: [{
                  display: false,
                  gridLines: {
                     display: false
                  }
               }],
               yAxes: [{
                 display: false,
                  gridLines: {
                     display: false
                  }
               }]
              }
          }
          });
      
//_______________________________________________________________________
//alert
//_________________________________________________________________________

let x = document.querySelector(".p");
let alert = document.querySelector(".alert");

x.addEventListener("click", (e) => {
  alert.style.display = "none";
});

//_______________________________________________________________________
//notification icon
//_________________________________________________________________________

let bell = document.querySelector(".bell-icon");
let choose = document.querySelector(".choose");
bell.addEventListener("click", (e) => {
  choose.style.display = "block"; 
  window.alert("You have one new notification. Please choose what you would like to do.");
});
