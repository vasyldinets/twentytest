<?php
/**
 * Twenty Twenty Child functions and definitions
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

define( 'US_URL', get_template_directory_uri() );

$theme_includes = array(
	'/hooks.php',                			// Load Custom Hooks.
	'/custom-post-type.php',                // Load Custom Post Types.
	'/custom-taxonomy.php',                // Load Custom Taxonomy.
);

foreach ( $theme_includes as $file ) {
	$filepath = locate_template( 'inc' . $file );
	if ( ! $filepath ) {
		trigger_error( sprintf( 'Error locating /inc%s for inclusion', $file ), E_USER_ERROR );
	}
	require_once $filepath;
}
