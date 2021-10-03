export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6159ed0a39fa29dd7376bff7",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-apehtyc3",
                  apiId: "bac7652e-5f04-4b9e-b76c-910343167902",
                },
                {
                  buildHookId: "6159ed0a19ab3e6aadfde703",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-isjnquer",
                  apiId: "a17a2696-6d48-4d69-93cc-30f322166dea",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/SumanKisku/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-isjnquer.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
