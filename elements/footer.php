<?php    defined('C5_EXECUTE') or die(_("Access Denied.")); ?>
       </div> 
       <footer class="footer">
           
           <div class="accent"><img src="<?php echo $this->getThemePath(); ?>/images/accentfooterbus.png" align="right"></div>
           
           <div class="upper">
           <div class="container">
           <div id="row">
        <div class="col-md-3 col-sm-6 lineup">
        
        	<?php
    		$a = new GlobalArea('FooterAccent');
    		$a->display($c);
			?>  
        </div>
        <div class="col-md-3 col-sm-6 lineup">
        
        	<?php
    		$a = new GlobalArea('FooterAccent1');
    		$a->display($c);
			?>  
        </div>
        <div class="col-md-3 col-sm-6 lineup">
        
        	<?php
    		$a = new GlobalArea('FooterAccent2');
    		$a->display($c);
			?>  
        </div>
        <div class="col-md-3 col-sm-6 lineup">
        
        	<?php
    		$a = new GlobalArea('FooterAccent3');
    		$a->display($c);
			?>  
        </div>
       
        
        
        	</div>   
            </div>
            </div>


           <div class="cr">
           <div class="container">
       <div id="row">
        <div class="col-md-2 col-sm-3 lineup">
        
        	<?php
    		$a = new GlobalArea('FooterAccent5');
    		$a->display($c);
			?>  
        </div>
        <div class="col-md-2 col-sm-3 lineup">
        
        	<?php
    		$a = new GlobalArea('FooterAccent6');
    		$a->display($c);
			?>  
        </div>
        <div class="col-md-2 col-sm-3 lineup">
        
        	<?php
    		$a = new GlobalArea('FooterAccent7');
    		$a->display($c);
			?>  
        </div>
        <div class="col-md-2 col-sm-3 lineup">
        
        	<?php
    		$a = new GlobalArea('FooterAccent8');
    		$a->display($c);
			?>  
        </div>
        <div class="col-md-2 col-sm-3 lineup">
        
        	<?php
    		$a = new GlobalArea('FooterAccent9');
    		$a->display($c);
			?>  
        </div>
        <div class="col-md-2 col-sm-3 lineup">
        
        	<?php
    		$a = new GlobalArea('FooterAccent10');
    		$a->display($c);
			?>  
        </div>
        
        </div>
        	</div>
                       <div class="container">

            <div id="row">
            <div class="col-md-6 col-sm-3 lineup">
            <?php
    		$a = new GlobalArea('End');
    		$a->display($c);
			?>
            </div>
            <div class="col-md-6 col-sm-9 lineup">
<p align="right">
© 2015 MetroWest Regional Transit Authority, Design by <a href="http://www.caomicc.com" id="foots">Caomicc</a></p>
</div>
      </div></div>
               </div></div>
           
           
            
        </footer>

    </div>
    <!-- /.container -->
   	<script src="//www.parsecdn.com/js/parse-1.3.2.min.js"></script>
    <!-- Route jQuery -->
	<script src="<?php echo $this->getThemePath(); ?>/js/routejs/service.js"></script>
    <!-- Bootstrap Core JavaScript -->
    <script src="<?php echo $this->getThemePath(); ?>/js/bootstrap.min.js"></script>
    
<?php Loader::element('footer_required')?></body>

</html>
