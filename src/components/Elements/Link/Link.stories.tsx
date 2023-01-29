import { Meta, Story } from '@storybook/react'

import { Link } from './Link'

const meta: Meta = {
  title: 'Components/Elements/Link',
  component: Link,
  parameters: {
    controls: { expands: true },
  },
}

export default meta

const Template: Story = (props) => (
  <Link to="/" {...props}>
    Hello
  </Link>
)

export const Default = Template.bind({})
Default.args = {}
