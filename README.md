# API-Docs

Welcome to the home of Bandwidth's API documentation! This repo contains the OpenAPI specifications that power Bandwidth's API references and SDKs, and will eventually replace https://github.com/bandwidth/bandwidth.github.io.

## Contribution Guidelines Overview

1) If you're adding a new OpenAPI spec, you will need to change the `docusaurus.config.js` file to both add a new item in the navbar items as well as add the spec as a custom field. You will need to create a new page for the spec under the `./site/src/pages` directory as well.
1) If you're adding a new markdown file and/or markdown directory, make sure to update the `sidebar.js` file in the `./site` directory
1) If your changes should come with a changelog update, make sure to update the changelog file. Otherwise, include the `no-changelog` tag on your PR.

## Docsite Generation

The `./site/package.json` file contains node scripts that let you run dynamic docsite servers locally, as well as build and serve static versions of the site. The commands are as follows:

```sh
cd site
yarn install

npm run start   # run a dynamic site locally

# or
npm run build    # build a static site to the /site/build folder
nmp run serve    # host the static site in the /site/build folder
```

## Adding a New Spec

To add a new spec - there are a few steps that need to be taken:

  1. Add the JSON file to the `./site/specs folder`
  1. In `./site/docusaurus.config.js`, add an import statement for the new spec. Ex.: `const newSpec = fs.readFileSync('./specs/new.json', 'utf-8');`
  1. In `./site/docusaurus.config.js`, add the new spec as a custom field at the bottom of the config. Ex.: `newSpec: JSON.parse(newSpec),`
  1. In `./site/src/pages`, create a `newSpec.tsx` file and populate the needed React RedocStandalone code - recommend copy/pasting from another `{spec}.tsx` file
  1. In `./site/docusaurus.config.js`, add the spec to the Navbar Items object. Ex:
      ```js
      {
        to: 'newSpec-api-reference',    // the title of the .tsx page you created without the file extension
        label: 'Voice'    // The actual title that shows in the navbar
      }
      ```
  1. Run `npm start` or reload the site and you should see the new spec under the API Reference dropdown.


## Components

```sh
.
├── README.md
├── .github
│   ├── actions
│   └── workflows
├── postman
├── site
│   ├── docusaurus.config.js    # config file for the docusaurus site
│   ├── sidebar.js    # TOC for the docs directory
│   ├── blog    # contains markdown blog articles
│   ├── build    # where the static site is generated and served from
│   ├── docs    # contains the API Guides and tutorials
│   ├── redoc-plugin    # the needed index.js file for the redoc-plugin
│   ├── specs    # The source of truth for the docsites. Generally remains empty and is populated during CICD processes
│   ├── specs-source    # Bandwidth's OpenAPI specs in .json format
│   ├── src    # home for individual pages as well as react component and css settings
│   ├── static    # Static files needed for the docsite (images, etc.)
│   └── templates    # any helpful templates for new content
│
│ # Below this comment to be eventually removed from the repo
├── markdown    # to be migrated into the site/docs folder
├── sdk-generation
├── external
└── internal
```

### site

The `./site` directory contains all of the content and configs needed to generate the docsite.

#### docusaurus.config.js

This file defines the configuration for the docusaurus site. It controls the navigation bar, footer, and many other aspects of the site.

#### sidebar.js

This file defines the sidebar for the docs section of the site. Changes here will be reflected in the docs page, essentially this controls the naviagtion for the entirety of the docs section.

The sidebar.js file can be configured to create multiple sidebar groups that can be hidden depending on which documentation is being viewed. Ex. only a sidebar pertaining to messaging can be shown when looking at docs related to messaging. Code ex.:
    
    module.exports = {
      accountSidebar: {
          'Account': [
            'account/structure',
            'account/credentials',
          ],
        },
      numbersSidebar: {
          'Numbers': [
            'numbers/about-numbers'
          ],
        },
        voiceSidebar: {
          'Voice': [
            'voice/about-voice'
          ],
        },
        messagingSidebar: {
          'Messaging': [
            'messaging/about-messaging'
          ],
        },
    };

When looking at `account/structure` in this sidebar config - the user woild only see the other docs under the `Account` object and not anything pertaining to voice/messaging/etc.

#### /src

This directory mostly was autogenerated by docusaurus. The `components/` directory contains docusaurus config, the `css/` contains the css styling, and `pages/` contains the individal page files for the site. Pages can be popualted with React code and linked to using the `docusaurus.config.js` file.

#### /specs-source

This directory contains the unformatted OpenAPI specs. Specifically, this holds the specs before any Redoc custom code is inserted. Teams should add their specs to this directory.

#### /specs

The formatted OpenAPI specs used as the source of truth for the docsite will be placed in this directory. It is intentionally left empty outside of the `_keep` file (which only exists to keep the directory within git).

#### /docs

Markdown documents will be placed in this sub-directories here - depending on which product they apply to. Any content added here will need to be added to the `sidebar.js` folder to make it possible for users to find - otherwise the doc will be inaccessable witout a direct link.

#### /blog

Will be filled out later, but blog files will go in here

#### /templates

Custom templates for any additions that people may need to use.

### Postman

The `./postman` directory contains code and templates to generate our public facing Postman collection. The majority of the collection is generated from our OpenAPI specs, but `resources/postman_scaffold_collection.json` contains templates for Postman tutorials if someone wants to create one.

## Markdown

Docusaurus supports the use of .MDX files - making the use of markdown even more powerful than the previous docsite repositor. This allows us to generate JSX directly in the markdown files that will be rendered nicely in docusaurus. A good resource on the capabilities of MDX in docusaurus can be found [here](https://docusaurus.io/docs/markdown-features).

The Docusaurus flavored markdown also supports setting markdown attributes in the guide - it is recommended to start each `.md` or `.mdx` file with the following:

    ---
    id: docId    <!--the document id - used as a referece in the sidebar.js folder-->
    title: Document Title    <!--Used by Docusaurus to generate the title properly (for SEO)-->
    slug: /docs/{product}/docName    <!--generates the path after the base URL to provide a neat link for sharing-->
    description: description of your document <!--becomes the <meta name="description" content="..."/> and <meta property="og:description" content="..."/> in <head>, used by search engines. If this field is not present, it will default to the first line of the contents.-->
    keywords: <!--Keywords meta tag for the document page, for search engines.-->
      - some
      - keywords

    <!-- Optional Fields -->
    hide_title: false    <!--Whether to hide the title at the top of the doc. By default it is false.-->
    sidebar_label: Document Title    <!--The text shown in the document sidebar and in the next/previous button for this document. If this field is not present, the document's sidebar_label will default to its title.-->
    custom_edit_url: github.com/repo/thisFile.mdx   <!--The URL for editing this document. If this field is not present, the document's edit URL will fall back to editUrl from options fields passed to docusaurus-plugin-content-docs-->
    image: ../../static/img/myImg.png    <!--Cover or thumbnail image that will be used when displaying the link to your post.-->
    ---

### Embedding React Components

MDX supports JSX within the markdown and generates it as React componetns - making possibilites endless.

The below adds a language switcher in line with text in an MDX file:

    This text will be rendered before the language switcher

    import Tabs from '@theme/Tabs';
    import TabItem from '@theme/TabItem';

    <Tabs
      groupId="abc123"
      defaultValue="js"
      values={[
        { label: 'JavaScript', value: 'js', },
        { label: 'Python', value: 'py', },
        { label: 'Java', value: 'java', },
      ]
    }>
    <TabItem value="js">

    ```js
    function helloWorld() {
      console.log('Hello, world!');
    }
    ```

    </TabItem>
    <TabItem value="py">

    ```py {1-2}
    def hello_world():
      print 'Hello, world!'
      # the above code is highlighted!
    ```

    </TabItem>
    <TabItem value="java">

    ```java
    class HelloWorld {
      public static void main(String args[]) {
        System.out.println("Hello, World");
      }
    }
    ```

    </TabItem>
    </Tabs>

    And this text will be rendered after the language switcher


## PR Requirements

### Changelog Rules

Any changes to the `./site/specs` or `./site/docs` directories requires an update to `./site/src/pages/changelog.md`. If updating this isn't relevant, you must add the `no-changelog` label to your PR.

## SDK Generation

The `./sdk-generation` directory contains code and config for our SDK generation that supports our public SDKs. Much like the docsite generation, typically you'll interface with this through NPM commands.

`npm run generate -- -l <LANGUAGE> -s <SPEC>` is the command to generate an SDK. The `-s` flag is optional; not including it will default to the SDK with all APIs. The file `./sdk-generation/bandwidth.zip` will contain the generated code.

| Language | Notes |
|--|--|
| python | |
| ruby | |
| csharp | |
| java | |
| php | PHP >= 7.2
| phpold | Does not have XML support |
| node | Highly recommended to generate with a specified spec |
