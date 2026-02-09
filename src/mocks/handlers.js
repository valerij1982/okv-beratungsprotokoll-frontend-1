import {http, HttpResponse} from 'msw'

export const handlers = [
    http.post('/api/login', async ({request}) => {
        const body = await request.json()
        const {email, password} = body

        if (email === 'test@test.com' && password === '123456') {
            console.log('body: ' , body)
            return HttpResponse.json(
                {
                    token: 'mock-jwt-token-123',
                    user: {email}
                }
            )
        }

        return new HttpResponse(null, {status: 401})
    }),

    http.get('/api/me', ({request}) => {
        const auth = request.headers.get('authorization')

        if (!auth) {
            return new HttpResponse(null, {status: 401})
        }

        return HttpResponse.json(
            {
                id: 1,
                email: 'test@test.com',
                role: 'admin'
            }
        )
    }),

    http.post('/api/documents', ({request}) => {
        const auth = request.headers.get('authorization')

        if (!auth) {
            return new HttpResponse(null, {status: 401})
        }

        return HttpResponse.json(
            {
                id: 1,
                title: 'Новый документ',
                status: 'created'
            },
            {status: 201}
        )
    })
]
