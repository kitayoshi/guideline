$(function(){

  //INIT

  FastClick.attach(document.body);

  setBaiduMap()

  $("#local-route-list").css("-webkit-transform","translate3D(0,0,0)")

  $(".info-full-link").click(function(){
    $(".baidu-map-container").addClass("hiden")
    $(".guideline-info").addClass("full")
  })

  $(".info-hide-link").click(function(){
    $(".baidu-map-container").removeClass("hiden")
    $(".guideline-info").removeClass("full")
    resetMap()
  })

  // $("#start-page").click(function(){
  //   $(this).css("opacity",0).delay(1000).queue(function(){
  //     $(this).hide().dequeue()
  //   })
  // })

  $("#local-route-1-link").click(function(){
    resetMap()
    if( $('.collapse').is(".in") ){
      $('.collapse').collapse("hide")
    }
    
    $("#local-route-list").css("-webkit-transform","translate3D(-100%,0,0)")
    $("#route-1").css("-webkit-transform","translate3D(0,0,0)")
    $(".isshow").removeClass("isshow")
    $("#route-1").addClass("isshow")
  })

  $("#local-route-3-link").click(function(){
    resetMap()
    if( $('.collapse').is(".in") ){
      $('.collapse').collapse("hide")
    }
    
    $("#local-route-list").css("-webkit-transform","translate3D(-100%,0,0)")
    $("#route-3").css("-webkit-transform","translate3D(0,0,0)")
    $(".isshow").removeClass("isshow")
    $("#route-3").addClass("isshow")
  })

  $("#local-route-list-link").click(function(){
    $('.collapse').collapse("hide")
    if (!$("#local-route-list").is("isshow") ){
      $("#local-route-list").css("-webkit-transform","translate3D(0,0,0)")
      $(".isshow").css("-webkit-transform","translate3D(100%,0,0)").delay(1000).queue(function(){
        $(".isshow").removeClass("isshow")
        $(this).dequeue()
        $("#local-route-list").addClass("isshow")
      })
    }
  })

  $("#fav-route-list-link").click(function(){
    $('.collapse').collapse("hide")
    if (!$("#fav-route-list").is("isshow") ){
      $("#fav-route-list").css("-webkit-transform","translate3D(0,0,0)")
      $(".isshow").css("-webkit-transform","translate3D(100%,0,0)").delay(1000).queue(function(){
        $(".isshow").removeClass("isshow")
        $(this).dequeue()
        $("#fav-route-list").addClass("isshow")
      })
    }
  })

  $("#route-1-A").click(function(){
    // route1Walking.search("前门", new BMap.Point(116.404467,39.906555));
    route1.centerAndZoom(new BMap.Point(116.404467,39.906555), 15);
  })
  $("#route-1-B").click(function(){
    route1.centerAndZoom(new BMap.Point(116.403426,39.924077), 15);
  })
  $("#route-1-C").click(function(){
    route1.centerAndZoom(new BMap.Point(116.398302,39.939562), 15);
  })
  $("#route-1-D").click(function(){
    route1.centerAndZoom(new BMap.Point(116.409683,39.93984), 15);
  })
})

function setPosition () {

}

function setBaiduMap () {
  // 百度地图API功能
  // var sContent =
  // "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>北京分子互动文化传播有限公司</h4>" + 
  // "<p style='margin:0;line-height:1.5;font-size:13px'>联系电邮：website@fen-z.com<br />人力电邮：hr@fen-z.com<br />电话：+86 10 85596959<br />传真：+86 10 85596959<br />地址：北京市朝阳区朝阳路大黄庄南里1号传媒精英总部204<br />邮编：100024</p>" + 
  // "</div>";
  route1 = new BMap.Map("baidu-map-route-1");
  route1.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
  route1Walking = new BMap.WalkingRoute(route1, {renderOptions:{map: route1, autoViewport: true}});
  route1Walking.search(new BMap.Point(116.404467,39.906555),new BMap.Point(116.409683,39.93984));

  route3 = new BMap.Map("baidu-map-route-3");
  route3.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
  route3Walking = new BMap.WalkingRoute(route3, {renderOptions:{map: route3, autoViewport: true}});
  route3Walking.search(new BMap.Point(116.56143,39.915171), new BMap.Point(116.562315,39.921479));
  // var marker = new BMap.Marker(point);
  // var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象

  // var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
  // var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});

  // map.centerAndZoom(mappoint, 11);
  // map.addControl(top_left_navigation);
  // map.addOverlay(marker);
  // marker.openInfoWindow(infoWindow);
}

function resetMap () {
  route1Walking.search(new BMap.Point(116.404467,39.906555),new BMap.Point(116.409683,39.93984));
  route3Walking.search(new BMap.Point(116.56143,39.915171), new BMap.Point(116.562315,39.921479));
}