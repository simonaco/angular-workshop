# TravelApp

In this session we'll learn the essentials about making HTTP requests in angular:

1.  @Injectable decorator
2.  Observables & rxjs

Tasks:

1.  Create a new service called places using the angular cli
2.  Add a new method called getPlaces and move array from places component to this new method. Inject service into places component and initialise array by calling method. test everything works as before.
3.  Import HttpModule into our app and inject Http in PlacesService
4.  Create a constant names PLACES_API and set its value to https://serverless-places.azurewebsites.net/api
5.  Open postman to make a get request to https://serverless-places.azurewebsites.net/api/places
6.  Implement get request in places service using the http service we injected earlier
7.  Implement edit(put) and remove(delete) methods similar to previous
8.  Test everything works as expected

Make sure to commit your changes using:

```console
git add .
git commit -m "Services take us a long way"
```

And then switch to the next branch, forms:

```console
git checkout forms
```
