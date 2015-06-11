<?php
   $view->inc('elements/header.php');
?>
</head>


<body><div class="<?php echo $c->getPageWrapperClass()?>">
<?php
   $view->inc('elements/nav.php');
	?> 
    <!-- Page Content -->
    <div class="container">
    <div id="announcmentbar">
    <div id="bar">
        <h3>Service Announcements</h3>
        <div id="service">
            Loading service announcements...
        </div>
    </div>
</div>

		<!-- Row -->
        <!-- Page Heading/Breadcrumbs -->
        <div class="row">
            <div class="col-lg-12">
                <?php
  				  $a = new Area('Main');
			      $a->enableGridContainer();
    			  $a->display($c);
				?>
            </div>
        </div>
        <!-- /.row -->

        <!-- Footer -->
<?php
   $view->inc('elements/footer.php');
?>   