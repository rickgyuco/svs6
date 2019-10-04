"use strict";

class Drawing {
    constructor(){
        this.layers = [];
    }

    addLayer(layer){
        this.layers.push(layer);
    }

    subtractLayer(layer){
        let index = this.layers.indexOf(object);
        if(index < 0)
            return;
        
        this.layers.splice(index, 1);
    }

    render(camera){
        background(0);

        let layers = this.layers;
        if(!layers)
            return;

        for(let i = 0; i < layers.length; i++) {
            let layer = layers[i];

            let buffer = camera.render(layer);   
            if(layer.blend == "DEFAULT")
                image(buffer, 0, 0);   
            else 
                blend(buffer, 0, 0, layer.width, layer.height, 0, 0, layer.width, layer.height, blends[layer.blend]);
                
        }
    }
}
