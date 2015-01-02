;(function(sprite, undefined){
    var preview = sprite.preview = {};

    var View = preview.View = function(model, preview){
        this.model = model;
        this.preview = preview;
	this.context = preview.getContext('2d');
	this.model.on('paint', this.update.bind(this));
	this.update();
    };
    View.prototype.update = function(){
	this.context.fillRect(0, 0, this.preview.width, this.preview.height);
    }
})(window.sprite = window.sprite || {})
