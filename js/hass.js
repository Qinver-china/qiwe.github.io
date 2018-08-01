hass();
setInterval(function() {hass()}, 10000); /*=刷新时间 =*/
function hass() {
    $(document).ready(function hass() {
        ws = new WebSocket('ws://xx.xx.xx/api/websocket'); /*=HA-api地址=*/
        ws.addEventListener('open', function(event) {
            ws.send('{"type": "auth","api_password": "XXXX"}'); /*=发送密码开始链接，没有密码删除此行=*/
            ws.send('{"id": 19,"type": "get_states"}')
        });
        ws.onmessage = function(event) {
            var txt = event.data; /*=返回的初始数据=*/
            obj = eval("(" + txt + ")"), json2 = "";
            yz = obj.type; /*=反馈密码验证信息=*/
            var l1 = ""
            setTimeout(function () {hassyz()}, 1000);
            function hassyz() {
            if (yz == "auth_invalid") {
                l1 = "API密码错误";
                $("#halb1,#halb2").hide(100);
                $("#hayz").show(100);
            } else if (yz == "auth_ok") {
                l1 = "密码验证成功"
                $("#halb1,#halb2").show(100);
                $("#hayz").hide(100);
            } else if (yz == "result") {
                l1 = "已获取到数据";
                $("#halb1,#halb2").show(100);
                $("#hayz").hide(100);
            } else {
                l1 = "重新链接..."
                $("#halb1,#halb2").hide(100);
                $("#hayz").show(100);
            };
                $("#l1").html(l1);
            };
            for (var x in obj.result) {
                json2 += '"' + obj.result[x].entity_id + '": {' + '"name": "' + obj.result[x].attributes.friendly_name +
                    '","state": "' + obj.result[x].state + '","unit": "' + obj.result[x].attributes.unit_of_measurement +
                    '"},';
            } /*=重新写json-重复数据=*/
            json3 = '{"qha": {' + json2 + '"over": "ok"}}'; /*=汇总重复数据成json=*/
            json4 = eval("(" + json3 + ")"); /*=json3转json格式=*/
            /*=====用entity_id匹配数据并显示======*/
            /*=用entity_id匹配数据并显示=*/
                var ha1 = json4.qha["sensor.m1_temperature"] ? json4.qha["sensor.m1_temperature"] : "",
                    ha2 = json4.qha["sensor.m1_humidity"] ? json4.qha["sensor.m1_humidity"] : "",
                    ha3 = json4.qha["sensor.time_online"] ? json4.qha["sensor.time_online"] : "",
                    ha4 = json4.qha["sensor.m1_hcho"] ? json4.qha["sensor.m1_hcho"] : "",
                    ha5 = json4.qha["sensor.m1_pm25"] ? json4.qha["sensor.m1_pm25"] : "",
                    ha6 = json4.qha["light.led_tasmota"] ? json4.qha["light.led_tasmota"] : "",
                    ha1 = ha1.state,ha2 = ha2.state,ha3 = ha3.state,ha4 = ha4.state,ha5 = ha5.state,ha6 = ha6.state;
                    
                var ha21 = json4.qha["sensor.m1_temperature"] ? json4.qha["sensor.m1_temperature"] : "",
                    ha22 = json4.qha["sensor.m1_humidity"] ? json4.qha["sensor.m1_humidity"] : "",
                    ha23 = json4.qha["sensor.time_online"] ? json4.qha["sensor.time_online"] : "",
                    ha24 = json4.qha["sensor.m1_hcho"] ? json4.qha["sensor.m1_hcho"] : "",
                    ha25 = json4.qha["sensor.m1_pm25"] ? json4.qha["sensor.m1_pm25"] : "",
                    ha26 = json4.qha["light.led_tasmota"] ? json4.qha["light.led_tasmota"] : "",
                    ha21 = ha21.state;ha22 = ha22.state;ha23 = ha23.state;ha24 = ha24.state;ha25 = ha25.state;ha26 = ha26.state;
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
        if(ha1=="on"){ha1="已打开";$('#p1').addClass('on')}else if(ha1=="off"){ha1="已关闭";$('#p1').removeClass('on')}else{$('#p1').removeClass('on')}$("#ha1").html(ha1);
        if(ha2=="on"){ha2="已打开";$('#p2').addClass('on')}else if(ha2=="off"){ha2="已关闭";$('#p2').removeClass('on')}else{$('#p2').removeClass('on')}$("#ha2").html(ha2);
        if(ha3=="on"){ha3="已打开";$('#p3').addClass('on')}else if(ha3=="off"){ha3="已关闭";$('#p3').removeClass('on')}else{$('#p3').removeClass('on')}$("#ha3").html(ha3);
        if(ha4=="on"){ha4="已触发";$('#p4').addClass('on')}else if(ha4=="off"){ha4="离开";$('#p4').removeClass('on')}else{$('#p4').removeClass('on')}$("#ha4").html(ha4);
        if(ha5=="on"){ha5="已打开";$('#p5').addClass('on')}else if(ha5=="off"){ha5="已关闭";$('#p5').removeClass('on')}else{$('#p5').removeClass('on')}$("#ha5").html(ha5);
        if(ha6=="on"){ha6="已打开";$('#p6').addClass('on')}else if(ha6=="off"){ha6="已关闭";$('#p6').removeClass('on')}else{$('#p6').removeClass('on')}$("#ha6").html(ha6);

        if(ha21=="on"){ha21="已打开";$('#p21').addClass('on')}else if(ha21=="off"){ha21="已关闭";$('#p21').removeClass('on')}else{$('#p21').removeClass('on')}$("#ha21").html(ha21);
        if(ha22=="on"){ha22="已打开";$('#p22').addClass('on')}else if(ha22=="off"){ha22="已关闭";$('#p22').removeClass('on')}else{$('#p22').removeClass('on')}$("#ha22").html(ha22);
        if(ha23=="on"){ha23="已打开";$('#p23').addClass('on')}else if(ha23=="off"){ha23="已关闭";$('#p23').removeClass('on')}else{$('#p23').removeClass('on')}$("#ha23").html(ha23);
        if(ha24=="on"){ha24="已打开";$('#p24').addClass('on')}else if(ha24=="off"){ha24="已关闭";$('#p24').removeClass('on')}else{$('#p24').removeClass('on')}$("#ha24").html(ha24);
        if(ha25=="on"){ha25="已打开";$('#p25').addClass('on')}else if(ha25=="off"){ha25="已关闭";$('#p25').removeClass('on')}else{$('#p25').removeClass('on')}$("#ha25").html(ha25);
        if(ha26=="on"){ha26="已打开";$('#p26').addClass('on')}else if(ha26=="off"){ha26="已关闭";$('#p26').removeClass('on')}else{$('#p26').removeClass('on')}$("#ha26").html(ha26);
       };  
    });
}
