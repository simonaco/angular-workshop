# TravelApp

In this session we'll learn the essentials about forms in angular:

1.  RouterModule
2.  RouterOutlet

Tasks:

1.  Import RouterModule from '@angular/router'
2.  Create a component not-found and add message "These are not the droids your are looking for' :D
3.  Create array of routes that navigate to:
    /places - PlacesComponent
    /group - GroupComponent
    /index - IndexComponent
    /** - NotFoundComponent, everything else that doesn't match existing routes
4.  Create a component named footer with inline template, no tests, Use style from https://github.com/simonaco/travel-app/blob/master/src/app/footer/footer.component.css .Replace generated template with:

```html
<footer>
    Made by
    <a href="<replace with link to your social profile>" target="_blank">your name</a>. This project is open source, visit
    <a href="https://github.com/simonaco/workshop" target="_blank">the repo.</a>
  </footer>
```

5.  //TODO Instead of displaying placeForm component conditionally, add a new route and use router to redirect

Make sure to commit your changes using:

```console
git add .
git commit -m "Five routers walk into a bar. Who gets the car keys? The Designated Router."
```

If you just want to see results, switch to the next branch, final:

```console
git checkout final
```
