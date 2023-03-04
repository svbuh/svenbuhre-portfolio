export default {
    name: 'cv',
    type: 'document',
    title: 'CV',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'cvItems',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'cvItem'}]}],
            title: 'CV Items'
        },
    ]
}