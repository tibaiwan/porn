import Index from '@/components/modules/PageRouter'
const List = resolve => require(['@/components/pages/demaxiya/List'], resolve)
const Detail = resolve => require(['@/components/pages/demaxiya/Detail'], resolve)

const routes = [{
  path: '/dema',
  component: Index,
  children: [
    {
      path: 'detail',
      component: Detail
    },
    {
      path: 'list',
      component: List
    }
  ]
}]

export default routes
