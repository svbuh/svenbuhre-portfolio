export default {
  name: 'cvItem',
  type: 'document',
  title: 'CV Item',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'timePeriod',
      type: 'string',
      title: 'Time Period',
    },
    {
      name: 'jobTitle',
      type: 'string',
      title: 'Job Title',
    },
    {
      name: 'jobDescription',
      type: 'text',
      title: 'Job Description',
    },
  ]
}
