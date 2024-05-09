import { ThemeType } from "../types/theme-type";

export const darkTheme: ThemeType = {
  primary: '#0C0C0C',
  secondary: '#6AF1F2',
  three: '#BB9A6C',
  textPrimary: '#FFF',
  textSecondary: '#000'
}


export const lightTheme: ThemeType = {
  primary: '#FFFFFF',
  secondary: '#65C9FF',
  three: '#BB9A6C',
  textPrimary: '#000',
  textSecondary: '#FFF'
}

export function getThemeSaved() {
  return localStorage.getItem('theme') ?? 'light'
}

export function saveTheme(theme: string) {
  localStorage.setItem('theme', theme)
}