/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
if(typeof(CKEDITOR) !== 'undefined') {
    CKEDITOR.addStylesSet( 'drupal',
    [
            /* Block Styles */

            // These styles are already available in the "Format" drop-down list, so they are
            // not needed here by default. You may enable them to avoid placing the
            // "Format" drop-down list in the toolbar, maintaining the same features.
            
            { name : 'Paragraph'		, element : 'p' },
            { name : 'Heading 1'		, element : 'h1' },
            { name : 'Heading 2'		, element : 'h2' },
            { name : 'Heading 3'		, element : 'h3' },
            { name : 'Heading 4'		, element : 'h4' },
            { name : 'Heading 5'		, element : 'h5' },
            { name : 'Heading 6'		, element : 'h6' },
            { name : 'Preformatted Text', element : 'pre' },
            { name : 'Address'			, element : 'address' },
            { name : 'Captioning'		, element : 'h3', styles : { 'font-size' : '11px', 'text-align' : 'right' } },
            { name : 'Centered-Caption' , element : 'h3', styles : { 'text-align' : 'center' } },
           

            { name : 'Blue Title'		, element : 'h3', styles : { 'color' : 'Blue' } },
            { name : 'Red Title'		, element : 'h3', styles : { 'color' : 'Red' } },

            /* Inline Styles */

            // These are core styles available as toolbar buttons. You may opt enabling
            // some of them in the "Styles" drop-down list, removing them from the toolbar.
            
            { name : 'Strong'			, element : 'strong', overrides : 'b' },
            { name : 'Emphasis'			, element : 'em'	, overrides : 'i' },
            { name : 'Underline'		, element : 'u' },
            { name : 'Strikethrough'	, element : 'strike' },
            { name : 'Subscript'		, element : 'sub' },
            { name : 'Superscript'		, element : 'sup' },
         

            { name : 'Marker: Yellow'	, element : 'span', styles : { 'background-color' : 'Yellow' } },
            { name : 'Marker: Green'	, element : 'span', styles : { 'background-color' : 'Lime' } },
            { name : 'Marker: black'    , element : 'span', styles : { 'background-color' : 'Black' , 'text-align' : 'right'} },
            { name : 'Big Header'		, element : 'h2', styles : { 'font-size' : '17px' , 'font-weight' : 'bold', 'margin' : '7px 0 5px 7px'} },


            { name : 'Big'				, element : 'big' },
            { name : 'Small'			, element : 'small' },
            { name : 'Typewriter'		, element : 'tt' },

            { name : 'Computer Code'	, element : 'code' },
            { name : 'Keyboard Phrase'	, element : 'kbd' },
            { name : 'Sample Text'		, element : 'samp' },
            { name : 'Variable'			, element : 'var' },

            { name : 'Deleted Text'		, element : 'del' },
            { name : 'Inserted Text'	, element : 'ins' },

            { name : 'Cited Work'		, element : 'cite' },
            { name : 'Inline Quotation'	, element : 'q' },

            { name : 'Language: RTL'	, element : 'span', attributes : { 'dir' : 'rtl' } },
            { name : 'Language: LTR'	, element : 'span', attributes : { 'dir' : 'ltr' } },

            /* Object Styles */

            {
                    name : 'Image on Left',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-right: 5px',
                            'border' : '2',
                            'align' : 'left'
                    }
            },

            {
                    name : 'Image on Right',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-left: 5px',
                            'border' : '2',
                            'align' : 'right'
                    }
            }
    ]);
}