<?php
/**
 * Custom hooks.
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'remove_admin_bar' ) ) {
	/**
	 * Hide bar for user with email - wptest@elementor.com
	 */
	function remove_admin_bar() {
    if (is_user_logged_in()) {
      $user = wp_get_current_user();
      if ($user->user_email === 'wptest@elementor.com') {
        show_admin_bar(false);
      }
    }
	}
	add_action('after_setup_theme', 'remove_admin_bar');
}
