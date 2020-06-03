export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5ed7a361019ee7e70abefac9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-v65a59bq',
                  apiId: '48f97484-64fd-4bcf-a178-97eef6a8f280'
                },
                {
                  buildHookId: '5ed7a361a7c8231a94f5c2c9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-47y2aaky',
                  apiId: '56b21b99-9cdc-4325-8432-e66e151dc161'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pablobrandao/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-47y2aaky.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
