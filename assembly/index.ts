export function qs (url: string): Array<Array<string>> {

  const query = url.replace('?', '&').split('&')

  query.shift()

  const result: Array<Array<string>> = []

  for (let i = 0; i < query.length; i++) {
      result.push(query[i].split('='))
  }

  return result

}