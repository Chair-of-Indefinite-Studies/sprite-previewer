(function(sprite){
	var model = new sprite.editor.Model(20, 30);

	var canvas = document.getElementById('pixel-editor');
	var view = new sprite.editor.View(model, canvas);
	var controller = sprite.editor.controllerFor(model, view, canvas);

	var preview  = document.getElementById('pixel-preview');
	var previewView = new sprite.preview.View(model, preview);

	canvas.addEventListener('mousedown', controller.startDrawing.bind(controller));
	canvas.addEventListener('mouseup', controller.stopDrawing.bind(controller));
})(sprite);
