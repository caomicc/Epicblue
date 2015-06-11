<?php   defined('C5_EXECUTE') or die(_("Access Denied.")); ?>
<!DOCTYPE html>
<html lang="en">

<head>
<!-- JQuery should not be loaded at all 
	 but the follow code allows jquery to work when logged out
     but the accordian still will not work with this alone
-->
			<script src="<?php echo $this->getThemePath(); ?>/js/jquery.js"></script>
			<link rel="stylesheet" type="text/css" href="<?php echo $this->getThemePath(); ?>/js/jqueryui/jquery-ui.css">
            <link rel="stylesheet" type="text/css" href="<?php echo $this->getThemePath(); ?>/js/jqueryui/jquery-ui.structure.css">
            <link rel="stylesheet" type="text/css" href="<?php echo $this->getThemePath(); ?>/js/jqueryui/jquery-ui.theme.css">          
			<script src="<?php echo $this->getThemePath(); ?>/js/jqueryui/jquery-ui.js"></script>
			<?php
    		//$this->addHeaderItem($html->javascript("jquery.js"));
			//$this->addHeaderItem($html->javascript("jquery-ui.js"));
			//$this->addHeaderItem($html->css("jquery.ui.css"));
			?>
            
            
    <!-- Bootstrap Core CSS -->
    	<link href="<?php echo $this->getThemePath(); ?>/css/bootstrap.css" rel="stylesheet">
        
    <!-- Custom CSS -->
		<link href="<?php echo $this->getThemePath(); ?>/css/integrator.css" rel="stylesheet">
        <link href="<?php echo $this->getThemePath(); ?>/css/akkordeon.css" rel="stylesheet">
        <link href="<?php echo $this->getThemePath(); ?>/css/crumby.css" rel="stylesheet">
        <link href="<?php echo $this->getThemePath(); ?>/css/canvas.css" rel="stylesheet">
        <link href="<?php echo $this->getThemePath(); ?>/css/gsb.css" rel="stylesheet">
        <link href="<?php echo $this->getThemePath(); ?>/css/contacted.css" rel="stylesheet">
        <link href="<?php echo $this->getThemePath(); ?>/css/nav.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic,700italic|Francois+One|Bree+Serif' rel='stylesheet' type='text/css'>
        
        <style type="text/css">
        
        body{margin-top: 0px !important;}
        
        </style>
          <?php Loader::element('header_required')?>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->