const chartDiv = document.querySelector(".chart-display");
const chartType = document.querySelector("#chart-type");

const xValues = ["January", "February", "March", "April", "May"];
const yValues = [65, 59, 80, 81, 56];

function createChart(typeName) {
    let myChart;
    if(typeName === "bar" || typeName === "line") {
        myChart = new Chart(typeName + "Chart", {
            type: typeName,
            data: {
                labels: xValues,
                datasets: [{
                    label : "Monthly Sales",
                    data : yValues,
                    backgroundColor : "rgba(75, 192, 192, 0.2)",
                    borderColor : "rgb(75, 192, 192)",
                    borderWidth : 1,
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: "Monthly Sales Data"
                    }
                },
                scales : {
                    y : {
                        beginAtZero : true
                    }
                }
            }
        });
    }
    else {
        myChart = new Chart(typeName + "Chart", {
            type: typeName,
            data: {
                labels: xValues,
                datasets: [{
                    label : "Monthly Sales",
                    data : yValues,
                    backgroundColor : ["#A5DD9B", "#C5EBAA", "#F6F193", "#F2C18D", "#F7DCB9"],
                    hoverOffset : 4
                    // borderColor : "rgb(75, 192, 192)",
                    // borderWidth : 1
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: "Monthly Sales Data"
                    }
                }
            }
        });
    }

    return myChart;
}

function applyFloatingAnimation(canvas) {
    anime({
        targets: canvas,
        translateY: [0, -10, 5, 0],
        loop: true,
        duration: 5000,
        easing: 'linear',
        direction : 'alternate',
        autplay : false
    });
}

chartType.addEventListener("change", () => {
    chartDiv.innerHTML = "";
    const chartCanvas = document.createElement("canvas");
    chartCanvas.id = chartType.value + "Chart";
    chartDiv.appendChild(chartCanvas);
    const myChart = createChart(chartType.value);

    const newChartCanvas = document.getElementById(chartType.value + "Chart");
    applyFloatingAnimation(newChartCanvas);
});

window.addEventListener("load", () => {
    createChart("bar");

    const initialChartCanvas = document.getElementById("barChart");
    applyFloatingAnimation(initialChartCanvas);
});

// Example animation code
  
// anime({
//     targets: '.background',
//     translateX: [
//       { value: -100, duration: 1500 },
//       { value: window.innerWidth + 100, duration: 1500 }
//     ],
//     translateY: [
//       { value: (el) => Math.random() * window.innerHeight, duration: 1500 }
//     ],
//     delay: anime.stagger(200),
//     easing: 'easeInOutQuad',
//     loop: true
// });
