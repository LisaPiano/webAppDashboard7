

let ctxOneHourly = document.getElementById("myChartLineHourly").getContext("2d");
let ctxTwo = document.getElementById("myChartBar").getContext("2d");
let ctxThree = document.getElementById("myChartDoughnut").getContext("2d");

// let myChartLineHourly = new Chart(ctxOneHourly, {
//   type: "line", 
//   data: { 
//           labels: ["16/22", "23-29", "30-05", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
//           datasets: [
//             {
//               label: "Traffic",
//               data: [500, 1200, 1000, 2000, 1500, 1800, 1200, 1800, 2300, 1500, 2500],
//               backgroundColor: 
//               "#cdcdcd",
//               borderColor: 
//               "#778899",
//             borderWidth: .5

//     }//end datasets
//   ]//end datasets array. Don't understand. Is this an object in an array? Argh!
// },//end myChartLine
// options: {
//     legend: {
//       display: false
//     },
  
//     scales: {
//         yAxes: [{
//             ticks: {
//                 beginAtZero: true
//             }
//         }]
//     }
// }
// });

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

//---------------------------------------------------------------------------
//Changing divs and colors of Hourly, Daily, Weekly, Monthly
  //---------------------------------------------------------------------------
  let hourly = document.querySelector(".traffic-nav-hourly");
  let daily = document.querySelector(".traffic-nav-daily");
  let weekly = document.querySelector(".traffic-nav-weekly");
let monthly = document.querySelector(".traffic-nav-monthly");

hourly.addEventListener('click', (e) => {
  hourly.style.backgroundColor = "#0ac50a9c"; 
  hourly.style.border = "solid 1px #0ac50a9c"; 
  hourly.style.opacity = "85%"; 
  hourly.style.color = "white"; 
  hourly.style.borderRadius = "24px"; 
  daily.style = "revert";
  weekly.style = "revert";
  monthly.style = "revert";
  let myChartLineHourly = new Chart(ctxOneHourly, {
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
  
});

daily.addEventListener('click', (e) => {
  daily.style.backgroundColor = "#0ac50a9c"; 
  daily.style.border = "solid 1px #0ac50a9c"; 
  daily.style.opacity = "85%"; 
  daily.style.color = "white"; 
  daily.style.borderRadius = "24px"; 
  hourly.style = "revert";
  weekly.style = "revert";
  monthly.style = "revert";
  let myChartLineHourly = new Chart(ctxOneHourly, {
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
});

weekly.addEventListener('click', (e) => {
  weekly.style.backgroundColor = "#0ac50a9c"; 
  weekly.style.border = "solid 1px #0ac50a9c"; 
  weekly.style.opacity = "85%"; 
  weekly.style.color = "white"; 
  weekly.style.borderRadius = "24px"; 
  hourly.style = "revert";
  daily.style = "revert";
  monthly.style = "revert";
  let myChartLineHourly = new Chart(ctxOneHourly, {
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
});
  
monthly.addEventListener('click', (e) => {
  monthly.style.backgroundColor = "#0ac50a9c"; 
  monthly.style.border = "solid 1px #0ac50a9c"; 
  monthly.style.opacity = "85%"; 
  monthly.style.color = "white"; 
  monthly.style.borderRadius = "24px"; 
  daily.style = "revert";
  weekly.style = "revert";
  hourly.style = "revert";
  let myChartLineHourly = new Chart(ctxOneHourly, {
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
});
  //______________________________________________________________


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

let circle = document.querySelector(".circle");
let bell = document.querySelector(".bell-icon");
let choose = document.querySelector(".choose");
bell.addEventListener("click", (e) => {
  choose.style.display = "block"; 
  window.alert("You have one new notification. Please choose what you would like to do.");
  circle.style.display = "none";
});

bell.addEventListener ('mouseover', (e) => {
  bell.style.fill = "red";
});

//_______________________________________________________________________
//Search for User--local Storage and autofill
//_________________________________________________________________________

var search = document.querySelector(".searchForUser");
var send = document.querySelector(".send");
let message = document.querySelector(".messageForUser");
var conversation = message.innerHTML; 

send.addEventListener("click", (e) => {
  if (search.value === "Victoria Chambers" || search.value === "Dale Byrd" || search.value === "Dawn Wood" || search.value === "Dan Oliver"){
    localStorage.name = search.value; 
    search.setAttribute = localStorage.name; 
    localStorage.conversation = message.value; 
  } else {
    window.alert("No member exists by this name. Please try again!");
  };
});
console.log(localStorage.name);
console.log(localStorage.conversation);


    search.addEventListener("keyup", (e) => {
      let letter = search.value.toLowerCase();

      if (letter === "v") {
        search.value = ""; 
        search.value = "Victoria Chambers"
      } else if (letter === "dal") {
          search.value = ""; 
          search.value = "Dale Byrd";
      } else if (letter === "dan") {
          search.value = ""; 
          search.value = "Dan Oliver";
      } else if (letter === "daw") {
          search.value = ""; 
          search.value = "Dawn Wood";
      };
    });//End Event Listener 
   
  //_______________________________________________________________________
//Local Storage for Textarea
//_________________________________________________________________________


