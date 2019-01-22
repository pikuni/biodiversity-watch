var timeout         = 1000;
var closetimer		= 0;
var ddmenuitem      = 0;

function bdw_open()
{	bdw_canceltimer();
	bdw_close();
	ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');}

function bdw_close()
{	if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function bdw_timer()
{	closetimer = window.setTimeout(bdw_close, timeout);}

function bdw_canceltimer()
{	if(closetimer)
	{	window.clearTimeout(closetimer);
		closetimer = null;}}

$(document).ready(function()
{	$('#bdw > li').bind('mouseover', bdw_open);
	$('#bdw > li').bind('mouseout',  bdw_timer);});

document.onclick = bdw_close;

//lightbox
$(function(){
$("#bt3").click(function(){
  dialog("Archive","id:bklist","700px","auto","id");
});
});