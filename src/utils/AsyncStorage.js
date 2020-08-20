import uid from 'uid'

const storage = window.localStorage

export const get = target => new Promise(res => {
  setTimeout(() => {
    let data = storage.getItem(target)
    data = JSON.parse(data)
    res(data)
  }, 1000)
})

export const post = (target, body) => new Promise(res => {
  setTimeout(() => {
    const id = uid()
    const item = { ...body, id }
    let data = storage.getItem(target)
    data = JSON.parse(data)
    if (!data) data = []

    storage.setItem(target, JSON.stringify([ ...data, item ]))
    res(item)
  }, 1000)
})

export const remove = (target, id) => new Promise(res => {
  setTimeout(() => {
    let data = storage.getItem(target)
    data = JSON.parse(data)
    if (!data) data = []

    data = data.filter(item => item.id !== id)
    storage.setItem(target, JSON.stringify(data))
    res(data)
  }, 1000)
})
