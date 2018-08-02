import Index from '@/components/modules/PageRouter'
const List = resolve => require(['@/components/pages/aiouniya/List'], resolve)
const Detail = resolve => require(['@/components/pages/aiouniya/Detail'], resolve)

const routes = [{
  path: '/aiou',
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
