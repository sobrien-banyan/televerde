<?php

/*
Plugin Name: Televerde Round Table Block
Version: 1.0.0
Author: Mark Clark && Banyan Labs LLC
Author URI: https://banyanlabs.io
*/

class TeleverdeRoundTableBlock {
  function __construct() {
    add_action('enqueue_block_editor_assets', array($this, 'blockAssets'));
  }

  function blockAssets() {
    wp_enqueue_script('televerdeBlock', plugin_dir_url(__file__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-components', 'wp-block-editor', 'wp-i18n'));
  }
}

$TeleverdeRoundTableBlock = new TeleverdeRoundTableBlock;
