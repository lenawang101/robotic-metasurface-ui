<?php
    
    $slider_values = array(55,90,130,170);
    $range_val = 15;
    $total_ports = 16;
    $row_num = 4;

    $data_file = "./data/data.json";
    $status_file = "./data/status.txt";
    
    // client data upload
    if ((isset($_GET['action'])) && ($_GET['action']=='rt')) {
        $data = json_decode($_GET['data']);
        $data = array_map('intval', $data);
        
        $slider_values_16 = array();
        foreach ($slider_values as $value) {
            for($i = 0; $i <= ($row_num-1); $i++){
                $slider_values_16[] = $value;
            }
        }
        
        $data = array_map(function ($x, $y) use ($range_val) { return ($y-$x)/floatval($range_val); } , $data, $slider_values_16);

        // print_r($data);
        $data = json_encode($data);
        file_put_contents($data_file, $data);
        die();
    }

    // client data retrieve
    if ((isset($_GET['action'])) && ($_GET['action']=='retrieve')) {
        $data = file_get_contents($data_file);
        print_r($data);
        die();
    }

    // client status check
    if ((isset($_GET['action'])) && ($_GET['action']=='check_status')) {
        $data = file_get_contents($status_file);
        print_r($data);
        die();
    }
    
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <title>Interactive Web</title>
    <link rel="shortcut icon" href="https://www.panyuxin.com/favicon.ico">
    <script src="https://www.panyuxin.com/assets/js/jquery.min.js"></script>
    <!--<link rel="stylesheet" href="assets/bootstrap.min.css">-->
    <link rel="stylesheet" href="assets/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<!-- <body> -->
<body scroll="no" style="overflow: hidden">

    
<div class='wrapper'>

    <div class="parent">
        <!--inside space for serpentine traces-->
        <div class="child"></div>
        <!--ports on left side (1-8)-->
    
        <div class="port1">
            Port 1
        </div>
        <div class="port2">
            2
        </div>
        <div class="port3">
            3
        </div>
        <div class="port4">
            4
        </div>
        <div class="port5">
            5
        </div>
        <div class="port6">
            6
        </div>
        <div class="port7">
            7
        </div>
        <div class="port8">
            8
        </div>
        <!--ports on the right side (9-16)-->
        <div class="port9">
            9
        </div>
        <div class="port10">
            10
        </div>
        <div class="port11">
            11
        </div>
        <div class="port12">
            12
        </div>
        <div class="port13">
            13
        </div>
        <div class="port14">
            14
        </div>
        <div class="port15">
            15
        </div>
        <div class="port16">
            16
        </div>
    </div>
    
    <!--canvas for wires-->
    <canvas class="canvas" id="myCanvas" width="470" height="250">
        Your browser does not support the HTML5 canvas tag.</canvas>
    
    
    <div class="controlsbox">
        <!--<h2>Controls</h2>-->
            <!--sliders-->

        <div class="slider1">
            <p></p>
            <input type="range" min="<?php echo $slider_values[0]-$range_val;?>" max="<?php echo $slider_values[0]+$range_val;?>" value="<?php echo $slider_values[0];?>" step="1" class="slider" id="endpoint1" onchange="drawWire(1)">
            <p><span id="demo1"></span></p>
         </div>

        <div class="slider2">
            <p></p>
            <input type="range" min="<?php echo $slider_values[0]-$range_val;?>" max="<?php echo $slider_values[0]+$range_val;?>" value="<?php echo $slider_values[0];?>" step="1" class="slider" id="endpoint2" onchange="drawWire(2)">
            <p><span id="demo2"></span></p>
         </div>

         <div class="slider3">
            <p></p>
            <input type="range" min="<?php echo $slider_values[0]-$range_val;?>" max="<?php echo $slider_values[0]+$range_val;?>" value="<?php echo $slider_values[0];?>" step="1" class="slider" id="endpoint3" onchange="drawWire(3)">
            <p><span id="demo3"></span></p>
        </div>

        <div class="slider4">
            <p></p>
            <input type="range" min="<?php echo $slider_values[0]-$range_val;?>" max="<?php echo $slider_values[0]+$range_val;?>" value="<?php echo $slider_values[0];?>" step="1" class="slider" id="endpoint4" onchange="drawWire(4)">
            <p><span id="demo4"></span> </p>
        </div>

        <div class="slider5">
            <p></p>
            <input type="range" min="<?php echo $slider_values[1]-$range_val;?>" max="<?php echo $slider_values[1]+$range_val;?>" value="<?php echo $slider_values[1];?>" step="1" class="slider" id="endpoint5" onchange="drawWire(5)">
            <p><span id="demo5"></span> </p>
        </div>

        <div class="slider6">
            <p></p>
            <input type="range" min="<?php echo $slider_values[1]-$range_val;?>" max="<?php echo $slider_values[1]+$range_val;?>" value="<?php echo $slider_values[1];?>" step="1" class="slider" id="endpoint6" onchange="drawWire(6)">
            <p><span id="demo6"></span> </p>
        </div>

        <div class="slider7">
            <p></p>
            <input type="range" min="<?php echo $slider_values[1]-$range_val;?>" max="<?php echo $slider_values[1]+$range_val;?>" value="<?php echo $slider_values[1];?>" step="1" class="slider" id="endpoint7" onchange="drawWire(7)">
            <p><span id="demo7"></span> </p>
        </div>

        <div class="slider8">
            <p></p>
            <input type="range" min="<?php echo $slider_values[1]-$range_val;?>" max="<?php echo $slider_values[1]+$range_val;?>" value="<?php echo $slider_values[1];?>" step="1" class="slider" id="endpoint8" onchange="drawWire(8)">
            <p><span id="demo8"></span> </p>
        </div>

        <div class="slider9">
            <p></p>
            <input type="range" min="<?php echo $slider_values[2]-$range_val;?>" max="<?php echo $slider_values[2]+$range_val;?>" value="<?php echo $slider_values[2];?>" step="1" class="slider" id="endpoint9" onchange="drawWire(9)">
            <p><span id="demo9"></span> </p>
        </div>

        <div class="slider10">
            <p></p>
            <input type="range" min="<?php echo $slider_values[2]-$range_val;?>" max="<?php echo $slider_values[2]+$range_val;?>" value="<?php echo $slider_values[2];?>" step="1" class="slider" id="endpoint10" onchange="drawWire(10)">
            <p><span id="demo10"></span> </p>
        </div>

        <div class="slider11">
            <p></p>
            <input type="range" min="<?php echo $slider_values[2]-$range_val;?>" max="<?php echo $slider_values[2]+$range_val;?>" value="<?php echo $slider_values[2];?>" step="1" class="slider" id="endpoint11" onchange="drawWire(11)">
            <p><span id="demo11"></span> </p>
        </div>

        <div class="slider12">
            <p></p>
            <input type="range" min="<?php echo $slider_values[2]-$range_val;?>" max="<?php echo $slider_values[2]+$range_val;?>" value="<?php echo $slider_values[2];?>" step="1" class="slider" id="endpoint12" onchange="drawWire(12)">
            <p><span id="demo12"></span> </p>
        </div>

        <div class="slider13">
            <p></p>
            <input type="range" min="<?php echo $slider_values[3]-$range_val;?>" max="<?php echo $slider_values[3]+$range_val;?>" value="<?php echo $slider_values[3];?>" step="1" class="slider" id="endpoint13" onchange="drawWire(13)">
            <p><span id="demo13"></span> </p>
        </div>

        <div class="slider14">
            <p></p>
            <input type="range" min="<?php echo $slider_values[3]-$range_val;?>" max="<?php echo $slider_values[3]+$range_val;?>" value="<?php echo $slider_values[3];?>" step="1" class="slider" id="endpoint14" onchange="drawWire(14)">
            <p><span id="demo14"></span> </p>
        </div>

        <div class="slider15">
            <p></p>
            <input type="range" min="<?php echo $slider_values[3]-$range_val;?>" max="<?php echo $slider_values[3]+$range_val;?>" value="<?php echo $slider_values[3];?>" step="1" class="slider" id="endpoint15" onchange="drawWire(15)">
            <p><span id="demo15"></span> </p>
        </div>

        <div class="slider16">
            <p></p>
            <input type="range" min="<?php echo $slider_values[3]-$range_val;?>" max="<?php echo $slider_values[3]+$range_val;?>" value="<?php echo $slider_values[3];?>" step="1" class="slider" id="endpoint16" onchange="drawWire(16)">
            <p><span id="demo16"></span> </p>
        </div>
    </div>
</div>


<br />

        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button type="button" class="button" onclick="set_predefined_command(0)">Reset</button>
<button type="button" class="button" onclick="set_predefined_command(1)">Shape 1</button>
<button type="button" class="button" onclick="set_predefined_command(2)">Shape 2</button>
<button type="button" class="button" onclick="set_predefined_command(3)">Shape 3</button>
<button type="button" class="button" onclick="set_predefined_command(4)">Shape 4</button>

<br />
<br />
        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span id="display_1"></span>


<!--density scale-->
    <!--Current density title for scale-->
    <!--scale labels-->
    <!--scale boxes-->
    <!--left-most dark blue box-->
    <!--right-most red box-->
    <!--xyz plane-->
<!--<div class="parentbox">
    <p class="currentdensity">Current Density</p>
    <p class="jtitle">J</p>
    <p class="zero">0</p>
    <p class="jsmall">J</p>
    <p class="max">max</p>
    <div class="child1"></div> 
    <div class="child2"></div>
    <div class="child3"></div>
    <div class="child4"></div>
    <div class="child5"></div>
    <div class="child6"></div>
    <div class="child7"></div>
    <div class="child8"></div>
    <div class="child9"></div>
    <div class="child10"></div>
    <div class="child11"></div>
    <div class="child12"></div> 
    <img src="assets/xyz.jpg" alt="xyz plane" class="xyzplane" width="216" height="128">
</div>-->

    
<script type="text/javascript" src="index.js"></script>

</body>

</html>
