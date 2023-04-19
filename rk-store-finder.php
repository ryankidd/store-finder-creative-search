<?php
/**
 * Plugin Name:       RK Store Finder
 * Description:       Description
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.0.1
 * Author:            Ryan Kidd
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       rk-store-finder
 * Domain Path:       rk-store-finder
 *
 * @package           rk-store-finder
 */

define('RK_SF_PATH', plugin_dir_path(__FILE__));
define('RK_SF_URL', plugin_dir_url(__FILE__));

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function rk_store_finder_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'rk_store_finder_block_init' );

function enqueue_scripts() {
	// TODO: grab from settings.
	$key = 'AIzaSyA9YSx4ZaRg3VYL1KVUs_T34XqLHtQbgyY';

	wp_enqueue_script('google-maps-api', "https://maps.googleapis.com/maps/api/js?key={$key}&libraries=geometry");
	wp_localize_script('google-maps-api', 'rkStoreFinder', [
		'dataUrl' => RK_SF_URL . 'data',
	]);
}
add_action('wp_enqueue_scripts', 'enqueue_scripts');

