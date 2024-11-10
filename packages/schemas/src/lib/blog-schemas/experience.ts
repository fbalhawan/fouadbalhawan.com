import blockContent from "./blockContent";

const experience = {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "index",
            title: "Index",
            type: "number"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "company",
                maxLength: 96
              }
          },
        {
            name: "company",
            title: "Company",
            type: "string"
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent"
        },
        {
            name: "imageSrc",
            title: "Image",
            type: "image",
        },
        {
            name: "bgColor",
            title: "Background Color",
            type: "string"
        },
        {
            name: "skills",
            title: "Skills",
            type: "array",
            of: [
                {
                    type: "string"
                }
            ]
        },
        {
            name: "link",
            title: "Link",
            type: "string"
        },
        {
            name: "padding",
            title: "Padding",
            type: "string"
        }
    ]
};

export default experience;