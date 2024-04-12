<?php
  /**
   * Register custom post types
   */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'create_post_type' ) ) {
  function create_post_type() {
    register_post_type( 'product', array(
      'label' => __( 'Products', 'twenty-twenty-child' ),
      'labels' => array(
        'name' => __( 'Products', 'twenty-twenty-child' ),
        'singular_name' => __( 'Product', 'twenty-twenty-child' ),
      ),
      'public' => true,
      'show_in_menu' => true, //for development, will be disabled
      'show_in_rest' => true,
      'supports' => array( 'title', 'editor','author','thumbnail', 'custom-fields', 'revisions' ),
      'taxonomies' => array('category'),
    ));
  }

  add_action( 'init', 'create_post_type' );
}
