$(document).ready( function() {
	Index.init();
});

var Index = (function(window, $) {
	//var lastScrollTop;
	var content;
	
	var init = function() {
		//lastScrollTop = 0;
		content = ["Mili Pickled Lettuce 182G","Mili Braised Peanuts 170G","Narcissus Pickled Lettuce 198G","Kara Coconut Cream 200ML","Ayam Brand Trim Coconut Milk 200ML","Ayam Brand Coconut Milk 200ML","Ice Cool Cream Style Corn 425G","Gulong Pork Mince With Bean Paste 180G","Lee Kum Kee Light Soy Sauce 500ML","Woh Hup Sup Soy Sauce-Light 640ML","Narcissus Pork Mince w/ Bean Paste 180G","Fairprice Mee Suah 300G","Narcissus Mushrooms Sliced (Pieces & Stems) 425G","Myojo Quick Cup Noodles - Chicken 66G","Myojo Quick Cup Noodles - Curry 73G","Myojo Quick Cup Noodles - Tom Yam 76G","Myojo Quick Cup Noodles - Seafood 69G","Greenland Whole Mushroom 425G","Nongshim Cup Noodles - Kimchi 70G","Nongshim Cup Noodles - Korean Clay Pot Ramyun 70G","Mili Whole Mushrooms 425G","Fairprice Fine Sugar 1KG","Fairprice Coarse Sugar 1KG","Narcissus Whole Mushrooms 425G","Hosen Pineapple Slice 565G","Mili Pineapple Cubes In Heavy Syrup 454G","Fairprice Pickled Lettuce 190G","Fairprice Pickled Cucumber 190G","Delmonte Corn Box - Cream Style 380G","Delmonte Corn Box - Whole Kernel 380G","AAA Bamboo In Chilli Oil 170G","Myojo Big S'pore Curry Bowl Noodle 100G","Wei Chuan Fried Gluten (Granule) In Soy Sauce 170G","Wei Chuan Fried Gluten w P'nuts (Granule) 170G","Mili Pork Luncheon Meat 170G","Ice Cool Pcs & Stems Mushroom 425G","Ice Cool Whole Mushroom 425G","Nongshim Bowl Noodles - Korean Clay Pot Ramyun 117G","Nongshim Bowl Noddles - Spicy Mushroom 117G","Nongshim Bowl Noodles - Kimchi 117G","Hosen Pineapple Cubes In Syrup 565G","Nissin Cup Noodle - Tom Yam Vegetarian 75G","Nissin Cup Noodle - Chilli Crab 75G","Nissin Cup Noodle - Spicy Seafood 75G","Nissin Cup Noodle - Laksa 75G","Nissin Cup Noodle - Tom Yam Seafood 75G","Nissin Cup Noodle - Seafood 75G","Nissin Cup Noodle - Chicken 75G","Nissin Cup Noodle - Mushroom Chicken 75G","Nissin Cup - Prawn 75G","Narcissus Chao San Si 198G","Gulong Chaosansi 198G","Fairprice Boiled Ginko Nuts 397G","Tiger Black Salted Black Soya Beans 370G","Nissin Cup Ndle - Cream Of Chkn 75G","Myojo Instant Noodles - Curry 5S 80G","Knorr Cup Porridge - Chicken & Mushroom 35G","Knorr Cup Porridge - Chicken And Corn 35G","Knorr Cup Porridge - Chicken 35G","Indofood Mi Goreng Hot Fried Noodles - Extra Hot 5S","Indofood Mi Goreng Fried Noodles 5S","Fairprice Instant Noodle - Tom Yam 5S 85G","Fairprice Instant Noodle - Chicken Abalone 5S 85G","Fairprice Instant Noodles - Chicken 5S 85G","Fairprice Instant Noodle - Curry 5S 85G","Fairprice Instant Noodle - Mushroom 5S 85G","Soyjoy Fruit Soy Bar - Raisin Almond 27G","Soyjoy Fruit Soy Bar - Apple 30G","Farmland Tuna & Onion In Polyunsaturated Oil 185G","Farmland Tuna Flake In Polyunsaturated Oil 185G","Farmland Tuna Sandwich In Polyunsaturated Oil 185G","Mili Vegetarian - Mock Abalone 280G","Mili Vegetarian - Lo Han Chai 280G","Mili Vegetarian - Buddha Jump Over The Wall 280G","Mili Vegetarian - Mock Chicken 280G","Mili Vegetarian - Seasoning Mixed Mushroom 280G","Mili Vegetarian - Jin Huang Shuang Bao 280G","Maggi Tomato Ketchup (B) 485G","Farmland Tuna Chunk In Polyunsaturated Oil 185G","Farmland Tuna Chunk In Brine 185G","Knorr Stock Cubes - Chicken 60G","Knorr Stock Cubes - Vegetables 60G","Knorr Stock Cubes - Fish 60G","Knorr Stock Cubes - Beef 60G","Mili Lychees In Heavy Syrup 565G","Campbell's Condensed Soup - Mushroom Potage 305G","Campbell's Creamy Chicken Mushroom 305G","Campbell's Condensed Soup - Cream Of Potato 305G","Campbell's - Cream Of Mushrm W Rstd Garlic 305G","Campbell's Condensed Soup - Borsch 305G","Tiger Brand Salted Soya Bean Paste 370G","Fairprice Plain Flour 1KG","365 Wheat Flour For Cakes & Pastry Making 1Kg","Ice Cool Fruit Cocktail In Syrup 850G","Kelly's Portion Pack - Chicken Lyoner 100G","Kelly's Portion Pack - Beef Pastrami 100G","Kelly's Portion Pack - Luncheon Ham Bacon Bits 100G","Kelly's Portion Pack - Luncheon Ham Picante Pork 100G","Lee Kum Kee Soup Base - Seafood Hot Pot 50G","Lee Kum Kee Sauce - Honey Garlic Spare Ribs 70G","Lee Kum Kee Sauce -Sweet & Sour Pork /Spare Ribs 80G","Lee Kum Kee Sauce - Black Bean Chicken 50G","Lee Kum Kee Sauce - Teriyaki Chicken 72G","Lee Kum Kee Sauce - Fried Cod Fillet 50G","Lee Kum Kee Sauce - Tomato Garlic Prawns 70G","Lee Kum Kee Sauce - Oriental Pork Chop 80G","Lee Kum Kee Sauce - Lemon Chicken 80G","Lee Kum Kee Sauce - Ma Po Tofu 80G","Knorr Stock Cubes No Msg - Chicken 60G","Lee Kum Kee Superior Soy Sauce - Light 500ML","Wai Wai Vermicelli 500G","Prima Taste Sauce - Sweet & Spicy Seafood 80G","Prima Taste Sauce - Sambal Chilli (Asian Chill) 80G","Prima Taste Fragrant Hainanese Chicken Rice 80G","Poppin Microwave Popcorn - Butter Flavour 100G","Knorr Soup Mix - Cream Of Chicken 58G","Knorr Soup - Tiger Lily & Mushroom 43G","Knorr Soup Mix - Seafood 37G","Knorr Soup Mix - Chicken And Mushroom 43G","Knorr Soup Mix - Hot & Sour 62G","Yifon Spicy Golden Mushrooms 170G","Yifon Spicy Nameko Mushroom 170G","Yifon Tea Tree Mushrooms 170G","Prima Taste Paste - Mee Siam Goreng 80G","Myojo Instant Noodles - Vegetarian Mushroom 5S 85G","Myojo Instant Noodles - Chicken Abalone 5S 85G","Myojo Instant Noodles - Chicken Tanmen 5S 85G","Myojo Instant Noodles - Chicken Curry 5S 85G","Myojo Instant Noodles - Shrimp Tanmen 5S 85G","Chng Kee's Kung Bo Sauce 240ML","San Remo Pasta - Penne 500G","San Remo Pasta - Vegeroni Spirals 375G","San Remo Pasta - Elbows 500G","Hunt's Diced Tomato 411G","San Remo Pasta - Instant Spaghetti 500G","San Remo Pasta - Spaghetti 500G","San Remo Pasta - Vermicelli 500G","San Remo Pasta - Angel Hair 500G","San Remo Pasta - Linguine 500G","Myojo Instant Noodles - Korean Kimchi 5S 85G","Myojo Instant Noodles - Mee Goreng 5S 80G","Myojo Instant Noodles - Mee Poh Dry 5S 85G","Myojo Instant Noodles - Ramen Char Mee 5S 85G","Myojo Instant Noodles - Thai Tom Yam 5S 85G","Myojo Instant Noodles - Prawn 5S 85G","Mama Instant Noodles - Shrimp Tom Yam 5S 60G","Mili Pork Luncheon Meat 397G","SIS White Sugar Cubes - Box 454G","Campbell's Instant Soup - Chicken Pasta 69G","Campbell's Instant Soup - Mushroom Pasta 69G","Campbell's Instant Soup - Cream Of Mushroom 21.1G","Campbell's Instant Soup - Cream Of Corn 22G","Campbell's Instant Soup - Cream Of Chicken 22G","Prego Pasta Sauce - Traditional 300G","Prego Pasta Sauce - Cheese & Herbs 300G","Prego Pasta Sauce - Mushroom 300G","Hosen Longan In Syrup 565G","Prego Pasta Sauce - Carbonara Mushroom 300G","Maggi Tom Yam Noodles 5S 83G","Maggi Instant Noodles - Chicken 5S 77G","Maggi Instant Noodles - Assam Laksa 5S 78G","Maggi Instant Noodles - Curry 5S 79G","Maggi Chilli Sauce (B) 500G","Nissin Fns Tepp/Yakisoba 5S 90G","Nissin Tom Yum Mee Goreng5S 85G","Ayam Brand Sardines - Ext Virgin Olive Oil & Chilli 120G","Ayam Brand Sardines - Chilli & Lime Tomato Sauce 120G","Ayam Brand Sardines - In Black Beans 120G","Ayam Brand Sardines - In Teriyaki Sauce 120G","Ayam Brand Sardines - Spring Water 120G","Ayam Brand Sardines - In Tomato Sauce 120G","Ayam Brand Sardines-Ex Virgin Oilve Oil & G P'Corn 120G","Prima Plain Flour 1KG","Nissin Instant Noodles - Garlic Chicken 5S 86G","Nissin Instant Noodles - Spicy Sesame 5S 86G","Nissin Instant Noodles - Chicken 5S 85G","Nissin Instant Noodles - Sesame Oil 5S 85G","Nissin Instant Noodles - Tomyam 5S 85G","Nissin Instant Noodles (W Soup Base) - Prawn 5S 85G","Companion - Assorted Champignon Delights 285G","Companion - Braised Vegetarian Abalone 285G","Companion -Asst Oriental Delights (Lo-Han-Chai) 285G","Companion - Peking Vegetarian Roast Duck 285G","Brahim's Spicy Tamarind Sauce 180G","Brahim's Rendang Sauce 180G","Campbell's Instant Soup-Mushrm Cheese W Croutons 63G","Campbell's Instant Soup - Mushrm Chk W Croutons 63G","Gulong Spiced Pork Cubes 142G","Campbell's New England Clam Chowder 305G","Campbell's Premium Selection - Wild Mushroom 300G","Campbell's Premium Selectn - C'style Mushrm Chk 300G"];
		
		_bindUIEvent();
	},
	
	_bindUIEvent = function() {
		_initXEditable();
		_loadScrollEvents();
	},
	
	_initXEditable = function() {
		$.fn.editable.defaults.mode = 'inline';
		var emptyText = [
				'',
				'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
				'&nbsp;&nbsp;&nbsp;',
				''
		];
		
		$('#mainTableList').find('td').each(function() {
			_loadXEditable($(this));
		});
	},
	
	_loadXEditable = function(elem) {
		elem.find('a[data-type="typeaheadjs"]').editable({
			emptytext: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
			onblur: 'submit',
			typeahead: {
				local: content
			}
		});
		elem.find('a[data-type="text"]').editable({
			emptytext: '&nbsp;&nbsp;&nbsp;',
			onblur: 'submit'
		});
		
		elem.find('a[data-type="typeaheadjs"]').on('save', function(e, params) {
			var checkboxColumn = $(this).parent().siblings(':first');
			var deleteColumn = $(this).parent().siblings(':last');
			
			if (params.newValue != '') {
				checkboxColumn.html('<input class="check" type="checkbox" name="#" value="#">');
				deleteColumn.html('<a class="close"><i class="glyphicon glyphicon-remove"></i></a>');
			}
			else {
				checkboxColumn.empty();
				deleteColumn.empty();
			}
			
			$('.close').unbind('click');
			$('.close').click(function() {
				$(this).parents('tr').remove();
			});
			
			$('.check').unbind('click');
			$('.check').click(function() {
				var descriptionColumn = $(this).parent().siblings(':nth-child(2)');
				var amountColumn = $(this).parent().siblings(':nth-child(3)');
				
				if ($(this).is(':checked')) {
					descriptionColumn.addClass('strikeout');
					amountColumn.addClass('strikeout');
				}
				else {
					descriptionColumn.removeClass('strikeout');
					amountColumn.removeClass('strikeout');
				}
			});
		});
	},
	
	_loadScrollEvents = function() {
		var count = 0;
		setInterval(function(){
			count++;
			if (count > 5) {
				$("#footer").slideUp(); // disappear
			}
		}, 1000);
		
		$(window).scroll(function() {
			var scrollTop = $(this).scrollTop();
			var maxScrollTop = $(document).height() - $(window).height();
			var timeouts = [];
			
			// Load new rows
			if (scrollTop > (0.8 * maxScrollTop)) {
				$('#mainTableList').find('tbody').append(
					'<tr>' +
						'<td class="col-xs-1"></td>' +
						'<td class="col-xs-8"><a href="#" data-type="typeaheadjs"></a></td>' +
						'<td class="col-xs-2"><a href="#" data-type="text"></a></td>' +
						'<td class="col-xs-1"></td>' +
					'</tr>'
				);
			}
			$('#mainTableList').find('tr:last').find('td').each(function() {
				_loadXEditable($(this));
			});
			
			// Show/Hide footer
			if (!$('input[type="text"]').is(":focus")) {
				count = 0;
				$("#footer").slideDown(); // appear
			}
			else {
				$("#footer").slideUp(); // disappear
			}
			//lastScrollTop = scrollTop;
		});
	};
	
	return {
		init: init
	};
})(window, jQuery);
