console.log('hi');

var ctxOne = document.getElementById("myChartBar");
var ctxTwo = document.getElementById("myChartPie");
var ctxThree = document.getElementById("myChartLine");

var stars = [135850, 52122, 148825, 16939, 9763];
var frameworks = ["React", "Angular", "Vue", "Hyperapp", "Omi"];

var myChartBar = new Chart(ctxOne, {
  type: "bar",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "Github Stars",
        data: stars,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)"
        ],//end backgroundColor array
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)"
            ],
            borderWidth: 1
        
      }//end datasets

    ]//end datasets array

    
    
  }//end data

  
 
});//end object


let myChartPie = new Chart(ctxTwo, {
    type: 'pie',
    data: {
        labels: frameworks,
        datasets: [
          {
            label: "Github Stars",
            data: stars,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)"
            ],//end backgroundColor array
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)"
                ],
                borderWidth: 1
            
          }//end datasets
    
        ]//end datasets array
    
        
        
      }//end data
    
      
     
    });//end object


    let myChartLine = new Chart(ctxThree, {
        type: 'line',
        data: {
            labels: frameworks,
            datasets: [
              {
                label: "Github Stars",
                data: stars,
                backgroundColor: 
                  "rgba(255, 99, 132, 0.2)",
                borderColor: 
                    "rgba(255, 99, 132, 1)",
                borderWidth: 1,
                fill: false,
                lineTension: 0 
                
              }//end datasets
        
            ]//end datasets array
        
            
            
          }//end data
        
          
         
        });//end object




