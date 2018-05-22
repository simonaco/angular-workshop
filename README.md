# TravelApp

In this session we'll learn the essentials about forms in angular:

1.  FormsModule
2.  Template driven forms vs reactive forms
3.  Validators

Tasks:

1.  Import FormsModule from '@angular/forms'
2.  Generate a new component place-form for your form. Use the spec false flag.
3.  Add create place method in places.service
4.  Create a new form :
    name - input, required
    desc - text area, required
    rating - checkbox + input (number), if rated (default false) set rating  
    stars - select box with number from 1 to 5
    img - input
5.  Display conditionally view product/edit product

Optional:

1.  Add Angular Material to project by following https://material.angular.io/guide/getting-started
2.  Reimplement forms using Angular material

Make sure to commit your changes using:

```console
git add .
git commit -m "Forms are funky"
```

And then switch to the next branch, forms:

```console
git checkout final
```
