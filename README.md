# Scaffold

Our Hugo template for the Pirsch blog. See https://pirsch.io/blog.

You can freely use and modify this theme.

## Configuration

### Articles

Each article should resident in its own sub-directory below `content/`. To add a thumbnail, place the image in the articles directory or a sub-directory (like `content/my-article/images/thumbnail.jpg`) and set the `image` attribute. The author and summary can also be added by setting attributes.

```md
---
title: "My Article"
date: 2021-05-21
summary: "My first article."
image: "/my-article/images/thumbnail.jpg"
author: Marvin Blum
draft: false
---

Content goes here...
```

### Favicon

To use a different favicon, place the `favicon.png` inside the `static` directory of your site.

### Texts

To change the title, copyright texts, and copyright URL, set these parameters inside your `config.toml`:

```toml
[params]
    title = "Title"
    copyright = "Copyright"
    url = "https://example.com/"
```

### Navigation

To change the head and footer navigation, place the navigation entries inside your `config.toml`:

```toml
[menu]
    [[menu.main]]
        name = "Website"
        url = "https://example.com/"
        weight = 1
    [[menu.main]]
        name = "GitHub"
        url = "https://github.com/pirsch-analytics/seeker"
        weight = 2
    [[menu.footer]]
        name = "Privacy"
        url = "https://example.com/privacy"
        weight = 1
    [[menu.footer]]
        name = "Legal"
        url = "https://example.com/legal"
        weight = 2
```

### Search

In order for your content to be indexed an searchable, you need to add the following configuration to your `config.toml`:

```toml
[outputFormats.SearchIndex]
baseName = "search"
mediaType = "application/json"

[outputs]
home = ["HTML", "RSS", "SearchIndex"] # "SearchIndex" needs to be added, HTML and RSS are the default
```

### Authors

To add authors, create a directory for each in the `content/authors/<name>/_index.md` directory and enable it by adding the `author` taxonomy in the `config.toml`.

```toml
[taxonomies]
	author = "authors"
```

You can add the name, twitter handle (without the @), and a picture.

```toml
---
name: "Author Name"
picture: "path/to/picture.png"
twitter: "handle"
---
```

## Web Analytics

You can use [Pirsch](https://pirsch.io/) for web analytics be providing the identification code in the `config.toml`:

```toml
[params]
    pirsch = "identification_code"
```

## License

MIT
