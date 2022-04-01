import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Form from './form'

describe('Form Component', () => {
  describe('Ui componets', () => {
    test('show text input', () => {
      const action = jest.fn()
      const { unmount } = render(<Form {...{ action }} />)

      const input = screen.getByPlaceholderText('nombre de usuario')
      expect(input).toBeVisible()
      expect(input).toHaveAttribute('type', 'text')
      unmount()
    })
    test('show password input', () => {
      const action = jest.fn()
      const { unmount } = render(<Form {...{ action }} />)

      const input = screen.getByPlaceholderText('contraseña')
      expect(input).toBeVisible()
      expect(input).toHaveAttribute('type', 'password')
      unmount()
    })
    test('show submit button', () => {
      const action = jest.fn()
      const { unmount } = render(<Form {...{ action }} />)

      const input = screen.getByText('Ingresar')
      expect(input).toBeVisible()
      expect(input).toHaveAttribute('type', 'submit')
      unmount()
    })
  })
  describe('Actions', () => {
    test('submit user and password', () => {
      const action = jest.fn()
      const { unmount } = render(<Form {...{ action }} />)

      const user = 'test-user'
      const pass = 'test-password'
      fireEvent.change(screen.getByPlaceholderText('nombre de usuario'), { target: { value: user } })
      fireEvent.change(screen.getByPlaceholderText('contraseña'), { target: { value: pass } })
      fireEvent.click(screen.getByText('Ingresar'))

      expect(action).toHaveBeenCalledWith(user, pass)
      unmount()
    })
  })
})
