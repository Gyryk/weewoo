/** @type {import('next').NextConfig} */
const plugins = require('next-compose-plugins')
const images = require('next-optimized-images')
const withImages = require("next-images");

module.exports = plugins([images, withImages], {source: 'pages', output: 'standalone', images: {
    disableStaticImages: true,
    },} )