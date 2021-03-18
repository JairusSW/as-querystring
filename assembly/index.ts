export function qs (url: string): Map<string, string> {

  const query = url.replace('?', '&').split('&')

  query.shift()

  const result: Map<string, string> = new Map<string, string>()

  for (let i = 0; i < query.length; i++) {
    const element = query[i].split('=')
    result.set(element[0], element[1])
  }

  return result

}