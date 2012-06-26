# AngularJS Async Google Maps Example Application 



## Overview

This application is a effort to build a piece of functionality in AngularJS for a project at [OurField](http://ourfield.org) which is built around Google Maps API. The current version of OurField is built with backbone front-end and Django backend. I am considering a move to AngularJS.

## Current Status

It's broke! Trying to use the example from [angular-phonecat](https://github.com/angular/angular-phonecat) to async load JS.

## Basic Features

Read and watched many AngularJS tutorials. Analyzed many AngularJS projects.

## Initial Objective

Switch views between

- Home Splash (HOME) /
- Google Map (GMAP) /map
- Other pages

Initial load of site default to HOME. 

- Do not load unnecessary js such as from Google Map.

On first visit to GMAP view

- Determine if map div has already been initialized
- If not, initialize the map object
- Switch to GMAP

Realtime Updates To Map

- Using socket.io, maintain updates to GMAP
- Create a simple button to drop markers. Other users connected should see their markers appear on their map.