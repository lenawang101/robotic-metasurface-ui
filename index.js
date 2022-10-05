/* JavaScript variables and functions */


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var endpoint1, endpoint2, endpoint3, endpoint4,
    endpoint5, endpoint6, endpoint7, endpoint8,
    endpoint9, endpoint10, endpoint11, endpoint12,
    endpoint13, endpoint14, endpoint15, endpoint16;
var last_value = [55, 55, 55, 55,
                  90, 90, 90, 90,
                  130, 130, 130, 130,
                  170, 170, 170, 170];


//slider 1
var slider1 = document.getElementById("endpoint1");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;
output1.style.opacity = "0.0";

slider1.oninput = function() {
  output1.innerHTML = this.value;
}

//slider 2
var slider2 = document.getElementById("endpoint2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;
output2.style.opacity = "0.0";

slider2.oninput = function() {
  output2.innerHTML = this.value;
}

//slider 3
var slider3 = document.getElementById("endpoint3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;
output3.style.opacity = "0.0";

slider3.oninput = function() {
  output3.innerHTML = this.value;
}

//slider 4
var slider4 = document.getElementById("endpoint4");
var output4 = document.getElementById("demo4");
output4.innerHTML = slider4.value;
output4.style.opacity = "0.0";

slider4.oninput = function() {
  output4.innerHTML = this.value;
}

//slider 5
var slider5 = document.getElementById("endpoint5");
var output5 = document.getElementById("demo5");
output5.innerHTML = slider5.value;
output5.style.opacity = "0.0";

slider5.oninput = function() {
  output5.innerHTML = this.value;
}

//slider 6
var slider6 = document.getElementById("endpoint6");
var output6 = document.getElementById("demo6");
output6.innerHTML = slider6.value;
output6.style.opacity = "0.0";

slider6.oninput = function() {
  output6.innerHTML = this.value;
}

//slider 7
var slider7 = document.getElementById("endpoint7");
var output7 = document.getElementById("demo7");
output7.innerHTML = slider7.value;
output7.style.opacity = "0.0";

slider7.oninput = function() {
  output7.innerHTML = this.value;
}

//slider 8
var slider8 = document.getElementById("endpoint8");
var output8 = document.getElementById("demo8");
output8.innerHTML = slider8.value;
output8.style.opacity = "0.0";

slider8.oninput = function() {
  output8.innerHTML = this.value;
}

//slider 9
var slider9 = document.getElementById("endpoint9");
var output9 = document.getElementById("demo9");
output9.innerHTML = slider9.value;
output9.style.opacity = "0.0";

slider9.oninput = function() {
  output9.innerHTML = this.value;
}

//slider 10
var slider10 = document.getElementById("endpoint10");
var output10 = document.getElementById("demo10");
output10.innerHTML = slider10.value;
output10.style.opacity = "0.0";

slider10.oninput = function() {
  output10.innerHTML = this.value;
}

//slider 11
var slider11 = document.getElementById("endpoint11");
var output11 = document.getElementById("demo11");
output11.innerHTML = slider11.value;
output11.style.opacity = "0.0";

slider11.oninput = function() {
  output11.innerHTML = this.value;
}

//slider 12
var slider12 = document.getElementById("endpoint12");
var output12 = document.getElementById("demo12");
output12.innerHTML = slider12.value;
output12.style.opacity = "0.0";

slider12.oninput = function() {
  output12.innerHTML = this.value;
}

//slider 13
var slider13 = document.getElementById("endpoint13");
var output13 = document.getElementById("demo13");
output13.innerHTML = slider13.value;
output13.style.opacity = "0.0";

slider13.oninput = function() {
  output13.innerHTML = this.value;
}

//slider 14
var slider14 = document.getElementById("endpoint14");
var output14 = document.getElementById("demo14");
output14.innerHTML = slider14.value;
output14.style.opacity = "0.0";

slider14.oninput = function() {
  output14.innerHTML = this.value;
}

//slider 15
var slider15 = document.getElementById("endpoint15");
var output15 = document.getElementById("demo15");
output15.innerHTML = slider15.value;
output15.style.opacity = "0.0";

slider15.oninput = function() {
  output15.innerHTML = this.value;
}

//slider 16
var slider16 = document.getElementById("endpoint16");
var output16 = document.getElementById("demo16");
output16.innerHTML = slider16.value;
output16.style.opacity = "0.0";

slider16.oninput = function() {
  output16.innerHTML = this.value;
}



// Slider update values
function updateSlider(slideAmount,slider)
{
    let sliderDiv = document.getElementById(slider);
    sliderDiv.value = slideAmount;
}


// update endpoint variable values
function update_endpoint_values() {
    endpoint1 = document.getElementById("endpoint1").value;
    endpoint2 = document.getElementById("endpoint2").value;
    endpoint3 = document.getElementById("endpoint3").value;
    endpoint4 = document.getElementById("endpoint4").value;
    endpoint5 = document.getElementById("endpoint5").value;
    endpoint6 = document.getElementById("endpoint6").value;
    endpoint7 = document.getElementById("endpoint7").value;
    endpoint8 = document.getElementById("endpoint8").value;
    endpoint9 = document.getElementById("endpoint9").value;
    endpoint10 = document.getElementById("endpoint10").value;
    endpoint11 = document.getElementById("endpoint11").value;
    endpoint12 = document.getElementById("endpoint12").value;
    endpoint13 = document.getElementById("endpoint13").value;
    endpoint14 = document.getElementById("endpoint14").value;
    endpoint15 = document.getElementById("endpoint15").value;
    endpoint16 = document.getElementById("endpoint16").value;
}


//function that draws horizontal wires
function wire(a) {

    update_endpoint_values();
    
    let startx = [18, 100, 188, 278, 367,
                  16, 98, 186, 280, 369,
                  14, 96, 184, 282, 371,
                  12, 94, 182, 284, 374];
    let starty = [55, endpoint1, endpoint2, endpoint3, endpoint4,
                  90, endpoint5, endpoint6, endpoint7, endpoint8,
                  130, endpoint9, endpoint10, endpoint11, endpoint12,
                  170, endpoint13, endpoint14, endpoint15, endpoint16];
    let cp1x = [45, 129, 218, 307, 393,
                43, 127, 216, 309, 395,
                41, 125, 214, 311, 397,
                39, 123, 212, 313, 400];
    let cp1y = [endpoint1, endpoint1, endpoint2, endpoint3, endpoint4,
                endpoint5, endpoint5, endpoint6, endpoint7, endpoint8,
                endpoint9, endpoint9, endpoint10, endpoint11, endpoint12,
                endpoint13, endpoint13, endpoint14, endpoint15, endpoint16];
    let cp2x = [72, 158, 249, 336, 419,
                70, 156, 247, 338, 421,
                68, 154, 245, 340, 423,
                66, 152, 243, 342, 426];
    let cp2y = [endpoint1, endpoint2, endpoint3, endpoint4, endpoint4,
                endpoint5, endpoint6, endpoint7, endpoint8, endpoint8,
                endpoint9, endpoint10, endpoint11, endpoint12, endpoint12,
                endpoint13, endpoint14, endpoint15, endpoint16, endpoint16];
    let endx = [98, 188, 280, 367, 445,
                96, 186, 281, 369, 448,
                95, 184, 282, 371, 450,
                93, 182, 283, 373, 453];
    let endy = [endpoint1, endpoint2, endpoint3, endpoint4, 55,
                endpoint5, endpoint6, endpoint7, endpoint8, 90,
                endpoint9, endpoint10, endpoint11, endpoint12, 130,
                endpoint13, endpoint14, endpoint15, endpoint16, 170];


    ctx.beginPath();
    ctx.moveTo(startx[a], starty[a]);
    ctx.bezierCurveTo(cp1x[a], cp1y[a], cp2x[a], cp2y[a], endx[a], endy[a]);
    ctx.strokeStyle = '#FFA533';
    ctx.lineWidth = 3;
    ctx.stroke();
}


// function that draws vertical wires
function vertWire(a) {
    
    update_endpoint_values();

    let endx = [98, 188, 280, 367, 445,
                96, 186, 281, 369, 448,
                95, 184, 282, 371, 450,
                93, 182, 283, 373, 453];
    let endy = [endpoint1, endpoint2, endpoint3, endpoint4, 55,
                endpoint5, endpoint6, endpoint7, endpoint8, 90,
                endpoint9, endpoint10, endpoint11, endpoint12, 130,
                endpoint13, endpoint14, endpoint15, endpoint16, 170];

    // first two wires in the top row, left side
    if (a < 2) {
      ctx.beginPath();
      ctx.moveTo(endx[a] + 2, 10); 
      ctx.lineTo(endx[a], endy[a]);   
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.strokeStyle = '#FFA533';
    }
    // two wires in the top row, right side
    else if (a === 2 || a === 3) {
      ctx.beginPath();
      ctx.moveTo(endx[a] - 2, 10);
      ctx.lineTo(endx[a], endy[a]);   
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.strokeStyle = '#FFA533';
    }
    // wires in rows 2-4
    else if ((a > 4 && a < 9) ||
             (a > 9 && a < 14) ||
             (a > 14 && a < 19)) {
      ctx.beginPath();
      ctx.moveTo(endx[a - 5], endy[a - 5]);
      ctx.lineTo(endx[a], endy[a]);   
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.strokeStyle = '#FFA533';
      }
    // wires in bottom row, left side
    else if (a > 19 && a < 22) {
      ctx.beginPath();
      ctx.moveTo(endx[a - 5], endy[a - 5]);
      ctx.lineTo(endx[a - 5] - 2, 240);   
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.strokeStyle = '#FFA533';
    }
    // wires in bottom row, right side
    else if (a == 22 || a == 23) {
      ctx.beginPath();
      ctx.moveTo(endx[a - 5], endy[a - 5]);
      ctx.lineTo(endx[a - 5] + 2, 240);   
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.strokeStyle = '#FFA533';

    }
}


function poll_status() {
    // status polling with HTTP request
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let resp = xhttp.responseText;
            if (Number(resp)<0) {
                let d = new Date();
                display_1.innerHTML = "Command <span  style=\"color:brown;\">infeasible</span> on "+d.toLocaleTimeString();
            }
        }
    };

    let myString = "?action=check_status";
    xhttp.open("GET", myString, true);
    xhttp.send();
    
}


function upload_command() {
        
    update_endpoint_values();

    let values = [endpoint1, endpoint2, endpoint3, endpoint4,
                  endpoint5, endpoint6, endpoint7, endpoint8,
                  endpoint9, endpoint10, endpoint11, endpoint12,
                  endpoint13, endpoint14, endpoint15, endpoint16];

    last_value = values;

    // send user command with HTTP request
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let d = new Date();
            display_1.innerHTML = "User input sent on: "+d.toLocaleTimeString();
            setTimeout(poll_status,600); // wait for computation before polling
        }
    };

    let myJsonString = JSON.stringify(values);

    myJsonString = "?action=rt&data=" + myJsonString;
    xhttp.open("GET", myJsonString, true);
    xhttp.send();    
}


function drawWire(port_changed) {
        
    // console.log(port_changed);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (port_changed>0){
        // interpolate the node on the left
        if ((Math.floor((port_changed-2)/4) == Math.floor((port_changed-1)/4)) && (port_changed>1)){
            let diff_value = parseInt(document.getElementById("endpoint"+port_changed.toString()).value)-last_value[port_changed-1];
            updateSlider(parseInt(document.getElementById("endpoint"+(port_changed-1).toString()).value)
                         +parseInt(diff_value / 2.0),
                         "endpoint"+(port_changed-1).toString())
        }
        // interpolate the node on the right
        if ((Math.floor((port_changed)/4) == Math.floor((port_changed-1)/4)) && (port_changed<16)){
            let diff_value = parseInt(document.getElementById("endpoint"+port_changed.toString()).value)-last_value[port_changed-1];
            updateSlider(parseInt(document.getElementById("endpoint"+(port_changed+1).toString()).value)
                         +parseInt(diff_value / 2.0),
                         "endpoint"+(port_changed+1).toString())
        }
        // interpolate the upper node
        if (port_changed>4){
            let diff_value = parseInt(document.getElementById("endpoint"+port_changed.toString()).value)-last_value[port_changed-1];
            updateSlider(parseInt(document.getElementById("endpoint"+(port_changed-4).toString()).value)
                         +parseInt(diff_value / 2.0),
                         "endpoint"+(port_changed-4).toString())
        }
        // interpolate the bottom node
        if (port_changed<13){
            let diff_value = parseInt(document.getElementById("endpoint"+port_changed.toString()).value)-last_value[port_changed-1];
            updateSlider(parseInt(document.getElementById("endpoint"+(port_changed+4).toString()).value)
                         +parseInt(diff_value / 2.0),
                         "endpoint"+(port_changed+4).toString())
        }
        
        upload_command();
        
    }
    
    
    // draws horizontal wires
    for(let i = 0; i < 21; i++) {
        wire(i);
    }
    // draws vertical wires
    for(let i = 0; i < 24 ; i++) {
        if (![4, 9, 14, 19].includes(i)) {
          vertWire(i);
        }
    }
    
}


// set predefined shapes and upload the command
function set_predefined_command(cmd_idx) {
    // console.log("Shape change command input");
    
    // pre-defined shapes
    var shapes = [[55, 55, 55, 55,
                  90, 90, 90, 90,
                  130, 130, 130, 130,
                  170, 170, 170, 170],
                  [45, 50, 55, 60,
                  80, 85, 90, 95,
                  120, 125, 130, 135,
                  160, 165, 170, 175],
                 [50, 59, 59, 50,
                  95, 105, 105, 95,
                  135, 145, 145, 135,
                  165, 174, 174, 165],
                 [42, 48, 52, 55,
                  81, 75, 81, 87,
                  127, 121, 115, 121,
                  170, 165, 161, 155],
                 [55, 50, 50, 55,
                  82, 75, 75, 82,
                  122, 115, 115, 122,
                  170, 165, 165, 170]];
    
    for(let i = 0; i < 16; i++) {
        updateSlider(shapes[cmd_idx][i],"endpoint"+(i+1).toString())
    }
    
    update_endpoint_values(); // need to update endpoints variables
    drawWire(0); // draw wires
    upload_command();
}



$(document).bind(
  'touchmove',
      function(e) {
        e.preventDefault();
      }
);


// continuously follow slider user input and update canvas  
$(".slider").on("input", function(){
    // console.log(this.id);
    drawWire(parseInt(this.id.replace("endpoint","")));
});


$( document ).ready(function() {
    // continuously update the canvas to prevent lag and the unresponsive issue on touch pad
    // setInterval(drawWire(0), 500);
    drawWire(0);
});

