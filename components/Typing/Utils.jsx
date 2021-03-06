const QUOTE_API_URL = 'http://api.quotable.io/random'

export function quoteAPI() {
    return fetch(QUOTE_API_URL)
      .then(response => response.json())
      .then(data => data.content)
  }

export const loadingState = [
  {
      "letter": "L",
      "class": null
  },
  {
      "letter": "o",
      "class": null
  },
  {
      "letter": "a",
      "class": null
  },
  {
      "letter": "d",
      "class": null
  },
  {
      "letter": "i",
      "class": null
  },
  {
      "letter": "n",
      "class": null
  },
  {
      "letter": "g",
      "class": null
  },
  {
      "letter": ".",
      "class": null
  },
  {
      "letter": ".",
      "class": null
  },
  {
      "letter": ".",
      "class": null
  }
]