import css from '@shikijs/langs/css'
import json from '@shikijs/langs/json'
import php from '@shikijs/langs/php'
import shellscript from '@shikijs/langs/shellscript'
import typescript from '@shikijs/langs/typescript'
import vue from '@shikijs/langs/vue'
import githubDark from '@shikijs/themes/github-dark-default'
import githubLight from '@shikijs/themes/github-light-default'
import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'

type SupportedLanguage = 'css' | 'json' | 'php' | 'shellscript' | 'typescript' | 'vue'

const highlighter = createHighlighterCore({
    themes: [githubLight, githubDark],
    langs: [css, json, php, shellscript, typescript, vue],
    engine: createJavaScriptRegexEngine(),
})

const languageAliases: Record<string, SupportedLanguage> = {
    bash: 'shellscript',
    css: 'css',
    json: 'json',
    php: 'php',
    shell: 'shellscript',
    shellscript: 'shellscript',
    ts: 'typescript',
    typescript: 'typescript',
    vue: 'vue',
}

export async function highlightCode(code: string, language: string): Promise<string> {
    const resolvedLanguage = languageAliases[language]

    if (! resolvedLanguage) {
        return ''
    }

    return (await highlighter).codeToHtml(code, {
        lang: resolvedLanguage,
        themes: {
            light: 'github-light-default',
            dark: 'github-dark-default',
        },
        defaultColor: false,
    })
}
