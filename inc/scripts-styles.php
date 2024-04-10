<?php
/**
 * Include scripts/styles
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'load_admin_scripts' ) ) {
	function load_admin_scripts() {
	  $script_args = include( TCHILD_PATH . '/app/public/scripts.asset.php');
	  wp_enqueue_script(
			'wp-typescript',
			TCHILD_URL . '/app/public/scripts.js',
			$script_args['dependencies'],
			$script_args['version'],
			true
	  );
	}
	add_action( 'admin_enqueue_scripts', 'load_admin_scripts' );
}

if ( ! function_exists('load_admin_styles') ) {
  function load_admin_styles() {
    wp_enqueue_style('wp-components');
  }
  add_action( 'admin_print_styles', 'load_admin_styles' );
}
