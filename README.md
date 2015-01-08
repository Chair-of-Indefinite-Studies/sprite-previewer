sprite-previewer
===========

A sprite previewer accompanying the sprite editor

Usage
-----

Given a `sprite.editor.Model`

```js
var model = new sprite.editor.Model(20, 30)
```

We can get a `sprite.preview.View` in the following manner.

```js
var preview = document.getElementById('pixel-preview');
var previewView = new sprite.preview.View(model, preview);
```
