<?php     defined('C5_EXECUTE') or die(_("Access Denied.")); ?>    

	<!-- JQuery --> 
<nav class="navbar navbar-inverse navbar-static-top">
  	<div class="row">
		<div class="fml">
        <div class="col-xs-12 col-sm-4 col-md-4">
        		   <?php
				   $a = new GlobalArea('Site Logo');
				   $a->display($c);
				   ?>  
        </div>
		<div class="col-xs-12 col-sm-8 col-md-8">
        
       			   <?php
				   $a = new GlobalArea('Header Navigation');
				   $a->display($c);
				   ?>  
        
        </div>
        </div>
  	</div>
    <div class="row" id="midnav">
    	
        <div class="fml">
        <div class="col-md-12" id="midnav2">
        <?php
				   $a = new GlobalArea('Header NavigationTwo');
				   $a->display($c);
				   ?> </div></div>
  	</div>
    <div class="container">
</nav>