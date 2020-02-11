import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
function SEO({ description, lang, meta, keywords, title, image, url }) {
  const metaTitle = title;
  const metaDescription = description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `apple-mobile-web-app-status-bar-style`,
          content: `black-translucent`
        },
        {
          name: `apple-mobile-web-app-title`,
          content: `Quidd`
        },
        {
          name: `apple-mobile-web-app-capable`,
          content: `yes`
        },
        {
          name: `mobile-web-app-capable`,
          content: `yes`
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: image
        },
        {
          property: `og:site_name`,
          content: `quidd.co`
        },
        {
          property: `og:url`,
          content: "quidd.co"
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: "quidd"
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;
