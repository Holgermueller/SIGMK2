# TimeandTemp

## Architect

Holger Mueller

## What it does

Onload, the app uses geolocation and the Open Weather Map API
to retrieve and display current weather data and the next seven days'
UV forecast for the user's location.

By clicking on the 5-Day-Forecast link at the top of the page,
the user can also retrieve their location's forecast for the next five
days, in three-hour increments, because that's how the Open Weather API
works.

## What if I want to see the current weather or forecast of another locations?

Use the search field in the nav-bar at the top of the screen to search the
current weather conditions and forecasts of another location.

Unfortunately, the UV forecast for another location cannot be searched at this time.
The API, as of this writing, does not have that functionality. It only works with geolocation.

### Stretch Goals

1. Save searched locations for quick, onclick forecast searches.
2. Animations for weather events: rain, snow, fog.
3. Data persistance between pages.
4. Sync background images more accurately with current weather and time of day.

<!-- ## Also...
Each location searched is saved locally in the user's browser. These saved locations
are then displayed, via a dropdown, under the LOCATIONS tab in the nav-bar.
These saved locaitons can be used to quick search the current weather information
for these locations. -->
