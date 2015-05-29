/**
 * Probably scrolling.
 */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/**
 * Toggle/Filter/Reset functions.
 */
 $( "input.checkbox" ).on( "click", function() {
   $(this).siblings('div.full-content').toggleClass('show-task');
   $(this).siblings('div.full-content').toggleClass('hide-task');
});

$(".toggle").click(function(event){
  $(this).toggleClass('read-less');
  $(this).prev('.more').toggleClass('show');
  event.preventDefault();
});

$(".reset").click(function(){
  $('input.checkbox').prop('checked', false);
  $('div.full-content').addClass('hide-task');
  $('div.full-content').removeClass('show-task');
  $("#reset-message").addClass("display").delay(2250).queue(function() {
    $(this).removeClass("display");
    $(this).dequeue();
  });
});

$(".toc li a").click(function(){
  $("#filter-message").addClass("display").delay(1750).queue(function() {
    $(this).removeClass("display");
    $(this).dequeue();
  });
});

/**
 *  @todo need to refactor this to work with the recipes
 */
$(document).ready(function() {
  $('.toc li a').click(function() {
    var ourClass = $(this).attr('class');

    $('.toc li').removeClass('active');
    $(this).parent().addClass('active');

    if(ourClass == 'all') {
      $('.check-list,.tags').children('li').addClass('visible');
    }
    else {
      $('.check-list').children('li:not(.' + ourClass + ')').addClass('hide');
      $('.tags').children('li:not(.' + ourClass + ')').addClass('hide-tags');
      $('.check-list').children('li.' + ourClass).removeClass('hide');
      $('.tags').children('li.' + ourClass).removeClass('hide-tags');
    }
    return false;
  });
});

/**
 * Form handling.
 */
if (!Modernizr.input.placeholder) {
  $('[placeholder]').each(function() {
    var $this = $(this),
      placeholderValue = $this.attr('placeholder');

    if ($this.val() == '') {
      $this.val( placeholderValue );
      $this.addClass('hasPlaceholderText');
    }

    $this.focus(function() {
      if ($this.val() == placeholderValue) {
        $this.val('');
        $this.removeClass('hasPlaceholderText');
      }
    }).blur(function() {
      if ($this.val() == '' || $this.val() == placeholderValue) {
        $this.val(placeholderValue);
        $this.addClass('hasPlaceholderText');
      }
    });

    $this.closest('form').submit(function() {
      if ($this.val() == $this.attr('placeholder')) {
        $this.val('');
      }
    });
  });
}
