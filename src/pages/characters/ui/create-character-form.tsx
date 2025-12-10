import { Form } from '@/widgets/form'

export const CreateCharacterForm = () => {
  const onSubmit = () => {
    console.log('onSubmit')
  }

  return (
    <Form onSubmit={onSubmit}>
      <div>12312</div>
      <div>12312</div>
      <div>12312</div>
      <div>12312</div>
    </Form>
  )
}
