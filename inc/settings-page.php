<?php
/**
 * Setting pages.
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'create_settings_page' ) ) {
  function create_settings_page() {
      add_options_page(
          __( 'Twenty Products Settings', 'wholesome-plugin' ),
          __( 'Twenty Products Settings', 'wholesome-plugin' ),
          'publish_pages', // Enable page for editors
          'twenty_products_settings',
          function() {
            echo '<div id="'.ROOT_ELEMENT_ID.'"></div>';
          },
      );
  }
  add_action( 'admin_menu', 'create_settings_page', 10 );
}
