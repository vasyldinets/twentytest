<?php
  /**
   * Register custom post types
   */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'create_posttype' ) ) {
  function create_posttype() {
    register_post_type( 'products', array(
      'label' => __( 'Products', 'twenty-twenty-child' ),
      'labels' => array(
        'name' => __( 'Products', 'twenty-twenty-child' ),
        'singular_name' => __( 'Product', 'twenty-twenty-child' ),
      ),
      'public' => true,
      'show_in_menu' => true, //for development, will be disabled
      'show_in_rest' => true,
    ));
  }

  add_action( 'init', 'create_posttype' );
}
