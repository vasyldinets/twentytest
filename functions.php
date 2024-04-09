<?php
/**
 * Twenty Twenty Child functions and definitions
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

define( 'ROOT_ELEMENT_ID', 'twenty-product-settings' );

$theme_includes = array(
	'/hooks.php',                			// Load Custom Hooks.
	'/custom-post-type.php',                // Load Custom Post Types.
	'/custom-taxonomy.php',                // Load Custom Taxonomies.
	'/settings-page.php',                // Load Settings Pages.
);

foreach ( $theme_includes as $file ) {
	$filepath = locate_template( 'inc' . $file );
	if ( ! $filepath ) {
		trigger_error( sprintf( 'Error locating /inc%s for inclusion', $file ), E_USER_ERROR );
	}
	require_once $filepath;
}
