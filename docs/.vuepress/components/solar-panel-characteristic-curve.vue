<template>
    <div style="overflow:auto">
        <line-chart :chart-data="datacollection" :options="chartOptions"></line-chart>
       
         <h4>Define the curves at standard test conditions (STC):</h4>
       
         <div class="left">voltage in maximum power point "vmpp":</div>
         <div class="right"><input type="number" id="vmpp" 
          step="0.1" value="18" @change="updateGraph()"></div>
         
         <div class="left">current in maximum power point "impp":</div>
         <div class="right"><input type="number" id="impp" step="0.1"value="5.56" @change="updateGraph()"></div>

         <div class="left">open circuit voltage "voc":</div>
         <div class="right"><input type="number" id="voc" step="0.1" value="21.6" @change="updateGraph()"></div>

         <div class="left">short circuit current "isc":</div>
         <div class="right"><input type="number" id="isc" step="0.1" value="6.12" @change="updateGraph()"></div>

         <br>
         <br>
         <h4>Define the parameters for temperature correction:</h4>
         <div class="left">temperature coefficient of isc "α":</div>
         <div class="right"><input type="number" id="α" step="0.1" value="10" @change="updateGraph()"></div>

         <div class="left">temperature coefficient of voc "β":</div>
         <div class="right"><input type="number" id="β" step="0.1" value="4" @change="updateGraph()"></div>

         <div class="left">module temperature "T":</div>
         <div class="right"><input type="number" id="T" step="0.1" value="5" @change="updateGraph()"></div>
         
         <!--<button @click="updateGraph()"> Fill Your Data and Update the Curves</button>-->
    </div>
</template>

<script>
import LineChart from './LineChart.js'

    
export default {
    components: {
        LineChart
     },
    data () {
        return {
            datacollection: null
        }
    },
    mounted () {
        this.updateGraph()
     },
    methods: {
    
       updateGraph () {
                
            var points_v = [];
            var points_p = [];
                
            for (var i = 0; i <= 10; i += 0.01) {
                points_v.push({x:i, y:this.v(i)});


            }
           
            for (var i = 0; i <= 10; i += 0.01) {
                points_p.push({x:i, y:this.p(i)});

            }
           
            this.datacollection = {
             
                datasets: [{
                        
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
                    }
                ]
            },
            this.chartOptions={
                scales: {
                    xAxes: [{
                        type: 'linear',
                        display: true,
                        scaleLabel: {
                            display: true,
                            fontSize: 10,
                            labelString: "Voltage(V)",
                        },
                        ticks: {
                            beginAtZero: true,
                            //maxTicksLimit:10,
                            //stepSize:3
                               
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    yAxes: [{
                        type: 'linear',
                        position: 'left',
                        id: 'I',
                        scalePositionLeft: true,
                        display:true,
                        fontSize: 10,
                        scaleLabel: {
                            display: true,
                            labelString: 'Current(A)'
                        },
                        ticks: {
                            beginAtZero: true                            },
                        gridLines: {
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
                        scaleLabel: {
                            display: true,
                            labelString: 'Power(W)'
                        },
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    usePointStyle: true
                },
                tooltips: {
                    enabled: false
                },
                responsive: true,
                maintainAspectRatio: false
            }
                 
        },
        i(v){

        },
        v(i) {

            var vmpp = document.getElementById("vmpp").value;
            var impp = document.getElementById("impp").value;
            var voc = document.getElementById("voc").value;
            var isc = document.getElementById("isc").value;
                
             //var m = ((voc/isc) * ( ((-1*5.411*vmpp*impp)/(isc*voc)) + ((6.450*vmpp)/voc) + ((3.417*impp)/isc) - 4.422));
             //var rpv = (((-1*m*isc)/impp) + ((vmpp/impp)*(1-(isc/impp))));
             //var vt = (-1*isc * (m+rpv));
             //var io = (isc* Math.pow(Math.E,(voc/vt)));
            var vt =1.9102;
            var rpv=-0.1237;
            var io = Math.pow(7.5,-5);
            var v = (vt* Math.log(((isc-i+io)/io) - (i*rpv)));
            return  v;
        },
        p(i){
            return (this.v(i)*i);
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