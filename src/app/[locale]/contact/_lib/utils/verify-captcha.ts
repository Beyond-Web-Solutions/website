export async function verifyCaptcha(token: string) {
  const data = new FormData()

  data.append('response', token)
  data.append('secret', String(process.env.TURNSTILE_SECRET_KEY))

  const response = await fetch(
    `https://challenges.cloudflare.com/turnstile/v0/siteverify`,
    { body: data, method: 'POST' },
  )

  const outcome = await response.json()

  return outcome.success
}
