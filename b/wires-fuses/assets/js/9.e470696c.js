(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{432:function(s,t,e){"use strict";var a=e(436),i=a.b.reactiveProp;t.a={extends:a.a,mixins:[i],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},435:function(s,t,e){var a={"./af":305,"./af.js":305,"./ar":306,"./ar-dz":307,"./ar-dz.js":307,"./ar-kw":308,"./ar-kw.js":308,"./ar-ly":309,"./ar-ly.js":309,"./ar-ma":310,"./ar-ma.js":310,"./ar-sa":311,"./ar-sa.js":311,"./ar-tn":312,"./ar-tn.js":312,"./ar.js":306,"./az":313,"./az.js":313,"./be":314,"./be.js":314,"./bg":315,"./bg.js":315,"./bm":316,"./bm.js":316,"./bn":317,"./bn.js":317,"./bo":318,"./bo.js":318,"./br":319,"./br.js":319,"./bs":320,"./bs.js":320,"./ca":321,"./ca.js":321,"./cs":322,"./cs.js":322,"./cv":323,"./cv.js":323,"./cy":324,"./cy.js":324,"./da":325,"./da.js":325,"./de":326,"./de-at":327,"./de-at.js":327,"./de-ch":328,"./de-ch.js":328,"./de.js":326,"./dv":329,"./dv.js":329,"./el":330,"./el.js":330,"./en-SG":331,"./en-SG.js":331,"./en-au":332,"./en-au.js":332,"./en-ca":333,"./en-ca.js":333,"./en-gb":334,"./en-gb.js":334,"./en-ie":335,"./en-ie.js":335,"./en-il":336,"./en-il.js":336,"./en-nz":337,"./en-nz.js":337,"./eo":338,"./eo.js":338,"./es":339,"./es-do":340,"./es-do.js":340,"./es-us":341,"./es-us.js":341,"./es.js":339,"./et":342,"./et.js":342,"./eu":343,"./eu.js":343,"./fa":344,"./fa.js":344,"./fi":345,"./fi.js":345,"./fo":346,"./fo.js":346,"./fr":347,"./fr-ca":348,"./fr-ca.js":348,"./fr-ch":349,"./fr-ch.js":349,"./fr.js":347,"./fy":350,"./fy.js":350,"./ga":351,"./ga.js":351,"./gd":352,"./gd.js":352,"./gl":353,"./gl.js":353,"./gom-latn":354,"./gom-latn.js":354,"./gu":355,"./gu.js":355,"./he":356,"./he.js":356,"./hi":357,"./hi.js":357,"./hr":358,"./hr.js":358,"./hu":359,"./hu.js":359,"./hy-am":360,"./hy-am.js":360,"./id":361,"./id.js":361,"./is":362,"./is.js":362,"./it":363,"./it-ch":364,"./it-ch.js":364,"./it.js":363,"./ja":365,"./ja.js":365,"./jv":366,"./jv.js":366,"./ka":367,"./ka.js":367,"./kk":368,"./kk.js":368,"./km":369,"./km.js":369,"./kn":370,"./kn.js":370,"./ko":371,"./ko.js":371,"./ku":372,"./ku.js":372,"./ky":373,"./ky.js":373,"./lb":374,"./lb.js":374,"./lo":375,"./lo.js":375,"./lt":376,"./lt.js":376,"./lv":377,"./lv.js":377,"./me":378,"./me.js":378,"./mi":379,"./mi.js":379,"./mk":380,"./mk.js":380,"./ml":381,"./ml.js":381,"./mn":382,"./mn.js":382,"./mr":383,"./mr.js":383,"./ms":384,"./ms-my":385,"./ms-my.js":385,"./ms.js":384,"./mt":386,"./mt.js":386,"./my":387,"./my.js":387,"./nb":388,"./nb.js":388,"./ne":389,"./ne.js":389,"./nl":390,"./nl-be":391,"./nl-be.js":391,"./nl.js":390,"./nn":392,"./nn.js":392,"./pa-in":393,"./pa-in.js":393,"./pl":394,"./pl.js":394,"./pt":395,"./pt-br":396,"./pt-br.js":396,"./pt.js":395,"./ro":397,"./ro.js":397,"./ru":398,"./ru.js":398,"./sd":399,"./sd.js":399,"./se":400,"./se.js":400,"./si":401,"./si.js":401,"./sk":402,"./sk.js":402,"./sl":403,"./sl.js":403,"./sq":404,"./sq.js":404,"./sr":405,"./sr-cyrl":406,"./sr-cyrl.js":406,"./sr.js":405,"./ss":407,"./ss.js":407,"./sv":408,"./sv.js":408,"./sw":409,"./sw.js":409,"./ta":410,"./ta.js":410,"./te":411,"./te.js":411,"./tet":412,"./tet.js":412,"./tg":413,"./tg.js":413,"./th":414,"./th.js":414,"./tl-ph":415,"./tl-ph.js":415,"./tlh":416,"./tlh.js":416,"./tr":417,"./tr.js":417,"./tzl":418,"./tzl.js":418,"./tzm":419,"./tzm-latn":420,"./tzm-latn.js":420,"./tzm.js":419,"./ug-cn":421,"./ug-cn.js":421,"./uk":422,"./uk.js":422,"./ur":423,"./ur.js":423,"./uz":424,"./uz-latn":425,"./uz-latn.js":425,"./uz.js":424,"./vi":426,"./vi.js":426,"./x-pseudo":427,"./x-pseudo.js":427,"./yo":428,"./yo.js":428,"./zh-cn":429,"./zh-cn.js":429,"./zh-hk":430,"./zh-hk.js":430,"./zh-tw":431,"./zh-tw.js":431};function i(s){var t=r(s);return e(t)}function r(s){if(!e.o(a,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return a[s]}i.keys=function(){return Object.keys(a)},i.resolve=r,s.exports=i,i.id=435},456:function(s,t,e){},523:function(s,t,e){"use strict";var a=e(456);e.n(a).a},530:function(s,t,e){"use strict";e.r(t);var a={components:{LineChart:e(432).a},data:function(){return{chartData_efficiency:null,chartOptions_efficiency:null,chartData_voltage_drop:null,chartOptions_voltage_drop:null}},mounted:function(){this.updateGraph_efficiency(),this.updateGraph_voltage_drop()},methods:{updateGraph_efficiency:function(){for(var s=[],t=[],e=0;e<=38;e++)s.push({x:e,y:this.efficiency(e,6)}),t.push({x:e,y:this.efficiency(e,6)});var a=[];for(e=0;e<=30;e++)a.push({x:e,y:this.efficiency(e,4)-s[e].y}),s[e].y+=a[e].y;var i=[];for(e=0;e<=23;e++)i.push({x:e,y:this.efficiency(e,2.5)-s[e].y}),s[e].y+=i[e].y;var r=[];for(e=0;e<=15;e++)r.push({x:e,y:this.efficiency(e,1.5)-s[e].y}),s[e].y+=r[e].y;var o=[];for(e=0;e<=10;e++)o.push({x:e,y:this.efficiency(e,1)-s[e].y});this.chartData_efficiency={datasets:[{label:"6mm2",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#fbbe59",backgroundColor:"#fbbe59",fill:!1,data:t},{label:"4mm2",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#070808",backgroundColor:"#070808",fill:!1,data:a},{label:"2.5mm2",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#005e85",backgroundColor:"#005e85",fill:!1,data:i},{label:"1.5mm2",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#6b6b6b",backgroundColor:"#6b6b6b",fill:!1,data:r},{label:"1mm2",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#5c9aaf",backgroundColor:"#5c9aaf",fill:!1,data:o}]},this.chartOptions_efficiency={scales:{xAxes:[{type:"linear",display:!0,scaleLabel:{labelString:"Output current (A)",fontSize:14,display:!0},gridLines:{display:!0}}],yAxes:[{id:"loss",type:"linear",position:"left",display:!0,stacked:!0,scaleLabel:{labelString:"Efficiency loss (%)",fontSize:14,display:!0},ticks:{beginAtZero:!0},gridLines:{display:!0}}]},legend:{usePointStyle:!0,labels:{boxWidth:20}},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1}},efficiency:function(s,t){var e=document.getElementById("sr").value,a=document.getElementById("wl").value,i=document.getElementById("v").value,r=e*a*1e3/t;return 100*(Math.pow(s,2)*r/1e3)/(i*s)},updateGraph_voltage_drop:function(){for(var s=[],t=[],e=0;e<=38;e++)t.push({x:e,y:this.voltage_drop(e,6)}),s.push({x:e,y:this.voltage_drop(e,6)});var a=[];for(e=0;e<=30;e++)a.push({x:e,y:this.voltage_drop(e,4)-s[e].y}),s[e].y+=a[e].y;var i=[];for(e=0;e<=23;e++)i.push({x:e,y:this.voltage_drop(e,2.5)-s[e].y}),s[e].y+=i[e].y;var r=[];for(e=0;e<=15;e++)r.push({x:e,y:this.voltage_drop(e,1.5)-s[e].y}),s[e].y+=r[e].y;var o=[];for(e=0;e<=10;e++)o.push({x:e,y:this.voltage_drop(e,1)-s[e].y});this.chartData_voltage_drop={datasets:[{label:"6mm2",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#fbbe59",backgroundColor:"#fbbe59",fill:!1,data:t},{label:"4mm2",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#070808",backgroundColor:"#070808",fill:!1,data:a},{label:"2.5mm2",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#005e85",backgroundColor:"#005e85",fill:!1,data:i},{label:"1.5mm2",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#6b6b6b",backgroundColor:"#6b6b6b",fill:!1,data:r},{label:"1mm2",yAxisID:"loss",pointRadius:0,borderWidth:2,borderColor:"#5c9aaf",backgroundColor:"#5c9aaf",fill:!1,data:o}]},this.chartOptions_voltage_drop={scales:{xAxes:[{type:"linear",display:!0,scaleLabel:{labelString:"Output current (A)",fontSize:14,display:!0},gridLines:{display:!0}}],yAxes:[{id:"loss",type:"linear",position:"left",display:!0,stacked:!0,scaleLabel:{labelString:"voltage drop (V)",fontSize:14,display:!0},ticks:{beginAtZero:!0},gridLines:{display:!0}}]},legend:{usePointStyle:!0,labels:{boxWidth:20}},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!1}},voltage_drop:function(s,t){var e=document.getElementById("sr").value,a=document.getElementById("wl").value;document.getElementById("v").value;return e*a*1e3/t*s/1e3}}},i=(e(523),e(43)),r=Object(i.a)(a,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticStyle:{overflow:"auto"}},[e("div",{staticClass:"a"},[e("line-chart",{attrs:{"chart-data":s.chartData_efficiency,options:s.chartOptions_efficiency}})],1),s._v(" "),e("div",{staticClass:"b"},[e("line-chart",{attrs:{"chart-data":s.chartData_voltage_drop,options:s.chartOptions_voltage_drop}})],1),s._v(" "),e("p"),e("div",{staticClass:"left"},[s._v("Specific resistance:")]),s._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"sr",step:"0.001",value:"0.017",min:"0"},on:{change:function(t){s.updateGraph_efficiency(),s.updateGraph_voltage_drop()}}}),s._v(" Ω·mm²/m")]),s._v(" "),e("div",{staticClass:"left"},[s._v("System voltage:")]),s._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"v",step:"1",value:"24",min:"0"},on:{change:function(t){s.updateGraph_efficiency(),s.updateGraph_voltage_drop()}}}),s._v(" V")]),s._v(" "),e("div",{staticClass:"left"},[s._v("Wire Length: ")]),s._v(" "),e("div",{staticClass:"right"},[e("input",{attrs:{type:"number",id:"wl",step:"1",value:"10",min:"0"},on:{change:function(t){s.updateGraph_efficiency(),s.updateGraph_voltage_drop()}}}),s._v(" m")]),s._v(" "),e("p")])}),[],!1,null,null,null);t.default=r.exports}}]);