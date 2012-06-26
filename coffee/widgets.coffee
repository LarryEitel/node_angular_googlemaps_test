angular.widget "ui:map", (el) ->
  return  if not google or not google.maps
  compiler = this
  elem = el
  pinExpr = widgetUtils.parseAttrExpr(el, "ui:pin")
  viewExpr = widgetUtils.parseAttrExpr(el, "ui:view")
  defaults =
    bindZoom: false
    bindMapType: false
    center:
      lat: 0
      lng: 0

    pinDraggable: true
    map:
      zoom: 4
      mapTypeId: google.maps.MapTypeId.ROADMAP

  options = widgetUtils.getOptions(el, defaults)
  defaults.map.center = new google.maps.LatLng(defaults.center.lat, defaults.center.lng)
  (el) ->
    currentScope = this
    $(elem).append "<div/>"
    div = ("div"
    elem
    ).get(0)
    map = new google.maps.Map(div, options.map)
    marker = new google.maps.Marker(
      position: map.center
      map: map
    )
    marker.setDraggable options.pinDraggable
    google.maps.event.addListener map, "click", (e) ->
      marker.setPosition e.latLng
      marker.setVisible true
      o = widgetUtils.getValue(currentScope, pinExpr) or {}
      $.extend o,
        lat: e.latLng.lat()
        lng: e.latLng.lng()

      widgetUtils.setValue currentScope, pinExpr, o

    google.maps.event.addListener marker, "dragend", (e) ->
      o = widgetUtils.getValue(currentScope, pinExpr) or {}
      $.extend o,
        lat: e.latLng.lat()
        lng: e.latLng.lng()

      widgetUtils.setValue currentScope, pinExpr, o

    google.maps.event.addListener map, "dragend", ->
      c = map.getCenter()
      o = widgetUtils.getValue(currentScope, viewExpr) or {}
      $.extend o,
        lat: c.lat()
        lng: c.lng()

      widgetUtils.setValue currentScope, viewExpr, o

    if defaults.bindZoom
      google.maps.event.addListener map, "zoom_changed", ->
        c = map.getCenter()
        z = map.getZoom()
        o = widgetUtils.getValue(currentScope, viewExpr) or {}
        $.extend o,
          lat: c.lat()
          lng: c.lng()
          zoom: z

        widgetUtils.setValue currentScope, viewExpr, o
    if defaults.bindMapType
      google.maps.event.addListener map, "maptypeid_changed", ->
        t = map.getMapTypeId()
        o = widgetUtils.getValue(currentScope, viewExpr) or {}
        $.extend o,
          mapType: t

        widgetUtils.setValue currentScope, viewExpr, o
    $(elem).data "map", map
    $(elem).data "marker", marker
    currentScope.$watch pinExpr.expression + ".lat", (->
      map = $(elem).data("map")
      marker = $(elem).data("marker")
      newPos = widgetUtils.getValue(currentScope, pinExpr)
      if not newPos or not newPos.lat or not newPos.lng
        marker.setVisible false
        return
      marker.setPosition new google.maps.LatLng(newPos.lat, newPos.lng)
      marker.setVisible true
    ), null, true
    currentScope.$watch pinExpr.expression + ".lng", (->
      map = $(elem).data("map")
      marker = $(elem).data("marker")
      newPos = widgetUtils.getValue(currentScope, pinExpr)
      if not newPos or not newPos.lat or not newPos.lng
        marker.setVisible false
        return
      marker.setPosition new google.maps.LatLng(newPos.lat, newPos.lng)
      marker.setVisible true
    ), null, true
    currentScope.$watch viewExpr.expression + ".lng", (->
      map = $(elem).data("map")
      newPos = widgetUtils.getValue(currentScope, viewExpr)
      map.setCenter new google.maps.LatLng(newPos.lat, newPos.lng)  if newPos
    ), null, true
    currentScope.$watch viewExpr.expression + ".lat", (->
      map = $(elem).data("map")
      newPos = widgetUtils.getValue(currentScope, viewExpr)
      map.setCenter new google.maps.LatLng(newPos.lat, newPos.lng)  if newPos
    ), null, true
    if defaults.bindMapType
      currentScope.$watch viewExpr.expression + ".mapType", ((val) ->
        map = $(elem).data("map")
        map.setMapTypeId val  if val
      ), null, true
    if defaults.bindZoom
      currentScope.$watch viewExpr.expression + ".zoom", ((val) ->
        map = $(elem).data("map")
        map.setZoom val  if val
      ), null, true