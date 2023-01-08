import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '@/components/Elements/Button/Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = () => <Button />

export const Default = Template.bind({})
