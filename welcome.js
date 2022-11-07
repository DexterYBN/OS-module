import os from 'os'
export function sayHi() {
    return `Привет, юзер. Вижу ты зашел с ${os.type()}`
}