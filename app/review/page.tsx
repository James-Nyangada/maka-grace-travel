import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ReviewForm } from './review-form'

export default function ReviewPage() {
  return (
    <>
      <SiteHeader />
      <ReviewForm />
      <SiteFooter />
    </>
  )
}
