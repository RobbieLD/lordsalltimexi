var originalBarController = Chart.controllers.horizontalBar;
Chart.controllers.horizontalBar = Chart.controllers.horizontalBar.extend({
    draw: function () {
        originalBarController.prototype.draw.call(this, arguments);
        drawFlags(this);
    }
});

function drawFlags(t) {
    var chartInstance = t.chart;
    var meta = chartInstance.controller.getDatasetMeta(0);
    ctx.save();
    meta.data.forEach(function (bar, index) {
        var lab = bar._model.label;
        var imgId = flags[lab];
        var img = document.getElementById(imgId);
        ctx.drawImage(img, 147, bar._model.y - 6, 20, 12);
    });
    ctx.restore();
}

var ctx = document.getElementById("myChart").getContext("2d");
var myBar = new Chart(ctx, {
    "type": "horizontalBar",
    "data": chartData,
    "options": {
        legend: {
            display: false
        },
        "scales": {
            "yAxes": [{
                id: "y0",
                "stacked": true,
                "ticks": {
                    "beginAtZero": true
                }
            }],
            "xAxes": [{
                "stacked": true
            }]
        }
    }
});