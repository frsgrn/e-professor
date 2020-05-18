import languageObject from '@/language.json'

export default (loc, key) => {
    let locale = loc
    if (!languageObject.messages[locale]) {
        locale = languageObject.fallback
    }
    let message = languageObject.messages[locale][key]
    if (!message) {
        message = languageObject.messages[languageObject.fallback][key]
    }
    if (!message) {
        message = "NOT INCLUDED IN LANG FILE, FIX NOW."
    }
    return message
}