<template>
    <div style="overflow:auto">
        <line-chart :chart-data="datacollection" :options="chartOptions"></line-chart>
       
         <h4>Insert datasheet parameters at standard test conditions (STC):</h4>
         <div class="left">voltage in maximum power point:</div>
         <div class="right"><input type="number" id="vmpp_stc" step="0.1" value="39.8" @change="updateGraph()"> V</div> 
         <div class="left">current in maximum power point:</div>
         <div class="right"><input type="number" id="impp_stc" step="0.1"value="5.40" @change="updateGraph()"> A</div>
         <div class="left">open circuit voltage:</div>
         <div class="right"><input type="number" id="voc_stc" step="0.1" value="48.3" @change="updateGraph()"> V</div>
         <div class="left">short circuit current:</div>
         <div class="right"><input type="number" id="isc_stc" step="0.1" value="5.80" @change="updateGraph()"> A</div>
         <br>
         <br>
         <br>
         <br>
         <br>
         <h4>Define Temperature Correction:</h4>
         <div class="left">temperature coefficient of Isc: </div>
         <div class="right"><input type="number" id="isc_coeff" step="0.1" value="0.0035" @change="updateGraph()"> A/°K</div>
         <div class="left">temperature coefficient of Voc:</div>
         <div class="right"><input type="number" id="voc_coeff" step="0.1" value="-0.1368" @change="updateGraph()"> V/°K</div>  
         <body>
         <br>
         <br>    
         <h4>Calculate Cell Temperature:</h4>
         <div class="left">ambient temperature: </div>
         <div class="right"><input type="number" id="t_ambient" step="0.1" value=""/> °C</div>
         <div class="left">nominal operating cell temperature (NOCT): </div>
         <div class="right"><input type="number" id="t_nominal" step="0.1" value="" /> °C</div>
         <br>
         <br>
         <br>
         <button @click="calc()">calculate</button>
         <br>
         <div class="left">your cell temperature is: </div>
         <div class=right><output type="number" id="t_cell" /> °C</div>
         <br>
         </body>
         <br>
         <br>
         <div class="left">Insert the measured temperature:</div>
         <div class="right"><input type="number" id="t_measured" step="0.1" value="25" @change="updateGraph()"> °C</div>  
         <br>
         <br>
         <h4>Define Solar Irradiance based on your location: </h4>
         <div class="left">Solar irradiance on the module surface:</div>
         <div class="right"><input type="number" id="g_location" step="0.1" value="24" @change="updateGraph()"> kW.h/m^2.day</div>
         <br>
         <br>
    </div>
</template>

<script>
import LineChart from './LineChart.js'


 var vmpp_stc;     // voltage at maximum power point (standard test conditions)
 var impp_stc;     // current at maximum power point (standard test conditions)
 var voc_stc;      // open circuit voltage (standard test conditions)
 var isc_stc;      // short circuit current (standard test conditions)
 var isc_coeff;    // temperature coefficient of short circuit current
 var voc_coeff;    // temperature coefficient of open circuit voltage
 var t_measured;   // cell temperature measured based on location 
 var g_location;   // solar irradiance input by the user measured in (kilowatt-hours per square meter per day):
 var g_measured;   // solar irradiance with units adjustable to watts per square meter
 var t_ambient;    // current ambient temperature based on location
 var noct;         // nominal operating cell temperature
 var t_cell;       // measured cell temperature

export default {
    components: {
        LineChart
     },
    data () {
        return {
            datacollection: null,          
        }

    },
    mounted () {
        this.updateGraph()
    },
    methods: {
        updateGraph () {
            var points_v = [];
            var points_p = [];

            for(var v = 0; v <= 50; v += 0.1){
                points_v.push({x:this.v(v), y:this.i(v)});
            }
            for(var v = 0; v <= 50; v += 0.1){
                points_p.push({x:this.v(v), y:this.p(v)});
            }
            this.datacollection = {
                datasets:[{    
                    label: 'IV curve',
                    backgroundColor: 'transparent',
                    yAxesGroup: 'Current(A)',
                    yAxisID:'I',
                    borderColor: '#fbbe59',
                    borderWidth: 2,
                    pointRadius: 0,
                    //fill: false,
                    data: points_v
                 },  
                 {
                    label: 'PV curve',
                    backgroundColor: 'transparent',
                    yAxesGroup: 'Power(W)',
                    yAxisID: 'P',
                    borderColor:'#005e85',
                    borderWidth: 2,
                    pointRadius: 0,
                    //fill: false,
                    data: points_p
                }]
            },
            this.chartOptions={
                scales:{
                    xAxes:[{
                        type: 'linear',
                        display: true,
                        scaleLabel:{
                            display: true,
                            fontSize: 10,
                            labelString: "Voltage(V)",
                        },
                        ticks:{
                            beginAtZero: true,
                            min: 0
                            //maxTicksLimit:10,
                            //stepSize:3
                        },
                        gridLines:{
                            display: true
                        }
                    }],
                    yAxes:[{
                        type: 'linear',
                        position: 'left',
                        id: 'I',
                        scalePositionLeft: true,
                        display:true,
                        fontSize: 10,
                        scaleLabel:{
                            display: true,
                            labelString: 'Current(A)'
                        },
                        ticks:{
                            beginAtZero: true,
                            min: 0
                        },
                        gridLines:{
                            display: true
                        }
                    },
                    {
                        type: 'linear',
                        id: 'P',
                        position: 'right',
                        scalePositionLeft: false,
                        min:0,
                        max:100,
                        fontSize:10,
                        display:true,
                        scaleLabel:{
                            display: true,
                            labelString: 'Power(W)'
                        },
                        ticks:{
                            beginAtZero: true,
                            min: 0 
                        },
                        gridLines:{
                            display: false
                        }
                    }]
                },
                legend:{
                    usePointStyle: true
                },
                tooltips:{
                    enabled: false
                },
                responsive: true,
                maintainAspectRatio: false
            }           
        },
        /** method getValues()
         * reads the datasheet parameters at standart test conditions input from the user 
         * updates the temperature and solar irradiance dependencies
         * reads the ambient and nominal operating cell temperatures from the user
        */
        getValues(){     
            vmpp_stc = parseFloat(document.getElementById("vmpp_stc").value);
            impp_stc = parseFloat(document.getElementById("impp_stc").value);    
            voc_stc = parseFloat(document.getElementById("voc_stc").value);
            isc_stc = parseFloat(document.getElementById("isc_stc").value);     
            isc_coeff = parseFloat(document.getElementById("isc_coeff").value);
            voc_coeff = parseFloat(document.getElementById("voc_coeff").value);
            t_measured = parseFloat(document.getElementById("t_measured").value);
            g_location = parseFloat(document.getElementById("g_location").value);        
            g_measured = (g_location*1000)/24;        
            t_ambient= parseFloat(document.getElementById("t_ambient").value);  
            t_nominal = parseFloat(document.getElementById("t_nominal").value);  
        },
        /** method calc
        * @return the  current temperature cell based on location based on nominal operating cell temperature and ambient temperature
        */
        calc(){
            this.getValues();   
            t_cell = document.getElementById("t_cell");    
            t_cell.value = t_ambient + ((g_measured/800) *(t_nominal -20));            
        },
       /** method i(v) 
        * @return the output current of solar panel based on voltage values 
        * translates the output current based on the variability of temperature and solar irradiance
        * temperature has slight effect on the output current
        * @param v: the voltage of solar panel 
        */
        i(v){     
            this.getValues();     
            var cons1 = isc_stc;
            var cons2 = (vmpp_stc - voc_stc)/ Math.log(1-(impp_stc/isc_stc));       
            var i = isc_stc - (cons1 * Math.pow(Math.E, ((-1*voc_stc)/cons2)) * (Math.pow(Math.E, v/cons2)-1));    
            
            if (t_measured== 25 && g_measured==1000){
                return i;
             }
            else{
                return (i + (isc_stc *((g_measured/1000)-1)) + ((isc_coeff * (t_measured- 25))*(g_measured/1000)));
            }  

            /* ---------------------------------------------Equations from old paper----------------------------------------------- */
            //var gpu = g_measured/1000;                                                                                            //
            //var rs = ((voc_stc - vmpp_stc)/4)/(gpu*(impp_stc + (isc_coeff*(t_measured-25))));                                     //
            //var rsh = (vmpp_stc - (voc_coeff*(t_measured-25))) / (gpu *((isc_stc - impp_stc)/2));                                 //
            //var p = rsh/(rs+rsh);                                                                                                 //
            //var beta = (gpu * (isc_stc + (isc_coeff*(t_measured-25)))) - ((voc_stc - (voc_coeff *(t_measured-25)))/rsh);          //
            //var gamma = (1/(vmpp_stc-voc_stc)) * Math.log10(((gpu * ((p*isc_stc)-impp_stc))- ((1-p)*isc_coeff*(t_measured-25))-   //
            //            ((p *(vmpp_stc - (voc_coeff*(t_measured-25))))/rsh))/(p*((gpu*(isc_stc+(isc_coeff*(t_measured-25))))-     //
            //            ((voc_stc-(voc_coeff*(t_measured-25)))/rsh))));                                                           //
            //var i = ((gpu * (isc_stc + (isc_coeff *(t_measured-25)))) - (beta* Math.pow(Math.E,                                   //
            //        (gamma * (v + (voc_stc*(t_measured-25))-voc_stc)))) - (v/rsh))/(1+(rs/rsh));                                  //
            /*--------------------------------------------------------------------------------------------------------------------- */     
        },
        /** method v(v) 
        * @return the output voltage of solar panel 
        * translates the output voltage based on the variability of temperature and solar irradiance
        * solar irradiance has slight effect on the vuepress doutput voltage
        * @param v: the voltage of solar panel 
        */
        v(v){
            this.getValues();
            if (t_measured== 25 && g_measured==1000){
                return v;
            }
            else{
                var corr_factor= 0.085; // correction factor 
                return (v /((1+(voc_coeff*(25-t_measured)))*(1+(corr_factor*Math.log(1000/g_measured)))));
            }    
        },
        /** method p(v) 
        * @return the output power of solar panel based on current and voltage values 
        * translates the output power based on the variability of temperature and solar irradiance
        * @param v: the voltage of solar panel 
        */
        p(v){              
            return this.i(v)*this.v(v);    
        }
         
    }
}

</script>

<style>
.left {
    width: 45%;
    float: left;
    text-align: right;
}
.right {
    width: 50%;
    margin-left: 10px;
    float:left;
}
</style>