/**
 * Created by user on 2016/5/19.
 */
define(['jquery'],function(){
    (function (){
        $(document).ready(function(){
            init()
        });
        function init(){
            var height = $(document).height()-80;
            $(".container-fluid").css({"height":height});
            var margin = $("label").width()+4;
            $("#submitPort").css({"margin-left":margin})
        }
    }());
});