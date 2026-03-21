import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Damiánova zahrádka :3",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: null,
    },
    locale: "en-US",
    baseUrl: "quartz.damiska.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Chakra Petch",
        body: "Roboto",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
  light: "#fdf6ec",        // krémovej background
  lightgray: "#f1e9dd",    // cards
  gray: "#d6cfc4",         // borders
  darkgray: "#6b645c",     // secondary text
  dark: "#2d2a26",         // hlavní text

  secondary: "#3a86ff",    // clean blue accent
  tertiary: "#ff7b54",     // teplej accent

  highlight: "rgba(58, 134, 255, 0.12)",
  textHighlight: "#ffd16688",
},
        darkMode: {
  light: "#0f1117",        // background (hluboká tmavá modro-šedá)
  lightgray: "#1a1d26",    // cards
  gray: "#2a2f3a",         // borders
  darkgray: "#9aa4b2",     // secondary text
  dark: "#e6edf3",         // hlavní text (ne čistě bílej!)

secondary: "#7dd3fc",   // soft blue
tertiary: "#a78bfa",    // soft purple
highlight: "rgba(0, 0, 0, 0.04)",
textHighlight: "#e6b85c66",
},
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      //Plugin.CustomOgImages(),
    ],
  },
}

export default config
