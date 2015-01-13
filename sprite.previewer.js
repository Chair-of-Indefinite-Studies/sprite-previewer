;(function(sprite, arrayFor, undefined){
    var preview = sprite.preview = {};

    var View = preview.View = function(model, preview){
        this.model = model;
        this.preview = preview;
	this.initialize();
	this.model.on('paint', this.paintPixel.bind(this));
	this.update();
    };
    View.prototype.initialize = function(){
	this.preview.width = this.model.columns;
	this.preview.height = this.model.rows;
	this.context = this.preview.getContext('2d');
	this.imageData = this.context.createImageData(this.preview.width, this.preview.height);
	this.model.forEachPixel(this.paintPixel.bind(this));
    };
    View.prototype.update = function(){
	this.context.putImageData(this.imageData, 0, 0);
    };
    View.prototype.paintPixel = function(x, y, color){
	var baseIndex = 4 * (this.model.columns * y + x);
	arrayFor(color).forEach(function(value, index){
	    this.data[baseIndex + index] = value;
	}.bind(this.imageData));
	this.update();
    };
})(window.sprite = window.sprite || {}, color.array)
