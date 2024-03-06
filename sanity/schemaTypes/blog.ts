export default {
    name : 'blog',
    type : 'document',
    title : "Blog",
    fields : [
        {
            name : "title",
            type : "string",
            title : "Blog Title",
        },
        {
            name : "slug",
            type : "slug",
            title : "Blog Slug",
            options : {
                source : "title"
            }
        },
        {
            name : "thumbnail",
            type : "image",
            title : "Blog Thumbnail",
        },
        {
            name : "description",
            type : "text",
            title : "Blog Description",
        },
        {
            name : "content",
            type : "array",
            title : "Blog Content",
            of : [
                {
                    type : 'block'
                }
            ]
        },
    ]
}