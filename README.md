# Wakanda.io

## Contribute

This website is based on [Jekyll](https://jekyllrb.com/). It is hosted on Github Pages.

> **Note:** push your changes to the `gh-pages` branch in order to publish the website on Github Pages. 

### Setup

#### Install Jekyll

```
$ gem install jekyll bundler
```

#### Run the website

```
$ cd wakanda.io
$ bundle exec jekyll serve
```

> **Note:** Jekyll generates the static site in the `_site` folder.

### Content edition

- to add new entries in the main menu, edit `_data/menu.yml`
- to edit home page content (headlines, paragraphs...), edit `_data/content.yml`

## Release management

- to set a new release (stable and preview versions), edit `js/main.js`:

```
var versionCommunityLink = { 
    stable: "1.1.3",
    preview: "2.0.1"
};
```

Find advanced configuration options in `js/main.js`.

### Layout development 

- to update the main menu layout, edit `_includes/menu.html`
- to update the general layout, edit `_layouts/default.html`
- to update the Wakanda style, edit `_scss_partials/_*.scss` files and `css/main.scss`

### Script configuration

- to configure Google Analytics or similar services, edit `_includes/analytics.html`
- to add synchronous scripts (to be executed after page load), edit `_includes/sync_scripts.html`

> **Note:** once Jekyll is started with `jekyll serve`, it will look for file changes and automatically compile `scss` files to `css`.

### Medias

- find Wakanda logo in different versions in `_img/logo`

### Libraries

The website uses Bootstrap `v4.0.0-alpha.6`.

- to upgrade bootstrap, edit `css/lib/bootstrap/*` files.