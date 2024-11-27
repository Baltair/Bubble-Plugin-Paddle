function(instance, properties) {

	instance.canvas.innerHTML = `<div style="background-image: url(//dd7tel2830j4w.cloudfront.net/f1667704477537x776092836123525800/paddle_logo.png); opacity: 0.3; background-size: contain; background-position: center; background-repeat: no-repeat; height: ${properties.bubble.height()}px; width: ${properties.bubble.width()}px;"> Mode = ${properties.display_method}</div>`;

}