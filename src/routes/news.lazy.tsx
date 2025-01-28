import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/news')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/news"!</div>
}
