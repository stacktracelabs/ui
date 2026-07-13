import { readonly, ref } from 'vue'

export type ThemePreference = 'light' | 'dark' | 'system'

const storageKey = 'stacktrace-ui-theme'
const preference = ref<ThemePreference>('system')
const isDark = ref(false)

let initialized = false
let colorSchemeQuery: MediaQueryList | undefined

export function useTheme() {
    initializeTheme()

    return {
        preference: readonly(preference),
        isDark: readonly(isDark),
        setPreference,
    }
}

function initializeTheme(): void {
    if (initialized || typeof window === 'undefined') {
        return
    }

    initialized = true
    colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    preference.value = parsePreference(window.localStorage.getItem(storageKey))
    applyTheme()

    colorSchemeQuery.addEventListener('change', () => {
        if (preference.value === 'system') {
            applyTheme()
        }
    })

    window.addEventListener('storage', event => {
        if (event.key !== storageKey) {
            return
        }

        preference.value = parsePreference(event.newValue)
        applyTheme()
    })
}

function setPreference(value: ThemePreference): void {
    preference.value = value
    window.localStorage.setItem(storageKey, value)
    applyTheme()
}

function applyTheme(): void {
    const dark = preference.value === 'dark'
        || (preference.value === 'system' && Boolean(colorSchemeQuery?.matches))

    isDark.value = dark
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
    document.documentElement.dataset.theme = preference.value
}

function parsePreference(value: string | null): ThemePreference {
    return value === 'light' || value === 'dark' || value === 'system'
        ? value
        : 'system'
}
