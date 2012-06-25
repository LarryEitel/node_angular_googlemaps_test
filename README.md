Design 

UserSessionObject
    GMAP State
    Other settings, etc



Routes
    /           HOME
    /map        GMAP

Views
    Home Splash (HOME)
    Google Map (GMAP)
    Other pages

Controllers
    MapCtrl    

Initial load of site default to HOME. 
    Do not load unnecessary js such as from Google Map.

First visit to GMAP
    Check session map object variable to determine if map div has already been initized
    If not, initialize the map object
        Check to restore user session
    Show GMAP Page
    Maybe have Hide previous page perhaps

Navigate back to other pages
    Hide the GMAP page


Navigate BACK to GMAP
    If it has already been initiazed, then show() the View again.

Listen for map object state changes
    Capture to User Session 
        MapCenter
        ZoomLevel
        Etc
    Update URL Hash with params for deep linking.

Meanwhile,
    Using socket.io, maintain updates to GMAP, ie, user position markers, etc.