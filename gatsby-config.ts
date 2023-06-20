import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
    siteMetadata: {
        // You can overwrite values here that are used for the SEO component
        // You can also add new values here to query them like usual
        // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/gatsby-config.js
        siteTitle: `Мария Маранте`,
        siteTitleAlt: `Мария Маранте - Клинический Психолог`,
        siteHeadline: `Мария Маранте - Клинический Психолог`,
        siteUrl: `https://mariamarante.com`,
        siteDescription: `Сайт Марии Маранте`,
        siteLanguage: `ru`,
        siteImage: `/banner.jpg`,
        author: `@lonkly`,
    },
    trailingSlash: `never`,
    plugins: [
        {
            resolve: `@lekoarts/gatsby-theme-jodie`,
            // See the theme's README for all available options
            options: {
                navigation: [
                    { name: `Методы`, slug: `/methods` },
                    { name: `Обо мне`, slug: `/about` },
                    { name: `Запросы`, slug: `/requests` },
                    { name: `Образование`, slug: `/education` },
                    { name: `Сертификаты`, slug: `/certificates` },
                    { name: `Консультации`, slug: `/client` },
                ],
                basePath: '/',
                homepageProjectLimit: 0,
                homepagePageLimit: 0,
                mdx: false,
            },
        },
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: `/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `jodie - @lekoarts/gatsby-theme-jodie`,
                short_name: `jodie`,
                description: ` `,
                start_url: `/`,
                background_color: `#ffffff`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#b75e09`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        shouldAnalyseBundle && {
            resolve: `gatsby-plugin-webpack-statoscope`,
            options: {
                saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
                saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
                open: false,
            },
        },
    ].filter(Boolean) as Array<PluginRef>,
}

export default config