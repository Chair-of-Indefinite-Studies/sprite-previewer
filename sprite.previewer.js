;(function(sprite, undefined){
    var preview = sprite.preview = {};

    var View = preview.View = function(model, preview){
        this.model = model;
        this.preview = preview;
	this.model.on('paint', this.update.bind(this));
	this.initialize();
	this.update();
    };
    View.prototype.initialize = function(){
	this.preview.width = this.model.columns;
	this.preview.height = this.model.rows;
	this.context = this.preview.getContext('2d');
    };
    View.prototype.update = function(){
	this.context.fillRect(0, 0, this.preview.width, this.preview.height);
    };
})(window.sprite = window.sprite || {})
