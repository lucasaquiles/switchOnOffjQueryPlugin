jQuery.fn.sf = function(options){ 
		
  var opts = jQuery.extend( {}, jQuery.fn.sf.defaults, options );
  
  var jQuerydiv = jQuery("<div/>");
  
  var round = "";

  if(opts.rounded){
     round = "Round";
  }

	jQuery(this).wrap(jQuerydiv);
	jQuery(this).after('<div class="Switch '+round+' Off"><div class="Toggle"></div><span class="On">'+opts.onLabel+'</span> <span class="Off">'+opts.offLabel+'</span></div>');

	$('.Switch').each(function() {

		if ($(this).parent().find('input:checkbox').length){

			$(this).parent().find('input:checkbox').hide();
		}
	});

	jQuery(function(){

		jQuery('.Switch').off().click(function(e){
			console.log(e.currentTarget);
			// Check If Enabled (Has 'On' Class)
			if (jQuery(this).hasClass('On')){
				
				// Try To Find Checkbox Within Parent Div, And Check It
				jQuery(this).parent().find('input:checkbox').attr('checked', true);
				
				// Change Button Style - Remove On Class, Add Off Class
				jQuery(this).removeClass('On').addClass('Off');
				
			} else { // If Button Is Disabled (Has 'Off' Class)
			
				// Try To Find Checkbox Within Parent Div, And Uncheck It
				jQuery(this).parent().find('input:checkbox').attr('checked', false);
				
				// Change Button Style - Remove Off Class, Add On Class
				jQuery(this).removeClass('Off').addClass('On');
				
			}

			
			opts.callback();

			e.preventDefault();
		});
	})
	
	return jQuery(this);
	
		}

	jQuery.fn.sf.defaults = {
		    onLabel: "On",
		    offLabel: "Off",
        	rounded:false,
        	callback:function(){}
	};

