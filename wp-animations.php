<?php
/*
Plugin name: Wizardy Pagey Animations
Plugin URL: https://www.archtects.co.uk
Description: Wordpress page animations made for sitewizard
Author: Archtects
Author URL: https://www.archtects.co.uk
version: 0.1.0 Alpha
*/

#Adds plugin to menu
if ( !function_exists("wp_animations")) {
    function wp_animations() {
                          //Page Title                 //Menu Title                 //cap var          //Url               //function
        add_options_page( 'Wizardy Pagey Animations', 'Wizardy Pagey Animations', 'manage_options', 'wp_animations_page', 'wp_animations_page' );
    }
}
// Enqueue css and js
function enqueue_animation_code() {
    wp_enqueue_script('javascript-code-animation', '/wp-content/plugins/wizard-pagey-animations/Assets/js/wp-animations.js');
    wp_enqueue_style('style-code-animation', '/wp-content/plugins/wizard-pagey-animations/Assets/css/style.css');
}

//Build backend
if ( !function_exists("wp_animations_page")) {
    function wp_animations_page() {
        echo "<h1>Wizardy Pagey Animations</h1>";
        echo "<div style=\"padding: 10px; width: 100%; max-width: 1200px; background: #eaeaea; box-shadow: 0px 3px 5px #ccc; border-left: 5px solid purple;\">Because of the nature of our templates in order for this to function you need to add <strong><span style=\"color: purple\";>A text field to each subfield in the flex content</span></strong> & then link it in the <strong><span style=\"color: purple\";>\"template_flex_content\" or \"partials/flex\"</span></strong><br />EG: <code>class=\"&lt;?php echo get_sub_field(\"classes\"); ?&gt;\"</code> or hard code them in. The styling can be found inside the plugin folder. Under <strong><span style=\"color: purple\">Assets</span></strong> the scss can be edited to change things more to your personal liking</div>";
        echo "<h2>Class List</h2><ul style=\"padding-left: 10px\">";
        echo "<li><strong>Animate Text:</strong> animate-text</li>";
        echo "<li><strong>Delay Text:</strong> delay-text-selector</li>";
        echo "<li><strong>Image Animation:</strong> image-animate-selector</li>";
        echo "<li><strong>Box Animation:</strong> animate-boxes</li>";
        echo "</ul>";

        
    }
}

// Add links to the Wordpress "Plugins Page"
function plugin_meta_name($links, $file) {
    $plugin = plugin_basename(__FILE__); //gets name of the plugin
        if ($file == $plugin) {
            return array_merge($links, array(sprintf('<a href="options-general.php?page=wp_animations_page">Settings</a> | <a href="https://github.com/Arxhtects/wizardy-pagey-animations" target="_blank">GitHub</a> | <a href="https://www.archtects.co.uk" target="_blank">Portfolio</a>')));
        }
    return $links; //returns the other links ie: Version and name of author with new ones
}

//add actions
add_action('wp_enqueue_scripts', 'enqueue_animation_code');
add_filter('plugin_row_meta', 'plugin_meta_name', 10, 2);
add_action('admin_menu', 'wp_animations');