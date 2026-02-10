import {http, HttpResponse} from 'msw'

const mocked = {
    headers: {
        'x-mocked-by': 'msw',
    },
}

export const handlers = [
    http.post('/api/login', async ({request}) => {
        const body = await request.json()
        const {email, password} = body

        console.log(
            '%c[MSW] POST /api/login',
            'color: orange',
            body
        )

        if (email === 'test@test.com' && password === '123456') {
            console.log('body: ' , body)
            return HttpResponse.json(
                {
                    token: 'mock-jwt-token-123',
                    user: {email}
                },
                {
                    status: 200,
                    ...mocked
                }
            )
        }

        return new HttpResponse(null, {status: 401, ...mocked})
    }),

    http.get('/api/me', ({request}) => {
        const auth = request.headers.get('authorization')

        if (!auth) {
            return new HttpResponse(null, {status: 401, ...mocked})
        }

        console.log(
            '%c[MSW] POST /api/me',
            'color: orange'
        )

        return HttpResponse.json(
            {
                id: 1,
                email: 'test@test.com',
                role: 'admin'
            },
            {
                status: 200,
                ...mocked
            }
        )
    }),

    http.post('/api/documents', ({request}) => {
        const auth = request.headers.get('authorization')

        if (!auth) {
            return new HttpResponse(null, {status: 401, ...mocked})
        }

        console.log(
            '%c[MSW] POST /api/documents',
            'color: orange',
        )

        return HttpResponse.json(
            {
                id: 1,
                title: 'Новый документ',
                status: 'created'
            },
            {
                status: 201,
                ...mocked
            }
        )
    })
]
