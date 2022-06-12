# diag

diag is a combination of a JavaScript library and some basic CSS to create a
nice `<diag>` element. The element allows you to create simple dialog boxes,
with customizable titles, alignments or color schemes.

Look at the [example][example] to view a working example of the `<diag>`
element in action.

## Anatomy of `<diag>`

Example:

```html
<diag title="Hello" at="center">
  This is my very cool dialog box!
</diag>
```

`<diag>` accepts two attributes: `title` and `at`.

`title`, when specified, adds a title bar to the dialog box. The title bar will
contain the text specified in the attribute.

`at` simply aligns the dialog box to one of the commonly used places. Currently,
only `"center"` is supported.

## Changing dialog boxes with code

The JavaScript library that makes all of this happen also provides a simple API
to manage these dialog boxes.

`diag.show(id)` will make the dialog box with the ID `id` visible.
`diag.hide(id)` does the opposite.

`diag.showAll()` will make all dialog boxes within the document visible, and vice
versa for `diag.hideAll()`.

## Changing the colors

You can change the color scheme of the dialog boxes by changing the following
CSS variables of `:root`:

`--diag-bg` changes the background color of the dialog boxes.

`--diag-text` changes the text color.

`--diag-accn` changes the accent color used for the border and title bar
background/

`--diag-title` changes the text color for the title bar.

[example]: example.html
