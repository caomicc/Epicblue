<?php
namespace Application\Theme\epicblue;
class PageTheme extends \Concrete\Core\Page\Theme\Theme {
	
	 protected $pThemeGridFrameworkHandle = 'bootstrap3';

	 public function registerAssets()
{
    $this->requireAsset('css', 'font-awesome');
    $this->providesAsset('javascript', 'jquery');
    $this->providesAsset('javascript', 'jquery.ui');
	$this->providesAsset('javascript', 'bootstrap/*');
	$this->providesAsset('css', 'bootstrap/*');

}
	}