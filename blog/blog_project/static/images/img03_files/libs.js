var logopened=false;
$(document).ready(function(){
    var theme_url = $('body').attr('data-theme');
    $('head').append('<link rel="stylesheet" href="'+theme_url+'/style/zoombox.css" />');    
    // увеличение при клике                

        $('.cnt a img').each(function(){
           var $this = $(this),
                src = $this.closest('a').attr('href')
                jpg = src.indexOf('.jpg') + 1,
                png = src.indexOf('.png') + 1;  
                gif = src.indexOf('.gif') + 1;  
            if ( jpg || png) {            
                $this.closest('a').addClass('zoombox zgallery2');
            }
        }) 
        $('.stat-text p img').each(function(){
            var $this = $(this),
                src = $this.attr('src');
                // console.log(src)
                $(this).wrap( $("<a/>").addClass('zoombox zgallery1').attr('href', src) )
                // console.log($this)
            // $this.after(a_create);
            // $this.remove();
        })         
        $('.zoombox').zoombox(); 
          
    $('#logbtn').click(function(){
        if(logopened)
        {
            $('#logform').hide('fast');
            $('#logbtn').removeClass('selected');
        }    
        else
        {
            $('#logform').show('fast');
            $('#logbtn').addClass('selected');
        }
        logopened=!logopened;
        return false;
    });
}).click(function(e){
    if(!logopened)
        return;
    e=e||window.event;
    var target=e.target||e.srcElement;
    while(target)
    {
        if(target==$('#logform').get(0))
            return;
        target=target.parentNode;
    }
    $('#logform').hide('fast');
    $('#logbtn').removeClass('selected');
    logopened=false;    
});

$(document).ready(function(){
		$('#topmenu li.sublnk').hover(
		function() {
			$(this).addClass("selected");
			$(this).find('ul').stop(true, true);
			$(this).find('ul').show('fast');
		},
		function() {
			$(this).find('ul').hide('fast');
			$(this).removeClass("selected");
		}
	);
});

$(document).ready(function(){
	var tabContainers = $('#news-arch .tabcont');
		tabContainers.hide().filter(':first').show();
								
		$('#news-arch .tabmenu a').click(function () {
			tabContainers.hide();
			tabContainers.filter(this.hash).show();
			$('#news-arch .tabmenu a').removeClass('selected');
			$(this).addClass('selected');
			return false;
		}).filter(':first').click();
});

function doAddComments2() {
    var a = document.getElementById("dle-comments-form");
    if ("1" == dle_wysiwyg || "2" == dle_wysiwyg) {
        "1" == dle_wysiwyg ? submit_all_data() : tinyMCE.triggerSave();
        var b = "wysiwyg"
    } else b = "";
    if ("" == a.comments.value || "" == a.name.value) return alert(dle_req_field), !1;
    var c = a.question_answer ? a.question_answer.value : "",
        d = a.sec_code ? a.sec_code.value : "",
        e = "undefined" != typeof grecaptcha ? grecaptcha.getResponse() : "",
        g = a.allow_subscribe ? 1 == a.allow_subscribe.checked ? "1" : "0" : "0",
        f = a.mail ? a.mail.value :
        "";
    ShowLoading("");
    $.post(dle_root +
        "engine/ajax/addcomments.php", {
            type: a.type.value,
            post_id: a.post_id.value,
            comments: a.comments.value,
            name: a.name.value,
            mail: a.mail.value,
            editor_mode: b,
            skin: dle_skin,
            sec_code: c,
            recaptcha_response_field: d,
            recaptcha_challenge_field: e,
            allow_subscribe: f,
            active_catalog_school: 1
        },
        function(b) {
            // console.log(b, "#dle-ajax-comments" + a.type.value)
            a.sec_code && (a.sec_code.value = "", reload());
            HideLoading("");
            $("#dle-ajax-comments" + a.type.value).html(b);
            "error" != b && document.getElementById("blind-animation") && ($("html,body").stop().animate({
                scrollTop: $("#dle-ajax-comments" + a.type.value).offset().top - 70
            }, 1100), setTimeout(function() {
                $("#blind-animation").show("blind", {}, 1500)
            }, 1100))
        })
}

$(function(){



        $(".group_type").on("click", function(){
            id = $(this).data("id")
            $(".group_"+id).toggle()
            return false
        })

        $(".csearch select").on("change", function(){
            load_select_custom(this)
        })

        $(".menu_catalog li .show_menu").on("click", function() {
            ul = $(this).nextAll("ul").first()
            ul.toggle()
            if( ul.is(":hidden") )
                $(this).text("+")
            else
                $(this).text("-")
            return false
        })

 
        if( window.js_active_search ) {
            

            $( ".menu_catalog li[data-id='"+js_active_search['type']+"'] ul" ).first().show()
            $( ".menu_catalog li[data-id='"+js_active_search['type']+"'] .show_menu" ).first().text("-")
            for( type in js_active_search['all'] ) {


                $( ".menu_catalog li[data-id='"+js_active_search['type']+"'] li[data-id='"+js_active_search['all'][type]+"'] ul" ).first().show()
                $( ".menu_catalog li[data-id='"+js_active_search['type']+"'] li[data-id='"+js_active_search['all'][type]+"'] .show_menu" ).first().text("-")
                
            }
        }



        // load_select()

        $( "select[data-type='9']" ).on( "change change_active_select", function() {
            c = $("select[data-type='1']").val()

            // $(".csearch .item_block").show()
            $('.csearch .item_block').removeClass("mr90")
            $('.csearch .item_block').removeClass("hide_catalog")

            if( type_active_select[this.value] )
                for( type_select in type_active_select[this.value] )
                    // console.log( "select[data-type='"+type_active_select[this.value][type_select]+"']" )
                    $( "select[data-type='"+type_active_select[this.value][type_select]+"']" ).parents(".item_block").first().addClass("hide_catalog")
                 
            if( country_active_select[c] )
                for( type_select in country_active_select[c] )
                    $( "select[data-type='"+country_active_select[c][type_select]+"']" ).parents(".item_block").first().addClass("hide_catalog")

            marg()
        })

        $( "select[data-type='1']" ).on( "change", function() {
            c = $("select[data-type='9']").val()

            // $(".csearch .item_block").show()
            $('.csearch .item_block').removeClass("mr90")
            $('.csearch .item_block').removeClass("hide_catalog")

            if( type_active_select[c] )
                for( type_select in type_active_select[c] )
                    // console.log( "select[data-type='"+type_active_select[this.value][type_select]+"']" )
                    $( "select[data-type='"+type_active_select[c][type_select]+"']" ).parents(".item_block").first().addClass("hide_catalog")
                
            if( country_active_select[this.value] )
                for( type_select in country_active_select[this.value] )
                    $( "select[data-type='"+country_active_select[this.value][type_select]+"']" ).parents(".item_block").first().addClass("hide_catalog")

            marg()
        })
    })

    function marg() {
        
        var count = 0;
        $('.item_block:not(.hide_catalog)').each(function(){
            if ( count++ % 2 == 1 ) $(this).addClass("mr90")
        })
    }

    function def_select( id ) {

        id.html('<option value="">Выбрать</option>')
    }

    function load_select() {
        
        var csearch = $(".csearch")

        $.post(dle_root+"engine/ajax/groups_custom.php", {action:'load_select_default'}, function(d){
            
            def_select( $("select[name=country]" ,csearch) )

            d = $.parseJSON(d)
            for( type in d ) {
                    // console.log(type, d[type].value )
                if( d[type] )
                    $( "select[data-type='"+type+"']" , csearch ).append( d[type].value ) 
            }
            

            if( window.js_active_search ) {

                for( type in js_active_search['all'] ) {
                    
                    $( "select[data-type='"+type+"'] [value='"+js_active_search['all'][type]+"']" ).attr("selected", "selected")
                    if( type == 9 )
                        $( "select[data-type='"+type+"']").trigger("change_active_select");
                }

                load_select_custom_n('',1);
                js_active_search = ''
            }

            

        } )

        return false

    }


    function load_select_custom(t, l) {

        var csearch = $(".csearch")

        if( !l )
            ShowLoading("")

        $.post(dle_root+"engine/ajax/groups_custom.php", {action:'load_select_custom', form_get_select: csearch.serialize()}, function(d){
            
            // def_select( $("select[name=country]" ,csearch) )
            // console.log(d)
            // console.log(d)
            d = $.parseJSON(d)
            if( $(t).attr("name") == "country" )
                def_select( $("select[name=okrug],select[name=oblast],select[name=city]" ,csearch) )

            if( $(t).attr("name") == "okrug" )
                def_select( $("select[name=oblast],select[name=city]" ,csearch) )

            if( $(t).attr("name") == "oblast" )
                def_select( $("select[name=city]" ,csearch) )

            if( $( "select[name=okrug]" , csearch ).val() == 0 ) {

                def_select( $("select[name=okrug]" ,csearch) ) 
                $( "select[name=okrug]" , csearch ).append( d[6].value ) // ФО
            }

            if( $( "select[name=oblast]" , csearch ).val() == 0 ) {

                def_select( $("select[name=oblast]" ,csearch) )
                $( "select[name=oblast]" , csearch ).append( d[7].value ) // Область/Республика
            }

            if( $( "select[name=city]" , csearch ).val() == 0 ) {
                def_select( $("select[name=city]" ,csearch) )
                $( "select[name=city]" , csearch ).append( d[8].value ) // Город
            }

            search_catalog()

            // $( "select[name=country]" , csearch ).append( d[1].value ) // страны

            // $( "select[name=type_vuz]" , csearch ).append( d[9].value ) //
            

        } )

        return false

    }

    function load_select_custom_n(t, l) {

        var csearch = $(".csearch")

        if( !l )
            ShowLoading("")

        $.post(dle_root+"engine/ajax/groups_custom.php", {action:'load_select_custom', form_get_select: csearch.serialize()}, function(d){
            
            // def_select( $("select[name=country]" ,csearch) )
            // console.log(d)
            // console.log(d)
            d = $.parseJSON(d)
            if( $(t).attr("name") == "country" )
                def_select( $("select[name=okrug],select[name=oblast],select[name=city]" ,csearch) )

            if( $(t).attr("name") == "okrug" )
                def_select( $("select[name=oblast],select[name=city]" ,csearch) )

            if( $(t).attr("name") == "oblast" )
                def_select( $("select[name=city]" ,csearch) )

            if( $( "select[name=okrug]" , csearch ).val() == 0 ) {

                def_select( $("select[name=okrug]" ,csearch) ) 
                $( "select[name=okrug]" , csearch ).append( d[6].value ) // ФО
            }

            if( $( "select[name=oblast]" , csearch ).val() == 0 ) {

                def_select( $("select[name=oblast]" ,csearch) )
                $( "select[name=oblast]" , csearch ).append( d[7].value ) // Область/Республика
            }

            if( $( "select[name=city]" , csearch ).val() == 0 ) {
                def_select( $("select[name=city]" ,csearch) )
                $( "select[name=city]" , csearch ).append( d[8].value ) // Город
            }

            // search_catalog()

            // $( "select[name=country]" , csearch ).append( d[1].value ) // страны

            // $( "select[name=type_vuz]" , csearch ).append( d[9].value ) //
            

        } )

        return false

    }


    function search_catalog() {

        var csearch = $(".csearch")

        par = csearch.serializeArray()

        par.push({'name':'ajax_catalog','value':1})
        

        $.post( location.href, par , function(d){
            $(".content_not_ajax .short-story-block").remove()
            $(".content_not_ajax .navigation").remove()
            $(".content_search_catalog").html(d)
            HideLoading("");
        })
    }