<?php
  /**
   * Register custom taxonomies
   */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'create_taxonomy' ) ) {
  function create_taxonomy() {
    register_taxonomy( 'category', array('product'), array(
  		'label' => __( 'Categories', 'twenty-twenty-child' ),
  		'labels' => array(
    		'name' => __( 'Categories', 'twenty-twenty-child' ),
    		'singular_name' => __( 'Category', 'twenty-twenty-child' ),
  		),
  		'show_ui' => true, //for development, will be disabled
  		'show_in_rest' => true,
      'query_var' => true,
      'show_admin_column' => true,
    ));
  }

  add_action( 'init', 'create_taxonomy' );
}
