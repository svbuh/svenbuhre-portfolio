export default {
    name: 'home',
    type: 'document',
    title: 'Homepage',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'welcomeGreeting',
            type: 'string',
            title: 'Welcome Greeting'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            title: 'Person Descriptions',
            name: 'personDescriptions',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'aboutMe',
            type: 'text',
            title: 'About Me'
        },
    ]
}