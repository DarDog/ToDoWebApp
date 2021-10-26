class Quotes {
  constructor(option) {
    this._baseUrl = option.baseUrl;
  }

  getQuoteOfDay() {
    return fetch(`${this._baseUrl}/qotd`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
        .then((res) => {
          return this._getResponseData(res)
        })
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  }
}

export const qutesApi = new Quotes({
  baseUrl: 'https://favqs.com/api/',
})