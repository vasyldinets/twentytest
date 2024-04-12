<?php
  /**
   * Register custom post meta
   */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if (! function_exists('register_product_fields')) {

  function register_product_fields() {

// It was possible to use register_post_meta, but this way we have more parameters and a simpler frontend
  	register_rest_field( 'product', 'price',
  		[
  			'get_callback'    => function( $object, $field_name, $request ) {
  				return get_post_meta( $object['id'], $field_name, true );
  			},
  			'update_callback' => function( $value, $object, $field_name ) {
  				return update_post_meta( $object->ID, $field_name, strip_tags( $value ) );
  			},
  			'schema'          => [
  				'type'        => 'number',
  				'arg_options' => [
  					'sanitize_callback' => function( $value ) {
  						return sanitize_float( $value );
  					},
  					'validate_callback' => function( $value ) {
  						return filter_var($value, FILTER_VALIDATE_FLOAT);
  					},
  				],
  			],
  		]
  	);

    register_rest_field( 'product', 'sale_price',
      [
        'get_callback'    => function( $object, $field_name, $request ) {
          return get_post_meta( $object['id'], $field_name, true );
        },
        'update_callback' => function( $value, $object, $field_name ) {
          return update_post_meta( $object->ID, $field_name, strip_tags( $value ) );
        },
        'schema'          => [
          'type'        => 'number',
          'arg_options' => [
            'sanitize_callback' => function( $value ) {
              return sanitize_float( $value );
            },
            'validate_callback' => function( $value ) {
              return $value ? filter_var($value, FILTER_VALIDATE_FLOAT) : true;
            },
          ],
        ],
      ]
    );

    register_rest_field( 'product', 'is_on_sale',
      [
        'get_callback'    => function( $object, $field_name, $request ) {
          return get_post_meta( $object['id'], $field_name, true );
        },
        'update_callback' => function( $value, $object, $field_name ) {
          return update_post_meta( $object->ID, $field_name, strip_tags( $value ) );
        },
        'schema'          => [
          'type'        => 'boolean',
          'arg_options' => [
            'sanitize_callback' => function( $value ) {
              return rest_sanitize_boolean( $value );
            },
            'validate_callback' => function( $value ) {
              return is_bool($value);
            },
          ],
        ],
      ]
    );

    register_rest_field( 'product', 'youtube_embed_url',
      [
        'get_callback'    => function( $object, $field_name, $request ) {
          return get_post_meta( $object['id'], $field_name, true );
        },
        'update_callback' => function( $value, $object, $field_name ) {
          return update_post_meta( $object->ID, $field_name, strip_tags( $value ) );
        },
        'schema'          => [
          'type'        => 'boolean',
          'arg_options' => [
            'sanitize_callback' => function( $value ) {
              return sanitize_text_field( $value );
            },
            'validate_callback' => function( $value ) {
              return $value ? filter_var($value, FILTER_VALIDATE_URL) : true;
            },
          ],
        ],
      ]
    );
  }

  add_action( 'rest_api_init', 'register_product_fields' );
}

if (! function_exists('sanitize_float')) {
  function sanitize_float( $input ) {
    return filter_var($input, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
  }
}
