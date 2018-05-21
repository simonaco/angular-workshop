# TravelApp

In this session we'll learn the essentials about templates in angular:

1.  Understand what are directives and differences between directives and components
2.  NgFor directive
3.  NgIf directive
4.  NgClass directive
5.  Structural directives vs Attribute directives

Tasks:

1.  Go to the component we just created in the previous exercise, named place. Save the array in places.json in a variable called places.

2.  In your component's template display details for first trip:

```html
  <div class="places">
    <p class="top">Endava's Places</p>
    <h1>name</h1>
    <p>
      <strong>Rating: rating</strong>
    </p>

    <div class="main-img"></div>
    <p>description</p>
  </div>
```

3.  List all places in a sidebar using \*ngFor:

```html
 <aside class="sidebar">
    <h3>Other Trips</h3>
    <div class="location">
      <img src alt=name />
      <p class="top">
        <strong>name</strong>
      </p>
      <p>description</p>
      <hr />
    </div>
  </aside>
```

4.  Wrap everything in a main tag

5.  Implement component ngOnInit, ngOnChanges, ngOnDestroy lifecycle hooks and log method name to the console

And then switch to the next branch, templating:

```console
git checkout templating
```
