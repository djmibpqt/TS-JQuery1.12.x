import msg from './Message'
import * as $ from 'jquery'

$(() => {
    $('#showbtn').on('click', () => {
        var o = new msg();
        o.show();
    });
});