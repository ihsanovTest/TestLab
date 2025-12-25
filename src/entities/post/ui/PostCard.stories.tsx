import type { Meta, StoryObj } from '@storybook/react'
import { PostCard } from './PostCard'

const meta: Meta<typeof PostCard> = {
  title: 'Entities/PostCard',
  component: PostCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PostCard>

export const Default: Story = {
  args: {
    post: {
      id: 1,
      gameTitle: 'Hollow Knight',
      content: 'Это шедевр. Жду Silksong уже 100 лет.',
      likes: 50,
      likedByMe: false,
    },
  },
}

export const LikedByMe: Story = {
  args: {
    post: {
      id: 2,
      gameTitle: 'Elden Ring',
      content: 'Сложно, но оторваться невозможно.',
      likes: 1001,
      likedByMe: true,
    },
  },
}
