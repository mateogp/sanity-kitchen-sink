export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f56cc0ae319eebce75d7ef2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hfhcdxni',
                  apiId: 'a4a41940-1931-4698-a7f4-553fdbc9da8f'
                },
                {
                  buildHookId: '5f56cc0ae700ee3ca05e9fd1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-u3phqeyg',
                  apiId: 'a4d51de1-3d3a-4e9b-9cbd-6119271beb63'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mateogp/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-u3phqeyg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
