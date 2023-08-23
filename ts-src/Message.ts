import * as $ from 'jquery'

export default class Message{
    show(){
        $('#showbtn').html('Teste');
        alert('Hello World!');
        $.getScript("teste");
        let calendario = $("#calendario");
        if(calendario.length){
            calendario.unitegallery({
                tile_enable_image_effect:true,
                tile_image_effect_reverse:true,
                gallery_theme: "tiles",
                lightbox_numbers_size: "20",
                lightbox_numbers_color: "#cfc",
            });
        }
    }
}